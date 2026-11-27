const dns = require('node:dns').promises;
const net = require('node:net');

function isPrivateIp(ip) {
  if (!ip) return true;
  const clean = ip.replace(/^::ffff:/i, '');
  if (net.isIPv4(clean)) {
    const parts = clean.split('.').map(Number);
    if (parts[0] === 10 || parts[0] === 127 || parts[0] === 0) return true;
    if (parts[0] === 169 && parts[1] === 254) return true;
    if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return true;
    if (parts[0] === 192 && parts[1] === 168) return true;
    if (parts[0] === 100 && parts[1] >= 64 && parts[1] <= 127) return true;
    return false;
  }
  const lower = clean.toLowerCase();
  return lower === '::1' || lower.startsWith('fc') || lower.startsWith('fd') || lower.startsWith('fe80');
}

async function validatePublicUrl(rawUrl) {
  let parsed;
  try {
    parsed = new URL(rawUrl.trim());
  } catch {
    const err = new Error('Malformed URL');
    err.code = 'MALFORMED_URL';
    throw err;
  }
  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
    const err = new Error('Only http(s) URLs allowed');
    err.code = 'BLOCKED_PROTOCOL';
    throw err;
  }
  const host = parsed.hostname.toLowerCase();
  if (!host || host === 'localhost' || host.endsWith('.local') || host.endsWith('.internal')) {
    const err = new Error('Blocked local or private host');
    err.code = 'BLOCKED_PRIVATE';
    throw err;
  }
  if (net.isIP(host)) {
    if (isPrivateIp(host)) {
      const err = new Error('Blocked private IP');
      err.code = 'BLOCKED_PRIVATE';
      throw err;
    }
  } else {
    const records = await dns.lookup(host, { all: true });
    if (!records.length || records.some((r) => isPrivateIp(r.address))) {
      const err = new Error('Blocked private DNS target');
      err.code = 'BLOCKED_PRIVATE';
      throw err;
    }
  }
  return parsed;
}

function decodeHtmlEntities(str) {
  return String(str || '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractMetaContent(html, key) {
  const esc = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const rx1 = new RegExp(`<meta[^>]+(?:property|name)=["']${esc}["'][^>]+content=["']([^"']+)["']`, 'i');
  const rx2 = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${esc}["']`, 'i');
  const m = html.match(rx1) || html.match(rx2);
  return m ? decodeHtmlEntities(m[1]) : '';
}

function extractSlugHintFromUrl(parsed) {
  const host = parsed.hostname.toLowerCase();
  const isShort = /ozip\.me|link\.coupang\.com|coupa\.ng|bit\.ly|me2\.do|naver\.me|han\.gl/.test(host);
  if (isShort) return '';
  const tokens = parsed.pathname
    .split('/')
    .map((s) => decodeURIComponent(s).replace(/[-_]+/g, ' ').trim())
    .filter((s) => s && s.length >= 3 && !/^\d+$/.test(s) && !/^(vp|products|productions|np|search|catalog|p|kr|ko|en|us|item|items|re|view|detail)$/i.test(s));
  const raw = tokens.join(' ').replace(/\b\d{6,}\b/g, '').replace(/\s+/g, ' ').trim();
  if (!raw || /^[a-z0-9]{1,8}$/i.test(raw)) return '';
  return raw;
}

function cleanProductTitle(rawTitle) {
  if (!rawTitle) return '';
  return rawTitle
    .replace(/\s*[:|\-–—]\s*(쿠팡!|쿠팡|오늘의집|네이버\s*쇼핑|스마트스토어|SSG\.COM|G마켓|11번가|IKEA|이케아|무신사|올리브영|YouTube).*$/i, '')
    .replace(/\s*\|\s*.*$/, '')
    .trim();
}

function isGenericStoreTitle(title) {
  return !title
    || /^(쿠팡|오늘의집|네이버|이케아|IKEA|무인양품|MUJI|YouTube)$/i.test(title)
    || /좋은 품질과 합리적인 가격|오직\s*IKEA|홈퍼니싱|로켓배송|국내\s*1등/i.test(title);
}

async function fetchUrlMetadata(rawUrl) {
  const parsed = await validatePublicUrl(rawUrl);
  const slugHint = extractSlugHintFromUrl(parsed);
  const res = await fetch(parsed.toString(), {
    method: 'GET',
    redirect: 'follow',
    signal: AbortSignal.timeout(4500),
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8'
    }
  });
  if (!res.ok) {
    return {
      urlStatus: slugHint ? 'slug_fallback' : `http_${res.status}`,
      host: parsed.hostname,
      title: slugHint,
      description: ''
    };
  }
  const html = (await res.text()).slice(0, 180000);
  const ogTitle = extractMetaContent(html, 'og:title');
  const titleTagMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const rawTitle = ogTitle || (titleTagMatch ? decodeHtmlEntities(titleTagMatch[1]) : '');
  const description = extractMetaContent(html, 'og:description') || extractMetaContent(html, 'description');
  const cleaned = cleanProductTitle(rawTitle);
  const blockedOrGeneric = /access denied|robot|captcha|잠시만|로봇|보안|403 forbidden/i.test(cleaned) || isGenericStoreTitle(cleaned);
  const resolvedTitle = blockedOrGeneric ? slugHint : cleaned;
  return {
    urlStatus: resolvedTitle ? (blockedOrGeneric ? 'slug_fallback' : 'ok') : 'blocked_or_empty',
    host: parsed.hostname,
    title: resolvedTitle,
    description: blockedOrGeneric ? '' : description
  };
}

function isValidYoutubeSeed(seed) {
  const s = String(seed || '').trim();
  if (!s || s.length < 2 || /<[^>]+>/.test(s) || /^https?:\/\//i.test(s)) return false;
  if (/^[\s\p{Emoji}\p{P}\p{S}]+$/u.test(s)) return false;
  const meaningful = s.match(/[가-힣a-zA-Z]{2,}/g) || [];
  return meaningful.length > 0 && !/^(test|admin|localhost|re)$/i.test(meaningful.join(' '));
}

function extractYoutubeVideosFromHtml(html) {
  const marker = 'var ytInitialData = ';
  const idx = html.indexOf(marker);
  if (idx === -1) return [];
  const start = idx + marker.length;
  const end = html.indexOf(';</script>', start);
  if (end === -1) return [];
  try {
    const data = JSON.parse(html.slice(start, end));
    const sections = data?.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents || [];
    const results = [];
    for (const sec of sections) {
      const items = sec?.itemSectionRenderer?.contents || [];
      for (const node of items) {
        const vr = node.videoRenderer;
        if (!vr || !vr.videoId) continue;
        const title = (vr.title?.runs || []).map((r) => r.text).join('').trim();
        const channel = (vr.ownerText?.runs || []).map((r) => r.text).join('').trim();
        const views = vr.shortViewCountText?.simpleText || vr.viewCountText?.simpleText || '';
        const duration = vr.lengthText?.simpleText || '';
        if (!title || !channel) continue;
        const hasCautionCue = /단점|솔직|비추|후회|내돈내산|비교|추천|주의|리뷰/.test(title);
        results.push({
          videoId: vr.videoId,
          title,
          channel,
          views,
          duration,
          hasCautionCue,
          url: `https://www.youtube.com/watch?v=${vr.videoId}`
        });
        if (results.length >= 4) break;
      }
      if (results.length >= 4) break;
    }
    return results;
  } catch {
    return [];
  }
}

async function fetchYoutubeReviewVideos(searchKeyword) {
  if (!isValidYoutubeSeed(searchKeyword)) return [];
  try {
    const q = encodeURIComponent(`${searchKeyword.trim()} 후기 단점 내돈내산`);
    const res = await fetch(`https://www.youtube.com/results?search_query=${q}&hl=ko&gl=KR`, {
      signal: AbortSignal.timeout(3800),
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'Accept-Language': 'ko-KR,ko;q=0.9'
      }
    });
    if (!res.ok) return [];
    const html = await res.text();
    return extractYoutubeVideosFromHtml(html);
  } catch {
    return [];
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const rawUrl = String(body.url || '').trim();
    const rawQuery = String(body.query || '').trim();

    let meta = { urlStatus: 'no_url', host: '', title: '', description: '' };
    if (rawUrl) {
      try {
        meta = await fetchUrlMetadata(rawUrl);
      } catch (err) {
        const statusCodeMap = {
          BLOCKED_PRIVATE: 'blocked_private',
          BLOCKED_PROTOCOL: 'malformed_url',
          MALFORMED_URL: 'malformed_url'
        };
        meta = {
          urlStatus: statusCodeMap[err && err.code] || 'fetch_error',
          host: '',
          title: '',
          description: ''
        };
      }
    }

    const blockSearch = meta.urlStatus === 'blocked_private' || meta.urlStatus === 'malformed_url';
    const searchSeed = blockSearch ? '' : (meta.title || (rawUrl ? '' : rawQuery));
    const youtubeVideos = isValidYoutubeSeed(searchSeed) ? await fetchYoutubeReviewVideos(searchSeed) : [];

    res.status(200).json({
      detectedTitle: meta.title || '',
      descriptionSnippet: meta.description ? meta.description.slice(0, 180) : '',
      host: meta.host || '',
      urlStatus: meta.urlStatus,
      youtubeVideos
    });
  } catch {
    res.status(200).json({
      detectedTitle: '',
      descriptionSnippet: '',
      host: '',
      urlStatus: 'fallback',
      youtubeVideos: []
    });
  }
};
