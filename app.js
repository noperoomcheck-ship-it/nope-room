import {
  QUIZ_QUESTIONS,
  QUIZ_RESULTS,
  TASTE_INSIGHTS,
  SPACE_MBTI_TYPES,
  WISH_CATEGORIES,
  ITEM_SWAP_REASONS,
  ITEMS_DB,
  STYLE_MOODS,
  ROOM_TONES,
  TARGET_CATEGORIES,
  HUMAN_SCALE_MODES,
  calcHumanScale,
  QUICK_TIMERS,
  CYCLE_ALARMS,
  MOVE_IN_CHECKLIST
} from './data/app-data.js?v=nope44';
import { AFFILIATE_CONFIG } from './data/affiliate-links.js?v=nope44';
import { SUPABASE_CONFIG } from './data/supabase-config.js?v=nope44';

const STORAGE_KEYS = {
  cycles: 'nope_cycles_v2',
  checklist: 'nope_inspection_v3',
  scale: 'nope_scale_v2',
  roomProfile: 'nope_room_profile_v1',
  autoItems: 'nope_auto_items_v1',
  wishlist: 'nope_wishlist_v1',
  account: 'nope_account_v1',
  pwaDismissed: 'nope_pwa_dismissed_v1'
};

const state = {
  nickname: '',
  quizIndex: 0,
  quizAnswers: [],
  scannerMode: 'search',
  selectedFilter: '전체',
  selectedVerdict: 'ALL',
  matcherStyle: 'ALL',
  matcherTone: 'white-minimal',
  matcherCat: '책상·의자',
  matcherReturnOrigin: 'search',
  scaleHeight: 168,
  scaleMode: 'desk',
  timerInterval: null,
  timerRemainingSec: 0,
  timerLabel: '',
  timerPaused: false
};

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
  if (typeof document.startViewTransition === 'function') {
    document.startViewTransition(() => updateFn());
  } else {
    updateFn();
  }
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
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
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
const homeStageHub = document.getElementById('home-stage-hub');
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

function updateSavedProfileBadge() {
  const saved = loadSavedRoomProfile();
  const startBtn = document.getElementById('start-quiz-btn');
  if (!saved || !saved.pyeongLabel) {
    savedProfileBtn.classList.add('hidden');
    if (startBtn) startBtn.innerHTML = '내 방 속 <span class="dot">NOPE!</span> 찾기';
    return;
  }
  const nickPrefix = saved.nickname ? `${saved.nickname}님의 공간 성격 · ` : '내 공간 성격 · ';
  savedProfileBtn.textContent = `${nickPrefix}${saved.toneName} · ${saved.pyeongLabel} (결과 보기 →)`;
  savedProfileBtn.classList.remove('hidden');
  if (startBtn) startBtn.textContent = '내 공간 성격 · 무드 다시 테스트하기';
}

function showHomeStage(stage) {
  if (stage !== 'analyzing') clearAnalysisTimers();
  runViewTransition(() => {
    homeStageCover.classList.toggle('hidden', stage !== 'cover');
    homeStageHub.classList.toggle('hidden', stage !== 'hub');
    quizNicknameEl.classList.toggle('hidden', stage !== 'nickname');
    quizRunner.classList.toggle('hidden', stage !== 'quiz');
    quizAnalyzingEl.classList.toggle('hidden', stage !== 'analyzing');
    quizTasteEl.classList.toggle('hidden', stage !== 'taste');
    quizResultEl.classList.toggle('hidden', stage !== 'result');
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
}

function startQuiz() {
  clearAnalysisTimers();
  state.quizIndex = 0;
  state.quizAnswers = [];
  const saved = loadSavedRoomProfile();
  if (saved && saved.nickname && !nicknameInputEl.value) {
    nicknameInputEl.value = saved.nickname;
  }
  showHomeStage('nickname');
  setTimeout(() => nicknameInputEl.focus(), 80);
}

function confirmNicknameAndStartQuestions() {
  const raw = nicknameInputEl.value.trim();
  state.nickname = raw || '자취러';
  state.quizIndex = 0;
  state.quizAnswers = [];
  showHomeStage('quiz');
  renderQuizStep();
}

document.getElementById('nickname-next-btn').addEventListener('click', confirmNicknameAndStartQuestions);
document.getElementById('nickname-back-btn').addEventListener('click', () => showHomeStage('cover'));
nicknameInputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') confirmNicknameAndStartQuestions();
});

savedProfileBtn.addEventListener('click', () => {
  const saved = loadSavedRoomProfile();
  if (!saved) {
    startQuiz();
    return;
  }
  const profile = QUIZ_RESULTS.find((r) => r.id === saved.profileId) || QUIZ_RESULTS[QUIZ_RESULTS.length - 1];
  if (saved.nickname) state.nickname = saved.nickname;
  if (saved.toneId) {
    state.matcherTone = saved.toneId;
    renderToneMatcher();
  }
  renderTasteSummaryStage({
    nickname: saved.nickname || '자취러',
    pyeongLabel: saved.pyeongLabel || '6~7평',
    wishId: saved.wishId || 'spacious',
    toneId: saved.toneId || 'white-minimal',
    toneName: saved.toneName || '화이트 · 크림',
    tasteId: saved.tasteId || 'plant',
    density: saved.density || 'balanced',
    mbtiId: saved.mbtiId || '',
    activity: saved.activity || '자취 생활',
    profile,
    dangerScore: saved.dangerScore
  });
});

document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
document.getElementById('start-quiz-btn-hub').addEventListener('click', startQuiz);
const openHubBtn = document.getElementById('open-home-hub-btn');
if (openHubBtn) openHubBtn.addEventListener('click', () => showHomeStage('hub'));
document.getElementById('back-to-cover-btn').addEventListener('click', () => showHomeStage('cover'));

document.getElementById('quiz-back-btn').addEventListener('click', () => {
  if (state.quizIndex === 0) {
    showHomeStage('nickname');
    return;
  }
  state.quizIndex -= 1;
  state.quizAnswers.pop();
  renderQuizStep();
});

function renderQuizStep() {
  const q = QUIZ_QUESTIONS[state.quizIndex];
  document.getElementById('quiz-step-text').textContent = q.step;
  document.getElementById('quiz-progress-fill').style.width =
    `${((state.quizIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`;
  document.getElementById('quiz-question-title').textContent = q.title;

  const optsWrap = document.getElementById('quiz-options');
  optsWrap.innerHTML = '';
  q.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.textContent = opt.label;
    btn.addEventListener('click', () => {
      state.quizAnswers.push(opt);
      if (state.quizIndex + 1 < QUIZ_QUESTIONS.length) {
        state.quizIndex += 1;
        renderQuizStep();
      } else {
        startRoomAnalysisLoading();
      }
    });
    optsWrap.appendChild(btn);
  });
}

function startRoomAnalysisLoading() {
  clearAnalysisTimers();
  showHomeStage('analyzing');

  const nick = state.nickname || '자취러';
  const pyeongAns = state.quizAnswers.find((a) => a.pyeong);
  const toneAns = state.quizAnswers.find((a) => a.toneId);
  const tasteAns = state.quizAnswers.find((a) => a.tasteId);

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
  stepEl.textContent = `${nick}님이 입력하신 ${pyeongLabel} 조건과 생활 패턴을 확인하고 있어요…`;
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

function getQuizScoreBounds() {
  let minPossible = 0;
  let maxPossible = 0;
  QUIZ_QUESTIONS.forEach((q) => {
    const sums = q.options.map((o) => Object.values(o.scores || {}).reduce((a, b) => a + b, 0));
    minPossible += Math.min(...sums);
    maxPossible += Math.max(...sums);
  });
  return { minPossible, maxPossible };
}

function computeSpaceMbti({ density, toneId, tasteId }) {
  let id = 'texture';
  if (density === 'minimal' || (tasteId === 'minimal' && density !== 'maximal')) {
    id = 'minimalist';
  } else if (density === 'maximal') {
    id = 'maximal';
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
  let wishId = 'spacious';
  let toneId = state.matcherTone || 'white-minimal';
  let tasteId = 'plant';
  let density = 'balanced';
  let activity = '재택·휴식';

  state.quizAnswers.forEach((ans) => {
    if (ans.pyeong) pyeongLabel = ans.pyeong;
    if (ans.wishId) wishId = ans.wishId;
    if (ans.toneId) toneId = ans.toneId;
    if (ans.tasteId) tasteId = ans.tasteId;
    if (ans.density) density = ans.density;
    if (ans.activity) activity = ans.activity;
    Object.entries(ans.scores || {}).forEach(([k, v]) => {
      totals[k] = (totals[k] || 0) + v;
    });
  });

  const nickname = state.nickname || '자취러';
  const rawSum = Object.values(totals).reduce((a, b) => a + b, 0);
  const { minPossible, maxPossible } = getQuizScoreBounds();
  const normalized = (rawSum - minPossible) / Math.max(1, maxPossible - minPossible);
  const dangerScore = Math.min(96, Math.max(12, Math.round(normalized * 84 + 12)));
  const profile = QUIZ_RESULTS.find((r) => r.condition(totals)) || QUIZ_RESULTS[QUIZ_RESULTS.length - 1];
  const toneName = getToneLabel(toneId);
  const spaceMbti = computeSpaceMbti({ density, toneId, tasteId });

  state.matcherTone = toneId;
  renderToneMatcher();

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

  renderTasteSummaryStage({ ...savedData, profile });
}

function renderTasteSummaryStage(data) {
  const { nickname, pyeongLabel, wishId, toneId, toneName, tasteId, density, mbtiId, activity, profile, dangerScore } = data;
  const toneObj = ROOM_TONES.find((t) => t.id === toneId) || ROOM_TONES[0];
  const tasteObj = TASTE_INSIGHTS[tasteId] || TASTE_INSIGHTS.plant;
  const wishCat = (wishId && WISH_CATEGORIES[wishId]) || WISH_CATEGORIES.spacious;
  const spaceMbti = (mbtiId && SPACE_MBTI_TYPES.find((m) => m.id === mbtiId)) || computeSpaceMbti({ density, toneId, tasteId });

  showHomeStage('taste');

  quizTasteEl.innerHTML = `
    <div class="step-back-bar">
      <button id="taste-back-cover-btn" class="btn-ghost btn-sm">← 처음으로</button>
      <button id="taste-retake-btn" class="btn-ghost btn-sm">다시 테스트 ↺</button>
    </div>
    <div class="card taste-summary-card">
      <h2 class="taste-headline">${escapeHtml(nickname)}님은<br /><span style="color:var(--accent)">'${escapeHtml(toneName)}'</span> 취향을 선택하셨어요.</h2>

      <div class="mbti-verdict-banner">
        <strong>${escapeHtml(spaceMbti.headline)}</strong>
        <p>${escapeHtml(spaceMbti.summary)}</p>
      </div>

      <div class="palette-diagram-card">
        <div class="taste-swatches-bar">
          <span class="taste-swatch-segment" style="flex:3;background:${toneObj.swatches[0]};color:#23261F;">60%</span>
          <span class="taste-swatch-segment" style="flex:2;background:${toneObj.swatches[1]};color:#FFFFFF;text-shadow:0 1px 2px rgba(0,0,0,0.35);">30%</span>
          <span class="taste-swatch-segment" style="flex:1;background:${toneObj.swatches[2]};color:#FFFFFF;text-shadow:0 1px 2px rgba(0,0,0,0.35);">10%</span>
        </div>
        <div class="palette-ratio-caption">
          <span class="palette-ratio-kicker">추천 배색 비율</span>
          <strong class="palette-ratio-text">${escapeHtml(toneObj.ratioRule)}</strong>
        </div>
      </div>

      <div class="taste-analysis-box">
        <p style="margin-bottom:8px;">${escapeHtml(wishCat.summary)}</p>
        <p><strong>어울리는 무드·색조합:</strong> ${escapeHtml(wishCat.linkedMoods)} — ${escapeHtml(tasteObj.detail)}</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px;">
        <button id="taste-to-verdict-btn" class="btn-primary btn-full">${escapeHtml(nickname)}님의 리스크 · 맞춤 리포트 보기 →</button>
        <button id="taste-to-matcher-btn" class="btn-secondary btn-full">이 취향으로 가구·소품 바로 보기</button>
      </div>
    </div>
  `;

  document.getElementById('taste-back-cover-btn').addEventListener('click', () => showHomeStage('cover'));
  document.getElementById('taste-retake-btn').addEventListener('click', startQuiz);
  document.getElementById('taste-to-verdict-btn').addEventListener('click', () => {
    renderQuizResultView(profile, dangerScore, pyeongLabel, toneName, nickname, spaceMbti.code);
  });
  document.getElementById('taste-to-matcher-btn').addEventListener('click', () => {
    state.matcherReturnOrigin = 'taste';
    switchTab('scanner');
    setScannerMode('matcher');
  });
}

function renderQuizResultView(profile, dangerScore, pyeongLabel = '6~7평', toneName = '화이트 · 크림', nickname = '자취러', mbtiCode = '') {
  showHomeStage('result');

  const tips = profile.lifeTips || [];

  quizResultEl.innerHTML = `
    <div class="step-back-bar">
      <button id="result-back-taste-btn" class="btn-ghost btn-sm">← 직전 페이지 (취향 분석)</button>
      <button id="result-retake-btn" class="btn-ghost btn-sm">다시 테스트 ↺</button>
    </div>
    <div class="card">
      <div class="result-score-row">
        <div>
          <span class="micro-label">${escapeHtml(nickname)}님의 ROOM REPORT</span>
          <h2>${escapeHtml(profile.badge)}</h2>
          <p class="text-secondary" style="margin-top:4px;">${escapeHtml(profile.tagline)}</p>
        </div>
        <div style="text-align:right;">
          <span class="text-tertiary" style="display:block;font-weight:700;">위험도</span>
          <div class="danger-number">${dangerScore}</div>
        </div>
      </div>

      <div class="verdict-swap-stack">
        <div class="verdict-swap-box is-nope">
          <div class="verdict-swap-top">
            <span class="verdict-swap-head">✕ NOPE! 내 방엔 피할 품목</span>
            <span class="swap-tap-hint">눌러서 이유 보기 ›</span>
          </div>
          <div class="tag-row swap-tag-row">${profile.avoidItems.map((i) => `<button type="button" class="tag-avoid swap-chip swap-btn" data-swap-label="${escapeHtml(i)}">${escapeHtml(i)} <span class="swap-arrow">›</span></button>`).join('')}</div>
        </div>
        <div class="verdict-swap-box is-pass">
          <div class="verdict-swap-top">
            <span class="verdict-swap-head">✓ PASS 대신 추천하는 대안</span>
            <span class="swap-tap-hint">눌러서 이유 보기 ›</span>
          </div>
          <div class="tag-row swap-tag-row">${profile.altItems.map((i) => `<button type="button" class="tag-alt swap-chip swap-btn" data-swap-label="${escapeHtml(i)}">${escapeHtml(i)} <span class="swap-arrow">›</span></button>`).join('')}</div>
        </div>
      </div>

      ${tips.length ? `
        <div class="life-tips-box">
          <span class="life-tips-kicker">자취생활 팁! · ${escapeHtml(profile.badge)} 맞춤</span>
          <div class="life-tips-list">
            ${tips.map((tip) => {
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
          ${tips.some((t) => t.itemKeyword) && AFFILIATE_CONFIG.coupangEnabled ? `<p class="ftc-affiliate-note" style="margin-top:10px;">${escapeHtml(AFFILIATE_CONFIG.disclosureText)}</p>` : ''}
        </div>
      ` : ''}
    </div>

    <div style="display:flex;flex-direction:column;gap:8px;">
      <button id="share-story-btn" class="btn-accent btn-full btn-insta">
        <svg class="insta-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/>
          <circle cx="12" cy="12" r="4.2"/>
          <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/>
        </svg>
        <span>스토리 공유</span>
      </button>
      <button id="go-scanner-from-result" class="btn-primary btn-full">내 방 톤 맞춤 가구 보기 →</button>
    </div>
  `;

  quizResultEl.querySelectorAll('.swap-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const label = btn.dataset.swapLabel;
      const entry = ITEM_SWAP_REASONS[label];
      if (entry && entry.dbId) {
        const dbItem = ITEMS_DB.find((it) => it.id === entry.dbId);
        if (dbItem) {
          openDetailSheet(dbItem);
          return;
        }
      }
      if (entry) {
        openDetailSheet(entry);
        return;
      }
      const fuzzy = ITEMS_DB.find((it) => it.name.includes(label) || label.includes(it.name));
      if (fuzzy) openDetailSheet(fuzzy);
    });
  });

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

  ctx.fillStyle = '#FAF6EC';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = '#23261F';
  ctx.lineWidth = 4;
  ctx.strokeRect(56, 56, W - 112, H - 112);

  ctx.fillStyle = '#23261F';
  ctx.font = '900 132px "Space Grotesk", "SUIT", sans-serif';
  ctx.fillText('NOPE!', 96, 220);

  ctx.fillStyle = '#5B5F52';
  ctx.font = '700 32px "Space Grotesk", "SUIT", sans-serif';
  const moodSub = toneName ? ` · ${toneName}` : '';
  ctx.fillText(`${nickname}님의 자취 리포트${moodSub}`, 100, 275);
  ctx.fillStyle = '#23261F';
  ctx.fillRect(96, 315, W - 192, 3);

  ctx.fillStyle = '#5B5F52';
  ctx.font = '700 34px "SUIT", sans-serif';
  ctx.fillText('자취 리스크 지수', 100, 420);

  ctx.fillStyle = '#E6534B';
  ctx.font = '900 220px "Space Grotesk", sans-serif';
  ctx.fillText(`${dangerScore}`, 92, 640);
  ctx.font = '800 54px "Space Grotesk", sans-serif';
  ctx.fillText('/ 100', 400, 640);

  ctx.fillStyle = '#23261F';
  ctx.fillRect(96, 720, W - 192, 120);
  ctx.fillStyle = '#FAF6EC';
  ctx.font = '800 46px "SUIT", sans-serif';
  ctx.fillText(profile.badge, 128, 796);

  ctx.fillStyle = '#23261F';
  ctx.font = '700 44px "SUIT", sans-serif';
  const nextY = wrapCanvasText(ctx, profile.tagline, 96, 940, W - 192, 64);

  ctx.strokeStyle = '#23261F';
  ctx.lineWidth = 2;
  ctx.strokeRect(96, nextY + 50, W - 192, 390);
  ctx.fillStyle = '#E6534B';
  ctx.font = '800 30px "Space Grotesk", "SUIT", sans-serif';
  ctx.fillText('WHY NOPE? · ACTION LIST', 132, nextY + 115);

  ctx.fillStyle = '#23261F';
  ctx.font = '600 33px "SUIT", sans-serif';
  let y = nextY + 185;
  profile.top3.forEach((tip, idx) => {
    y = wrapCanvasText(ctx, `0${idx + 1}. ${tip}`, 132, y, W - 264, 46) + 18;
  });

  ctx.fillStyle = '#23261F';
  ctx.fillRect(96, H - 170, W - 192, 2);
  ctx.fillStyle = '#5B5F52';
  ctx.font = '700 28px "SUIT", sans-serif';
  ctx.fillText('NOPE! · 내 방에 들이기 전 딱 한 번만 의심해 보기', 96, H - 110);

  const filename = `NOPE-${profile.id}.png`;
  const triggerDownload = () => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('스토리 공유용 이미지(PNG)가 저장되었습니다.');
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
          await navigator.share({
            files: [file],
            title: `NOPE! ${profile.badge}`,
            text: `${profile.tagline} (리스크 지수 ${dangerScore}/100)`
          });
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

// ---------------- Tab 2: Yuka-Style Real Product Scanner + Bottom Sheet ----------------
const scannerGate = document.getElementById('scanner-stage-gate');
const scannerResults = document.getElementById('scanner-stage-results');
const scannerMatcher = document.getElementById('scanner-stage-matcher');
const chipsWrap = document.getElementById('category-chips');
const searchInput = document.getElementById('item-search-input');
const itemsListEl = document.getElementById('items-list');
const customOutEl = document.getElementById('custom-analysis-output');
const sheetBackdrop = document.getElementById('detail-sheet-backdrop');
const sheetPanel = document.getElementById('detail-sheet-panel');

const FILTER_CHIPS = [
  { label: `전체 ${ITEMS_DB.length}종`, type: 'all', value: '전체' },
  { label: '이케아', type: 'brand', value: 'IKEA' },
  { label: '한샘·리바트·일룸', type: 'brand', value: 'HANSSEM|LIVART|ILOOM' },
  { label: '두닷·데스커·에이픽스', type: 'brand', value: 'DODOT|DESKER|APIX|SOFSYS' },
  { label: '마켓비·룸앤홈·무지', type: 'brand', value: 'MARKETB|ROOMNHOME|MUJI' },
  { label: '국내·리빙·조명', type: 'brand', value: '오늘의집|쿠팡|삼익|레이디|동서|웰퍼니|에몬스|보루네오|지누스|슬로우|몽제|까사미아|왕자|다이소|3M|제닉스|시디즈|시크릿|클라우드|린백|LEXON|ILKW|LIVING|DECO|SOODAM|EKO|LOUNGE|RARERAW|WANGJA|LUNARLAB|SIZEOF|DUOBACK|HERMAN|TP-LINK|PHILIPS|OSRAM|DAELIM|KYUNGDONG|LOCKNLOCK|SHINIL|XIAOMI|WINIX|CUCKOO|NB|LUNA|USM' },
  { label: '책상·의자', type: 'cat', value: '책상·의자' },
  { label: '수납·행거', type: 'cat', value: '수납·행거' },
  { label: '소파·침대·매트', type: 'cat', value: '소파·침대·매트' },
  { label: '식탁·주방·생활', type: 'cat', value: '식탁·주방·생활' },
  { label: '조명·거울', type: 'cat', value: '조명·거울' },
  { label: '무타공·욕실', type: 'cat', value: '무타공·욕실' }
];

function verdictMeta(verdict) {
  if (verdict === 'NOPE') return { cls: 'v-nope', text: 'NOPE! 주의' };
  if (verdict === 'WARN') return { cls: 'v-warn', text: 'CHECK 조건부' };
  return { cls: 'v-pass', text: 'PASS 양호' };
}

function openScannerResults(label) {
  runViewTransition(() => {
    scannerGate.classList.add('hidden');
    scannerResults.classList.remove('hidden');
    document.getElementById('scanner-active-label').textContent = label;
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
}

document.getElementById('scanner-reset-btn').addEventListener('click', () => {
  runViewTransition(() => {
    scannerResults.classList.add('hidden');
    scannerGate.classList.remove('hidden');
    searchInput.value = '';
    customOutEl.innerHTML = '';
  });
});

function renderCategoryChips() {
  chipsWrap.innerHTML = '';
  FILTER_CHIPS.forEach((f) => {
    const b = document.createElement('button');
    b.className = 'chip';
    b.textContent = f.label;
    b.addEventListener('click', () => {
      state.selectedFilter = f;
      searchInput.value = '';
      customOutEl.innerHTML = '';
      renderItems();
      openScannerResults(f.label);
    });
    chipsWrap.appendChild(b);
  });
}

// Yuka Level 1 Card (0.5-second scannable: Verdict + Brand + Title + 3 Chips + 1 Line)
function renderYukaCard(item) {
  const v = verdictMeta(item.verdict);
  const cardStateCls = item.verdict === 'NOPE' ? 'v-card-nope' : item.verdict === 'WARN' ? 'v-card-warn' : 'v-card-pass';
  return `
    <button class="yuka-card ${cardStateCls}" data-item-id="${escapeHtml(item.id)}">
      <div class="yuka-top">
        <span class="brand-meta">${escapeHtml(item.brand)} · ${escapeHtml(item.priceTier)}</span>
        <span class="verdict-pill ${v.cls}">${v.text}</span>
      </div>
      <div class="yuka-title">${escapeHtml(item.name)}</div>
      <div class="yuka-chips">
        ${item.chips.map((c) => `<span class="mini-chip">${escapeHtml(c)}</span>`).join('')}
      </div>
      <p class="yuka-oneliner">${escapeHtml(item.oneLiner)}</p>
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

  const whyKicker = isPass ? 'WHY PASS?' : (isWarn ? 'WHY CHECK?' : 'WHY NOPE?');
  const whyBoxCls = isPass ? 'is-pass' : (isWarn ? 'is-warn' : 'is-nope');
  const whySentence = item.oneLiner || (isPass ? goodLine : checkLine) || goodLine;
  const wished = isWishlistedItem(item.id);

  sheetPanel.innerHTML = `
    <div class="sheet-grabber" aria-hidden="true"></div>
    <div class="sheet-head">
      <div>
        <span class="verdict-pill ${v.cls} is-hero">${v.text}</span>
        <h2 class="sheet-title">${escapeHtml(item.name)}</h2>
        <span class="sheet-meta">${escapeHtml(item.brand)} · ${escapeHtml(item.category)} · ${escapeHtml(item.priceTier)}</span>
      </div>
      <div class="sheet-head-actions">
        <button class="sheet-wish-btn ${wished ? 'active' : ''}" id="sheet-wish-toggle-btn" type="button">${wished ? '♥ 찜됨' : '♡ 저장'}</button>
        <button class="sheet-close" id="close-sheet-btn" aria-label="닫기">×</button>
      </div>
    </div>

    <div class="score-trio">
      <div class="score-pill"><span class="score-lbl">먼지</span><strong class="${dustCls}">${item.specs.dust}/5</strong></div>
      <div class="score-pill"><span class="score-lbl">복구</span><strong class="${depCls}">${item.specs.deposit}/5</strong></div>
      <div class="score-pill"><span class="score-lbl">수명</span><strong class="${trbCls}">${item.specs.trouble}/5</strong></div>
    </div>

    <div class="sheet-why-box ${whyBoxCls}">
      <div class="sheet-why-head">
        <span class="sheet-why-kicker">${whyKicker}</span>
        <span class="verdict-pill ${v.cls} is-solid">${v.text}</span>
      </div>
      <p class="sheet-why-sentence">${escapeHtml(whySentence)}</p>
    </div>

    <div class="sheet-brief-box">
      <div class="sheet-brief-row">
        <span class="brief-badge is-good">GOOD</span>
        <span>${escapeHtml(goodLine)}</span>
      </div>
      <div class="sheet-brief-row">
        <span class="brief-badge ${secondBadgeCls}">${secondBadgeText}</span>
        <span>${escapeHtml(checkLine)}</span>
      </div>
    </div>

    <div class="sheet-pair-section">
      <div class="pair-head-row">
        <strong class="pair-head-title">함께 두면 어울리는 궁합 가구</strong>
        <span class="pair-tone-badge">${escapeHtml(primaryTone)} 톤</span>
      </div>
      <p class="pair-reason-line">${escapeHtml(pairingReason)}</p>
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

    <div class="sheet-alt-box ${altBoxCls}">
      <span class="text-tertiary" style="font-weight:700;display:block;margin-bottom:5px;">${altLabel}</span>
      <strong style="font-size:14.5px;display:block;margin-bottom:12px;">${escapeHtml(item.altName)}</strong>
      <div class="dual-link-row">
        <a href="${urls.coupang}" target="_blank" rel="noopener noreferrer" class="${primaryBtnCls}" style="padding:12px 10px;font-size:13.5px;">쿠팡에서 보기 →</a>
        <a href="${urls.ohouse}" target="_blank" rel="noopener noreferrer" class="btn-ohouse">오늘의집 보기 →</a>
      </div>
      ${urls.hasCoupangAffiliate ? `<p class="ftc-affiliate-note">${escapeHtml(AFFILIATE_CONFIG.disclosureText)}</p>` : ''}
    </div>
  `;

  sheetBackdrop.classList.remove('hidden');
  sheetPanel.scrollTop = 0;
  document.getElementById('close-sheet-btn').addEventListener('click', closeDetailSheet);
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
}

sheetBackdrop.addEventListener('click', (e) => {
  if (e.target === sheetBackdrop) closeDetailSheet();
});

function inferCategoryFromQuery(lowerCompact) {
  const map = [
    { cat: '책상·의자', rx: /책상|데스크|의자|체어|모니터|타공판|멀티탭|전선|좌식|스탠딩/ },
    { cat: '수납·행거', rx: /행거|옷장|드레스룸|서랍|선반|책장|수납|리빙박스|정리함|압축팩|건조대|옷걸이|캐비닛|트롤리/ },
    { cat: '소파·침대·매트', rx: /소파|카우치|빈백|스툴|오토만|침대|프레임|깔판|매트리스|토퍼|이불|베개|쿠션|러그|카페트|탄소매트|전기매트/ },
    { cat: '식탁·주방·생활', rx: /식탁|테이블|아일랜드|홈바|렌지대|밥솥|주방|싱크대|식기|음식물|휴지통|냉장고|가습기|서큘레이터|청정기|제습기|청소기|홈카페/ },
    { cat: '조명·거울', rx: /조명|무드등|스탠드|램프|전구|거울|미러|협탁|사이드테이블|선셋|센서등/ },
    { cat: '무타공·욕실', rx: /무타공|꼭꼬핀|코맨드|커튼|블라인드|롤스크린|욕실|샤워기|변기|수건|발매트|규조토|스퀴지|배수구|문풍지|현관|도어|디퓨저|시트지|포스터/ }
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
    if (/타공|벽|블라인드|선반|거울|시트지/.test(compact)) {
      deposit = Math.min(5, deposit + 1);
      checks.unshift(`${savedProfile.nickname || '내'} 방 조건(원상복구 필수): 벽지·장판 손상 없는 무타공 설치인지 꼭 확인하세요.`);
    }
  }

  if (checks.length === 0) {
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
    altSearchKeyword: q
  };
}

function findDirectAndSimilarItems(rawQuery) {
  const normalizedRaw = /^https?:\/\//i.test(rawQuery.trim())
    ? extractUrlClientFallback(rawQuery).extractedQuery
    : rawQuery;
  const q = normalizedRaw.trim().toLowerCase();
  const compactQ = q.replace(/\s+/g, '');
  const tokens = q.split(/\s+/).filter((t) => t.length >= 2);

  const direct = ITEMS_DB.filter((item) => {
    if (state.selectedVerdict !== 'ALL' && item.verdict !== state.selectedVerdict) {
      return false;
    }
    const f = state.selectedFilter;
    if (!q && f && f.type === 'brand') {
      const brands = f.value.split('|');
      if (!brands.some((b) => item.brand.includes(b))) return false;
    } else if (!q && f && f.type === 'cat') {
      if (item.category !== f.value) return false;
    }

    if (!q) return true;
    const hay = `${item.brand} ${item.name} ${item.category} ${item.chips.join(' ')} ${item.oneLiner} ${item.altName || ''}`.toLowerCase();
    const compactHay = hay.replace(/\s+/g, '');
    return hay.includes(q)
      || compactHay.includes(compactQ)
      || (tokens.length > 0 && tokens.some((tok) => hay.includes(tok)));
  });

  let similar = [];
  if (q && direct.length < 3) {
    const inferredCat = inferCategoryFromQuery(compactQ);
    const directIds = new Set(direct.map((d) => d.id));
    const scoreRank = { PASS: 0, WARN: 1, NOPE: 2 };
    similar = ITEMS_DB
      .filter((item) => {
        if (directIds.has(item.id)) return false;
        if (state.selectedVerdict !== 'ALL' && item.verdict !== state.selectedVerdict) return false;
        return inferredCat !== '자취 가구·소품' ? item.category === inferredCat : item.verdict === 'PASS';
      })
      .sort((a, b) => scoreRank[a.verdict] - scoreRank[b.verdict])
      .slice(0, 6);
  }

  return { direct, similar, inferredCat: q ? inferCategoryFromQuery(compactQ) : '' };
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
  const { direct, similar, inferredCat } = findDirectAndSimilarItems(q);

  const activeLabelEl = document.getElementById('scanner-active-label');
  if (activeLabelEl) {
    const baseTitle = q ? `"${q}" 검색` : (f && f.label ? f.label : `전체 ${ITEMS_DB.length}종`);
    activeLabelEl.textContent = `${baseTitle} (${direct.length}건${similar.length ? ` + 유사 ${similar.length}건` : ''})`;
  }

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
    html = `<div class="card"><p class="text-secondary" style="margin:0;">선택한 조건에 맞는 상품이 없습니다.</p></div>`;
  }

  itemsListEl.innerHTML = html;
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

async function refreshAutoCollectedItems() {
  renderAutoCollectedChips();
  if (location.protocol.startsWith('http')) {
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

async function runScannerSearch() {
  const rawInput = searchInput.value.trim();
  const imageNote = itemImageNoteInput ? itemImageNoteInput.value.trim() : '';
  if (!rawInput && !pendingScanImage) {
    showToast('상품명, 링크(URL), 또는 이미지를 넣어주세요.');
    return;
  }

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

  // Search local curated 200-item DB first when text query exists
  const compactQ = effectiveSearchQuery.toLowerCase().replace(/\s+/g, '');
  const hasExact = !urlInfo.isUrl && !pendingScanImage && compactQ.length >= 2 && ITEMS_DB.some((item) => {
    const compactHay = `${item.brand} ${item.name} ${item.category}`.toLowerCase().replace(/\s+/g, '');
    return compactHay.includes(compactQ);
  });

  if (hasExact) {
    renderItems();
    customOutEl.innerHTML = '';
    openScannerResults(`SCAN · ${rawInput}`);
    return;
  }

  if (analyzeBtn) {
    analyzeBtn.disabled = true;
    analyzeBtn.textContent = '판독 중…';
  }

  let analyzedItem = null;
  let engineLabel = '브라우저 키워드 실시간 판독';
  let urlStatusNote = '';

  try {
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
    // Graceful client fallback when running without Python API server
    const fallbackText = `${effectiveSearchQuery} ${imageNote}`.trim() || (pendingScanImage ? pendingScanImage.name : '가구');
    analyzedItem = buildSyntheticAnalysis(fallbackText);
    if (urlInfo.isUrl) {
      analyzedItem.name = `"${urlInfo.host}" 링크 상품 분석`;
      analyzedItem.brand = urlInfo.host.includes('ohou.se') ? '오늘의집' : (urlInfo.host.includes('coupang') ? '쿠팡' : 'URL SCAN');
      analyzedItem.sourceUrl = urlInfo.url;
    } else if (pendingScanImage) {
      analyzedItem.name = rawInput || imageNote || `첨부 사진 스펙 분석`;
      analyzedItem.brand = 'IMAGE SCAN';
    }
    engineLabel = '로컬 브라우저 스펙 분석 (오프라인 모드)';
  } finally {
    if (analyzeBtn) {
      analyzeBtn.disabled = false;
      analyzeBtn.textContent = '판독';
    }
  }

  if (analyzedItem) {
    saveLocalAutoItem(analyzedItem);
    refreshAutoCollectedItems();
  }

  // Temporarily populate searchInput with inferred query/name for similar-item matching
  const savedSearchVal = searchInput.value;
  if (urlInfo.isUrl || !rawInput) {
    searchInput.value = analyzedItem.name || analyzedItem.category || '';
  }
  renderItems();
  searchInput.value = savedSearchVal;

  const shopKeyword = analyzedItem.altSearchKeyword || effectiveSearchQuery || analyzedItem.category;
  const urls = buildShopUrls(shopKeyword);
  customOutEl.innerHTML = `
    <div class="engine-meta-banner">
      <span>${escapeHtml(engineLabel)}</span>
      <span class="engine-meta-pill">${analyzedItem.sourceUrl ? 'URL' : (pendingScanImage ? 'IMAGE' : 'LIVE')} · 자동 저장</span>
    </div>
    ${renderYukaCard(analyzedItem)}
    <div class="live-search-bridge">
      <div class="live-bridge-copy">
        <span class="micro-label">ZERO DEAD-END PIPELINE</span>
        <p>${urlStatusNote ? escapeHtml(urlStatusNote) : '방금 판독한 결과가 자동 저장 목록에 적재되었습니다. 아래에서 오늘의집·쿠팡 최저평점 실사 후기도 함께 확인하세요.'}</p>
      </div>
      <div class="dual-link-row">
        <a href="${analyzedItem.sourceUrl || urls.ohouse}" target="_blank" rel="noopener noreferrer" class="btn-ohouse">${analyzedItem.sourceUrl ? '원본 링크 열기 →' : '오늘의집 리뷰 검색 →'}</a>
        <a href="${urls.coupang}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding:11px 10px;font-size:13px;">쿠팡 실후기 보기 →</a>
      </div>
    </div>
  `;
  bindCardClicks(customOutEl, [analyzedItem]);
  openScannerResults(`SCAN · ${rawInput || analyzedItem.name}`);
}

if (analyzeBtn) analyzeBtn.addEventListener('click', runScannerSearch);
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') runScannerSearch();
});

// ---------------- Tab 2-B: Tone & Mood Matcher Sector ----------------
const matcherStyleRow = document.getElementById('matcher-style-row');
const matcherToneGrid = document.getElementById('matcher-tone-grid');
const matcherCatRow = document.getElementById('matcher-cat-row');
const matcherOutput = document.getElementById('matcher-output');

function setScannerMode(mode) {
  state.scannerMode = mode;
  document.querySelectorAll('#scanner-mode-switch .scan-mode-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.scanMode === mode);
  });
  runViewTransition(() => {
    if (mode === 'matcher') {
      scannerGate.classList.add('hidden');
      scannerResults.classList.add('hidden');
      scannerMatcher.classList.remove('hidden');
      renderToneMatcher();
    } else {
      scannerMatcher.classList.add('hidden');
      scannerResults.classList.add('hidden');
      scannerGate.classList.remove('hidden');
    }
  });
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
  if (savedProfile.wishId === 'moodlight' && /조명|무드|유리|원목|확산광/.test(txt)) bonus += 3;
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
    btn.innerHTML = `
      <div class="tone-swatches">
        <span class="tone-swatch-bar" style="flex:3;background:${t.swatches[0]};"></span>
        <span class="tone-swatch-bar" style="flex:2;background:${t.swatches[1]};"></span>
        <span class="tone-swatch-bar" style="flex:1;background:${t.swatches[2]};"></span>
      </div>
      <div class="tone-name-row">
        <span class="tone-name">${escapeHtml(t.name)}</span>
        ${isSurveyPicked ? `<span class="survey-pick-pill">내 설문</span>` : ''}
      </div>
      <span class="tone-sub">${escapeHtml(t.sub)}</span>
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
  const tasteKindMap = { plant: '조경 · 식물', object: '오브제 · 소품', tableware: '식기 · 컵' };
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
           <strong class="matcher-profile-main">${escapeHtml(wishCat ? `${wishCat.name}으로 추천 중` : `${savedProfile.toneName} 무드 기준`)}</strong>`
        : `<span class="matcher-profile-kicker">맞춤 추천 전</span>
           <strong class="matcher-profile-main">내 방 설문하면 평수·취향에 맞춰 정렬돼요</strong>`
      }
    </div>
    <div class="matcher-profile-actions">
      ${isDifferentFromSaved ? `<button id="apply-tone-baseline-btn" class="matcher-mini-btn is-accent" type="button">이 무드로 기본값 변경</button>` : ''}
      <button id="matcher-retake-btn" class="matcher-mini-btn" type="button">${savedProfile ? '설문 다시하기 ↺' : '내 방 설문하기 →'}</button>
    </div>
  `;

  matcherOutput.innerHTML = `
    <div class="tone-sense-card">
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
      <strong>${escapeHtml(activeTone.name)} 톤 맞춤 · ${escapeHtml(TARGET_CATEGORIES.find((c) => c.id === state.matcherCat)?.label || state.matcherCat)}</strong>
      <span>눌러서 궁합 보기</span>
    </div>
    <div class="cards-stack" id="matcher-primary-list">
      ${primaryMatches.length ? primaryMatches.map(renderYukaCard).join('') : `<div class="card"><p class="text-secondary" style="margin:0;">해당 조건의 추천 가구를 준비 중입니다.</p></div>`}
    </div>

    <div class="matcher-section-head">
      <strong>함께 두면 완성되는 궁합 가구</strong>
      <span>다른 카테고리</span>
    </div>
    <div class="cards-stack" id="matcher-companion-list">
      ${pickedCompanions.map(renderYukaCard).join('')}
    </div>

    <div class="matcher-section-head">
      <strong>10% 포인트 소품 · 조경·식기·오브제</strong>
      <span>쿠팡 · 오늘의집</span>
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
  `;

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
const scaleStageInput = document.getElementById('scale-stage-input');
const scaleStageDiagram = document.getElementById('scale-stage-diagram');
const heightSlider = document.getElementById('height-slider');
const heightValEl = document.getElementById('height-val');
const svgWrap = document.getElementById('human-scale-svg-wrap');

function loadScaleState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.scale) || '{}');
    if (saved.height) state.scaleHeight = saved.height;
    if (saved.mode && HUMAN_SCALE_MODES[saved.mode]) state.scaleMode = saved.mode;
  } catch {
    // defaults
  }
}

function saveScaleState() {
  localStorage.setItem(STORAGE_KEYS.scale, JSON.stringify({
    height: state.scaleHeight,
    mode: state.scaleMode
  }));
}

function updateScaleInputsUI() {
  heightSlider.value = state.scaleHeight;
  heightValEl.textContent = state.scaleHeight;
  document.querySelectorAll('#scale-mode-switch .mode-btn').forEach((b) => {
    b.classList.toggle('active', b.dataset.mode === state.scaleMode);
  });

  const s = calcHumanScale(state.scaleHeight, state.scaleMode);
  const keyMetric = state.scaleMode === 'floor'
    ? `좌식상 ${s.floorTable} / 모니터 ${s.monitorTop}`
    : state.scaleMode === 'bed'
      ? `침대 ${s.bedTotal} / 거울 ${s.mirrorMinH}+`
      : `책상 ${s.deskHeight} / 의자 ${s.chairSeat}`;
  document.getElementById('home-scale-summary-line').textContent = `${s.heightCm}cm · ${keyMetric}`;
}

function svgPill(cx, cy, text, bg = '#FFFDF7', fg = '#23261F', border = '#23261F') {
  const w = Math.max(46, text.length * 7.2 + 16);
  const h = 18;
  return `
    <g transform="translate(${cx}, ${cy})">
      <rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="4" fill="${bg}" stroke="${border}" stroke-width="1"/>
      <text x="0" y="3.5" text-anchor="middle" fill="${fg}" font-size="9.5" font-weight="800">${escapeHtml(text)}</text>
    </g>
  `;
}

function svgCadDim(x, y1, y2, label, color = '#23261F', pillBg = '#FFFDF7', pillFg = '#23261F', labelOffsetX = 0) {
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
      <line x1="28" y1="${y}" x2="364" y2="${y}" stroke="${cm === 0 ? '#23261F' : '#EAE3CE'}" stroke-width="${cm === 0 ? 2 : 1}"/>
      <line x1="23" y1="${y}" x2="29" y2="${y}" stroke="#23261F" stroke-width="1.2"/>
      <text x="20" y="${y + 3.5}" text-anchor="end" fill="#5B5F52" font-size="9" font-weight="700">${cm}</text>
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
      <rect x="28" y="${monTopY - 8}" width="336" height="${floorY - (monTopY - 8)}" fill="rgba(239, 234, 216, 0.22)"/>

      <!-- Ergonomic Mesh Chair -->
      <path d="M 88 ${seatY - 48} Q 85 ${seatY - 22} 91 ${seatY + 3} L 136 ${seatY + 3}" fill="none" stroke="#5B5F52" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="93" y="${seatY - 3}" width="44" height="7" rx="3" fill="#EFEAD8" stroke="#23261F" stroke-width="1.5"/>
      <line x1="115" y1="${seatY + 4}" x2="115" y2="${floorY - 6}" stroke="#23261F" stroke-width="3"/>
      <path d="M 97 ${floorY - 2} L 115 ${floorY - 7} L 133 ${floorY - 2}" fill="none" stroke="#23261F" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="98" cy="${floorY - 2}" r="2.2" fill="#23261F"/>
      <circle cx="132" cy="${floorY - 2}" r="2.2" fill="#23261F"/>

      <!-- Architectural Seated Silhouette (Facing Right) -->
      <g>
        <!-- Torso & Legs -->
        <path d="M 103 ${shoulderY} Q 96 ${hipY - 12} 102 ${hipY} L 138 ${kneeY} Q 144 ${kneeY + 2} 145 ${kneeY + 9} L 146 ${floorY - 4}" fill="none" stroke="#23261F" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Shoes -->
        <path d="M 142 ${floorY - 3} L 157 ${floorY - 3}" stroke="#23261F" stroke-width="5.5" stroke-linecap="round"/>
        <!-- Head & Neck -->
        <line x1="106" y1="${headCy + 6}" x2="104" y2="${shoulderY}" stroke="#23261F" stroke-width="6.5" stroke-linecap="round"/>
        <circle cx="110" cy="${headCy}" r="10.5" fill="#23261F"/>
        <!-- Ergonomic 90° Arm Posture (Accent Coral) -->
        <path d="M 105 ${shoulderY + 2} L 122 ${deskY - 4} L 164 ${deskY - 4}" fill="none" stroke="#E6534B" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- Ergonomic Desk & Monitor Elevation -->
      <rect x="150" y="${deskY}" width="108" height="6" rx="1.5" fill="#23261F"/>
      <rect x="156" y="${deskY + 6}" width="4" height="${floorY - deskY - 6}" fill="#23261F"/>
      <rect x="248" y="${deskY + 6}" width="4" height="${floorY - deskY - 6}" fill="#23261F"/>
      <!-- Monitor & Keyboard -->
      <rect x="218" y="${monTopY}" width="6" height="34" rx="1.5" fill="#23261F"/>
      <rect x="214" y="${monTopY + 3}" width="3" height="28" rx="1" fill="#E6534B"/>
      <line x1="221" y1="${monBottomY}" x2="221" y2="${deskY}" stroke="#23261F" stroke-width="3"/>
      <line x1="208" y1="${deskY}" x2="233" y2="${deskY}" stroke="#23261F" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="172" y="${deskY - 3}" width="22" height="3" rx="1" fill="#5B5F52"/>

      <!-- Eye Sightline 15° -->
      <line x1="121" y1="${eyeY}" x2="213" y2="${monTopY + 13}" stroke="#E6534B" stroke-width="1.3" stroke-dasharray="4 3"/>
      ${svgPill(165, eyeY - 14, '시야각 15°', '#FFFDF7', '#E6534B', '#E6534B')}

      <!-- Non-overlapping CAD Dimensions -->
      ${svgCadDim(56, seatY, floorY, `의자 ${s.chairSeat}cm`, '#23261F', '#FFFDF7', '#23261F', 4)}
      ${svgCadDim(278, deskY, floorY, `책상 ${s.deskHeight}cm`, '#E6534B', '#E6534B', '#FFFFFF', 36)}
      ${svgCadDim(278, monTopY, deskY, `모니터 ${s.monitorTop}cm`, '#23261F', '#FFFDF7', '#23261F', 36)}
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
      <rect x="82" y="${floorY - 9}" width="50" height="8" rx="4" fill="#EFEAD8" stroke="#23261F" stroke-width="1.4"/>

      <!-- Architectural Floor-Sitting Silhouette -->
      <g>
        <path d="M 94 ${headCy + 20} Q 88 ${hipY - 10} 96 ${hipY} L 134 ${floorY - 6}" fill="none" stroke="#23261F" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="97" y1="${headCy + 6}" x2="94" y2="${headCy + 20}" stroke="#23261F" stroke-width="6.5" stroke-linecap="round"/>
        <circle cx="101" cy="${headCy}" r="10.5" fill="#23261F"/>
        <path d="M 96 ${headCy + 22} L 116 ${tblY - 4} L 154 ${tblY - 4}" fill="none" stroke="#E6534B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <!-- Low Floor Desk & Elevated Laptop Stand -->
      <rect x="146" y="${tblY}" width="102" height="5.5" rx="1.5" fill="#23261F"/>
      <line x1="154" y1="${tblY + 5}" x2="150" y2="${floorY}" stroke="#23261F" stroke-width="2.6" stroke-linecap="round"/>
      <line x1="240" y1="${tblY + 5}" x2="244" y2="${floorY}" stroke="#23261F" stroke-width="2.6" stroke-linecap="round"/>
      <!-- Laptop Riser + Screen -->
      <path d="M 192 ${tblY} L 208 ${tblY - 10} L 220 ${tblY}" fill="none" stroke="#5B5F52" stroke-width="1.6"/>
      <path d="M 190 ${tblY - 10} L 214 ${tblY - 10} L 222 ${monTopY + 10}" fill="none" stroke="#23261F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Neck-safe Sightline -->
      <line x1="112" y1="${eyeY}" x2="214" y2="${monTopY + 14}" stroke="#E6534B" stroke-width="1.3" stroke-dasharray="4 3"/>
      ${svgPill(166, headCy - 14, '거북목 방지 시야', '#FFFDF7', '#E6534B', '#E6534B')}

      <!-- Non-overlapping CAD Dimensions -->
      ${svgCadDim(268, tblY, floorY, `좌식상 ${s.floorTable}cm`, '#E6534B', '#E6534B', '#FFFFFF', 40)}
      ${svgCadDim(268, monTopY + 8, tblY, `화면 ${s.monitorTop}cm`, '#23261F', '#FFFDF7', '#23261F', 40)}
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
      <line x1="64" y1="${hangerY}" x2="288" y2="${hangerY}" stroke="#5B5F52" stroke-width="1.2" stroke-dasharray="4 3"/>
      ${svgPill(192, hangerY - 11, `행거봉 ${s.hangerBar}cm`, '#FFFDF7', '#23261F', '#8E9183')}
      <line x1="64" y1="${shelfY}" x2="288" y2="${shelfY}" stroke="#8E9183" stroke-width="1" stroke-dasharray="2 3"/>
      ${svgPill(192, shelfY - 11, `선반한계 ${s.shelfMax}cm`, '#FAF6EC', '#5B5F52', '#C9C6B8')}
    `;

    sceneSvg = `
      <!-- Standing Architectural Silhouette (Clean Proportional CAD Figure) -->
      <g>
        <!-- Left & Right Legs -->
        <path d="M 88 ${hipY} L 83 ${floorY - 4} M 94 ${hipY} L 99 ${floorY - 4}" stroke="#23261F" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M 79 ${floorY - 2} L 87 ${floorY - 2} M 96 ${floorY - 2} L 104 ${floorY - 2}" stroke="#23261F" stroke-width="4" stroke-linecap="round"/>
        <!-- Torso (Tapered Coat/Body Silhouette) -->
        <path d="M 80 ${shoulderY} Q 91 ${shoulderY - 4} 102 ${shoulderY} L 98 ${hipY + 2} L 84 ${hipY + 2} Z" fill="#23261F"/>
        <!-- Relaxed Arm -->
        <path d="M 101 ${shoulderY + 2} Q 108 ${shoulderY + 20} 105 ${hipY + 12}" fill="none" stroke="#23261F" stroke-width="4.5" stroke-linecap="round"/>
        <!-- Neck & Head -->
        <rect x="88" y="${headCy + 6}" width="6" height="9" fill="#23261F"/>
        <circle cx="91" cy="${headCy}" r="${headR}" fill="#23261F"/>
      </g>

      <!-- Key Height Callout Left of Standing Figure -->
      ${svgCadDim(54, headTopY, floorY, `키 ${s.heightCm}cm`, '#23261F', '#23261F', '#FFFFFF', 4)}

      <!-- Architectural Bed Elevation -->
      <g>
        <!-- Headboard -->
        <rect x="116" y="${bedY - 26}" width="7" height="${floorY - (bedY - 26)}" rx="2" fill="#23261F"/>
        <!-- Bed Frame & Legs -->
        <rect x="122" y="${frameTopY}" width="96" height="8" rx="1.5" fill="#23261F"/>
        <rect x="212" y="${frameTopY + 6}" width="5" height="${underBedH}" fill="#23261F"/>
        <!-- Mattress + Blanket Fold + Pillow -->
        <rect x="123" y="${bedY}" width="95" height="19" rx="3" fill="#EFEAD8" stroke="#E6534B" stroke-width="1.8"/>
        <path d="M 150 ${bedY} H 215 A 3 3 0 0 1 218 ${bedY + 3} V ${bedY + 19} H 150 Z" fill="#FFFDF7" stroke="#23261F" stroke-width="1.2"/>
        <rect x="127" y="${bedY - 9}" width="20" height="9" rx="4" fill="#FFFDF7" stroke="#23261F" stroke-width="1.4"/>
      </g>

      <!-- Bed Height Dimension (Clear between bed and mirror) -->
      ${svgCadDim(228, bedY, floorY, `총높이 ${s.bedTotal}cm`, '#E6534B', '#E6534B', '#FFFFFF', 34)}

      <!-- Detailed Wall Mirror Elevation (Far Right, Zero Overlap) -->
      <g>
        <rect x="310" y="${mirrorTopY}" width="28" height="${mirrorBottomY - mirrorTopY}" rx="4" fill="#23261F"/>
        <rect x="314" y="${mirrorTopY + 4}" width="20" height="${mirrorBottomY - mirrorTopY - 8}" rx="2" fill="#EAE5D3"/>
        <!-- Mirror Glass Reflection Diagonals -->
        <line x1="317" y1="${mirrorTopY + 24}" x2="331" y2="${mirrorTopY + 10}" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>
        <line x1="317" y1="${mirrorTopY + 34}" x2="331" y2="${mirrorTopY + 20}" stroke="#FFFFFF" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="324" cy="${mirrorTopY - 4}" r="2" fill="#23261F"/>
      </g>
      ${svgPill(324, mirrorTopY - 18, `거울 ${s.mirrorMinH}cm+`, '#FFFDF7', '#23261F', '#23261F')}
    `;
  }

  svgWrap.innerHTML = `
    <svg viewBox="0 0 380 278" role="img" aria-label="휴먼스케일 도해">
      <rect x="0" y="0" width="380" height="278" rx="8" fill="#FFFDF7"/>
      ${ticks}
      <text x="364" y="${floorY + 16}" text-anchor="end" fill="#23261F" font-size="9.5" font-weight="800">FL ±0 cm</text>
      ${overheadGuides}
      ${sceneSvg}
    </svg>
  `;
}

function renderHumanScaleDiagram() {
  const s = calcHumanScale(state.scaleHeight, state.scaleMode);
  const modeInfo = HUMAN_SCALE_MODES[state.scaleMode];
  document.getElementById('scale-stage-badge').textContent = `${s.heightCm}CM · ${modeInfo.label}`;
  document.getElementById('scale-mode-note').textContent = modeInfo.note;

  renderArchitecturalSvg(s);

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

document.getElementById('show-scale-diagram-btn').addEventListener('click', () => {
  runViewTransition(() => {
    renderHumanScaleDiagram();
    scaleStageInput.classList.add('hidden');
    scaleStageDiagram.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
});

document.getElementById('scale-edit-btn').addEventListener('click', () => {
  runViewTransition(() => {
    scaleStageDiagram.classList.add('hidden');
    scaleStageInput.classList.remove('hidden');
  });
});

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
  const today = new Date();

  wrap.innerHTML = '';
  CYCLE_ALARMS.forEach((alarm) => {
    const lastStr = saved[alarm.id];
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
        <strong style="font-size:14px;">${escapeHtml(alarm.title)}</strong>
        <span class="due-badge ${isOverdue ? 'overdue' : ''}">${dueBadgeText}</span>
      </div>
      <p class="text-secondary" style="font-size:12.5px;margin-top:2px;">${escapeHtml(alarm.tip)}</p>
      <div class="cycle-actions">
        <button class="btn-primary btn-sm done-cycle-btn">오늘 완료</button>
        <button class="btn-secondary btn-sm ics-one-btn">.ics 추가</button>
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
  copyReportBtn.addEventListener('click', async () => {
    const text = buildInspectionReportText();
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
    showToast('복사 완료! 카톡·문자에 바로 붙여넣으세요');
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

  const itemId = params.get('item');
  if (itemId) {
    const target = ITEMS_DB.find((it) => it.id === itemId);
    if (target) {
      switchTab('scanner');
      state.selectedFilter = { label: target.category, type: 'cat', value: target.category };
      renderItems();
      openScannerResults(target.category);
      openDetailSheet(target);
      return;
    }
  }

  const tab = params.get('tab');
  const q = params.get('q');
  const mode = params.get('mode');
  const tone = params.get('tone');
  const seg = params.get('seg');

  if (tab === 'scanner') {
    switchTab('scanner');
    if (mode === 'matcher') {
      if (tone) state.matcherTone = tone;
      setScannerMode('matcher');
    } else if (q) {
      searchInput.value = q;
      runScannerSearch();
    }
  } else if (tab === 'scale') {
    switchTab('scale');
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

  accountSheetPanel.innerHTML = `
    <div class="sheet-grabber" aria-hidden="true"></div>
    <div class="sheet-head" style="margin-bottom:14px;">
      <div>
        <span class="micro-label">MY ROOM & SAVE</span>
        <h2 class="sheet-title" style="margin:6px 0 2px;">내 방 후보 · 계정 저장</h2>
      </div>
      <button class="sheet-close" id="close-account-sheet-btn" type="button" aria-label="닫기">×</button>
    </div>

    <div class="account-tabs-bar">
      <button type="button" class="account-tab-btn ${tab === 'wishlist' ? 'active' : ''}" data-acc-tab="wishlist">찜한 가구 (${wishlist.length})</button>
      <button type="button" class="account-tab-btn ${tab === 'auth' ? 'active' : ''}" data-acc-tab="auth">${acc ? '내 계정 연동됨' : '3초 로그인·백업'}</button>
    </div>

    ${tab === 'wishlist' ? `
      ${wishlist.length ? `
        <div class="score-trio" style="margin-bottom:14px;">
          <div class="score-pill"><span class="score-lbl">PASS</span><strong class="score-safe">${passCnt}개</strong></div>
          <div class="score-pill"><span class="score-lbl">주의</span><strong class="${nopeCnt ? 'score-high' : ''}">${nopeCnt}개</strong></div>
          <div class="score-pill"><span class="score-lbl">평균 먼지</span><strong>${avgDust}/5</strong></div>
        </div>
        <div>
          ${wishlist.map((it) => {
            const vm = verdictMeta(it.verdict);
            return `
              <div class="wishlist-item-row">
                <div class="wishlist-item-main" data-wish-open="${escapeHtml(it.id)}">
                  <span class="verdict-pill ${vm.cls}" style="font-size:10px;padding:2px 6px;">${vm.text}</span>
                  <strong style="margin-top:4px;">${escapeHtml(it.name)}</strong>
                  <span>${escapeHtml(it.category || '')} · ${escapeHtml(it.priceTier || '')}</span>
                </div>
                <button type="button" class="wishlist-remove-btn" data-wish-remove="${escapeHtml(it.id)}">삭제</button>
              </div>
            `;
          }).join('')}
        </div>
        ${!acc ? `
          <div class="sync-status-box" style="margin-top:12px;">
            다른 폰·PC에서도 찜한 가구와 입주 점검표를 이어보려면 <strong>3초 로그인·백업</strong>을 켜두세요.
            <button type="button" id="go-auth-tab-btn" class="btn-primary btn-full" style="margin-top:10px;">내 방 데이터 저장하기 →</button>
          </div>
        ` : ''}
      ` : `
        <div class="auth-box" style="text-align:center;">
          <strong style="display:block;font-size:14.5px;margin-bottom:6px;">아직 찜한 가구가 없어요</strong>
          <p class="text-secondary" style="font-size:12.5px;margin-bottom:14px;">제품 판독이나 톤·무드 매처에서 가구를 눌러 우측 상단 <strong>♡ 저장</strong>을 누르면 여기에 모입니다.</p>
          <button type="button" id="wish-go-scanner-btn" class="btn-primary btn-full">200종 가구 둘러보기 →</button>
        </div>
      `}
    ` : `
      <div class="auth-box">
        ${acc ? `
          <span class="micro-label">${acc.provider === 'supabase' ? 'CLOUD CONNECTED' : 'LOCAL BACKUP ACTIVE'}</span>
          <h3 style="margin:6px 0 4px;">${escapeHtml(acc.email || acc.label)}</h3>
          <p class="text-secondary" style="font-size:12.5px;margin-bottom:12px;">
            ${acc.provider === 'supabase'
              ? 'Supabase 클라우드 계정에 내 방 진단·찜 목록·점검 기록이 연결되어 있습니다.'
              : '현재 이 브라우저(기기)에 내 방 프로필과 찜 목록이 안전하게 저장되어 있습니다. Supabase 키 연결 시 클라우드로 자동 동기화됩니다.'}
          </p>
          <div style="display:flex;gap:8px;">
            <button type="button" id="export-room-backup-btn" class="btn-secondary btn-sm" style="flex:1;">백업 파일(.json) 저장</button>
            <button type="button" id="logout-account-btn" class="btn-ghost btn-sm">로그아웃</button>
          </div>
        ` : `
          <span class="micro-label">LAZY AUTH · ZERO FRICTION</span>
          <h3 style="margin:6px 0 6px;">회원가입은 저장할 때만!</h3>
          <p class="text-secondary" style="font-size:12.5px;margin-bottom:14px;line-height:1.5;">
            1분 진단·스캐너는 로그인 없이 바로 쓰고, 내 방 결과·찜한 가구 <strong>${wishlist.length}건</strong>·입주 점검 기록을 이어보고 싶을 때만 저장하세요.
          </p>
          <button type="button" id="oauth-kakao-btn" class="auth-provider-btn is-kakao">카카오로 3초 시작하기</button>
          <button type="button" id="oauth-google-btn" class="auth-provider-btn is-google">Google 계정으로 계속하기</button>
          <div class="auth-email-row">
            <input id="auth-email-input" type="text" placeholder="이메일 주소 입력 (매직링크/로컬 저장)" aria-label="이메일 주소" />
            <button id="auth-email-submit-btn" type="button" class="btn-primary btn-sm">연결</button>
          </div>
        `}
      </div>
      <div class="sync-status-box">
        <strong>상태:</strong> ${hasLiveSupabase() ? 'Supabase 실시간 인증·DB 연동 활성' : '로컬 저장 모드 (실서버 배포 시 app-mvp/data/supabase-config.js에 URL·Key만 입력하면 카카오·구글 로그인 즉시 작동)'}
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

  const kakaoBtn = document.getElementById('oauth-kakao-btn');
  if (kakaoBtn) kakaoBtn.addEventListener('click', () => startSupabaseOAuth('kakao'));

  const googleBtn = document.getElementById('oauth-google-btn');
  if (googleBtn) googleBtn.addEventListener('click', () => startSupabaseOAuth('google'));

  const emailSubmitBtn = document.getElementById('auth-email-submit-btn');
  if (emailSubmitBtn) {
    emailSubmitBtn.addEventListener('click', () => {
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

  const logoutBtn = document.getElementById('logout-account-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      saveAccountSession(null);
      renderAccountSheet('auth');
      showToast('계정 연결을 해제했어요');
    });
  }
}

function openAccountSheet(tab = 'wishlist') {
  renderAccountSheet(tab);
  if (accountSheetBackdrop) accountSheetBackdrop.classList.remove('hidden');
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

// ---------------- Boot ----------------
const savedInitProfile = loadSavedRoomProfile();
if (savedInitProfile && savedInitProfile.toneId) {
  state.matcherTone = savedInitProfile.toneId;
}
updateSavedProfileBadge();
updateWishlistBadge();
updateAuthBadge();
recoverSupabaseSessionFromHash();
loadScaleState();
updateScaleInputsUI();
renderCategoryChips();
renderToneMatcher();
renderPresetTimers();
renderCycleAlarms();
renderChecklist();
refreshAutoCollectedItems();
handleDeepLinks();
initPwaInstallPrompt();

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
    navigator.serviceWorker.register('./sw.js?v=nope44').catch(() => {});
  }
}
