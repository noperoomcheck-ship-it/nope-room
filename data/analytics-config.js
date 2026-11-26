// NOPE! 방문 · 검색 · 클릭 분석(Analytics) 설정 파일
// 1) Google Analytics 4 측정 ID('G-XXXXXXXXXX')를 넣으면 퍼널·검색어·클릭이 자동 전송됩니다.
// 2) Vercel 프로젝트 대시보드에서 Web Analytics를 Enable한 뒤 vercelWebAnalytics를 true로 켜세요.
// 설정 전에도 브라우저 내장 이벤트·검색 미스 로그(localStorage)는 정상 동작하며 콘솔 window.getNopeMetrics()로 확인할 수 있습니다.

export const ANALYTICS_CONFIG = {
  gaMeasurementId: '',
  vercelWebAnalytics: false,
  localLogEnabled: true
};
