// NOPE! 지연 로그인(Lazy Auth) & 클라우드 동기화(Supabase) 설정 파일
// 무료 Supabase 프로젝트(월 5만 MAU 무료) 생성 후 URL과 ANON KEY를 넣으면
// 카카오 · 구글 로그인 + 기기 간 내 방 스펙/찜 목록/입주 점검표 동기화가 활성화됩니다.

export const SUPABASE_CONFIG = {
  url: 'https://qlsqsfhqblvaodgehzna.supabase.co',
  anonKey: 'sb_publishable_vvqrcwN8zskRsfHd9irI0w_gDxNdTFZ',
  enabledProviders: ['kakao', 'google', 'email']
};
