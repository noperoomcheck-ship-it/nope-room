// NOPE! v9 — 278종 실상품 DB 연결 + 30문항 정밀 분기 + 14개 공간 처방 타입
import { ITEMS_DB } from './products-db.js?v=nope98';
import {
  STYLE_MOODS,
  ROOM_TONES,
  TARGET_CATEGORIES,
  ROOM_BASE_OPTIONS,
  getRoomBaseRescue
} from './mood-palettes.js?v=nope98';
export {
  ITEMS_DB,
  STYLE_MOODS,
  ROOM_TONES,
  TARGET_CATEGORIES,
  ROOM_BASE_OPTIONS,
  getRoomBaseRescue
};

export const NOPE_TRAIT_RULES = [
  {
    id: 'no-wash-fabric',
    nopeLabel: '물세탁 안 되는 털·천 소파/러그',
    shortChip: '세탁 불가 털·패브릭 제외',
    passLabel: '물세탁 가능 단모 · 커버 분리형',
    passQuery: '워셔블',
    passRx: /워셔블|단모|사이잘룩|커버\s*분리|물세탁|이지클린/,
    desc: '털이 길거나 커버가 분리되지 않아 음료·먼지·반려동물 털 관리가 힘든 소재',
    matchRx: /장모\s*샤기|샤기\s*러그|부클레.*소파|비분리|세탁\s*불가|물세탁\s*불가|부분\s*클리닝|코듀로이.*세탁/
  },
  {
    id: 'wall-damage',
    nopeLabel: '벽 뚫기 · 벽지 뜯기는 접착 훅',
    shortChip: '벽 타공·접착 테이프 제외',
    passLabel: '꼭꼬핀 · 압착 거치 등 무타공 방식',
    passQuery: '무타공',
    passRx: /무타공|꼭꼬핀|자석|문걸이|논슬립|압축/,
    desc: '못질이나 강한 접착 테이프 때문에 퇴실할 때 도배·수리비를 물기 쉬운 설치 방식',
    matchRx: /(^|[^무])타공(?!판)|못질|칼블럭|나사\s*고정|실크벽지.{0,8}뜯|점착식|접착\s*테이프|3M\s*코맨드|코맨드\s*스트립/,
    depositMin: 4
  },
  {
    id: 'open-dust',
    nopeLabel: '문 없어 먼지 쌓이는 오픈 행거·선반',
    shortChip: '문 없는 오픈 수납 제외',
    passLabel: '먼지 가리는 도어형 · 지퍼 커버 수납',
    passQuery: '도어',
    passRx: /도어|가림막|불투명|서랍|리빙박스|옷장/,
    desc: '옷이나 짐이 그대로 노출돼 2주 만에 먼지가 쌓이고 방이 어수선해 보이는 구조',
    matchRx: /오픈\s*파이프|오픈.*행거|오픈\s*선반|와이어\s*선반|우드\s*블라인드|알루미늄\s*블라인드/
  },
  {
    id: 'heavy-diy',
    nopeLabel: '무겁고 부품 많은 셀프 조립 가구',
    shortChip: '어려운 조립·무거운 가구 제외',
    passLabel: '조립 없는 완제품 · 방문 설치 가구',
    passQuery: '완제품',
    passRx: /완제품|무조립|조립\s*없|기사\s*방문|기사\s*시공|공구\s*없|20분/,
    desc: '전동드릴 없인 조립이 버겁거나 분해하면 나사 구멍이 헐거워져 이사 때 버리기 쉬운 제품',
    matchRx: /전동드릴\s*필수|분해.*불가|재조립.*(불가|어려)|말름|브림네스|헬메르|알렉스|에케트|마켓비\s*MKB|조립\s*난이도\s*(상|높)/
  },
  {
    id: 'weak-board',
    nopeLabel: '속 빈 종이심재 · 모니터암에 꺼지는 상판',
    shortChip: '속 빈 약한 상판 제외',
    passLabel: '속이 꽉 찬 18T 목재 + 철제 프레임',
    passQuery: '두닷',
    passRx: /두닷|데스커|일룸|18T|22T|LPM|스틸\s*프레임/,
    desc: '겉만 시트지이고 속은 골판지 벌집이라 무거운 모니터·집게 거치 시 푹 꺼지는 가구',
    matchRx: /종이\s*벌집|허니콤|라그캅텐|모니터암\s*금지|상판\s*꺼짐/
  },
  {
    id: 'floor-bulky',
    nopeLabel: '바닥 자리 많이 차지하는 부피 큰 가구',
    shortChip: '바닥 자리 큰 가구 제외',
    passLabel: '문 뒤 걸이 · 틈새 밀착 슬림 가구',
    passQuery: '슬림',
    passRx: /슬림|도어후크|문걸이|틈새|저상|콤팩트|폴딩/,
    desc: '좁은 원룸이나 복층에서 방문 열림이나 걷는 통로를 막기 쉬운 제품',
    matchRx: /리클라이너|스탠드\s*전신거울|깊이\s*55cm|공간\s*차지|뒷공간|코너\s*책상/
  },
  {
    id: 'rust-suction',
    nopeLabel: '물기 녹 · 습기 떨어짐 주의 욕실템',
    shortChip: '녹·흡착 추락 위험 제외',
    passLabel: '녹 안 스는 스텐304 · 빨아 쓰는 매트',
    passQuery: '스텐304',
    passRx: /스텐304|SUS304|소프트\s*규조토|실리콘|물빠짐/,
    desc: '습한 욕실에서 흡착판이 툭 떨어지거나 물때·곰팡이·녹이 빨리 생기는 소재',
    matchRx: /흡착\s*욕실|흡착식|흡착\s*선반|하드\s*규조토|물곰팡이|녹\s*발생|물기.*변색/
  },
  {
    id: 'tension-fall',
    nopeLabel: '짐 무거우면 무너지기 쉬운 천장 압축봉',
    shortChip: '약한 압축봉 고정 제외',
    passLabel: '바닥에서 받쳐주는 튼튼한 선반 · 옷장',
    passQuery: '서랍',
    passRx: /서랍|책장|옷장|스틸\s*모듈|캐비닛/,
    desc: '옷·짐 무게나 석고보드 천장 유격 때문에 기울어지거나 쿵 쓰러질 위험이 있는 구조',
    matchRx: /압축\s*가벽|압축봉\s*행거|압축봉.*무너|석고보드.*함몰/
  }
];

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
  '무타공 압축봉 행거': { dbId: 'comet-tension-rod' },
  '점착식 시트지 벽지': { dbId: 'adhesive-wallpaper-sheet' },
  '흡착 욕실 선반': { dbId: 'suction-corner-rack' },
  '부클레 패브릭 소파': { dbId: 'mongbijou-boucle' },
  '스텐304 압축 욕실선반': { dbId: 'ss304-tension-bath-rod' },
  '사이잘룩 단모 러그': { dbId: 'sisal-look-rug' },
  '꼭꼬핀 쉬폰 커튼': { dbId: 'pin-sheer-curtain' },
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
    name: '넓고 트여 보이는 느낌',
    wishShort: '방이 넓어 보였으면 좋겠어요',
    linkedMoods: '화이트 미니멀 / 모노 · 스틸',
    summary: '평수 대비 시야가 트여야 답답하지 않은 구조예요. 바닥이 드러나는 슬림 프레임 가구와 밝은 톤 베이스를 유지하는 것이 핵심입니다.'
  },
  storage: {
    id: 'storage',
    name: '수납 공간이 넉넉한 방',
    wishShort: '평수 대비 수납이 많았으면 좋겠어요',
    linkedMoods: '내추럴 오크 / 화이트 미니멀',
    summary: '작은 평수에서 수납 효율을 최대한 뽑아야 하는 조건이에요. 전면이 가려지는 도어형 수납장과 침대 하부 수납으로 시각적 어수선함을 줄이는 게 유리합니다.'
  },
  moodlight: {
    id: 'moodlight',
    name: '은은한 조명과 아늑한 분위기',
    wishShort: '너무 밝지 않고 무드등 위주로 아늑했으면 해요',
    linkedMoods: '월넛 · 미드센추리 / 세이지 · 테라코타',
    summary: '저녁 휴식감과 간접조명 무드가 중요한 공간이에요. 2700K 확산광 스탠드와 내추럴·월넛 계열 질감을 매치하면 눈이 훨씬 편해집니다.'
  },
  easycare: {
    id: 'easycare',
    name: '청소와 관리가 편한 방',
    wishShort: '청소와 관리가 쉬웠으면 좋겠어요',
    linkedMoods: '버터 · 파스텔 / 화이트 미니멀',
    summary: '청소·세탁 스트레스를 줄여야 오래 정돈되는 생활 패턴이에요. 커버 분리 세탁이 가능한 패브릭과 틈새 먼지가 적은 완제품 가구가 잘 맞습니다.'
  }
};

export const TASTE_INSIGHTS = {
  plant: {
    label: '식물 · 화분 포인트',
    detail: '무난한 가구들 사이에 싱그러운 초록 잎과 흙 화분 하나를 둬서 방에 생기를 불어넣는 스타일이에요.'
  },
  object: {
    label: '원목·패브릭 질감 포인트',
    detail: '발에 닿는 도톰한 러그나 원목·천 소재처럼 손끝에 닿을 때 기분 좋은 포근한 질감을 중시하는 스타일이에요.'
  },
  moodlight: {
    label: '따뜻한 간접조명 포인트',
    detail: '큰 가구는 담백하게 두고, 형광등을 끈 뒤 따뜻한 단스탠드·간접등 불빛으로 밤 분위기를 채우는 스타일이에요.'
  },
  tableware: {
    label: '컵 · 그릇 · 색감 포인트',
    detail: '매일 손에 닿는 머그컵, 유리잔, 작은 트레이에 톡톡 튀는 색감을 얹어 일상의 만족감을 챙기는 스타일이에요.'
  },
  minimal: {
    label: '비워두는 여백 중심',
    detail: '불필요한 소품은 최대한 줄이고, 바닥과 책상이 훤히 비어 보이는 깔끔함 그 자체에서 편안함을 느끼는 스타일이에요.'
  }
};

export const SPACE_MBTI_TYPES = [
  {
    id: 'minimalist',
    code: '여백이 편한 미니멀 스타일',
    headline: '여백과 깔끔함에서 마음이 편해지는 타입',
    summary: '물건이 적고 시야가 탁 트여 있을수록 편안함을 느끼는 스타일이에요. 가구는 도어가 닫히는 수납 위주로 고르고, 색상은 최대 2가지만 남기면 방이 훨씬 넓어 보여요.'
  },
  {
    id: 'maximal',
    code: '취향 소품이 많은 맥시멀 스타일',
    headline: '예쁜 소품과 취향으로 방을 채울수록 행복한 타입',
    summary: '무조건 비우기보다 내가 좋아하는 그릇, 컵, 조명, 포스터가 눈에 보일 때 기분이 좋아지는 스타일이에요. 오픈 선반과 가림 박스를 1:1 비율로 섞어 두면 정돈되면서도 취향을 잘 살릴 수 있어요.'
  },
  {
    id: 'texture',
    code: '원목·패브릭 질감 중심 스타일',
    headline: '나무·천·흙처럼 따뜻한 촉감에서 만족감을 느끼는 타입',
    summary: '차가운 플라스틱이나 반짝이는 소재보다 원목 가구, 도톰한 면 이불, 도자기 컵처럼 손끝에 닿는 부드럽고 포근한 질감을 좋아해요. 촉감이 살아 있는 소품 하나만 더해도 방 분위기가 확 살아납니다.'
  },
  {
    id: 'green',
    code: '식물과 자연 색감 중심 스타일',
    headline: '식물과 자연 색감에서 쉼을 얻는 타입',
    summary: '바깥 풍경이 들어오듯 방 안에 초록 잎과 자연스러운 색이 있을 때 가장 편안함을 느껴요. 침대 옆이나 창가에 관리 쉬운 화분 1~2개만 두어도 방 전체가 카페처럼 달라집니다.'
  },
  {
    id: 'color',
    code: '작은 소품 컬러 포인트 스타일',
    headline: '작은 색감 포인트로 기분을 바꾸는 타입',
    summary: '큰 가구는 무난하고 질리지 않는 톤으로 고르되, 머그컵·쿠션·단스탠드 같은 작은 소품에서 색감을 즐기는 스타일이에요. 계절마다 소품 색만 바꿔줘도 새로 이사 온 기분을 낼 수 있어요.'
  },
  {
    id: 'modern',
    code: '선과 마감이 깔끔한 모던 스타일',
    headline: '군더더기 없는 직선과 정돈된 분위기를 좋아하는 타입',
    summary: '알록달록한 장식보다 모노 스틸·화이트처럼 선이 깔끔하게 떨어지는 실용적 공간에서 안정감을 느껴요. 전선과 생활용품을 케이스에 깔끔히 숨겨주면 완성도가 훨씬 올라갑니다.'
  },
  {
    id: 'lighting',
    code: '따뜻한 간접조명 중심 스타일',
    headline: '따뜻한 단스탠드와 간접 불빛으로 방 분위기를 만드는 타입',
    summary: '큰 가구는 담백하게 두고 천장 형광등을 끈 뒤, 2700K 전구색 단스탠드나 집게 조명 하나로 분위기를 살리는 스타일이에요. 눈부심 없는 갓 조명과 콘센트 동선만 맞춰도 집이 훨씬 아늑해집니다.'
  }
];

export const QUIZ_QUESTIONS = [
  // ==================== STEP 1. 공간 · 구조 · 치수 (1~6) ====================
  {
    id: 'q1',
    chapter: 'STEP 1 · 공간·구조',
    title: '대략적인 방 평수와 구조는 어느 정도인가요?',
    reasonHint: '소파·대형 거울·책상 깊이 허용 기준을 잡는 첫 번째 지표예요.',
    options: [
      { label: '아담한 미니 원룸 (4~5평 이하 · 동선 최우선)', pyeong: '4~5평 이하', scores: { spaceStress: 14, dustRisk: 3 } },
      { label: '보통 크기 원룸 (6~7평 · 침대+책상 기본)', pyeong: '6~7평', scores: { spaceStress: 8, dustRisk: 2 } },
      { label: '복층 원룸 (층고·사다리 계단 동선 고려)', pyeong: '복층 원룸', isDuplex: true, scores: { spaceStress: 14, assemblyRisk: 6, dustRisk: 4 } },
      { label: '여유 있는 원룸·분리형 (8~10평 · 소파 가능)', pyeong: '8~10평', scores: { spaceStress: 3 } },
      { label: '1.5룸 · 투룸 이상 (11평+ · 공간 분리 여유)', pyeong: '11평 이상', scores: { spaceStress: 1 } }
    ]
  },
  {
    id: 'q2',
    quickKeep: false,
    chapter: 'STEP 1 · 공간·구조',
    title: '현관문·방문 앞과 침대 사이 통로 폭은 어떤가요?',
    reasonHint: '보행 폭 60cm가 안 나오면 스탠드 거울·의자 다리가 바로 NOPE!가 됩니다.',
    options: [
      { label: '문 열면 바로 침대·책상 (통로 60cm 미만)', narrowPath: true, scores: { spaceStress: 12 } },
      { label: '사람 한 명 지나다니기 무난함 (60~80cm)', scores: { spaceStress: 5 } },
      { label: '가구 놓아도 통로가 넉넉함 (80cm 이상)', scores: { spaceStress: 1 } }
    ]
  },
  {
    id: 'q3',
    quickKeep: false,
    chapter: 'STEP 1 · 공간·구조',
    title: '방의 천장 높이와 창문 크기는 어떤 편인가요?',
    reasonHint: '압축봉 행거·블라인드·커튼 길이와 결로 관리 난이도가 달라져요.',
    options: [
      { label: '천장이 낮거나 창문이 작아 답답한 편', ceilingLow: true, scores: { smellRisk: 6, spaceStress: 4 } },
      { label: '일반 원룸 표준 천장고 · 보통 창문', scores: { spaceStress: 2 } },
      { label: '층고 높음 또는 베란다·큰 통창 있음', hasFullWindow: true, scores: { depositRisk: 3, dustRisk: 2 } }
    ]
  },
  {
    id: 'q4',
    quickKeep: false,
    chapter: 'STEP 1 · 공간·구조',
    title: '세탁기와 빨래 건조 공간은 어디에 있나요?',
    reasonHint: '실내 건조가 잦으면 패브릭·러그·수납장 습기 곰팡이 위험이 올라갑니다.',
    options: [
      { label: '방 안/화장실 앞 세탁기 · 베란다 없음 (실내 건조)', needsIndoorDrying: true, scores: { smellRisk: 9, fabricRisk: 7, spaceStress: 5 } },
      { label: '별도 베란다/다용도실 분리됨', scores: { smellRisk: 2 } },
      { label: '건조기 보유 또는 공용 세탁실 이용', scores: { smellRisk: 1 } }
    ]
  },
  {
    id: 'q5',
    quickKeep: false,
    chapter: 'STEP 1 · 공간·구조',
    title: '현재 방에 기본 옵션 가구가 얼마나 있나요?',
    reasonHint: '무옵션이면 대형 가구 조립·운반 리스크까지, 풀옵션이면 소품·수납 위주로 판독해요.',
    options: [
      { label: '무옵션 (침대·책상·옷장 직접 사야 함)', optionLevel: 'none', scores: { assemblyRisk: 7, spaceStress: 4 } },
      { label: '반옵션 (옷장·에어컨 등 일부만 있음)', optionLevel: 'partial', scores: { assemblyRisk: 3, spaceStress: 2 } },
      { label: '풀옵션 (큰 가구 다 있고 소품·선반 위주)', optionLevel: 'full', scores: { dustRisk: 2, depositRisk: 2 } }
    ]
  },
  {
    id: 'q6',
    chapter: 'STEP 1 · 공간·구조',
    title: '방 바닥재 재질·톤은 무엇인가요?',
    reasonHint: '이미지에서 내 방 바닥과 가장 가까운 재질·톤을 탭하세요.',
    visualGrid: true,
    options: [
      { label: 'PVC 장판 (난방 열 변색·가구 찍힘 주의)', shortTitle: 'PVC 장판', visualKey: 'floor-jangpan', swatches: ['#F2E2BA', '#DFC893'], floorMaterial: 'jangpan', scores: { depositRisk: 6, fabricRisk: 4 } },
      { label: '강마루·온돌마루 (물기·의자 바퀴 긁힘 주의)', shortTitle: '강마루 · 원목톤', visualKey: 'floor-wood', swatches: ['#D2A779', '#B48453'], floorMaterial: 'wood', scores: { depositRisk: 6, assemblyRisk: 2 } },
      { label: '타일 · 데코타일 (차가움·줄눈 먼지)', shortTitle: '타일 · 데코타일', visualKey: 'floor-tile', swatches: ['#EEF0F2', '#CFD4D9'], floorMaterial: 'tile', scores: { dustRisk: 3 } }
    ]
  },

  // ==================== STEP 2. 계약 · 건물 · 환경 (7~12) ====================
  {
    id: 'q7',
    chapter: 'STEP 2 · 환경·계약',
    title: '계약 형태와 벽면 타공(못질) 허용 범위는?',
    reasonHint: '전월세 못질 금지는 블라인드·벽선반·시트지 판정을 NOPE!로 바꾸는 기준입니다.',
    options: [
      { label: '월세·전세 (못질·접착 시트지 절대 불가)', contractLabel: '월세·전세 (못질 금지)', isTenant: true, scores: { depositRisk: 14, spaceStress: 4 } },
      { label: '투룸·빌라 (꼭꼬핀 정도만 허용)', contractLabel: '투룸·빌라 (꼭꼬핀 가능)', isTenant: true, scores: { depositRisk: 7, spaceStress: 2 } },
      { label: '자가 또는 타공 자유로운 환경', contractLabel: '자가 (타공 자유)', isOwner: true, scores: { depositRisk: 1 } }
    ]
  },
  {
    id: 'q8',
    chapter: 'STEP 2 · 환경·계약',
    title: '내 방 벽지 마감은 어떤 재질인가요?',
    reasonHint: '실크벽지에 3M 코맨드·폼테이프를 붙이면 퇴실 때 벽지가 통째로 뜯겨요.',
    options: [
      { label: '실크벽지 (매끈·도톰한 비닐 질감 · 테이프 뜯김 위험)', wallMaterial: 'silk', scores: { depositRisk: 8 } },
      { label: '합지벽지 (얇은 종이 질감 · 습기·오염 취약)', wallMaterial: 'paper', scores: { depositRisk: 5, smellRisk: 4 } },
      { label: '페인트 도장 · 콘크리트 · 잘 모름', wallMaterial: 'paint', scores: { depositRisk: 2 } }
    ]
  },
  {
    id: 'q9',
    chapter: 'STEP 2 · 환경·계약',
    title: '층수와 엘리베이터 유무는 어떤가요?',
    reasonHint: '엘리베이터 없는 계단집엔 40kg 조립 서랍장·원목 가구를 걸러내야 합니다.',
    options: [
      { label: '반지하 · 1층 (습기·외풍·시선 차단 중요)', floorEnv: 'damp', isGroundFloor: true, hasMoistureRisk: true, scores: { smellRisk: 10, fabricRisk: 6 } },
      { label: '2~4층 빌라 · 엘리베이터 없음 (계단 운반)', floorEnv: 'stairs', noElevator: true, scores: { assemblyRisk: 9, depositRisk: 3 } },
      { label: '엘리베이터 있는 중·고층', floorEnv: 'elev', scores: { smellRisk: 2 } }
    ]
  },
  {
    id: 'q10',
    quickKeep: false,
    chapter: 'STEP 2 · 환경·계약',
    title: '평소 방의 채광과 맞통풍 환기 상태는?',
    reasonHint: '환기가 안 되는 방은 패브릭·하드 규조토·접이식 매트리스에 곰팡이가 생겨요.',
    options: [
      { label: '북향·골목 막힘 · 창이 작아 꿉꿉함', hasMoistureRisk: true, scores: { smellRisk: 12, fabricRisk: 8 } },
      { label: '보통이나 겨울·미세먼지 땐 창을 잘 안 엶', scores: { smellRisk: 6, fabricRisk: 4 } },
      { label: '남향·동향 햇빛 좋고 맞통풍 잘 됨', scores: { smellRisk: 1, fabricRisk: 1 } }
    ]
  },
  {
    id: 'q11',
    quickKeep: false,
    chapter: 'STEP 2 · 환경·계약',
    title: '외부 소음이나 창문 우풍(단열)은 어떤 편인가요?',
    reasonHint: '외풍·소음이 크면 블라인드 대신 두꺼운 형상기억 암막커튼+문풍지가 필수예요.',
    options: [
      { label: '대로변 소음 또는 겨울 창문 우풍이 심함', needsInsulation: true, scores: { fabricRisk: 3, smellRisk: 3 } },
      { label: '보통 수준', scores: { smellRisk: 1 } },
      { label: '이중창이고 조용·따뜻한 편', scores: {} }
    ]
  },
  {
    id: 'q12',
    quickKeep: false,
    chapter: 'STEP 2 · 환경·계약',
    title: '향후 이 집에서 얼마나 거주할 계획인가요?',
    reasonHint: '1~2년 내 이사 예정이면 분해 시 망가지는 PB/수납침대는 NOPE!입니다.',
    options: [
      { label: '1년 내외 단기 거주 · 자주 이사 예정', frequentMover: true, scores: { depositRisk: 8, assemblyRisk: 6, spaceStress: 4 } },
      { label: '2년 계약 기준 거주 예정', scores: { depositRisk: 4, assemblyRisk: 3 } },
      { label: '3년 이상 장기 거주 계획', scores: { depositRisk: 1, assemblyRisk: 1 } }
    ]
  },

  // ==================== STEP 3. 생활 · 관리 · 신체 (13~19) ====================
  {
    id: 'q13',
    chapter: 'STEP 3 · 생활·관리',
    title: '함께 사는 가족·반려동물·알러지 조건이 있나요?',
    reasonHint: '반려동물·비염이 있으면 털 긴 러그·부클레·오픈 행거는 즉시 피할 품목이 됩니다.',
    options: [
      { label: '혼자 거주 · 반려동물/비염 없음', livingFlag: 'solo', scores: { dustRisk: 1 } },
      { label: '고양이 · 강아지 반려동물과 함께 삼', livingFlag: 'pet', hasPet: true, scores: { dustRisk: 14, fabricRisk: 14, smellRisk: 6 } },
      { label: '비염 · 먼지 알러지가 있어 먼지에 예민함', livingFlag: 'allergy', hasAllergy: true, scores: { dustRisk: 16, fabricRisk: 8 } },
      { label: '2인 거주 (짐·옷·보행 동선 2배 고려)', livingFlag: 'couple', isCouple: true, scores: { spaceStress: 12, dustRisk: 5 } }
    ]
  },
  {
    id: 'q14',
    chapter: 'STEP 3 · 생활·관리',
    title: '방 안에서 주로 하는 생활 패턴을 모두 골라주세요',
    reasonHint: '복수 선택한 패턴에 맞춰 책상 강도·패브릭 방수·바닥 여백 가중치를 계산해요.',
    multiSelect: true,
    maxSelect: 3,
    options: [
      { label: '재택근무 · 공부 · 게임 (책상·의자 중요)', activity: '재택·집중 작업', scores: { assemblyRisk: 4, spaceStress: 3 } },
      { label: '휴식 · 수면 · OTT 시청 (침대·소파 중요)', activity: '휴식·수면', scores: { fabricRisk: 5, smellRisk: 3 } },
      { label: '배달음식 · 홈카페 · 요리 (냄새·얼룩 관리)', activity: '홈카페·배달·요리', scores: { fabricRisk: 9, smellRisk: 10 } },
      { label: '홈트 · 스트레칭 (넓은 바닥 여백 필수)', activity: '홈트·바닥 생활', needsFloorSpace: true, scores: { spaceStress: 10, dustRisk: 3 } }
    ]
  },
  {
    id: 'q15',
    quickKeep: false,
    chapter: 'STEP 3 · 생활·관리',
    title: '방 안에서 배달음식이나 요리를 얼마나 자주 먹나요?',
    reasonHint: '주방 미분리 원룸에서 잦은 조리는 세탁 불가 패브릭 소파·부클레에 치명적이에요.',
    options: [
      { label: '거의 매일 방 안에서 식사·배달음식 해결', scores: { fabricRisk: 12, smellRisk: 12 } },
      { label: '주 2~3회 간단 식사·커피 위주', scores: { fabricRisk: 5, smellRisk: 5 } },
      { label: '거의 안 먹거나 주방이 문으로 분리됨', scores: { fabricRisk: 1, smellRisk: 1 } }
    ]
  },
  {
    id: 'q16',
    quickKeep: false,
    chapter: 'STEP 3 · 생활·관리',
    title: '평소 청소기·물걸레질은 얼마나 자주 하시나요?',
    reasonHint: '주 1회 이하라면 오픈 선반·우드 블라인드·샤기 러그는 먼지가 금방 쌓여요.',
    options: [
      { label: '주 1회 이하 또는 생각날 때 몰아서 청소', scores: { dustRisk: 14, fabricRisk: 6 } },
      { label: '주 2~3회 꾸준히 청소기 돌림', scores: { dustRisk: 6, fabricRisk: 3 } },
      { label: '로봇청소기 또는 거의 매일 관리', scores: { dustRisk: 1, fabricRisk: 1 } }
    ]
  },
  {
    id: 'q17',
    chapter: 'STEP 3 · 생활·관리',
    title: '대형 러그나 이불 빨래할 세탁기 여건은 어떤가요?',
    reasonHint: '9kg 이하 원룸 세탁기면 두꺼운 러그·커버는 집에서 빨 수 없어 코인세탁소행이에요.',
    options: [
      { label: '9kg 이하 소형 세탁기 (두꺼운 러그·이불 불가)', smallWasher: true, scores: { fabricRisk: 8, dustRisk: 4 } },
      { label: '12kg 이상 대형 세탁기 또는 건조기 보유', scores: { fabricRisk: 2 } },
      { label: '집 근처 코인세탁소 자주 이용하는 편', scores: { fabricRisk: 3 } }
    ]
  },
  {
    id: 'q18',
    quickKeep: false,
    chapter: 'STEP 3 · 생활·관리',
    title: '선반·행거가 오픈돼서 물건이 보이면 스트레스를 받나요?',
    reasonHint: '시각적 피로가 크면 오픈 행거 대신 도어형 수납장·불투명 박스만 추천합니다.',
    options: [
      { label: '매우 거슬림 · 무조건 문 달린 수납으로 가리고 싶음', visualClutterSensitive: true, scores: { dustRisk: 6, spaceStress: 4 } },
      { label: '정리만 돼 있으면 괜찮은 편', scores: { dustRisk: 2 } },
      { label: '옷·소품이 예쁘게 진열된 오픈 인테리어 선호', scores: { dustRisk: 3 } }
    ]
  },
  {
    id: 'q19',
    chapter: 'STEP 3 · 생활·관리',
    title: '평소 방에서 가장 오래 취하는 자세는 무엇인가요?',
    reasonHint: '치수 탭의 휴먼스케일 도면(책상 vs 좌식 vs 침대형)과 자동 연동됩니다.',
    options: [
      { label: '의자 + 책상 위주 입식 생활', postureMode: 'desk', scores: { assemblyRisk: 2 } },
      { label: '바닥 좌식 테이블 + 쿠션 생활 선호', postureMode: 'floor', scores: { spaceStress: 3 } },
      { label: '침대·저상 소파 위 멀티 생활', postureMode: 'bed', scores: { fabricRisk: 3 } }
    ]
  },

  // ==================== STEP 4. 취향 · 색감 · 조명 (20~25) ====================
  {
    id: 'q20',
    quickKeep: false,
    chapter: 'STEP 4 · 취향·무드',
    title: '내 방을 꾸밀 때 가장 바라는 1순위 목표는?',
    reasonHint: '톤 매처 추천 순위와 방 배색 비율 가중치를 결정해요.',
    options: [
      { label: '평수보다 방이 훤히 넓어 보이고 탁 트였으면 좋겠어요', wishId: 'spacious', scores: { spaceStress: 2 } },
      { label: '작은 방이지만 수납 공간만큼은 최대한 많았으면 좋겠어요', wishId: 'storage', scores: { spaceStress: 4, dustRisk: 2 } },
      { label: '너무 밝은 불빛보다 무드등 위주로 아늑한 분위기 내고 싶어요', wishId: 'moodlight', scores: { spaceStress: 1 } },
      { label: '깔끔하고 관리 쉬워서 청소 스트레스가 가장 적었으면 해요', wishId: 'easycare', scores: { dustRisk: 1 } }
    ]
  },
  {
    id: 'q21',
    chapter: 'STEP 4 · 취향·무드',
    title: '원하는 방 색 조합 · 톤 이미지를 고르세요',
    reasonHint: '긴 설명 없이 사진 느낌으로 바로 골라주세요. 톤 매처에 즉시 연결됩니다.',
    visualGrid: true,
    options: [
      { label: '화이트 미니멀 (밝고 훤히 넓어 보이는 방)', shortTitle: '화이트 미니멀', visualKey: 'white-minimal', swatches: ['#FAF9F6', '#EAE5DC', '#2C2523'], toneId: 'white-minimal', scores: { dustRisk: 2 } },
      { label: '내추럴 오크 (따뜻하고 포근한 원목 무드)', shortTitle: '내추럴 오크', visualKey: 'oak-natural', swatches: ['#FAF6EE', '#CFA676', '#6D8658'], toneId: 'oak-natural', scores: { dustRisk: 3 } },
      { label: '월넛 · 미드센추리 (짙은 월넛과 레트로 포인트)', shortTitle: '월넛 · 미드센추리', visualKey: 'walnut-vintage', swatches: ['#F2EDE3', '#5E3F2E', '#D15B34'], toneId: 'walnut-vintage', scores: { dustRisk: 4, spaceStress: 3 } },
      { label: '모노 · 스틸 (선이 반듯한 무채색·스틸 무드)', shortTitle: '모노 · 스틸', visualKey: 'steel-modern', swatches: ['#F5F7F8', '#202326', '#2557B8'], toneId: 'steel-modern', scores: { dustRisk: 5, assemblyRisk: 2 } },
      { label: '버터 · 파스텔 (연노랑·소라색의 생기 있는 방)', shortTitle: '버터 · 파스텔', visualKey: 'butter-pastel', swatches: ['#FFFDF4', '#F7DF8A', '#87A9D6'], toneId: 'butter-pastel', scores: { dustRisk: 3 } },
      { label: '세이지 · 테라코타 (차분한 그린과 테라코타 무드)', shortTitle: '세이지 · 테라코타', visualKey: 'sage-terracotta', swatches: ['#F5F3EC', '#889E81', '#C86D51'], toneId: 'sage-terracotta', scores: { dustRisk: 3 } }
    ]
  },
  {
    id: 'q22',
    quickKeep: false,
    chapter: 'STEP 4 · 취향·무드',
    title: '가장 끌리는 가구·소품 질감은?',
    reasonHint: '소재별 변형·먼지·열기 내구성 기준과 연결됩니다.',
    visualGrid: true,
    options: [
      { label: '시원하고 깔끔한 스틸 · 유리 · 매트 화이트', shortTitle: '스틸 · 매트 화이트', visualKey: 'mat-steel', swatches: ['#FFFFFF', '#B6C0C9', '#2557B8'], materialPref: 'steel', scores: { assemblyRisk: 3 } },
      { label: '따뜻하고 포근한 원목 · 오크 · 라탄', shortTitle: '내추럴 우드 · 라탄', visualKey: 'mat-wood', swatches: ['#F8F3E8', '#CFA676', '#B08655'], materialPref: 'wood', scores: { dustRisk: 3 } },
      { label: '폭신한 패브릭 · 면 · 코튼 질감', shortTitle: '패브릭 · 코튼', visualKey: 'mat-fabric', swatches: ['#FFFFFF', '#F2ECE1', '#DED6C8'], materialPref: 'fabric', scores: { fabricRisk: 5, dustRisk: 4 } }
    ]
  },
  {
    id: 'q23',
    chapter: 'STEP 4 · 취향·무드',
    title: '방 분위기를 살릴 때 가장 기분 좋은 포인트는?',
    reasonHint: '공간 MBTI 성격 유형과 추천 소품을 매칭해 드려요.',
    options: [
      { label: '초록 식물 · 흙 화분 (생기 있는 자연 느낌)', tasteId: 'plant', scores: { spaceStress: 2 } },
      { label: '만졌을 때 기분 좋은 포근한 러그 · 패브릭 촉감', tasteId: 'object', scores: { spaceStress: 2 } },
      { label: '은은한 단스탠드 · 따뜻한 간접 무드등 불빛', tasteId: 'moodlight', scores: { spaceStress: 2 } },
      { label: '예쁜 머그컵 · 유리잔 · 톡톡 튀는 컬러 소품', tasteId: 'tableware', scores: { dustRisk: 1 } },
      { label: '장식 없이 훤히 비워진 깔끔함 그 자체', tasteId: 'minimal', scores: { spaceStress: 1 } }
    ]
  },
  {
    id: 'q24',
    quickKeep: false,
    chapter: 'STEP 4 · 취향·무드',
    title: '선호하는 저녁 조명 빛 톤을 골라보세요',
    reasonHint: '조명 색온도에 맞춰 확산광 스탠드·전구 추천이 달라집니다.',
    visualGrid: true,
    options: [
      { label: '천장 형광등 끄고 따뜻한 간접등·스탠드만 켜둠', shortTitle: '2700K 전구색 무드등', visualKey: 'light-mood', swatches: ['#FFD07B', '#8A572A', '#1E1814'], lightingPref: 'mood', scores: { spaceStress: 2 } },
      { label: '작업할 땐 환하게, 잘 때만 끔', shortTitle: '4000K 주백색 작업등', visualKey: 'light-bright', swatches: ['#FFFDF5', '#F6F3EA', '#D6D2C7'], lightingPref: 'bright', scores: {} },
      { label: '큰 신경 안 쓰고 기본 형광등 사용', shortTitle: '6500K 기본 주광등', visualKey: 'light-basic', swatches: ['#EFF4FA', '#FFFFFF', '#C5D4E8'], lightingPref: 'basic', scores: {} }
    ]
  },
  {
    id: 'q25',
    chapter: 'STEP 4 · 취향·무드',
    title: '가지고 있는 옷·책·소지품 양은 어느 정도인가요?',
    reasonHint: '짐이 많은데 오픈 행거·미니 수납을 고르면 1개월 안에 방이 무너져요.',
    options: [
      { label: '겨울 외투·옷·소품이 매우 많은 맥시멀 성향', density: 'maximal', scores: { spaceStress: 11, dustRisk: 7 } },
      { label: '필요한 것 위주로 적당히 두고 사는 균형 성향', density: 'balanced', scores: { spaceStress: 5, dustRisk: 3 } },
      { label: '물건을 최소화하고 텅 비워두는 미니멀 성향', density: 'minimal', scores: { spaceStress: 1, dustRisk: 1 } }
    ]
  },

  // ==================== STEP 5. 구매 계획 · 예산 · 공구 (26~30) ====================
  {
    id: 'q26',
    chapter: 'STEP 5 · 구매·예산',
    title: '지금 새로 사거나 교체하려는 품목을 모두 골라주세요',
    reasonHint: '고르신 품목군에 해당하는 실제 함정(NOPE)과 대안(PASS)만 콕 집어 드려요.',
    multiSelect: true,
    maxSelect: 4,
    options: [
      { label: '책상 · 컴퓨터 의자 · 모니터암', targetItem: 'desk', scores: { assemblyRisk: 5, spaceStress: 3 } },
      { label: '행거 · 압축봉 · 오픈 선반', targetItem: 'hanger', scores: { dustRisk: 10, spaceStress: 4 } },
      { label: '러그 · 패브릭 소파 · 매트리스', targetItem: 'fabric', scores: { dustRisk: 6, fabricRisk: 10 } },
      { label: '블라인드 · 커튼 · 시트지 벽지', targetItem: 'wall_window', scores: { depositRisk: 10, dustRisk: 5 } },
      { label: '도어형 옷장 · 서랍장 · 수납함', targetItem: 'storage', scores: { assemblyRisk: 5, depositRisk: 2 } },
      { label: '전신거울 · 단스탠드 · 욕실 선반/발매트', targetItem: 'mirror_bath', scores: { spaceStress: 5, depositRisk: 4 } }
    ]
  },
  {
    id: 'q27',
    chapter: 'STEP 5 · 구매·예산',
    title: '책상에 무거운 모니터암이나 본체를 올릴 계획인가요?',
    reasonHint: '종이 벌집 심재 책상(라그캅텐 등) 함몰 위험을 가르는 결정적 질문이에요.',
    options: [
      { label: '네, 모니터암·듀얼모니터·본체 올려서 씀', heavyDeskLoad: true, scores: { assemblyRisk: 8 } },
      { label: '가벼운 노트북·필기·화장대 용도만 씀', scores: { assemblyRisk: 2 } },
      { label: '책상 없이 생활하거나 이미 튼튼한 책상 있음', scores: {} }
    ]
  },
  {
    id: 'q28',
    quickKeep: false,
    chapter: 'STEP 5 · 구매·예산',
    title: '품목 1개당 생각 중인 현실 예산대는?',
    reasonHint: '5만 원 이하 초저가 구간엔 시트지 들뜸·얇은 철제·흡착 낙하 함정이 집중돼 있어요.',
    options: [
      { label: '5만 원 이하 (부담 없는 가격 중심)', budgetTier: 'low', scores: { assemblyRisk: 7, depositRisk: 4 } },
      { label: '5~15만 원대 (가성비와 내구 균형)', budgetTier: 'mid', scores: { assemblyRisk: 3 } },
      { label: '15만 원 이상 (오래 쓸 튼튼한 스펙 우선)', budgetTier: 'high', scores: { assemblyRisk: 1 } }
    ]
  },
  {
    id: 'q29',
    chapter: 'STEP 5 · 구매·예산',
    title: '가구 조립이나 설치는 어느 정도까지 괜찮나요?',
    reasonHint: '설치·조립 부담 허용 범위에 따라 반제품 추천이 달라져요.',
    options: [
      { label: '완제품이나 기사님 방문 설치만 원해요 (직접 조립 X)', diySkill: 'none', scores: { assemblyRisk: 14, depositRisk: 2 } },
      { label: '혼자 15~30분 정도 간단한 조립까지는 괜찮아요', diySkill: 'basic', scores: { assemblyRisk: 6 } },
      { label: '전동드릴 있어서 큰 가구 셀프 조립도 문제없어요', diySkill: 'pro', scores: { assemblyRisk: 1 } }
    ]
  },
  {
    id: 'q30',
    quickKeep: false,
    chapter: 'STEP 5 · 구매·예산',
    title: '가구 산 뒤 가장 피하고 싶은 상황은?',
    reasonHint: '최종 처방전 타입과 최우선 경고 1순위를 결정합니다.',
    options: [
      { label: '벽지·장판 손상으로 퇴실 보증금 깎이는 것', worstFear: 'deposit', scores: { depositRisk: 8 } },
      { label: '먼지·세탁 관리가 어려워서 청소 부담이 커지는 것', worstFear: 'dust', scores: { dustRisk: 8, fabricRisk: 5 } },
      { label: '흔들리고 삐걱대다 금방 망가지는 것', worstFear: 'trouble', scores: { assemblyRisk: 8 } },
      { label: '동선이 막혀서 방이 좁고 답답해지는 것', worstFear: 'space', scores: { spaceStress: 8 } }
    ]
  }
];

export const QUIZ_RESULTS = [
  {
    id: 'pet-allergy-shield',
    code: 'TYPE 01',
    condition: (s, ctx) => (ctx.hasPet || ctx.hasAllergy) && (s.dustRisk >= 20 || s.fabricRisk >= 16),
    badge: '털·먼지 관리에 특히 민감한 방',
    tagline: '일반 패브릭·러그를 들이면 털과 먼지가 금방 쌓여 관리가 힘들어지는 조건이에요',
    top3: ['장모 샤기·부클레 절대 금지', '단모 워셔블·도어형 수납 통일', '주 1회 침구·러그 탈취 루틴'],
    avoidItems: ['장모 샤기 러그', '부클레 패브릭 소파', '오픈 파이프 행거'],
    altItems: ['단모 워셔블 러그', '이케아 클리판/쇠데르함', '도어형 옷장'],
    lifeTips: [
      { title: '털 안 박히는 단모·방수 직조만 고르기', desc: '부클레나 장모 러그 대신 청소기가 바로 지나가는 단모 폴리·생활방수 커버를 고르면 청소 시간이 1/3로 줄어요.', itemLabel: '워셔블 단모 러그', itemKeyword: '워셔블 단모 러그' },
      { title: '오픈 행거 대신 도어형/커버 씌우기', desc: '반려동물 털과 미세먼지는 노출된 옷감에 먼저 달라붙어요. 계절 옷만이라도 지퍼 커버나 도어 수납으로 막아주세요.', itemLabel: '지퍼 의류 커버 · 정전기 밀대', itemKeyword: '지퍼형 의류 커버' }
    ]
  },
  {
    id: 'deposit-silk-wall',
    code: 'TYPE 02',
    condition: (s, ctx) => (ctx.isTenant && ctx.wallMaterial === 'silk' && s.depositRisk >= 18) || (ctx.worstFear === 'deposit' && s.depositRisk >= 22),
    badge: '월세·벽지 원상복구 주의가 필요한 방',
    tagline: '못질·시트지·접착 테이프를 잘못 붙였다가 퇴실 수리비를 물기 쉬운 조건이에요',
    top3: ['실크벽지 위 접착 테이프 금지(꼭꼬핀만)', '시트지·우드블라인드 절대 제외', '입주 당일 하자 기록 카톡 전송'],
    avoidItems: ['점착식 시트지 벽지', '3M 코맨드(실크벽지)', '우드 블라인드'],
    altItems: ['꼭꼬핀 쉬폰 커튼', '무인양품 PP 서랍', '스텐304 압축 욕실선반'],
    lifeTips: [
      { title: '실크벽지엔 테이프 말고 꼭꼬핀', desc: '폼테이프나 점착 시트지는 실크벽지 코팅을 함께 뜯어내 도배비 공제 1순위예요. 작은 포스터·커튼은 꼭꼬핀이 가장 안전합니다.', itemLabel: '꼭꼬핀 · 벽지 보수 스티커', itemKeyword: '꼭꼬핀 벽걸이' },
      { title: '입주 당일 하자 사진 + 카톡 기록 남기기', desc: '루틴 탭의 입주 점검표를 작성해 집주인에게 첫날 문자로 남겨두면 기존 흠집으로 억울하게 공제당할 일을 막을 수 있어요.', itemLabel: '가구 다리 펠트 보호 패드', itemKeyword: '가구 다리 보호 패드' }
    ]
  },
  {
    id: 'humid-ground-mold',
    code: 'TYPE 03',
    condition: (s, ctx) => (ctx.hasMoistureRisk || ctx.isGroundFloor || ctx.needsIndoorDrying) && s.smellRisk >= 18,
    badge: '환기·습기 관리가 중요한 방',
    tagline: '환기가 약하고 습기가 머물기 쉬워 바닥 매트·패브릭 관리에 신경 써야 해요',
    top3: ['바닥 직결 접이식 매트·하드 규조토 제외', '통풍 깔판 + 서큘레이터 환기', '욕실 흡착 대신 스텐304 압축선반'],
    avoidItems: ['하드 규조토 매트', '흡착 욕실 선반', '장모 샤기 러그'],
    altItems: ['소프트 규조토', '스텐304 압축 욕실선반', '사이잘룩 단모 러그'],
    lifeTips: [
      { title: '실내 빨래 건조 땐 창문+선풍기 15분', desc: '습기가 벽과 매트리스 밑에 고이지 않도록 샤워·빨래 직후 15분 환기 타이머를 돌리는 게 곰팡이 예방에 가장 효과적이에요.', itemLabel: '탁상 서큘레이터 · 제습제', itemKeyword: '저소음 탁상 서큘레이터' },
      { title: '돌 규조토 대신 세탁 가능한 소프트 매트', desc: '습한 욕실에선 하드 규조토가 금방 막히고 깨지기 쉬워요. 빨아 쓰는 소프트 규조토와 녹 안 스는 스텐304 선반이 안전합니다.', itemLabel: '워셔블 소프트 규조토 매트', itemKeyword: '소프트 규조토 발매트' }
    ]
  },
  {
    id: 'duplex-micro-path',
    code: 'TYPE 04',
    condition: (s, ctx) => (ctx.isDuplex || ctx.narrowPath || ctx.needsFloorSpace) && s.spaceStress >= 24,
    badge: '좁은 통로·동선 확보가 우선인 방',
    tagline: '바닥 면적 몇 십 cm만 낭비해도 문 열림과 걷는 동선이 바로 막히기 쉬워요',
    top3: ['바닥 다리 있는 스탠드 거울·조명 제외', '보행 폭 60cm·문 열림 반경 실측', '도어후크·클립형 공중 수납 활용'],
    avoidItems: ['스탠드 전신거울', '1인용 리클라이너', '오픈 선반'],
    altItems: ['도어후크 거울', '클립형 조명', '불투명 리빙박스'],
    lifeTips: [
      { title: '바닥에 내려놓지 말고 문·책상에 걸기', desc: '전신거울은 문 뒤에 거는 도어후크형, 조명은 책상 집게형을 고르면 바닥 면적 0cm로 같은 방이 훨씬 넓어 보여요.', itemLabel: '도어후크 전신거울 · 집게 조명', itemKeyword: '도어후크 전신거울' },
      { title: '주문 전 줄자로 통로 60cm 먼저 재기', desc: '복층이나 5평 이하에선 깊이 5cm 차이가 동선을 좌우해요. 치수 탭의 도면 치수와 실제 줄자 측정을 먼저 맞춰보세요.', itemLabel: '미니 줄자 · 틈새 서랍', itemKeyword: '틈새 리빙박스 서랍' }
    ]
  },
  {
    id: 'stair-heavy-ban',
    code: 'TYPE 05',
    condition: (s, ctx) => (ctx.noElevator || ctx.frequentMover) && (s.assemblyRisk >= 18 || s.depositRisk >= 16),
    badge: '이동·운반이 쉬운 가벼운 가구 추천',
    tagline: '40kg대 대형 합판 서랍장이나 분해가 어려운 침대는 이사할 때 부담이 커져요',
    top3: ['40kg+ 말름·브림네스 수납침대 제외', '모듈형 PP 서랍·완제품 우선', '재조립 시 헐거워지는 저가 PB 피하기'],
    avoidItems: ['이케아 말름·브림네스', '이케아 헬메르·알렉스·에케트', '허니콤 저가 MDF 책상'],
    altItems: ['무인양품 PP 서랍', '한샘 샘책장(기사 시공)', '두닷 콰트로'],
    lifeTips: [
      { title: '이사 갈 때 그대로 들고 가는 모듈 수납', desc: '무거운 원목·PB 서랍장은 분해하면 나사 구멍이 부서져 버리고 가는 경우가 많아요. 가벼운 PP 모듈 서랍이 이사비도 아껴줍니다.', itemLabel: '반투명·화이트 PP 모듈 서랍', itemKeyword: '모듈형 PP 서랍장' },
      { title: '엘리베이터 없는 집은 기사 설치 확인', desc: '무게 있는 책장·옷장은 계단 양중 비용이나 방문 시공 여부를 구매 상세페이지에서 반드시 먼저 체크하세요.', itemLabel: '미니 충전 전동드라이버', itemKeyword: '미니 충전식 전동드라이버' }
    ]
  },
  {
    id: 'desk-honeycomb-ban',
    code: 'TYPE 06',
    condition: (s, ctx) => ctx.heavyDeskLoad && (ctx.budgetTier === 'low' || s.assemblyRisk >= 14),
    badge: '모니터암 하중을 버티는 튼튼한 책상 필요',
    tagline: '얇고 가벼운 책상에 모니터암을 달면 상판이 꺼지거나 흔들리기 쉬워요',
    top3: ['속 빈 종이 벌집 심재 책상 절대 금지', 'E0 풀판 18T+ & 스틸 프레임 선택', '내 키 맞는 의자·책상 높이 맞춤'],
    avoidItems: ['허니콤 저가 MDF 책상', '저가 전자레인지 선반', '마켓비 MKB 캐비닛'],
    altItems: ['두닷 콰트로', '클립형 조명', '무인양품 PP 서랍'],
    lifeTips: [
      { title: '상판 심재가 풀판(PB/MDF 18T+)인지 확인', desc: '저가 입문 책상은 겉만 시트지고 속이 골판지 벌집인 경우가 많아 모니터암 클램프에 그대로 뚫려요. 스틸 하부 보강대를 꼭 보세요.', itemLabel: '모니터암 보강 플레이트', itemKeyword: '모니터암 보강 플레이트' },
      { title: '팔꿈치 90도 휴먼스케일 맞추기', desc: '치수 탭에 내 키를 입력하면 거북목·승모근 통증을 줄이는 적정 의자·책상·모니터 상단 높이가 바로 계산됩니다.', itemLabel: '멀티탭 케이블 정리 트레이', itemKeyword: '책상 하부 멀티탭 트레이' }
    ]
  },
  {
    id: 'dust-collector',
    code: 'TYPE 07',
    condition: (s, ctx) => s.dustRisk >= 26 && s.fabricRisk < 24,
    badge: '먼지 쌓이는 오픈 수납 피해야 할 방',
    tagline: '트여 있는 행거·선반을 고르면 먼지가 금방 쌓여 정리 스트레스가 커져요',
    top3: ['오픈 행거 → 커버·도어형 교체', '우드 블라인드·장모 러그 제외', '주 1회 10분 환기·청소 알람'],
    avoidItems: ['오픈 파이프 행거', '우드 블라인드', '오픈 선반'],
    altItems: ['도어형 옷장', '단모 워셔블 러그', '불투명 리빙박스'],
    lifeTips: [
      { title: '계절 옷만 지퍼 커버로 가려도 절반 해결', desc: '행거를 이미 두고 있다면 당장 안 입는 니트·외투만 커버를 씌워도 방 먼지와 어수선함이 확 줄어요.', itemLabel: '부직포 지퍼 의류 커버', itemKeyword: '지퍼형 의류 커버 행거' },
      { title: '자기 전 1분 정전기 청소포 훑기', desc: '청소기 돌리기 부담스러운 날엔 정전기 밀대로 바닥 모서리만 쓱 밀어줘도 먼지 뭉침을 막을 수 있어요.', itemLabel: '정전기 청소포 · 밀대 세트', itemKeyword: '정전기 청소포 밀대' }
    ]
  },
  {
    id: 'fabric-sponge',
    code: 'TYPE 08',
    condition: (s, ctx) => s.fabricRisk >= 26 || s.smellRisk >= 24 || (ctx.smallWasher && s.fabricRisk >= 18),
    badge: '세탁·환기 쉬운 패브릭 위주 추천',
    tagline: '냄새나 얼룩이 한 번 배면 작은 세탁기로는 빨기 어려워 관리 부담이 커져요',
    top3: ['커버 분리 불가 소파·대형 러그 금지', '집 세탁기 들어가는 단모·방수 원단', '식사 후 15분 환기 타이머'],
    avoidItems: ['비분리형 패브릭 소파', '장모 샤기 러그', '부클레 패브릭 소파'],
    altItems: ['이케아 클리판/쇠데르함', '단모 폴리 러그', '단모 워셔블 러그'],
    lifeTips: [
      { title: '세탁기 9kg 기준 맞춘 경량 패브릭', desc: '소형 세탁기에는 두꺼운 러그가 안 들어가 코인세탁소 비용이 계속 들어요. 물티슈로 닦이는 사이잘룩이나 얇은 단모 러그를 고르세요.', itemLabel: '패브릭 탈취·얼룩제거제', itemKeyword: '패브릭 얼룩제거제' },
      { title: '음식 먹고 10분 서큘레이터 창밖 환기', desc: '원룸에선 문만 여는 것보다 선풍기를 창밖으로 틀어 공기를 밀어내는 편이 냄새·유증기 배출이 훨씬 빨라요.', itemLabel: '저소음 탁상 서큘레이터', itemKeyword: '저소음 탁상 서큘레이터' }
    ]
  },
  {
    id: 'visual-minimal',
    code: 'TYPE 09',
    condition: (s, ctx) => ctx.visualClutterSensitive && s.dustRisk >= 16,
    badge: '물건이 안 보이게 가리는 수납 추천',
    tagline: '오픈 수납에 생활용품 색깔이 보이기 시작하면 방이 금방 어지러워 보여요',
    top3: ['오픈 행거·투명 서랍 제외', '화이트/단색 불투명 리빙박스 통일', '전선·멀티탭 박스 숨기기'],
    avoidItems: ['오픈 선반', '오픈 파이프 행거', '무타공 압축봉 행거'],
    altItems: ['도어형 옷장', '불투명 리빙박스', '무인양품 PP 서랍'],
    lifeTips: [
      { title: '같은 색 불투명 박스로 시선 정돈', desc: '물건이 많아도 겉으로 안 보이는 불투명 수납함 2~4개로 통일하면 방 전체가 호텔처럼 단정해 보여요.', itemLabel: '화이트 불투명 뚜껑 리빙박스', itemKeyword: '불투명 뚜껑 리빙박스' },
      { title: '전선·멀티탭만 가려도 시각 피로 절반 감소', desc: '바닥에 얽힌 충전선만 멀티탭 정리함으로 덮어줘도 좁은 방 인테리어 완성도가 올라갑니다.', itemLabel: '케이블 멀티탭 정리함', itemKeyword: '멀티탭 전선 정리함' }
    ]
  },
  {
    id: 'assembly-panic',
    code: 'TYPE 10',
    condition: (s, ctx) => s.assemblyRisk >= 22 || ctx.diySkill === 'none',
    badge: '조립 없이 바로 쓰는 완제품 추천',
    tagline: '부품이 많고 공구가 필요한 조립 가구는 시작부터 지치고 마감도 틀어지기 쉬워요',
    top3: ['철판·부품 많은 DIY 가구 거르기', '완제품·기사 방문설치 우선 선택', '필요시 USB 미니 전동드라이버 구비'],
    avoidItems: ['이케아 헬메르·알렉스·에케트', '마켓비 MKB 캐비닛', '허니콤 저가 MDF 책상'],
    altItems: ['무인양품 PP 서랍', '리바트 로넌·한샘 샘책장', '두닷 콰트로'],
    lifeTips: [
      { title: '완제품 서랍 & 기사 시공 책장 고르기', desc: '공구 없이 바로 쓰는 PP 서랍이나 방문설치 옵션이 있는 국내 브랜드 제품이 조립 스트레스와 흔들림을 동시에 막아줘요.', itemLabel: 'USB 충전 미니 전동드라이버', itemKeyword: '미니 충전식 전동드라이버' },
      { title: '나사 체결 시 70% 먼저 가조립', desc: '어쩔 수 없이 조립할 땐 처음부터 꽉 조이지 말고 전체 균형을 맞춘 뒤 마지막에 조여야 뒤틀리지 않아요.', itemLabel: '가구 수평 조절 펠트 패드', itemKeyword: '가구 수평 조절 패드' }
    ]
  },
  {
    id: 'maximal-storage-pro',
    code: 'TYPE 11',
    condition: (s, ctx) => ctx.density === 'maximal' && (ctx.wishId === 'storage' || s.spaceStress >= 18),
    badge: '짐이 많아 넉넉한 수납이 필요한 방',
    tagline: '옷·소품이 많은 편이라 수납 깊이와 버티는 하중을 못 맞추면 방이 금방 넘쳐요',
    top3: ['약한 압축봉 대신 바닥 지지형 수납', '수직 공간+불투명 박스 모듈화', '계절 옷 압축팩 분리 보관'],
    avoidItems: ['무타공 압축봉 행거', '오픈 파이프 행거', '1인용 리클라이너'],
    altItems: ['도어형 옷장', '불투명 리빙박스', '무인양품 PP 서랍'],
    lifeTips: [
      { title: '압축봉에 겨울 외투 10벌 걸지 않기', desc: '짐이 많은 분이 압축봉 행거를 쓰면 스프링이 못 버텨 새벽에 무너지기 쉬워요. 바닥 지지형 행거·도어 옷장이 안전합니다.', itemLabel: '대용량 의류 압축팩 · 리빙박스', itemKeyword: '대용량 불투명 리빙박스' },
      { title: '자주 쓰는 것 30%만 손 닿는 높이에', desc: '수납공간을 상·하단으로 나눠 비시즌 옷은 침대 하부·상단 박스로 올려야 매일 쓰는 동선이 유지돼요.', itemLabel: '침대 밑 슬림 리빙박스', itemKeyword: '침대밑 수납박스' }
    ]
  },
  {
    id: 'warm-lighting-curator',
    code: 'TYPE 12',
    condition: (s, ctx) => ctx.lightingPref === 'mood' && (ctx.wishId === 'moodlight' || ctx.tasteId === 'moodlight' || ctx.tasteId === 'object'),
    badge: '간접조명과 포근한 소재가 어울리는 방',
    tagline: '눈 시린 조명이나 자리만 차지하는 스탠드 대신 은은한 빛과 촉감이 중요한 방이에요',
    top3: ['눈 부신 LED 네온·싸구려 아크릴 제외', '2700~3000K 전구색 집게·단스탠드', '침대/책상 옆 최소 면적 배치'],
    avoidItems: ['스탠드 전신거울', '비분리형 패브릭 소파'],
    altItems: ['클립형 조명', '도어후크 거울', '이케아 클리판/쇠데르함'],
    lifeTips: [
      { title: '3000K 이하 전구색 + 유리/패브릭 갓', desc: '광원이 그대로 노출된 저가 조명은 눈이 시려 결국 안 켜게 돼요. 빛이 은은히 퍼지는 불투명 유리·집게형 조명이 실사용 만족도가 높아요.', itemLabel: '2700K 전구색 LED 전구 · 단스탠드', itemKeyword: '3000K 단스탠드 무드등' },
      { title: '무드 조명 둘 자리도 콘센트 먼저 확인', desc: '조명 선이 발에 걸리지 않도록 콘센트 위치와 동선을 맞추고 충전식 클립 조명을 섞으면 훨씬 깔끔해요.', itemLabel: '무선 충전식 집게 LED 조명', itemKeyword: '집게형 LED 스탠드 3000K' }
    ]
  },
  {
    id: 'budget-spec-hunter',
    code: 'TYPE 13',
    condition: (s, ctx) => ctx.budgetTier === 'low' && (s.dustRisk + s.depositRisk + s.assemblyRisk >= 32),
    badge: '저가 가구 내구도·마감 주의 필요',
    tagline: '싼 가격만 보고 샀다가 시트지 들뜸·흡착 추락으로 금방 다시 사기 쉬운 조건이에요',
    top3: ['1만원 미만 흡착·허니콤 저가템 거르기', '작은 소품만 저가, 핵심 가구는 스펙 확인', '최저평점 사진 리뷰 먼저 읽기'],
    avoidItems: ['흡착 욕실 선반', '허니콤 저가 MDF 책상', '하드 규조토 매트'],
    altItems: ['스텐304 압축 욕실선반', '소프트 규조토', '무인양품 PP 서랍'],
    lifeTips: [
      { title: '욕실·수납처럼 무게 걸리는 품목엔 초저가 피하기', desc: '흡착 선반이나 얇은 플라스틱 선반은 몇 달 만에 떨어져 깨지곤 해요. 만 원 더 써도 SUS304·튼튼한 스틸을 고르는 게 돈을 아끼는 길입니다.', itemLabel: 'SUS304 무타공 압축 선반', itemKeyword: '스텐304 욕실 압축선반' },
      { title: '결제 전 별점 1~2점 사진 리뷰 3개만 보기', desc: '예쁜 홍보 사진보다 한 달 뒤 들뜸·녹·흔들림이 찍힌 1점 리뷰를 확인하면 실패 확률이 절반 이하로 떨어져요.', itemLabel: '워셔블 소프트 규조토 매트', itemKeyword: '소프트 규조토 발매트' }
    ]
  },
  {
    id: 'survival-pro',
    code: 'TYPE 14',
    condition: () => true,
    badge: '관리와 실용성 균형이 잡힌 방',
    tagline: '예쁜 분위기도 챙기면서 관리·치수·보증금 기준까지 두루 살피는 조건이에요',
    top3: ['내 키 맞는 핵심 가구 스펙 고정', '사기 전 A vs B 비교 & 판독기 체크', '주기 알람 .ics 캘린더 연동'],
    avoidItems: ['허니콤 저가 MDF 책상', '하드 규조토 매트'],
    altItems: ['두닷 콰트로', '무인양품 PP 서랍', '소프트 규조토'],
    lifeTips: [
      { title: '새 매트리스·의자는 방수 커버로 수명 연장', desc: '좋은 가구일수록 방수 커버·다리 펠트 같은 작은 보호 장비만 추가해 줘도 오래 깨끗하게 쓰고 보증금 손실도 막아줍니다.', itemLabel: '생활방수 매트리스 커버', itemKeyword: '생활방수 매트리스 커버' },
      { title: '월 1회 필터·배수구 루틴 등록하기', desc: '루틴 탭의 .ics 파일을 캘린더에 넣어두면 청소 시기를 놓쳐 악취·먼지가 쌓이는 일을 깔끔하게 막을 수 있어요.', itemLabel: '배수구 발포 클리너', itemKeyword: '배수구 발포 클리너' }
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
  { id: 'cyc-waterfilter', title: '정수기(브리타) 필터 교체', everyDays: 28, tip: '사용량 무관 4주 교체' },
  { id: 'cyc-toothbrush', title: '칫솔 · 전동칫솔모 교체', everyDays: 90, tip: '3개월 주기 위생 교체' },
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

export const GAP_STORAGE_ZONES = [
  {
    id: 'under-bed',
    label: '침대·소파 밑',
    headline: '바닥 자리 0cm 쓰는 가장 큰 수납 빈틈',
    measureTip: '줄자가 없다면 500ml 생수병을 세워(약 21cm) 들어가면 여유 틈, 눕혀서(약 6.5cm) 두 개 높이면 13cm 전후예요.',
    options: [
      {
        id: 'under-12',
        label: '12cm 이하 (낮은 틈)',
        sub: '손바닥 세로보다 낮음',
        avoidText: '바퀴 달린 플라스틱 리빙박스(보통 18~22cm)와 철제 바스켓은 걸려서 안 들어가요.',
        passText: '10cm 안팎 지퍼형 부직포 보관함이나 진공 압축팩에 계절 이불·니트를 납작하게 넣어 쓰세요.',
        itemIds: ['vacuum-storage-bags', 'divided-underwear-box'],
        shopLabel: '10cm 침대 밑 납작 부직포 정리함',
        shopKeyword: '침대밑 슬림 부직포 이불정리함 10cm'
      },
      {
        id: 'under-18',
        label: '13~18cm (보통 틈)',
        sub: '생수병 눕힌 2개 높이',
        avoidText: '뚜껑이 위로 솟은 높은 리빙박스(20cm 이상)나 두꺼운 수납 서랍은 걸려요.',
        passText: '높이 15~16cm대 슬림 바퀴형 침대 밑 수납박스와 압축팩을 함께 쓰면 꺼내기도 편해요.',
        itemIds: ['underbed-sealed-box', 'vacuum-storage-bags'],
        shopLabel: '높이 15cm 슬림 침대밑 리빙박스',
        shopKeyword: '침대밑 수납박스 높이 15cm 바퀴'
      },
      {
        id: 'under-19plus',
        label: '19cm 이상 (여유 틈)',
        sub: '500ml 생수병이 서거나 넉넉함',
        avoidText: '오픈형 천 바구니만 넣으면 바닥 먼지가 그대로 쌓여 3개월 뒤 꺼내기 싫어져요.',
        passText: '밀폐 뚜껑이 있는 바퀴형 침대 밑 박스나 낮은 PP 서랍을 쓰면 먼지 없이 옷·이불을 넉넉히 넣어요.',
        itemIds: ['underbed-sealed-box', 'muji-pp-drawer', 'opaque-living-box-set'],
        shopLabel: '뚜껑 밀폐 바퀴형 침대밑 수납함',
        shopKeyword: '침대밑 밀폐 리빙박스 바퀴'
      }
    ]
  },
  {
    id: 'side-gap',
    label: '냉장고·책상 옆',
    headline: '15cm만 남아도 세로 수납이 한 줄 생겨요',
    measureTip: '성인 손 한 뼘이 약 19~20cm예요. 손 한 뼘이 꽉 끼면 18cm 이하, 손바닥 세로가 빡빡하면 12~15cm 틈새예요.',
    options: [
      {
        id: 'side-12',
        label: '12cm 이하 (초슬림 틈)',
        sub: '손바닥 폭 정도로 아주 좁음',
        avoidText: '시중 일반 틈새 트롤리(대부분 15~22cm)는 들어가지 않아요.',
        passText: '가전 옆면에 붙이는 자석 선반·랩걸이나, 폭 10~12cm 초슬림 슬라이딩 선반만 고르세요.',
        itemIds: ['entry-magnetic-keytray', 'daiso-kkokkopin'],
        shopLabel: '냉장고 옆 자석 선반 · 10cm 초슬림 수납',
        shopKeyword: '냉장고 옆 자석 선반 10cm 틈새'
      },
      {
        id: 'side-18',
        label: '13~18cm (슬림 틈)',
        sub: '어른 손 한 뼘보다 살짝 좁음',
        avoidText: '이케아 라스크호그 같은 넓은 카트(35×45cm)는 툭 튀어나와 동선을 막아요.',
        passText: '폭 13~16cm 슬림 틈새 서랍장이나 욕실·주방 좁은 카트를 끼워 세제·생수·양념을 세로로 모으세요.',
        itemIds: ['slim-15cm-gap-drawer', 'ikea-vesken-shelf'],
        shopLabel: '15cm 초슬림 틈새 트롤리·서랍',
        shopKeyword: '15cm 틈새 수납장 트롤리'
      },
      {
        id: 'side-25',
        label: '19~28cm (여유 틈)',
        sub: '손 한 뼘이 넉넉히 들어감',
        avoidText: '속이 훤히 비치는 망형 선반만 두면 잡동사니가 그대로 보여 방이 어수선해져요.',
        passText: '이동식 3단 트롤리나 앞이 막힌 PP 서랍·불투명 리빙박스를 세우면 책상·주방 보조 수납이 확 늘어요.',
        itemIds: ['ikea-raskog', 'mesh-3tier-trolley', 'muji-pp-drawer'],
        shopLabel: '슬림 이동식 3단 카트 · PP 서랍',
        shopKeyword: '틈새 이동식 트롤리 25cm 수납'
      }
    ]
  },
  {
    id: 'behind-door',
    label: '방문 뒤 · 윗틈',
    headline: '걸기만 해도 거울·겉옷 자리가 생겨요',
    measureTip: '방문 위쪽 틈에 500원 동전(두께 약 2mm)이 스치듯 들어가면 도어후크 가능, 종이 1장만 겨우 들어가면 걸이형은 막혀요.',
    options: [
      {
        id: 'door-gap-ok',
        label: '윗틈 2mm+ (동전 들어감)',
        sub: '문 위틈 여유 있고 두께 4.5cm 이하',
        avoidText: '고리 두께만 두꺼운 저가 철제 후크는 도배지·문틀 페인트를 긁어 원상복구 시 손해 봐요.',
        passText: '뒤쪽에 보호 패드가 붙은 도어후크 전신거울이나 문걸이 수납걸이를 쓰면 바닥 자리 0cm로 끝나요.',
        itemIds: ['door-hook-mirror', 'door-hook-foodbin', 'no-drill-door-stopper'],
        shopLabel: '패드 부착 무타공 도어후크 거울·행거',
        shopKeyword: '무타공 도어후크 전신거울 보호패드'
      },
      {
        id: 'door-gap-tight',
        label: '윗틈 빡빡함 (동전 안 들어감)',
        sub: '문이 문틀에 딱 붙어 닫힘',
        avoidText: '도어후크 거울·행거를 억지로 끼우면 방문이 아예 안 닫히거나 경첩이 틀어져요.',
        passText: '문 걸이 대신 바닥 차지 적은 슬림 벽기댐 거울, 꼭꼬핀, 현관문 자석 수납함으로 돌리세요.',
        itemIds: ['ikea-nissedal-mirror', 'daiso-kkokkopin', 'entry-magnetic-keytray'],
        shopLabel: '초슬림 벽기댐 거울 · 꼭꼬핀 후크',
        shopKeyword: '슬림 전신거울 40cm 벽기댐 꼭꼬핀'
      }
    ]
  },
  {
    id: 'wall-outlet',
    label: '벽 콘센트 · 전선 틈',
    headline: '플러그 5cm만 줄여도 방 통로가 넓어져요',
    measureTip: '책상이나 침대 뒤 벽 콘센트에 플러그를 꽂았을 때 가구가 벽에서 손가락 세 마디(6cm+) 이상 뜨는지 봐주세요.',
    options: [
      {
        id: 'outlet-stickout',
        label: '일자 플러그가 툭 튀어나옴',
        sub: '콘센트 때문에 가구가 벽에서 뜸',
        avoidText: '일반 일자형 멀티탭을 억지로 눌러 가구를 밀면 전선이 꺾여 합선·화재 위험이 생겨요.',
        passText: '180도 회전하는 납작 ㄱ자 플러그 멀티탭과 책상 하부 전선 트레이로 바꾸면 벽에 바짝 붙어요.',
        itemIds: ['desk-under-tray', 'cable-organizer-box'],
        shopLabel: '180도 회전 ㄱ자 납작 플러그 멀티탭',
        shopKeyword: '납작 플러그 회전형 멀티탭 ㄱ자'
      },
      {
        id: 'outlet-tangle',
        label: '멀티탭·충전선이 바닥에 엉킴',
        sub: '청소기 돌릴 때마다 선이 걸림',
        avoidText: '뚜껑 없는 오픈 바구니에 멀티탭을 담아두면 먼지가 쌓여 위험하고 보기에도 지저분해요.',
        passText: '통풍 구멍이 있는 난연 멀티탭 정리함이나 책상 아래 무타공 클램프 트레이로 공중에 띄우세요.',
        itemIds: ['cable-organizer-box', 'desk-under-tray'],
        shopLabel: '난연 멀티탭 정리함 · 클램프 트레이',
        shopKeyword: '난연 멀티탭 전선 정리함 무타공'
      }
    ]
  }
];

export const ITEM_GAP_HINTS = {
  'door-hook-mirror': '방문 위쪽 틈 2mm 이상(500원 동전 두께)과 문 두께 4.5cm 이하인지 먼저 확인하세요.',
  'ikea-nissedal-mirror': '바닥에 기댈 땐 미끄럼 방지 패드를 대고, 가로 40cm 벽 폭이 비는지 확인하세요.',
  'full-stand-mirror': '거울 다리 벌림 폭이 앞뒤로 35~45cm 필요해 4~5평 원룸 통로를 좁힐 수 있어요.',
  'underbed-sealed-box': '내 침대 프레임 밑 실제 높이(보통 15~20cm)가 박스 전체 높이보다 1cm 이상 높은지 재세요.',
  'vacuum-storage-bags': '청소기 노즐이 안 맞는 미니 청소기만 있다면 전동 펌프 포함 세트로 고르세요.',
  'slim-15cm-gap-drawer': '냉장고·세탁기 옆 틈 폭이 최소 16~20cm 이상인지 손 한 뼘(약 19cm)으로 대보세요.',
  'ikea-vesken-shelf': '선반 폭(약 23cm)과 깊이(36cm)가 욕실·세탁기 옆 틈에 딱 걸리지 않는지 확인하세요.',
  'ikea-raskog': '가로 35×깊이 45cm라 좁은 틈새용이 아닌 책상·침대 옆 코너 자리에 맞아요.',
  'mesh-3tier-trolley': '바퀴 포함한 가로 폭(약 25~40cm)과 문 여닫이 반경이 겹치지 않는지 확인하세요.',
  'muji-pp-drawer': '옷장 안이나 침대 옆에 넣을 땐 서랍을 앞으로 쭉 뺄 앞쪽 공간 40cm를 비워두세요.',
  'opaque-living-box-set': '앞열림 문짝이 꺾여 열릴 앞쪽 여유와 선반 깊이(보통 35~40cm)를 먼저 재세요.',
  'cable-organizer-box': '가지고 계신 4~6구 멀티탭 길이(약 25~32cm)와 어댑터 높이가 박스에 들어가는지 보세요.',
  'desk-under-tray': '책상 상판 두께(1.5~3cm)와 뒤쪽 테두리 프레임 간섭 없이 클램프가 물리는지 확인하세요.',
  'door-hook-foodbin': '싱크대 문짝 두께 2cm 이하·상단 틈 2mm 이상이어야 문이 빡빡하지 않게 닫혀요.',
  'entry-magnetic-keytray': '현관문이 자석이 붙는 철재 문인지 냉장고 자석으로 1초만 먼저 대보세요.',
  'daiso-kkokkopin': '콘크리트 벽엔 안 들어가고 들뜬 실크벽지·합지벽지에만 꽂히니 벽을 눌러보세요.'
};

export function getItemGapHint(item) {
  if (!item) return '';
  if (item.id && ITEM_GAP_HINTS[item.id]) return ITEM_GAP_HINTS[item.id];
  const txt = `${item.name || ''} ${item.category || ''}`;
  if (/도어후크|문걸이/.test(txt)) return ITEM_GAP_HINTS['door-hook-mirror'];
  if (/침대\s*밑|언더베드/.test(txt)) return ITEM_GAP_HINTS['underbed-sealed-box'];
  if (/틈새|슬림.*서랍|트롤리/.test(txt)) return ITEM_GAP_HINTS['slim-15cm-gap-drawer'];
  if (/멀티탭|전선/.test(txt)) return ITEM_GAP_HINTS['cable-organizer-box'];
  return '';
}

export const HIDDEN_PREP_KITS = {
  assemblyTool: {
    id: 'assemblyTool',
    title: 'USB 미니 전동드릴 · 수평 조절 패드',
    estCost: '약 1.5~2.5만 원',
    minWon: 15000,
    maxWon: 25000,
    reason: '반제품 나사 체결 손목 피로 & 장판 흔들림 방지',
    keyword: '미니 충전식 전동드릴 가구 수평 패드'
  },
  floorProtect: {
    id: 'floorProtect',
    title: '다리 펠트 보호패드 · 의자 매트',
    estCost: '약 4천~1.5만 원',
    minWon: 4000,
    maxWon: 15000,
    reason: '월세 장판·마루 찍힘 방지 (퇴실 보증금 방어)',
    keyword: '가구 다리 보호 패드 펠트 스티커'
  },
  deskSurface: {
    id: 'deskSurface',
    title: 'PVC 데스크매트 · 멀티탭 정리함',
    estCost: '약 1~2만 원',
    minWon: 10000,
    maxWon: 20000,
    reason: '상판 요철 필기 보완 · 바닥 전선 먼지 차단',
    keyword: '책상 데스크매트 멀티탭 전선 정리함'
  },
  dustCover: {
    id: 'dustCover',
    title: '지퍼형 의류 커버 · 불투명 리빙박스',
    estCost: '약 1~2만 원',
    minWon: 10000,
    maxWon: 20000,
    reason: '오픈 구조 먼지 뭉침 & 시각적 어지러움 차단',
    keyword: '지퍼형 의류 커버 불투명 리빙박스'
  },
  fabricCare: {
    id: 'fabricCare',
    title: '생활방수 커버 · 논슬립 패드',
    estCost: '약 1~2만 원',
    minWon: 10000,
    maxWon: 20000,
    reason: '국물·음료 얼룩과 매트리스·러그 밀림 방지',
    keyword: '생활방수 매트리스 커버 러그 논슬립 패드'
  },
  wallSafe: {
    id: 'wallSafe',
    title: '꼭꼬핀 · 스티커 접착제거제',
    estCost: '약 5천~1.2만 원',
    minWon: 5000,
    maxWon: 12000,
    reason: '실크벽지 찢김 예방 & 퇴실 시 자국 복구',
    keyword: '꼭꼬핀 벽지 스티커 제거제'
  },
  bulbKit: {
    id: 'bulbKit',
    title: 'E26 2700K 전구색 LED · 연장 스위치',
    estCost: '약 5천~1만 원',
    minWon: 5000,
    maxWon: 10000,
    reason: '별매 전구 확인 & 눈 편한 따뜻한 밤 분위기',
    keyword: 'E26 LED 전구 전구색 2700K'
  },
  measureTape: {
    id: 'measureTape',
    title: '3m 미니 줄자 · 틈새 정리함',
    estCost: '약 5천~1.2만 원',
    minWon: 5000,
    maxWon: 12000,
    reason: '문 열림·60cm 동선 실측 & 자투리 공간 활용',
    keyword: '미니 줄자 틈새 수납함'
  }
};

export const ALT_ITEM_MAP = {
  'ikea-lagkapten': 'dodot-quattro-air',
  'shaggy-rug': 'sisal-look-rug',
  'wood-blind': 'pin-sheer-curtain',
  'alumi-slim-blind': 'pin-sheer-curtain',
  'suction-corner-rack': 'ss304-tension-bath-rod',
  'hard-diatomite': 'soft-diatomite-mat',
  'ikea-malm': 'muji-pp-drawer',
  'mongbijou-boucle': 'ikea-klippan',
  'ikea-soderhamn': 'ikea-klippan',
  'recliner-1p': 'ikea-klippan',
  'full-stand-mirror': 'door-hook-mirror',
  'acrylic-wave-mirror': 'ikea-nissedal-mirror',
  '3m-command': 'daiso-kkokkopin',
  'ikea-mosslanda-shelf': 'daiso-kkokkopin',
  'ikea-mulig': 'muji-pp-drawer',
  'marketb-quattro-hanger': 'muji-pp-drawer',
  'door-hook-hanger': 'door-hook-mirror'
};

export const RESCUE_PATCH_RULES = [
  {
    id: 'thin-desk',
    matchRx: /허니콤|종이\s*벌집|라그캅텐|라크|소프시스|상판\s*꺼짐|리프트업|보조테이블|비에르크오센/,
    symptom: '속이 빈 약한 상판이나 1자 다리 구조라 모니터암·타이핑 시 꺼지거나 흔들리기 쉬움',
    costSaving: '새 책상(15만 원+) 대신 약 5천~1.5만 원으로 보강 가능',
    steps: [
      '모니터암 클램프 위·아래에 스틸 상판 보강판을 끼워 하중을 넓게 분산하세요.',
      '흔들리는 다리 아래엔 수평 조절 펠트 패드와 PVC 데스크매트를 깔아 들뜸·눌림을 막으세요.'
    ],
    kits: [
      { title: '모니터암 스틸 상판 보강판', estCost: '약 5~8천 원', keyword: '모니터암 상판 보강판' },
      { title: '수평 조절 펠트 패드 · PVC 데스크매트', estCost: '약 5~9천 원', keyword: '가구 수평 조절 패드 데스크매트' }
    ]
  },
  {
    id: 'wall-film',
    matchRx: /코맨드|시트지|점착|모스란다|벽선반|블라인드|실크벽지|타공|포스터/,
    symptom: '접착 테이프·무리한 벽걸이로 실크벽지 뜯김이나 퇴실 보증금 차감 위험이 있는 상태',
    costSaving: '도배 수리비(10만 원+) 전에 약 5천~1.2만 원으로 안전하게 하중 분산',
    steps: [
      '무거운 선반·액자는 벽에서 바로 내리고 꼭꼬핀+패브릭 포스터 등 초경량 거치로 바꾸세요.',
      '이미 붙인 테이프를 뗄 땐 헤어드라이어 열풍 + 스티커 제거제로 천천히 녹여 뜯김을 막으세요.'
    ],
    kits: [
      { title: '벽지 전용 꼭꼬핀 · 패브릭 포스터', estCost: '약 4~9천 원', keyword: '다이소 꼭꼬핀 린넨 패브릭 포스터' },
      { title: '스티커 접착제거제 · 벽지 보수 패치', estCost: '약 5~9천 원', keyword: '벽지 스티커 제거제 보수 스티커' }
    ]
  },
  {
    id: 'open-hanger',
    matchRx: /행거|오픈\s*선반|파이프|와이어|요낙셀|스피드랙|메쉬|북타워/,
    symptom: '앞이 트인 구조라 2주 만에 먼지가 쌓이고 잡동사니가 보여 방이 어수선해지기 쉬움',
    costSaving: '새 옷장(25만 원+) 대신 약 1~2만 원으로 먼지·시선 차단',
    steps: [
      '자주 안 입는 외투는 지퍼형 방진 의류 커버로 한 번에 감싸 먼지를 막으세요.',
      '선반 칸마다 같은 색 불투명 뚜껑 리빙박스를 넣으면 도어형 옷장처럼 깔끔해집니다.'
    ],
    kits: [
      { title: '지퍼형 투명창 방진 의류 커버', estCost: '약 7천~1.2만 원', keyword: '지퍼형 행거 커버 의류' },
      { title: '같은 톤 불투명 뚜껑 리빙박스', estCost: '약 1~1.8만 원', keyword: '불투명 뚜껑 리빙박스' }
    ]
  },
  {
    id: 'fabric-care',
    matchRx: /부클레|샤기|장모|비분리|소파|빈백|토퍼|좌식|러그|뒤블링에/,
    symptom: '통세탁이 안 되거나 털·먼지가 박히고 밀려서 음료 얼룩과 위생 관리가 힘든 상태',
    costSaving: '교체 없이 약 1~2만 원 방수·논슬립 레이어로 1년 이상 더 깔끔히 유지',
    steps: [
      '소파·좌식 의자 위에 통세탁 가능한 생활방수 패드/소파 커버를 덮어 얼룩을 원천 차단하세요.',
      '밀리거나 뭉치는 러그 밑에는 논슬립 미끄럼 방지 패드를 대고 1주에 1번 돌돌이로 정리하세요.'
    ],
    kits: [
      { title: '통세탁 가능 생활방수 소파·방석 커버', estCost: '약 1~1.8만 원', keyword: '생활방수 소파 패드 워셔블 커버' },
      { title: '러그·매트 논슬립 미끄럼 방지 패드', estCost: '약 5~9천 원', keyword: '러그 논슬립 미끄럼방지 패드' }
    ]
  },
  {
    id: 'bath-moisture',
    matchRx: /흡착|규조토|변기|세탁기\s*상단|욕실|건조기|물곰팡이|베스켄|소르테라/,
    symptom: '습기로 흡착판이 툭 떨어지거나 물때·곰팡이·물기 누수로 바닥이 상하기 쉬운 상태',
    costSaving: '약 7천~1.8만 원으로 낙하 사고·욕실 곰팡이 즉시 예방',
    steps: [
      '흡착 선반은 비누·물병 대신 칫솔·면도기 등 초경량만 올리고 바닥형/압축봉으로 분산하세요.',
      '물 고이는 하드 매트 위·아래에는 실리콘 물빠짐 패드나 규조토 통풍 깔판을 받쳐 건조하세요.'
    ],
    kits: [
      { title: '실리콘 물빠짐 배수 패드', estCost: '약 6~1만 원', keyword: '실리콘 물빠짐 배수 매트 욕실' },
      { title: '욕실 물기제거 스퀴지 · 규조토 제습스틱', estCost: '약 5~1만 원', keyword: '욕실 실리콘 스퀴지 규조토 제습' }
    ]
  },
  {
    id: 'diy-wobble',
    matchRx: /말름|브림네스|헬메르|알렉스|에케트|마켓비|조립|전동드릴|서랍장|스툴|의자|바퀴|스마트베이스|네이덴/,
    symptom: '나사가 서서히 풀려 삐걱대거나 좁은 철제 다리·바퀴로 장판·마루가 찍히기 쉬운 상태',
    costSaving: '약 5천~1.5만 원으로 흔들림·소음·바닥 찍힘 동시 해결',
    steps: [
      '흔들리는 경첩·다리 볼트를 한 번에 조인 뒤, 닿는 면에 도톰한 펠트·우레탄 보호패드를 붙이세요.',
      '높거나 가벼운 서랍장은 전도 방지 패드(논슬립)를 뒤쪽 모서리에 대면 쏠림이 확 줄어듭니다.'
    ],
    kits: [
      { title: '가구 다리 두꺼운 펠트·실리콘 보호패드', estCost: '약 4~8천 원', keyword: '가구 다리 찍힘방지 두꺼운 펠트패드' },
      { title: 'USB 미니 전동드라이버 (볼트 재조임)', estCost: '약 1.2~1.8만 원', keyword: 'USB 미니 충전 전동드라이버' }
    ]
  },
  {
    id: 'mirror-door',
    matchRx: /거울|도어후크|문걸이|리클라이너|스탠드|가벽|압축/,
    symptom: '방문 윗틈이 긁히거나 거울 다리·압축 기둥이 통로에서 흔들리기 쉬운 상태',
    costSaving: '약 4천~1만 원 완충·고정 보강으로 스크래치·전도 예방',
    steps: [
      '방문 상단 걸이 안쪽에는 1~2mm EVA 완충 테이프를 붙여 문틀 시트지 까짐을 막으세요.',
      '스탠드 거울·파티션 다리는 벽에 바짝 붙이고 뒤쪽 넘어짐 방지 와이어/논슬립 패드를 대세요.'
    ],
    kits: [
      { title: '문틀 보호 EVA 완충 패드 · 도어스토퍼', estCost: '약 4~8천 원', keyword: '문틀 보호 완충 테이프 실리콘 도어스토퍼' },
      { title: '가구 전도방지 무타공 고정 스트랩', estCost: '약 6~1만 원', keyword: '무타공 가구 전도방지 고정 스트랩' }
    ]
  }
];
