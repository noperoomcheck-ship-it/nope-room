import {
  QUIZ_QUESTIONS,
  QUIZ_RESULTS,
  TASTE_INSIGHTS,
  SPACE_MBTI_TYPES,
  WISH_CATEGORIES,
  NOPE_TRAIT_RULES,
  ITEM_SWAP_REASONS,
  ITEMS_DB,
  STYLE_MOODS,
  ROOM_TONES,
  TARGET_CATEGORIES,
  HUMAN_SCALE_MODES,
  calcHumanScale,
  QUICK_TIMERS,
  CYCLE_ALARMS,
  MOVE_IN_CHECKLIST,
  HIDDEN_PREP_KITS,
  GAP_STORAGE_ZONES,
  getItemGapHint,
  ROOM_BASE_OPTIONS,
  getRoomBaseRescue,
  ALT_ITEM_MAP,
  RESCUE_PATCH_RULES
} from './data/app-data.js?v=nope89';
import { QUIZ_VISUAL_PHOTOS } from './data/quiz-visuals.js?v=nope89';
import { AFFILIATE_CONFIG } from './data/affiliate-links.js?v=nope89';
import { SUPABASE_CONFIG } from './data/supabase-config.js?v=nope89';
import { ANALYTICS_CONFIG } from './data/analytics-config.js?v=nope89';
import { BRAND_TRENDS } from './data/brand-trends.js?v=nope89';

const KAKAO_LOGO_SVG = `<svg class="share-brand-ico" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.85 5.31 4.63 6.72l-1.08 3.96a.45.45 0 0 0 .67.5l4.6-3.04c.38.04.78.06 1.18.06 5.52 0 10-3.58 10-8s-4.48-8-10-8Z"/></svg>`;
const INSTA_LOGO_SVG = `<svg class="share-brand-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>`;

const STORAGE_KEYS = {
  cycles: 'nope_cycles_v2',
  checklist: 'nope_inspection_v3',
  scale: 'nope_scale_v2',
  roomProfile: 'nope_room_profile_v1',
  roomBase: 'nope_room_base_v1',
  autoItems: 'nope_auto_items_v1',
  wishlist: 'nope_wishlist_v1',
  defenseIds: 'nope_defense_ids_v1',
  account: 'nope_account_v1',
  pwaDismissed: 'nope_pwa_dismissed_v1',
  excludeTraits: 'nope_exclude_traits_v1',
  analytics: 'nope_analytics_v1',
  homeRotation: 'nope_home_rot_v1',
  legalConsent: 'nope_legal_consent_v1',
  feedback: 'nope_feedback_v1'
};

const state = {
  nickname: '',
  quizDepth: 'quick',
  quizIndex: 0,
  quizAnswers: [],
  homePyeong: '4~5평 이하',
  homeTenure: 'monthly',
  homePreAnswers: [],
  homeRotationOffset: 0,
  scannerMode: 'search',
  selectedFilter: '전체',
  selectedVerdict: 'ALL',
  activePassRuleId: '',
  scannerResultTitle: '',
  excludedTraits: new Set(),
  excludeResultsExpanded: false,
  lastExcludedCount: 0,
  matcherStyle: 'ALL',
  matcherTone: 'white-minimal',
  matcherCat: '책상·의자',
  matcherRoomBase: 'clean-white',
  matcherTab: 'items',
  reportTab: 'avoid',
  matcherReturnOrigin: 'search',
  quickRefineCat: '',
  quickRefineFeatures: [],
  scaleHeight: 168,
  scaleMode: 'desk',
  scaleView: 'height',
  gapZone: 'under-bed',
  gapSizeId: 'under-12',
  timerInterval: null,
  timerRemainingSec: 0,
  timerLabel: '',
  timerPaused: false
};

function initAnalytics() {
  const gaId = (ANALYTICS_CONFIG.gaMeasurementId || '').trim();
  if (gaId && !window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', gaId, { send_page_view: true });
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
    document.head.appendChild(s);
  }
  if (ANALYTICS_CONFIG.vercelWebAnalytics && !window.__vaLoaded) {
    window.__vaLoaded = true;
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    const vs = document.createElement('script');
    vs.defer = true;
    vs.src = '/_vercel/insights/script.js';
    document.head.appendChild(vs);
  }
}

function loadAnalyticsStore() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.analytics) || 'null');
    if (raw && typeof raw === 'object') {
      return {
        counts: raw.counts || {},
        searchMisses: raw.searchMisses || {},
        outboundShops: raw.outboundShops || {},
        events: Array.isArray(raw.events) ? raw.events : []
      };
    }
  } catch {
    // ignore storage errors
  }
  return { counts: {}, searchMisses: {}, outboundShops: {}, events: [] };
}

function trackEvent(eventName, params = {}) {
  try {
    if (typeof window.gtag === 'function' && ANALYTICS_CONFIG.gaMeasurementId) {
      window.gtag('event', eventName, params);
    }
    if (typeof window.va === 'function' && ANALYTICS_CONFIG.vercelWebAnalytics) {
      window.va('event', { name: eventName, data: params });
    }
    if (ANALYTICS_CONFIG.localLogEnabled) {
      const store = loadAnalyticsStore();
      store.counts[eventName] = (store.counts[eventName] || 0) + 1;
      if (eventName === 'product_search' && params.mode !== 'db' && params.query) {
        const key = String(params.query).slice(0, 40);
        store.searchMisses[key] = (store.searchMisses[key] || 0) + 1;
      }
      if (eventName === 'outbound_shop_click' && params.shop) {
        store.outboundShops[params.shop] = (store.outboundShops[params.shop] || 0) + 1;
      }
      store.events.unshift({ name: eventName, params, ts: Date.now() });
      store.events = store.events.slice(0, 80);
      localStorage.setItem(STORAGE_KEYS.analytics, JSON.stringify(store));
    }
  } catch {
    // non-fatal telemetry failure
  }
}

window.getNopeMetrics = function () {
  return loadAnalyticsStore();
};

function loadRoomBaseState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.roomBase);
    if (saved && ROOM_BASE_OPTIONS.some((b) => b.id === saved)) {
      state.matcherRoomBase = saved;
    }
  } catch {
    // ignore storage errors
  }
}

function saveRoomBaseState(baseId) {
  try {
    localStorage.setItem(STORAGE_KEYS.roomBase, baseId);
  } catch {
    // ignore storage errors
  }
}

function loadExcludedTraits() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.excludeTraits) || 'null');
    if (Array.isArray(raw)) {
      state.excludedTraits = new Set(raw.filter((id) => NOPE_TRAIT_RULES.some((r) => r.id === id)));
      return;
    }
  } catch {
    // ignore storage errors
  }
  state.excludedTraits = new Set();
}

function saveExcludedTraits() {
  try {
    localStorage.setItem(STORAGE_KEYS.excludeTraits, JSON.stringify([...state.excludedTraits]));
  } catch {
    // ignore storage errors
  }
}

function computeRecommendedTraitIds(ctx = {}) {
  const ids = new Set();
  if (ctx.hasPet || ctx.hasAllergy || ctx.smallWasher || (ctx.dustRisk || 0) >= 24) ids.add('no-wash-fabric');
  if (ctx.isTenant && (ctx.wallMaterial === 'silk' || (ctx.depositRisk || 0) >= 16 || (ctx.targetItems || []).includes('wall_window'))) ids.add('wall-damage');
  if ((ctx.dustRisk || 0) >= 20 || ctx.visualClutterSensitive || (ctx.targetItems || []).includes('hanger')) ids.add('open-dust');
  if (ctx.diySkill === 'none' || ctx.noElevator || ctx.frequentMover) ids.add('heavy-diy');
  if (ctx.heavyDeskLoad || ctx.budgetTier === 'low') ids.add('weak-board');
  if (ctx.isDuplex || ctx.narrowPath || ctx.needsFloorSpace || ctx.isCouple) ids.add('floor-bulky');
  if (ctx.hasMoistureRisk || ctx.needsIndoorDrying || ctx.isGroundFloor) ids.add('rust-suction');
  if ((ctx.targetItems || []).includes('hanger') || ctx.ceilingLow || ctx.worstFear === 'trouble') ids.add('tension-fall');

  if (ids.size === 0) {
    ids.add('wall-damage');
    ids.add('weak-board');
    ids.add('no-wash-fabric');
  }
  return [...ids].slice(0, 5);
}

function getDisplayTraitRules(profileCtx = null) {
  const ctx = profileCtx || loadSavedRoomProfile();
  const ids = (ctx && Array.isArray(ctx.recommendedTraitIds) && ctx.recommendedTraitIds.length)
    ? ctx.recommendedTraitIds
    : (ctx ? computeRecommendedTraitIds(ctx) : NOPE_TRAIT_RULES.slice(0, 5).map((r) => r.id));
  const mergedIds = [...new Set([...ids, ...state.excludedTraits])];
  return mergedIds.map((id) => NOPE_TRAIT_RULES.find((r) => r.id === id)).filter(Boolean);
}

function stripSafeTraitNegations(text) {
  return String(text || '').replace(
    /무타공|타공\s*불필요|타공판|타공\s*없|못질\s*없|전동드릴\s*없|전동드릴\s*있으면\s*\d+분|세탁\s*가능|물세탁\s*가능|분해\s*용이|재조립\s*용이|녹\s*없|녹\s*발생\s*없|녹\s*방지|떨어짐\s*없|꺼짐\s*방지|보강판|와\s*달리|과\s*달리|대비/g,
    ' '
  );
}

function getItemRiskText(item) {
  return [
    item.name,
    item.category,
    item.oneLiner,
    item.checkLine,
    ...(item.chips || []),
    ...(item.checks || []),
    ...(item.cautions || [])
  ].filter(Boolean).join(' ');
}

function itemMatchesTraitRule(item, rule) {
  if (!rule) return false;
  if (item.verdict === 'PASS' && rule.id !== 'open-dust' && rule.id !== 'floor-bulky') {
    return false;
  }
  if (rule.id === 'open-dust' && /커버|도어|가림막/.test(item.name || '')) {
    return false;
  }
  const baseBadgeText = `${item.name || ''} ${item.category || ''} ${(item.chips || []).join(' ')}`;
  if (rule.depositMin && (item.specs?.deposit || 0) >= rule.depositMin && !/무타공|꼭꼬핀|자석/.test(baseBadgeText)) {
    return true;
  }
  const cleanRiskTxt = stripSafeTraitNegations(getItemRiskText(item));
  if (rule.matchRx && rule.matchRx.test(cleanRiskTxt)) return true;
  return false;
}

function toggleExcludeTrait(traitId) {
  let enabled = false;
  if (state.excludedTraits.has(traitId)) {
    state.excludedTraits.delete(traitId);
  } else {
    state.excludedTraits.add(traitId);
    enabled = true;
  }
  trackEvent('exclude_filter_toggle', { trait: traitId, enabled });
  saveExcludedTraits();
  renderExcludeTraitsBars();
  updateSavedProfileBadge();
  if (scannerResults && !scannerResults.classList.contains('hidden')) {
    renderItems();
  }
  if (scannerCompare && !scannerCompare.classList.contains('hidden')) {
    renderCompareView();
  }
}

function renderExcludeTraitsBars() {
  const rules = getDisplayTraitRules();
  const activeCount = state.excludedTraits.size;
  const targets = [
    document.getElementById('scanner-gate-exclude-bar'),
    document.getElementById('exclude-traits-bar')
  ].filter(Boolean);

  targets.forEach((el) => {
    const isResultsBar = el.id === 'exclude-traits-bar';
    if (!rules.length) {
      el.classList.add('hidden');
      return;
    }
    el.classList.remove('hidden');
    const isCompact = isResultsBar && !state.excludeResultsExpanded;
    el.classList.toggle('is-compact', isCompact);

    let statusText = '';
    if (isResultsBar) {
      if (activeCount > 0) {
        statusText = state.lastExcludedCount > 0
          ? `🚫 제외 필터 ${activeCount}개 ON · 이 목록에서 ${state.lastExcludedCount}건 가려짐`
          : `🚫 제외 필터 ${activeCount}개 ON (이 목록 해당 없음)`;
      } else {
        statusText = '피할 특징 제외 필터 OFF (눌러서 켜기)';
      }
    } else {
      statusText = activeCount
        ? `내 방 피할 조건 제외 (${activeCount}개 켜짐 · 검색 시 자동 제외)`
        : '내 방 피할 조건 제외 필터 (검색 시 자동 제외)';
    }

    el.innerHTML = `
      <div class="exclude-bar-head">
        <span class="exclude-bar-title">${statusText}</span>
        <div class="exclude-bar-actions">
          ${activeCount ? `<button type="button" class="exclude-bar-clear">전체 끄기</button>` : ''}
          ${isResultsBar ? `<button type="button" class="exclude-bar-toggle">${state.excludeResultsExpanded ? '접기 ▲' : '조절 ▾'}</button>` : ''}
        </div>
      </div>
      ${isCompact ? '' : `
        <div class="exclude-chips-wrap">
          ${rules.map((r) => {
            const isOn = state.excludedTraits.has(r.id);
            return `<button type="button" class="exclude-chip-btn ${isOn ? 'is-on' : ''}" data-ex-trait="${escapeHtml(r.id)}">${isOn ? '🚫 ' : ''}${escapeHtml(r.shortChip)}</button>`;
          }).join('')}
        </div>
      `}
    `;
    el.querySelectorAll('[data-ex-trait]').forEach((btn) => {
      btn.addEventListener('click', () => toggleExcludeTrait(btn.dataset.exTrait));
    });
    const toggleBtn = el.querySelector('.exclude-bar-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        state.excludeResultsExpanded = !state.excludeResultsExpanded;
        renderExcludeTraitsBars();
      });
    }
    const clearBtn = el.querySelector('.exclude-bar-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.excludedTraits.clear();
        saveExcludedTraits();
        renderExcludeTraitsBars();
        updateSavedProfileBadge();
        if (scannerResults && !scannerResults.classList.contains('hidden')) {
          renderItems();
        }
        if (scannerCompare && !scannerCompare.classList.contains('hidden')) {
          renderCompareView();
        }
      });
    }
  });
}

async function copyTextToClipboard(text, toastMsg = '복사 완료!') {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      throw new Error('Clipboard API unavailable');
    }
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  showToast(toastMsg);
  trackEvent('share_action', { channel: 'copy_link', label: toastMsg });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.add('hidden'), 2400);
}

function playBeep() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    [880, 1174, 1318].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = freq;
      osc.type = 'sine';
      gain.gain.setValueAtTime(0.11, ctx.currentTime + i * 0.16);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.16 + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.16);
      osc.stop(ctx.currentTime + i * 0.16 + 0.15);
    });
  } catch {
    // visual fallback
  }
}

function runViewTransition(updateFn) {
  updateFn();
}

const legalSheetBackdrop = document.getElementById('legal-sheet-backdrop');
const legalSheetPanel = document.getElementById('legal-sheet-panel');
const LEGAL_POLICY_VERSION = '2026-11-28';

function loadLegalConsent() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.legalConsent) || 'null');
    return raw && typeof raw === 'object' ? raw : null;
  } catch {
    return null;
  }
}

function saveLegalConsent(required, marketing = false) {
  const payload = {
    required: Boolean(required),
    marketing: Boolean(marketing),
    version: LEGAL_POLICY_VERSION,
    consentedAt: new Date().toISOString()
  };
  try {
    localStorage.setItem(STORAGE_KEYS.legalConsent, JSON.stringify(payload));
  } catch {
    // ignore storage quota errors
  }
  return payload;
}

function closeLegalSheet() {
  if (legalSheetBackdrop) legalSheetBackdrop.classList.add('hidden');
  syncBodyScrollLock();
}

function renderLegalSheet(activeTab = 'privacy') {
  if (!legalSheetPanel) return;
  const tab = activeTab === 'terms' ? 'terms' : 'privacy';
  const bodyHtml = tab === 'privacy' ? `
    <h4>1. 수집하는 개인정보 항목 및 방법</h4>
    <p><strong>비회원 진단·도구 이용:</strong> 닉네임, 방 크기·거주 형태(월세/전세/자가)·주거 조건, 찜한 가구, 입주점검 메모는 이용자 기기(<code>localStorage</code>)에만 저장되며 외부 서버로 전송되지 않습니다.</p>
    <p><strong>계정 연동(선택):</strong> 카카오·Google 연동 또는 이메일 연결 시 이메일 및 계정 식별자를 동기화 목적으로만 사용합니다.</p>
    <p><strong>이미지 판독(선택):</strong> 첨부한 사진은 브라우저 내 미리보기 및 판독 보조로만 처리하며 서버에 영구 저장하지 않습니다.</p>
    <h4>2. 보유·이용 기간 및 파기</h4>
    <p>앱 내 「내 데이터 전체 삭제 · 동의 철회」 실행 또는 계정 연동 해제 시 즉시 파기합니다.</p>
    <h4>3. 외부 쇼핑몰 이동 및 문의</h4>
    <p>쿠팡·오늘의집·컬리 등 외부 이동 후에는 각 판매처 정책이 적용됩니다. 문의: <strong>nope.room.app@gmail.com</strong></p>
  ` : `
    <h4>1. 서비스 이용 안내</h4>
    <p>NOPE!는 자취방 조건에 맞춘 가구·생활용품 스펙 판독, 치수 가이드, 입주점검 기록 도구를 제공합니다.</p>
    <h4>2. 판독·치수·절약 수치 면책 고지</h4>
    <p>PASS / CHECK / NOPE 판정, 예상 절약 금액, 치수 가이드는 구매 판단을 돕기 위한 <strong>참고 정보</strong>입니다. 실제 상품 규격·하중·시공 조건 및 원상복구 가능 여부는 판매처 최신 정보와 임대차 계약을 우선 확인해 주세요.</p>
    <h4>3. 외부 커머스 및 제휴 고지</h4>
    <p>외부 쇼핑몰의 가격·재고·배송·환불 책임은 각 판매처에 있으며, 제휴 링크 활성화 시 관련 법령에 따라 수수료 안내 문구를 표시합니다.</p>
  `;

  legalSheetPanel.innerHTML = `
    <div class="sheet-grabber" aria-hidden="true"></div>
    <div class="sheet-head" style="margin-bottom:12px;">
      <h2 class="sheet-title" style="margin:2px 0;">약관 및 개인정보 안내</h2>
      <button class="sheet-close" id="close-legal-sheet-btn" type="button" aria-label="닫기">×</button>
    </div>
    <div class="legal-tabs-bar" role="tablist">
      <button type="button" class="legal-tab-btn ${tab === 'privacy' ? 'active' : ''}" data-legal-tab="privacy">개인정보처리방침</button>
      <button type="button" class="legal-tab-btn ${tab === 'terms' ? 'active' : ''}" data-legal-tab="terms">이용약관·고지</button>
    </div>
    <div class="legal-doc-body">${bodyHtml}</div>
    <div class="legal-doc-links">
      <a href="./${tab === 'privacy' ? 'privacy' : 'terms'}.html" target="_blank" rel="noopener noreferrer">전체 페이지로 보기 ↗</a>
      <span class="text-tertiary">시행일 ${LEGAL_POLICY_VERSION}</span>
    </div>
  `;

  document.getElementById('close-legal-sheet-btn').addEventListener('click', closeLegalSheet);
  legalSheetPanel.querySelectorAll('[data-legal-tab]').forEach((btn) => {
    btn.addEventListener('click', () => renderLegalSheet(btn.dataset.legalTab));
  });
}

function openLegalSheet(tab = 'privacy') {
  renderLegalSheet(tab);
  if (legalSheetBackdrop) legalSheetBackdrop.classList.remove('hidden');
  syncBodyScrollLock();
}

if (legalSheetBackdrop) {
  legalSheetBackdrop.addEventListener('click', (e) => {
    if (e.target === legalSheetBackdrop) closeLegalSheet();
  });
}

function clearAllUserDataAndReset() {
  Object.values(STORAGE_KEYS).forEach((key) => {
    try {
      localStorage.removeItem(key);
    } catch {
      // ignore storage errors
    }
  });
  state.nickname = '';
  state.quizIndex = 0;
  state.quizAnswers = [];
  state.homePreAnswers = [];
  state.excludedTraits = new Set();
  state.homeRotationOffset = 0;
  if (nicknameInputEl) nicknameInputEl.value = '';
  updateSavedProfileBadge();
  updateWishlistBadge();
  updateAuthBadge();
  renderExcludeTraitsBars();
  renderScannerProfileNudge();
  renderToneMatcher();
  renderCompareView();
  renderChecklist();
  renderCycleAlarms();
  closeAccountSheet();
  switchTab('home');
  showHomeStage('cover');
  showToast('저장된 데이터와 동의를 모두 삭제했어요');
}

function syncBodyScrollLock() {
  const detailOpen = Boolean(sheetBackdrop && !sheetBackdrop.classList.contains('hidden'));
  const accountOpen = Boolean(accountSheetBackdrop && !accountSheetBackdrop.classList.contains('hidden'));
  const legalOpen = Boolean(legalSheetBackdrop && !legalSheetBackdrop.classList.contains('hidden'));
  document.body.classList.toggle('modal-open', detailOpen || accountOpen || legalOpen);
}

function switchTab(tabName) {
  runViewTransition(() => {
    document.querySelectorAll('.nav-tab').forEach((b) => {
      b.classList.toggle('active', b.dataset.tab === tabName);
    });
    document.querySelectorAll('.tab-panel').forEach((p) => {
      p.classList.toggle('active', p.id === `tab-${tabName}`);
    });
    const topbarActions = document.getElementById('topbar-actions');
    if (topbarActions) {
      topbarActions.classList.toggle('hidden', tabName !== 'scanner');
    }
    if (tabName === 'scanner') {
      renderScannerProfileNudge();
      if (state.scannerMode === 'compare') renderCompareView();
      else if (state.scannerMode === 'matcher') renderToneMatcher();
    } else if (tabName === 'home') {
      updateSavedProfileBadge();
    } else if (tabName === 'my') {
      renderMyPage('main');
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  trackEvent('tab_switch', { tab: tabName });
}

document.querySelectorAll('.nav-tab').forEach((btn) => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

document.querySelectorAll('[data-jump]').forEach((btn) => {
  btn.addEventListener('click', () => switchTab(btn.dataset.jump));
});

// Top NOPE! logo -> return cleanly to Home main cover
document.getElementById('top-home-btn').addEventListener('click', () => {
  clearAnalysisTimers();
  closeDetailSheet();
  switchTab('home');
  showHomeStage('cover');
});

// ---------------- Tab 1: Home & Room Profile Onboarding ----------------
const homeStageCover = document.getElementById('home-stage-cover');
const quizNicknameEl = document.getElementById('quiz-nickname');
const nicknameInputEl = document.getElementById('nickname-input');
const quizRunner = document.getElementById('quiz-runner');
const quizAnalyzingEl = document.getElementById('quiz-analyzing');
const quizTasteEl = document.getElementById('quiz-taste-summary');
const quizResultEl = document.getElementById('quiz-result');
const savedProfileBtn = document.getElementById('saved-profile-btn');

let analysisTimers = [];
function clearAnalysisTimers() {
  analysisTimers.forEach((t) => clearTimeout(t));
  analysisTimers = [];
}

function loadSavedRoomProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.roomProfile);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function initHomeRotationOffset() {
  try {
    const prev = parseInt(localStorage.getItem(STORAGE_KEYS.homeRotation) || '0', 10);
    const next = Number.isFinite(prev) ? (prev + 1) % 120 : 0;
    localStorage.setItem(STORAGE_KEYS.homeRotation, String(next));
    state.homeRotationOffset = next;
  } catch {
    state.homeRotationOffset = 0;
  }
}

function getHomeRotationItems(savedProfile, rotIdx = 0) {
  const activeExcludeRules = [...state.excludedTraits]
    .map((id) => NOPE_TRAIT_RULES.find((r) => r.id === id))
    .filter(Boolean);

  const passPool = ITEMS_DB.filter((it) => {
    if (it.verdict !== 'PASS') return false;
    if (activeExcludeRules.some((r) => itemMatchesTraitRule(it, r))) return false;
    if (savedProfile && getPersonalFitAlerts(it, savedProfile).some((al) => al.tone === 'danger')) return false;
    return true;
  })
    .map((it) => {
      const toneBonus = savedProfile && Array.isArray(it.tones) && it.tones.includes(savedProfile.toneId) ? 6 : 0;
      const creatorBonus = it.creatorPick ? 4 : 0;
      return { item: it, score: surveyFitBonus(it, savedProfile) + toneBonus + creatorBonus };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((x) => x.item);

  const nopePool = ITEMS_DB.filter((it) => {
    if (it.verdict === 'NOPE') return true;
    if (activeExcludeRules.some((r) => itemMatchesTraitRule(it, r))) return true;
    return Boolean(savedProfile && getPersonalFitAlerts(it, savedProfile).some((al) => al.tone === 'danger'));
  })
    .map((it) => {
      const alerts = savedProfile ? getPersonalFitAlerts(it, savedProfile) : [];
      const hasDanger = alerts.some((al) => al.tone === 'danger');
      const matchesEx = activeExcludeRules.some((r) => itemMatchesTraitRule(it, r));
      const score = (it.verdict === 'NOPE' ? 4 : 0) + (hasDanger ? 6 : 0) + (matchesEx ? 5 : 0);
      return { item: it, score, alert: alerts.find((al) => al.tone === 'danger') || alerts[0] || null };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);

  const picked = [];
  const pLen = passPool.length;
  const nLen = nopePool.length;
  for (let i = 0; i < 2; i += 1) {
    if (pLen > 0) {
      const passItem = passPool[(rotIdx * 2 + i) % pLen];
      picked.push({ item: passItem, kind: 'pass', note: passItem.oneLiner || passItem.goodLine || '' });
    }
    if (nLen > 0) {
      const nopeEntry = nopePool[(rotIdx * 2 + i) % nLen];
      const nopeNote = nopeEntry.item.verdict === 'NOPE'
        ? (nopeEntry.item.oneLiner || nopeEntry.item.checkLine || '')
        : (nopeEntry.alert
          ? `${nopeEntry.alert.shortBadge.replace(/^내 방 체크:\s*/, '')} · 대안 보기`
          : (nopeEntry.item.oneLiner || nopeEntry.item.checkLine || ''));
      picked.push({ item: nopeEntry.item, kind: 'nope', note: nopeNote });
    }
  }
  return picked;
}

function renderHomeRotationList(savedProfile) {
  const listEl = document.getElementById('home-rotation-list');
  const titleEl = document.getElementById('home-rot-title');
  if (!listEl) return;
  if (titleEl) {
    const nick = savedProfile && savedProfile.nickname ? `${savedProfile.nickname}님` : '내 방';
    titleEl.textContent = `${nick} 맞춤 · 추천 & 피할 품목`;
  }
  const entries = getHomeRotationItems(savedProfile, state.homeRotationOffset);
  listEl.innerHTML = entries.map(({ item, kind, note }) => `
    <button type="button" class="seed-list-item" data-home-item-id="${escapeHtml(item.id)}">
      <div class="seed-list-main">
        <span class="seed-list-title">${escapeHtml(item.name)}</span>
        <span class="seed-list-sub">${escapeHtml(item.priceTier || '')}${note ? ` · ${escapeHtml(note)}` : ''}</span>
      </div>
      <span class="home-rot-pill ${kind === 'pass' ? 'is-pass' : 'is-nope'}">${kind === 'pass' ? '추천 PASS' : '비추 NOPE!'}</span>
    </button>
  `).join('');

  listEl.querySelectorAll('[data-home-item-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = ITEMS_DB.find((x) => x.id === btn.dataset.homeItemId);
      if (!target) return;
      trackEvent('home_rotation_open', { id: target.id, verdict: target.verdict });
      openDetailSheet(target);
    });
  });
}

function updateSavedProfileBadge() {
  const saved = loadSavedRoomProfile();
  const guestGateEl = document.getElementById('home-guest-gate');
  const savedDashEl = document.getElementById('home-saved-dashboard');
  const hasProfile = Boolean(saved && saved.pyeongLabel);

  if (guestGateEl) guestGateEl.classList.toggle('hidden', hasProfile);
  if (savedDashEl) savedDashEl.classList.toggle('hidden', !hasProfile);

  if (!hasProfile) {
    if (savedProfileBtn) savedProfileBtn.classList.add('hidden');
    return;
  }

  const nick = saved.nickname ? `${saved.nickname}님` : '내 방';
  const excludeCount = state.excludedTraits.size;
  if (savedProfileBtn) {
    savedProfileBtn.innerHTML = `
      <div class="home-profile-banner-meta">
        <strong>${escapeHtml(nick)} · ${escapeHtml(saved.pyeongLabel)} · ${escapeHtml(saved.toneName || '')}</strong>
        <span>${excludeCount ? `제외 필터 ${excludeCount}개 적용 중` : '내 방 조건 저장됨'}</span>
      </div>
      <span class="home-profile-banner-go">리포트 ›</span>
    `;
    savedProfileBtn.classList.remove('hidden');
  }
  renderHomeRotationList(saved);
}

function showHomeStage(stage) {
  if (stage !== 'analyzing') clearAnalysisTimers();
  homeStageCover.classList.toggle('hidden', stage !== 'cover');
  quizNicknameEl.classList.toggle('hidden', stage !== 'nickname');
  quizRunner.classList.toggle('hidden', stage !== 'quiz');
  quizAnalyzingEl.classList.toggle('hidden', stage !== 'analyzing');
  quizTasteEl.classList.toggle('hidden', stage !== 'taste');
  quizResultEl.classList.toggle('hidden', stage !== 'result');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

const nicknameNextBtn = document.getElementById('nickname-next-btn');
const nicknameErrorMsg = document.getElementById('nickname-error-msg');
const quizConsentReq = document.getElementById('quiz-consent-required');
const quizConsentMkt = document.getElementById('quiz-consent-marketing');
const quizConsentBox = document.getElementById('quiz-consent-box');

function syncNicknameNextState() {
  const hasName = Boolean(nicknameInputEl.value.trim());
  const hasConsent = !quizConsentReq || quizConsentReq.checked;
  if (nicknameNextBtn) nicknameNextBtn.disabled = !(hasName && hasConsent);
  if (hasName) {
    nicknameInputEl.classList.remove('is-error');
    if (nicknameErrorMsg) nicknameErrorMsg.classList.add('hidden');
  }
  if (hasConsent && quizConsentBox) {
    quizConsentBox.classList.remove('is-error');
  }
}

function buildHomePreAnswers() {
  const q1 = QUIZ_QUESTIONS.find((q) => q.id === 'q1');
  const pickedSizeOpt = q1 && q1.options.find((o) => o.pyeong === state.homePyeong);
  const sizeAnswer = pickedSizeOpt || { pyeong: state.homePyeong || '4~5평 이하', scores: { spaceStress: 14, dustRisk: 3 } };

  const tenureMap = {
    monthly: {
      label: '월세 (원상복구 필수)',
      contractLabel: '월세 (못질 금지)',
      contractType: 'no-nail',
      isTenant: true,
      scores: { depositRisk: 14, spaceStress: 4 }
    },
    jeonse: {
      label: '전세 · 반전세 (원상복구)',
      contractLabel: '전세 (못질 금지)',
      contractType: 'no-nail',
      isTenant: true,
      scores: { depositRisk: 10, spaceStress: 2 }
    },
    owner: {
      label: '자가 (타공 자유)',
      contractLabel: '자가 (타공 자유)',
      contractType: 'free',
      isOwner: true,
      scores: { depositRisk: 1 }
    }
  };
  const tenureAnswer = tenureMap[state.homeTenure] || tenureMap.monthly;
  return [sizeAnswer, tenureAnswer];
}

function startQuiz(useHomePreselect = true) {
  clearAnalysisTimers();
  state.quizIndex = 0;
  state.quizAnswers = [];
  state.homePreAnswers = useHomePreselect ? buildHomePreAnswers() : [];
  const saved = loadSavedRoomProfile();
  if (saved && saved.nickname && !nicknameInputEl.value) {
    nicknameInputEl.value = saved.nickname;
  }
  const consent = loadLegalConsent();
  if (quizConsentReq) quizConsentReq.checked = Boolean(consent && consent.required);
  if (quizConsentMkt) quizConsentMkt.checked = Boolean(consent && consent.marketing);
  syncNicknameNextState();
  showHomeStage('nickname');
  setTimeout(() => nicknameInputEl.focus(), 80);
}

function confirmNicknameAndStartQuestions() {
  const raw = nicknameInputEl.value.trim();
  if (!raw) {
    nicknameInputEl.classList.add('is-error');
    if (nicknameErrorMsg) nicknameErrorMsg.classList.remove('hidden');
    if (nicknameNextBtn) nicknameNextBtn.disabled = true;
    showToast('닉네임을 먼저 입력해 주세요.');
    nicknameInputEl.focus();
    return;
  }
  if (quizConsentReq && !quizConsentReq.checked) {
    if (quizConsentBox) quizConsentBox.classList.add('is-error');
    showToast('필수 약관 및 개인정보 수집·이용에 동의해 주세요.');
    return;
  }
  saveLegalConsent(true, Boolean(quizConsentMkt && quizConsentMkt.checked));
  state.nickname = raw;
  state.quizIndex = 0;
  state.quizAnswers = [];
  trackEvent('quiz_start', { depth: state.quizDepth });
  showHomeStage('quiz');
  renderQuizStep();
}

nicknameNextBtn.addEventListener('click', confirmNicknameAndStartQuestions);
document.getElementById('nickname-back-btn').addEventListener('click', () => showHomeStage('cover'));
nicknameInputEl.addEventListener('input', syncNicknameNextState);
if (quizConsentReq) quizConsentReq.addEventListener('change', syncNicknameNextState);
nicknameInputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') confirmNicknameAndStartQuestions();
});

document.querySelectorAll('#home-size-pills [data-home-pyeong]').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.homePyeong = btn.dataset.homePyeong;
    document.querySelectorAll('#home-size-pills [data-home-pyeong]').forEach((b) => {
      b.classList.toggle('active', b === btn);
    });
  });
});

document.querySelectorAll('#home-tenure-pills [data-home-tenure]').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.homeTenure = btn.dataset.homeTenure;
    document.querySelectorAll('#home-tenure-pills [data-home-tenure]').forEach((b) => {
      b.classList.toggle('active', b === btn);
    });
  });
});

document.querySelectorAll('.quiz-depth-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.quizDepth = btn.dataset.quizDepth === 'full' ? 'full' : 'quick';
    document.querySelectorAll('.quiz-depth-btn').forEach((b) => {
      b.classList.toggle('active', b === btn);
    });
  });
});

savedProfileBtn.addEventListener('click', () => {
  const saved = loadSavedRoomProfile();
  if (!saved) {
    startQuiz(true);
    return;
  }
  const profile = QUIZ_RESULTS.find((r) => r.id === saved.profileId) || QUIZ_RESULTS[QUIZ_RESULTS.length - 1];
  if (saved.nickname) state.nickname = saved.nickname;
  if (saved.toneId) {
    state.matcherTone = saved.toneId;
    renderToneMatcher();
  }
  const mbtiObj = (saved.mbtiId && SPACE_MBTI_TYPES.find((m) => m.id === saved.mbtiId)) || SPACE_MBTI_TYPES[0];
  renderQuizResultView(
    profile,
    saved.dangerScore,
    saved.pyeongLabel || '6~7평',
    saved.toneName || '화이트 미니멀',
    saved.nickname || '자취러',
    mbtiObj.code,
    saved.secondaryRisks || [],
    saved.dynamicAvoid || null,
    saved.dynamicAlt || null,
    saved.analysisBasis || [],
    saved.estimatedSavedWon || 180000,
    saved.questionCount || 15
  );
});

const runHomeSearch = () => {
  const homeInput = document.getElementById('home-search-input');
  const q = homeInput ? homeInput.value.trim() : '';
  switchTab('scanner');
  setScannerMode('search');
  if (q && searchInput) {
    searchInput.value = q;
    runScannerSearch();
  } else if (searchInput) {
    searchInput.focus();
  }
};
const homeAnalyzeBtn = document.getElementById('home-analyze-btn');
const homeSearchInput = document.getElementById('home-search-input');
if (homeAnalyzeBtn) homeAnalyzeBtn.addEventListener('click', runHomeSearch);
if (homeSearchInput) {
  homeSearchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') runHomeSearch();
  });
}

const homePhotoScanBtn = document.getElementById('home-photo-scan-btn');
if (homePhotoScanBtn) {
  homePhotoScanBtn.addEventListener('click', () => {
    switchTab('scanner');
    setScannerMode('search');
    if (itemImageInput) itemImageInput.click();
  });
}

const homeCompareBtn = document.getElementById('home-compare-btn');
if (homeCompareBtn) {
  homeCompareBtn.addEventListener('click', () => {
    switchTab('scanner');
    setScannerMode('compare');
  });
}

const homeRotRefreshBtn = document.getElementById('home-rot-refresh-btn');
if (homeRotRefreshBtn) {
  homeRotRefreshBtn.addEventListener('click', () => {
    state.homeRotationOffset += 1;
    try {
      localStorage.setItem(STORAGE_KEYS.homeRotation, String(state.homeRotationOffset));
    } catch {
      // ignore storage errors
    }
    const saved = loadSavedRoomProfile();
    if (saved) renderHomeRotationList(saved);
  });
}

const homeRetakeBtn = document.getElementById('home-retake-btn');
if (homeRetakeBtn) {
  homeRetakeBtn.addEventListener('click', () => {
    const guestGateEl = document.getElementById('home-guest-gate');
    const savedDashEl = document.getElementById('home-saved-dashboard');
    if (guestGateEl) guestGateEl.classList.remove('hidden');
    if (savedDashEl) savedDashEl.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
}

document.getElementById('start-quiz-btn').addEventListener('click', () => startQuiz(true));
const coverDirectScanBtn = document.getElementById('cover-direct-scan-btn');
if (coverDirectScanBtn) {
  coverDirectScanBtn.addEventListener('click', () => {
    switchTab('scanner');
    setScannerMode('search');
  });
}

function getFlattenedQuizAnswers() {
  const flat = [...(state.homePreAnswers || [])];
  state.quizAnswers.forEach((entry) => {
    if (Array.isArray(entry)) flat.push(...entry);
    else if (entry) flat.push(entry);
  });
  return flat;
}

function getActiveQuizQuestions() {
  const flat = getFlattenedQuizAnswers();
  const skipPre = state.homePreAnswers && state.homePreAnswers.length > 0;
  return QUIZ_QUESTIONS.filter((q) => {
    if (skipPre && (q.id === 'q1' || q.id === 'q7')) return false;
    if (state.quizDepth === 'quick' && q.quickKeep === false) return false;
    return !q.condition || q.condition(flat);
  });
}

let currentMultiSelected = new Set();

document.getElementById('quiz-back-btn').addEventListener('click', () => {
  if (state.quizIndex === 0) {
    showHomeStage('nickname');
    return;
  }
  state.quizIndex -= 1;
  state.quizAnswers.pop();
  renderQuizStep();
});

document.getElementById('quiz-next-btn').addEventListener('click', () => {
  const activeQs = getActiveQuizQuestions();
  const q = activeQs[state.quizIndex];
  if (!q || !q.multiSelect) return;
  const chosen = [...currentMultiSelected].map((idx) => q.options[idx]).filter(Boolean);
  if (chosen.length === 0) {
    showToast('해당하는 항목을 1개 이상 선택해 주세요.');
    return;
  }
  state.quizAnswers.push(chosen);
  const nextActiveQs = getActiveQuizQuestions();
  if (state.quizIndex + 1 < nextActiveQs.length) {
    state.quizIndex += 1;
    renderQuizStep();
  } else {
    startRoomAnalysisLoading();
  }
});

function renderQuizStep() {
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }
  const activeQs = getActiveQuizQuestions();
  const q = activeQs[state.quizIndex];
  if (!q) {
    startRoomAnalysisLoading();
    return;
  }

  const totalSteps = activeQs.length;
  const stepLabel = `${String(state.quizIndex + 1).padStart(2, '0')} / ${String(totalSteps).padStart(2, '0')}`;
  document.getElementById('quiz-step-text').textContent = stepLabel;
  document.getElementById('quiz-progress-fill').style.width =
    `${((state.quizIndex + 1) / Math.max(1, totalSteps)) * 100}%`;
  const chapterEl = document.getElementById('quiz-chapter-pill');
  if (chapterEl) chapterEl.textContent = q.chapter || `STEP ${state.quizIndex + 1}`;
  document.getElementById('quiz-question-title').textContent = q.title;
  const reasonEl = document.getElementById('quiz-reason-hint');
  if (reasonEl) reasonEl.classList.add('hidden');

  const hintEl = document.getElementById('quiz-multi-hint');
  const nextBtn = document.getElementById('quiz-next-btn');
  currentMultiSelected = new Set();

  if (q.multiSelect) {
    if (hintEl) {
      hintEl.textContent = `복수 선택 가능 · 최대 ${q.maxSelect || 3}개 (고른 뒤 '다음 →' 누르기)`;
      hintEl.classList.remove('hidden');
    }
    if (nextBtn) {
      nextBtn.classList.remove('hidden');
      nextBtn.disabled = true;
    }
  } else {
    if (hintEl) hintEl.classList.add('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');
  }

  const optsWrap = document.getElementById('quiz-options');
  const isVisual = Boolean(q.visualGrid || q.options.some((o) => o.visualKey || o.image));
  optsWrap.classList.add('no-hover-yet');
  optsWrap.classList.toggle('is-visual-grid', isVisual);
  optsWrap.innerHTML = '';

  const unlockHover = (e) => {
    if (e.pointerType !== 'touch') {
      optsWrap.classList.remove('no-hover-yet');
      optsWrap.removeEventListener('pointermove', unlockHover);
    }
  };
  optsWrap.addEventListener('pointermove', unlockHover);

  q.options.forEach((opt, optIdx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    const photoSrc = (opt.visualKey && QUIZ_VISUAL_PHOTOS[opt.visualKey]) || opt.image || '';
    const hasVis = Boolean(photoSrc);
    const classes = ['quiz-option-btn'];
    if (q.multiSelect) classes.push('is-multi');
    if (hasVis) classes.push('is-visual');
    btn.className = classes.join(' ');

    if (hasVis) {
      const thumb = document.createElement('div');
      thumb.className = 'quiz-vis-thumb';
      const img = document.createElement('img');
      img.src = photoSrc;
      img.alt = opt.shortTitle || opt.label;
      img.loading = 'eager';
      img.decoding = 'async';
      thumb.appendChild(img);

      const meta = document.createElement('div');
      meta.className = 'quiz-vis-meta';
      const titleEl = document.createElement('span');
      titleEl.className = 'quiz-vis-title';
      titleEl.textContent = opt.shortTitle || opt.label;
      meta.appendChild(titleEl);

      if (Array.isArray(opt.swatches) && opt.swatches.length) {
        const swRow = document.createElement('div');
        swRow.className = 'quiz-vis-swatches';
        opt.swatches.forEach((hex) => {
          const dot = document.createElement('span');
          dot.className = 'quiz-vis-dot';
          dot.style.backgroundColor = hex;
          swRow.appendChild(dot);
        });
        meta.appendChild(swRow);
      }

      btn.appendChild(thumb);
      btn.appendChild(meta);
    }

    if (q.multiSelect) {
      if (!hasVis) {
        const labelSpan = document.createElement('span');
        labelSpan.textContent = opt.label;
        btn.appendChild(labelSpan);
      }
      const checkSpan = document.createElement('span');
      checkSpan.className = 'quiz-opt-check';
      checkSpan.textContent = '';
      btn.appendChild(checkSpan);

      btn.addEventListener('click', () => {
        btn.blur();
        if (currentMultiSelected.has(optIdx)) {
          currentMultiSelected.delete(optIdx);
          btn.classList.remove('is-selected');
          checkSpan.textContent = '';
        } else {
          if (q.maxSelect && currentMultiSelected.size >= q.maxSelect) {
            showToast(`최대 ${q.maxSelect}개까지 선택할 수 있어요.`);
            return;
          }
          currentMultiSelected.add(optIdx);
          btn.classList.add('is-selected');
          checkSpan.textContent = '✓';
        }
        if (nextBtn) nextBtn.disabled = currentMultiSelected.size === 0;
      });
    } else {
      if (!hasVis) {
        btn.textContent = opt.label;
      }
      btn.addEventListener('click', () => {
        btn.blur();
        state.quizAnswers.push(opt);
        const nextActiveQs = getActiveQuizQuestions();
        if (state.quizIndex + 1 < nextActiveQs.length) {
          state.quizIndex += 1;
          renderQuizStep();
        } else {
          startRoomAnalysisLoading();
        }
      });
    }

    optsWrap.appendChild(btn);
  });
}

function startRoomAnalysisLoading() {
  clearAnalysisTimers();
  showHomeStage('analyzing');

  const flatAnswers = getFlattenedQuizAnswers();
  const nick = state.nickname || '자취러';
  const pyeongAns = flatAnswers.find((a) => a.pyeong);
  const toneAns = flatAnswers.find((a) => a.toneId);
  const tasteAns = flatAnswers.find((a) => a.tasteId);

  const pyeongLabel = pyeongAns ? pyeongAns.pyeong : '원룸';
  const toneName = toneAns ? getToneLabel(toneAns.toneId) : '화이트 · 리넨';
  const tasteLabel = tasteAns && TASTE_INSIGHTS[tasteAns.tasteId] ? TASTE_INSIGHTS[tasteAns.tasteId].label : '인테리어 포인트';

  const titleEl = document.getElementById('analyzing-title');
  const stepEl = document.getElementById('analyzing-step-text');
  const fillEl = document.getElementById('analyzing-progress-fill');
  const s1 = document.getElementById('an-step-1');
  const s2 = document.getElementById('an-step-2');
  const s3 = document.getElementById('an-step-3');

  const setCheckState = (stepIdx) => {
    [s1, s2, s3].forEach((el, idx) => {
      if (!el) return;
      el.classList.toggle('is-done', idx < stepIdx);
      el.classList.toggle('is-active', idx === stepIdx);
    });
  };

  titleEl.textContent = `${nick}님의 자취방을 분석중이에요`;
  stepEl.textContent = `${nick}님이 입력하신 ${pyeongLabel} 조건과 환경 변수를 확인하고 있어요…`;
  fillEl.style.width = '28%';
  setCheckState(0);

  analysisTimers.push(setTimeout(() => {
    stepEl.textContent = `'${toneName}' 무드와 '${tasteLabel}' 취향 조합을 분석 중이에요…`;
    fillEl.style.width = '68%';
    setCheckState(1);
  }, 650));

  analysisTimers.push(setTimeout(() => {
    stepEl.textContent = `${nick}님에게 어울리는 자취생활 팁과 추천템을 정리 중이에요…`;
    fillEl.style.width = '100%';
    setCheckState(2);
  }, 1300));

  analysisTimers.push(setTimeout(() => {
    finalizeRoomAnalysis();
  }, 1980));
}

function getQuizScoreBounds(activeQs = null) {
  const flat = getFlattenedQuizAnswers();
  const qs = activeQs || QUIZ_QUESTIONS.filter((q) => {
    if (state.quizDepth === 'quick' && q.quickKeep === false) return false;
    return !q.condition || q.condition(flat);
  });
  let minPossible = 0;
  let maxPossible = 0;
  qs.forEach((q) => {
    const sums = q.options.map((o) => Object.values(o.scores || {}).reduce((a, b) => a + b, 0));
    if (q.multiSelect) {
      const sorted = [...sums].sort((a, b) => a - b);
      minPossible += sorted[0] || 0;
      const topK = sorted.slice(-(q.maxSelect || 2));
      maxPossible += topK.reduce((a, b) => a + b, 0);
    } else {
      minPossible += Math.min(...sums);
      maxPossible += Math.max(...sums);
    }
  });
  return { minPossible, maxPossible };
}

function computeSpaceMbti({ density, toneId, tasteId }) {
  let id = 'texture';
  if (density === 'minimal' || (tasteId === 'minimal' && density !== 'maximal')) {
    id = 'minimalist';
  } else if (density === 'maximal') {
    id = 'maximal';
  } else if (tasteId === 'moodlight') {
    id = 'lighting';
  } else if (tasteId === 'plant' || toneId === 'sage-terracotta') {
    id = 'green';
  } else if (tasteId === 'tableware' || toneId === 'butter-pastel') {
    id = 'color';
  } else if (toneId === 'steel-modern') {
    id = 'modern';
  }
  return SPACE_MBTI_TYPES.find((m) => m.id === id) || SPACE_MBTI_TYPES[0];
}

function finalizeRoomAnalysis() {
  const totals = { dustRisk: 0, fabricRisk: 0, smellRisk: 0, depositRisk: 0, assemblyRisk: 0, spaceStress: 0 };
  let pyeongLabel = '6~7평';
  let wishId = '';
  let toneId = state.matcherTone || 'white-minimal';
  let tasteId = 'plant';
  let density = 'balanced';
  let contractLabel = '';
  let contractType = '';
  let optionLevel = 'none';
  let budgetTier = 'mid';
  let toolLevel = '';
  let diySkill = '';
  let moveSoon = '';
  let floorMaterial = 'jangpan';
  let wallMaterial = 'silk';
  let floorEnv = 'elev';
  let lightingPref = 'basic';
  let materialPref = 'wood';
  let postureMode = 'desk';
  let worstFear = '';
  let hasPet = false;
  let hasAllergy = false;
  let isCouple = false;
  let isDuplex = false;
  let narrowPath = false;
  let ceilingLow = false;
  let hasFullWindow = false;
  let needsIndoorDrying = false;
  let isGroundFloor = false;
  let noElevator = false;
  let hasMoistureRisk = false;
  let needsInsulation = false;
  let frequentMover = false;
  let smallWasher = false;
  let visualClutterSensitive = false;
  let heavyDeskLoad = false;
  let needsFloorSpace = false;
  let isTenant = false;
  let isOwner = false;
  const activities = [];
  const targetItems = [];

  const flatAnswers = getFlattenedQuizAnswers();
  flatAnswers.forEach((ans) => {
    if (ans.pyeong) pyeongLabel = ans.pyeong;
    if (ans.wishId) wishId = ans.wishId;
    if (ans.toneId) toneId = ans.toneId;
    if (ans.tasteId) tasteId = ans.tasteId;
    if (ans.density) density = ans.density;
    if (ans.contractLabel) contractLabel = ans.contractLabel;
    if (ans.contractType) contractType = ans.contractType;
    if (ans.optionLevel) optionLevel = ans.optionLevel;
    if (ans.budgetTier) budgetTier = ans.budgetTier;
    if (ans.diySkill) {
      diySkill = ans.diySkill;
      toolLevel = ans.diySkill === 'pro' ? 'drill' : (ans.diySkill === 'basic' ? 'hex' : 'none');
    }
    if (ans.toolLevel) toolLevel = ans.toolLevel;
    if (ans.moveSoon) moveSoon = ans.moveSoon;
    if (ans.floorMaterial) floorMaterial = ans.floorMaterial;
    if (ans.wallMaterial) wallMaterial = ans.wallMaterial;
    if (ans.floorEnv) floorEnv = ans.floorEnv;
    if (ans.lightingPref) lightingPref = ans.lightingPref;
    if (ans.materialPref) materialPref = ans.materialPref;
    if (ans.postureMode) postureMode = ans.postureMode;
    if (ans.worstFear) worstFear = ans.worstFear;
    if (ans.hasPet) hasPet = true;
    if (ans.hasAllergy) hasAllergy = true;
    if (ans.isCouple) isCouple = true;
    if (ans.isDuplex) isDuplex = true;
    if (ans.narrowPath) narrowPath = true;
    if (ans.ceilingLow) ceilingLow = true;
    if (ans.hasFullWindow) hasFullWindow = true;
    if (ans.needsIndoorDrying) needsIndoorDrying = true;
    if (ans.isGroundFloor) isGroundFloor = true;
    if (ans.noElevator) noElevator = true;
    if (ans.hasMoistureRisk) hasMoistureRisk = true;
    if (ans.needsInsulation) needsInsulation = true;
    if (ans.frequentMover) { frequentMover = true; moveSoon = 'high'; }
    if (ans.smallWasher) smallWasher = true;
    if (ans.visualClutterSensitive) visualClutterSensitive = true;
    if (ans.heavyDeskLoad) heavyDeskLoad = true;
    if (ans.needsFloorSpace) needsFloorSpace = true;
    if (ans.isTenant) isTenant = true;
    if (ans.isOwner) isOwner = true;
    if (ans.activity && !activities.includes(ans.activity)) activities.push(ans.activity);
    if (ans.targetItem && !targetItems.includes(ans.targetItem)) targetItems.push(ans.targetItem);
    Object.entries(ans.scores || {}).forEach(([k, v]) => {
      totals[k] = (totals[k] || 0) + v;
    });
  });

  if (!wishId) {
    if (tasteId === 'moodlight' || lightingPref === 'mood') wishId = 'moodlight';
    else if (density === 'maximal') wishId = 'storage';
    else if (tasteId === 'minimal' || density === 'minimal') wishId = 'spacious';
    else wishId = 'easycare';
  }
  if (!worstFear) {
    if (totals.depositRisk >= 16) worstFear = 'deposit';
    else if (totals.dustRisk + totals.fabricRisk >= 28) worstFear = 'dust';
    else if (totals.assemblyRisk >= 16) worstFear = 'trouble';
    else worstFear = 'space';
  }

  const preCnt = state.homePreAnswers ? state.homePreAnswers.length : 0;
  const questionCount = (state.quizAnswers.length || getActiveQuizQuestions().length) + preCnt;

  const ctx = {
    pyeongLabel, wishId, toneId, tasteId, density, contractLabel, optionLevel,
    budgetTier, diySkill, floorMaterial, wallMaterial, floorEnv, lightingPref,
    materialPref, postureMode, worstFear, hasPet, hasAllergy, isCouple, isDuplex,
    narrowPath, ceilingLow, hasFullWindow, needsIndoorDrying, isGroundFloor,
    noElevator, hasMoistureRisk, needsInsulation, frequentMover, smallWasher,
    visualClutterSensitive, heavyDeskLoad, needsFloorSpace, isTenant, isOwner,
    activities, targetItems
  };

  const activity = activities.join(' · ') || '재택·휴식';
  const nickname = state.nickname || '자취러';
  const rawSum = Object.values(totals).reduce((a, b) => a + b, 0);
  const { minPossible, maxPossible } = getQuizScoreBounds();
  const normalized = (rawSum - minPossible) / Math.max(1, maxPossible - minPossible);
  const dangerScore = Math.min(96, Math.max(12, Math.round(normalized * 84 + 12)));
  const profile = QUIZ_RESULTS.find((r) => r.condition(totals, ctx)) || QUIZ_RESULTS[QUIZ_RESULTS.length - 1];
  const toneName = getToneLabel(toneId);
  const spaceMbti = computeSpaceMbti({ density, toneId, tasteId });

  const secondaryRisks = [];
  if (hasPet) secondaryRisks.push('반려동물 털·올 뜯김 주의');
  if (hasAllergy) secondaryRisks.push('비염·먼지 축적 주의');
  if (noElevator) secondaryRisks.push('계단 운반 · 대형 가구 주의');
  if (isDuplex) secondaryRisks.push('복층 층고·동선 주의');
  if (narrowPath) secondaryRisks.push('통로 60cm 미만 협소');
  if (hasMoistureRisk || needsIndoorDrying) secondaryRisks.push('결로·실내건조 습기 주의');
  if (wallMaterial === 'silk' && isTenant) secondaryRisks.push('실크벽지 테이프 뜯김 주의');
  if (floorMaterial === 'jangpan' && isTenant) secondaryRisks.push('장판 열변색·찍힘 주의');
  if (smallWasher) secondaryRisks.push('9kg 이하 세탁 한계');
  if (heavyDeskLoad) secondaryRisks.push('모니터암 상판 하중 체크');

  const analysisBasis = [
    pyeongLabel,
    contractLabel || (isOwner ? '자가' : '전월세'),
    wallMaterial === 'silk' ? '실크벽지' : (wallMaterial === 'paper' ? '합지벽지' : ''),
    floorMaterial === 'jangpan' ? '장판 바닥' : (floorMaterial === 'wood' ? '마루 바닥' : ''),
    hasPet ? '반려동물' : (hasAllergy ? '비염·알러지' : (isCouple ? '2인 거주' : '')),
    noElevator ? '엘리베이터 없음' : '',
    smallWasher ? '9kg 이하 세탁기' : '',
    heavyDeskLoad ? '모니터암 사용' : '',
    diySkill === 'none' ? '드라이버 없음' : ''
  ].filter(Boolean).slice(0, 7);

  const estimatedSavedWon = Math.round(
    (90000 + (isTenant ? 70000 : 20000) + (hasPet || hasAllergy ? 45000 : 0) + (heavyDeskLoad ? 55000 : 0) + (noElevator ? 40000 : 0) + (targetItems.length * 15000)) / 10000
  ) * 10000;

  const avoidSet = new Set(profile.avoidItems || []);
  const altSet = new Set(profile.altItems || []);
  if (hasPet || hasAllergy) {
    avoidSet.add('장모 샤기 러그');
    avoidSet.add('부클레 패브릭 소파');
    altSet.add('단모 워셔블 러그');
    altSet.add('이케아 클리판/쇠데르함');
  }
  if (isTenant && (wallMaterial === 'silk' || targetItems.includes('wall_window') || totals.depositRisk >= 16)) {
    avoidSet.add('점착식 시트지 벽지');
    avoidSet.add('3M 코맨드(실크벽지)');
    altSet.add('꼭꼬핀 쉬폰 커튼');
    altSet.add('스텐304 압축 욕실선반');
  }
  if (targetItems.includes('hanger')) {
    avoidSet.add('무타공 압축봉 행거');
    altSet.add('도어형 옷장');
  }
  if (isDuplex || narrowPath || needsFloorSpace || isCouple) {
    avoidSet.add('스탠드 전신거울');
    altSet.add('도어후크 거울');
  }
  if (noElevator || frequentMover) {
    avoidSet.add('이케아 말름·브림네스');
    altSet.add('무인양품 PP 서랍');
  }
  if (heavyDeskLoad || (targetItems.includes('desk') && budgetTier === 'low')) {
    avoidSet.add('허니콤 저가 MDF 책상');
    altSet.add('두닷 콰트로');
  }

  const dynamicAvoid = [...avoidSet].slice(0, 5);
  const dynamicAlt = [...altSet].slice(0, 5);

  const recommendedTraitIds = computeRecommendedTraitIds({
    ...totals,
    hasPet,
    hasAllergy,
    smallWasher,
    isTenant,
    wallMaterial,
    targetItems,
    visualClutterSensitive,
    diySkill,
    noElevator,
    frequentMover,
    heavyDeskLoad,
    budgetTier,
    isDuplex,
    narrowPath,
    needsFloorSpace,
    isCouple,
    hasMoistureRisk,
    needsIndoorDrying,
    isGroundFloor,
    ceilingLow,
    worstFear
  });
  state.excludedTraits = new Set(recommendedTraitIds);
  saveExcludedTraits();

  state.matcherTone = toneId;
  state.scaleMode = postureMode;
  saveScaleState();

  const resolvedContractType = contractType || (isOwner ? 'free' : (isTenant ? 'no-nail' : 'free'));
  const savedData = {
    nickname,
    pyeongLabel,
    wishId,
    toneId,
    toneName,
    tasteId,
    density,
    mbtiId: spaceMbti.id,
    activity,
    contractLabel,
    contractType: resolvedContractType,
    optionLevel,
    budgetTier,
    diySkill,
    toolLevel: toolLevel || (optionLevel === 'full' ? 'hex' : ''),
    moveSoon: moveSoon || 'mid',
    floorMaterial,
    wallMaterial,
    floorEnv,
    lightingPref,
    materialPref,
    postureMode,
    worstFear,
    hasPet,
    hasAllergy,
    isCouple,
    isDuplex,
    narrowPath,
    ceilingLow,
    hasFullWindow,
    needsIndoorDrying,
    isGroundFloor,
    noElevator,
    hasMoistureRisk,
    needsInsulation,
    frequentMover,
    smallWasher,
    visualClutterSensitive,
    heavyDeskLoad,
    needsFloorSpace,
    isTenant,
    isOwner,
    targetItems,
    secondaryRisks: secondaryRisks.slice(0, 4),
    analysisBasis,
    estimatedSavedWon,
    dynamicAvoid,
    dynamicAlt,
    recommendedTraitIds,
    questionCount,
    profileId: profile.id,
    badge: profile.badge,
    dangerScore
  };

  try {
    localStorage.setItem(STORAGE_KEYS.roomProfile, JSON.stringify(savedData));
  } catch {
    // ignore quota errors
  }
  updateSavedProfileBadge();
  updateScaleInputsUI();
  renderScaleQuizHint();
  renderToneMatcher();
  renderCompareView();
  renderScannerProfileNudge();
  renderExcludeTraitsBars();
  renderCycleAlarms();
  renderChecklist();

  trackEvent('quiz_complete', {
    depth: state.quizDepth,
    questions: questionCount,
    mbti: spaceMbti.id,
    profile: profile.id,
    danger_score: dangerScore,
    taste: tasteId
  });

  renderTasteSummaryStage({ ...savedData, profile });
}

function renderTasteSummaryStage(data) {
  const { nickname, pyeongLabel, wishId, toneId, toneName, tasteId, density, mbtiId, activity, secondaryRisks, dynamicAvoid, dynamicAlt, analysisBasis, estimatedSavedWon, questionCount = 15, profile, dangerScore } = data;
  const toneObj = ROOM_TONES.find((t) => t.id === toneId) || ROOM_TONES[0];
  const wishCat = (wishId && WISH_CATEGORIES[wishId]) || WISH_CATEGORIES.spacious;
  const spaceMbti = (mbtiId && SPACE_MBTI_TYPES.find((m) => m.id === mbtiId)) || computeSpaceMbti({ density, toneId, tasteId });

  showHomeStage('taste');

  quizTasteEl.innerHTML = `
    <div class="step-back-bar">
      <button id="taste-back-cover-btn" class="btn-ghost btn-sm">← 처음으로</button>
      <button id="taste-retake-btn" class="btn-ghost btn-sm">다시 테스트 ↺</button>
    </div>
    <div class="card taste-summary-card">
      <h2 class="taste-headline">${escapeHtml(nickname)}님의 방 타입은<br /><span style="color:var(--accent)">${escapeHtml(spaceMbti.code)}</span></h2>

      <div class="mbti-verdict-banner">
        <strong>${escapeHtml(spaceMbti.headline)}</strong>
        <p>${escapeHtml(spaceMbti.summary)}</p>
      </div>

      <div class="space-spec-grid">
        <div class="space-spec-cell">
          <span class="space-spec-lbl">공간 크기</span>
          <strong class="space-spec-val">${escapeHtml(pyeongLabel)}</strong>
        </div>
        <div class="space-spec-cell">
          <span class="space-spec-lbl">생활 중심</span>
          <strong class="space-spec-val">${escapeHtml(activity || '재택·휴식')}</strong>
        </div>
        <div class="space-spec-cell">
          <span class="space-spec-lbl">공간 목표</span>
          <strong class="space-spec-val">${escapeHtml(wishCat.name)}</strong>
        </div>
        <div class="space-spec-cell">
          <span class="space-spec-lbl">희망 무드</span>
          <strong class="space-spec-val" style="display:flex;align-items:center;gap:5px;">
            <span class="space-spec-dot" style="background:${toneObj.swatches[1]};"></span>
            ${escapeHtml(toneObj.name)}
          </strong>
        </div>
      </div>

      <div class="taste-analysis-box">
        <p>${escapeHtml(wishCat.summary)}</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px;">
        <button id="taste-to-verdict-btn" class="btn-primary btn-full">${escapeHtml(nickname)}님의 리스크 · 맞춤 리포트 보기 →</button>
        <button id="taste-to-matcher-btn" class="btn-secondary btn-full">내 공간 맞춤 가구·소품 보기</button>
      </div>
    </div>
  `;

  document.getElementById('taste-back-cover-btn').addEventListener('click', () => showHomeStage('cover'));
  document.getElementById('taste-retake-btn').addEventListener('click', startQuiz);
  document.getElementById('taste-to-verdict-btn').addEventListener('click', () => {
    renderQuizResultView(profile, dangerScore, pyeongLabel, toneObj.name, nickname, spaceMbti.code, secondaryRisks, dynamicAvoid, dynamicAlt, analysisBasis, estimatedSavedWon, questionCount);
  });
  document.getElementById('taste-to-matcher-btn').addEventListener('click', () => {
    state.matcherReturnOrigin = 'taste';
    switchTab('scanner');
    setScannerMode('matcher');
  });
}

function renderQuizResultView(profile, dangerScore, pyeongLabel = '6~7평', toneName = '화이트 미니멀', nickname = '자취러', mbtiCode = '', secondaryRisks = [], dynamicAvoid = null, dynamicAlt = null, analysisBasis = [], estimatedSavedWon = 180000, questionCount = 15) {
  showHomeStage('result');

  const tips = profile.lifeTips || [];
  const savedMan = Math.round((estimatedSavedWon || 180000) / 10000);
  const currentSaved = loadSavedRoomProfile();
  const traitRules = getDisplayTraitRules(currentSaved);
  const showRescueBanner = Boolean(currentSaved && (currentSaved.optionLevel === 'full' || currentSaved.optionLevel === 'partial'));
  const activeReportTab = ['avoid', 'pass', 'tips'].includes(state.reportTab) ? state.reportTab : 'avoid';

  quizResultEl.innerHTML = `
    <div class="step-back-bar">
      <button id="result-back-taste-btn" class="btn-ghost btn-sm">← 취향 분석</button>
      <button id="result-retake-btn" class="btn-ghost btn-sm">다시 테스트 ↺</button>
    </div>
    <div class="card">
      <div class="result-score-row">
        <div>
          <span class="micro-label">${escapeHtml(nickname)} · ${escapeHtml(pyeongLabel)}</span>
          <h2>${escapeHtml(profile.badge)}</h2>
          <p class="text-secondary" style="margin-top:4px;">${escapeHtml(profile.tagline)}</p>
          ${secondaryRisks && secondaryRisks.length ? `
            <div class="secondary-risk-row">
              ${secondaryRisks.slice(0, 2).map((r) => `<span class="secondary-risk-pill">+ ${escapeHtml(r)}</span>`).join('')}
            </div>
          ` : ''}
        </div>
        <div style="text-align:right;">
          <span class="text-tertiary" style="display:block;font-weight:700;">위험도</span>
          <div class="danger-number">${dangerScore}</div>
        </div>
      </div>

      <div class="defense-stat-bar" style="margin-bottom:4px;">
        <span>예상 절약 금액</span>
        <strong>약 ${savedMan}만 원</strong>
      </div>
      <p class="defense-basis-note">원상복구 도배·폐기·재구매 평균 비용 기준</p>

      ${analysisBasis && analysisBasis.length ? `
        <button type="button" id="toggle-basis-btn" class="seed-disclosure-btn">
          <span>판정 근거 · ${questionCount}문항 조건 (${analysisBasis.length}개)</span>
          <strong id="toggle-basis-arrow">보기 ▾</strong>
        </button>
        <div id="report-basis-wrap" class="report-basis-box hidden" style="margin-top:0;margin-bottom:10px;">
          <div class="report-basis-grid" id="report-basis-grid">
            ${analysisBasis.map((b) => `<span class="report-basis-chip">${escapeHtml(b)}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      <div class="seed-segmented" id="report-seg-bar" role="tablist" aria-label="리포트 상세 보기">
        <button type="button" class="seed-seg-btn ${activeReportTab === 'avoid' ? 'active' : ''}" data-rep-tab="avoid">피할 특징</button>
        <button type="button" class="seed-seg-btn ${activeReportTab === 'pass' ? 'active' : ''}" data-rep-tab="pass">대안 추천</button>
        <button type="button" class="seed-seg-btn ${activeReportTab === 'tips' ? 'active' : ''}" data-rep-tab="tips">팁 · 공유</button>
      </div>

      <div class="seed-seg-panel ${activeReportTab === 'avoid' ? '' : 'hidden'}" data-rep-panel="avoid">
        <p class="trait-sub-note" style="margin-top:0;">켜둔 특징은 상품 검색 시 자동으로 제외됩니다.</p>
        <div class="seed-list" id="report-trait-list">
          ${traitRules.map((r) => {
            const isOn = state.excludedTraits.has(r.id);
            return `
              <button type="button" class="seed-list-item ${isOn ? 'is-on' : 'is-off'}" data-report-trait="${escapeHtml(r.id)}">
                <div class="seed-list-main">
                  <span class="seed-list-title">${escapeHtml(r.nopeLabel)}</span>
                  <span class="seed-list-sub">${escapeHtml(r.desc)}</span>
                </div>
                <span class="trait-state-pill">${isOn ? '제외 ON' : '제외 OFF'}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <div class="seed-seg-panel ${activeReportTab === 'pass' ? '' : 'hidden'}" data-rep-panel="pass">
        <div class="seed-list">
          ${traitRules.map((r) => `
            <button type="button" class="seed-list-item pass-trait-jump" data-pass-rule="${escapeHtml(r.id)}" data-pass-query="${escapeHtml(r.passQuery)}" data-pass-label="${escapeHtml(r.passLabel)}">
              <div class="seed-list-main">
                <span class="seed-list-title" style="color:var(--safe);">✓ ${escapeHtml(r.passLabel)}</span>
                <span class="seed-list-sub">${escapeHtml(r.shortChip.replace(/ 제외$/, ''))} 대안 모아보기</span>
              </div>
              <strong style="color:var(--safe);font-size:13px;">보기 ›</strong>
            </button>
          `).join('')}
        </div>
        ${showRescueBanner ? `
          <button type="button" id="report-rescue-jump-btn" class="report-rescue-banner">
            <span>이미 옵션 가구가 있나요? 1~2만 원으로 보완하기</span>
            <strong>보완법 →</strong>
          </button>
        ` : ''}
      </div>

      <div class="seed-seg-panel ${activeReportTab === 'tips' ? '' : 'hidden'}" data-rep-panel="tips">
        ${tips.length ? `
          <div class="life-tips-list" id="life-tips-list" style="margin-bottom:12px;">
            ${tips.slice(0, 2).map((tip) => {
              const tipUrls = tip.itemKeyword ? buildShopUrls(tip.itemKeyword) : null;
              return `
                <div class="life-tip-item">
                  <strong>${escapeHtml(tip.title)}</strong>
                  <p>${escapeHtml(tip.desc)}</p>
                  ${tipUrls ? `
                    <div class="life-tip-shop-row">
                      <span class="life-tip-item-name">추천 · ${escapeHtml(tip.itemLabel)}</span>
                      <div class="life-tip-links">
                        <a href="${tipUrls.coupang}" target="_blank" rel="noopener noreferrer" class="tip-shop-pill">쿠팡 →</a>
                        <a href="${tipUrls.kurly}" target="_blank" rel="noopener noreferrer" class="tip-shop-pill is-kurly">컬리 →</a>
                      </div>
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
          ${tips.some((t) => t.itemKeyword) && AFFILIATE_CONFIG.coupangEnabled ? `<p class="ftc-affiliate-note" style="margin:0 0 10px;">${escapeHtml(AFFILIATE_CONFIG.disclosureText)}</p>` : ''}
        ` : ''}
        <div class="sheet-share-row">
          <button id="share-report-link-btn" class="btn-share-chip is-kakao" type="button">${KAKAO_LOGO_SVG}<span>카톡 결과 공유</span></button>
          <button id="share-story-btn" class="btn-share-chip is-story" type="button">${INSTA_LOGO_SVG}<span>인스타 스토리</span></button>
        </div>
      </div>
    </div>

    <div style="margin-top:12px;">
      <button id="go-scanner-from-result" class="btn-primary btn-full">내 방 톤 맞춤 가구 보기 →</button>
    </div>
  `;

  quizResultEl.querySelectorAll('[data-rep-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.reportTab = btn.dataset.repTab;
      quizResultEl.querySelectorAll('[data-rep-tab]').forEach((b) => b.classList.toggle('active', b === btn));
      quizResultEl.querySelectorAll('[data-rep-panel]').forEach((p) => {
        p.classList.toggle('hidden', p.dataset.repPanel !== state.reportTab);
      });
    });
  });

  const toggleBasisBtn = document.getElementById('toggle-basis-btn');
  if (toggleBasisBtn) {
    let basisExpanded = false;
    toggleBasisBtn.addEventListener('click', () => {
      basisExpanded = !basisExpanded;
      const wrap = document.getElementById('report-basis-wrap');
      const arrow = document.getElementById('toggle-basis-arrow');
      if (wrap) wrap.classList.toggle('hidden', !basisExpanded);
      if (arrow) arrow.textContent = basisExpanded ? '접기 ▲' : '보기 ▾';
    });
  }

  const shareLinkBtn = document.getElementById('share-report-link-btn');
  if (shareLinkBtn) {
    shareLinkBtn.addEventListener('click', () => {
      const base = location.protocol.startsWith('http') ? `${location.origin}${location.pathname}` : 'https://nope-room.vercel.app/';
      const url = `${base}?type=${encodeURIComponent(profile.id)}&nick=${encodeURIComponent(nickname)}`;
      const msg = `[NOPE! 내 방 판독 결과]\n${nickname}님은 '${profile.badge}' (위험도 ${dangerScore}점)\n예상 절약 효과: 약 ${savedMan}만 원\n내 방도 1분 만에 판독해 보기 👉 ${url}`;
      copyTextToClipboard(msg, '카톡 공유 문구·링크 복사 완료!');
    });
  }

  quizResultEl.querySelectorAll('[data-report-trait]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tid = btn.dataset.reportTrait;
      toggleExcludeTrait(tid);
      const isOn = state.excludedTraits.has(tid);
      btn.classList.toggle('is-on', isOn);
      btn.classList.toggle('is-off', !isOn);
      const pill = btn.querySelector('.trait-state-pill');
      if (pill) pill.textContent = isOn ? '제외 ON' : '제외 OFF';
      showToast(isOn ? '검색 시 이 특징 가구를 제외할게요' : '제외 필터를 껐어요');
    });
  });

  quizResultEl.querySelectorAll('.pass-trait-jump').forEach((btn) => {
    btn.addEventListener('click', () => {
      const passRuleId = btn.dataset.passRule || '';
      const passLabel = btn.dataset.passLabel || btn.dataset.passQuery || '대안 추천';
      switchTab('scanner');
      setScannerMode('search');
      state.activePassRuleId = passRuleId;
      state.selectedFilter = { label: passLabel, type: 'pass_rule', value: passRuleId };
      state.selectedVerdict = 'ALL';
      document.querySelectorAll('#verdict-filter-bar .vfilter-btn').forEach((b) => {
        b.classList.toggle('active', b.dataset.verdict === 'ALL');
      });
      searchInput.value = '';
      customOutEl.innerHTML = '';
      openScannerResults(`추천 · ${passLabel}`);
      renderItems();
    });
  });

  const reportRescueBtn = document.getElementById('report-rescue-jump-btn');
  if (reportRescueBtn) {
    reportRescueBtn.addEventListener('click', () => {
      switchTab('scanner');
      setScannerMode('search');
      state.activePassRuleId = '';
      state.selectedFilter = { label: '기존 가구 살리기', type: 'rescue', value: 'rescue', isTheme: true };
      state.selectedVerdict = 'ALL';
      document.querySelectorAll('#verdict-filter-bar .vfilter-btn').forEach((b) => {
        b.classList.toggle('active', b.dataset.verdict === 'ALL');
      });
      searchInput.value = '';
      customOutEl.innerHTML = '';
      openScannerResults('기존 가구 살리기 (1~2만 원 보완)');
      renderItems();
    });
  }

  document.getElementById('share-story-btn').addEventListener('click', () => {
    exportEditorialStoryCard(profile, dangerScore, nickname, toneName);
  });
  document.getElementById('go-scanner-from-result').addEventListener('click', () => {
    state.matcherReturnOrigin = 'result';
    switchTab('scanner');
    setScannerMode('matcher');
  });
  document.getElementById('result-back-taste-btn').addEventListener('click', () => {
    if (quizTasteEl.innerHTML.trim()) {
      showHomeStage('taste');
      return;
    }
    const saved = loadSavedRoomProfile();
    if (saved) {
      const savedProfile = QUIZ_RESULTS.find((r) => r.id === saved.profileId) || profile;
      renderTasteSummaryStage({ ...saved, profile: savedProfile });
    } else {
      showHomeStage('cover');
    }
  });
  document.getElementById('result-retake-btn').addEventListener('click', startQuiz);
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = text.split('');
  let line = '';
  let currY = y;
  for (let n = 0; n < chars.length; n++) {
    const testLine = line + chars[n];
    if (ctx.measureText(testLine).width > maxWidth && n > 0) {
      ctx.fillText(line, x, currY);
      line = chars[n];
      currY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, currY);
  return currY + lineHeight;
}

function exportEditorialStoryCard(profile, dangerScore, nickname = '자취러', toneName = '') {
  const canvas = document.getElementById('share-canvas');
  const ctx = canvas.getContext('2d');
  const W = 1080;
  const H = 1920;

  ctx.fillStyle = '#F4F6F9';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = '#141B29';
  ctx.lineWidth = 4;
  ctx.strokeRect(56, 56, W - 112, H - 112);

  ctx.fillStyle = '#141B29';
  ctx.font = '900 132px "Space Grotesk", "SUIT", sans-serif';
  ctx.fillText('NOPE!', 96, 220);

  ctx.fillStyle = '#536076';
  ctx.font = '700 32px "Space Grotesk", "SUIT", sans-serif';
  const moodSub = toneName ? ` · ${toneName}` : '';
  ctx.fillText(`${nickname}님의 자취 처방전${moodSub}`, 100, 275);
  ctx.fillStyle = '#141B29';
  ctx.fillRect(96, 315, W - 192, 3);

  ctx.fillStyle = '#536076';
  ctx.font = '700 34px "SUIT", sans-serif';
  ctx.fillText('자취 리스크 지수', 100, 420);

  ctx.fillStyle = '#E11D48';
  ctx.font = '900 220px "Space Grotesk", sans-serif';
  ctx.fillText(`${dangerScore}`, 92, 640);
  ctx.font = '800 54px "Space Grotesk", sans-serif';
  ctx.fillText('/ 100', 400, 640);

  ctx.fillStyle = '#141B29';
  ctx.fillRect(96, 720, W - 192, 120);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 46px "SUIT", sans-serif';
  ctx.fillText(profile.badge, 128, 796);

  ctx.fillStyle = '#141B29';
  ctx.font = '700 44px "SUIT", sans-serif';
  const nextY = wrapCanvasText(ctx, profile.tagline, 96, 940, W - 192, 64);

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(96, nextY + 50, W - 192, 390);
  ctx.strokeStyle = '#141B29';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(96, nextY + 50, W - 192, 390);
  ctx.fillStyle = '#E11D48';
  ctx.font = '800 30px "Space Grotesk", "SUIT", sans-serif';
  ctx.fillText('WHY NOPE? · ACTION LIST', 132, nextY + 115);

  ctx.fillStyle = '#141B29';
  ctx.font = '600 33px "SUIT", sans-serif';
  let y = nextY + 185;
  profile.top3.forEach((tip, idx) => {
    y = wrapCanvasText(ctx, `0${idx + 1}. ${tip}`, 132, y, W - 264, 46) + 18;
  });

  ctx.fillStyle = '#141B29';
  ctx.fillRect(96, H - 170, W - 192, 2);
  ctx.fillStyle = '#536076';
  ctx.font = '700 28px "SUIT", sans-serif';
  ctx.fillText('NOPE! · 내 방에 들이기 전 딱 한 번만 의심해 보기', 96, H - 110);

  shareOrDownloadCanvas(
    canvas,
    `NOPE-${profile.id}.png`,
    `NOPE! ${profile.badge}`,
    `${profile.tagline} (리스크 지수 ${dangerScore}/100)`,
    '스토리 공유용 이미지(PNG)가 저장되었습니다.'
  );
}

function shareOrDownloadCanvas(canvas, filename, title, text, toastMsg) {
  const triggerDownload = () => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast(toastMsg);
  };

  if (canvas.toBlob && navigator.share) {
    canvas.toBlob(async (blob) => {
      if (!blob) {
        triggerDownload();
        return;
      }
      const file = new File([blob], filename, { type: 'image/png' });
      try {
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title, text });
          return;
        }
      } catch (err) {
        if (err && err.name === 'AbortError') return;
      }
      triggerDownload();
    }, 'image/png');
  } else {
    triggerDownload();
  }
}

function buildItemShareUrl(item) {
  if (!location.protocol.startsWith('http')) return '';
  const base = `${location.origin}${location.pathname}`;
  if (item && item.id && ITEMS_DB.some((db) => db.id === item.id)) {
    return `${base}?item=${encodeURIComponent(item.id)}`;
  }
  const q = (item && (item.altSearchKeyword || item.name)) || '';
  return q ? `${base}?tab=scanner&q=${encodeURIComponent(q)}` : base;
}

function buildItemShareSummaryText(item) {
  const vm = verdictMeta(item.verdict);
  const specs = item.specs || { dust: 2, deposit: 1, trouble: 2 };
  const reason = item.oneLiner || item.checkLine || item.goodLine || '';
  const alt = item.altName ? `대신 추천: ${item.altName}` : '';
  const url = buildItemShareUrl(item);
  return [
    `[NOPE! 사기 전 판독] ${item.name} — ${vm.text}`,
    `먼지 ${specs.dust}/5 · 복구 ${specs.deposit}/5 · 수명 ${specs.trouble}/5`,
    reason ? `이유: ${reason}` : '',
    alt,
    url ? `판독 결과 바로 보기: ${url}` : ''
  ].filter(Boolean).join('\n');
}

function exportItemVerdictCard(item) {
  const canvas = document.getElementById('share-canvas');
  const ctx = canvas.getContext('2d');
  const W = 1080;
  const H = 1920;
  const vm = verdictMeta(item.verdict);
  const badgeColor = item.verdict === 'NOPE' ? '#E11D48' : (item.verdict === 'WARN' ? '#C97A2B' : '#2563EB');
  const specs = item.specs || { dust: 2, deposit: 1, trouble: 2 };

  ctx.fillStyle = '#F4F6F9';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = '#141B29';
  ctx.lineWidth = 4;
  ctx.strokeRect(56, 56, W - 112, H - 112);

  ctx.fillStyle = '#141B29';
  ctx.font = '900 116px "Space Grotesk", "SUIT", sans-serif';
  ctx.fillText('NOPE!', 96, 210);

  ctx.fillStyle = '#536076';
  ctx.font = '700 32px "SUIT", sans-serif';
  ctx.fillText(`${item.brand || 'NOPE SCAN'} · ${item.category || '자취 가구'} · ${item.priceTier || ''}`, 100, 268);

  ctx.fillStyle = '#141B29';
  ctx.fillRect(96, 308, W - 192, 3);

  // Verdict stamp pill
  ctx.fillStyle = badgeColor;
  ctx.fillRect(96, 360, 340, 88);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 42px "Space Grotesk", "SUIT", sans-serif';
  ctx.fillText(vm.text, 128, 420);

  // Product title
  ctx.fillStyle = '#141B29';
  ctx.font = '800 54px "SUIT", sans-serif';
  let nextY = wrapCanvasText(ctx, item.name, 96, 540, W - 192, 72);

  // 3 Spec boxes
  const boxY = nextY + 34;
  const boxW = (W - 192 - 36) / 3;
  [
    { label: '먼지 부담', val: `${specs.dust} / 5` },
    { label: '원상복구', val: `${specs.deposit} / 5` },
    { label: '수명·관리', val: `${specs.trouble} / 5` }
  ].forEach((sp, idx) => {
    const bx = 96 + idx * (boxW + 18);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(bx, boxY, boxW, 160);
    ctx.strokeStyle = '#141B29';
    ctx.lineWidth = 2;
    ctx.strokeRect(bx, boxY, boxW, 160);
    ctx.fillStyle = '#536076';
    ctx.font = '700 28px "SUIT", sans-serif';
    ctx.fillText(sp.label, bx + 28, boxY + 56);
    ctx.fillStyle = badgeColor;
    ctx.font = '900 52px "Space Grotesk", sans-serif';
    ctx.fillText(sp.val, bx + 28, boxY + 128);
  });

  // WHY box
  const whyY = boxY + 210;
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(96, whyY, W - 192, 340);
  ctx.fillStyle = badgeColor;
  ctx.fillRect(96, whyY, 12, 340);
  ctx.fillStyle = badgeColor;
  ctx.font = '900 30px "Space Grotesk", "SUIT", sans-serif';
  ctx.fillText(item.verdict === 'PASS' ? 'WHY PASS?' : (item.verdict === 'WARN' ? 'WHY CHECK?' : 'WHY NOPE?'), 138, whyY + 66);

  ctx.fillStyle = '#141B29';
  ctx.font = '700 38px "SUIT", sans-serif';
  const reasonText = item.oneLiner || item.checkLine || item.goodLine || '';
  wrapCanvasText(ctx, reasonText, 138, whyY + 140, W - 270, 56);

  // Alt Recommendation box
  const altY = whyY + 388;
  ctx.fillStyle = '#141B29';
  ctx.fillRect(96, altY, W - 192, 240);
  ctx.fillStyle = '#E11D48';
  ctx.font = '800 28px "SUIT", sans-serif';
  ctx.fillText(item.verdict === 'PASS' ? '함께 챙기면 좋은 스펙' : '대신 이 스펙을 추천해요', 132, altY + 62);
  ctx.fillStyle = '#F4F6F9';
  ctx.font = '800 36px "SUIT", sans-serif';
  wrapCanvasText(ctx, item.altName || '무타공 · 워셔블 대체 스펙 확인', 132, altY + 128, W - 264, 52);

  ctx.fillStyle = '#141B29';
  ctx.fillRect(96, H - 170, W - 192, 2);
  ctx.fillStyle = '#536076';
  ctx.font = '700 28px "SUIT", sans-serif';
  ctx.fillText('NOPE! · 내 방에 들이기 전 딱 한 번만 의심해 보기', 96, H - 110);

  shareOrDownloadCanvas(
    canvas,
    `NOPE-verdict-${item.id || 'item'}.png`,
    `NOPE! ${item.name} (${vm.text})`,
    reasonText,
    '제품 판독 카드 이미지(PNG)가 저장되었습니다.'
  );
}

function exportToneRescueCard(toneObj, baseId, rescue) {
  const canvas = document.getElementById('share-canvas');
  const ctx = canvas.getContext('2d');
  const W = 1080;
  const H = 1920;

  ctx.fillStyle = '#F4F6F9';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = '#141B29';
  ctx.lineWidth = 4;
  ctx.strokeRect(56, 56, W - 112, H - 112);

  ctx.fillStyle = '#141B29';
  ctx.font = '900 112px "Space Grotesk", "SUIT", sans-serif';
  ctx.fillText('NOPE!', 96, 206);
  ctx.fillStyle = '#536076';
  ctx.font = '700 32px "SUIT", sans-serif';
  ctx.fillText('내 방 바닥·톤 맞춤 가이드', 100, 262);
  ctx.fillStyle = '#141B29';
  ctx.fillRect(96, 302, W - 192, 3);

  ctx.fillStyle = '#C97A2B';
  ctx.fillRect(96, 350, 420, 74);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 34px "SUIT", sans-serif';
  ctx.fillText(`현재 방: ${rescue.baseLabel}`, 124, 399);

  ctx.fillStyle = '#141B29';
  ctx.font = '900 54px "SUIT", sans-serif';
  ctx.fillText(`목표 무드 · ${toneObj.name}`, 96, 504);

  // 60-30-10 color bar
  const barY = 548;
  const totalW = W - 192;
  const segWidths = [totalW * 0.6, totalW * 0.3, totalW * 0.1];
  const swatches = toneObj.swatches || ['#F7F4ED', '#E6DFD2', '#2C2523'];
  let sx = 96;
  segWidths.forEach((sw, idx) => {
    ctx.fillStyle = swatches[idx];
    ctx.fillRect(sx, barY, sw - 8, 96);
    ctx.strokeStyle = '#141B29';
    ctx.lineWidth = 2;
    ctx.strokeRect(sx, barY, sw - 8, 96);
    sx += sw;
  });

  // Avoid trap box
  const avoidY = 690;
  ctx.fillStyle = 'rgba(230, 83, 75, 0.12)';
  ctx.fillRect(96, avoidY, W - 192, 260);
  ctx.fillStyle = '#E11D48';
  ctx.fillRect(96, avoidY, 12, 260);
  ctx.font = '900 30px "SUIT", sans-serif';
  ctx.fillText('이 방에서 꼭 피할 실수', 138, avoidY + 60);
  ctx.fillStyle = '#141B29';
  ctx.font = '700 35px "SUIT", sans-serif';
  wrapCanvasText(ctx, rescue.avoidLine, 138, avoidY + 126, W - 266, 52);

  // Cover formula box
  const stepY = 995;
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(96, stepY, W - 192, 560);
  ctx.strokeStyle = '#141B29';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(96, stepY, W - 192, 560);
  ctx.fillStyle = '#2563EB';
  ctx.font = '900 32px "SUIT", sans-serif';
  ctx.fillText('못질 없는 바닥·벽 보완 포인트', 134, stepY + 68);

  ctx.fillStyle = '#141B29';
  ctx.font = '600 33px "SUIT", sans-serif';
  let sy = stepY + 140;
  rescue.coverSteps.forEach((st, idx) => {
    sy = wrapCanvasText(ctx, `0${idx + 1}. ${st}`, 134, sy, W - 268, 50) + 34;
  });

  ctx.fillStyle = '#536076';
  ctx.font = '700 28px "SUIT", sans-serif';
  ctx.fillText(`추천 조명: ${toneObj.kelvin || '2700K~3000K 전구색'}`, 134, stepY + 510);

  ctx.fillStyle = '#141B29';
  ctx.fillRect(96, H - 170, W - 192, 2);
  ctx.fillStyle = '#536076';
  ctx.font = '700 28px "SUIT", sans-serif';
  ctx.fillText('NOPE! · 작은 월세방도 큰 톤 하나로 정돈됩니다', 96, H - 110);

  shareOrDownloadCanvas(
    canvas,
    `NOPE-rescue-${baseId}-${toneObj.id}.png`,
    `NOPE! ${rescue.baseLabel} → ${toneObj.name} 톤 가이드`,
    rescue.headline,
    '톤 맞춤 가이드 이미지(PNG)가 저장되었습니다.'
  );
}

// ---------------- Tab 2: Yuka-Style Real Product Scanner + Bottom Sheet ----------------
const scannerGate = document.getElementById('scanner-stage-gate');
const scannerResults = document.getElementById('scanner-stage-results');
const scannerCompare = document.getElementById('scanner-stage-compare');
const scannerMatcher = document.getElementById('scanner-stage-matcher');
const chipsWrap = document.getElementById('category-chips');
const searchInput = document.getElementById('item-search-input');
const itemsListEl = document.getElementById('items-list');
const customOutEl = document.getElementById('custom-analysis-output');
const sheetBackdrop = document.getElementById('detail-sheet-backdrop');
const sheetPanel = document.getElementById('detail-sheet-panel');

const THEME_MATCHERS = {
  deskterior: /데스크|책상|모니터|키보드|매트|타공판|전선|멀티탭|노트북|시디즈|듀오백|허먼|사이즈오브|서랍/,
  planterior: /화분|식물|토분|라탄|사츠마스|생장등|테라코타|베란다|룬넨|스니다드|톨크닝/,
  homecafe: /홈카페|카페|식탁|커피|캡슐|머그|트레이|트롤리|아일랜드|홈바|협탁|독스타/,
  cozybed: /침대|매트리스|토퍼|이불|베개|쿠션|러그|커튼|블라인드|패브릭|부클레|빈백|소파|스탠드|무드등/,
  gapstorage: /틈새|슬림|침대밑|문걸이|압축|행거|리빙박스|스쿠브|트로네스|베스켄|선반|트롤리/,
  nodrill: /무타공|꼭꼬핀|압축|문걸이|코맨드|자석|논슬립/
};

const FILTER_GROUPS = [
  {
    caption: '6대 대분류',
    chips: [
      { label: `전체 ${ITEMS_DB.length}종`, type: 'all', value: '전체' },
      { label: '공간·가구', type: 'domain', value: ['책상·의자', '수납·행거', '소파·침대·매트'] },
      { label: '데스크테리어', type: 'domain', value: ['데스크테리어'], keywords: /모니터암|라이트바|키보드|마우스|선반|멀티탭|독/ },
      { label: '집 청소·세탁', type: 'domain', value: ['집청소·세탁'] },
      { label: '욕실·구강', type: 'domain', value: ['무타공·욕실', '구강·욕실케어'] },
      { label: '주방·소형가전', type: 'domain', value: ['식탁·주방·생활', '소형가전·주방'] },
      { label: '조명·무드', type: 'domain', value: ['조명·거울'] }
    ]
  },
  {
    caption: '공신력 · 깊이 필터',
    chips: [
      { label: '전문가·유튜버 언급', type: 'proof', value: 'creator', isTheme: true },
      { label: '협찬 제외·내돈내산', type: 'proof', value: 'organic', isTheme: true },
      { label: '원천 스펙·종결 비교', type: 'proof', value: 'deep', isTheme: true },
      { label: '기존 가구 살리기', type: 'rescue', value: 'rescue', isTheme: true },
      { label: '무타공·보증금', type: 'theme', value: 'nodrill', isTheme: true }
    ]
  },
  {
    caption: '브랜드',
    chips: [
      { label: '이케아', type: 'brand', value: 'IKEA' },
      { label: '한샘·리바트·일룸', type: 'brand', value: 'HANSSEM|LIVART|ILOOM' },
      { label: '두닷·데스커·에이픽스', type: 'brand', value: 'DODOT|DESKER|APIX|SOFSYS' },
      { label: '무인양품·마켓비·룸앤홈', type: 'brand', value: 'MARKETB|ROOMNHOME|MUJI' },
      { label: '해외·테크·케어 브랜드', type: 'brand', value: 'BenQ|Ergotron|Logitech|Keychron|CalDigit|CURAPROX|MARVIS|GSK|CAREPOD|KARCHER|XIAOMI|3M|LEXON|HERMAN' }
    ]
  }
];

function verdictMeta(verdict) {
  if (verdict === 'NOPE') return { cls: 'v-nope', text: 'NOPE! 주의' };
  if (verdict === 'WARN') return { cls: 'v-warn', text: 'CHECK 조건부' };
  return { cls: 'v-pass', text: 'PASS 양호' };
}

function openScannerResults(label) {
  scannerGate.classList.add('hidden');
  scannerResults.classList.remove('hidden');
  if (label) {
    state.scannerResultTitle = label;
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

document.getElementById('scanner-reset-btn').addEventListener('click', () => {
  scannerResults.classList.add('hidden');
  scannerGate.classList.remove('hidden');
  state.activePassRuleId = '';
  state.scannerResultTitle = '';
  state.lastExcludedCount = 0;
  searchInput.value = '';
  customOutEl.innerHTML = '';
  renderExcludeTraitsBars();
});

function renderCategoryChips() {
  chipsWrap.innerHTML = '';
  FILTER_GROUPS.forEach((grp) => {
    const cap = document.createElement('span');
    cap.className = 'chip-group-caption';
    cap.textContent = grp.caption;
    chipsWrap.appendChild(cap);

    grp.chips.forEach((f) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = `chip ${f.isTheme ? 'is-theme' : ''}`;
      b.textContent = f.label;
      b.addEventListener('click', () => {
        state.selectedFilter = f;
        state.activePassRuleId = '';
        searchInput.value = '';
        customOutEl.innerHTML = '';
        openScannerResults(f.label);
        renderItems();
      });
      chipsWrap.appendChild(b);
    });
  });
}

// Yuka Level 1 Card (0.5-second scannable: Verdict + Brand + Title + 3 Chips + 1 Line + Personal Fit)
function normalizeRoomProfileConstraints(savedProfile) {
  if (!savedProfile) return null;
  const contractLabel = savedProfile.contractLabel || '';
  const contractType = savedProfile.contractType
    || (/못질 금지/.test(contractLabel) ? 'no-nail' : (/꼭꼬핀/.test(contractLabel) ? 'pin-ok' : 'free'));
  return {
    ...savedProfile,
    contractType,
    toolLevel: savedProfile.toolLevel || '',
    moveSoon: savedProfile.moveSoon || ''
  };
}

function getItemSearchableText(item) {
  return [
    item.name,
    item.oneLiner,
    item.goodLine,
    item.checkLine,
    item.altName,
    ...(item.chips || []),
    ...(item.checks || []),
    ...(item.cautions || []),
    ...(item.pros || []),
    ...(item.pairTips || [])
  ].filter(Boolean).join(' ');
}

function getPersonalFitAlerts(item, rawProfile) {
  const savedProfile = normalizeRoomProfileConstraints(rawProfile);
  if (!savedProfile) return [];

  const txt = getItemSearchableText(item);
  const chipTxt = (item.chips || []).join(' ');
  const alerts = [];

  const hasAssemblySkip = /무조립|완제품|조립 없음/.test(chipTxt) || /기사 방문\s*설치|기사\s*시공\s*옵션/.test(chipTxt);
  const needsAssembly = /전동드릴|반제품|철판\s*조립|셀프\s*조립|DIY|나사\s*체결|육각렌치/.test(txt) && !hasAssemblySkip;

  if (savedProfile.toolLevel === 'none' && needsAssembly) {
    alerts.push({
      tone: 'danger',
      shortBadge: '내 방 체크: 공구 없이 조립 벅참',
      detail: '설문에서 드라이버가 없다고 답하셨어요. 반제품 조립 부담이 크니 미니 전동드릴을 준비하거나 기사 설치 제품을 살펴보세요.'
    });
  } else if (savedProfile.toolLevel === 'hex' && /전동드릴/.test(txt) && !hasAssemblySkip) {
    alerts.push({
      tone: 'warn',
      shortBadge: '내 방 체크: 전동드릴 있으면 수월',
      detail: '동봉 육각렌치만으로는 손목 피로가 큰 편이에요. 전동드릴이 있다면 훨씬 편하게 조립할 수 있습니다.'
    });
  }

  const isNoNail = savedProfile.contractType === 'no-nail';
  const isPinOnly = savedProfile.contractType === 'pin-ok';
  const riskTxtForWall = stripSafeTraitNegations(getItemRiskText(item));
  const isExplicitNoDrill = /무타공|꼭꼬핀|자석/.test(`${item.name || ''} ${item.category || ''} ${chipTxt}`);
  const hasWallOrDepositRisk = ((item.specs && item.specs.deposit >= 3) && !isExplicitNoDrill)
    || /(^|[^무])타공(?!판)|못질|벽걸이|코맨드|시트지|점착|실크벽지.{0,8}뜯|벽\s*고정|압축봉\s*(무너|함몰)/.test(riskTxtForWall);

  if ((isNoNail || isPinOnly) && hasWallOrDepositRisk) {
    alerts.push({
      tone: isNoNail ? 'danger' : 'warn',
      shortBadge: isNoNail ? '내 방 체크: 월세 원상복구 주의' : '내 방 체크: 벽지·타공 여부 확인',
      detail: isNoNail
        ? '못질이 안 되는 월세·전세 방이에요. 벽지 뜯김이나 타공 자국이 남지 않는 무타공·비접착 방식인지 꼭 확인하세요.'
        : '꼭꼬핀 정도만 허용되는 방이에요. 실크벽지 접착 뜯김이나 드릴 타공이 필요한지 먼저 살펴보세요.'
    });
  }

  const isCompactRoom = savedProfile.pyeongLabel === '4~5평 이하' || savedProfile.isDuplex || savedProfile.needsFloorSpace;
  const isBulkyItem = /대형|리클라이너|카우치|3인용|4인용|킹|퀸|스탠드\s*전신거울|벙커|1600|1800|아일랜드|확장형/.test(txt);
  if (isCompactRoom && isBulkyItem) {
    alerts.push({
      tone: 'danger',
      shortBadge: `내 방 체크: ${savedProfile.pyeongLabel || '좁은 방'} 크기 주의`,
      detail: '방 크기 대비 부피가 큰 편이에요. 방문·옷장 문 열림 반경과 통로 60cm가 남는지 줄자로 먼저 재보세요.'
    });
  }

  if (savedProfile.noElevator && /묵직|원목|대형|기사|서랍장|옷장|소파|매트리스|프레임|책상/.test(txt)
    && item.category !== '무타공·욕실' && item.category !== '조명·거울') {
    alerts.push({
      tone: 'warn',
      shortBadge: '내 방 체크: 계단 운반·무게 확인',
      detail: '엘리베이터가 없는 방이에요. 박스 무게와 계단·현관문 통과 폭, 방문 배송 여부를 미리 확인하세요.'
    });
  }

  if ((savedProfile.hasPet || savedProfile.hasAllergy)
    && ((item.specs && item.specs.dust >= 4) || /샤기|장모|부클레|오픈|행거|선반/.test(txt))) {
    alerts.push({
      tone: 'warn',
      shortBadge: '내 방 체크: 털·먼지 관리 주의',
      detail: '반려동물 털이나 먼지가 쌓이기 쉬운 구조·소재예요. 세탁 가능한 커버나 도어·가림막 추가를 권장해요.'
    });
  }

  if (savedProfile.hasMoistureRisk && /매트리스|원목|MDF|시트지|규조토|러그|깔판/.test(txt)) {
    alerts.push({
      tone: 'warn',
      shortBadge: '내 방 체크: 습기·결로 관리 필요',
      detail: '결로·습기에 민감한 방이에요. 벽면에서 5cm 띄워 배치하고 통풍 깔판이나 제습 관리를 함께 하세요.'
    });
  }

  if (savedProfile.moveSoon === 'high'
    && (/재조립|파손|허니콤|PB|기사\s*시공|대형/.test(txt) || (item.specs && item.specs.trouble >= 4))) {
    alerts.push({
      tone: 'warn',
      shortBadge: '내 방 체크: 1~2년 내 이사 시 이동 체크',
      detail: '이사가 잦다면 분해·재조립할 때 나사 구멍이 헐거워지거나 처분이 어려운 무게인지 함께 확인하세요.'
    });
  }

  if (savedProfile.wallMaterial === 'silk' && /코맨드|시트지|점착|양면테이프/.test(txt)) {
    alerts.push({
      tone: 'danger',
      shortBadge: '실크벽지: 접착 뜯김 위험',
      detail: '실크벽지는 접착 폼테이프·시트지를 뗄 때 겉 코팅이 통째로 뜯겨 보증금 청구의 주원인이 됩니다.'
    });
  }

  if (savedProfile.floorMaterial === 'jangpan' && /샤기|고무|바퀴|변색|눌어붙/.test(txt)) {
    alerts.push({
      tone: 'warn',
      shortBadge: '장판 바닥: 열변색·바퀴 자국 주의',
      detail: 'PVC 장판 위엔 고무 논슬립 러그나 하드 바퀴가 난방 열·하중으로 변색 자국을 남기기 쉬워 펠트·매트 보강이 필요해요.'
    });
  }

  if (savedProfile.smallWasher && /러그|이불|커튼|소파|매트리스|토퍼|수건/.test(`${item.name || ''} ${item.category || ''}`) && /세탁기\s*불가|세탁\s*불가|9~10kg|비분리/.test(txt)) {
    alerts.push({
      tone: 'danger',
      shortBadge: '9kg 이하 세탁기: 통세탁 불가',
      detail: '집 세탁기에 안 들어가는 부피/소재라 오염 시마다 코인세탁소 비용과 수고가 발생합니다.'
    });
  }

  if (savedProfile.heavyDeskLoad && /허니콤|종이\s*벌집|모니터암\s*금지|라그캅텐|린몬|가운데\s*휨|3~4mm\s*투명\s*아크릴|고개\s*숙임/.test(txt)) {
    alerts.push({
      tone: 'danger',
      shortBadge: '데스크 셋업: 하중·처짐 위험',
      detail: '모니터암 클램프 하중이나 모니터 무게가 몰리면 상판 꺼짐·처짐이 발생할 수 있는 스펙입니다.'
    });
  }

  if (savedProfile.hasAllergy && /진동자.*세척\s*불가|세균\s*분무|코튼\s*필터/.test(txt)) {
    alerts.push({
      tone: 'danger',
      shortBadge: '비염·호흡기: 위생 세척 주의',
      detail: '물통·진동자 내부 세척이 막힌 구조는 비염·호흡기 예민 환경에 불리하니 통세척 스텐 구조를 권장합니다.'
    });
  }

  if (savedProfile.visualClutterSensitive && /오픈|노출|와이어|메쉬|투명/.test(txt)) {
    alerts.push({
      tone: 'warn',
      shortBadge: '오픈 수납: 시각적 노이즈 주의',
      detail: '물건이 밖으로 보여 스트레스를 받는 성향에겐 도어형 수납장이나 불투명 리빙박스 조합이 훨씬 맞습니다.'
    });
  }

  if (alerts.length === 0 && item.verdict === 'PASS') {
    alerts.push({
      tone: 'safe',
      shortBadge: '✓ 내 조건 적합',
      detail: '입력하신 내 방·생활 조건에 무리 없이 잘 맞는 스펙입니다.'
    });
  }

  return alerts;
}

function loadDefenseIds() {
  try {
    const arr = JSON.parse(localStorage.getItem(STORAGE_KEYS.defenseIds) || '[]');
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function recordDefenseInspect(item) {
  if (!item || item.verdict !== 'NOPE' || !item.id || item.id === 'custom-scan') return;
  const ids = loadDefenseIds();
  if (!ids.includes(item.id)) {
    ids.push(item.id);
    try {
      localStorage.setItem(STORAGE_KEYS.defenseIds, JSON.stringify(ids));
    } catch {
      // ignore
    }
  }
  renderDefenseCounter();
}

function renderDefenseCounter() {
  const bar = document.getElementById('defense-counter-bar');
  if (!bar) return;
  const ids = loadDefenseIds();
  const savedProfile = loadSavedRoomProfile();
  if (ids.length === 0 && !savedProfile) {
    bar.classList.add('hidden');
    return;
  }
  const count = ids.length;
  const estWon = count * 75000 + (savedProfile ? (savedProfile.estimatedSavedWon || 0) : 0);
  const man = Math.round(estWon / 10000);
  bar.innerHTML = count > 0
    ? `<span>지금까지 NOPE 판독 <strong>${count}건</strong> 확인</span><strong>약 ${man}만 원 절약 기준</strong>`
    : `<span>${escapeHtml(savedProfile.nickname || '내')} 방 맞춤 기준 적용 중</span><strong>예상 ${Math.round((savedProfile.estimatedSavedWon || 180000) / 10000)}만 원 절약</strong>`;
  bar.classList.remove('hidden');
}

function formatWonRange(minWon, maxWon) {
  const fmtNum = (won) => {
    if (won >= 10000) {
      const man = Math.round((won / 10000) * 10) / 10;
      return `${Number.isInteger(man) ? man : man.toFixed(1)}`;
    }
    return `${Math.round(won / 1000)}`;
  };
  if (minWon >= 10000 && maxWon >= 10000) {
    return `${fmtNum(minWon)}~${fmtNum(maxWon)}만 원`;
  }
  if (maxWon < 10000) {
    return `${fmtNum(minWon)}~${fmtNum(maxWon)}천 원`;
  }
  return `${fmtNum(minWon)}천~${fmtNum(maxWon)}만 원`;
}

function getHiddenPrepInfo(item, rawProfile) {
  const savedProfile = normalizeRoomProfileConstraints(rawProfile);
  const txt = getItemSearchableText(item);
  const picked = [];
  const addKit = (kit) => {
    if (kit && !picked.some((p) => p.id === kit.id)) picked.push(kit);
  };

  if (/전동드릴|반제품|조립|DIY|나사|철제|수평/.test(txt) || savedProfile?.toolLevel === 'none' && /책상|서랍|선반|옷장|캐비닛/.test(txt)) {
    addKit(HIDDEN_PREP_KITS.assemblyTool);
  }
  if (/벽|타공|코맨드|시트지|꼭꼬핀|거울|커튼|블라인드|무타공/.test(txt)) {
    addKit(HIDDEN_PREP_KITS.wallSafe);
  }
  if (/오픈|행거|선반|와이어|메쉬/.test(txt) || (item.specs && item.specs.dust >= 4)) {
    addKit(HIDDEN_PREP_KITS.dustCover);
  }
  if (item.category === '책상·의자' && /책상|데스크|테이블|전선|멀티탭|나뭇결|요철/.test(txt)) {
    addKit(HIDDEN_PREP_KITS.deskSurface);
  }
  if (item.category === '소파·침대·매트' || /패브릭|소파|러그|매트리스|토퍼/.test(txt)) {
    addKit(HIDDEN_PREP_KITS.fabricCare);
  }
  if (item.category === '조명·거울' && /조명|스탠드|램프|무드등|전구/.test(txt)) {
    addKit(HIDDEN_PREP_KITS.bulbKit);
  }
  if (/책상|의자|식탁|침대|서랍|옷장|수납/.test(txt)) {
    addKit(HIDDEN_PREP_KITS.floorProtect);
  }
  if (picked.length < 2) {
    addKit(HIDDEN_PREP_KITS.measureTape);
  }

  const kits = picked.slice(0, 2);
  const minSum = kits.reduce((s, k) => s + (k.minWon || 5000), 0);
  const maxSum = kits.reduce((s, k) => s + (k.maxWon || 15000), 0);
  const prepCostText = formatWonRange(minSum, maxSum);
  const hasPriceNum = /\d/.test(item.priceTier || '');
  const totalCostLine = hasPriceNum
    ? `본품 ${item.priceTier} + 준비물 약 ${prepCostText}`
    : `본품 가격 + 준비물 약 ${prepCostText} 추가 예상`;

  return { kits, prepCostText, totalCostLine };
}

function renderScannerProfileNudge() {
  const el = document.getElementById('scanner-profile-nudge');
  if (!el) return;
  const saved = normalizeRoomProfileConstraints(loadSavedRoomProfile());

  if (!saved || !saved.pyeongLabel) {
    el.innerHTML = `
      <span class="nudge-copy">내 방 평수·공구·월세 조건을 등록하면 안 맞는 가구를 먼저 알려드려요.</span>
      <button type="button" id="nudge-start-quiz-btn" class="nudge-action-btn">1분 등록 →</button>
    `;
    const btn = document.getElementById('nudge-start-quiz-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        switchTab('home');
        startQuiz();
      });
    }
    return;
  }

  const toolLabel = saved.toolLevel === 'none'
    ? '드라이버 없음'
    : saved.toolLevel === 'drill'
      ? '전동드릴 보유'
      : saved.toolLevel === 'hex'
        ? '육각렌치 가능'
        : '';
  const contractShort = saved.contractType === 'no-nail'
    ? '못질 금지'
    : saved.contractType === 'pin-ok'
      ? '꼭꼬핀 가능'
      : saved.contractType === 'free'
        ? '타공 자유'
        : '';
  const tags = [saved.pyeongLabel, contractShort, toolLabel].filter(Boolean).join(' · ');

  el.innerHTML = `
    <span class="nudge-copy is-active"><strong>내 방 기준 판독 중</strong> · ${escapeHtml(tags)}</span>
    <button type="button" id="nudge-edit-quiz-btn" class="nudge-action-btn is-muted">조건 수정</button>
  `;
  const editBtn = document.getElementById('nudge-edit-quiz-btn');
  if (editBtn) {
    editBtn.addEventListener('click', () => {
      switchTab('home');
      startQuiz();
    });
  }
}

function renderYukaCard(item) {
  const v = verdictMeta(item.verdict);
  const cardStateCls = item.verdict === 'NOPE' ? 'v-card-nope' : item.verdict === 'WARN' ? 'v-card-warn' : 'v-card-pass';
  const savedProfile = loadSavedRoomProfile();
  const fitAlerts = getPersonalFitAlerts(item, savedProfile);
  const topAlert = fitAlerts[0];
  const proofBadge = item.creatorPick && item.creatorPick.source
    ? `<span class="card-proof-tag">${escapeHtml(item.creatorPick.source)}${item.creatorPick.sponsored === false ? ' · 비협찬' : ''}</span>`
    : '';
  return `
    <button class="yuka-card ${cardStateCls}" data-item-id="${escapeHtml(item.id)}">
      <div class="yuka-top">
        <span class="brand-meta">${escapeHtml(item.brand)} · ${escapeHtml(item.category)} · ${escapeHtml(item.priceTier)}</span>
        <span class="verdict-pill ${v.cls}">${v.text}</span>
      </div>
      <div class="yuka-title">${escapeHtml(item.name)}</div>
      <p class="yuka-oneliner">${escapeHtml(item.oneLiner)}</p>
      ${proofBadge}
      ${topAlert ? `<div class="yuka-fit-pill is-${topAlert.tone}">${escapeHtml(topAlert.shortBadge)}</div>` : ''}
    </button>
  `;
}

function getActiveUtmSource() {
  try {
    return sessionStorage.getItem('nope_utm_source') || '';
  } catch {
    return '';
  }
}

function buildShopUrls(keyword, itemId = '') {
  const q = encodeURIComponent(keyword);
  const directCoupang = (itemId && AFFILIATE_CONFIG.coupangLinks[itemId])
    || AFFILIATE_CONFIG.coupangLinks[keyword];
  const utm = getActiveUtmSource();
  const subId = [AFFILIATE_CONFIG.coupangSubId, utm].filter(Boolean).join('_');
  const baseCoupang = directCoupang || `https://www.coupang.com/np/search?q=${q}${AFFILIATE_CONFIG.coupangEnabled && subId ? `&subid=${encodeURIComponent(subId)}` : ''}`;
  const directOhouse = (itemId && AFFILIATE_CONFIG.ohouseLinks[itemId]) || AFFILIATE_CONFIG.ohouseLinks[keyword];
  const directKurly = (itemId && AFFILIATE_CONFIG.kurlyLinks[itemId]) || AFFILIATE_CONFIG.kurlyLinks[keyword];

  return {
    coupang: baseCoupang,
    ohouse: directOhouse || `https://ohou.se/search/index?query=${q}`,
    kurly: directKurly || `https://www.kurly.com/search?sword=${q}`,
    hasCoupangAffiliate: AFFILIATE_CONFIG.coupangEnabled
  };
}

function getToneLabel(toneId) {
  const found = ROOM_TONES.find((t) => t.id === toneId);
  return found ? found.name : '화이트 · 리넨';
}

function buildItemRescuePatch(item) {
  if (!item) return RESCUE_PATCH_RULES[RESCUE_PATCH_RULES.length - 1];
  const hay = [
    item.name,
    item.category,
    item.oneLiner,
    item.checkLine,
    ...(item.chips || []),
    ...(item.checks || []),
    ...(item.cautions || [])
  ].filter(Boolean).join(' ');
  const matched = RESCUE_PATCH_RULES.find((r) => r.matchRx && r.matchRx.test(hay));
  if (matched) return matched;
  return {
    id: 'general-patch',
    symptom: item.checkLine || item.oneLiner || '사용 환경에 따라 긁힘·먼지·흔들림이 생길 수 있음',
    costSaving: '새 가구 교체 없이 약 5천~1.5만 원 소품으로 불편 보완 가능',
    steps: [
      '바닥·벽과 맞닿는 면에는 펠트·실리콘 보호 패드를 먼저 붙여 원상복구 감점을 막으세요.',
      '흔들림·먼지 노출이 걱정되는 구간만 소형 정리함·방수 패드로 덮어 관리 부담을 줄이세요.'
    ],
    kits: [
      { title: '가구 다리 찍힘방지 펠트·논슬립 패드', estCost: '약 4~8천 원', keyword: '가구 다리 보호 펠트 패드' },
      { title: '수평 조절 웨지 · 불투명 정리함', estCost: '약 6~1.2만 원', keyword: '가구 수평 패드 불투명 수납함' }
    ]
  };
}

function resolveAltCompareItem(item) {
  if (!item || !item.id) return null;
  const mappedId = ALT_ITEM_MAP[item.id];
  if (mappedId) {
    const found = ITEMS_DB.find((x) => x.id === mappedId);
    if (found && found.id !== item.id) return found;
  }
  const sameCatPairs = (item.pairIds || [])
    .map((pid) => ITEMS_DB.find((x) => x.id === pid))
    .filter((x) => x && x.id !== item.id && x.category === item.category && x.verdict !== 'NOPE');
  if (sameCatPairs.length) return sameCatPairs[0];

  const rankRisk = (x) => (x.specs?.dust || 3) + (x.specs?.deposit || 3) + (x.specs?.trouble || 3);
  const candidates = ITEMS_DB
    .filter((x) => x.id !== item.id && x.category === item.category && x.verdict !== 'NOPE')
    .sort((a, b) => {
      if (a.verdict !== b.verdict) return a.verdict === 'PASS' ? -1 : 1;
      return rankRisk(a) - rankRisk(b);
    });
  return candidates[0] || null;
}

function buildPairingReason(item, pairedItems, primaryTone) {
  const cats = [...new Set(pairedItems.map((p) => p.category.split('·')[0]))].join('·');
  if (item.category === '책상·의자') {
    return `${item.name}과(와) 같은 '${primaryTone}' 톤의 ${cats} 제품을 함께 두면 작업 공간의 색과 분위기가 하나로 이어집니다.`;
  }
  if (item.category === '소파·침대·매트') {
    return `면적 비중이 큰 ${item.name} 옆에 같은 '${primaryTone}' 톤의 ${cats} 소품을 맞추면 방 전체가 정돈돼 보입니다.`;
  }
  if (item.category === '조명·거울') {
    return `${item.name}의 빛·질감과 어우러지는 '${primaryTone}' 톤 ${cats} 가구로, 함께 배치했을 때 방 무드가 자연스럽게 완성됩니다.`;
  }
  return `${item.name}과(와) '${primaryTone}' 톤으로 결이 맞아, ${cats} 영역까지 통일감 있게 이어주는 궁합 가구입니다.`;
}

// Yuka Level 2 Bottom Sheet (Crisp 1-line summary + App Pairing + Coupang/Ohouse Dual Links)
function openDetailSheet(item) {
  recordDefenseInspect(item);
  trackEvent('product_detail_open', {
    id: item.id,
    verdict: item.verdict,
    category: item.category
  });
  const v = verdictMeta(item.verdict);
  const urls = buildShopUrls(item.altSearchKeyword, item.id);
  const isPass = item.verdict === 'PASS';
  const isWarn = item.verdict === 'WARN';

  const goodLine = item.goodLine || (item.pros && item.pros[0]) || item.oneLiner;
  const checkLine = item.checkLine || (item.cautions && item.cautions[0]) || (item.pairTips && item.pairTips[0]) || (item.checks && item.checks[0]) || '';

  const secondBadgeText = isPass ? 'TIP' : (isWarn ? '체크' : '주의');
  const secondBadgeCls = isPass ? 'is-tip' : (isWarn ? 'is-check' : 'is-nope');

  // Resolve in-app harmonious pairing furniture (from item.pairIds or tone fallback)
  let pairedItems = (item.pairIds || [])
    .map((pid) => ITEMS_DB.find((dbItem) => dbItem.id === pid))
    .filter(Boolean);
  if (pairedItems.length === 0) {
    pairedItems = ITEMS_DB.filter(
      (dbItem) => dbItem.id !== item.id && dbItem.category !== item.category && dbItem.verdict !== 'NOPE'
    ).slice(0, 2);
  }

  let altLabel = 'NOPE 대신 이 스펙 추천';
  let altBoxCls = 'is-nope';
  let primaryBtnCls = 'btn-accent';
  if (isPass) {
    altLabel = '추천 옵션 · 함께 보기';
    altBoxCls = 'is-pass';
    primaryBtnCls = 'btn-primary';
  } else if (isWarn) {
    altLabel = '보완·대체 추천 스펙';
    altBoxCls = '';
    primaryBtnCls = 'btn-primary';
  }

  const primaryTone = item.tones && item.tones[0] ? getToneLabel(item.tones[0]) : '범용';
  const pairingReason = buildPairingReason(item, pairedItems, primaryTone);
  const dustCls = isPass && item.specs.dust <= 2 ? 'score-safe' : (item.specs.dust >= 4 ? 'score-high' : '');
  const depCls = isPass && item.specs.deposit <= 2 ? 'score-safe' : (item.specs.deposit >= 4 ? 'score-high' : '');
  const trbCls = isPass && item.specs.trouble <= 2 ? 'score-safe' : (item.specs.trouble >= 4 ? 'score-high' : '');

  const whyBoxCls = isPass ? 'is-pass' : (isWarn ? 'is-warn' : 'is-nope');
  const whySentence = item.oneLiner || (isPass ? goodLine : checkLine) || goodLine;
  const wished = isWishlistedItem(item.id);
  const savedProfile = normalizeRoomProfileConstraints(loadSavedRoomProfile());
  const fitAlerts = getPersonalFitAlerts(item, savedProfile);
  const prepInfo = getHiddenPrepInfo(item, savedProfile);
  const gapHint = getItemGapHint(item);
  const canRescue = !isPass;
  const rescuePatch = canRescue ? buildItemRescuePatch(item) : null;
  const altCompareItem = canRescue ? resolveAltCompareItem(item) : null;
  const deepRows = Array.isArray(item.deepSpecs) && item.deepSpecs.length
    ? item.deepSpecs
    : [
        { k: '분류 · 가격대', v: `${item.category} · ${item.priceTier}` },
        { k: '핵심 특성', v: (item.chips || []).join(' · ') || '일반 스펙' },
        { k: '주요 점검 포인트', v: checkLine || item.oneLiner },
        ...(item.checks && item.checks[0] ? [{ k: '실사용 검증 메모', v: item.checks[0] }] : [])
      ];

  sheetPanel.innerHTML = `
    <div class="sheet-grabber" aria-hidden="true"></div>
    <div class="sheet-head">
      <div>
        <span class="verdict-pill ${v.cls} is-hero">${v.text}</span>
        <h2 class="sheet-title">${escapeHtml(item.name)}</h2>
        <span class="sheet-meta">${escapeHtml(item.brand)} · ${escapeHtml(item.category)} · ${escapeHtml(item.priceTier)} · ${escapeHtml(primaryTone)} 톤</span>
      </div>
      <div class="sheet-head-actions">
        <button class="sheet-wish-btn ${wished ? 'active' : ''}" id="sheet-wish-toggle-btn" type="button">${wished ? '♥ 찜됨' : '♡ 저장'}</button>
        <button class="sheet-close" id="close-sheet-btn" aria-label="닫기">×</button>
      </div>
    </div>

    <div class="seed-segmented is-two" id="sheet-depth-seg" role="tablist" aria-label="상세 보기 깊이 선택">
      <button type="button" class="seed-seg-btn active" data-sheet-depth="summary">요약 · 구매</button>
      <button type="button" class="seed-seg-btn" data-sheet-depth="deep">스펙 · 리뷰 해부</button>
    </div>

    <div id="sheet-panel-summary">
      <div class="score-trio">
        <div class="score-pill"><span class="score-lbl">관리·먼지</span><strong class="${dustCls}">${item.specs.dust}/5</strong></div>
        <div class="score-pill"><span class="score-lbl">복구·주의</span><strong class="${depCls}">${item.specs.deposit}/5</strong></div>
        <div class="score-pill"><span class="score-lbl">수명·부담</span><strong class="${trbCls}">${item.specs.trouble}/5</strong></div>
      </div>

      <div class="sheet-why-box ${whyBoxCls}">
        <p class="sheet-why-sentence">${escapeHtml(whySentence)}</p>
      </div>

      ${(item.creatorPick || item.reviewPulse) ? `
        <div class="sheet-proof-box">
          ${item.creatorPick ? `
            <div class="sheet-proof-line">
              <span class="sheet-proof-badge ${item.creatorPick.sponsored === false ? 'is-clean' : ''}">출처</span>
              <span>${escapeHtml(item.creatorPick.source)}${item.creatorPick.sponsored === false ? ' (비협찬 확인)' : ''}${item.creatorPick.crossCount > 1 ? ` · 교차 언급 ${item.creatorPick.crossCount}곳` : ''}</span>
            </div>
          ` : ''}
          ${item.reviewPulse ? `
            <div class="sheet-proof-line">
              <span class="sheet-proof-badge">요약</span>
              <span><strong>${escapeHtml(item.reviewPulse.market)}:</strong> ${escapeHtml(item.reviewPulse.repeatedComplaint || item.reviewPulse.ratingSummary)}</span>
            </div>
          ` : ''}
        </div>
      ` : ''}

      ${savedProfile && fitAlerts.length ? `
        <div class="sheet-fit-box is-${fitAlerts[0].tone}">
          <div class="sheet-fit-head">
            <strong>${savedProfile.nickname ? `${escapeHtml(savedProfile.nickname)}님 조건 체크` : '내 조건 체크'}</strong>
            <span>${escapeHtml(savedProfile.pyeongLabel || '원룸')}</span>
          </div>
          <div class="sheet-fit-list">
            ${fitAlerts.slice(0, 2).map((al) => `
              <div class="sheet-fit-row">
                <span class="fit-dot is-${al.tone}"></span>
                <div>
                  <strong>${escapeHtml(al.shortBadge.replace(/^내 방 체크:\s*/, ''))}</strong>
                  <p>${escapeHtml(al.detail)}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : `
        <button type="button" id="sheet-fit-nudge-btn" class="sheet-fit-nudge">
          <span>내 방 크기·공구·월세 조건 등록하면 맞춤 경고를 띄워드려요</span>
          <strong>1분 등록 →</strong>
        </button>
      `}

      ${(() => {
        const showGood = Boolean(goodLine && goodLine.trim() && goodLine.trim() !== whySentence.trim());
        const showCheck = Boolean(checkLine && checkLine.trim() && checkLine.trim() !== whySentence.trim() && checkLine.trim() !== goodLine.trim());
        if (!showGood && !showCheck) return '';
        return `
          <div class="sheet-brief-box">
            ${showGood ? `<div class="sheet-brief-row"><span class="brief-badge is-good">장점</span><span>${escapeHtml(goodLine)}</span></div>` : ''}
            ${showCheck ? `<div class="sheet-brief-row"><span class="brief-badge ${secondBadgeCls}">${secondBadgeText}</span><span>${escapeHtml(checkLine)}</span></div>` : ''}
          </div>
        `;
      })()}

      <button type="button" id="sheet-extras-toggle" class="seed-disclosure-btn">
        <span>궁합 아이템 · 숨은 비용 · 결과 공유 더보기</span>
        <strong id="sheet-extras-arrow">열기 ▾</strong>
      </button>

      <div id="sheet-extras-body" class="seed-detail-extras hidden">
        ${gapHint ? `
          <div class="sheet-gap-hint">
            <span class="sheet-gap-hint-badge">틈새 수납</span>
            <span>${escapeHtml(gapHint)}</span>
          </div>
        ` : ''}

        <div class="sheet-pair-section">
          <div class="pair-head-row">
            <strong class="pair-head-title">함께 두면 잘 맞는 아이템</strong>
            <span class="pair-tone-badge">${escapeHtml(primaryTone)} 톤</span>
          </div>
          <div class="pair-grid">
            ${pairedItems.map((p) => {
              const pv = verdictMeta(p.verdict);
              return `
                <button class="pair-mini-card" data-pair-id="${escapeHtml(p.id)}">
                  <div><span class="verdict-pill ${pv.cls}" style="font-size:10px;padding:2px 6px;">${pv.text}</span></div>
                  <div class="pair-mini-title">${escapeHtml(p.name)}</div>
                  <div class="pair-mini-meta">${escapeHtml(p.category)} · ${escapeHtml(p.priceTier)} →</div>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="sheet-prep-box">
          <div class="prep-head-row">
            <strong class="prep-head-title">숨은 준비물 · 체감 비용</strong>
            <span class="prep-cost-pill">${escapeHtml(prepInfo.totalCostLine)}</span>
          </div>
          <div class="prep-kit-list">
            ${prepInfo.kits.map((kit) => {
              const kitUrls = buildShopUrls(kit.keyword);
              return `
                <div class="prep-kit-row">
                  <div class="prep-kit-info">
                    <strong>${escapeHtml(kit.title)}</strong>
                    <span class="prep-kit-price">${escapeHtml(kit.estCost)}</span>
                  </div>
                  <div class="prep-kit-links">
                    <a href="${kitUrls.coupang}" target="_blank" rel="noopener noreferrer" class="tip-shop-pill is-primary-shop">쿠팡 보기 →</a>
                    <a href="${kitUrls.ohouse}" target="_blank" rel="noopener noreferrer" class="tip-shop-pill">오늘의집 →</a>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="sheet-share-box">
          <div class="sheet-share-head">
            <strong>이 판독 결과 공유하기</strong>
          </div>
          <div class="sheet-share-row">
            <button type="button" id="sheet-copy-share-btn" class="btn-share-chip is-kakao">${KAKAO_LOGO_SVG}<span>카톡 공유</span></button>
            <button type="button" id="sheet-story-share-btn" class="btn-share-chip is-story">${INSTA_LOGO_SVG}<span>인스타 스토리</span></button>
          </div>
        </div>
      </div>

      ${canRescue ? `
        <div class="sheet-solution-tabs" role="tablist" aria-label="해결 방식 선택">
          <button type="button" class="sheet-solution-btn active" data-sol-tab="alt">새로 살 때: 추천 대안</button>
          <button type="button" class="sheet-solution-btn" data-sol-tab="rescue">이미 내 방에 있어요 (보완법)</button>
        </div>
      ` : ''}

      <div id="sheet-sol-alt" class="sheet-alt-box ${altBoxCls}">
        <span class="sheet-alt-kicker">${altLabel}</span>
        <strong class="sheet-alt-name">${escapeHtml(item.altName)}</strong>
        <div class="dual-link-row">
          <a href="${urls.coupang}" target="_blank" rel="noopener noreferrer" class="${primaryBtnCls}" style="padding:13px 12px;font-size:14px;font-weight:800;">쿠팡에서 보기 →</a>
          <a href="${urls.ohouse}" target="_blank" rel="noopener noreferrer" class="btn-ohouse">오늘의집 보기 →</a>
        </div>
        ${altCompareItem ? `
          <button type="button" id="sheet-alt-compare-btn" class="btn-alt-compare">
            ⚖️ '${escapeHtml(altCompareItem.name)}'과 A vs B 바로 비교 →
          </button>
        ` : ''}
        ${urls.hasCoupangAffiliate ? `<p class="ftc-affiliate-note">${escapeHtml(AFFILIATE_CONFIG.disclosureText)}</p>` : ''}
      </div>

      ${rescuePatch ? `
        <div id="sheet-sol-rescue" class="sheet-rescue-box hidden">
          <strong class="sheet-rescue-title">${escapeHtml(rescuePatch.symptom)}</strong>
          <span class="sheet-rescue-saving">${escapeHtml(rescuePatch.costSaving)}</span>
          <ul class="sheet-rescue-steps">
            ${rescuePatch.steps.map((st) => `<li>${escapeHtml(st)}</li>`).join('')}
          </ul>
          <div class="prep-kit-list">
            ${rescuePatch.kits.map((kit) => {
              const kUrls = buildShopUrls(kit.keyword);
              return `
                <div class="prep-kit-row">
                  <div class="prep-kit-info">
                    <strong>${escapeHtml(kit.title)}</strong>
                    <span class="prep-kit-price">${escapeHtml(kit.estCost)}</span>
                  </div>
                  <div class="prep-kit-links">
                    <a href="${kUrls.coupang}" target="_blank" rel="noopener noreferrer" class="tip-shop-pill is-primary-shop">쿠팡 →</a>
                    <a href="${kUrls.ohouse}" target="_blank" rel="noopener noreferrer" class="tip-shop-pill">오늘의집 →</a>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
          ${AFFILIATE_CONFIG.coupangEnabled ? `<p class="ftc-affiliate-note" style="margin-top:8px;">${escapeHtml(AFFILIATE_CONFIG.disclosureText)}</p>` : ''}
        </div>
      ` : ''}
    </div>

    <div id="sheet-panel-deep" class="hidden">
      <div class="deep-block">
        <strong class="deep-sec-title">원천 스펙 · 소재/성분 검증</strong>
        <div class="deep-spec-table">
          ${deepRows.map((row) => `
            <div class="deep-spec-row">
              <span class="deep-spec-k">${escapeHtml(row.k)}</span>
              <strong class="deep-spec-v">${escapeHtml(row.v)}</strong>
            </div>
          `).join('')}
        </div>
      </div>

      ${item.reviewPulse ? `
        <div class="deep-block">
          <strong class="deep-sec-title">마켓 리뷰 편향 · 별점 함정 분석</strong>
          <div class="deep-trap-box">
            <div class="deep-trap-meta">${escapeHtml(item.reviewPulse.market)} · ${escapeHtml(item.reviewPulse.ratingSummary)}</div>
            <div class="deep-trap-row"><strong>호평 요인</strong><span>${escapeHtml(item.reviewPulse.praised)}</span></div>
            <div class="deep-trap-row"><strong>중복 불만</strong><span>${escapeHtml(item.reviewPulse.repeatedComplaint)}</span></div>
            <div class="deep-trap-note">${escapeHtml(item.reviewPulse.trapNote)}</div>
          </div>
        </div>
      ` : ''}

      ${item.creatorPick ? `
        <div class="deep-block">
          <strong class="deep-sec-title">유튜브 · 전문가 출처 검증</strong>
          <div class="deep-trap-box">
            <div class="deep-trap-row"><strong>언급 출처</strong><span>${escapeHtml(item.creatorPick.source)}</span></div>
            <div class="deep-trap-row"><strong>협찬 여부</strong><span>${item.creatorPick.sponsored === false ? '유료광고 미포함·실사용 기반' : '유료광고/협찬 포함 여부 확인 필요'}</span></div>
            ${item.creatorPick.crossCount ? `<div class="deep-trap-row"><strong>교차 검증</strong><span>다수 채널 ${item.creatorPick.crossCount}곳 이상 공통 언급</span></div>` : ''}
          </div>
        </div>
      ` : ''}

      ${item.tierLadder ? `
        <div class="deep-block">
          <strong class="deep-sec-title">등급 사다리 · 업그레이드 비교</strong>
          <div class="tier-ladder-box">
            <div class="tier-step">
              <span class="tier-tag">실속 입문 기준</span>
              <strong>${escapeHtml(item.tierLadder.budget)}</strong>
            </div>
            <div class="tier-step is-ref">
              <span class="tier-tag">고관여 · 해외 종결급</span>
              <strong>${escapeHtml(item.tierLadder.reference)}</strong>
            </div>
          </div>
        </div>
      ` : ''}

      ${(item.checks && item.checks.length) ? `
        <div class="deep-block">
          <strong class="deep-sec-title">세부 실사용 체크리스트</strong>
          <ul class="deep-check-ul">
            ${item.checks.map((c) => `<li>${escapeHtml(c)}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
    </div>
  `;

  sheetBackdrop.classList.remove('hidden');
  syncBodyScrollLock();
  sheetPanel.scrollTop = 0;
  document.getElementById('close-sheet-btn').addEventListener('click', closeDetailSheet);
  const depthSegBtns = sheetPanel.querySelectorAll('#sheet-depth-seg [data-sheet-depth]');
  depthSegBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetDepth = btn.dataset.sheetDepth;
      depthSegBtns.forEach((b) => b.classList.toggle('active', b === btn));
      const sumPanel = document.getElementById('sheet-panel-summary');
      const deepPanel = document.getElementById('sheet-panel-deep');
      if (sumPanel) sumPanel.classList.toggle('hidden', targetDepth !== 'summary');
      if (deepPanel) deepPanel.classList.toggle('hidden', targetDepth !== 'deep');
      if (targetDepth === 'deep') {
        trackEvent('deep_spec_open', { id: item.id, category: item.category });
      }
    });
  });
  const extrasToggleBtn = document.getElementById('sheet-extras-toggle');
  if (extrasToggleBtn) {
    let extrasOpen = false;
    extrasToggleBtn.addEventListener('click', () => {
      extrasOpen = !extrasOpen;
      const body = document.getElementById('sheet-extras-body');
      const arrow = document.getElementById('sheet-extras-arrow');
      if (body) body.classList.toggle('hidden', !extrasOpen);
      if (arrow) arrow.textContent = extrasOpen ? '접기 ▲' : '열기 ▾';
    });
  }
  if (canRescue) {
    sheetPanel.querySelectorAll('.sheet-solution-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.solTab;
        sheetPanel.querySelectorAll('.sheet-solution-btn').forEach((b) => b.classList.toggle('active', b === btn));
        const altBox = document.getElementById('sheet-sol-alt');
        const rescueBox = document.getElementById('sheet-sol-rescue');
        if (altBox) altBox.classList.toggle('hidden', mode !== 'alt');
        if (rescueBox) rescueBox.classList.toggle('hidden', mode !== 'rescue');
        if (mode === 'rescue') {
          trackEvent('rescue_patch_view', { id: item.id, rule: rescuePatch ? rescuePatch.id : 'general' });
        }
      });
    });
  }
  const altCompareBtn = document.getElementById('sheet-alt-compare-btn');
  if (altCompareBtn && altCompareItem) {
    altCompareBtn.addEventListener('click', () => {
      trackEvent('compare_shortcut', { from_id: item.id, alt_id: altCompareItem.id });
      closeDetailSheet();
      activeCompareA = item.id;
      activeCompareB = altCompareItem.id;
      comparePickerTarget = null;
      compareSearchQuery = '';
      switchTab('scanner');
      setScannerMode('compare');
    });
  }
  const copyShareBtn = document.getElementById('sheet-copy-share-btn');
  if (copyShareBtn) {
    copyShareBtn.addEventListener('click', () => {
      copyTextToClipboard(buildItemShareSummaryText(item), '카톡 요약·링크 복사 완료!');
    });
  }
  const storyShareBtn = document.getElementById('sheet-story-share-btn');
  if (storyShareBtn) {
    storyShareBtn.addEventListener('click', () => {
      exportItemVerdictCard(item);
    });
  }
  const fitNudgeBtn = document.getElementById('sheet-fit-nudge-btn');
  if (fitNudgeBtn) {
    fitNudgeBtn.addEventListener('click', () => {
      closeDetailSheet();
      switchTab('home');
      startQuiz();
    });
  }
  const wishToggleBtn = document.getElementById('sheet-wish-toggle-btn');
  if (wishToggleBtn) {
    wishToggleBtn.addEventListener('click', () => {
      const nowSaved = toggleWishlistItem(item);
      wishToggleBtn.classList.toggle('active', nowSaved);
      wishToggleBtn.textContent = nowSaved ? '♥ 찜됨' : '♡ 저장';
    });
  }
  sheetPanel.querySelectorAll('.pair-mini-card').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = ITEMS_DB.find((it) => it.id === btn.dataset.pairId);
      if (target) openDetailSheet(target);
    });
  });
}

function closeDetailSheet() {
  sheetBackdrop.classList.add('hidden');
  syncBodyScrollLock();
}

sheetBackdrop.addEventListener('click', (e) => {
  if (e.target === sheetBackdrop) closeDetailSheet();
});

function inferCategoryFromQuery(lowerCompact) {
  const map = [
    { cat: '데스크테리어', rx: /모니터암|라이트바|스크린바|키보드|마우스|썬더볼트|허브|독|벤큐|어고트론|키크론|로지텍|칼디짓/ },
    { cat: '집청소·세탁', rx: /과탄산|구연산|곰팡이|세탁세제|세제|매직블럭|돌돌이|스팀청소기|얼룩|청소|표백|물때/ },
    { cat: '구강·욕실케어', rx: /치약|칫솔|불소|구강|가글|샤워기|필터|수건|타월|거치대/ },
    { cat: '소형가전·주방', rx: /가습기|청정기|제습기|전기포트|주전자|프라이팬|도마|에어프라이어|서큘레이터|음식물/ },
    { cat: '책상·의자', rx: /책상|데스크|의자|체어|모니터|타공판|멀티탭|전선|좌식|스탠딩/ },
    { cat: '수납·행거', rx: /행거|옷장|드레스룸|서랍|선반|책장|수납|리빙박스|정리함|압축팩|건조대|옷걸이|캐비닛|트롤리/ },
    { cat: '소파·침대·매트', rx: /소파|카우치|빈백|스툴|오토만|침대|프레임|깔판|매트리스|토퍼|이불|베개|쿠션|러그|카페트|탄소매트|전기매트/ },
    { cat: '식탁·주방·생활', rx: /식탁|테이블|아일랜드|홈바|렌지대|밥솥|주방|싱크대|식기|휴지통|냉장고|청소기|홈카페/ },
    { cat: '조명·거울', rx: /조명|무드등|스탠드|램프|전구|거울|미러|협탁|사이드테이블|선셋|센서등/ },
    { cat: '무타공·욕실', rx: /무타공|꼭꼬핀|코맨드|커튼|블라인드|롤스크린|욕실|변기|발매트|규조토|스퀴지|배수구|문풍지|현관|도어|디퓨저|시트지|포스터/ }
  ];
  const hit = map.find((m) => m.rx.test(lowerCompact));
  return hit ? hit.cat : '자취 가구·소품';
}

function buildSyntheticAnalysis(query) {
  const q = query.trim();
  const lower = q.toLowerCase();
  const compact = lower.replace(/\s+/g, '');
  const inferredCat = inferCategoryFromQuery(compact);
  const savedProfile = loadSavedRoomProfile();

  const rules = [
    { match: /허니콤|종이|초저가|저가|1만원대|2만원대/, chip: '내구성·심재 주의', trouble: 3, good: '초기 입문 비용 부담이 적은 편', check: '속이 빈 허니콤·얇은 PB는 무거운 하중·재조립 시 파손 위험이 큼' },
    { match: /시트지|필름|pb|mdf/, chip: '습기·까짐 주의', deposit: 1, trouble: 2, good: '깔끔한 외관과 합리적인 가격대', check: 'PVC 시트지는 물기·열기에 들뜨기 쉬우니 LPM 방수·원목 마감 여부 체크' },
    { match: /원목|고무나무|애쉬|오크|월넛/, chip: '원목 묵직·변형체크', dust: 1, good: '시트지 들뜸 없이 오래 쓰는 자연 질감', check: '온풍기·직사광선·뜨거운 냄비 바로 닿지 않게 받침대 사용 권장' },
    { match: /오픈|행거|선반|사다리|메쉬|와이어/, chip: '먼지 노출 관리', dust: 2, trouble: 1, good: '시야가 트여 좁은 방에서도 답답하지 않음', check: '오픈 구조라 2주 내 먼지·시각적 노이즈 누적 → 커버·불투명 박스 병행 추천' },
    { match: /diy|조립|이케아|철제|마켓비/, chip: '전동드릴·조립난이도', trouble: 2, good: '포장 부피가 작고 가성비가 뛰어난 편', check: '반제품 셀프 조립 시 전동드릴·장갑 동봉 여부 및 수평 유격 확인 필수' },
    { match: /타공|못질|벽선반|벽거울|벽걸이|드레스룸/, chip: '보증금 타공 주의', deposit: 4, check: '벽면 드릴 타공 필수 제품은 전월세 계약서 상 집주인 사전 동의 필수' },
    { match: /무타공|접착|테이프|코맨드|흡착|압축/, chip: '도배·타일 낙하 체크', deposit: 2, trouble: 1, good: '못질 없이 설치해 퇴실 시 원상복구 유리', check: '실크벽지 접착 시 뜯김 위험·욕실 타일 흡착형은 습기 낙하 주의' },
    { match: /부클레|패브릭|러그|샤기|소파|커튼|이불|쿠션|빈백/, chip: '커버 세탁·먼지', dust: 2, trouble: 2, good: '딱딱한 원룸에 포근하고 아늑한 무드 추가', check: '겉커버 분리 물세탁 가능 여부 및 이지클린 생활방수 원단 확인 필수' },
    { match: /유리|아크릴|책상|테이블|식탁|모션/, chip: '상판 두께·흔들림', dust: 1, trouble: 2, good: '작업·식사 구역을 명확히 잡아주는 핵심 가구', check: '상판 두께(18T 이상)·모니터암 거치 가능 여부 및 흔들림 보강대 체크' },
    { match: /조명|스탠드|무드등|전구|램프|파도|선셋/, chip: '전구 규격·색온도', good: '천장 형광등 대신 켜두면 방 분위기가 180도 아늑해짐', check: 'E26/E14 전구 포함 여부와 눈 안 부신 2700~3000K 전구색 체크' },
    { match: /거울|전신거울|아치|화장/, chip: '비산방지·왜곡체크', trouble: 1, good: '좁은 방에 깊이감을 더해 넓어 보이게 함', check: '울렁거리는 아크릴 대신 3mm+ 유리 & 뒷면 비산방지 필름 여부 확인' },
    { match: /침대|매트리스|토퍼|깔판|소파베드/, chip: '습기·허리 지지', dust: 1, trouble: 2, good: '수면 질과 직결되는 핵심 휴식 영역', check: '바닥 결로·곰팡이 막는 통풍 깔판 여부 + 방수 매트리스 커버 병행' },
    { match: /가습기|청정기|서큘|청소기|제습/, chip: '필터·세척 유지비', trouble: 2, good: '자취방 공기질과 건조·습기 스트레스를 직접 해결', check: '물통 통세척 편의성(상부 분리)과 호환 필터 연간 유지비 미리 확인' },
    { match: /규조토|발매트|욕실|샤워|변기|배수/, chip: '습기·물곰팡이 관리', trouble: 1, good: '욕실 위생과 청소 주기를 크게 줄여주는 아이템', check: 'SUS304 녹 방지 스텐 여부·변기/배수구 실제 규격(cm) 실측 필수' }
  ];

  let dust = 2;
  let deposit = 1;
  let trouble = 2;
  const chips = [];
  const checks = [];
  const goods = [];

  rules.forEach((r) => {
    if (r.match.test(compact)) {
      dust = Math.min(5, dust + (r.dust || 0));
      deposit = Math.min(5, deposit + (r.deposit || 0));
      trouble = Math.min(5, trouble + (r.trouble || 0));
      if (!chips.includes(r.chip)) chips.push(r.chip);
      if (r.check) checks.push(r.check);
      if (r.good) goods.push(r.good);
    }
  });

  // Factor user's own saved room constraints if completed
  if (savedProfile && /월세|원룸|보증금|못질 금지/.test(savedProfile.contractLabel || '')) {
    if (/타공|벽|블라인드|선반|거울|시트지|압축/.test(compact)) {
      deposit = Math.min(5, deposit + 1);
      checks.unshift(`${savedProfile.nickname || '내'} 방 조건(원상복구 필수): 벽지·장판 손상 없는 무타공 설치인지 꼭 확인하세요.`);
    }
  }
  if (savedProfile && (savedProfile.hasPet || savedProfile.hasAllergy)) {
    if (/러그|샤기|부클레|패브릭|소파|커튼|오픈|행거/.test(compact)) {
      dust = Math.min(5, dust + 1);
      trouble = Math.min(5, trouble + 1);
      checks.unshift('반려동물·비염 환경: 털/먼지가 엉키지 않는 단모·커버 분리 세탁·도어형 스펙인지 우선 확인하세요.');
    }
  }
  if (savedProfile && savedProfile.noElevator) {
    if (/서랍|옷장|침대|소파|책상|식탁|매트리스/.test(compact)) {
      trouble = Math.min(5, trouble + 1);
      checks.unshift('엘리베이터 없는 계단 운반: 무게(kg)·분할 포장 및 방문 기사 배송 가능 여부를 확인하세요.');
    }
  }

  let isGenericFallback = false;
  if (checks.length === 0) {
    isGenericFallback = true;
    chips.push('실측 60cm 체크', '소재·조립 확인', '리뷰 1점대 확인');
    checks.push(
      '구체적 상품은 아직 DB 등록 전이나, 구매 전 ①문 열림·통로 60cm 실측 ②마감 소재(LPM/원목/스텐304) ③오늘의집·쿠팡 최저평점 사진 리뷰 3가지를 꼭 확인하세요.'
    );
  }

  const sameCatPairs = ITEMS_DB
    .filter((it) => it.category === inferredCat && it.verdict === 'PASS')
    .slice(0, 2)
    .map((it) => it.id);

  const verdict = deposit >= 4 || trouble >= 4 ? 'NOPE' : 'WARN';
  const primaryCheck = checks[0];
  const goodLine = goods[0] || `${inferredCat} 영역에서 많이 찾는 실용 아이템군`;

  return {
    id: 'custom-scan',
    brand: 'LIVE SPEC SCAN',
    name: `"${q}" 실시간 키워드 판독`,
    category: inferredCat,
    verdict,
    priceTier: 'DB 외 상품 실시간 분석',
    chips: chips.slice(0, 3),
    oneLiner: primaryCheck,
    specs: { dust, deposit, trouble },
    checks,
    tones: savedProfile && savedProfile.toneId ? [savedProfile.toneId] : ['white-minimal'],
    pairIds: sameCatPairs,
    goodLine,
    checkLine: checks[1] || primaryCheck,
    altName: `"${q}" 실사용 최저평점 리뷰 확인 & 무타공·워셔블 대체 검색`,
    altSearchKeyword: q,
    isGenericFallback
  };
}

function findDirectAndSimilarItems(rawQuery) {
  const normalizedRaw = /^https?:\/\//i.test(rawQuery.trim())
    ? extractUrlClientFallback(rawQuery).extractedQuery
    : rawQuery;
  const q = normalizedRaw.trim().toLowerCase();
  const compactQ = q.replace(/\s+/g, '');
  const tokens = q.split(/\s+/).filter((t) => t.length >= 2);

  const activePassRule = state.activePassRuleId
    ? NOPE_TRAIT_RULES.find((r) => r.id === state.activePassRuleId)
    : null;
  const activeExcludeRules = [...state.excludedTraits]
    .filter((id) => id !== state.activePassRuleId)
    .map((id) => NOPE_TRAIT_RULES.find((r) => r.id === id))
    .filter(Boolean);
  let excludedByTraitsCount = 0;

  const direct = ITEMS_DB.filter((item) => {
    if (state.selectedVerdict !== 'ALL' && item.verdict !== state.selectedVerdict) {
      return false;
    }
    const f = state.selectedFilter;
    if (!q && activePassRule && activePassRule.passRx) {
      if (item.verdict === 'NOPE') return false;
      const passHay = `${item.brand} ${item.name} ${item.category} ${item.oneLiner || ''} ${item.goodLine || ''} ${(item.chips || []).join(' ')} ${(item.pros || []).join(' ')}`;
      if (!activePassRule.passRx.test(passHay)) return false;
    } else if (!q && f && f.type === 'brand') {
      const brands = f.value.split('|');
      if (!brands.some((b) => item.brand.includes(b))) return false;
    } else if (!q && f && f.type === 'domain') {
      const catMatch = Array.isArray(f.value) && f.value.includes(item.category);
      const kwMatch = f.keywords && f.keywords.test(getItemSearchableText(item));
      if (!catMatch && !kwMatch) return false;
    } else if (!q && f && f.type === 'proof') {
      if (f.value === 'creator' && !item.creatorPick) return false;
      if (f.value === 'organic' && !(item.creatorPick && item.creatorPick.sponsored === false)) return false;
      if (f.value === 'deep' && !(item.deepSpecs || item.tierLadder)) return false;
    } else if (!q && f && f.type === 'cat') {
      if (item.category !== f.value) return false;
    } else if (!q && f && f.type === 'theme') {
      const rx = THEME_MATCHERS[f.value];
      if (rx && !rx.test(getItemSearchableText(item))) return false;
    } else if (!q && f && f.type === 'rescue') {
      if (item.verdict === 'PASS') return false;
    }

    if (q) {
      const hay = `${item.brand} ${item.name} ${item.category} ${item.chips.join(' ')} ${item.oneLiner} ${item.altName || ''}`.toLowerCase();
      const compactHay = hay.replace(/\s+/g, '');
      const matched = hay.includes(q)
        || compactHay.includes(compactQ)
        || (tokens.length > 0 && tokens.some((tok) => hay.includes(tok)));
      if (!matched) return false;
    }

    if (activeExcludeRules.some((rule) => itemMatchesTraitRule(item, rule))) {
      excludedByTraitsCount += 1;
      return false;
    }
    return true;
  });

  if (!q && activePassRule) {
    const scoreRank = { PASS: 0, WARN: 1, NOPE: 2 };
    direct.sort((a, b) => scoreRank[a.verdict] - scoreRank[b.verdict]);
  }

  let similar = [];
  let inferredCat = q ? inferCategoryFromQuery(compactQ) : '';
  if (q && direct.length > 0 && inferredCat === '자취 가구·소품') {
    inferredCat = direct[0].category;
  }
  if (q && direct.length < 3) {
    const directIds = new Set(direct.map((d) => d.id));
    const scoreRank = { PASS: 0, WARN: 1, NOPE: 2 };
    similar = ITEMS_DB
      .filter((item) => {
        if (directIds.has(item.id)) return false;
        if (state.selectedVerdict !== 'ALL' && item.verdict !== state.selectedVerdict) return false;
        if (activeExcludeRules.some((rule) => itemMatchesTraitRule(item, rule))) return false;
        return inferredCat !== '자취 가구·소품' ? item.category === inferredCat : item.verdict === 'PASS';
      })
      .sort((a, b) => scoreRank[a.verdict] - scoreRank[b.verdict])
      .slice(0, 6);
  }

  return { direct, similar, inferredCat, excludedByTraitsCount };
}

function bindCardClicks(container, dataset) {
  container.querySelectorAll('.yuka-card').forEach((cardBtn) => {
    cardBtn.addEventListener('click', () => {
      const found = dataset.find((it) => it.id === cardBtn.dataset.itemId);
      if (found) openDetailSheet(found);
    });
  });
}

function renderItems() {
  const q = searchInput.value.trim();
  const f = state.selectedFilter;
  const { direct, similar, inferredCat, excludedByTraitsCount } = findDirectAndSimilarItems(q);
  state.lastExcludedCount = excludedByTraitsCount;

  const activeLabelEl = document.getElementById('scanner-active-label');
  if (activeLabelEl) {
    const baseTitle = state.scannerResultTitle || (q ? `"${q}" 검색` : (f && f.label ? f.label : `전체 ${ITEMS_DB.length}종`));
    const exNote = excludedByTraitsCount ? ` · 제외 ${excludedByTraitsCount}건` : '';
    activeLabelEl.textContent = `${baseTitle} (${direct.length}건${similar.length ? ` + 유사 ${similar.length}건` : ''}${exNote})`;
  }
  renderExcludeTraitsBars();

  let html = '';
  if (direct.length > 0) {
    html += direct.map(renderYukaCard).join('');
  }

  if (similar.length > 0) {
    html += `
      <div class="similar-section-head">
        <span>"${escapeHtml(q)}" 대신 비교해 볼 <strong>${escapeHtml(inferredCat)}</strong> 검증 가구</span>
      </div>
      ${similar.map(renderYukaCard).join('')}
    `;
  } else if (direct.length === 0 && !q) {
    if (excludedByTraitsCount > 0) {
      html = `
        <div class="card">
          <p style="margin:0 0 6px;font-weight:700;">설정한 NOPE 제외 필터로 ${excludedByTraitsCount}개 상품이 가려졌어요.</p>
          <p class="text-secondary" style="margin:0 0 12px;font-size:13px;">위에서 제외 칩을 끄거나, 아래 버튼으로 제외 필터를 해제해 볼 수 있어요.</p>
          <button type="button" class="btn btn-secondary" id="empty-clear-exclude-btn">제외 필터 모두 끄기 (${state.excludedTraits.size}개)</button>
        </div>
      `;
    } else {
      html = `<div class="card"><p class="text-secondary" style="margin:0;">선택한 조건에 맞는 상품이 없습니다.</p></div>`;
    }
  }

  itemsListEl.innerHTML = html;
  const emptyClearBtn = document.getElementById('empty-clear-exclude-btn');
  if (emptyClearBtn) {
    emptyClearBtn.addEventListener('click', () => {
      state.excludedTraits.clear();
      saveExcludedTraits();
      renderExcludeTraitsBars();
      renderItems();
    });
  }
  bindCardClicks(itemsListEl, [...direct, ...similar]);
}

document.querySelectorAll('#verdict-filter-bar .vfilter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.selectedVerdict = btn.dataset.verdict;
    document.querySelectorAll('#verdict-filter-bar .vfilter-btn').forEach((b) => {
      b.classList.toggle('active', b === btn);
    });
    renderItems();
  });
});

const analyzeBtn = document.getElementById('item-analyze-btn');
const itemImageInput = document.getElementById('item-image-input');
const scannerImagePreview = document.getElementById('scanner-image-preview');
const scannerImageThumb = document.getElementById('scanner-image-thumb');
const scannerImageName = document.getElementById('scanner-image-name');
const itemImageNoteInput = document.getElementById('item-image-note');
const recentAutoWrap = document.getElementById('recent-auto-wrap');
const recentAutoChips = document.getElementById('recent-auto-chips');

let pendingScanImage = null; // { name, mimeType, base64, dataUrl }

function clearPendingScanImage() {
  pendingScanImage = null;
  if (itemImageInput) itemImageInput.value = '';
  if (itemImageNoteInput) itemImageNoteInput.value = '';
  if (scannerImagePreview) scannerImagePreview.classList.add('hidden');
  if (scannerImageThumb) scannerImageThumb.removeAttribute('src');
}

function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('이미지 읽기 실패'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('이미지 디코딩 실패'));
      img.onload = () => {
        const maxEdge = 960;
        const scale = Math.min(1, maxEdge / Math.max(img.width || 1, img.height || 1));
        const w = Math.max(1, Math.round(img.width * scale));
        const h = Math.max(1, Math.round(img.height * scale));
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
        const base64 = dataUrl.split(',')[1] || '';
        resolve({
          name: file.name || '붙여넣은 이미지.jpg',
          mimeType: 'image/jpeg',
          base64,
          dataUrl
        });
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

async function attachScanImageFile(file) {
  if (!file || !file.type.startsWith('image/')) {
    showToast('이미지 파일(JPG, PNG, WEBP)만 첨부할 수 있어요.');
    return;
  }
  try {
    pendingScanImage = await compressImageFile(file);
    if (scannerImageThumb) scannerImageThumb.src = pendingScanImage.dataUrl;
    if (scannerImageName) scannerImageName.textContent = pendingScanImage.name;
    if (scannerImagePreview) scannerImagePreview.classList.remove('hidden');
    showToast('이미지 첨부 완료! "판독"을 눌러주세요.');
  } catch {
    showToast('이미지를 불러오지 못했어요. 다른 사진을 선택해 주세요.');
  }
}

if (itemImageInput) {
  itemImageInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) attachScanImageFile(file);
  });
}

const clearImageBtn = document.getElementById('clear-scanner-image-btn');
if (clearImageBtn) {
  clearImageBtn.addEventListener('click', clearPendingScanImage);
}

document.getElementById('tab-scanner').addEventListener('paste', (e) => {
  const items = e.clipboardData && e.clipboardData.items;
  if (!items) return;
  for (const it of items) {
    if (it.type && it.type.startsWith('image/')) {
      const blob = it.getAsFile();
      if (blob) {
        attachScanImageFile(blob);
        e.preventDefault();
        break;
      }
    }
  }
});

function loadLocalAutoItems() {
  try {
    const arr = JSON.parse(localStorage.getItem(STORAGE_KEYS.autoItems) || '[]');
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function saveLocalAutoItem(item) {
  const curr = loadLocalAutoItems().filter((x) => x.id !== item.id && x.name !== item.name);
  curr.unshift(item);
  localStorage.setItem(STORAGE_KEYS.autoItems, JSON.stringify(curr.slice(0, 12)));
}

function renderAutoCollectedChips(serverEntries = null) {
  if (!recentAutoWrap || !recentAutoChips) return;
  const localItems = loadLocalAutoItems();
  const merged = [];
  const seen = new Set();

  if (Array.isArray(serverEntries)) {
    serverEntries.forEach((entry) => {
      const it = entry && entry.item;
      if (it && it.name && !seen.has(it.name)) {
        seen.add(it.name);
        merged.push(it);
      }
    });
  }
  localItems.forEach((it) => {
    if (it && it.name && !seen.has(it.name)) {
      seen.add(it.name);
      merged.push(it);
    }
  });

  if (merged.length === 0) {
    recentAutoWrap.classList.add('hidden');
    return;
  }

  recentAutoWrap.classList.remove('hidden');
  recentAutoChips.innerHTML = '';
  merged.slice(0, 6).forEach((it) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip';
    b.textContent = it.name.length > 18 ? `${it.name.slice(0, 18)}…` : it.name;
    b.addEventListener('click', () => openDetailSheet(it));
    recentAutoChips.appendChild(b);
  });
}

function hasLocalServerApi() {
  return location.hostname === 'localhost'
    || location.hostname === '127.0.0.1'
    || /^192\.168\.|^172\.(1[6-9]|2\d|3[0-1])\.|^10\./.test(location.hostname);
}

async function refreshAutoCollectedItems() {
  renderAutoCollectedChips();
  if (location.protocol.startsWith('http') && hasLocalServerApi()) {
    try {
      const res = await fetch('/api/auto-items');
      if (res.ok) {
        const data = await res.json();
        renderAutoCollectedChips(data.items || []);
      }
    } catch {
      // Static server mode without Python API: localStorage list stays active
    }
  }
}

function extractUrlClientFallback(rawInput) {
  try {
    const u = new URL(rawInput.trim());
    const qs = u.searchParams;
    const qParam = qs.get('q') || qs.get('query') || qs.get('sword') || qs.get('keyword') || '';
    const host = u.hostname.toLowerCase();
    const slug = u.pathname
      .split('/')
      .map((s) => decodeURIComponent(s).replace(/[-_]/g, ' '))
      .filter((s) => s && !/^\d+$/.test(s) && !/^(vp|products|productions|np|search|catalog|p|kr|ko)$/i.test(s))
      .join(' ');
    return {
      isUrl: true,
      url: rawInput.trim(),
      host,
      extractedQuery: `${qParam} ${slug}`.trim() || host
    };
  } catch {
    return { isUrl: false, url: '', host: '', extractedQuery: rawInput.trim() };
  }
}

const QUICK_REFINE_CATS = [
  { id: 'desk', label: '책상·의자', query: '책상 의자' },
  { id: 'storage', label: '수납·행거', query: '행거 수납장 선반' },
  { id: 'sofa', label: '소파·침대', query: '소파 러그 침대' },
  { id: 'kitchen', label: '식탁·주방', query: '식탁 주방 수납' },
  { id: 'lamp', label: '조명·거울', query: '조명 전신거울' },
  { id: 'nodrill', label: '무타공·욕실', query: '무타공 욕실선반 커튼' }
];

const QUICK_REFINE_FEATURES = [
  { id: 'sheet', label: '시트지·합판 같음', query: '시트지 pb' },
  { id: 'diy', label: '조립해야 함', query: '조립 diy' },
  { id: 'open', label: '오픈형(문 없음)', query: '오픈' },
  { id: 'wall', label: '벽에 붙이거나 못질', query: '타공 벽 무타공' },
  { id: 'fabric', label: '털·천 재질(세탁 궁금)', query: '패브릭 러그' },
  { id: 'woodsteel', label: '원목·스틸', query: '원목 철제' }
];

function renderCustomScanResult({ analyzedItem, engineLabel, urlStatusNote, rawInput, effectiveSearchQuery, needsRefineChips, baseFallbackText }) {
  const shopKeyword = analyzedItem.altSearchKeyword || effectiveSearchQuery || analyzedItem.category;
  const urls = buildShopUrls(shopKeyword);
  customOutEl.innerHTML = `
    <div class="engine-meta-banner">
      <span>${escapeHtml(engineLabel)}</span>
      <span class="engine-meta-pill">${analyzedItem.sourceUrl ? 'URL' : (pendingScanImage ? 'IMAGE' : 'LIVE')} · 자동 저장</span>
    </div>
    ${needsRefineChips ? `
      <div class="url-refine-box">
        <div class="url-refine-title">사진·단축 링크에서 상품 이름을 못 읽었어요. 어떤 제품인지 2초만 골라주세요:</div>
        <div class="url-refine-step">
          <span class="url-refine-sub">1단계 · 품목 고르기</span>
          <div class="chips-row">
            ${QUICK_REFINE_CATS.map((c) => `<button type="button" class="chip url-refine-chip ${state.quickRefineCat === c.id ? 'active' : ''}" data-refine-cat="${escapeHtml(c.id)}">${escapeHtml(c.label)}</button>`).join('')}
          </div>
        </div>
        <div class="url-refine-step">
          <span class="url-refine-sub">2단계 · 눈에 보이는 특징 (여러 개 선택 가능)</span>
          <div class="chips-row">
            ${QUICK_REFINE_FEATURES.map((f) => `<button type="button" class="chip url-refine-chip ${state.quickRefineFeatures.includes(f.id) ? 'active' : ''}" data-refine-feat="${escapeHtml(f.id)}">${escapeHtml(f.label)}</button>`).join('')}
          </div>
        </div>
      </div>
    ` : ''}
    ${renderYukaCard(analyzedItem)}
    <div class="live-search-bridge">
      <div class="dual-link-row" style="margin-bottom:8px;">
        <a href="${analyzedItem.sourceUrl || urls.ohouse}" target="_blank" rel="noopener noreferrer" class="btn-ohouse">${analyzedItem.sourceUrl ? '원본 링크 열기 →' : '오늘의집 리뷰 검색 →'}</a>
        <a href="${urls.coupang}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding:11px 10px;font-size:13px;font-weight:800;">쿠팡 실후기 보기 →</a>
      </div>
      <div class="sheet-share-row">
        <button type="button" id="live-copy-share-btn" class="btn-share-chip is-kakao">${KAKAO_LOGO_SVG}<span>카톡 공유</span></button>
        <button type="button" id="live-story-share-btn" class="btn-share-chip is-story">${INSTA_LOGO_SVG}<span>인스타 스토리</span></button>
      </div>
    </div>
  `;

  const applyQuickRefine = () => {
    const catObj = QUICK_REFINE_CATS.find((c) => c.id === state.quickRefineCat);
    const featTokens = state.quickRefineFeatures
      .map((fid) => QUICK_REFINE_FEATURES.find((f) => f.id === fid))
      .filter(Boolean)
      .map((f) => f.query);
    const combinedQuery = [catObj ? catObj.query : '', ...featTokens, baseFallbackText]
      .filter(Boolean)
      .join(' ')
      .trim();
    const updated = buildSyntheticAnalysis(combinedQuery || '가구');
    if (analyzedItem.sourceUrl) {
      updated.sourceUrl = analyzedItem.sourceUrl;
      updated.brand = analyzedItem.brand;
    } else if (pendingScanImage) {
      updated.brand = 'IMAGE SCAN';
    }
    const labelParts = [catObj ? catObj.label : '', ...state.quickRefineFeatures.map((fid) => QUICK_REFINE_FEATURES.find((f) => f.id === fid)?.label).filter(Boolean)];
    if (labelParts.length) {
      updated.name = `${labelParts.join(' · ')} 스펙 판독`;
      updated.altSearchKeyword = [catObj ? catObj.label : '', ...featTokens].filter(Boolean).join(' ');
    }
    saveLocalAutoItem(updated);
    refreshAutoCollectedItems();
    const prevVal = searchInput.value;
    searchInput.value = updated.altSearchKeyword || updated.category || '';
    renderItems();
    searchInput.value = prevVal;
    renderCustomScanResult({
      analyzedItem: updated,
      engineLabel: '선택 보정 실시간 스펙 판독',
      urlStatusNote,
      rawInput,
      effectiveSearchQuery: updated.altSearchKeyword || effectiveSearchQuery,
      needsRefineChips: true,
      baseFallbackText
    });
  };

  customOutEl.querySelectorAll('[data-refine-cat]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.refineCat;
      state.quickRefineCat = state.quickRefineCat === id ? '' : id;
      applyQuickRefine();
    });
  });
  customOutEl.querySelectorAll('[data-refine-feat]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.refineFeat;
      state.quickRefineFeatures = state.quickRefineFeatures.includes(id)
        ? state.quickRefineFeatures.filter((x) => x !== id)
        : [...state.quickRefineFeatures, id];
      applyQuickRefine();
    });
  });

  const liveCopyBtn = document.getElementById('live-copy-share-btn');
  if (liveCopyBtn) {
    liveCopyBtn.addEventListener('click', () => {
      copyTextToClipboard(buildItemShareSummaryText(analyzedItem), '카톡 요약·링크 복사 완료!');
    });
  }
  const liveStoryBtn = document.getElementById('live-story-share-btn');
  if (liveStoryBtn) {
    liveStoryBtn.addEventListener('click', () => {
      exportItemVerdictCard(analyzedItem);
    });
  }
  bindCardClicks(customOutEl, [analyzedItem]);
}

async function runScannerSearch() {
  const rawInput = searchInput.value.trim();
  const imageNote = itemImageNoteInput ? itemImageNoteInput.value.trim() : '';
  if (!rawInput && !pendingScanImage) {
    showToast('상품명, 링크(URL), 또는 이미지를 넣어주세요.');
    return;
  }

  state.quickRefineCat = '';
  state.quickRefineFeatures = [];
  state.activePassRuleId = '';

  const looksLikeUrl = /^https?:\/\//i.test(rawInput);
  const urlInfo = looksLikeUrl ? extractUrlClientFallback(rawInput) : { isUrl: false, url: '', extractedQuery: rawInput };
  const effectiveSearchQuery = urlInfo.isUrl
    ? (urlInfo.extractedQuery || '')
    : `${rawInput} ${imageNote}`.trim();

  state.selectedFilter = { label: '검색', type: 'all', value: '전체' };
  state.selectedVerdict = 'ALL';
  document.querySelectorAll('#verdict-filter-bar .vfilter-btn').forEach((b) => {
    b.classList.toggle('active', b.dataset.verdict === 'ALL');
  });

  // Search local curated DB first when text query exists
  const compactQ = effectiveSearchQuery.toLowerCase().replace(/\s+/g, '');
  const hasExact = !urlInfo.isUrl && !pendingScanImage && compactQ.length >= 2 && ITEMS_DB.some((item) => {
    const compactHay = `${item.brand} ${item.name} ${item.category}`.toLowerCase().replace(/\s+/g, '');
    return compactHay.includes(compactQ);
  });

  if (hasExact) {
    customOutEl.innerHTML = '';
    openScannerResults(`"${rawInput}" 검색`);
    renderItems();
    trackEvent('product_search', {
      query: rawInput,
      mode: 'db',
      excluded_count: state.lastExcludedCount
    });
    return;
  }

  if (analyzeBtn) {
    analyzeBtn.disabled = true;
    analyzeBtn.textContent = '판독 중…';
  }

  let analyzedItem = null;
  let engineLabel = '브라우저 키워드 실시간 판독';
  let urlStatusNote = '';
  const fallbackText = `${effectiveSearchQuery} ${imageNote}`.trim() || (pendingScanImage ? pendingScanImage.name : '가구');

  try {
    if (!hasLocalServerApi()) throw new Error('Static deployment fallback');
    const savedProfile = loadSavedRoomProfile();
    const payload = {
      query: urlInfo.isUrl ? '' : rawInput,
      url: urlInfo.url,
      imageBase64: pendingScanImage ? pendingScanImage.base64 : '',
      mimeType: pendingScanImage ? pendingScanImage.mimeType : '',
      imageNote,
      roomProfile: savedProfile || {}
    };

    const res = await fetch('/api/analyze-item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    analyzedItem = data.item;
    engineLabel = data.engineLabel || '서버 실시간 스펙 분석';
    if (data.fetchInfo && data.fetchInfo.urlStatus && !['ok', 'partial', 'no_url'].includes(data.fetchInfo.urlStatus)) {
      urlStatusNote = '쇼핑몰 보안 정책으로 전체 HTML 접근이 제한되어, URL 상품 단서와 키워드·첨부 이미지 기준으로 판독했습니다.';
    }
  } catch {
    // Graceful client fallback when running on static Vercel hosting or offline
    analyzedItem = buildSyntheticAnalysis(fallbackText);
    if (urlInfo.isUrl) {
      analyzedItem.name = `"${urlInfo.host}" 링크 상품 분석`;
      analyzedItem.brand = urlInfo.host.includes('ohou.se') ? '오늘의집' : (urlInfo.host.includes('coupang') ? '쿠팡' : 'URL SCAN');
      analyzedItem.sourceUrl = urlInfo.url;
    } else if (pendingScanImage) {
      analyzedItem.name = rawInput || imageNote || `첨부 사진 스펙 분석`;
      analyzedItem.brand = 'IMAGE SCAN';
    }
    engineLabel = '실시간 키워드·스펙 판독';
  } finally {
    if (analyzeBtn) {
      analyzeBtn.disabled = false;
      analyzeBtn.textContent = '판독';
    }
  }

  if (analyzedItem) {
    saveLocalAutoItem(analyzedItem);
    refreshAutoCollectedItems();
    trackEvent('product_search', {
      query: urlInfo.isUrl ? urlInfo.host : rawInput,
      mode: urlInfo.isUrl ? 'url' : 'synthetic',
      excluded_count: state.lastExcludedCount
    });
  }

  // Temporarily populate searchInput with inferred query/name for similar-item matching
  openScannerResults(`SCAN · ${rawInput || analyzedItem.name}`);
  const savedSearchVal = searchInput.value;
  if (urlInfo.isUrl || !rawInput) {
    searchInput.value = analyzedItem.name || analyzedItem.category || '';
  }
  renderItems();
  searchInput.value = savedSearchVal;

  const isShortUrl = urlInfo.isUrl && /ozip\.me|link\.coupang\.com|coupa\.ng|bit\.ly|me2\.do|naver\.me|han\.gl/i.test(urlInfo.host);
  const needsRefineChips = Boolean(
    analyzedItem && (analyzedItem.isGenericFallback || isShortUrl || (analyzedItem.chips && analyzedItem.chips.includes('실측 60cm 체크')))
  );

  renderCustomScanResult({
    analyzedItem,
    engineLabel,
    urlStatusNote,
    rawInput,
    effectiveSearchQuery,
    needsRefineChips,
    baseFallbackText: fallbackText
  });
}

if (analyzeBtn) analyzeBtn.addEventListener('click', runScannerSearch);
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') runScannerSearch();
});

// ---------------- Tab 2-B: Tone & Mood Matcher Sector ----------------
const matcherBaseRow = document.getElementById('matcher-base-row');
const matcherStyleRow = document.getElementById('matcher-style-row');
const matcherToneGrid = document.getElementById('matcher-tone-grid');
const matcherCatRow = document.getElementById('matcher-cat-row');
const matcherOutput = document.getElementById('matcher-output');

const COMPARE_PRESETS = [
  { label: '라그캅텐 vs 두닷 콰트로', a: 'ikea-lagkapten', b: 'dodot-quattro' },
  { label: '샤기 러그 vs 사이잘룩 러그', a: 'shaggy-rug', b: 'sisal-look-rug' },
  { label: '우드블라인드 vs 핀 쉬폰커튼', a: 'wood-blind', b: 'pin-sheer-curtain' },
  { label: '흡착 선반 vs 스텐304 압축', a: 'suction-corner-rack', b: 'ss304-tension-bath-rod' }
];

let activeCompareA = '';
let activeCompareB = '';
let comparePickerTarget = null;
let compareSearchQuery = '';
let compareSearchCat = 'ALL';
let compareUseExclude = true;

function getActiveCompareExcludeRules() {
  if (!compareUseExclude || !state.excludedTraits.size) return [];
  return [...state.excludedTraits]
    .map((id) => NOPE_TRAIT_RULES.find((r) => r.id === id))
    .filter(Boolean);
}

function getSurveyCompareRecommendations(savedProfile, excludeIds = [], targetCategory = '') {
  const excluded = new Set(excludeIds.filter(Boolean));
  const activeExcludeRules = getActiveCompareExcludeRules();
  const pool = ITEMS_DB.filter((it) => {
    if (excluded.has(it.id) || it.verdict === 'NOPE') return false;
    if (activeExcludeRules.some((r) => itemMatchesTraitRule(it, r))) return false;
    return true;
  });

  const baseCandidates = targetCategory
    ? pool.filter((it) => it.category === targetCategory)
    : pool;
  const candidates = baseCandidates.length >= 2 ? baseCandidates : pool;

  const scored = candidates.map((it) => {
    const alerts = savedProfile ? getPersonalFitAlerts(it, savedProfile) : [];
    const dangerCnt = alerts.filter((a) => a.tone === 'danger').length;
    const warnCnt = alerts.filter((a) => a.tone === 'warn').length;
    const toneHit = Boolean(savedProfile && savedProfile.toneId && Array.isArray(it.tones) && it.tones.includes(savedProfile.toneId));
    const bonus = surveyFitBonus(it, savedProfile);
    const verdictPts = it.verdict === 'PASS' ? 14 : 5;
    const riskPenalty = ((it.specs?.dust || 2) + (it.specs?.deposit || 2) + (it.specs?.trouble || 2)) + dangerCnt * 12 + warnCnt * 4;
    const score = verdictPts + bonus + (toneHit ? 6 : 0) - riskPenalty;

    let reason = it.goodLine || it.oneLiner || '';
    if (targetCategory && it.category === targetCategory) {
      reason = `${targetCategory} 대안 · ${it.verdict === 'PASS' ? '내구성·유지관리 안정' : '조건 확인 후 비교'}`;
    } else if (savedProfile) {
      if (toneHit && savedProfile.toneName) {
        reason = `'${savedProfile.toneName}' 톤 맞춤 · ${it.verdict === 'PASS' ? '내 방 조건 안정' : '체크 항목 양호'}`;
      } else if (dangerCnt === 0 && warnCnt === 0) {
        reason = '내 방 제약(원상복구·동선) 통과 추천';
      }
    }
    return { item: it, score, dangerCnt, reason };
  });

  scored.sort((a, b) => b.score - a.score);
  if (targetCategory) {
    return scored.slice(0, 4);
  }
  const picked = [];
  const usedCats = new Set();
  for (const entry of scored) {
    if (entry.dangerCnt > 0) continue;
    if (!usedCats.has(entry.item.category)) {
      picked.push(entry);
      usedCats.add(entry.item.category);
    }
    if (picked.length >= 4) break;
  }
  for (const entry of scored) {
    if (picked.length >= 4) break;
    if (!picked.includes(entry)) picked.push(entry);
  }
  return picked.slice(0, 4);
}

function getFilteredCompareItems() {
  const q = compareSearchQuery.trim().toLowerCase();
  const compactQ = q.replace(/\s+/g, '');
  const activeExcludeRules = getActiveCompareExcludeRules();
  let hiddenByExclude = 0;

  const list = ITEMS_DB.filter((it) => {
    if (compareSearchCat !== 'ALL' && it.category !== compareSearchCat) return false;
    if (q) {
      const hay = `${it.name} ${it.brand} ${it.category} ${it.oneLiner || ''} ${(it.chips || []).join(' ')}`.toLowerCase();
      if (!(hay.includes(q) || (compactQ && hay.replace(/\s+/g, '').includes(compactQ)))) return false;
    }
    if (activeExcludeRules.some((r) => itemMatchesTraitRule(it, r))) {
      hiddenByExclude += 1;
      return false;
    }
    return true;
  });
  return { items: list, hiddenByExclude };
}

function renderComparePickerList() {
  const listEl = document.getElementById('compare-picker-list');
  const countEl = document.getElementById('compare-picker-count');
  if (!listEl) return;
  const { items, hiddenByExclude } = getFilteredCompareItems();
  const selectedId = comparePickerTarget === 'A' ? activeCompareA : activeCompareB;
  const otherId = comparePickerTarget === 'A' ? activeCompareB : activeCompareA;

  if (countEl) {
    const exNote = hiddenByExclude ? ` · NOPE 제외 ${hiddenByExclude}종` : '';
    countEl.textContent = compareSearchQuery.trim()
      ? `검색 결과 ${items.length}종${exNote}`
      : `총 ${items.length}종${exNote}`;
  }

  if (!items.length) {
    listEl.innerHTML = `<div class="compare-picker-empty">일치하는 제품이 없어요. 브랜드명이나 카테고리(예: 책상, 러그, 행거)로 검색해 보세요.</div>`;
    return;
  }

  listEl.innerHTML = items.map((it) => {
    const vm = verdictMeta(it.verdict);
    const isCurrent = it.id === selectedId;
    const isOther = it.id === otherId;
    return `
      <button type="button" class="compare-picker-item ${isCurrent ? 'is-current' : ''}" data-pick-id="${escapeHtml(it.id)}">
        <div class="compare-picker-item-main">
          <span class="verdict-pill ${vm.cls}">${vm.text}</span>
          <div class="compare-picker-item-text">
            <strong>${escapeHtml(it.name)}</strong>
            <span>${escapeHtml(it.brand)} · ${escapeHtml(it.category)} · ${escapeHtml(it.priceTier)}</span>
          </div>
        </div>
        <span class="compare-picker-item-tag">${isCurrent ? '현재 선택' : (isOther ? '상대 제품' : '고르기')}</span>
      </button>
    `;
  }).join('');

  listEl.querySelectorAll('.compare-picker-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.pickId;
      if (comparePickerTarget === 'A') {
        activeCompareA = id;
        comparePickerTarget = activeCompareB ? null : 'B';
      } else if (comparePickerTarget === 'B') {
        activeCompareB = id;
        comparePickerTarget = activeCompareA ? null : 'A';
      }
      compareSearchQuery = '';
      renderCompareView();
    });
  });
}

function renderCompareView() {
  const outEl = document.getElementById('compare-output');
  if (!outEl) return;

  const itemA = ITEMS_DB.find((it) => it.id === activeCompareA) || null;
  const itemB = ITEMS_DB.find((it) => it.id === activeCompareB) || null;
  const hasBoth = Boolean(itemA && itemB);
  const savedProfile = loadSavedRoomProfile();
  const pickedAnchor = itemA || itemB || null;

  const slotCardHtml = (slot, item) => {
    const isPicking = comparePickerTarget === slot;
    if (!item) {
      return `
        <button type="button" id="compare-pick-btn-${slot.toLowerCase()}" class="compare-pick-card is-empty ${isPicking ? 'is-picking' : ''}" aria-label="${slot === 'A' ? '첫 번째' : '두 번째'} 제품 검색해서 고르기">
          <div class="compare-pick-top">
            <span class="compare-slot-empty-pill">미선택</span>
          </div>
          <strong class="compare-pick-name">${slot === 'A' ? '비교할 제품 선택' : '상대 제품 선택'}</strong>
          <span class="compare-pick-sub">검색하거나 아래 추천에서 담아보세요</span>
          <span class="compare-pick-cta">${isPicking ? '검색 중 ▲' : '검색해서 고르기 ›'}</span>
        </button>
      `;
    }
    const vm = verdictMeta(item.verdict);
    return `
      <button type="button" id="compare-pick-btn-${slot.toLowerCase()}" class="compare-pick-card ${isPicking ? 'is-picking' : ''}" aria-label="${escapeHtml(item.name)} 변경">
        <div class="compare-pick-top">
          <span class="verdict-pill ${vm.cls}">${vm.text}</span>
        </div>
        <strong class="compare-pick-name">${escapeHtml(item.name)}</strong>
        <span class="compare-pick-sub">${escapeHtml(item.brand)} · ${escapeHtml(item.priceTier)}</span>
        <span class="compare-pick-cta">${isPicking ? '선택 중 ▲' : '검색해서 변경 ›'}</span>
      </button>
    `;
  };

  const pickerHtml = comparePickerTarget ? `
    <div id="compare-picker-panel" class="compare-picker-panel">
      <div class="compare-picker-head">
        <strong>${(!itemA && comparePickerTarget === 'A') || (!itemB && comparePickerTarget === 'B') ? '비교 제품 검색해서 고르기' : '다른 제품으로 바꾸기'} <span id="compare-picker-count" class="compare-picker-count"></span></strong>
        <button type="button" id="compare-picker-close" class="btn-ghost btn-sm" style="padding:2px 6px;">닫기 ✕</button>
      </div>
      ${state.excludedTraits.size > 0 ? `
        <div class="compare-picker-tools">
          <button type="button" id="compare-exclude-toggle" class="compare-filter-pill ${compareUseExclude ? 'is-on' : ''}">${compareUseExclude ? '🚫 내 NOPE 제외 반영 중' : 'NOPE 제외 끄고 전체 보기'}</button>
        </div>
      ` : ''}
      <div class="compare-search-box">
        <input id="compare-search-input" type="text" value="${escapeHtml(compareSearchQuery)}" placeholder="제품명 · 브랜드 · 키워드 검색 (예: 데스커, 러그, 행거)" autocomplete="off" />
        ${compareSearchQuery ? '<button type="button" id="compare-search-clear" class="compare-search-clear" aria-label="검색어 지우기">✕</button>' : ''}
      </div>
      <div id="compare-cat-chips" class="compare-cat-chips">
        <button type="button" class="chip ${compareSearchCat === 'ALL' ? 'active' : ''}" data-pick-cat="ALL">전체</button>
        ${TARGET_CATEGORIES.map((c) => `
          <button type="button" class="chip ${compareSearchCat === c.id ? 'active' : ''}" data-pick-cat="${escapeHtml(c.id)}">${escapeHtml(c.label)}</button>
        `).join('')}
      </div>
      <div id="compare-picker-list" class="compare-picker-list"></div>
    </div>
  ` : '';

  let bodyHtml = '';
  if (hasBoth) {
    const alertsA = getPersonalFitAlerts(itemA, savedProfile);
    const alertsB = getPersonalFitAlerts(itemB, savedProfile);
    const calcCompareRank = (item, alerts) => {
      const baseScore = item.verdict === 'PASS' ? 30 : (item.verdict === 'WARN' ? 18 : 4);
      const specRisk = (item.specs?.dust || 3) + (item.specs?.deposit || 3) + (item.specs?.trouble || 3);
      const penalty = alerts.filter((a) => a.tone === 'danger').length * 7 + alerts.filter((a) => a.tone === 'warn').length * 3;
      return baseScore - specRisk - penalty;
    };
    const scoreA = calcCompareRank(itemA, alertsA);
    const scoreB = calcCompareRank(itemB, alertsB);
    const winner = scoreA === scoreB ? null : (scoreA > scoreB ? itemA : itemB);
    const loser = winner === itemA ? itemB : itemA;
    const pickItem = winner || itemA;
    const pickWished = isWishlistedItem(pickItem.id);

    bodyHtml = `
      <div class="compare-reset-row">
        <span class="text-tertiary" style="font-size:11.5px;font-weight:700;">내 방 기준 1:1 판정 결과</span>
        <button type="button" id="compare-clear-all-btn" class="btn-ghost btn-sm" style="padding:3px 8px;">선택 비우기 ↺</button>
      </div>
      <div class="compare-matrix-card">
        <div class="compare-row">
          <strong class="${itemA.specs.dust <= itemB.specs.dust ? 'compare-win' : 'compare-lose'}">${itemA.specs.dust}/5</strong>
          <span class="compare-row-label">먼지 부담</span>
          <strong class="${itemB.specs.dust <= itemA.specs.dust ? 'compare-win' : 'compare-lose'}">${itemB.specs.dust}/5</strong>
        </div>
        <div class="compare-row">
          <strong class="${itemA.specs.deposit <= itemB.specs.deposit ? 'compare-win' : 'compare-lose'}">${itemA.specs.deposit}/5</strong>
          <span class="compare-row-label">보증금·복구</span>
          <strong class="${itemB.specs.deposit <= itemA.specs.deposit ? 'compare-win' : 'compare-lose'}">${itemB.specs.deposit}/5</strong>
        </div>
        <div class="compare-row">
          <strong class="${itemA.specs.trouble <= itemB.specs.trouble ? 'compare-win' : 'compare-lose'}">${itemA.specs.trouble}/5</strong>
          <span class="compare-row-label">고장·관리</span>
          <strong class="${itemB.specs.trouble <= itemA.specs.trouble ? 'compare-win' : 'compare-lose'}">${itemB.specs.trouble}/5</strong>
        </div>
        <div class="compare-row">
          <span style="font-size:11.5px;font-weight:700;color:${alertsA.some((a) => a.tone === 'danger') ? 'var(--accent)' : 'var(--safe)'};">
            ${escapeHtml(alertsA[0] ? alertsA[0].shortBadge.replace(/^내 방 체크:\s*/, '') : '특이 경고 없음')}
          </span>
          <span class="compare-row-label">내 방 조건</span>
          <span style="font-size:11.5px;font-weight:700;color:${alertsB.some((a) => a.tone === 'danger') ? 'var(--accent)' : 'var(--safe)'};">
            ${escapeHtml(alertsB[0] ? alertsB[0].shortBadge.replace(/^내 방 체크:\s*/, '') : '특이 경고 없음')}
          </span>
        </div>
      </div>

      <div class="compare-winner-banner">
        ${winner
          ? `<strong class="compare-reco-title">✓ 추천 제품: ${escapeHtml(winner.name)}</strong><p class="compare-reco-desc">${escapeHtml(loser.name)} 대비 내 방 조건과 유지관리·내구성 점수가 더 안정적입니다.</p>`
          : `<strong class="compare-reco-title">⚖️ 두 제품 스펙이 비슷해요</strong><p class="compare-reco-desc">예산과 방 톤에 맞춰 상세 근거를 비교해 보세요.</p>`}
        <div class="compare-winner-actions">
          ${(() => {
            const shortName = (n) => {
              const clean = String(n || '').replace(/\([^)]*\)/g, '').trim();
              return clean.length > 8 ? `${clean.slice(0, 8)}…` : clean;
            };
            return `
              <button type="button" id="compare-open-a" class="btn-secondary btn-sm">${escapeHtml(shortName(itemA.name))} 상세</button>
              <button type="button" id="compare-open-b" class="btn-secondary btn-sm">${escapeHtml(shortName(itemB.name))} 상세</button>
            `;
          })()}
          <button type="button" id="compare-wish-winner" class="btn-primary btn-sm">${pickWished ? '♥ 찜 저장됨' : `♡ ${winner ? '추천 제품' : '추천'} 찜하기`}</button>
          <button type="button" id="compare-share-link" class="btn-share-chip is-kakao" style="justify-content:center;padding:8px 10px;">${KAKAO_LOGO_SVG}<span>비교 링크 복사</span></button>
        </div>
      </div>
    `;
  } else {
    const targetCategory = pickedAnchor ? pickedAnchor.category : '';
    const recos = getSurveyCompareRecommendations(savedProfile, [activeCompareA, activeCompareB], targetCategory);
    const targetSlot = !itemA ? 'A' : 'B';
    const surveyTitle = targetCategory
      ? `'${escapeHtml(pickedAnchor.name)}' 비교 추천 (${escapeHtml(targetCategory)})`
      : (savedProfile
        ? `${escapeHtml(savedProfile.nickname || '내')}님 방 설문 기반 추천 가구`
        : '인기 비교 추천 가구 (설문하면 내 방 맞춤 추천)');
    bodyHtml = `
      <div class="compare-reco-section">
        <div class="compare-reco-head">
          <div>
            <h3 class="compare-reco-section-title">${surveyTitle}</h3>
          </div>
          ${!savedProfile ? `<button type="button" id="compare-go-survey-btn" class="btn-ghost btn-sm" style="color:var(--accent);font-weight:800;">1분 설문 →</button>` : ''}
        </div>
        <div class="seed-list">
          ${recos.map(({ item, reason }) => {
            const vm = verdictMeta(item.verdict);
            return `
              <div class="seed-list-item" style="cursor:default;">
                <button type="button" class="seed-list-main" data-cmp-detail="${escapeHtml(item.id)}" style="background:none;border:0;padding:0;text-align:left;cursor:pointer;font-family:inherit;">
                  <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;">
                    <span class="verdict-pill ${vm.cls}" style="font-size:10px;padding:2px 6px;">${vm.text}</span>
                    <span class="compare-reco-meta">${escapeHtml(item.category)} · ${escapeHtml(item.priceTier)}</span>
                  </div>
                  <span class="seed-list-title">${escapeHtml(item.name)}</span>
                  <span class="seed-list-sub">${escapeHtml(reason)}</span>
                </button>
                <button type="button" class="btn-primary btn-sm" data-add-slot="${targetSlot}" data-add-id="${escapeHtml(item.id)}" style="flex-shrink:0;">비교 담기</button>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  outEl.innerHTML = `
    <div class="compare-select-grid">
      ${slotCardHtml('A', itemA)}
      <div class="compare-vs-badge">VS</div>
      ${slotCardHtml('B', itemB)}
    </div>
    ${pickerHtml}
    ${bodyHtml}
  `;

  document.getElementById('compare-pick-btn-a').addEventListener('click', () => {
    comparePickerTarget = comparePickerTarget === 'A' ? null : 'A';
    compareSearchQuery = '';
    if (!activeCompareA && itemB) compareSearchCat = itemB.category;
    renderCompareView();
  });
  document.getElementById('compare-pick-btn-b').addEventListener('click', () => {
    comparePickerTarget = comparePickerTarget === 'B' ? null : 'B';
    compareSearchQuery = '';
    if (!activeCompareB && itemA) compareSearchCat = itemA.category;
    renderCompareView();
  });

  if (comparePickerTarget) {
    renderComparePickerList();
    const cmpExcludeBtn = document.getElementById('compare-exclude-toggle');
    if (cmpExcludeBtn) {
      cmpExcludeBtn.addEventListener('click', () => {
        compareUseExclude = !compareUseExclude;
        renderCompareView();
      });
    }
    const cmpSearchInput = document.getElementById('compare-search-input');
    if (cmpSearchInput) {
      cmpSearchInput.addEventListener('input', (e) => {
        compareSearchQuery = e.target.value;
        const clearBtn = document.getElementById('compare-search-clear');
        if (compareSearchQuery && !clearBtn) {
          const box = cmpSearchInput.parentElement;
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.id = 'compare-search-clear';
          btn.className = 'compare-search-clear';
          btn.setAttribute('aria-label', '검색어 지우기');
          btn.textContent = '✕';
          btn.addEventListener('click', () => {
            compareSearchQuery = '';
            cmpSearchInput.value = '';
            btn.remove();
            renderComparePickerList();
            cmpSearchInput.focus();
          });
          box.appendChild(btn);
        } else if (!compareSearchQuery && clearBtn) {
          clearBtn.remove();
        }
        renderComparePickerList();
      });
    }
    const clearBtn = document.getElementById('compare-search-clear');
    if (clearBtn && cmpSearchInput) {
      clearBtn.addEventListener('click', () => {
        compareSearchQuery = '';
        cmpSearchInput.value = '';
        clearBtn.remove();
        renderComparePickerList();
        cmpSearchInput.focus();
      });
    }
    const closePickerBtn = document.getElementById('compare-picker-close');
    if (closePickerBtn) {
      closePickerBtn.addEventListener('click', () => {
        comparePickerTarget = null;
        compareSearchQuery = '';
        renderCompareView();
      });
    }
    document.querySelectorAll('#compare-cat-chips button').forEach((btn) => {
      btn.addEventListener('click', () => {
        compareSearchCat = btn.dataset.pickCat;
        document.querySelectorAll('#compare-cat-chips button').forEach((b) => b.classList.toggle('active', b === btn));
        renderComparePickerList();
      });
    });
  }

  if (hasBoth) {
    const clearAllBtn = document.getElementById('compare-clear-all-btn');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', () => {
        activeCompareA = '';
        activeCompareB = '';
        comparePickerTarget = 'A';
        compareSearchQuery = '';
        renderCompareView();
      });
    }
    const alertsA = getPersonalFitAlerts(itemA, savedProfile);
    const alertsB = getPersonalFitAlerts(itemB, savedProfile);
    const calcRank = (item, alerts) => (item.verdict === 'PASS' ? 30 : (item.verdict === 'WARN' ? 18 : 4))
      - ((item.specs?.dust || 3) + (item.specs?.deposit || 3) + (item.specs?.trouble || 3))
      - (alerts.filter((a) => a.tone === 'danger').length * 7 + alerts.filter((a) => a.tone === 'warn').length * 3);
    const sA = calcRank(itemA, alertsA);
    const sB = calcRank(itemB, alertsB);
    const winner = sA === sB ? null : (sA > sB ? itemA : itemB);
    trackEvent('compare_complete', {
      a_id: itemA.id,
      b_id: itemB.id,
      winner_id: winner ? winner.id : 'tie'
    });

    document.getElementById('compare-open-a').addEventListener('click', () => openDetailSheet(itemA));
    document.getElementById('compare-open-b').addEventListener('click', () => openDetailSheet(itemB));
    const cmpWishBtn = document.getElementById('compare-wish-winner');
    if (cmpWishBtn) {
      cmpWishBtn.addEventListener('click', () => {
        const target = winner || itemA;
        toggleWishlistItem(target);
        renderCompareView();
      });
    }
    const cmpShareBtn = document.getElementById('compare-share-link');
    if (cmpShareBtn) {
      cmpShareBtn.addEventListener('click', () => {
        const base = location.protocol.startsWith('http') ? `${location.origin}${location.pathname}` : 'https://nope-room.vercel.app/';
        const url = `${base}?compare=${encodeURIComponent(itemA.id)},${encodeURIComponent(itemB.id)}`;
        const headline = winner ? `내 방 추천: ${winner.name}` : '두 제품 1:1 스펙 비교';
        copyTextToClipboard(`[NOPE! A vs B 비교]\n${itemA.name} vs ${itemB.name}\n${headline}\n바로 비교 보기 👉 ${url}`, '비교 링크 복사 완료!');
      });
    }
  } else {
    const goSurveyBtn = document.getElementById('compare-go-survey-btn');
    if (goSurveyBtn) {
      goSurveyBtn.addEventListener('click', () => {
        switchTab('home');
        startQuiz();
      });
    }
    outEl.querySelectorAll('[data-add-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.addId;
        const slot = btn.dataset.addSlot;
        if (slot === 'A') {
          activeCompareA = id;
          comparePickerTarget = activeCompareB ? null : 'B';
        } else {
          activeCompareB = id;
          comparePickerTarget = activeCompareA ? null : 'A';
        }
        compareSearchQuery = '';
        renderCompareView();
      });
    });
    outEl.querySelectorAll('[data-cmp-detail]').forEach((el) => {
      el.addEventListener('click', () => {
        const found = ITEMS_DB.find((x) => x.id === el.dataset.cmpDetail);
        if (found) openDetailSheet(found);
      });
    });
  }
}

function setScannerMode(mode) {
  state.scannerMode = mode;
  document.querySelectorAll('#scanner-mode-switch .scan-mode-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.scanMode === mode);
  });
  runViewTransition(() => {
    scannerGate.classList.toggle('hidden', mode !== 'search');
    scannerResults.classList.add('hidden');
    if (scannerCompare) scannerCompare.classList.toggle('hidden', mode !== 'compare');
    scannerMatcher.classList.toggle('hidden', mode !== 'matcher');
    if (mode === 'matcher') {
      renderToneMatcher();
    } else if (mode === 'compare') {
      renderCompareView();
    }
  });
}

const compareBackBtn = document.getElementById('compare-back-btn');
if (compareBackBtn) {
  compareBackBtn.addEventListener('click', () => setScannerMode('search'));
}

document.querySelectorAll('#scanner-mode-switch .scan-mode-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.dataset.scanMode === 'matcher') {
      state.matcherReturnOrigin = 'search';
    }
    setScannerMode(btn.dataset.scanMode);
  });
});

document.getElementById('matcher-back-btn').addEventListener('click', () => {
  if (state.matcherReturnOrigin === 'taste' || state.matcherReturnOrigin === 'result') {
    const saved = loadSavedRoomProfile();
    switchTab('home');
    if (state.matcherReturnOrigin === 'result' && quizResultEl.innerHTML.trim()) {
      showHomeStage('result');
    } else if (state.matcherReturnOrigin === 'taste' && quizTasteEl.innerHTML.trim()) {
      showHomeStage('taste');
    } else if (saved) {
      const savedProfile = QUIZ_RESULTS.find((r) => r.id === saved.profileId) || QUIZ_RESULTS[QUIZ_RESULTS.length - 1];
      renderTasteSummaryStage({ ...saved, profile: savedProfile });
    } else {
      showHomeStage('cover');
    }
    return;
  }
  setScannerMode('search');
});

function surveyFitBonus(item, savedProfile) {
  if (!savedProfile) return 0;
  let bonus = 0;
  const txt = `${item.name} ${item.oneLiner} ${(item.chips || []).join(' ')}`;
  if (savedProfile.wishId === 'storage' && /수납|서랍|책장|벙커|행거|카트/.test(txt)) bonus += 3;
  if ((savedProfile.wishId === 'spacious' || savedProfile.pyeongLabel === '4~5평 이하') && /슬림|콤팩트|틈새|미니|저상|도어후크|선반/.test(txt)) bonus += 3;
  if ((savedProfile.wishId === 'moodlight' || savedProfile.tasteId === 'moodlight') && /조명|무드|유리|원목|확산광|스탠드|전구/.test(txt)) bonus += 3;
  if (savedProfile.wishId === 'easycare' && /세탁|완제품|방수|시공|무조립/.test(txt)) bonus += 3;
  return bonus;
}

function renderToneMatcher() {
  const savedProfile = loadSavedRoomProfile();
  const wishCat = savedProfile && savedProfile.wishId ? WISH_CATEGORIES[savedProfile.wishId] : null;
  const matcherBackBtn = document.getElementById('matcher-back-btn');
  const matcherHeadline = document.getElementById('matcher-headline');
  const syncBox = document.getElementById('matcher-survey-sync-box');

  if (state.matcherReturnOrigin === 'result') {
    matcherBackBtn.textContent = '← 진단 리포트로';
  } else if (state.matcherReturnOrigin === 'taste') {
    matcherBackBtn.textContent = '← 취향 분석으로';
  } else {
    matcherBackBtn.textContent = '← 제품 판독으로';
  }

  if (savedProfile && savedProfile.toneName) {
    const nick = savedProfile.nickname || '자취러';
    matcherHeadline.innerHTML = `${escapeHtml(nick)}님의 <span style="color:var(--accent)">'${escapeHtml(savedProfile.toneName)}'</span><br />방에 어울리는 가구예요.`;
  } else {
    matcherHeadline.innerHTML = `큰 톤 하나 맞추면<br />작은 방도 정돈됩니다.`;
  }

  // 0. Room Base Condition pills (누런 장판 · 체리몰딩 등)
  if (matcherBaseRow) {
    matcherBaseRow.innerHTML = '';
    ROOM_BASE_OPTIONS.forEach((baseOpt) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      if (state.matcherRoomBase === baseOpt.id) {
        b.style.background = 'var(--ink)';
        b.style.color = '#FFFFFF';
      }
      b.textContent = baseOpt.label;
      b.addEventListener('click', () => {
        state.matcherRoomBase = baseOpt.id;
        saveRoomBaseState(baseOpt.id);
        renderToneMatcher();
      });
      matcherBaseRow.appendChild(b);
    });
  }

  // 1. Style/Mood pills
  matcherStyleRow.innerHTML = '';
  STYLE_MOODS.forEach((st) => {
    const b = document.createElement('button');
    b.className = `chip ${state.matcherStyle === st.id ? 'active-chip' : ''}`;
    if (state.matcherStyle === st.id) {
      b.style.background = 'var(--ink)';
      b.style.color = '#FFFFFF';
    }
    b.textContent = st.label;
    b.addEventListener('click', () => {
      state.matcherStyle = st.id;
      const visibleTones = ROOM_TONES.filter(
        (t) => st.id === 'ALL' || t.styles.includes(st.id)
      );
      if (visibleTones.length && !visibleTones.some((t) => t.id === state.matcherTone)) {
        state.matcherTone = visibleTones[0].id;
      }
      renderToneMatcher();
    });
    matcherStyleRow.appendChild(b);
  });

  // 2. Tone swatch cards (filtered cleanly by style mood if chosen)
  const visibleTones = ROOM_TONES.filter(
    (t) => state.matcherStyle === 'ALL' || t.styles.includes(state.matcherStyle)
  );
  matcherToneGrid.innerHTML = '';
  visibleTones.forEach((t) => {
    const isSurveyPicked = savedProfile && savedProfile.toneId === t.id;
    const btn = document.createElement('button');
    btn.className = `tone-card ${state.matcherTone === t.id ? 'active' : ''}`;
    const tonePhoto = QUIZ_VISUAL_PHOTOS[t.id] || '';
    btn.innerHTML = `
      ${tonePhoto ? `<div class="tone-photo-thumb"><img src="${tonePhoto}" alt="${escapeHtml(t.name)}" loading="eager" decoding="async" /></div>` : ''}
      <div class="tone-swatches">
        <span class="tone-swatch-bar" style="flex:3;background:${t.swatches[0]};"></span>
        <span class="tone-swatch-bar" style="flex:2;background:${t.swatches[1]};"></span>
        <span class="tone-swatch-bar" style="flex:1;background:${t.swatches[2]};"></span>
      </div>
      <div class="tone-name-row">
        <span class="tone-name">${escapeHtml(t.name)}</span>
        ${isSurveyPicked ? `<span class="survey-pick-pill">내 설문</span>` : ''}
      </div>
    `;
    btn.addEventListener('click', () => {
      state.matcherTone = t.id;
      renderToneMatcher();
    });
    matcherToneGrid.appendChild(btn);
  });

  // 3. Target furniture category pills
  matcherCatRow.innerHTML = '';
  TARGET_CATEGORIES.forEach((cat) => {
    const b = document.createElement('button');
    b.className = 'chip';
    if (state.matcherCat === cat.id) {
      b.style.background = 'var(--ink)';
      b.style.color = '#FFFFFF';
    }
    b.textContent = cat.label;
    b.addEventListener('click', () => {
      state.matcherCat = cat.id;
      renderToneMatcher();
    });
    matcherCatRow.appendChild(b);
  });

  // 4. Filter harmonious items (prioritize PASS -> WARN + survey wish/pyeong fit)
  const activeTone = ROOM_TONES.find((t) => t.id === state.matcherTone) || ROOM_TONES[0];
  const baseRescue = getRoomBaseRescue(state.matcherRoomBase, activeTone.id);
  const rescueProducts = (baseRescue.productIds || [])
    .map((pid) => ITEMS_DB.find((db) => db.id === pid))
    .filter(Boolean);
  const scoreRank = { PASS: 0, WARN: 1, NOPE: 2 };
  const sortWithSurvey = (a, b) => {
    const verdictDiff = scoreRank[a.verdict] - scoreRank[b.verdict];
    if (verdictDiff !== 0) return verdictDiff;
    return surveyFitBonus(b, savedProfile) - surveyFitBonus(a, savedProfile);
  };

  let primaryMatches = ITEMS_DB.filter((it) => {
    if (it.verdict === 'NOPE') return false;
    if (it.category !== state.matcherCat) return false;
    if (!(it.tones || []).includes(activeTone.id)) return false;
    if (state.matcherStyle !== 'ALL' && !(it.styles || []).includes(state.matcherStyle)) return false;
    return true;
  }).sort(sortWithSurvey);

  if (primaryMatches.length === 0) {
    primaryMatches = ITEMS_DB.filter((it) => {
      if (it.verdict === 'NOPE') return false;
      return it.category === state.matcherCat && (it.tones || []).includes(activeTone.id);
    }).sort(sortWithSurvey);
  }
  primaryMatches = primaryMatches.slice(0, 4);

  // Complementary items in OTHER categories sharing this tone + wish preference
  let companionMatches = ITEMS_DB.filter((it) => {
    if (it.verdict === 'NOPE') return false;
    if (it.category === state.matcherCat) return false;
    return (it.tones || []).includes(activeTone.id);
  }).sort(sortWithSurvey);

  const pickedCompanions = [];
  const usedCats = new Set();
  companionMatches.forEach((it) => {
    if (!usedCats.has(it.category) && pickedCompanions.length < 3) {
      pickedCompanions.push(it);
      usedCats.add(it.category);
    }
  });

  // Sort 10% accent point items to place the user's survey taste preference FIRST
  const tasteKindMap = { plant: '조경 · 식물', object: '오브제 · 소품', moodlight: '오브제 · 소품', tableware: '식기 · 컵' };
  const preferredKind = savedProfile && tasteKindMap[savedProfile.tasteId];
  const orderedAccents = [...activeTone.accents].sort((a, b) => {
    if (a.kind === preferredKind && b.kind !== preferredKind) return -1;
    if (b.kind === preferredKind && a.kind !== preferredKind) return 1;
    return 0;
  });

  const isDifferentFromSaved = savedProfile && savedProfile.toneId && savedProfile.toneId !== activeTone.id;
  syncBox.innerHTML = `
    <div class="matcher-profile-summary">
      ${savedProfile
        ? `<span class="matcher-profile-kicker">${escapeHtml(savedProfile.pyeongLabel || '원룸')} 기준</span>
           <strong class="matcher-profile-main">${escapeHtml(wishCat ? `${wishCat.name}` : `${savedProfile.toneName} 무드 기준`)}</strong>`
        : `<span class="matcher-profile-kicker">맞춤 추천 전</span>
           <strong class="matcher-profile-main">내 방 설문하면 평수·취향에 맞춰 정렬돼요</strong>`
      }
    </div>
    <div class="matcher-profile-actions">
      ${isDifferentFromSaved ? `<button id="apply-tone-baseline-btn" class="matcher-mini-btn is-accent" type="button">이 무드로 기본값 변경</button>` : ''}
      <button id="matcher-retake-btn" class="matcher-mini-btn" type="button">${savedProfile ? '설문 다시하기 ↺' : '내 방 설문하기 →'}</button>
    </div>
  `;

  const activeMatcherTab = ['items', 'rescue', 'tips'].includes(state.matcherTab) ? state.matcherTab : 'items';

  matcherOutput.innerHTML = `
    <div class="seed-segmented" id="matcher-seg-bar" role="tablist" aria-label="톤 매처 보기 전환">
      <button type="button" class="seed-seg-btn ${activeMatcherTab === 'items' ? 'active' : ''}" data-mt-tab="items">맞춤 가구</button>
      <button type="button" class="seed-seg-btn ${activeMatcherTab === 'rescue' ? 'active' : ''}" data-mt-tab="rescue">바탕 보완</button>
      <button type="button" class="seed-seg-btn ${activeMatcherTab === 'tips' ? 'active' : ''}" data-mt-tab="tips">소품 · 팁</button>
    </div>

    <div class="seed-seg-panel ${activeMatcherTab === 'items' ? '' : 'hidden'}" data-mt-panel="items">
      <div class="matcher-section-head">
        <strong>${escapeHtml(activeTone.name)} 톤 맞춤 · ${escapeHtml(TARGET_CATEGORIES.find((c) => c.id === state.matcherCat)?.label || state.matcherCat)}</strong>
      </div>
      <div class="cards-stack" id="matcher-primary-list">
        ${primaryMatches.length ? primaryMatches.map(renderYukaCard).join('') : `<div class="card"><p class="text-secondary" style="margin:0;">해당 조건의 추천 가구를 준비 중입니다.</p></div>`}
      </div>

      <div class="matcher-section-head">
        <strong>함께 두면 어울리는 궁합 가구</strong>
      </div>
      <div class="cards-stack" id="matcher-companion-list">
        ${pickedCompanions.map(renderYukaCard).join('')}
      </div>
    </div>

    <div class="seed-seg-panel ${activeMatcherTab === 'rescue' ? '' : 'hidden'}" data-mt-panel="rescue">
      <div class="base-rescue-card ${state.matcherRoomBase === 'clean-white' ? 'is-clean' : ''}" style="margin-bottom:14px;">
        <p class="base-rescue-title">${escapeHtml(baseRescue.headline)}</p>
        <div class="base-rescue-avoid">
          <strong>피할 실수</strong>${escapeHtml(baseRescue.avoidLine)}
        </div>
        <ul class="base-rescue-steps">
          ${baseRescue.coverSteps.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}
        </ul>
        ${rescueProducts.length ? `
          <div class="base-rescue-products">
            ${rescueProducts.map((rp) => {
              const rpv = verdictMeta(rp.verdict);
              return `
                <button type="button" class="pair-mini-card base-rescue-prod-btn" data-rescue-id="${escapeHtml(rp.id)}">
                  <div><span class="verdict-pill ${rpv.cls}" style="font-size:10px;padding:2px 6px;">${rpv.text}</span></div>
                  <div class="pair-mini-title">${escapeHtml(rp.name)}</div>
                  <div class="pair-mini-meta">${escapeHtml(rp.priceTier)} →</div>
                </button>
              `;
            }).join('')}
          </div>
        ` : ''}
        <div class="base-rescue-links">
          ${baseRescue.coverKeywords.map((ck) => {
            const ckUrls = buildShopUrls(ck.keyword);
            return `
              <div class="base-rescue-link-row">
                <span class="base-rescue-link-label">${escapeHtml(ck.label)}</span>
                <div class="life-tip-links">
                  <a href="${ckUrls.coupang}" target="_blank" rel="noopener noreferrer" class="tip-shop-pill">쿠팡 →</a>
                  <a href="${ckUrls.ohouse}" target="_blank" rel="noopener noreferrer" class="tip-shop-pill">오늘의집 →</a>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        ${AFFILIATE_CONFIG.coupangEnabled ? `<p class="ftc-affiliate-note">${escapeHtml(AFFILIATE_CONFIG.disclosureText)}</p>` : ''}
      </div>
    </div>

    <div class="seed-seg-panel ${activeMatcherTab === 'tips' ? '' : 'hidden'}" data-mt-panel="tips">
      <div class="tone-sense-card" style="margin-bottom:14px;">
        <div class="tone-sense-head">
          <strong>${escapeHtml(activeTone.name)} 톤 감각 가이드</strong>
        </div>
        <div class="tone-sense-grid">
          <div class="tone-sense-row">
            <span class="sense-key">60·30·10 배색</span>
            <span class="sense-val">${escapeHtml(activeTone.ratioRule)}</span>
          </div>
          ${activeTone.kelvin ? `
            <div class="tone-sense-row">
              <span class="sense-key">추천 조명 빛</span>
              <span class="sense-val">${escapeHtml(activeTone.kelvin)}</span>
            </div>
          ` : ''}
          ${activeTone.materialMatch ? `
            <div class="tone-sense-row">
              <span class="sense-key">소재 조합</span>
              <span class="sense-val">${escapeHtml(activeTone.materialMatch)}</span>
            </div>
          ` : ''}
          ${activeTone.avoidTrap ? `
            <div class="tone-sense-row is-trap">
              <span class="sense-key">실패 피하기</span>
              <span class="sense-val">${escapeHtml(activeTone.avoidTrap)}</span>
            </div>
          ` : ''}
        </div>
      </div>

      <div class="matcher-section-head">
        <strong>10% 포인트 소품 · 조경·식기·오브제</strong>
      </div>
      <div class="cards-stack">
        ${orderedAccents.map((acc) => {
          const links = buildShopUrls(acc.keyword);
          const isPref = acc.kind === preferredKind;
          return `
            <div class="accent-card">
              <div class="accent-top">
                <span class="accent-kind">${escapeHtml(acc.kind)}${isPref ? ' · 내 설문 픽!' : ''}</span>
                <span class="accent-point-pill">
                  <span class="accent-dot" style="background:${acc.pointColor};"></span>
                  ${escapeHtml(acc.pointLabel)}
                </span>
              </div>
              <div class="accent-title">${escapeHtml(acc.name)}</div>
              <p class="accent-tip">${escapeHtml(acc.tip)}</p>
              <div class="accent-links">
                <a href="${links.coupang}" target="_blank" rel="noopener noreferrer" class="accent-link-pill">쿠팡 보기 →</a>
                <a href="${links.ohouse}" target="_blank" rel="noopener noreferrer" class="accent-link-pill">오늘의집 보기 →</a>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="matcher-share-bar">
      <div class="sheet-share-row">
        <button type="button" id="copy-tone-link-btn" class="btn-share-chip is-kakao">${KAKAO_LOGO_SVG}<span>카톡 공유</span></button>
        <button type="button" id="share-tone-rescue-btn" class="btn-share-chip is-story">${INSTA_LOGO_SVG}<span>인스타 스토리</span></button>
      </div>
    </div>
  `;

  matcherOutput.querySelectorAll('[data-mt-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.matcherTab = btn.dataset.mtTab;
      matcherOutput.querySelectorAll('[data-mt-tab]').forEach((b) => b.classList.toggle('active', b === btn));
      matcherOutput.querySelectorAll('[data-mt-panel]').forEach((p) => {
        p.classList.toggle('hidden', p.dataset.mtPanel !== state.matcherTab);
      });
    });
  });

  matcherOutput.querySelectorAll('.base-rescue-prod-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = ITEMS_DB.find((it) => it.id === btn.dataset.rescueId);
      if (target) openDetailSheet(target);
    });
  });
  const shareRescueBtn = document.getElementById('share-tone-rescue-btn');
  if (shareRescueBtn) {
    shareRescueBtn.addEventListener('click', () => {
      exportToneRescueCard(activeTone, state.matcherRoomBase, baseRescue);
    });
  }
  const copyToneLinkBtn = document.getElementById('copy-tone-link-btn');
  if (copyToneLinkBtn) {
    copyToneLinkBtn.addEventListener('click', () => {
      const shareUrl = location.protocol.startsWith('http')
        ? `${location.origin}${location.pathname}?tab=scanner&mode=matcher&tone=${encodeURIComponent(activeTone.id)}&base=${encodeURIComponent(state.matcherRoomBase)}`
        : '';
      const msg = [
        `[NOPE! 내 방 톤 가이드] ${baseRescue.baseLabel} → ${activeTone.name}`,
        `배색: ${activeTone.ratioRule}`,
        `핵심: ${baseRescue.coverSteps[0]}`,
        shareUrl ? `바로 보기: ${shareUrl}` : ''
      ].filter(Boolean).join('\n');
      copyTextToClipboard(msg, '톤 가이드·링크 복사 완료!');
    });
  }

  bindCardClicks(document.getElementById('matcher-primary-list'), primaryMatches);
  bindCardClicks(document.getElementById('matcher-companion-list'), pickedCompanions);

  const retakeBtn = document.getElementById('matcher-retake-btn');
  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      switchTab('home');
      startQuiz();
    });
  }
  const applyToneBtn = document.getElementById('apply-tone-baseline-btn');
  if (applyToneBtn) {
    applyToneBtn.addEventListener('click', () => {
      const curr = loadSavedRoomProfile();
      if (!curr) return;
      const newMbti = computeSpaceMbti({
        density: curr.density || 'balanced',
        toneId: activeTone.id,
        tasteId: curr.tasteId || 'plant'
      });
      curr.toneId = activeTone.id;
      curr.toneName = activeTone.name;
      curr.mbtiId = newMbti.id;
      try {
        localStorage.setItem(STORAGE_KEYS.roomProfile, JSON.stringify(curr));
      } catch {
        // ignore quota errors
      }
      updateSavedProfileBadge();
      renderToneMatcher();
      showToast(`내 방 기본 무드가 '${activeTone.name}'(으)로 변경되었습니다.`);
    });
  }
}

// ---------------- Tab 3: Human Scale ----------------
const scaleStageHeight = document.getElementById('scale-stage-height');
const scaleStageGap = document.getElementById('scale-stage-gap');
const heightSlider = document.getElementById('height-slider');
const heightValEl = document.getElementById('height-val');
const svgWrap = document.getElementById('human-scale-svg-wrap');

function loadScaleState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.scale) || '{}');
    if (saved.height) state.scaleHeight = saved.height;
    if (saved.mode && HUMAN_SCALE_MODES[saved.mode]) state.scaleMode = saved.mode;
    if (saved.gapZone && GAP_STORAGE_ZONES.some((z) => z.id === saved.gapZone)) {
      state.gapZone = saved.gapZone;
    }
    const zoneObj = GAP_STORAGE_ZONES.find((z) => z.id === state.gapZone) || GAP_STORAGE_ZONES[0];
    if (saved.gapSizeId && zoneObj.options.some((o) => o.id === saved.gapSizeId)) {
      state.gapSizeId = saved.gapSizeId;
    } else {
      state.gapSizeId = zoneObj.options[0].id;
    }
  } catch {
    // defaults
  }
}

function saveScaleState() {
  localStorage.setItem(STORAGE_KEYS.scale, JSON.stringify({
    height: state.scaleHeight,
    mode: state.scaleMode,
    gapZone: state.gapZone,
    gapSizeId: state.gapSizeId
  }));
}

function updateScaleInputsUI() {
  heightSlider.value = state.scaleHeight;
  heightValEl.textContent = state.scaleHeight;
  document.querySelectorAll('#scale-mode-switch .mode-btn').forEach((b) => {
    b.classList.toggle('active', b.dataset.mode === state.scaleMode);
  });
  renderHumanScaleDiagram();
}

function svgPill(cx, cy, text, bg = '#FFFFFF', fg = '#141B29', border = '#141B29') {
  const w = Math.max(46, text.length * 7.2 + 16);
  const h = 18;
  return `
    <g transform="translate(${cx}, ${cy})">
      <rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="4" fill="${bg}" stroke="${border}" stroke-width="1"/>
      <text x="0" y="3.5" text-anchor="middle" fill="${fg}" font-size="9.5" font-weight="800">${escapeHtml(text)}</text>
    </g>
  `;
}

function svgCadDim(x, y1, y2, label, color = '#141B29', pillBg = '#FFFFFF', pillFg = '#141B29', labelOffsetX = 0) {
  const midY = (y1 + y2) / 2;
  return `
    <line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${color}" stroke-width="1.4"/>
    <line x1="${x - 4}" y1="${y1}" x2="${x + 4}" y2="${y1}" stroke="${color}" stroke-width="1.3"/>
    <line x1="${x - 4}" y1="${y2}" x2="${x + 4}" y2="${y2}" stroke="${color}" stroke-width="1.3"/>
    <circle cx="${x}" cy="${y1}" r="2" fill="${color}"/>
    <circle cx="${x}" cy="${y2}" r="2" fill="${color}"/>
    ${svgPill(x + labelOffsetX, midY, label, pillBg, pillFg, color)}
  `;
}

function renderArchitecturalSvg(s) {
  const floorY = 248;
  const pxPerCm = 0.96;
  const toY = (cm) => floorY - cm * pxPerCm;

  const headTopY = toY(s.heightCm);
  const hangerY = toY(s.hangerBar);
  const shelfY = toY(s.shelfMax);

  const ticks = [0, 50, 100, 150, 200].map((cm) => {
    const y = toY(cm);
    return `
      <line x1="28" y1="${y}" x2="364" y2="${y}" stroke="${cm === 0 ? '#141B29' : '#E2E4DF'}" stroke-width="${cm === 0 ? 2 : 1}"/>
      <line x1="23" y1="${y}" x2="29" y2="${y}" stroke="#141B29" stroke-width="1.2"/>
      <text x="20" y="${y + 3.5}" text-anchor="end" fill="#536076" font-size="9" font-weight="700">${cm}</text>
    `;
  }).join('');

  let sceneSvg = '';
  let overheadGuides = '';

  if (state.scaleMode === 'desk') {
    const seatY = toY(s.chairSeat);
    const deskY = toY(s.deskHeight);
    const monTopY = toY(s.monitorTop);
    const monBottomY = monTopY + 34;
    const eyeY = monTopY + 8;
    const headCy = eyeY - 3;
    const neckY = headCy + 10;
    const hipY = seatY - 7;
    const kneeY = seatY - 6;
    const shoulderY = neckY + 9;

    sceneSvg = `
      <!-- Subtle Comfort Reach Band -->
      <rect x="28" y="${monTopY - 8}" width="336" height="${floorY - (monTopY - 8)}" fill="rgba(235, 236, 232, 0.45)"/>

      <!-- Ergonomic Mesh Chair -->
      <path d="M 88 ${seatY - 48} Q 85 ${seatY - 22} 91 ${seatY + 3} L 136 ${seatY + 3}" fill="none" stroke="#536076" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="93" y="${seatY - 3}" width="44" height="7" rx="3" fill="#E9EEF5" stroke="#141B29" stroke-width="1.5"/>
      <line x1="115" y1="${seatY + 4}" x2="115" y2="${floorY - 6}" stroke="#141B29" stroke-width="3"/>
      <path d="M 97 ${floorY - 2} L 115 ${floorY - 7} L 133 ${floorY - 2}" fill="none" stroke="#141B29" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="98" cy="${floorY - 2}" r="2.2" fill="#141B29"/>
      <circle cx="132" cy="${floorY - 2}" r="2.2" fill="#141B29"/>

      <!-- Architectural Seated Silhouette (Facing Right) -->
      <g>
        <!-- Torso & Legs -->
        <path d="M 103 ${shoulderY} Q 96 ${hipY - 12} 102 ${hipY} L 138 ${kneeY} Q 144 ${kneeY + 2} 145 ${kneeY + 9} L 146 ${floorY - 4}" fill="none" stroke="#141B29" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Shoes -->
        <path d="M 142 ${floorY - 3} L 157 ${floorY - 3}" stroke="#141B29" stroke-width="5.5" stroke-linecap="round"/>
        <!-- Head & Neck -->
        <line x1="106" y1="${headCy + 6}" x2="104" y2="${shoulderY}" stroke="#141B29" stroke-width="6.5" stroke-linecap="round"/>
        <circle cx="110" cy="${headCy}" r="10.5" fill="#141B29"/>
        <!-- Ergonomic 90° Arm Posture (Accent Coral) -->
        <path d="M 105 ${shoulderY + 2} L 122 ${deskY - 4} L 164 ${deskY - 4}" fill="none" stroke="#E11D48" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- Ergonomic Desk & Monitor Elevation -->
      <rect x="150" y="${deskY}" width="108" height="6" rx="1.5" fill="#141B29"/>
      <rect x="156" y="${deskY + 6}" width="4" height="${floorY - deskY - 6}" fill="#141B29"/>
      <rect x="248" y="${deskY + 6}" width="4" height="${floorY - deskY - 6}" fill="#141B29"/>
      <!-- Monitor & Keyboard -->
      <rect x="218" y="${monTopY}" width="6" height="34" rx="1.5" fill="#141B29"/>
      <rect x="214" y="${monTopY + 3}" width="3" height="28" rx="1" fill="#E11D48"/>
      <line x1="221" y1="${monBottomY}" x2="221" y2="${deskY}" stroke="#141B29" stroke-width="3"/>
      <line x1="208" y1="${deskY}" x2="233" y2="${deskY}" stroke="#141B29" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="172" y="${deskY - 3}" width="22" height="3" rx="1" fill="#536076"/>

      <!-- Eye Sightline 15° -->
      <line x1="121" y1="${eyeY}" x2="213" y2="${monTopY + 13}" stroke="#E11D48" stroke-width="1.3" stroke-dasharray="4 3"/>
      ${svgPill(165, eyeY - 14, '시야각 15°', '#FFFFFF', '#E11D48', '#E11D48')}

      <!-- Non-overlapping CAD Dimensions -->
      ${svgCadDim(56, seatY, floorY, `의자 ${s.chairSeat}cm`, '#141B29', '#FFFFFF', '#141B29', 4)}
      ${svgCadDim(278, deskY, floorY, `책상 ${s.deskHeight}cm`, '#E11D48', '#E11D48', '#FFFFFF', 36)}
      ${svgCadDim(278, monTopY, deskY, `모니터 ${s.monitorTop}cm`, '#141B29', '#FFFFFF', '#141B29', 36)}
    `;
  } else if (state.scaleMode === 'floor') {
    const tblY = toY(s.floorTable);
    const monTopY = toY(s.monitorTop);
    const eyeY = monTopY + 4;
    const headCy = eyeY - 2;
    const hipY = floorY - 9;

    sceneSvg = `
      <!-- Floor Back Cushion -->
      <path d="M 76 ${floorY - 34} Q 74 ${floorY - 4} 84 ${floorY - 4} L 128 ${floorY - 4}" fill="none" stroke="#C49A6C" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="82" y="${floorY - 9}" width="50" height="8" rx="4" fill="#E9EEF5" stroke="#141B29" stroke-width="1.4"/>

      <!-- Architectural Floor-Sitting Silhouette -->
      <g>
        <path d="M 94 ${headCy + 20} Q 88 ${hipY - 10} 96 ${hipY} L 134 ${floorY - 6}" fill="none" stroke="#141B29" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="97" y1="${headCy + 6}" x2="94" y2="${headCy + 20}" stroke="#141B29" stroke-width="6.5" stroke-linecap="round"/>
        <circle cx="101" cy="${headCy}" r="10.5" fill="#141B29"/>
        <path d="M 96 ${headCy + 22} L 116 ${tblY - 4} L 154 ${tblY - 4}" fill="none" stroke="#E11D48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- Low Floor Desk & Elevated Laptop Stand -->
      <rect x="146" y="${tblY}" width="102" height="5.5" rx="1.5" fill="#141B29"/>
      <line x1="154" y1="${tblY + 5}" x2="150" y2="${floorY}" stroke="#141B29" stroke-width="2.6" stroke-linecap="round"/>
      <line x1="240" y1="${tblY + 5}" x2="244" y2="${floorY}" stroke="#141B29" stroke-width="2.6" stroke-linecap="round"/>
      <!-- Laptop Riser + Screen -->
      <path d="M 192 ${tblY} L 208 ${tblY - 10} L 220 ${tblY}" fill="none" stroke="#536076" stroke-width="1.6"/>
      <path d="M 190 ${tblY - 10} L 214 ${tblY - 10} L 222 ${monTopY + 10}" fill="none" stroke="#141B29" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Neck-safe Sightline -->
      <line x1="112" y1="${eyeY}" x2="214" y2="${monTopY + 14}" stroke="#E11D48" stroke-width="1.3" stroke-dasharray="4 3"/>
      ${svgPill(166, headCy - 14, '거북목 방지 시야', '#FFFFFF', '#E11D48', '#E11D48')}

      <!-- Non-overlapping CAD Dimensions -->
      ${svgCadDim(268, tblY, floorY, `좌식상 ${s.floorTable}cm`, '#E11D48', '#E11D48', '#FFFFFF', 40)}
      ${svgCadDim(268, monTopY + 8, tblY, `화면 ${s.monitorTop}cm`, '#141B29', '#FFFFFF', '#141B29', 40)}
    `;
  } else {
    const bedY = toY(s.bedTotal);
    const frameTopY = bedY + 19;
    const underBedH = Math.max(8, floorY - (frameTopY + 8));
    const headR = 10;
    const headCy = headTopY + headR;
    const shoulderY = headCy + headR + 7;
    const hipY = toY(s.heightCm * 0.52);
    const mirrorBottomY = toY(28);
    const mirrorTopY = toY(28 + s.mirrorMinH);

    overheadGuides = `
      <line x1="64" y1="${hangerY}" x2="288" y2="${hangerY}" stroke="#536076" stroke-width="1.2" stroke-dasharray="4 3"/>
      ${svgPill(192, hangerY - 11, `행거봉 ${s.hangerBar}cm`, '#FFFFFF', '#141B29', '#7A8699')}
      <line x1="64" y1="${shelfY}" x2="288" y2="${shelfY}" stroke="#7A8699" stroke-width="1" stroke-dasharray="2 3"/>
      ${svgPill(192, shelfY - 11, `선반한계 ${s.shelfMax}cm`, '#F4F6F9', '#536076', '#C9C6B8')}
    `;

    sceneSvg = `
      <!-- Standing Architectural Silhouette (Clean Proportional CAD Figure) -->
      <g>
        <!-- Left & Right Legs -->
        <path d="M 88 ${hipY} L 83 ${floorY - 4} M 94 ${hipY} L 99 ${floorY - 4}" stroke="#141B29" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M 79 ${floorY - 2} L 87 ${floorY - 2} M 96 ${floorY - 2} L 104 ${floorY - 2}" stroke="#141B29" stroke-width="4" stroke-linecap="round"/>
        <!-- Torso (Tapered Coat/Body Silhouette) -->
        <path d="M 80 ${shoulderY} Q 91 ${shoulderY - 4} 102 ${shoulderY} L 98 ${hipY + 2} L 84 ${hipY + 2} Z" fill="#141B29"/>
        <!-- Relaxed Arm -->
        <path d="M 101 ${shoulderY + 2} Q 108 ${shoulderY + 20} 105 ${hipY + 12}" fill="none" stroke="#141B29" stroke-width="4.5" stroke-linecap="round"/>
        <!-- Neck & Head -->
        <rect x="88" y="${headCy + 6}" width="6" height="9" fill="#141B29"/>
        <circle cx="91" cy="${headCy}" r="${headR}" fill="#141B29"/>
      </g>

      <!-- Key Height Callout Left of Standing Figure -->
      ${svgCadDim(54, headTopY, floorY, `키 ${s.heightCm}cm`, '#141B29', '#141B29', '#FFFFFF', 4)}

      <!-- Architectural Bed Elevation -->
      <g>
        <!-- Headboard -->
        <rect x="116" y="${bedY - 26}" width="7" height="${floorY - (bedY - 26)}" rx="2" fill="#141B29"/>
        <!-- Bed Frame & Legs -->
        <rect x="122" y="${frameTopY}" width="96" height="8" rx="1.5" fill="#141B29"/>
        <rect x="212" y="${frameTopY + 6}" width="5" height="${underBedH}" fill="#141B29"/>
        <!-- Mattress + Blanket Fold + Pillow -->
        <rect x="123" y="${bedY}" width="95" height="19" rx="3" fill="#E9EEF5" stroke="#E11D48" stroke-width="1.8"/>
        <path d="M 150 ${bedY} H 215 A 3 3 0 0 1 218 ${bedY + 3} V ${bedY + 19} H 150 Z" fill="#FFFFFF" stroke="#141B29" stroke-width="1.2"/>
        <rect x="127" y="${bedY - 9}" width="20" height="9" rx="4" fill="#FFFFFF" stroke="#141B29" stroke-width="1.4"/>
      </g>

      <!-- Bed Height Dimension (Clear between bed and mirror) -->
      ${svgCadDim(228, bedY, floorY, `총높이 ${s.bedTotal}cm`, '#E11D48', '#E11D48', '#FFFFFF', 34)}

      <!-- Detailed Wall Mirror Elevation (Far Right, Zero Overlap) -->
      <g>
        <rect x="310" y="${mirrorTopY}" width="28" height="${mirrorBottomY - mirrorTopY}" rx="4" fill="#141B29"/>
        <rect x="314" y="${mirrorTopY + 4}" width="20" height="${mirrorBottomY - mirrorTopY - 8}" rx="2" fill="#E4EAF2"/>
        <!-- Mirror Glass Reflection Diagonals -->
        <line x1="317" y1="${mirrorTopY + 24}" x2="331" y2="${mirrorTopY + 10}" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="317" y1="${mirrorTopY + 34}" x2="331" y2="${mirrorTopY + 20}" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="324" cy="${mirrorTopY - 4}" r="2" fill="#141B29"/>
      </g>
      ${svgPill(324, mirrorTopY - 18, `거울 ${s.mirrorMinH}cm+`, '#FFFFFF', '#141B29', '#141B29')}
    `;
  }

  svgWrap.innerHTML = `
    <svg viewBox="0 0 380 278" role="img" aria-label="휴먼스케일 도해">
      <rect x="0" y="0" width="380" height="278" rx="8" fill="#FFFFFF"/>
      ${ticks}
      <text x="364" y="${floorY + 16}" text-anchor="end" fill="#141B29" font-size="9.5" font-weight="800">FL ±0 cm</text>
      ${overheadGuides}
      ${sceneSvg}
    </svg>
  `;
}

function renderScaleQuizHint() {
  const hintBox = document.getElementById('scale-quiz-hint');
  if (!hintBox) return;
  const saved = loadSavedRoomProfile();
  if (!saved || !saved.pyeongLabel) {
    hintBox.classList.add('hidden');
    return;
  }
  const notes = [];
  if (saved.pyeongLabel === '4~5평 이하' || saved.isDuplex || saved.narrowPath) {
    notes.push(`${saved.pyeongLabel}: 통로 60cm 이상·문 열림 반경 여유를 우선 확인하세요.`);
  }
  if (saved.heavyDeskLoad) {
    notes.push('모니터암 사용 조건: 상판 두께 18T+ 풀판 여부와 의자 팔걸이 간섭 높이를 체크하세요.');
  }
  if (saved.needsFloorSpace) {
    notes.push('홈트 바닥 여백 필요: 바닥형 거울·스탠드 대신 도어후크·클립 조명을 추천해요.');
  }
  if (notes.length === 0) {
    notes.push(`설문 기반 추천 자세(${HUMAN_SCALE_MODES[state.scaleMode]?.label || '책상형'})로 자동 맞춰두었어요.`);
  }
  hintBox.className = `room-fit-banner ${notes.length > 1 ? 'is-danger' : 'is-safe'}`;
  hintBox.innerHTML = `
    <div class="room-fit-head">
      <span>${escapeHtml(saved.nickname || '내')} 방 설문 연동 치수 가이드</span>
      <span>${escapeHtml(saved.pyeongLabel)}</span>
    </div>
    <ul class="room-fit-list">
      ${notes.map((n) => `<li>${escapeHtml(n)}</li>`).join('')}
    </ul>
  `;
}

function renderHumanScaleDiagram() {
  const s = calcHumanScale(state.scaleHeight, state.scaleMode);
  const modeInfo = HUMAN_SCALE_MODES[state.scaleMode];
  const scaleBadgeEl = document.getElementById('scale-stage-badge');
  if (scaleBadgeEl) scaleBadgeEl.textContent = `${s.heightCm}CM · ${modeInfo.label}`;
  document.getElementById('scale-mode-note').textContent = modeInfo.note;

  renderArchitecturalSvg(s);
  renderScaleQuizHint();

  const specs = [
    { label: state.scaleMode === 'floor' ? '좌식 테이블' : '책상 높이', val: `${state.scaleMode === 'floor' ? s.floorTable : s.deskHeight} cm` },
    { label: state.scaleMode === 'bed' ? '침대+매트' : '의자 좌판', val: `${state.scaleMode === 'bed' ? s.bedTotal : s.chairSeat} cm` },
    { label: '모니터 상단', val: `${s.monitorTop} cm` },
    { label: '행거 봉', val: `${s.hangerBar} cm` },
    { label: '선반 상한', val: `${s.shelfMax} cm` },
    { label: '전신거울', val: `${s.mirrorMinH} cm+` }
  ];
  document.getElementById('scale-specs-grid').innerHTML = specs
    .map((sp) => `<div class="spec-tile"><span>${sp.label}</span><strong>${sp.val}</strong></div>`)
    .join('');
}

heightSlider.addEventListener('input', (e) => {
  state.scaleHeight = Number(e.target.value);
  saveScaleState();
  updateScaleInputsUI();
});

document.querySelectorAll('#scale-mode-switch .mode-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.scaleMode = btn.dataset.mode;
    saveScaleState();
    updateScaleInputsUI();
  });
});

function setScaleView(view) {
  state.scaleView = view === 'gap' ? 'gap' : 'height';
  document.querySelectorAll('#scale-view-switch .scan-mode-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.scaleView === state.scaleView);
  });
  if (state.scaleView === 'gap') {
    if (scaleStageHeight) scaleStageHeight.classList.add('hidden');
    if (scaleStageGap) scaleStageGap.classList.remove('hidden');
    renderGapStorageFinder();
  } else {
    if (scaleStageGap) scaleStageGap.classList.add('hidden');
    if (scaleStageHeight) scaleStageHeight.classList.remove('hidden');
    renderHumanScaleDiagram();
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

document.querySelectorAll('#scale-view-switch .scan-mode-btn').forEach((btn) => {
  btn.addEventListener('click', () => setScaleView(btn.dataset.scaleView));
});

function renderGapStorageFinder() {
  const zoneRow = document.getElementById('gap-zone-row');
  const sizeRow = document.getElementById('gap-size-row');
  const outEl = document.getElementById('gap-result-output');
  if (!zoneRow || !sizeRow || !outEl) return;

  const activeZone = GAP_STORAGE_ZONES.find((z) => z.id === state.gapZone) || GAP_STORAGE_ZONES[0];
  let activeOpt = activeZone.options.find((o) => o.id === state.gapSizeId);
  if (!activeOpt) {
    activeOpt = activeZone.options[0];
    state.gapSizeId = activeOpt.id;
  }

  zoneRow.innerHTML = '';
  GAP_STORAGE_ZONES.forEach((zone) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip';
    if (zone.id === activeZone.id) {
      b.style.background = 'var(--ink)';
      b.style.color = '#FFFFFF';
    }
    b.textContent = zone.label;
    b.addEventListener('click', () => {
      state.gapZone = zone.id;
      state.gapSizeId = zone.options[0].id;
      saveScaleState();
      renderGapStorageFinder();
    });
    zoneRow.appendChild(b);
  });

  sizeRow.innerHTML = '';
  activeZone.options.forEach((opt) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `gap-size-btn ${opt.id === activeOpt.id ? 'active' : ''}`;
    b.innerHTML = `<strong>${escapeHtml(opt.label)}</strong><span>${escapeHtml(opt.sub)}</span>`;
    b.addEventListener('click', () => {
      state.gapSizeId = opt.id;
      saveScaleState();
      renderGapStorageFinder();
    });
    sizeRow.appendChild(b);
  });

  const matchedItems = (activeOpt.itemIds || [])
    .map((id) => ITEMS_DB.find((it) => it.id === id))
    .filter(Boolean);
  const shopUrls = buildShopUrls(activeOpt.shopKeyword);

  outEl.innerHTML = `
    <div class="gap-measure-tip">
      <strong>줄자 없이 1초 재는 법 · ${escapeHtml(activeZone.label)}</strong>
      <span>${escapeHtml(activeZone.measureTip)}</span>
    </div>

    <div class="gap-verdict-card">
      <div class="gap-verdict-row">
        <span class="gap-verdict-badge is-nope">✕ 막힘</span>
        <span>${escapeHtml(activeOpt.avoidText)}</span>
      </div>
      <div class="gap-verdict-row">
        <span class="gap-verdict-badge is-pass">✓ 통과</span>
        <span>${escapeHtml(activeOpt.passText)}</span>
      </div>
    </div>

    ${matchedItems.length ? `
      <div class="matcher-section-head">
        <strong>이 틈새에 맞는 검증 상품</strong>
        <span>눌러서 1초 체크</span>
      </div>
      <div class="cards-stack" id="gap-matched-cards">
        ${matchedItems.map(renderYukaCard).join('')}
      </div>
    ` : ''}

    <div class="gap-shop-box">
      <strong class="gap-shop-title">${escapeHtml(activeOpt.shopLabel)}</strong>
      <div class="dual-link-row">
        <a href="${shopUrls.coupang}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding:11px 10px;font-size:13px;">쿠팡 보기 →</a>
        <a href="${shopUrls.ohouse}" target="_blank" rel="noopener noreferrer" class="btn-ohouse">오늘의집 보기 →</a>
      </div>
      ${shopUrls.hasCoupangAffiliate ? `<p class="ftc-affiliate-note">${escapeHtml(AFFILIATE_CONFIG.disclosureText)}</p>` : ''}
    </div>

    <button id="share-gap-card-btn" type="button" class="btn-accent btn-full" style="margin-top:12px;">
      우리 방 빈틈 기준 카드 저장 · 공유
    </button>
  `;

  const cardsWrap = document.getElementById('gap-matched-cards');
  if (cardsWrap) bindCardClicks(cardsWrap, matchedItems);

  const shareBtn = document.getElementById('share-gap-card-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => exportGapCheatsheetCard(activeZone, activeOpt));
  }
}

function exportGapCheatsheetCard(activeZone, activeOpt) {
  const canvas = document.getElementById('share-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = 1080;
  const H = 1920;
  const savedProfile = loadSavedRoomProfile();
  const nick = (savedProfile && savedProfile.nickname) || '자취러';

  ctx.fillStyle = '#F4F6F9';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = '#141B29';
  ctx.lineWidth = 4;
  ctx.strokeRect(56, 56, W - 112, H - 112);

  ctx.fillStyle = '#141B29';
  ctx.font = '900 108px "Space Grotesk", "SUIT", sans-serif';
  ctx.fillText('NOPE!', 96, 200);

  ctx.fillStyle = '#E11D48';
  ctx.font = '800 32px "SUIT", sans-serif';
  ctx.fillText('DEAD SPACE STORAGE CHEAT SHEET', 96, 255);

  ctx.fillStyle = '#141B29';
  ctx.font = '800 48px "SUIT", sans-serif';
  ctx.fillText(`${nick}님의 작은 방 빈틈 기준표`, 96, 330);
  ctx.fillRect(96, 365, W - 192, 3);

  // Highlighted selected condition
  ctx.fillStyle = '#141B29';
  ctx.fillRect(96, 405, W - 192, 235);
  ctx.fillStyle = '#E11D48';
  ctx.font = '800 28px "SUIT", sans-serif';
  ctx.fillText(`선택한 빈틈 · ${activeZone.label} (${activeOpt.label})`, 132, 462);
  ctx.fillStyle = '#F4F6F9';
  ctx.font = '700 34px "SUIT", sans-serif';
  wrapCanvasText(ctx, activeOpt.passText, 132, 522, W - 264, 48);

  // 4-zone quick checklist
  const cheatRows = [
    { title: '01 · 침대·소파 밑', rule: '12cm 이하: 지퍼 부직포/압축팩 · 15cm+: 슬림 바퀴 리빙박스' },
    { title: '02 · 냉장고·책상 옆', rule: '12cm 이하: 자석 선반 · 15~20cm: 초슬림 틈새 서랍/카트' },
    { title: '03 · 방문 뒤·윗틈', rule: '500원 동전(2mm) 들어가면 도어후크 OK · 빡빡하면 벽기댐 거울' },
    { title: '04 · 벽 콘센트·전선 틈', rule: '180도 ㄱ자 납작 플러그 멀티탭으로 벽 띄움 5cm 줄이기' }
  ];

  let currY = 695;
  cheatRows.forEach((row) => {
    ctx.strokeStyle = '#141B29';
    ctx.lineWidth = 2;
    ctx.strokeRect(96, currY, W - 192, 225);
    ctx.fillStyle = '#E11D48';
    ctx.font = '800 30px "SUIT", sans-serif';
    ctx.fillText(row.title, 132, currY + 60);
    ctx.fillStyle = '#141B29';
    ctx.font = '600 32px "SUIT", sans-serif';
    wrapCanvasText(ctx, row.rule, 132, currY + 118, W - 264, 46);
    currY += 255;
  });

  ctx.fillStyle = '#141B29';
  ctx.fillRect(96, H - 170, W - 192, 2);
  ctx.fillStyle = '#536076';
  ctx.font = '700 28px "SUIT", sans-serif';
  ctx.fillText('NOPE! · 바닥 0cm 쓰고 수납 늘리는 원룸 빈틈 공식', 96, H - 110);

  shareOrDownloadCanvas(
    canvas,
    `NOPE-gap-${activeZone.id}.png`,
    'NOPE! 원룸 빈틈 수납 기준표',
    `${activeZone.label} (${activeOpt.label}) 실측 기준`,
    '빈틈 수납 기준 카드(PNG)가 저장되었습니다.'
  );
}

// ---------------- Tab 4: Routine ----------------
const routineMenu = document.getElementById('routine-stage-menu');
const routinePanels = {
  timers: document.getElementById('seg-timers'),
  cycles: document.getElementById('seg-cycles'),
  checklist: document.getElementById('seg-checklist')
};

function openRoutineSegment(seg) {
  runViewTransition(() => {
    routineMenu.classList.add('hidden');
    Object.entries(routinePanels).forEach(([key, el]) => {
      el.classList.toggle('hidden', key !== seg);
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
}

function resetRoutineMenu() {
  runViewTransition(() => {
    routineMenu.classList.remove('hidden');
    Object.values(routinePanels).forEach((el) => el.classList.add('hidden'));
  });
}

document.querySelectorAll('[data-open-seg]').forEach((btn) => {
  btn.addEventListener('click', () => openRoutineSegment(btn.dataset.openSeg));
});
document.querySelectorAll('.routine-back-btn').forEach((btn) => {
  btn.addEventListener('click', resetRoutineMenu);
});

const presetButtonsWrap = document.getElementById('preset-timer-buttons');
const activeTimerBox = document.getElementById('active-timer-box');
const activeTimerLabel = document.getElementById('active-timer-label');
const activeTimerClock = document.getElementById('active-timer-clock');
const toggleTimerBtn = document.getElementById('toggle-timer-btn');

function renderPresetTimers() {
  presetButtonsWrap.innerHTML = QUICK_TIMERS.map((t) => `
    <button class="quick-chip-btn" data-min="${t.minutes}" data-lbl="${escapeHtml(t.label)}">
      <div class="quick-chip-min">${t.minutes} MIN</div>
      <div class="quick-chip-lbl">${escapeHtml(t.label)}</div>
      <div style="font-size:11px;color:var(--ink-tertiary);margin-top:2px;">${escapeHtml(t.desc)}</div>
    </button>
  `).join('');
  presetButtonsWrap.querySelectorAll('.quick-chip-btn').forEach((b) => {
    b.addEventListener('click', () => startCountdown(b.dataset.lbl, Number(b.dataset.min)));
  });
}

function formatClock(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function startCountdown(label, minutes) {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission().catch(() => {});
  }
  clearInterval(state.timerInterval);
  state.timerLabel = label;
  state.timerRemainingSec = Math.max(1, Math.round(minutes)) * 60;
  state.timerPaused = false;
  toggleTimerBtn.textContent = '일시정지';

  activeTimerBox.classList.remove('hidden');
  activeTimerLabel.textContent = label;
  activeTimerClock.textContent = formatClock(state.timerRemainingSec);

  state.timerInterval = setInterval(() => {
    if (state.timerPaused) return;
    state.timerRemainingSec -= 1;
    activeTimerClock.textContent = formatClock(Math.max(0, state.timerRemainingSec));
    if (state.timerRemainingSec <= 0) {
      clearInterval(state.timerInterval);
      playBeep();
      showToast(`[${label}] 완료`);
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('NOPE! 타이머 완료', { body: `${label} 시간이 끝났습니다.` });
      }
      activeTimerLabel.textContent = `완료: ${label}`;
    }
  }, 1000);

  showToast(`${label} (${minutes}분) 시작`);
}

document.getElementById('start-custom-timer-btn').addEventListener('click', () => {
  const min = Number(document.getElementById('custom-minutes-input').value) || 10;
  startCountdown(`직접 설정 ${min}분`, min);
});

toggleTimerBtn.addEventListener('click', () => {
  state.timerPaused = !state.timerPaused;
  toggleTimerBtn.textContent = state.timerPaused ? '재개' : '일시정지';
});

document.getElementById('reset-timer-btn').addEventListener('click', () => {
  clearInterval(state.timerInterval);
  activeTimerBox.classList.add('hidden');
});

function loadCycleState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.cycles) || '{}');
  } catch {
    return {};
  }
}

function saveCycleState(obj) {
  localStorage.setItem(STORAGE_KEYS.cycles, JSON.stringify(obj));
}

function formatDateYmd(date) {
  return date.toISOString().slice(0, 10);
}

function formatIcsDate(date) {
  return formatDateYmd(date).replace(/-/g, '') + 'T100000';
}

function buildIcsFile(alarms) {
  const events = alarms.map((a) => {
    const start = new Date();
    start.setDate(start.getDate() + a.everyDays);
    return [
      'BEGIN:VEVENT',
      `UID:${a.id}-${Date.now()}@nope.local`,
      `DTSTAMP:${formatIcsDate(new Date())}`,
      `DTSTART:${formatIcsDate(start)}`,
      `RRULE:FREQ=DAILY;INTERVAL=${a.everyDays}`,
      `SUMMARY:[NOPE!] ${a.title}`,
      `DESCRIPTION:${a.tip}`,
      'BEGIN:VALARM',
      'TRIGGER:-PT0M',
      'ACTION:DISPLAY',
      `DESCRIPTION:${a.title}`,
      'END:VALARM',
      'END:VEVENT'
    ].join('\r\n');
  }).join('\r\n');

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//NOPE//Living Spec Routine//KO',
    events,
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = alarms.length === 1 ? `${alarms[0].id}.ics` : 'nope-all-routines.ics';
  a.click();
  URL.revokeObjectURL(url);
  showToast('캘린더(.ics) 저장 완료');
}

function renderCycleAlarms() {
  const wrap = document.getElementById('cycle-alarms-list');
  const saved = loadCycleState();
  const savedProfile = loadSavedRoomProfile();
  const today = new Date();

  const isRecommendedAlarm = (id) => {
    if (!savedProfile) return false;
    if ((savedProfile.hasPet || savedProfile.hasAllergy || savedProfile.smallWasher) && (id === 'cyc-fabric' || id === 'cyc-bedding')) return true;
    if ((savedProfile.hasMoistureRisk || savedProfile.needsIndoorDrying) && (id === 'cyc-drain' || id === 'cyc-washer')) return true;
    if (savedProfile.hasAllergy && id === 'cyc-filter') return true;
    return false;
  };

  const orderedAlarms = [...CYCLE_ALARMS].sort((a, b) => Number(isRecommendedAlarm(b.id)) - Number(isRecommendedAlarm(a.id)));

  wrap.innerHTML = '';
  orderedAlarms.forEach((alarm) => {
    const lastStr = saved[alarm.id];
    const isReco = isRecommendedAlarm(alarm.id);
    let dueBadgeText = `${alarm.everyDays}일 주기`;
    let isOverdue = false;

    if (lastStr) {
      const nextDate = new Date(lastStr);
      nextDate.setDate(nextDate.getDate() + alarm.everyDays);
      const diffDays = Math.ceil((nextDate - today) / (1000 * 60 * 60 * 24));
      if (diffDays <= 0) {
        dueBadgeText = `실행 필요 (+${Math.abs(diffDays)}일)`;
        isOverdue = true;
      } else {
        dueBadgeText = `D-${diffDays}`;
      }
    }

    const row = document.createElement('div');
    row.className = 'cycle-item';
    row.innerHTML = `
      <div class="cycle-top">
        <strong style="font-size:14px;">${escapeHtml(alarm.title)}${isReco ? `<span class="routine-reco-pill">내 방 추천</span>` : ''}</strong>
        <span class="due-badge ${isOverdue ? 'overdue' : ''}">${dueBadgeText}</span>
      </div>
      <p class="text-secondary" style="font-size:12.5px;margin-top:2px;">${escapeHtml(alarm.tip)}</p>
      <div class="cycle-actions">
        <button class="btn-primary btn-sm done-cycle-btn">오늘 완료</button>
        <button class="btn-secondary btn-sm ics-one-btn">캘린더 추가</button>
      </div>
    `;
    row.querySelector('.done-cycle-btn').addEventListener('click', () => {
      const curr = loadCycleState();
      curr[alarm.id] = formatDateYmd(new Date());
      saveCycleState(curr);
      renderCycleAlarms();
      showToast(`"${alarm.title}" 완료`);
    });
    row.querySelector('.ics-one-btn').addEventListener('click', () => buildIcsFile([alarm]));
    wrap.appendChild(row);
  });
}

document.getElementById('export-all-ics-btn').addEventListener('click', () => buildIcsFile(CYCLE_ALARMS));

let activeInspectZone = '전체';

function createDefaultInspectionState() {
  return {
    roomLabel: '',
    items: {}
  };
}

function loadInspectionState() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.checklist) || 'null');
    if (raw && typeof raw === 'object' && raw.items && typeof raw.items === 'object') {
      return {
        roomLabel: typeof raw.roomLabel === 'string' ? raw.roomLabel : '',
        items: raw.items
      };
    }
  } catch {
    // ignore malformed storage
  }
  return createDefaultInspectionState();
}

function saveInspectionState(insp) {
  localStorage.setItem(STORAGE_KEYS.checklist, JSON.stringify(insp));
}

function getItemInspectRecord(insp, id) {
  const rec = insp.items[id];
  if (!rec || typeof rec !== 'object') {
    return { status: 'pending', tags: [], note: '', photoBacked: false };
  }
  return {
    status: rec.status === 'pass' || rec.status === 'issue' ? rec.status : 'pending',
    tags: Array.isArray(rec.tags) ? rec.tags : [],
    note: typeof rec.note === 'string' ? rec.note : '',
    photoBacked: Boolean(rec.photoBacked)
  };
}

function formatTodayDot() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}.${m}.${day}`;
}

function buildInspectionReportText(insp = loadInspectionState()) {
  const savedProfile = loadSavedRoomProfile();
  const roomTarget = insp.roomLabel.trim()
    || (savedProfile && savedProfile.nickname ? `${savedProfile.nickname}님 자취방` : '자취방 입주 점검');

  const issues = [];
  const passes = [];
  let pendingCount = 0;

  MOVE_IN_CHECKLIST.forEach((item) => {
    const rec = getItemInspectRecord(insp, item.id);
    if (rec.status === 'issue') {
      const detailParts = [...rec.tags];
      if (rec.note.trim()) detailParts.push(rec.note.trim());
      const detailStr = detailParts.length ? ` → ${detailParts.join(' / ')}` : ' → 상세 내용 확인 요청';
      const photoStr = rec.photoBacked ? ' [사진 보관]' : ' [사진 촬영 권장]';
      issues.push(`- [${item.zone}] ${item.title}${detailStr}${photoStr}`);
    } else if (rec.status === 'pass') {
      passes.push(`${item.title}`);
    } else {
      pendingCount += 1;
    }
  });

  const lines = [
    `[NOPE! 입주 상태 점검 기록]`,
    `점검일: ${formatTodayDot()}`,
    `대상: ${roomTarget}`,
    ``,
    `1. 확인된 하자 · 수리 요청 (${issues.length}건)`
  ];

  if (issues.length) {
    lines.push(...issues);
  } else {
    lines.push(`- 현재 특이 하자 없음 (정상)`);
  }

  lines.push(``);
  lines.push(`2. 정상 작동 확인 (${passes.length}건)`);
  lines.push(passes.length ? `- ${passes.join(', ')}` : `- 아직 이상 없음 체크 항목 없음`);

  if (pendingCount > 0) {
    lines.push(``);
    lines.push(`(미확인 ${pendingCount}건 남아 있음)`);
  }

  lines.push(``);
  lines.push(`안녕하세요! 입주 전(당일) 방 상태 확인 및 추후 퇴실 시 원상복구 범위 기록용으로 전달드립니다. 사진도 함께 보관 중이니 확인 부탁드려요.`);
  return lines.join('\n');
}

function renderInspectionReport(insp = loadInspectionState()) {
  const preview = document.getElementById('inspect-report-preview');
  if (preview) {
    preview.textContent = buildInspectionReportText(insp);
  }
}

function renderChecklist() {
  const insp = loadInspectionState();
  const roomInput = document.getElementById('inspect-room-label');
  if (roomInput && roomInput.value !== insp.roomLabel) {
    roomInput.value = insp.roomLabel;
  }

  let passCount = 0;
  let issueCount = 0;
  MOVE_IN_CHECKLIST.forEach((item) => {
    const rec = getItemInspectRecord(insp, item.id);
    if (rec.status === 'pass') passCount += 1;
    else if (rec.status === 'issue') issueCount += 1;
  });
  const doneCount = passCount + issueCount;
  const totalCount = MOVE_IN_CHECKLIST.length;

  document.getElementById('inspect-progress-text').textContent = `${doneCount} / ${totalCount}`;
  document.getElementById('inspect-pass-text').textContent = `${passCount}건`;
  document.getElementById('inspect-issue-text').textContent = `${issueCount}건`;
  document.getElementById('inspect-progress-fill').style.width = `${Math.round((doneCount / totalCount) * 100)}%`;

  // Render zone filter pills
  const zoneWrap = document.getElementById('inspect-zone-filters');
  const zones = ['전체', ...Array.from(new Set(MOVE_IN_CHECKLIST.map((x) => x.zone)))];
  zoneWrap.innerHTML = zones.map((z) => `
    <button type="button" class="inspect-zone-pill ${activeInspectZone === z ? 'active' : ''}" data-zone="${escapeHtml(z)}">
      ${escapeHtml(z)}
    </button>
  `).join('');
  zoneWrap.querySelectorAll('.inspect-zone-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeInspectZone = btn.dataset.zone;
      renderChecklist();
    });
  });

  // Render visible inspection cards
  const wrap = document.getElementById('checklist-container');
  wrap.innerHTML = '';
  const visibleItems = activeInspectZone === '전체'
    ? MOVE_IN_CHECKLIST
    : MOVE_IN_CHECKLIST.filter((x) => x.zone === activeInspectZone);

  visibleItems.forEach((item) => {
    const rec = getItemInspectRecord(insp, item.id);
    const card = document.createElement('div');
    card.className = `inspect-card status-${rec.status}`;
    card.innerHTML = `
      <div class="inspect-card-head">
        <div class="inspect-card-title-wrap">
          <span class="inspect-zone-tag">${escapeHtml(item.zone)}</span>
          <strong class="inspect-card-title">${escapeHtml(item.title)}</strong>
          <p class="inspect-howto">${escapeHtml(item.howTo)}</p>
        </div>
      </div>
      <div class="inspect-status-row">
        <button type="button" class="inspect-state-btn is-pass ${rec.status === 'pass' ? 'active' : ''}" data-next="pass">✓ 이상 없음</button>
        <button type="button" class="inspect-state-btn is-issue ${rec.status === 'issue' ? 'active' : ''}" data-next="issue">! 하자 발견</button>
      </div>
      ${rec.status === 'issue' ? `
        <div class="inspect-defect-drawer">
          <div class="inspect-quick-tags">
            ${item.quickTags.map((tag) => `
              <button type="button" class="inspect-tag-chip ${rec.tags.includes(tag) ? 'active' : ''}" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>
            `).join('')}
          </div>
          <input
            type="text"
            class="inspect-note-input"
            maxlength="80"
            value="${escapeHtml(rec.note)}"
            placeholder="위치·크기를 짧게 적으세요 (예: 현관 우측 벽지 10cm 찢김)"
            aria-label="${escapeHtml(item.title)} 상세 메모"
          />
          <label class="inspect-photo-toggle">
            <input type="checkbox" ${rec.photoBacked ? 'checked' : ''} />
            <span>현장 사진 1장 이상 찍어둠 (집주인 전송 대비)</span>
          </label>
        </div>
      ` : ''}
    `;

    card.querySelectorAll('.inspect-state-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const latest = loadInspectionState();
        const currRec = getItemInspectRecord(latest, item.id);
        const targetStatus = btn.dataset.next;
        currRec.status = currRec.status === targetStatus ? 'pending' : targetStatus;
        latest.items[item.id] = currRec;
        saveInspectionState(latest);
        renderChecklist();
      });
    });

    if (rec.status === 'issue') {
      card.querySelectorAll('.inspect-tag-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          const latest = loadInspectionState();
          const currRec = getItemInspectRecord(latest, item.id);
          const tag = chip.dataset.tag;
          currRec.tags = currRec.tags.includes(tag)
            ? currRec.tags.filter((t) => t !== tag)
            : [...currRec.tags, tag];
          latest.items[item.id] = currRec;
          saveInspectionState(latest);
          renderChecklist();
        });
      });

      const noteInput = card.querySelector('.inspect-note-input');
      if (noteInput) {
        noteInput.addEventListener('input', (e) => {
          const latest = loadInspectionState();
          const currRec = getItemInspectRecord(latest, item.id);
          currRec.note = e.target.value;
          latest.items[item.id] = currRec;
          saveInspectionState(latest);
          renderInspectionReport(latest);
        });
      }

      const photoCb = card.querySelector('.inspect-photo-toggle input');
      if (photoCb) {
        photoCb.addEventListener('change', (e) => {
          const latest = loadInspectionState();
          const currRec = getItemInspectRecord(latest, item.id);
          currRec.photoBacked = e.target.checked;
          latest.items[item.id] = currRec;
          saveInspectionState(latest);
          renderInspectionReport(latest);
        });
      }
    }

    wrap.appendChild(card);
  });

  renderInspectionReport(insp);
}

const inspectRoomInput = document.getElementById('inspect-room-label');
if (inspectRoomInput) {
  inspectRoomInput.addEventListener('input', (e) => {
    const latest = loadInspectionState();
    latest.roomLabel = e.target.value;
    saveInspectionState(latest);
    renderInspectionReport(latest);
  });
}

const inspectResetBtn = document.getElementById('inspect-reset-btn');
if (inspectResetBtn) {
  inspectResetBtn.addEventListener('click', () => {
    const fresh = createDefaultInspectionState();
    saveInspectionState(fresh);
    activeInspectZone = '전체';
    renderChecklist();
    showToast('입주 점검 기록을 초기화했어요');
  });
}

const copyReportBtn = document.getElementById('copy-inspect-report-btn');
if (copyReportBtn) {
  copyReportBtn.addEventListener('click', () => {
    copyTextToClipboard(buildInspectionReportText(), '복사 완료! 카톡·문자에 바로 붙여넣으세요');
  });
}

const downloadReportBtn = document.getElementById('download-inspect-report-btn');
if (downloadReportBtn) {
  downloadReportBtn.addEventListener('click', () => {
    const text = buildInspectionReportText();
    const ymd = formatTodayDot().replace(/\./g, '');
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nope-입주점검표-${ymd}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('입주 점검표(.txt) 저장 완료');
  });
}

function renderSharedArrivalBanner(profileId, nick) {
  const banner = document.getElementById('shared-arrival-banner');
  if (!banner) return;
  let target = QUIZ_RESULTS.find((r) => r.id === profileId);
  if (!target && /^type(\d+)$/i.test(String(profileId || ''))) {
    const idx = parseInt(String(profileId).match(/\d+/)[0], 10) - 1;
    if (idx >= 0 && idx < QUIZ_RESULTS.length) target = QUIZ_RESULTS[idx];
  }
  if (!target) {
    banner.classList.add('hidden');
    return;
  }
  const cleanNick = (nick || '친구').slice(0, 12);
  banner.innerHTML = `
    <p class="shared-arrival-title">${escapeHtml(cleanNick)}님의 방은 <span style="color:var(--accent)">'${escapeHtml(target.badge)}'</span>!</p>
    <p class="shared-arrival-sub">${escapeHtml(target.tagline)} · 내 방은 몇 점인지 1분 진단해 보세요.</p>
  `;
  banner.classList.remove('hidden');
}

function handleDeepLinks() {
  const params = new URLSearchParams(location.search);
  const utm = params.get('utm_source') || params.get('ref') || '';
  if (utm) {
    try {
      sessionStorage.setItem('nope_utm_source', utm.slice(0, 40));
    } catch {
      // ignore sessionStorage block
    }
  }

  const sharedType = params.get('type');
  if (sharedType) {
    renderSharedArrivalBanner(sharedType, params.get('nick') || '');
  }

  const compareParam = params.get('compare');
  if (compareParam) {
    const [idA, idB] = compareParam.split(',').map((s) => s.trim()).filter(Boolean);
    const hitA = ITEMS_DB.find((it) => it.id === idA);
    const hitB = ITEMS_DB.find((it) => it.id === idB);
    if (hitA && hitB) {
      activeCompareA = hitA.id;
      activeCompareB = hitB.id;
      switchTab('scanner');
      setScannerMode('compare');
      return;
    }
  }

  const itemId = params.get('item');
  if (itemId) {
    const target = ITEMS_DB.find((it) => it.id === itemId);
    if (target) {
      switchTab('scanner');
      state.selectedFilter = { label: target.category, type: 'cat', value: target.category };
      openScannerResults(target.category);
      renderItems();
      openDetailSheet(target);
      return;
    }
  }

  const tab = params.get('tab');
  const q = params.get('q');
  const mode = params.get('mode');
  const tone = params.get('tone');
  const base = params.get('base');
  const seg = params.get('seg');

  if (tab === 'scanner') {
    switchTab('scanner');
    if (mode === 'compare') {
      setScannerMode('compare');
    } else if (mode === 'matcher') {
      if (tone) state.matcherTone = tone;
      if (base && ROOM_BASE_OPTIONS.some((b) => b.id === base)) {
        state.matcherRoomBase = base;
        saveRoomBaseState(base);
      }
      setScannerMode('matcher');
    } else if (q) {
      searchInput.value = q;
      runScannerSearch();
    }
  } else if (tab === 'scale') {
    switchTab('scale');
    const view = params.get('view');
    if (view === 'gap') {
      setScaleView('gap');
    }
  } else if (tab === 'routine') {
    switchTab('routine');
    if (seg && routinePanels[seg]) {
      openRoutineSegment(seg);
    }
  }
}

// ---------------- Wishlist, Lazy Auth & PWA Install ----------------
const accountSheetBackdrop = document.getElementById('account-sheet-backdrop');
const accountSheetPanel = document.getElementById('account-sheet-panel');
const topbarWishBtn = document.getElementById('topbar-wishlist-btn');
const topbarWishCount = document.getElementById('topbar-wishlist-count');
const topbarAuthBtn = document.getElementById('topbar-auth-btn');

let activeAccountTab = 'wishlist';

function hasLiveSupabase() {
  return Boolean(SUPABASE_CONFIG && SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey);
}

function loadWishlist() {
  try {
    const arr = JSON.parse(localStorage.getItem(STORAGE_KEYS.wishlist) || '[]');
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function saveWishlist(items) {
  localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(items));
  updateWishlistBadge();
  syncCloudRoomDataIfAuthed();
}

function isWishlistedItem(id) {
  return loadWishlist().some((it) => it.id === id);
}

function toggleWishlistItem(item) {
  const list = loadWishlist();
  const exists = list.some((it) => it.id === item.id);
  let next;
  if (exists) {
    next = list.filter((it) => it.id !== item.id);
    showToast('내 방 후보에서 뺐어요');
  } else {
    next = [item, ...list].slice(0, 40);
    const acc = loadAccountSession();
    showToast(acc ? '내 방 찜 목록에 저장됐어요' : '찜 저장! 우측 상단 "내 방 저장"에서 백업할 수 있어요');
  }
  saveWishlist(next);
  return !exists;
}

function updateWishlistBadge() {
  if (!topbarWishCount) return;
  const cnt = loadWishlist().length;
  topbarWishCount.textContent = String(cnt);
}

function loadAccountSession() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.account) || 'null');
    return raw && typeof raw === 'object' ? raw : null;
  } catch {
    return null;
  }
}

function saveAccountSession(session) {
  if (session) {
    localStorage.setItem(STORAGE_KEYS.account, JSON.stringify(session));
  } else {
    localStorage.removeItem(STORAGE_KEYS.account);
  }
  updateAuthBadge();
}

function updateAuthBadge() {
  if (!topbarAuthBtn) return;
  const acc = loadAccountSession();
  if (acc && (acc.email || acc.label)) {
    const shortName = (acc.label || acc.email.split('@')[0] || 'MY').slice(0, 6);
    topbarAuthBtn.textContent = shortName;
    topbarAuthBtn.classList.add('is-signed-in');
  } else {
    topbarAuthBtn.textContent = '내 방 저장';
    topbarAuthBtn.classList.remove('is-signed-in');
  }
}

function gatherUserRoomSnapshot() {
  return {
    savedAt: new Date().toISOString(),
    roomProfile: loadSavedRoomProfile(),
    wishlist: loadWishlist(),
    inspection: loadInspectionState(),
    cycles: loadCycleState(),
    scale: { height: state.scaleHeight, mode: state.scaleMode }
  };
}

async function syncCloudRoomDataIfAuthed() {
  const acc = loadAccountSession();
  if (!hasLiveSupabase() || !acc || !acc.accessToken || !acc.userId) return;
  try {
    await fetch(`${SUPABASE_CONFIG.url.replace(/\/+$/, '')}/rest/v1/user_room_data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_CONFIG.anonKey,
        Authorization: `Bearer ${acc.accessToken}`,
        Prefer: 'resolution=merge-duplicates'
      },
      body: JSON.stringify({
        user_id: acc.userId,
        payload: gatherUserRoomSnapshot(),
        updated_at: new Date().toISOString()
      })
    });
  } catch {
    // non-blocking cloud sync
  }
}

function startSupabaseOAuth(provider) {
  if (!hasLiveSupabase()) {
    showToast('실서버 Supabase URL·Key 연결 후 바로 작동해요 (아래 로컬 저장 가능)');
    return;
  }
  const base = SUPABASE_CONFIG.url.replace(/\/+$/, '');
  const redirectTo = encodeURIComponent(location.origin + location.pathname);
  location.href = `${base}/auth/v1/authorize?provider=${encodeURIComponent(provider)}&redirect_to=${redirectTo}`;
}

async function sendSupabaseMagicLink(email) {
  if (!hasLiveSupabase()) {
    saveAccountSession({
      provider: 'local_backup',
      email,
      label: email.split('@')[0],
      savedAt: new Date().toISOString()
    });
    renderAccountSheet('auth');
    showToast('이 기기에 내 방 계정을 연결했어요 (실서버 연결 전 로컬 모드)');
    return;
  }
  const base = SUPABASE_CONFIG.url.replace(/\/+$/, '');
  const res = await fetch(`${base}/auth/v1/otp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_CONFIG.anonKey
    },
    body: JSON.stringify({ email, create_user: true })
  });
  if (res.ok) {
    showToast('입력한 이메일로 1클릭 로그인 링크를 보냈어요!');
  } else {
    showToast('이메일 로그인 링크 발송에 실패했어요. 설정을 확인해 주세요.');
  }
}

function recoverSupabaseSessionFromHash() {
  if (!location.hash || !location.hash.includes('access_token=')) return;
  const hp = new URLSearchParams(location.hash.replace(/^#/, ''));
  const accessToken = hp.get('access_token');
  if (!accessToken) return;
  try {
    const payloadPart = accessToken.split('.')[1] || '';
    const decoded = JSON.parse(atob(payloadPart.replace(/-/g, '+').replace(/_/g, '/')));
    saveAccountSession({
      provider: 'supabase',
      userId: decoded.sub || '',
      email: decoded.email || '회원',
      label: (decoded.email || '회원').split('@')[0],
      accessToken
    });
    history.replaceState(null, '', location.pathname + location.search);
    syncCloudRoomDataIfAuthed();
    showToast('로그인 완료! 내 방 데이터가 연동되었어요.');
  } catch {
    // ignore malformed JWT fragment
  }
}

function closeAccountSheet() {
  if (accountSheetBackdrop) accountSheetBackdrop.classList.add('hidden');
  syncBodyScrollLock();
  const tabMy = document.getElementById('tab-my');
  if (tabMy && tabMy.classList.contains('active')) {
    renderMyPage('main');
  }
}

function parsePriceTierManWon(tierStr) {
  const clean = String(tierStr || '').replace(/\([^)]*\)/g, '').trim();
  if (!clean) return null;
  const parts = clean.split(/[~–-]/);
  const parsePart = (chunk, fallbackUnit) => {
    const numMatch = chunk.match(/(\d+(?:\.\d+)?)/);
    if (!numMatch) return null;
    const val = parseFloat(numMatch[1]);
    if (chunk.includes('천')) return val / 10;
    if (chunk.includes('만')) return val;
    return fallbackUnit === '천' ? val / 10 : val;
  };
  const tailUnit = clean.includes('만') ? '만' : (clean.includes('천') ? '천' : '만');
  const first = parsePart(parts[0], parts.length === 1 ? tailUnit : (parts[0].includes('천') ? '천' : tailUnit));
  if (first === null) return null;
  const second = parts[1] ? parsePart(parts[1], tailUnit) : first;
  const hi = second !== null ? Math.max(first, second) : first;
  return [first, hi];
}

function formatManWonValue(val) {
  if (val < 1) return `${Math.max(1, Math.round(val * 10))}천`;
  const rounded = Math.round(val * 10) / 10;
  return `${Number.isInteger(rounded) ? rounded : rounded.toFixed(1)}만`;
}

function analyzeWishlistCombo(wishlist) {
  const savedSet = new Set(wishlist.map((it) => it.id));
  const hydrated = wishlist.map((it) => {
    const live = ITEMS_DB.find((x) => x.id === it.id);
    return live ? { ...live, ...it, tones: live.tones, pairIds: live.pairIds } : it;
  });

  let minSum = 0;
  let maxSum = 0;
  let pricedCount = 0;
  const toneCounts = {};
  const pairScores = {};

  hydrated.forEach((it) => {
    const parsed = parsePriceTierManWon(it.priceTier);
    if (parsed) {
      minSum += parsed[0];
      maxSum += parsed[1];
      pricedCount += 1;
    }
    if (Array.isArray(it.tones)) {
      it.tones.forEach((tid) => {
        toneCounts[tid] = (toneCounts[tid] || 0) + 1;
      });
    }
    if (Array.isArray(it.pairIds)) {
      it.pairIds.forEach((pid) => {
        if (!savedSet.has(pid)) {
          pairScores[pid] = (pairScores[pid] || 0) + 1;
        }
      });
    }
  });

  const budgetText = pricedCount
    ? (Math.round(minSum * 10) === Math.round(maxSum * 10)
      ? `약 ${formatManWonValue(minSum)} 원`
      : `약 ${formatManWonValue(minSum)}~${formatManWonValue(maxSum)} 원`)
    : '가격 정보 확인 필요';

  const topToneEntry = Object.entries(toneCounts).sort((a, b) => b[1] - a[1])[0] || null;
  const savedProfile = loadSavedRoomProfile();
  let toneStatus = 'neutral';
  let toneSummary = '톤 매칭 데이터가 있는 가구를 추가해 보세요.';
  if (topToneEntry) {
    const [topToneId, topCount] = topToneEntry;
    const topLabel = getToneLabel(topToneId);
    if (savedProfile && savedProfile.toneId) {
      const myLabel = getToneLabel(savedProfile.toneId);
      const myMatchCount = toneCounts[savedProfile.toneId] || 0;
      if (savedProfile.toneId === topToneId || myMatchCount === hydrated.length) {
        toneStatus = 'ok';
        toneSummary = `내 방(${myLabel}) 톤과 잘 어울리는 조합이에요.`;
      } else if (myMatchCount > 0) {
        toneStatus = 'neutral';
        toneSummary = `내 방(${myLabel})과 ${topLabel} 톤이 섞여 있어요. 큰 가구 색을 기준으로 묶어보세요.`;
      } else {
        toneStatus = 'warn';
        toneSummary = `내 방(${myLabel})보다 '${topLabel}' 계열 위주라 소품 톤 조율이 필요해요.`;
      }
    } else if (topCount >= Math.max(1, Math.ceil(hydrated.length * 0.7))) {
      toneStatus = 'ok';
      toneSummary = `'${topLabel}' 중심으로 톤 통일도가 안정적이에요.`;
    } else {
      toneStatus = 'warn';
      toneSummary = '색상 톤이 여러 갈래라 큰 가구 1가지 톤으로 맞추는 편이 깔끔해요.';
    }
  }

  const complements = Object.entries(pairScores)
    .sort((a, b) => b[1] - a[1])
    .map(([pid]) => ITEMS_DB.find((x) => x.id === pid))
    .filter(Boolean)
    .slice(0, 2);

  return { hydrated, budgetText, pricedCount, toneStatus, toneSummary, complements };
}

function renderAccountSheet(tab = activeAccountTab) {
  activeAccountTab = tab;
  if (!accountSheetPanel) return;

  const wishlist = loadWishlist();
  const acc = loadAccountSession();
  const passCnt = wishlist.filter((x) => x.verdict === 'PASS').length;
  const nopeCnt = wishlist.filter((x) => x.verdict === 'NOPE').length;
  const avgDust = wishlist.length
    ? (wishlist.reduce((s, x) => s + (x.specs ? Number(x.specs.dust || 2) : 2), 0) / wishlist.length).toFixed(1)
    : '0.0';
  const combo = wishlist.length ? analyzeWishlistCombo(wishlist) : null;

  accountSheetPanel.innerHTML = `
    <div class="sheet-grabber" aria-hidden="true"></div>
    <div class="sheet-head" style="margin-bottom:14px;">
      <div>
        <h2 class="sheet-title" style="margin:2px 0;">내 방 후보 · 조합 점검</h2>
      </div>
      <button class="sheet-close" id="close-account-sheet-btn" type="button" aria-label="닫기">×</button>
    </div>

    <div class="account-tabs-bar">
      <button type="button" class="account-tab-btn ${tab === 'wishlist' ? 'active' : ''}" data-acc-tab="wishlist">찜한 가구 (${wishlist.length})</button>
      <button type="button" class="account-tab-btn ${tab === 'auth' ? 'active' : ''}" data-acc-tab="auth">${acc ? '내 계정 연동됨' : '3초 로그인·백업'}</button>
    </div>

    ${tab === 'wishlist' ? `
      ${wishlist.length ? `
        <div class="wishlist-combo-card">
          <div class="wishlist-budget-row">
            <span class="wishlist-budget-lbl">예상 조합 예산 (${combo.pricedCount}종 합계)</span>
            <strong class="wishlist-budget-val">${escapeHtml(combo.budgetText)}</strong>
          </div>
          <p class="wishlist-tone-note is-${combo.toneStatus}">${escapeHtml(combo.toneSummary)}</p>
        </div>
        <div class="score-trio" style="margin-bottom:14px;">
          <div class="score-pill"><span class="score-lbl">PASS</span><strong class="score-safe">${passCnt}개</strong></div>
          <div class="score-pill"><span class="score-lbl">주의</span><strong class="${nopeCnt ? 'score-high' : ''}">${nopeCnt}개</strong></div>
          <div class="score-pill"><span class="score-lbl">평균 먼지</span><strong>${avgDust}/5</strong></div>
        </div>
        <div>
          ${combo.hydrated.map((it) => {
            const vm = verdictMeta(it.verdict);
            const firstTone = Array.isArray(it.tones) && it.tones.length ? getToneLabel(it.tones[0]) : '';
            return `
              <div class="wishlist-item-row">
                <div class="wishlist-item-main" data-wish-open="${escapeHtml(it.id)}">
                  <span class="verdict-pill ${vm.cls}" style="font-size:10px;padding:2px 6px;">${vm.text}</span>
                  <strong style="margin-top:4px;">${escapeHtml(it.name)}</strong>
                  <span>${escapeHtml(it.category || '')} · ${escapeHtml(it.priceTier || '')}${firstTone ? ` · ${escapeHtml(firstTone)}` : ''}</span>
                </div>
                <button type="button" class="wishlist-remove-btn" data-wish-remove="${escapeHtml(it.id)}">삭제</button>
              </div>
            `;
          }).join('')}
        </div>
        ${combo.complements.length ? `
          <div class="wishlist-comp-box">
            <h3 class="wishlist-comp-heading">이 조합에 빠진 보완템 ${combo.complements.length}종</h3>
            ${combo.complements.map((comp) => {
              const cvm = verdictMeta(comp.verdict);
              const urls = buildShopUrls(comp.altSearchKeyword || comp.name, comp.id);
              return `
                <div class="wishlist-comp-card">
                  <div class="wishlist-comp-top">
                    <strong class="wishlist-comp-name">${escapeHtml(comp.name)}</strong>
                    <span class="verdict-pill ${cvm.cls}" style="font-size:10px;padding:2px 6px;flex-shrink:0;">${cvm.text}</span>
                  </div>
                  <p class="wishlist-comp-desc">${escapeHtml(comp.goodLine || comp.oneLiner || '')}</p>
                  <div class="wishlist-comp-actions">
                    <button type="button" class="btn-secondary btn-sm" data-wish-open="${escapeHtml(comp.id)}">스펙 보기</button>
                    <a class="shop-link-btn is-coupang" href="${urls.coupang}" target="_blank" rel="noopener noreferrer">쿠팡 최저가</a>
                    <a class="shop-link-btn is-ohouse" href="${urls.ohouse}" target="_blank" rel="noopener noreferrer">오늘의집</a>
                  </div>
                </div>
              `;
            }).join('')}
            ${AFFILIATE_CONFIG.coupangEnabled ? `<p class="ftc-affiliate-note">${escapeHtml(AFFILIATE_CONFIG.disclosureText)}</p>` : ''}
          </div>
        ` : ''}
        ${!acc ? `
          <div class="sync-status-box" style="margin-top:12px;">
            다른 폰·PC에서도 찜한 가구와 입주 점검표를 이어보려면 <strong>3초 로그인·백업</strong>을 켜두세요.
            <button type="button" id="go-auth-tab-btn" class="btn-primary btn-full" style="margin-top:10px;">내 방 데이터 저장하기 →</button>
          </div>
        ` : ''}
      ` : `
        <div class="auth-box" style="text-align:center;">
          <strong style="display:block;font-size:14.5px;margin-bottom:6px;">아직 찜한 가구가 없어요</strong>
          <p class="text-secondary" style="font-size:12.5px;margin-bottom:14px;">가구 상세에서 <strong>♡ 저장</strong>을 누르면 예산과 톤 조합을 계산해 드려요.</p>
          <button type="button" id="wish-go-scanner-btn" class="btn-primary btn-full">${ITEMS_DB.length}종 가구 둘러보기 →</button>
        </div>
      `}
    ` : `
      <div class="auth-box">
        ${acc ? `
          <h3 style="margin:2px 0 4px;">${escapeHtml(acc.email || acc.label)}</h3>
          <p class="text-secondary" style="font-size:12.5px;margin-bottom:12px;">
            ${acc.provider === 'supabase'
              ? '계정에 진단·찜·점검 기록이 동기화되어 있습니다.'
              : '이 기기에 저장 중입니다.'}
          </p>
          <div style="display:flex;gap:8px;">
            <button type="button" id="logout-account-btn" class="btn-secondary btn-sm" style="flex:1;">연결 해제(로그아웃)</button>
          </div>
        ` : `
          <h3 style="margin:2px 0 6px;">회원가입은 저장할 때만!</h3>
          <p class="text-secondary" style="font-size:12.5px;margin-bottom:12px;line-height:1.5;">
            찜한 가구 <strong>${wishlist.length}건</strong>과 진단·점검 기록을 다른 기기에서도 이어볼 때만 연결하세요.
          </p>
          ${(() => {
            const consent = loadLegalConsent();
            const reqChecked = Boolean(consent && consent.required) ? 'checked' : '';
            const mktChecked = Boolean(consent && consent.marketing) ? 'checked' : '';
            return `
              <div id="auth-consent-box" class="consent-box" style="margin:0 0 12px;">
                <label class="consent-row">
                  <input id="auth-consent-required" type="checkbox" ${reqChecked} />
                  <span class="consent-text"><strong>[필수]</strong> 이용약관 및 개인정보 수집·연동 동의</span>
                  <button type="button" class="consent-view-btn" data-open-policy="privacy">보기 ›</button>
                </label>
                <label class="consent-row">
                  <input id="auth-consent-marketing" type="checkbox" ${mktChecked} />
                  <span class="consent-text">[선택] 맞춤 가구·혜택 알림 수신 동의</span>
                </label>
              </div>
            `;
          })()}
          <button type="button" id="oauth-kakao-btn" class="auth-provider-btn is-kakao">카카오로 3초 시작하기</button>
          <button type="button" id="oauth-google-btn" class="auth-provider-btn is-google">Google 계정으로 계속하기</button>
          <div class="auth-email-row">
            <input id="auth-email-input" type="text" placeholder="이메일 주소 입력" aria-label="이메일 주소" />
            <button id="auth-email-submit-btn" type="button" class="btn-primary btn-sm">연결</button>
          </div>
        `}
      </div>

      <div class="auth-box" style="margin-top:10px;">
        <strong style="display:block;font-size:13px;font-weight:800;margin-bottom:8px;">내 데이터 관리 · 권리 행사</strong>
        <button type="button" id="export-room-backup-btn" class="btn-secondary btn-sm btn-full">내 방 데이터 백업 (.json) 내려받기</button>
        <button type="button" id="clear-all-user-data-btn" class="data-danger-btn">내 데이터 전체 삭제 · 동의 철회</button>
        <div class="app-legal-footer" style="margin-top:12px;padding:6px 0 0;">
          <button type="button" class="legal-footer-btn" data-open-policy="terms">이용약관</button>
          <span class="legal-sep" aria-hidden="true">·</span>
          <button type="button" class="legal-footer-btn is-strong" data-open-policy="privacy">개인정보처리방침</button>
        </div>
      </div>

      <div class="sync-status-box">
        <strong>저장 방식:</strong> ${hasLiveSupabase() ? '클라우드 동기화 활성' : '이 기기(브라우저)에 안전하게 로컬 저장 중'}
      </div>
    `}
  `;

  document.getElementById('close-account-sheet-btn').addEventListener('click', closeAccountSheet);
  accountSheetPanel.querySelectorAll('[data-acc-tab]').forEach((btn) => {
    btn.addEventListener('click', () => renderAccountSheet(btn.dataset.accTab));
  });

  accountSheetPanel.querySelectorAll('[data-wish-open]').forEach((el) => {
    el.addEventListener('click', () => {
      const target = loadWishlist().find((x) => x.id === el.dataset.wishOpen) || ITEMS_DB.find((x) => x.id === el.dataset.wishOpen);
      if (target) {
        closeAccountSheet();
        openDetailSheet(target);
      }
    });
  });

  accountSheetPanel.querySelectorAll('[data-wish-remove]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = loadWishlist().filter((x) => x.id !== btn.dataset.wishRemove);
      saveWishlist(next);
      renderAccountSheet('wishlist');
    });
  });

  const goAuthBtn = document.getElementById('go-auth-tab-btn');
  if (goAuthBtn) goAuthBtn.addEventListener('click', () => renderAccountSheet('auth'));

  const goScanBtn = document.getElementById('wish-go-scanner-btn');
  if (goScanBtn) {
    goScanBtn.addEventListener('click', () => {
      closeAccountSheet();
      switchTab('scanner');
    });
  }

  const requireAuthConsent = () => {
    const reqEl = document.getElementById('auth-consent-required');
    const mktEl = document.getElementById('auth-consent-marketing');
    const boxEl = document.getElementById('auth-consent-box');
    if (reqEl && !reqEl.checked) {
      if (boxEl) boxEl.classList.add('is-error');
      showToast('계정 연동을 위해 필수 약관·개인정보 수집에 동의해 주세요.');
      return false;
    }
    if (boxEl) boxEl.classList.remove('is-error');
    saveLegalConsent(true, Boolean(mktEl && mktEl.checked));
    return true;
  };

  const authReqCheckbox = document.getElementById('auth-consent-required');
  if (authReqCheckbox) {
    authReqCheckbox.addEventListener('change', () => {
      const boxEl = document.getElementById('auth-consent-box');
      if (authReqCheckbox.checked && boxEl) boxEl.classList.remove('is-error');
    });
  }

  const kakaoBtn = document.getElementById('oauth-kakao-btn');
  if (kakaoBtn) kakaoBtn.addEventListener('click', () => {
    if (!requireAuthConsent()) return;
    startSupabaseOAuth('kakao');
  });

  const googleBtn = document.getElementById('oauth-google-btn');
  if (googleBtn) googleBtn.addEventListener('click', () => {
    if (!requireAuthConsent()) return;
    startSupabaseOAuth('google');
  });

  const emailSubmitBtn = document.getElementById('auth-email-submit-btn');
  if (emailSubmitBtn) {
    emailSubmitBtn.addEventListener('click', () => {
      if (!requireAuthConsent()) return;
      const val = (document.getElementById('auth-email-input').value || '').trim();
      if (!val || !val.includes('@')) {
        showToast('올바른 이메일 주소를 입력해 주세요.');
        return;
      }
      sendSupabaseMagicLink(val);
    });
  }

  const backupBtn = document.getElementById('export-room-backup-btn');
  if (backupBtn) {
    backupBtn.addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(gatherUserRoomSnapshot(), null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `nope-my-room-${formatTodayDot().replace(/\./g, '')}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('내 방 데이터 백업(.json) 저장 완료');
    });
  }

  const clearAllBtn = document.getElementById('clear-all-user-data-btn');
  if (clearAllBtn) {
    let armed = false;
    clearAllBtn.addEventListener('click', () => {
      if (!armed) {
        armed = true;
        clearAllBtn.textContent = '정말 모두 삭제할까요? 한 번 더 누르면 삭제';
        setTimeout(() => {
          if (armed) {
            armed = false;
            if (document.body.contains(clearAllBtn)) {
              clearAllBtn.textContent = '내 데이터 전체 삭제 · 동의 철회';
            }
          }
        }, 4500);
        return;
      }
      clearAllUserDataAndReset();
    });
  }

  const logoutBtn = document.getElementById('logout-account-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      saveAccountSession(null);
      renderAccountSheet('auth');
      showToast('계정 연결을 해제했어요');
    });
  }
}

document.addEventListener('click', (e) => {
  const policyTrigger = e.target && e.target.closest ? e.target.closest('[data-open-policy]') : null;
  if (policyTrigger) {
    openLegalSheet(policyTrigger.dataset.openPolicy);
    return;
  }
  const manageTrigger = e.target && e.target.closest ? e.target.closest('#footer-data-manage-btn') : null;
  if (manageTrigger) {
    switchTab('my');
  }
});

// ---------------- Tab 5: My Page (Account, Settings, Support, Legal) ----------------
const APP_VERSION_STR = 'v1.0.0';
const SUPPORT_EMAIL = 'nope.room.app@gmail.com';

const APP_NOTICES = [
  {
    date: '2026.11.28',
    title: '계정 설정 · 고객지원(마이 탭) 오픈',
    body: '마이 탭에서 계정 연동, 알림 수신 설정, 데이터 백업, 공지사항, 의견 남기기, 서비스 탈퇴까지 한 곳에서 관리할 수 있습니다.'
  },
  {
    date: '2026.11.27',
    title: '실상품 235종 스펙 판독 데이터 반영',
    body: '월세 타공 제한, 소형 세탁기(9kg 이하) 세탁 여부, 모니터암 상판 하중 기준 판독 데이터를 최신 품목으로 보강했습니다.'
  },
  {
    date: '2026.11.25',
    title: '집주인 제출용 입주 하자 점검표 업데이트',
    body: '루틴 탭에서 구역별 하자·수압 기록을 작성해 카톡·문자용 텍스트나 .txt 파일로 바로 내보낼 수 있습니다.'
  }
];

const APP_FAQS = [
  {
    q: '로그인 없이도 방 진단과 판독을 쓸 수 있나요?',
    a: '네. 로그인 없이도 모든 기능을 바로 이용할 수 있으며, 응답과 찜 목록은 이 기기 브라우저에 자동 저장됩니다. 다른 기기와 이어보려면 마이 탭에서 계정을 연결하세요.'
  },
  {
    q: '저장한 닉네임이나 방 조건을 수정하고 싶어요.',
    a: '마이 탭 상단에서 닉네임을 바로 바꾸거나, 내 방 진단 리포트 › 또는 홈 화면 하단에서 방 조건을 다시 테스트할 수 있습니다.'
  },
  {
    q: '검색 결과에 원하는 제품이 나오지 않을 때는요?',
    a: '판독 탭 검색창에 상품명이나 쇼핑몰 링크를 그대로 입력하면 키워드 기반으로 즉시 판독하며, 마이 › 의견 남기기로 상품 추가를 제보하실 수 있습니다.'
  },
  {
    q: '서비스 탈퇴 및 저장 데이터 삭제는 어떻게 하나요?',
    a: '마이 탭 하단 「서비스 탈퇴 · 내 데이터 전체 삭제」에서 언제든 기기와 계정의 진단·찜·점검 데이터 및 약관 동의를 즉시 삭제할 수 있습니다.'
  }
];

function loadFeedbackHistory() {
  try {
    const arr = JSON.parse(localStorage.getItem(STORAGE_KEYS.feedback) || '[]');
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function saveFeedbackEntry(kind, text) {
  const list = loadFeedbackHistory();
  list.unshift({
    id: `fb_${Date.now()}`,
    kind,
    text,
    date: formatTodayDot()
  });
  try {
    localStorage.setItem(STORAGE_KEYS.feedback, JSON.stringify(list.slice(0, 15)));
  } catch {
    // ignore quota errors
  }
  return list.slice(0, 15);
}

function openSavedProfileReportFromMy() {
  const saved = loadSavedRoomProfile();
  if (!saved) {
    switchTab('home');
    startQuiz(true);
    return;
  }
  const profile = QUIZ_RESULTS.find((r) => r.id === saved.profileId) || QUIZ_RESULTS[QUIZ_RESULTS.length - 1];
  if (saved.nickname) state.nickname = saved.nickname;
  const mbtiObj = (saved.mbtiId && SPACE_MBTI_TYPES.find((m) => m.id === saved.mbtiId)) || SPACE_MBTI_TYPES[0];
  switchTab('home');
  renderQuizResultView(
    profile,
    saved.dangerScore,
    saved.pyeongLabel || '6~7평',
    saved.toneName || '화이트 미니멀',
    saved.nickname || '자취러',
    mbtiObj.code,
    saved.secondaryRisks || [],
    saved.dynamicAvoid || null,
    saved.dynamicAlt || null,
    saved.analysisBasis || [],
    saved.estimatedSavedWon || 180000,
    saved.questionCount || 15
  );
}

function renderMyPage(subView = 'main') {
  const mainEl = document.getElementById('my-main-view');
  const subEl = document.getElementById('my-sub-view');
  if (!mainEl || !subEl) return;

  if (subView !== 'main') {
    mainEl.classList.add('hidden');
    subEl.classList.remove('hidden');
    renderMySubView(subView, subEl);
    window.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }

  subEl.classList.add('hidden');
  mainEl.classList.remove('hidden');

  const acc = loadAccountSession();
  const saved = loadSavedRoomProfile();
  const wishlist = loadWishlist();
  const consent = loadLegalConsent();
  const mktOn = Boolean(consent && consent.marketing);
  const excludeOn = state.excludedTraits.size > 0;
  const displayName = (acc && (acc.label || acc.email))
    || (saved && saved.nickname ? `${saved.nickname}님` : '방문자님');
  const roomLine = saved && saved.pyeongLabel
    ? `${saved.pyeongLabel} · ${saved.toneName || ''}`
    : '저장된 방 조건이 아직 없어요';
  const authPillText = acc
    ? (acc.provider === 'supabase' ? '클라우드 연동' : '계정 연결됨')
    : '로그인 전';

  mainEl.innerHTML = `
    <div class="my-profile-card">
      <div class="my-profile-top">
        <div>
          <div class="my-profile-name">${escapeHtml(displayName)}</div>
          <div class="my-profile-sub">${escapeHtml(roomLine)}</div>
        </div>
        <span class="my-account-pill ${acc ? '' : 'is-guest'}">${authPillText}</span>
      </div>
      ${saved ? `
        <div id="my-nick-edit-wrap" class="my-inline-edit-row hidden">
          <input id="my-nick-edit-input" type="text" maxlength="12" value="${escapeHtml(saved.nickname || '')}" placeholder="닉네임 입력" aria-label="닉네임 수정" />
          <button type="button" id="my-nick-save-btn" class="btn-primary btn-sm">저장</button>
        </div>
      ` : ''}
      <div class="my-profile-actions">
        <button type="button" id="my-auth-action-btn" class="btn-primary btn-sm">${acc ? '계정·동기화 관리' : '로그인 · 계정 연결'}</button>
        <button type="button" id="my-wish-action-btn" class="btn-secondary btn-sm">찜한 가구 (${wishlist.length})</button>
      </div>
    </div>

    <div class="my-sec-title">내 활동</div>
    <div class="seed-list">
      <button type="button" class="seed-list-item" id="my-nav-report">
        <div class="seed-list-main">
          <span class="seed-list-title">${saved ? '내 방 진단 리포트' : '40초 내 방 진단 시작하기'}</span>
          <span class="seed-list-sub">${saved ? `${escapeHtml(saved.pyeongLabel)} · 피할 특징·추천 대안 보기` : '방 크기와 거주 조건을 등록해 맞춤 판독 받기'}</span>
        </div>
        <span class="my-row-chevron">›</span>
      </button>
      ${saved ? `
        <button type="button" class="seed-list-item" id="my-toggle-nick-edit">
          <div class="seed-list-main">
            <span class="seed-list-title">닉네임 변경</span>
            <span class="seed-list-sub">현재: ${escapeHtml(saved.nickname || '자취러')}</span>
          </div>
          <span class="my-row-chevron">›</span>
        </button>
      ` : ''}
      <button type="button" class="seed-list-item" id="my-export-backup">
        <div class="seed-list-main">
          <span class="seed-list-title">내 데이터 백업 (.json)</span>
          <span class="seed-list-sub">진단 결과·찜 목록·입주점검표 파일 저장</span>
        </div>
        <span class="my-row-chevron">›</span>
      </button>
    </div>

    <div class="my-sec-title">앱 설정</div>
    <div class="seed-list">
      <label class="seed-list-item" style="cursor:pointer;">
        <div class="seed-list-main">
          <span class="seed-list-title">맞춤 가구·혜택 알림 수신</span>
          <span class="seed-list-sub">선택 동의 · 언제든 켜고 끌 수 있어요</span>
        </div>
        <input id="my-mkt-switch" type="checkbox" class="seed-switch" ${mktOn ? 'checked' : ''} />
      </label>
      <label class="seed-list-item" style="cursor:pointer;">
        <div class="seed-list-main">
          <span class="seed-list-title">검색 시 피할 특징 자동 제외</span>
          <span class="seed-list-sub">${excludeOn ? `${state.excludedTraits.size}개 필터 적용 중` : '제외 필터 꺼짐'}</span>
        </div>
        <input id="my-exclude-switch" type="checkbox" class="seed-switch" ${excludeOn ? 'checked' : ''} />
      </label>
      <div class="seed-list-item" style="cursor:default;">
        <div class="seed-list-main">
          <span class="seed-list-title">앱 정보 · 버전</span>
        </div>
        <span class="my-row-value">${APP_VERSION_STR}</span>
      </div>
    </div>

    <div class="my-sec-title">소식 · 고객지원</div>
    <div class="seed-list">
      <button type="button" class="seed-list-item" data-my-sub="notices">
        <div class="seed-list-main">
          <span class="seed-list-title">공지 · 브랜드 신제품·이슈</span>
          <span class="seed-list-sub">${escapeHtml((BRAND_TRENDS[0] && BRAND_TRENDS[0].title) || APP_NOTICES[0].title)}</span>
        </div>
        <span class="my-row-chevron">›</span>
      </button>
      <button type="button" class="seed-list-item" data-my-sub="support">
        <div class="seed-list-main">
          <span class="seed-list-title">고객센터 · 자주 묻는 질문</span>
          <span class="seed-list-sub">이용 안내 및 문의처 (${SUPPORT_EMAIL})</span>
        </div>
        <span class="my-row-chevron">›</span>
      </button>
      <button type="button" class="seed-list-item" data-my-sub="feedback">
        <div class="seed-list-main">
          <span class="seed-list-title">의견 남기기 · 상품 제보</span>
          <span class="seed-list-sub">불편 사항이나 추가할 가구·용품 알려주세요</span>
        </div>
        <span class="my-row-chevron">›</span>
      </button>
    </div>

    <div class="my-sec-title">약관 및 계정</div>
    <div class="seed-list">
      <button type="button" class="seed-list-item" data-open-policy="terms">
        <div class="seed-list-main"><span class="seed-list-title">이용약관 및 판독 고지</span></div>
        <span class="my-row-chevron">›</span>
      </button>
      <button type="button" class="seed-list-item" data-open-policy="privacy">
        <div class="seed-list-main"><span class="seed-list-title">개인정보처리방침</span></div>
        <span class="my-row-chevron">›</span>
      </button>
      ${acc ? `
        <button type="button" class="seed-list-item" id="my-logout-btn">
          <div class="seed-list-main">
            <span class="seed-list-title">로그아웃</span>
            <span class="seed-list-sub">이 기기에 로컬 데이터는 유지됩니다</span>
          </div>
          <span class="my-row-chevron">›</span>
        </button>
      ` : ''}
      <button type="button" class="seed-list-item is-danger" data-my-sub="withdraw">
        <div class="seed-list-main">
          <span class="seed-list-title">서비스 탈퇴 · 내 데이터 전체 삭제</span>
          <span class="seed-list-sub">동의 철회 및 저장 기록 즉시 파기</span>
        </div>
        <span class="my-row-chevron">›</span>
      </button>
    </div>
  `;

  document.getElementById('my-auth-action-btn').addEventListener('click', () => openAccountSheet('auth'));
  document.getElementById('my-wish-action-btn').addEventListener('click', () => openAccountSheet('wishlist'));
  document.getElementById('my-nav-report').addEventListener('click', openSavedProfileReportFromMy);

  const toggleNickBtn = document.getElementById('my-toggle-nick-edit');
  if (toggleNickBtn) {
    toggleNickBtn.addEventListener('click', () => {
      const wrap = document.getElementById('my-nick-edit-wrap');
      if (wrap) {
        wrap.classList.toggle('hidden');
        const inp = document.getElementById('my-nick-edit-input');
        if (inp && !wrap.classList.contains('hidden')) inp.focus();
      }
    });
  }

  const saveNickBtn = document.getElementById('my-nick-save-btn');
  if (saveNickBtn) {
    saveNickBtn.addEventListener('click', () => {
      const inp = document.getElementById('my-nick-edit-input');
      const nextNick = inp ? inp.value.trim() : '';
      if (!nextNick) {
        showToast('닉네임을 1자 이상 입력해 주세요.');
        return;
      }
      const cur = loadSavedRoomProfile();
      if (cur) {
        cur.nickname = nextNick;
        localStorage.setItem(STORAGE_KEYS.roomProfile, JSON.stringify(cur));
      }
      state.nickname = nextNick;
      updateSavedProfileBadge();
      renderScannerProfileNudge();
      renderMyPage('main');
      showToast('닉네임을 변경했어요');
    });
  }

  document.getElementById('my-export-backup').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(gatherUserRoomSnapshot(), null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nope-my-room-${formatTodayDot().replace(/\./g, '')}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('내 방 데이터 백업(.json) 저장 완료');
  });

  const mktSwitch = document.getElementById('my-mkt-switch');
  if (mktSwitch) {
    mktSwitch.addEventListener('change', () => {
      const cur = loadLegalConsent();
      saveLegalConsent(Boolean(cur && cur.required), mktSwitch.checked);
      showToast(mktSwitch.checked ? '맞춤 알림 수신 동의가 켜졌어요' : '맞춤 알림 수신 동의를 해제했어요');
    });
  }

  const exSwitch = document.getElementById('my-exclude-switch');
  if (exSwitch) {
    exSwitch.addEventListener('change', () => {
      if (exSwitch.checked) {
        const cur = loadSavedRoomProfile();
        const recs = (cur && Array.isArray(cur.recommendedTraitIds) && cur.recommendedTraitIds.length)
          ? cur.recommendedTraitIds
          : NOPE_TRAIT_RULES.slice(0, 3).map((r) => r.id);
        state.excludedTraits = new Set(recs);
        showToast('검색 시 피할 특징 자동 제외를 켰어요');
      } else {
        state.excludedTraits.clear();
        showToast('피할 특징 자동 제외를 껐어요');
      }
      saveExcludedTraits();
      renderExcludeTraitsBars();
      updateSavedProfileBadge();
      renderMyPage('main');
    });
  }

  const logoutBtn = document.getElementById('my-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      saveAccountSession(null);
      renderMyPage('main');
      showToast('로그아웃했어요');
    });
  }

  mainEl.querySelectorAll('[data-my-sub]').forEach((btn) => {
    btn.addEventListener('click', () => renderMyPage(btn.dataset.mySub));
  });
}

function renderMySubView(subView, container) {
  const backHead = `
    <div class="step-back-bar">
      <button type="button" id="my-sub-back-btn" class="btn-ghost btn-sm">← 마이로</button>
    </div>
  `;

  if (subView === 'notices') {
    container.innerHTML = `
      ${backHead}
      <div class="my-sub-card" style="margin-bottom:12px;">
        <h2 class="my-sub-title">브랜드 신제품 · 리콜·이슈</h2>
        ${BRAND_TRENDS.map((t) => `
          <div class="my-notice-item">
            <div class="trend-meta-row">
              <span class="trend-pill ${t.type === '이슈·주의' ? 'is-issue' : 'is-new'}">${escapeHtml(t.type)}</span>
              <span class="my-notice-date">${escapeHtml(t.brand)} · ${escapeHtml(t.domain)} · ${escapeHtml(t.date)}</span>
            </div>
            <div class="my-notice-head">${escapeHtml(t.title)}</div>
            <p class="my-notice-body">${escapeHtml(t.summary)}</p>
          </div>
        `).join('')}
      </div>
      <div class="my-sub-card">
        <h2 class="my-sub-title">앱 공지사항</h2>
        ${APP_NOTICES.map((n) => `
          <div class="my-notice-item">
            <div class="my-notice-date">${escapeHtml(n.date)}</div>
            <div class="my-notice-head">${escapeHtml(n.title)}</div>
            <p class="my-notice-body">${escapeHtml(n.body)}</p>
          </div>
        `).join('')}
      </div>
    `;
  } else if (subView === 'support') {
    container.innerHTML = `
      ${backHead}
      <div class="my-sub-card">
        <h2 class="my-sub-title">고객센터 · 자주 묻는 질문</h2>
        ${APP_FAQS.map((f) => `
          <div class="my-notice-item">
            <div class="my-notice-head">${escapeHtml(f.q)}</div>
            <p class="my-notice-body">${escapeHtml(f.a)}</p>
          </div>
        `).join('')}
        <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--stroke-neutral-weak);display:flex;flex-direction:column;gap:8px;">
          <button type="button" id="my-copy-support-email" class="btn-secondary btn-full">문의 메일 복사 (${SUPPORT_EMAIL})</button>
          <a href="mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('[NOPE! 문의]')}" class="btn-primary btn-full" style="text-align:center;text-decoration:none;">메일 앱으로 문의하기 →</a>
        </div>
      </div>
    `;
    const copyBtn = document.getElementById('my-copy-support-email');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => copyTextToClipboard(SUPPORT_EMAIL, '문의 이메일을 복사했어요'));
    }
  } else if (subView === 'feedback') {
    const history = loadFeedbackHistory();
    container.innerHTML = `
      ${backHead}
      <div class="my-sub-card">
        <h2 class="my-sub-title">의견 남기기 · 상품 제보</h2>
        <div id="fb-kind-row" class="chips-row" style="margin-bottom:12px;">
          <button type="button" class="chip active-chip" data-fb-kind="누락 상품 제보" style="background:var(--ink);color:#FFFFFF;">누락 상품 제보</button>
          <button type="button" class="chip" data-fb-kind="불편·오류 신고">불편·오류 신고</button>
          <button type="button" class="chip" data-fb-kind="기능 제안">기능 제안</button>
        </div>
        <textarea id="my-feedback-input" class="my-textarea" maxlength="500" placeholder="판독이 필요한 가구 이름이나 개선 의견을 자유롭게 적어주세요."></textarea>
        <button type="button" id="my-feedback-submit" class="btn-primary btn-full" style="margin-top:10px;">의견 보내기</button>
        ${history.length ? `
          <div style="margin-top:18px;padding-top:14px;border-top:1px solid var(--stroke-neutral-weak);">
            <div style="font-size:12.5px;font-weight:800;margin-bottom:6px;">남긴 의견 (${history.length}건)</div>
            ${history.slice(0, 5).map((h) => `
              <div class="my-notice-item">
                <div class="my-notice-date">${escapeHtml(h.kind)} · ${escapeHtml(h.date)}</div>
                <p class="my-notice-body" style="color:var(--fg-neutral);margin-top:2px;">${escapeHtml(h.text)}</p>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
    let selectedKind = '누락 상품 제보';
    container.querySelectorAll('[data-fb-kind]').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedKind = btn.dataset.fbKind;
        container.querySelectorAll('[data-fb-kind]').forEach((b) => {
          const active = b === btn;
          b.style.background = active ? 'var(--ink)' : '';
          b.style.color = active ? '#FFFFFF' : '';
        });
      });
    });
    const subBtn = document.getElementById('my-feedback-submit');
    if (subBtn) {
      subBtn.addEventListener('click', () => {
        const val = (document.getElementById('my-feedback-input').value || '').trim();
        if (val.length < 3) {
          showToast('의견을 3자 이상 입력해 주세요.');
          return;
        }
        saveFeedbackEntry(selectedKind, val);
        trackEvent('feedback_submit', { kind: selectedKind });
        showToast('소중한 의견이 저장됐어요. 감사합니다!');
        renderMySubView('feedback', container);
      });
    }
  } else if (subView === 'withdraw') {
    const acc = loadAccountSession();
    container.innerHTML = `
      ${backHead}
      <div class="my-sub-card">
        <h2 class="my-sub-title" style="color:var(--accent);">서비스 탈퇴 · 데이터 삭제</h2>
        <p class="my-notice-body" style="color:var(--fg-neutral);margin-bottom:12px;">
          탈퇴 및 삭제를 진행하면 아래 정보가 즉시 지워지며 되돌릴 수 없습니다.
        </p>
        <div class="seed-list" style="margin-bottom:14px;">
          <div class="seed-list-item" style="cursor:default;"><span class="seed-list-title">내 방 진단 프로필 및 제외 필터 설정</span></div>
          <div class="seed-list-item" style="cursor:default;"><span class="seed-list-title">찜한 가구 목록 및 최근 판독 기록</span></div>
          <div class="seed-list-item" style="cursor:default;"><span class="seed-list-title">입주 하자 점검표 · 주기 알람 · 남긴 의견</span></div>
          <div class="seed-list-item" style="cursor:default;"><span class="seed-list-title">이용약관 및 개인정보 수집 동의 내역${acc ? ' · 계정 연결' : ''}</span></div>
        </div>
        <button type="button" id="my-confirm-withdraw-btn" class="data-danger-btn" style="padding:13px;">네, 모든 데이터를 삭제하고 탈퇴합니다</button>
      </div>
    `;
    const withdrawBtn = document.getElementById('my-confirm-withdraw-btn');
    if (withdrawBtn) {
      withdrawBtn.addEventListener('click', () => {
        clearAllUserDataAndReset();
      });
    }
  }

  const backBtn = document.getElementById('my-sub-back-btn');
  if (backBtn) backBtn.addEventListener('click', () => renderMyPage('main'));
}

function openAccountSheet(tab = 'wishlist') {
  renderAccountSheet(tab);
  if (accountSheetBackdrop) accountSheetBackdrop.classList.remove('hidden');
  syncBodyScrollLock();
}

if (topbarWishBtn) topbarWishBtn.addEventListener('click', () => openAccountSheet('wishlist'));
if (topbarAuthBtn) topbarAuthBtn.addEventListener('click', () => openAccountSheet('auth'));
if (accountSheetBackdrop) {
  accountSheetBackdrop.addEventListener('click', (e) => {
    if (e.target === accountSheetBackdrop) closeAccountSheet();
  });
}

let deferredInstallPrompt = null;

function initPwaInstallPrompt() {
  const banner = document.getElementById('pwa-install-banner');
  const actionBtn = document.getElementById('pwa-install-action-btn');
  const dismissBtn = document.getElementById('pwa-install-dismiss-btn');
  const subEl = document.getElementById('pwa-install-sub');
  if (!banner || !actionBtn || !dismissBtn) return;

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (isStandalone || localStorage.getItem(STORAGE_KEYS.pwaDismissed) === '1') {
    return;
  }

  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (subEl) subEl.textContent = '앱스토어 없이 0.5초 만에 홈 화면에 설치';
    banner.classList.remove('hidden');
  });

  if (isIos) {
    if (subEl) subEl.textContent = '하단 공유 버튼(↑) → "홈 화면에 추가"로 앱처럼 쓰기';
    actionBtn.textContent = '방법 보기';
    banner.classList.remove('hidden');
  }

  actionBtn.addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      banner.classList.add('hidden');
    } else if (isIos) {
      showToast('Safari 하단 공유(□↑) 아이콘 → "홈 화면에 추가"를 눌러주세요!');
    }
  });

  dismissBtn.addEventListener('click', () => {
    banner.classList.add('hidden');
    localStorage.setItem(STORAGE_KEYS.pwaDismissed, '1');
  });
}

function initAppSplash() {
  const splash = document.getElementById('app-splash');
  if (!splash) return;
  const params = new URLSearchParams(location.search);
  const hasDeepLink = Boolean(params.get('type') || params.get('compare') || params.get('item') || params.get('tab'));
  const dismiss = () => {
    if (splash.classList.contains('is-leaving')) return;
    splash.classList.add('is-leaving');
    setTimeout(() => splash.classList.add('hidden'), 300);
  };
  splash.addEventListener('click', dismiss);
  setTimeout(dismiss, hasDeepLink ? 220 : 680);
}

// ---------------- Boot ----------------
initAppSplash();
initHomeRotationOffset();
loadExcludedTraits();
const savedInitProfile = loadSavedRoomProfile();
if (savedInitProfile && savedInitProfile.toneId) {
  state.matcherTone = savedInitProfile.toneId;
}
updateSavedProfileBadge();
renderScannerProfileNudge();
renderDefenseCounter();
updateWishlistBadge();
updateAuthBadge();
recoverSupabaseSessionFromHash();
loadRoomBaseState();
renderExcludeTraitsBars();
loadScaleState();
updateScaleInputsUI();
renderScaleQuizHint();
renderGapStorageFinder();
renderCategoryChips();
renderToneMatcher();
renderPresetTimers();
renderCycleAlarms();
renderChecklist();
refreshAutoCollectedItems();
handleDeepLinks();
initPwaInstallPrompt();
initAnalytics();
trackEvent('app_open', { path: location.pathname, has_profile: Boolean(savedInitProfile) });

document.addEventListener('click', (e) => {
  const link = e.target && e.target.closest ? e.target.closest('a[href]') : null;
  if (!link) return;
  const href = link.getAttribute('href') || '';
  if (!/^https?:\/\//i.test(href)) return;
  let shop = 'external';
  if (/coupang\.com|coupa\.ng/i.test(href)) shop = 'coupang';
  else if (/ohou\.se/i.test(href)) shop = 'ohouse';
  else if (/kurly\.com/i.test(href)) shop = 'kurly';
  if (shop !== 'external') {
    trackEvent('outbound_shop_click', {
      shop,
      label: (link.textContent || '').trim().slice(0, 30)
    });
  }
});

if ('serviceWorker' in navigator) {
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if (isLocal) {
    navigator.serviceWorker.getRegistrations()
      .then((regs) => regs.forEach((r) => r.unregister()))
      .catch(() => {});
    if ('caches' in window) {
      caches.keys().then((keys) => keys.forEach((k) => caches.delete(k))).catch(() => {});
    }
  } else {
    navigator.serviceWorker.register('./sw.js?v=nope89').catch(() => {});
  }
}
