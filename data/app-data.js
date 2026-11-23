// NOPE! v7 — 200종 실상품 DB 연결 + 1분 점검 + 휴먼스케일 + 루틴 데이터
import { ITEMS_DB } from './products-db.js?v=nope44';
import { STYLE_MOODS, ROOM_TONES, TARGET_CATEGORIES } from './mood-palettes.js?v=nope44';
export { ITEMS_DB, STYLE_MOODS, ROOM_TONES, TARGET_CATEGORIES };

export const ITEM_SWAP_REASONS = {
  '하드 규조토 매트': { dbId: 'hard-diatomite' },
  '저가 전자레인지 선반': { dbId: 'microwave-rack' },
  '두닷 콰트로': { dbId: 'dodot-quattro' },
  '오픈 파이프 행거': { dbId: 'ikea-mulig' },
  '우드 블라인드': { dbId: 'wood-blind' },
  '장모 샤기 러그': { dbId: 'shaggy-rug' },
  '이케아 클리판/쇠데르함': { dbId: 'ikea-klippan' },
  '3M 코맨드(실크벽지)': { dbId: '3m-command' },
  '이케아 말름·브림네스': { dbId: 'ikea-malm' },
  '무인양품 PP 서랍': { dbId: 'muji-pp-drawer' },
  '한샘 샘책장(기사 시공)': { dbId: 'hanssem-sam' },
  '이케아 헬메르·알렉스·에케트': { dbId: 'ikea-helmer' },
  '마켓비 MKB 캐비닛': { dbId: 'marketb-mkb-cabinet' },
  '리바트 로넌·한샘 샘책장': { dbId: 'livart-ronan' },
  '스탠드 전신거울': { dbId: 'full-stand-mirror' },
  '1인용 리클라이너': { dbId: 'recliner-1p' },
  '허니콤 저가 MDF 책상': { dbId: 'ikea-lagkapten' },
  '오픈 선반': {
    id: 'swap-open-shelf',
    brand: 'NOPE GUIDE',
    name: '오픈형 다단 선반',
    category: '수납·행거',
    verdict: 'NOPE',
    priceTier: '2~6만 원대',
    specs: { dust: 5, deposit: 1, trouble: 3 },
    goodLine: '물건 꺼내기 쉽고 탁 트인 디스플레이 효과',
    checkLine: '청소 주기가 길다면 2주 만에 선반 위 먼지·시각적 노이즈 누적',
    tones: ['white-minimal', 'oak-natural'],
    pairIds: ['muji-pp-drawer', 'hanssem-sam'],
    altName: '도어형 수납장 또는 불투명 리빙박스 조합',
    altSearchKeyword: '불투명 리빙박스 도어 수납장'
  },
  '도어형 옷장': {
    id: 'swap-door-wardrobe',
    brand: 'PASS GUIDE',
    name: '도어형 옷장 (여닫이·커버형)',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '15~25만 원대',
    specs: { dust: 1, deposit: 2, trouble: 2 },
    goodLine: '문만 닫으면 옷 먼지·알록달록한 시선 완벽 차단',
    checkLine: '원룸에서는 여닫이 문 열림 폭과 기사 방문설치 여부 확인 추천',
    tones: ['white-minimal', 'oak-natural'],
    pairIds: ['muji-pp-drawer', 'desker-desk'],
    altName: '기사 방문설치 화이트·오크 여닫이 옷장',
    altSearchKeyword: '원룸 여닫이 옷장 방문설치'
  },
  '단모 워셔블 러그': {
    id: 'swap-short-washable-rug',
    brand: 'PASS GUIDE',
    name: '단모 워셔블 러그',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '2~5만 원대',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    goodLine: '털이 짧아 청소기로 쓱 밀리고 세탁기 통세탁까지 가능',
    checkLine: '바닥 난방 쓰는 방은 뒷면 고무 대신 논슬립 도트/면 뒷지 추천',
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    pairIds: ['ikea-klippan', 'ikea-fado'],
    altName: '세탁기 가능 단모 사계절 워셔블 러그',
    altSearchKeyword: '워셔블 단모 러그 논슬립'
  },
  '불투명 리빙박스': {
    id: 'swap-living-box',
    brand: 'PASS GUIDE',
    name: '불투명 뚜껑 리빙박스',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '1~3만 원대',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    goodLine: '속이 비치지 않아 잡동사니를 넣어도 방이 단정해 보임',
    checkLine: '선반 칸 폭·깊이 먼저 재고 같은 색으로 2~4개 통일하면 깔끔',
    tones: ['white-minimal', 'oak-natural', 'steel-modern'],
    pairIds: ['roomnhome-steel', 'muji-pp-drawer'],
    altName: '화이트·아이보리 불투명 모듈 리빙박스',
    altSearchKeyword: '불투명 뚜껑 리빙박스 수납함'
  },
  '비분리형 패브릭 소파': {
    id: 'swap-fixed-fabric-sofa',
    brand: 'NOPE GUIDE',
    name: '커버 비분리 패브릭 소파',
    category: '소파·침대·매트',
    verdict: 'NOPE',
    priceTier: '15~40만 원대',
    specs: { dust: 4, deposit: 1, trouble: 5 },
    goodLine: '부드러운 질감과 톤 맞추기 좋은 디자인',
    checkLine: '국물·음료 튄 순간 세탁기에 못 돌려 얼룩·냄새 고착 위험 높음',
    tones: ['white-minimal', 'oak-natural'],
    pairIds: ['ikea-klippan', 'ikea-soderhamn'],
    altName: '커버 통세탁 가능한 이케아 클리판/쇠데르함',
    altSearchKeyword: '이케아 클리판 소파 커버'
  },
  '단모 폴리 러그': {
    id: 'swap-poly-rug',
    brand: 'PASS GUIDE',
    name: '단모 폴리/사이잘룩 러그',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '2~4만 원대',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    goodLine: '국물 흘려도 스며들기 전 물티슈로 닦이고 먼지가 안 낌',
    checkLine: '맨발 촉감이 거칠 수 있어 거실·책상 아래 존 구분용으로 딱 맞음',
    tones: ['oak-natural', 'walnut-vintage', 'sage-terracotta'],
    pairIds: ['ikea-klippan', 'dodot-quattro'],
    altName: '생활방수 단모 폴리·사이잘룩 러그',
    altSearchKeyword: '생활방수 단모 폴리 러그'
  },
  '도어후크 거울': {
    id: 'swap-door-mirror',
    brand: 'PASS GUIDE',
    name: '무타공 도어후크 전신거울',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '2~4만 원대',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    goodLine: '바닥 면적을 0cm 차지해 4~6평 원룸 동선을 막지 않음',
    checkLine: '방문 윗틈(2mm 이상)과 문 두께 확인 후 비산방지 필름 제품 선택',
    tones: ['white-minimal', 'steel-modern'],
    pairIds: ['muji-pp-drawer', 'daiso-kkokkopin'],
    altName: '비산방지 필름 도어후크 전신거울',
    altSearchKeyword: '무타공 도어후크 전신거울 비산방지'
  },
  '클립형 조명': {
    id: 'swap-clip-lamp',
    brand: 'PASS GUIDE',
    name: '책상·헤드 집게(클립) 조명',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '1~3만 원대',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    goodLine: '스탠드 다리가 없어 책상·침대 옆 좁은 공간을 100% 절약',
    checkLine: '눈이 편한 2700K~3000K 전구색 LED·각도 조절 제품 추천',
    tones: ['steel-modern', 'white-minimal', 'walnut-vintage'],
    pairIds: ['ikea-tertial', 'desker-desk'],
    altName: 'USB 충전식·집게형 LED 무드 독서등',
    altSearchKeyword: '집게형 LED 스탠드 3000K'
  },
  '소프트 규조토': {
    id: 'swap-soft-diatomite',
    brand: 'PASS GUIDE',
    name: '빨아쓰는 소프트 규조토 발매트',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '1만 원대',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    goodLine: '물기는 빠르게 흡수하면서 사포질 필요 없고 돌처럼 깨지지 않음',
    checkLine: '세탁기 중성세제 약코스 세탁 및 KC 유해물질 안전 인증 확인 권장',
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    pairIds: ['muji-pp-drawer', 'ikea-risatorp'],
    altName: 'KC인증 논슬립 소프트 규조토 발매트',
    altSearchKeyword: '소프트 규조토 발매트 KC인증'
  }
};

export const WISH_CATEGORIES = {
  spacious: {
    id: 'spacious',
    name: '여백 · 개방감 중심형',
    wishShort: '방이 넓어 보였으면 좋겠어요',
    linkedMoods: '화이트 · 크림 / 블랙 · 실버 스틸',
    summary: '평수보다 방이 탁 트여 보이길 바라는 취향이에요. 벽과 비슷한 밝은 크림·화이트를 바탕 60%로 쓰고, 바닥이 비치는 슬림 다리 가구를 고르면 시야가 막히지 않아요.'
  },
  storage: {
    id: 'storage',
    name: '실속 · 수납 집중형',
    wishShort: '평수 대비 수납이 많았으면 좋겠어요',
    linkedMoods: '오크 · 베이지 우드 / 화이트 · 크림',
    summary: '작은 평수에서도 수납 공간을 최대로 쓰고 싶은 실속 취향이에요. 겉이 통일된 베이지·오크 도어형 수납장과 침대 하부 수납을 맞추면 짐이 많아도 깔끔해 보여요.'
  },
  moodlight: {
    id: 'moodlight',
    name: '아늑 · 무드등 분위기형',
    wishShort: '너무 밝지 않고 무드등 위주로 아늑했으면 해요',
    linkedMoods: '월넛 · 빈티지 우드 / 풀색 · 테라코타',
    summary: '형광등 대신 은은한 조명과 차분한 밤 분위기를 즐기는 취향이에요. 진한 월넛이나 풀색·벽돌색 톤에 따뜻한 전구색 단스탠드를 두면 눈이 편하고 아늑한 방이 됩니다.'
  },
  easycare: {
    id: 'easycare',
    name: '단정 · 관리 편의형',
    wishShort: '청소와 관리가 쉬웠으면 좋겠어요',
    linkedMoods: '버터 · 파스텔 크림 / 화이트 · 크림',
    summary: '청소·세탁 스트레스를 줄이고 늘 정돈된 상태를 유지하고 싶은 취향이에요. 산뜻한 크림·파스텔 바탕에 커버 분리 세탁이 되는 소품과 완제품 수납을 짝지으면 관리가 훨씬 쉬워져요.'
  }
};

export const TASTE_INSIGHTS = {
  plant: {
    label: '초록 식물 · 흙 화분 취향',
    detail: '무난한 가구들 사이에 싱그러운 초록 잎과 흙 화분 하나를 둬서 방에 생기를 불어넣는 스타일이에요.'
  },
  object: {
    label: '은은한 조명 · 소품 감성 취향',
    detail: '큰 가구는 담백하게 비워두고, 따뜻한 불빛의 단스탠드와 만졌을 때 기분 좋은 오브제로 밤 분위기를 채우는 스타일이에요.'
  },
  tableware: {
    label: '예쁜 컵 · 그릇 · 색감 취향',
    detail: '매일 손에 닿는 머그컵, 유리잔, 작은 트레이에 톡톡 튀는 색감을 얹어 일상의 만족감을 챙기는 스타일이에요.'
  },
  minimal: {
    label: '깔끔 여백 · 미니멀 취향',
    detail: '불필요한 소품은 최대한 줄이고, 바닥과 책상이 훤히 비어 보이는 깔끔함 그 자체에서 편안함을 느끼는 스타일이에요.'
  }
};

export const SPACE_MBTI_TYPES = [
  {
    id: 'minimalist',
    code: 'M-CLN · 여백 깔끔 미니멀리스트',
    headline: '여백과 깔끔함에서 마음이 편해지는 타입',
    summary: '물건이 적고 시야가 탁 트여 있을수록 스트레스가 확 줄어드는 깔끔파예요. 가구는 도어가 닫히는 수납 위주로 고르고, 색상은 최대 2가지만 남기면 방이 훨씬 넓어 보여요.'
  },
  {
    id: 'maximal',
    code: 'V-MXM · 취향 가득 맥시멀리스트',
    headline: '예쁜 소품과 취향으로 방을 채울수록 행복한 타입',
    summary: '무조건 비우기보다 내가 좋아하는 그릇, 컵, 조명, 포스터가 눈에 보일 때 가장 기분이 좋아지는 타입이에요. 오픈 선반과 가림 박스를 1:1 비율로 섞어 두면 지저분해 보이지 않으면서 취향을 맘껏 펼칠 수 있어요.'
  },
  {
    id: 'texture',
    code: 'T-WRM · 포근한 질감 수집가',
    headline: '나무·천·흙처럼 따뜻한 촉감에서 만족감을 느끼는 타입',
    summary: '차가운 플라스틱이나 반짝이는 소재보다 원목 가구, 도톰한 면 이불, 도자기 컵처럼 손끝에 닿는 부드럽고 포근한 질감을 좋아해요. 촉감이 살아 있는 소품 하나만 더해도 방 분위기가 확 살아납니다.'
  },
  {
    id: 'green',
    code: 'G-BOT · 초록 생명력 힐러',
    headline: '식물과 자연 색감에서 쉼을 얻는 타입',
    summary: '바깥 풍경이 들어오듯 방 안에 초록 잎과 자연스러운 색이 있을 때 가장 편안함을 느껴요. 침대 옆이나 창가에 관리 쉬운 화분 1~2개만 두어도 방 전체가 카페처럼 달라집니다.'
  },
  {
    id: 'color',
    code: 'C-CLR · 포인트 컬러 큐레이터',
    headline: '작은 색감 포인트로 기분을 바꾸는 센스파 타입',
    summary: '큰 가구는 무난하고 질리지 않는 톤으로 고르되, 머그컵·쿠션·단스탠드 같은 작은 소품에서 톡톡 튀는 색감을 즐기는 타입이에요. 계절마다 소품 색만 바꿔줘도 새로 이사 온 기분을 낼 수 있어요.'
  },
  {
    id: 'modern',
    code: 'F-MOD · 선이 반듯한 모더너',
    headline: '군더더기 없는 직선과 정돈된 분위기를 좋아하는 타입',
    summary: '알록달록한 장식보다 블랙·화이트·실버 스틸처럼 선이 깔끔하게 떨어지는 실용적 공간에서 집중력과 안정감을 느껴요. 전선과 생활용품을 케이스에 깔끔히 숨겨주면 만족도가 두 배로 올라갑니다.'
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    step: '01 / 13',
    title: '대략적인 방 평수와 구조는 어느 정도인가요?',
    options: [
      { label: '아담한 미니 원룸 (약 4~5평 이하 · 동선 최우선)', pyeong: '4~5평 이하', scores: { spaceStress: 16, dustRisk: 4 } },
      { label: '보통 크기 원룸 (약 6~7평 · 침대+책상 기본)', pyeong: '6~7평', scores: { spaceStress: 9, dustRisk: 2 } },
      { label: '여유 있는 원룸·분리형 (약 8~10평 · 소파 가능)', pyeong: '8~10평', scores: { spaceStress: 4 } },
      { label: '1.5룸 · 투룸 이상 (약 11평+ · 공간 분리 여유)', pyeong: '11평 이상', scores: { spaceStress: 1 } }
    ]
  },
  {
    id: 'q2',
    step: '02 / 13',
    title: '계약 형태와 벽면 타공(못질) 허용 범위는?',
    options: [
      { label: '월세·전세 원룸 (못질 금지 · 원상복구 필수)', scores: { depositRisk: 14, spaceStress: 6, dustRisk: 2 } },
      { label: '투룸·빌라 (꼭꼬핀 정도는 가능)', scores: { depositRisk: 7, spaceStress: 3, dustRisk: 2 } },
      { label: '자가 또는 타공 자유로운 환경', scores: { depositRisk: 1, spaceStress: 1, dustRisk: 1 } }
    ]
  },
  {
    id: 'q3',
    step: '03 / 13',
    title: '내 방을 꾸밀 때 가장 바라는 희망사항은?',
    options: [
      { label: '평수보다 방이 훤히 넓어 보이고 탁 트였으면 좋겠어요', wishId: 'spacious', scores: { spaceStress: 2 } },
      { label: '작은 방이지만 수납 공간만큼은 최대한 많았으면 좋겠어요', wishId: 'storage', scores: { spaceStress: 4, dustRisk: 2 } },
      { label: '너무 밝은 불빛보다 무드등 위주로 아늑한 분위기 내고 싶어요', wishId: 'moodlight', scores: { spaceStress: 1 } },
      { label: '깔끔하고 관리 쉬워서 청소 스트레스가 가장 적었으면 해요', wishId: 'easycare', scores: { dustRisk: 1 } }
    ]
  },
  {
    id: 'q4',
    step: '04 / 13',
    title: '맞추고 싶은 내 방의 메인 색감 · 무드는?',
    options: [
      { label: '화이트 · 크림 (밝고 훤히 넓어 보이는 방)', toneId: 'white-minimal', scores: { dustRisk: 2 } },
      { label: '오크 · 베이지 우드 (따뜻하고 포근한 나무 느낌)', toneId: 'oak-natural', scores: { dustRisk: 3 } },
      { label: '월넛 · 빈티지 우드 (고동색 원목의 깊은 분위기)', toneId: 'walnut-vintage', scores: { dustRisk: 4, spaceStress: 3 } },
      { label: '블랙 · 실버 스틸 (선이 반듯한 시크한 방)', toneId: 'steel-modern', scores: { dustRisk: 5, assemblyRisk: 2 } },
      { label: '버터 · 파스텔 크림 (연노랑·소라색의 생기 있는 방)', toneId: 'butter-pastel', scores: { dustRisk: 3 } },
      { label: '풀색 · 테라코타 (차분한 초록과 벽돌색 카페 무드)', toneId: 'sage-terracotta', scores: { dustRisk: 3 } }
    ]
  },
  {
    id: 'q5',
    step: '05 / 13',
    title: '방 분위기를 살릴 때 가장 기분 좋은 포인트는?',
    options: [
      { label: '초록 식물 · 흙 화분 (생기 있는 자연 느낌)', tasteId: 'plant', scores: { spaceStress: 2 } },
      { label: '은은한 단스탠드 · 만졌을 때 포근한 소재감', tasteId: 'object', scores: { spaceStress: 2 } },
      { label: '예쁜 머그컵 · 유리잔 · 톡톡 튀는 컬러 소품', tasteId: 'tableware', scores: { dustRisk: 1 } },
      { label: '장식 없이 훤히 비워진 깔끔함 그 자체', tasteId: 'minimal', scores: { spaceStress: 1 } }
    ]
  },
  {
    id: 'q6',
    step: '06 / 13',
    title: '방 안에서 가장 많은 시간을 보내는 활동은?',
    options: [
      { label: '재택근무 · 공부 중심 (책상·의자 중요)', activity: '재택·집중 작업', scores: { assemblyRisk: 3, spaceStress: 4 } },
      { label: '휴식 · 수면 · 영상 시청 중심 (침대·소파 중요)', activity: '휴식·수면', scores: { fabricRisk: 6, smellRisk: 4 } },
      { label: '홈카페 · 요리 · 취미 병행 (테이블·선반 중요)', activity: '홈카페·취미', scores: { dustRisk: 5, smellRisk: 6 } }
    ]
  },
  {
    id: 'q7',
    step: '07 / 13',
    title: '가장 먼저 들이고 싶은 1순위 가구·소품은?',
    options: [
      { label: '오픈 행거 · 철제 오픈 선반', scores: { dustRisk: 14, spaceStress: 5 } },
      { label: '패브릭/부클레 소파 · 장모 러그', scores: { dustRisk: 8, fabricRisk: 15 } },
      { label: '우드 블라인드 · 스탠드 거울 · 단스탠드', scores: { dustRisk: 6, depositRisk: 8, spaceStress: 6 } },
      { label: '도어형 수납장 · 심플 책상', scores: { dustRisk: 2, fabricRisk: 2 } }
    ]
  },
  {
    id: 'q8',
    step: '08 / 13',
    title: '내 방 짐 양과 물건 채우는 성향은 어떤가요?',
    options: [
      { label: '좋아하는 옷·소품을 많이 모으는 맥시멀 성향', density: 'maximal', scores: { spaceStress: 12, dustRisk: 7 } },
      { label: '필요한 것 위주로 적당히 두고 사는 균형 성향', density: 'balanced', scores: { spaceStress: 5, dustRisk: 3 } },
      { label: '물건을 최소화하고 텅 비워두는 미니멀 성향', density: 'minimal', scores: { spaceStress: 1, dustRisk: 1 } }
    ]
  },
  {
    id: 'q9',
    step: '09 / 13',
    title: '평소 청소기·물걸레질 주기는 어느 정도인가요?',
    options: [
      { label: '주 1회 이하 또는 몰아서 청소', scores: { dustRisk: 15, fabricRisk: 7 } },
      { label: '주 2~3회 꾸준히 관리', scores: { dustRisk: 6, fabricRisk: 3 } },
      { label: '거의 매일 틈틈이 청소', scores: { dustRisk: 1, fabricRisk: 1 } }
    ]
  },
  {
    id: 'q10',
    step: '10 / 13',
    title: '방 안에서 배달음식·요리 빈도는?',
    options: [
      { label: '주방 미분리 원룸에서 자주 먹음', scores: { fabricRisk: 13, smellRisk: 14 } },
      { label: '간단한 식사·커피 위주', scores: { fabricRisk: 6, smellRisk: 6 } },
      { label: '주방 분리형 + 즉시 환기', scores: { fabricRisk: 1, smellRisk: 2 } }
    ]
  },
  {
    id: 'q11',
    step: '11 / 13',
    title: '방의 채광과 창문 환기 환경은?',
    options: [
      { label: '저층·북향·작은 창 (습하고 답답함)', scores: { smellRisk: 14, fabricRisk: 9 } },
      { label: '보통이나 겨울엔 창문을 잘 안 엶', scores: { smellRisk: 7, fabricRisk: 5 } },
      { label: '햇빛 좋고 맞통풍 환기 가능', scores: { smellRisk: 1, fabricRisk: 1 } }
    ]
  },
  {
    id: 'q12',
    step: '12 / 13',
    title: 'DIY 가구 조립과 공구 보유 상태는?',
    options: [
      { label: '드라이버 없음 · 조립 막막함', scores: { assemblyRisk: 15, depositRisk: 3 } },
      { label: '동봉 육각렌치 정도는 가능', scores: { assemblyRisk: 7 } },
      { label: '전동드릴 보유 · 조립 능숙', scores: { assemblyRisk: 1 } }
    ]
  },
  {
    id: 'q13',
    step: '13 / 13',
    title: '향후 1~2년 내 이사 갈 가능성은?',
    options: [
      { label: '높음 (1~2년 계약 · 자주 이동)', scores: { depositRisk: 9, assemblyRisk: 5, spaceStress: 4 } },
      { label: '보통 (2년 이상 거주 예정)', scores: { depositRisk: 4, assemblyRisk: 3 } },
      { label: '낮음 (장기 거주 계획)', scores: { depositRisk: 1, assemblyRisk: 1 } }
    ]
  }
];

export const QUIZ_RESULTS = [
  {
    id: 'dust-collector',
    code: 'TYPE 01',
    condition: (s) => s.dustRisk >= 26 && s.fabricRisk < 24,
    badge: '먼지 콜렉터형',
    tagline: '예쁜 오픈 가구 골랐다가 먼지·정리 스트레스를 껴안기 쉬운 타입',
    top3: ['오픈 행거 → 커버/도어형 교체', '장모 러그·오픈 선반 제외', '주 1회 10분 환기 알람 설정'],
    avoidItems: ['오픈 파이프 행거', '우드 블라인드', '오픈 선반'],
    altItems: ['도어형 옷장', '단모 워셔블 러그', '불투명 리빙박스'],
    lifeTips: [
      {
        title: '계절 옷만 커버 씌우기',
        desc: '행거를 이미 샀다면 당장 안 입는 외투·니트만 지퍼형 의류 커버에 넣어도 방 먼지가 절반으로 줄어요.',
        itemLabel: '부직포 지퍼 의류 커버',
        itemKeyword: '지퍼형 의류 커버 행거'
      },
      {
        title: '자기 전 1분 정전기 청소포',
        desc: '매일 청소기 돌리기 힘들 땐 물걸레보다 정전기 청소포로 모서리만 쓱 훑는 편이 먼지 뭉침을 막기 좋아요.',
        itemLabel: '정전기 청소포 · 밀대 세트',
        itemKeyword: '정전기 청소포 밀대'
      }
    ]
  },
  {
    id: 'fabric-sponge',
    code: 'TYPE 02',
    condition: (s) => s.fabricRisk >= 26 || s.smellRisk >= 22,
    badge: '냄새·습기 저장고형',
    tagline: '국물·습기 한 번 스며들면 세탁·냄새 관리가 확 어려워지는 타입',
    top3: ['커버 분리 불가 소파 금지', '생활방수·PU 소재 선택', '조리 후 15분 환기 필수'],
    avoidItems: ['비분리형 패브릭 소파', '장모 샤기 러그'],
    altItems: ['이케아 클리판/쇠데르함', '단모 폴리 러그'],
    lifeTips: [
      {
        title: '국물 쏟았을 때 비비기 금지',
        desc: '마른 키친타월로 먼저 꾹 눌러 물기를 뺀 뒤, 베이킹소다·패브릭 얼룩 제거제를 뿌리고 톡톡 두드려 빼세요.',
        itemLabel: '베이킹소다 · 얼룩제거제',
        itemKeyword: '패브릭 얼룩제거제 베이킹소다'
      },
      {
        title: '배달음식·요리 뒤 선풍기 창밖 틀기',
        desc: '창문만 열어두는 것보다 선풍기를 창밖 방향으로 10분만 틀어두면 꿉꿉한 음식 냄새와 습기가 훨씬 빨리 빠져요.',
        itemLabel: '저소음 탁상 서큘레이터',
        itemKeyword: '저소음 탁상 서큘레이터'
      }
    ]
  },
  {
    id: 'deposit-danger',
    code: 'TYPE 03',
    condition: (s) => s.depositRisk >= 22,
    badge: '보증금 경보형',
    tagline: '벽지 테이프나 대형 가구 때문에 퇴실할 때 원상복구 비용 걱정되는 타입',
    top3: ['벽지 위 폼테이프 금지(꼭꼬핀만)', '벽 타공·대형 수납장 피하기', '입주 당일 하자 사진 백업'],
    avoidItems: ['3M 코맨드(실크벽지)', '이케아 말름·브림네스'],
    altItems: ['무인양품 PP 서랍', '한샘 샘책장(기사 시공)'],
    lifeTips: [
      {
        title: '벽지 테이프 뗄 땐 드라이기 10초',
        desc: '이미 벽지에 붙인 양면테이프를 억지로 떼면 찢어지기 쉬워요. 드라이기 바람으로 녹여 떼고 잔여 접착제는 제거제로 닦아내세요.',
        itemLabel: '꼭꼬핀 · 스티커 접착제거제',
        itemKeyword: '꼭꼬핀 스티커 제거제'
      },
      {
        title: '입주 첫날 하자 보호 · 찍힘 방지',
        desc: '의자 바퀴나 가구 다리 아래 보호 패드를 깔고, 욕실·창틀 물때 방지 실리콘 보수제로 미리 관리하면 보증금 분쟁을 줄일 수 있어요.',
        itemLabel: '가구 바닥 보호 패드 · 펠트',
        itemKeyword: '가구 다리 보호 패드 펠트'
      }
    ]
  },
  {
    id: 'assembly-panic',
    code: 'TYPE 04',
    condition: (s) => s.assemblyRisk >= 18,
    badge: '조립 지옥 회피형',
    tagline: '배송 온 조립 가구 뜯었다가 공구·무게 때문에 시작부터 지치는 타입',
    top3: ['반제품·철판 조립 가구 거르기', '기사 방문 설치·완제품 우선', '구매 전 동봉 공구 확인'],
    avoidItems: ['이케아 헬메르·알렉스·에케트', '마켓비 MKB 캐비닛'],
    altItems: ['무인양품 PP 서랍', '리바트 로넌·한샘 샘책장'],
    lifeTips: [
      {
        title: '나사는 처음부터 꽉 조이지 않기',
        desc: '조립 가구가 흔들릴 땐 70%만 느슨하게 조여 세운 뒤 수평을 맞추고, 미니 전동드라이버로 마지막에 꽉 조여야 뒤틀리지 않아요.',
        itemLabel: 'USB 충전 미니 전동드라이버',
        itemKeyword: '미니 충전식 전동드라이버'
      },
      {
        title: '수평 패드·미끄럼방지 매트 활용',
        desc: '자취방 장판이 미세하게 기울어져 있다면 조립 가구 다리 밑에 수평 조절 패드나 펠트 스티커를 대주면 소음과 흔들림이 싹 사라져요.',
        itemLabel: '가구 수평 패드 · 펠트 스티커',
        itemKeyword: '가구 수평 조절 패드'
      }
    ]
  },
  {
    id: 'space-blackhole',
    code: 'TYPE 05',
    condition: (s) => s.spaceStress >= 22,
    badge: '동선 파괴 주의형',
    tagline: '하나둘 채우다 보면 문 여닫기나 걷는 동선부터 좁아지기 쉬운 타입',
    top3: ['바닥형 조명·거울 줄이기', '최소 보행 폭 60cm 확보', '리클라이너·대형 침대 피하기'],
    avoidItems: ['스탠드 전신거울', '1인용 리클라이너'],
    altItems: ['도어후크 거울', '클립형 조명'],
    lifeTips: [
      {
        title: '바닥이 보일수록 방이 커 보임',
        desc: '거울·조명·휴지통을 바닥에 두기보다 문에 거는 도어후크 거울이나 책상 집게형 램프를 쓰면 같은 평수도 훨씬 넓어 보여요.',
        itemLabel: '도어후크 거울 · 집게 조명',
        itemKeyword: '도어후크 전신거울'
      },
      {
        title: '가구 놓기 전 보행 폭 60cm 체크',
        desc: '침대와 책상·벽 사이 통로가 60cm보다 좁아지면 불편해져요. 가구 주문 전 미니 줄자로 실제 가로·깊이를 먼저 재보세요.',
        itemLabel: '미니 줄자 · 틈새 리빙박스',
        itemKeyword: '틈새 리빙박스 서랍'
      }
    ]
  },
  {
    id: 'balanced-cautious',
    code: 'TYPE 06',
    condition: (s) => (s.dustRisk + s.fabricRisk + s.depositRisk + s.spaceStress) >= 40,
    badge: '감성-현실 경계형',
    tagline: '대체로 무난하지만 한두 번 충동구매한 가구에 후회하기 쉬운 타입',
    top3: ['후회 아이템 1개만 먼저 걸러내기', '휴먼스케일 치수 확인 후 결제', '세탁·환기 루틴 캘린더 등록'],
    avoidItems: ['하드 규조토 매트', '저가 전자레인지 선반'],
    altItems: ['소프트 규조토', '두닷 콰트로'],
    lifeTips: [
      {
        title: '지저분한 전선·멀티탭만 가려도 깔끔',
        desc: '새 가구를 사기 전 책상 위·바닥 전선부터 깔끔한 멀티탭 정리함으로 숨겨주면 방 인테리어 완성도가 훨씬 올라가요.',
        itemLabel: '케이블 멀티탭 정리함',
        itemKeyword: '멀티탭 전선 정리함'
      },
      {
        title: '발매트·욕실 바닥 뽀송하게 관리',
        desc: '돌처럼 딱딱한 규조토 대신 세탁기 돌릴 수 있는 소프트 규조토 매트로 바꾸면 물기 흡수와 위생 둘 다 챙길 수 있어요.',
        itemLabel: '워셔블 소프트 규조토 매트',
        itemKeyword: '소프트 규조토 발매트'
      }
    ]
  },
  {
    id: 'survival-pro',
    code: 'TYPE 07',
    condition: () => true,
    badge: '스펙 방어 만렙형',
    tagline: '예쁜 감성도 챙기면서 관리·청소 기준까지 꼼꼼히 거르는 실속파 타입',
    top3: ['내 키 맞는 핵심 가구만 투자', '세탁·환기 .ics 알람 등록', '구매 전 실상품 판독기 체크'],
    avoidItems: ['허니콤 저가 MDF 책상'],
    altItems: ['두닷 콰트로', '무인양품 PP 서랍'],
    lifeTips: [
      {
        title: '매트리스·의자 오염 원천 차단',
        desc: '오래 쓰는 좋은 매트리스일수록 방수 매트리스 커버를 씌워두면 땀·커피 얼룩 걱정 없이 새것처럼 오래 쓸 수 있어요.',
        itemLabel: '순면 생활방수 매트리스 커버',
        itemKeyword: '생활방수 매트리스 커버'
      },
      {
        title: '주기적인 필터·배수구 관리',
        desc: '에어컨·공기청정기 필터와 싱크대 배수구를 한 달에 한 번만 세정제로 비워줘도 자취방 공기 질이 달라져요.',
        itemLabel: '배수구·에어컨 클리너',
        itemKeyword: '배수구 발포 클리너'
      }
    ]
  }
];

export const HUMAN_SCALE_MODES = {
  desk: {
    id: 'desk',
    label: '의자·책상형',
    note: '발바닥이 바닥에 닿는 의자 높이와 팔꿈치 90도 책상 높이를 맞추면 승모근·허리 통증이 줄어듭니다.'
  },
  floor: {
    id: 'floor',
    label: '바닥 좌식형',
    note: '좌식 상이 너무 낮으면 목이 앞으로 꺾입니다. 방석 두께를 포함한 30~35cm 높이와 등받이가 필수입니다.'
  },
  bed: {
    id: 'bed',
    label: '침대 멀티형',
    note: '프레임+매트리스 총 높이가 무릎 높이(45~52cm)여야 걸터앉고 일어날 때 무릎·허리 부담이 적습니다.'
  }
};

export function calcHumanScale(heightCm, mode = 'desk') {
  const h = Number(heightCm) || 168;
  const chairSeat = Math.round(h * 0.25);
  const deskHeight = Math.round(h * 0.415);
  const floorTable = Math.round(h * 0.19);
  const monitorTop = mode === 'floor'
    ? floorTable + Math.round(h * 0.34)
    : chairSeat + Math.round(h * 0.44);
  const hangerBar = Math.round(h * 0.96);
  const shelfMax = Math.round(h * 1.15);
  const bedTotal = Math.round(h * 0.285);
  const mirrorMinH = Math.round(h * 0.72);

  return {
    heightCm: h,
    mode,
    chairSeat,
    deskHeight,
    floorTable,
    monitorTop,
    hangerBar,
    shelfMax,
    bedTotal,
    mirrorMinH
  };
}

export const QUICK_TIMERS = [
  { id: 'vent-winter', label: '겨울 결로 환기', minutes: 10, desc: '곰팡이 예방' },
  { id: 'vent-cook', label: '요리 냄새 환기', minutes: 15, desc: '패브릭 탈취' },
  { id: 'bed-dehum', label: '침구 제습 가동', minutes: 30, desc: '습기·진드기 컷' },
  { id: 'laundry-check', label: '세탁 꺼내기', minutes: 45, desc: '쉰내 방지' }
];

export const CYCLE_ALARMS = [
  { id: 'cyc-bedding', title: '베개커버 · 이불 세탁', everyDays: 14, tip: '2주 1회 세탁·건조' },
  { id: 'cyc-fabric', title: '소파 · 러그 먼지·탈취', everyDays: 7, tip: '주 1회 청소기 + 환기' },
  { id: 'cyc-drain', title: '욕실 배수구 · 실리콘 케어', everyDays: 7, tip: '주 1회 물때 5분 컷' },
  { id: 'cyc-washer', title: '세탁기 통세척 · 제습제', everyDays: 30, tip: '월 1회 과탄산소다' },
  { id: 'cyc-filter', title: '에어컨 · 청정기 필터', everyDays: 30, tip: '월 1회 먼지 세척' }
];

export const MOVE_IN_CHECKLIST = [
  {
    id: 'ins-wall',
    zone: '벽·바닥',
    title: '벽지·천장 찢김 / 누수 얼룩',
    howTo: '불을 끄고 폰 플래시를 벽면 옆에서 비춰 들뜸·노란 물얼룩·이전 못자국 확인',
    quickTags: ['벽지 찢김·들뜸', '천장 누수 얼룩', '기존 못·테이프 자국']
  },
  {
    id: 'ins-floor',
    zone: '벽·바닥',
    title: '장판·마루 찍힘 / 긁힘',
    howTo: '침대·책상이 놓이던 모서리와 현관 안쪽 바닥의 긁힘·변색 확인',
    quickTags: ['바닥 찍힘·파임', '가구 눌림 자국', '걸레받이 벌어짐']
  },
  {
    id: 'ins-drain-pressure',
    zone: '물·배수',
    title: '변기·샤워기 동시 수압 & 온수 속도',
    howTo: '세면대·샤워기를 동시에 켠 채 변기 물을 내려 수압 급감과 30초 내 온수 확인',
    quickTags: ['동시 사용 시 수압 약함', '온수 지연·수온 불안정', '변기 물 채움 느림']
  },
  {
    id: 'ins-sink-leak',
    zone: '물·배수',
    title: '싱크대·세면대 하부 누수 / 악취',
    howTo: '하부장 문을 열고 물을 30초간 틀어 배관 이음새 물방울·배수구 냄새 확인',
    quickTags: ['배관 이음새 물방울', '배수구 내려감 느림', '하수구 악취 올라옴']
  },
  {
    id: 'ins-window-mold',
    zone: '창문·문',
    title: '창틀 곰팡이·결로 / 방충망 찢김',
    howTo: '창틀 실리콘 틈새 곰팡이, 창문 잠금쇠 헐거움, 방충망 구멍 여부 확인',
    quickTags: ['창틀 실리콘 곰팡이', '창문 잠금·닫힘 불량', '방충망 구멍·이탈']
  },
  {
    id: 'ins-door-options',
    zone: '창문·문',
    title: '냉장고·세탁기·에어컨 옵션 가동',
    howTo: '기본 옵션 가전을 모두 켜 냉기·탈수 소음·에어컨 악취 및 문 열림 반경 확인',
    quickTags: ['에어컨 곰팡이·냄새', '세탁기·냉장고 소음', '방문 턱·경첩 삐걱거림']
  },
  {
    id: 'ins-outlet-power',
    zone: '전기·보안',
    title: '콘센트 헐거움 · 조명 / 두꺼비집',
    howTo: '충전기를 모든 콘센트에 꽂아 통전·벽체 고정 상태와 조명 깜빡임 점검',
    quickTags: ['콘센트 헐거움·고정불량', '전원 불통 포트 있음', '형광등·스위치 깜빡임']
  },
  {
    id: 'ins-doorlock-security',
    zone: '전기·보안',
    title: '현관 도어락 · 이중잠금 / 외풍',
    howTo: '현관문 고무패킹 틈새 빛 새어듦과 안전고리·도어락 잠금 작동 확인',
    quickTags: ['현관 고무패킹 틈·외풍', '안전고리·걸쇠 헐거움', '도어락 버튼·배터리 경고']
  }
];
