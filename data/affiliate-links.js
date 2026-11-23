// NOPE! 제휴 커머스(쿠팡파트너스 · 컬리 · 오늘의집) 링크 설정 파일
// 파트너스 승인 후 아래 coupangEnabled를 true로 바꾸고,
// 주요 릴스/쇼츠 노출 상품 ID별로 link.coupang.com/a/... 단축 링크를 채우면 즉시 수익 연결됩니다.

export const AFFILIATE_CONFIG = {
  coupangEnabled: false,
  coupangSubId: 'nope_web',
  disclosureText: '이 포스팅·추천 링크는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.',
  // 주요 추천 대안 / 숏폼 훅 상품별 직접 제휴 링크 (key = item.id 또는 itemKeyword)
  coupangLinks: {
    // 예시: 'dodot-quattro': 'https://link.coupang.com/a/xxxxxx',
    // 예시: 'pin-sheer-curtain': 'https://link.coupang.com/a/yyyyyy',
    // 예시: 'sisal-look-rug': 'https://link.coupang.com/a/zzzzzz',
  },
  kurlyLinks: {
    // 예시: '소프트 규조토 발매트': 'https://www.kurly.com/...'
  },
  ohouseLinks: {
    // 예시: 'ikea-klippan': 'https://ohou.se/...'
  }
};
