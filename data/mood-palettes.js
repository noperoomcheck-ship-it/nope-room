// NOPE! 작은 방 인테리어 무드 · 톤 · 포인트 소품 데이터 (쉬운 생활 언어 + 6대 컬러 조합)

export const STYLE_MOODS = [
  { id: 'ALL', label: '전체 무드' },
  { id: '깔끔 미니멀', label: '깔끔 미니멀' },
  { id: '포근 내추럴', label: '포근 내추럴' },
  { id: '감성 빈티지', label: '감성 빈티지' },
  { id: '모던·스틸', label: '모던·스틸' },
  { id: '컬러 포인트', label: '컬러 포인트' }
];

export const ROOM_TONES = [
  {
    id: 'white-minimal',
    name: '화이트 미니멀',
    sub: '벽·이불·책상을 밝은 화이트·아이보리 톤으로 통일해 넓어 보이는 방',
    ratioRule: '바탕 60% 웜화이트 · 가구 30% 아이보리 · 소품 10% 블랙/그린',
    kelvin: '3000K 온백색 ~ 3500K 중간색 (너무 누런 전구색보다 산뜻한 톤)',
    materialMatch: '무광 LPM 화이트 + 린넨·워싱 코튼 + 투명 유리 / 우드 1점',
    avoidTrap: '벽·가구·조명을 다 차가운 흰색(6500K)으로 맞추면 자취방이 사무실처럼 휑해져요.',
    swatches: ['#F7F4ED', '#E6DFD2', '#2C2523'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    accents: [
      {
        kind: '조경 · 식물',
        name: '올리브나무 또는 유칼립투스 + 무광 크림 화분',
        pointColor: '#7A8B6F',
        pointLabel: '차분한 세이지',
        tip: '창가나 책상 옆에 화분 1개만 두면 하얀 방이 훨씬 생기 있어 보입니다.',
        keyword: '올리브나무 토분 화분'
      },
      {
        kind: '식기 · 컵',
        name: '도톰한 아이보리 머그컵 & 맑은 유리잔',
        pointColor: '#DFD4C0',
        pointLabel: '따뜻한 아이보리',
        tip: '매끈한 도자기 컵에 투명한 유리컵을 섞어 두면 좁은 식탁이 시원해 보입니다.',
        keyword: '아이보리 도자기 머그컵 투명 유리컵'
      },
      {
        kind: '오브제 · 소품',
        name: '돌 질감 소품 트레이 & 동그란 유리 달 조명',
        pointColor: '#E8DCC4',
        pointLabel: '모래 베이지',
        tip: '향수·차키·립밤을 돌 트레이 하나 위에 모아두면 어지러워 보이지 않습니다.',
        keyword: '돌 질감 대리석 트레이 무드등'
      }
    ]
  },
  {
    id: 'oak-natural',
    name: '내추럴 오크',
    sub: '밝은 원목 가구와 포근한 패브릭이 중심인 방',
    ratioRule: '바탕 60% 아이보리 · 가구 30% 내추럴 오크 · 소품 10% 세이지/테라코타',
    kelvin: '2700K~3000K 따뜻한 전구색 (우드 나뭇결이 가장 포근해 보이는 빛)',
    materialMatch: '밝은 자작·오크 원목 + 린넨·부클레 패브릭 + 라탄·흙 토분',
    avoidTrap: '노란기 도는 장판 위에 붉은기 강한 체리목 가구를 섞으면 촌스러워지니 톤을 통일하세요.',
    swatches: ['#FAF6EC', '#C49A6C', '#6F8260'],
    styles: ['포근 내추럴', '깔끔 미니멀'],
    accents: [
      {
        kind: '조경 · 식물',
        name: '몬스테라 또는 아레카야자 + 라탄 바구니 화분',
        pointColor: '#6D8259',
        pointLabel: '싱그러운 초록',
        tip: '우드 가구 옆에 잎이 큰 식물을 두면 카페처럼 편안한 분위기가 살아납니다.',
        keyword: '몬스테라 라탄 화분'
      },
      {
        kind: '식기 · 컵',
        name: '점무늬 도자기 그릇 & 따뜻한 갈색 유리컵',
        pointColor: '#C97A5A',
        pointLabel: '따뜻한 갈색',
        tip: '잔잔한 무늬가 들어간 그릇과 은은한 갈색 컵이 나무 책상과 잘 어울립니다.',
        keyword: '도자기 앞접시 갈색 빈티지 유리컵'
      },
      {
        kind: '오브제 · 소품',
        name: '원목 받침 트레이 & 린넨 테이블 매트',
        pointColor: '#C49A6C',
        pointLabel: '밝은 우드',
        tip: '천 재질 매트를 깔아두면 식사 공간과 공부 공간이 자연스럽게 구분됩니다.',
        keyword: '원목 트레이 린넨 테이블 매트'
      }
    ]
  },
  {
    id: 'walnut-vintage',
    name: '월넛 · 미드센추리',
    sub: '깊은 월넛 원목 가구에 레트로 컬러 포인트를 얹는 방',
    ratioRule: '바탕 60% 크림 · 가구 30% 진한 갈색 · 소품 10% 오렌지/머스타드',
    kelvin: '2700K 전구색 스탠드 위주 (형광등을 끄고 간접등 2개 이상 켜기)',
    materialMatch: '짙은 월넛 원목 + 코듀로이·가죽 + 무광 황동·빈티지 유리',
    avoidTrap: '큰 가구를 전부 어두운 월넛으로 채우면 방이 1평은 좁아 보이니 바닥·침구는 꼭 밝은 크림으로 빼세요.',
    swatches: ['#F4EFE4', '#5C4033', '#D15B34'],
    styles: ['감성 빈티지', '포근 내추럴'],
    accents: [
      {
        kind: '조경 · 식물',
        name: '여인초 · 떡갈고무나무 + 브라운 흙 화분',
        pointColor: '#566A46',
        pointLabel: '진한 초록',
        tip: '묵직한 고동색 가구 옆에 키 큰 초록 식물을 두면 답답한 느낌이 줄어듭니다.',
        keyword: '여인초 테라코타 토분 화분'
      },
      {
        kind: '식기 · 컵',
        name: '노랑·주황 포인트 머그컵 & 스텐 디저트 볼',
        pointColor: '#D15B34',
        pointLabel: '빈티지 오렌지',
        tip: '진한 나무 테이블 위에 산뜻한 컬러 컵과 반짝이는 스텐 그릇을 올리면 포인트가 됩니다.',
        keyword: '빈티지 컬러 머그컵 스테인리스 아이스크림볼'
      },
      {
        kind: '오브제 · 소품',
        name: '버섯 모양 컬러 단스탠드 & 원목 북엔드',
        pointColor: '#D49B35',
        pointLabel: '머스타드 옐로우',
        tip: '조그만 색감 있는 무드등 하나만 켜도 방 전체 분위기가 아늑하게 바뀝니다.',
        keyword: '버섯 단스탠드 조명'
      }
    ]
  },
  {
    id: 'steel-modern',
    name: '모노 · 스틸',
    sub: '화이트 베이스와 무채색·스틸 프레임으로 선이 반듯한 방',
    ratioRule: '바탕 60% 화이트 · 가구 30% 스틸/차콜 · 소품 10% 코발트/레드',
    kelvin: '3000K~4000K 주백색 (블랙·스틸 윤곽이 또렷하고 깔끔하게 살아남)',
    materialMatch: '헤어라인 스테인리스·크롬 + 강화유리·무채색 도장 + 쨍한 아크릴 소품',
    avoidTrap: '전선·멀티탭이 보이면 차가운 스틸 방이 금방 공대 작업실처럼 보이니 선 정리가 생명이에요.',
    swatches: ['#F7F7F5', '#23261F', '#2F5DA8'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    accents: [
      {
        kind: '조경 · 식물',
        name: '산세베리아 · 공중식물 + 무광 실버 화분',
        pointColor: '#8CA095',
        pointLabel: '은은한 민트',
        tip: '은색이나 회색 화분에 잎이 곧게 뻗은 식물을 담으면 도시적인 방과 잘 맞습니다.',
        keyword: '산세베리아 실버 화분'
      },
      {
        kind: '식기 · 컵',
        name: '선명한 파랑/빨강 머그컵 & 스텐 컵받침',
        pointColor: '#2F5DA8',
        pointLabel: '선명한 블루',
        tip: '무채색 방에서는 쨍한 컬러 머그컵 하나와 스텐 받침만으로도 세련돼 보입니다.',
        keyword: '코발트블루 머그컵 스테인리스 코스터'
      },
      {
        kind: '오브제 · 소품',
        name: '실버 스틸 티슈케이스 & 세로 줄무늬 유리 화병',
        pointColor: '#A7ADB2',
        pointLabel: '실버 메탈',
        tip: '휴지나 리모컨 같은 생활용품을 스틸 케이스에 가려두면 방이 깔끔해 보입니다.',
        keyword: '스틸 티슈케이스 유리 화병'
      }
    ]
  },
  {
    id: 'butter-pastel',
    name: '버터 · 파스텔',
    sub: '연노랑 버터빛 침구와 둥근 소품으로 생기 있는 방',
    ratioRule: '바탕 60% 아이보리 · 가구 30% 버터/화이트 · 소품 10% 소라/라벤더',
    kelvin: '2700K~3000K 따뜻한 빛 (노랑·파스텔 색감이 물 빠지지 않고 사랑스럽게 보임)',
    materialMatch: '화이트 철제·자작나무 + 체크·와플 패브릭 + 둥근 유광 세라믹',
    avoidTrap: '파스텔 색상을 3가지 이상 섞으면 산만해지니 침구 1색 + 소품 1색 정도로만 좁히세요.',
    swatches: ['#FFF9E3', '#F2D377', '#7F9EC9'],
    styles: ['컬러 포인트', '포근 내추럴'],
    accents: [
      {
        kind: '조경 · 식물',
        name: '마오리 소포라 · 페페로미아 + 파스텔 세라믹 화분',
        pointColor: '#89A878',
        pointLabel: '연두빛 그린',
        tip: '둥글둥글하고 작은 잎의 미니 식물이 버터·파스텔 색감과 찰떡궁합입니다.',
        keyword: '마오리 소포라 세라믹 화분'
      },
      {
        kind: '식기 · 컵',
        name: '버터 옐로우·소라색 머그컵 & 물결 접시',
        pointColor: '#F2D377',
        pointLabel: '버터 옐로우',
        tip: '부드러운 파스텔 톤 그릇과 컵을 모아두면 홈카페 분위기가 금방 살아납니다.',
        keyword: '버터 옐로우 머그컵 파스텔 접시'
      },
      {
        kind: '오브제 · 소품',
        name: '체크 패브릭 쿠션 & 무선 포터블 무드등',
        pointColor: '#7F9EC9',
        pointLabel: '소프트 블루',
        tip: '침대 위 베개 커버나 쿠션 1개만 파스텔 체크로 바꿔도 기분 전환에 좋습니다.',
        keyword: '버터 체크 쿠션커버 무선 무드등'
      }
    ]
  },
  {
    id: 'sage-terracotta',
    name: '세이지 · 테라코타',
    sub: '차분한 세이지 그린과 따뜻한 테라코타로 감성 채우는 방',
    ratioRule: '바탕 60% 웜화이트 · 가구 30% 우드/세이지 · 소품 10% 테라코타',
    kelvin: '2700K 전구색 (주황빛 흙·식물 잎과 만나 저녁에 가장 아늑한 카페 톤)',
    materialMatch: '오크·월넛 우드 + 세이지 패브릭 + 주황빛 토분·테라코타 세라믹',
    avoidTrap: '원색 초록·빨강을 쓰면 크리스마스 같아지니 꼭 탁한 세이지 그린 & 구운 벽돌색으로 고르세요.',
    swatches: ['#F5F2EA', '#879B80', '#C86D51'],
    styles: ['컬러 포인트', '감성 빈티지', '포근 내추럴'],
    accents: [
      {
        kind: '조경 · 식물',
        name: '고무나무 · 스킨답서스 + 주황빛 흙 토분',
        pointColor: '#6F8865',
        pointLabel: '세이지 그린',
        tip: '따뜻한 주황빛 흙 화분에 초록 잎을 심으면 식물과 화분 색감이 자연스럽게 이어집니다.',
        keyword: '고무나무 테라코타 토분'
      },
      {
        kind: '식기 · 컵',
        name: '차분한 올리브색 머그 & 나무 컵받침',
        pointColor: '#C86D51',
        pointLabel: '벽돌 오렌지',
        tip: '매트한 질감의 초록·주황 컵을 식탁 위에 두면 소품 역할을 겸합니다.',
        keyword: '세이지그린 매트 머그컵 우드 코스터'
      },
      {
        kind: '오브제 · 소품',
        name: '주름 천 갓 스탠드 & 와플 질감 린넨 블랭킷',
        pointColor: '#879B80',
        pointLabel: '차분한 세이지',
        tip: '침대 발치에 세이지나 테라코타 얇은 담요를 한 장 걸쳐두면 5분 만에 아늑해집니다.',
        keyword: '주름 스탠드 조명 세이지 린넨 블랭킷'
      }
    ]
  }
];

export const TARGET_CATEGORIES = [
  { id: '책상·의자', label: '책상·의자' },
  { id: '수납·행거', label: '수납·행거' },
  { id: '소파·침대·매트', label: '소파·침대' },
  { id: '식탁·주방·생활', label: '식탁·주방' },
  { id: '조명·거울', label: '조명·협탁' },
  { id: '무타공·욕실', label: '커튼·소품' }
];

export const ROOM_BASE_OPTIONS = [
  { id: 'clean-white', label: '깔끔한 흰·밝은 바닥' },
  { id: 'yellow-floor', label: '누런 장판' },
  { id: 'cherry-molding', label: '붉은 체리몰딩·문틀' },
  { id: 'dark-floor', label: '어둡고 칙칙한 바닥' }
];

const ROOM_BASE_RESCUE_MAP = {
  'clean-white': {
    baseLabel: '깔끔한 흰·밝은 바닥',
    headline: '기본 도화지가 밝아서 어떤 무드든 가장 쉽게 어울려요',
    defaultAvoid: '벽·이불·조명까지 전부 차가운 흰색으로만 채우면 병원이나 사무실처럼 휑해질 수 있어요.',
    coverSteps: [
      '전체 면적의 60%는 밝은 벽·이불을 그대로 두고, 바닥 한쪽에만 작은 단모 러그로 구역을 나눠보세요.',
      '전구색(2700~3000K) 단스탠드 하나만 켜도 흰 바탕 위에 따뜻한 분위기가 바로 살아납니다.'
    ],
    coverKeywords: [
      { label: '먼지 없는 단모 러그 보기', keyword: '단모 워셔블 아이보리 러그' },
      { label: '무타공 쉬폰 커튼 보기', keyword: '무타공 꼭꼬핀 린넨 쉬폰 커튼' }
    ],
    productIds: ['washable-short-carpet', 'pin-sheer-curtain']
  },
  'yellow-floor': {
    baseLabel: '누런 장판',
    headline: '노란 기운을 절반만 덮어도 원룸 인상이 완전히 달라져요',
    defaultAvoid: '누런 장판 위에 붉은기 강한 갈색 가구나 차가운 은색 철제만 띄엄띄엄 놓으면 방이 더 낡고 어수선해 보여요.',
    toneAvoids: {
      'white-minimal': '누런 장판 위에 새하얀 가구만 바로 올리면 바닥의 노란 색감이 두 배로 튀어 보여요. 바닥부터 먼저 덮어주세요.',
      'steel-modern': '노란 장판과 차가운 블랙·실버 스틸이 그대로 맞닿으면 색이 겉돌아요. 무채색 대형 러그로 경계를 끊어주는 게 핵심입니다.',
      'walnut-vintage': '노란 장판 위에 진한 고동색 가구를 넓게 깔면 방이 좁고 칙칙해 보이기 쉬워요. 크림색 러그를 꼭 깔아주세요.'
    },
    coverSteps: [
      '바닥 면적의 50% 이상을 접착제 없는 무타공 조립 데코타일이나 밝은 아이보리·오트밀 단모 러그로 먼저 덮어주세요.',
      '이불과 커튼은 노란빛이 도는 크림보다 깨끗한 오프화이트·베이지로 맞추면 누런 장판 시선이 자연스럽게 중화됩니다.'
    ],
    coverKeywords: [
      { label: '접착제 없는 조립 데코타일 보기', keyword: '무타공 조립식 데코타일 아이보리' },
      { label: '누런 바닥 가리는 대형 단모 러그', keyword: '워셔블 단모 대형 러그 아이보리' }
    ],
    productIds: ['washable-short-carpet', 'sisal-look-rug']
  },
  'cherry-molding': {
    baseLabel: '붉은 체리몰딩·문틀',
    headline: '붉은 몰딩 시선만 천으로 끊어줘도 촌스러움이 싹 잡혀요',
    defaultAvoid: '붉은 체리목 문틀 옆에 쨍한 파스텔 소품이나 차가운 은색 철제만 두면 색이 충돌해 방이 산만해집니다.',
    toneAvoids: {
      'steel-modern': '붉은 체리몰딩과 차가운 실버 스틸은 대비가 너무 세요. 문·창틀 쪽을 긴 커튼으로 먼저 가려줘야 모던 톤이 삽니다.',
      'butter-pastel': '체리색 문틀 옆에 연노랑·소라색 소품을 바로 붙이면 촌스러워 보일 수 있어요. 아이보리 천으로 경계를 분리해 주세요.',
      'white-minimal': '하얀 가구를 체리몰딩에 바짝 붙이기보다, 창가와 방문 옆에 밝은 천을 길게 늘어뜨려 붉은 선을 줄여주세요.'
    },
    coverSteps: [
      '창틀과 베란다 샷시는 꼭꼬핀이나 굵은 무타공 압축봉에 긴 아이보리·린넨 쉬폰 커튼을 달아 붉은 몰딩 선을 가려주세요.',
      '큰 가구는 붉은기 없는 오크·화이트로 통일하고, 방문 쪽에는 가벼운 도어 가림 커튼이나 패브릭 포스터를 걸어 시선을 분산하세요.'
    ],
    coverKeywords: [
      { label: '꼭꼬핀·압축봉 긴 커튼 보기', keyword: '무타공 꼭꼬핀 린넨 쉬폰 커튼' },
      { label: '문틀 가리는 도어 가림 패브릭', keyword: '방문 가리개 패브릭 커튼 압축봉' }
    ],
    productIds: ['pin-sheer-curtain', 'tension-curtain-rod-black']
  },
  'dark-floor': {
    baseLabel: '어둡고 칙칙한 바닥',
    headline: '다리가 가늘고 밝은 천을 더해 답답함을 걷어내세요',
    defaultAvoid: '어두운 바닥 위에 바닥까지 꽉 막힌 짙은 색 수납장을 세우면 4~6평 방이 훨씬 좁고 무겁게 느껴집니다.',
    toneAvoids: {
      'walnut-vintage': '바닥도 어두운데 가구까지 짙은 월넛으로 채우면 동굴처럼 어두워져요. 침구와 러그만큼은 꼭 밝은 크림으로 빼세요.',
      'steel-modern': '칙칙한 회색 바닥에 검은 철제만 놓으면 차가워 보일 수 있어요. 따뜻한 전구색 조명과 밝은 패브릭을 꼭 섞어주세요.'
    },
    coverSteps: [
      '침대와 책상 사이 바닥에 밝은 아이보리·베이지 단모 러그를 깔아 빛을 반사시켜 주세요.',
      '서랍장과 침대는 바닥에 딱 붙는 통짜형보다 다리가 드러나는 슬림 다리형을 고르면 방이 훨씬 트여 보입니다.'
    ],
    coverKeywords: [
      { label: '방이 환해지는 밝은 단모 러그', keyword: '단모 워셔블 크림 러그 150 200' },
      { label: '분위기 살리는 전구색 단스탠드', keyword: '전구색 2700K 단스탠드 조명' }
    ],
    productIds: ['sisal-look-rug', 'washable-short-carpet']
  }
};

export function getRoomBaseRescue(baseId = 'clean-white', toneId = 'white-minimal') {
  const entry = ROOM_BASE_RESCUE_MAP[baseId] || ROOM_BASE_RESCUE_MAP['clean-white'];
  const avoidLine = (entry.toneAvoids && entry.toneAvoids[toneId]) || entry.defaultAvoid;
  return {
    id: baseId,
    baseLabel: entry.baseLabel,
    headline: entry.headline,
    avoidLine,
    coverSteps: entry.coverSteps,
    coverKeywords: entry.coverKeywords,
    productIds: entry.productIds
  };
}
