// NOPE! 실상품 200종 데이터베이스 (합리적 리뷰 검증 통과분만 수록)
// 제외 기준: 단순 배송 지연·택배 파손·개인 색감 취향 불만
// 채택 기준: 구조·소재·공구·치수·유지관리·원상복구 등 객관적 실사용 리뷰 팩트

export const ITEMS_DB = [
  // ==================== 1. 책상 · 의자 (16종) ====================
  {
    id: 'ikea-lagkapten',
    brand: 'IKEA',
    name: '이케아 라그캅텐 / 린몬 책상',
    category: '책상·의자',
    verdict: 'NOPE',
    priceTier: '3~7만 원대',
    chips: ['종이 벌집 심재', '모니터암 금지', '흔들림 주의'],
    oneLiner: '속이 빈 종이 허니콤 구조라 무거운 모니터암 달면 상판이 푹 꺼짐.',
    specs: { dust: 2, deposit: 1, trouble: 5 },
    checks: [
      '겉은 시트지, 속은 종이 벌집 구조라 충격 시 함몰',
      '모니터암 클램프 강하게 조이면 상판 구멍·꺼짐 다수 보고',
      '공구: 전동드릴 없으면 다리 나사 체결 시 손목 무리'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['muji-pp-drawer', 'ikea-raskog'],
    goodLine: '3~7만 원대 가벼운 자취 입문 가격',
    checkLine: '속이 빈 벌집 심재라 모니터암 조이면 함몰',
    altName: '두닷 콰트로 / 데스커 (E0 풀판+스틸프레임)',
    altSearchKeyword: '두닷 콰트로 책상 1200'
  },
  {
    id: 'dodot-quattro',
    brand: 'DODOT',
    name: '두닷 콰트로 책상',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '9~16만 원대',
    chips: ['전동드릴 권장', '무게 묵직함', '흔들림 적음'],
    oneLiner: '상판·프레임은 탄탄하지만 셀프 조립 시 전동드릴 없으면 손목 나감.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      'E0 등급 풀판 상판과 스틸 프레임 조합으로 듀얼 모니터암 거치 시에도 매우 안정적',
      '가성비 대비 흔들림이 적어 재택근무·게이밍 겸용 책상으로 만족도가 높음'
    ],
    cautions: [
      '무게감 있는 반제품이라 전동드릴 없이 조립하면 손목 피로가 큼 (수평 글라이드 조절 필수)'
    ],
    checks: [
      '리뷰 검증: E0 목재+스틸 프레임으로 듀얼 모니터암 거치 안정적',
      '반제품 배송이라 전동드릴 없으면 나사 조립 시간·피로 큼',
      '바닥 수평 안 맞을 땐 하단 글라이드 높이 조절 필수'
    ],
    tones: ['white-minimal', 'oak-natural', 'steel-modern', 'butter-pastel'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['muji-pp-drawer', 'ikea-raskog'],
    goodLine: 'E0 풀판+스틸 프레임으로 모니터암 안정적',
    checkLine: '묵직한 반제품이라 전동드릴 조립 권장',
    altName: '두닷 콰트로 에어 (모서리 라운드 마감)',
    altSearchKeyword: '두닷 콰트로 에어 책상'
  },
  {
    id: 'desker-desk',
    brand: 'DESKER',
    name: '데스커 컴퓨터 책상',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '15~25만 원대',
    chips: ['E0 풀판 자재', '기사 시공 옵션', '모니터암 안정적'],
    oneLiner: '튼튼한 스틸 프레임과 E0 상판 조합으로 재택·공부용 기본기가 탄탄한 책상.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '국내 생산 E0 등급 LPM 상판과 묵직한 스틸 프레임으로 듀얼 모니터암 거치 시 흔들림이 적음',
      '전문 기사 방문 시공 옵션을 고르면 수평 조절과 조립 부담 없이 바로 세팅 가능'
    ],
    pairTips: [
      '우드 톤 상판은 미세 나뭇결이 있어 필기가 잦다면 가죽/PVC 데스크매트나 화이트 상판 조합 추천',
      '팔걸이 높이 65cm 이상 의자는 하부 배선트레이 간섭 여부를 먼저 확인하면 동선이 깔끔함'
    ],
    checks: [
      '리뷰 검증: 우드톤 상판 나뭇결 요철 있어 필기 시 데스크매트 필요',
      '의자 팔걸이 높으면 하부 배선트레이에 걸려 깊이 못 넣음',
      '타공판·모니터암 설치 시 하부 글라이드 수평 조절 권장'
    ],
    tones: ['white-minimal', 'oak-natural', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '모던·스틸', '포근 내추럴'],
    pairIds: ['muji-pp-drawer', 'ikea-raskog'],
    goodLine: 'E0 풀판과 스틸 다리로 흔들림 없는 기본기',
    checkLine: '우드 상판 요철 있어 필기 시 매트 추천',
    altName: '데스커 화이트 기본 상판 + 멀티탭 배선트레이',
    altSearchKeyword: '데스커 컴퓨터 데스크 화이트'
  },
  {
    id: 'ikea-trotten',
    brand: 'IKEA',
    name: '이케아 트로텐(TROTTEN) 수동 높낮이 책상',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '20~27만 원대',
    chips: ['수동 레버 귀찮음', '중앙프레임 간섭', '스탠딩 겸용'],
    oneLiner: '가성비 스탠딩 책상이지만 손잡이 돌리기 귀찮아 고정해 쓰기 십상.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '전기 콘센트·모터 고장 걱정 없이 스탠딩과 좌식을 오갈 수 있는 실속형 수동 높낮이 책상',
      '10만 원 후반대에서 이케아 특유의 견고한 하부 프레임 내구성을 갖춤'
    ],
    cautions: [
      '크랭크 손잡이를 직접 돌려야 해 자주 오르내리기 번거롭고, 중앙 프레임 때문에 클램프 액세서리 위치 확인 필요'
    ],
    checks: [
      '리뷰 검증: 수동 크랭크 회전 방식이라 잦은 높이 변경엔 번거로움',
      '하단 중앙 철제 프레임 간섭으로 모니터암·서랍 거치 위치 제한',
      '전동 대비 고장 적고 튼튼하나 전용 액세서리 호환성 부족'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['muji-pp-drawer', 'ikea-raskog'],
    goodLine: '전기 없이 수동으로 스탠딩 높이 조절 가능',
    checkLine: '크랭크 수동 회전이라 잦은 높낮이 조절 번거로움',
    altName: '고정형 데스커 책상 또는 전동 모션데스크',
    altSearchKeyword: '가성비 전동 모션데스크 1200'
  },
  {
    id: 'sofsys-desk',
    brand: 'SOFSYS',
    name: '소프시스 철제 프레임 책상',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '4~8만 원대',
    chips: ['나사홀 오차', '얇은 MDF 휨', '가성비 DIY'],
    oneLiner: '초저가 자취 책상이지만 나사 구멍 미세 오차·고하중 시 상판 휨 주의.',
    specs: { dust: 2, deposit: 1, trouble: 4 },
    pros: [
      '3~5만 원대 초저가 라인에서 가볍고 심플한 화이트/우드 감성을 내기 좋은 자취 입문용 책상',
      '혼자 들고 옮기기 부담 없는 무게라 단기 거주나 임시 작업대용으로 실속 있음'
    ],
    cautions: [
      '상판 두께가 얇아 무거운 모니터암·듀얼 모니터엔 부적합하며 나사 조립 시 수평 확인 필수'
    ],
    checks: [
      '리뷰 검증: 나사 구멍 오차·조립 중 시트지 긁힘 사례 보고',
      '상판 두께 얇아 대형 모니터 2~3대 올리면 중앙 미세 휨',
      '볼트 끝까지 안 조이거나 바닥 불균형 시 미세 흔들림'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['roomnhome-steel', 'ikea-raskog'],
    goodLine: '3~5만 원대 가볍고 깔끔한 자취 입문 책상',
    checkLine: '상판이 얇아 무거운 듀얼 모니터암엔 비추천',
    altName: '두닷 콰트로 / 에이픽스 1인 데스크',
    altSearchKeyword: '에이픽스 게이밍 컴퓨터 책상'
  },
  {
    id: 'apix-gaming-desk',
    brand: 'APIX',
    name: '에이픽스(APIX) 1인용 게이밍 책상',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '9~14만 원대',
    chips: ['가성비 10만원대', '컵·헤드셋 홀더', '흔들림 억제'],
    oneLiner: '10만 원 초반대에 튼튼한 스틸 다리와 컵·헤드셋 거치까지 챙긴 가성비 책상.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      'Z/K형 강철 프레임 구조로 동일 가격대 보급형 책상 대비 좌우 흔들림을 잘 잡아줌',
      '컵홀더·헤드셋 걸이·배선 홀이 기본 포함돼 별도 데스크 액세서리 추가 비용이 적음'
    ],
    pairTips: [
      '카본 블랙 상판이 인테리어에서 튄다면 모던 데스크패드나 화이트 상판 버전을 선택해 톤 조절 가능',
      '셀프 조립 시 상판 무게가 있으므로 바닥에 포장 박스를 깔고 뒤집어 조립하면 긁힘 방지'
    ],
    checks: [
      '리뷰 검증: 강철 Z/K 프레임으로 흔들림 적고 컵·헤드셋 홀더 실용적',
      '카본 패턴 상판은 스크래치에 강하나 내추럴 인테리어와 이질감',
      '상판 무게 무거워 20~30분 셀프 조립 시 공간 확보 필요'
    ],
    tones: ['steel-modern'],
    styles: ['모던·스틸'],
    pairIds: ['roomnhome-steel', 'ikea-raskog'],
    goodLine: '10만 원대 스틸 프레임+컵·헤드셋 홀더 포함',
    checkLine: '카본 톤이 튄다면 화이트/데스크패드 매치',
    altName: '에이픽스 화이트 게이밍/컴퓨터 데스크 1200',
    altSearchKeyword: '두닷 콰트로 화이트 책상'
  },
  {
    id: 'livart-ronan',
    brand: 'LIVART',
    name: '현대리바트 로넌 책상',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '18~35만 원대',
    chips: ['기사 방문 설치', 'E0 친환경 자재', '깔끔한 화이트/우드'],
    oneLiner: '기사 방문 시공으로 조립 스트레스 없이 안정적인 원룸 데스크 세팅이 가능한 모델.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '전문 설치 기사가 직접 조립 및 수평을 맞춰주므로 셀프 조립 실패나 볼트 풀림 걱정이 없음',
      'E0 등급 자재와 모서리 마감 완성도가 높아 자취방 화이트·우드 톤에 자연스럽게 어울림'
    ],
    pairTips: [
      '밝은 아이보리/화이트 상판은 볼펜·커피 착색 예방용 투명 매트를 함께 깔아두면 새것처럼 오래 사용',
      '원룸 벽면 폭이 120cm 전후라면 단독형 1200 사이즈 + 별도 3단 서랍 조합이 배치 전환에 유리'
    ],
    checks: [
      '리뷰 검증: 기사 직접 시공이라 조립 스트레스·흔들림 거의 없음',
      'E0 등급 자재로 새 가구 냄새 적고 화사한 톤 유지',
      '아이보리/화이트 상판에 볼펜·잉크 묻으면 지우기 까다로움'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['muji-pp-drawer', 'ikea-raskog'],
    goodLine: '기사 방문 시공으로 조립 피로 없이 깔끔',
    checkLine: '화이트 상판 잉크 이염 막으려면 투명매트 추천',
    altName: '리바트 로넌 단독형 1200 + 투명 매트',
    altSearchKeyword: '리바트 로넌 1200 단독 책상'
  },
  {
    id: 'iloom-roy',
    brand: 'ILOOM',
    name: '일룸 로이(ROY) 책상',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '35~70만 원대',
    chips: ['최상급 내구성', 'E0 자재+시공', '수납 확장성'],
    oneLiner: '초기 예산은 높지만 오래 써도 흔들림과 처짐이 거의 없는 정석형 데스크.',
    specs: { dust: 2, deposit: 2, trouble: 2 },
    pros: [
      '두꺼운 상판과 견고한 하부 구조로 고중량 모니터·책장 세팅에도 변형이 거의 없음',
      '전문 시공 포함 제품이라 마감이 깔끔하고 추후 A/S 및 부속 호환성이 뛰어남'
    ],
    pairTips: [
      '상부장·풀옵션보다 다리형 단독 책상으로 들이면 추후 이사나 방 구조 변경 시 배치가 훨씬 자유로움',
      '전용 멀티탭 홀더와 함께 쓰면 바닥으로 내려가는 선정리가 한 번에 해결됨'
    ],
    checks: [
      '리뷰 검증: E0 자재+전문 시공으로 튼튼하나 단독+책장 시 가격 부담',
      '무게 상당하고 벽 고정/상부장 결합 시 추후 재배치 번거로움',
      '시그니처 철제 타공판은 안 쓰면 먼지만 쌓인다는 후기 공존'
    ],
    tones: ['oak-natural', 'white-minimal', 'butter-pastel'],
    styles: ['포근 내추럴', '깔끔 미니멀'],
    pairIds: ['hanssem-sam', 'ikea-nesna'],
    goodLine: '두꺼운 상판과 시공 마감으로 변형 없음',
    checkLine: '단독형 책상으로 들이면 추후 방 재배치 수월',
    altName: '일룸 로이 다리형 단독 책상 1200',
    altSearchKeyword: '데스커 1200 기본 책상'
  },
  {
    id: 'sidiz-t50',
    brand: 'SIDIZ',
    name: '시디즈 T50 메쉬 의자',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '30~40만 원대',
    chips: ['목받침 유격', '원룸 부피 큼', '좌판 쿠션'],
    oneLiner: '국민 의자지만 목받침·허리지지대 헐거워짐과 큰 부피가 약점.',
    specs: { dust: 3, deposit: 2, trouble: 3 },
    pros: [
      '국내 대표 브랜드답게 부품 교체·A/S가 확실하고 통기성 좋은 메쉬 등판과 틸팅 완성도가 높음',
      '장시간 앉아 일해도 허리를 안정적으로 받쳐주어 중고 방어율과 신뢰도가 탄탄함'
    ],
    cautions: [
      '부피와 무게가 큰 편이라 4~5평 원룸에서는 동선을 확인하고, 헤드레스트 고정력 옵션을 체크할 것'
    ],
    checks: [
      '리뷰 검증: 헤드레스트·럼버서포트 고정력 점차 헐거워짐 다수 지적',
      '4~5평 원룸에선 의자 자체가 크고 묵직해 동선 압박',
      '장기간 사용 시 좌판 스펀지 꺼짐·메쉬 탄력 저하'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['roomnhome-steel', 'ikea-raskog'],
    goodLine: '국내 대표 브랜드답게 부품 교체',
    checkLine: '부피와 무게가 큰 편이라 4~5평 원룸에서는 동선을 확인하고',
    altName: '시디즈 T20 / 우레탄 무소음 바퀴 옵션',
    altSearchKeyword: '시디즈 T20 탭플러스 의자'
  },
  {
    id: 'iloom-ringo',
    brand: 'ILOOM',
    name: '일룸 링고(RINGO) 기능성 의자',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '20~28만 원대',
    chips: ['체형 맞춤 조절', '정자세 서포트', '탄탄한 내구'],
    oneLiner: '등판·좌판 깊이를 체형에 맞게 조절할 수 있어 작은 체구도 바른 자세를 잡기 좋은 의자.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '등판 높이와 좌판 깊이가 함께 움직이는 그로잉 구조라 작은 체구·여성 사용자에게 착좌감이 잘 맞음',
      '중심봉 고정형/발받침 등 옵션 선택 폭이 넓어 발이 뜨지 않고 안정적인 자세 유지에 유리'
    ],
    pairTips: [
      '장시간 성인 재택근무용이라면 회전형/고정형 바퀴 옵션과 좌판 폭을 체형에 맞춰 선택 권장',
      '메쉬·패브릭 컬러 커버를 씌우면 오염 관리와 계절별 온도 조절이 한결 편함'
    ],
    checks: [
      '리뷰 검증: 체형별 등판·좌판 깊이 조절 가능해 정자세 유지 우수',
      '학생·소체형 성인에 적합하며 일반 사무의자 대비 가격 높음',
      '과격한 이동 시 중심축 유격 주의(고정형/발받침 옵션 확인)'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['muji-pp-drawer', 'ikea-raskog'],
    goodLine: '등·좌판 깊이 조절로 작은 체형 정자세 최적',
    checkLine: '성인 장시간 재택용이면 좌판 폭·바퀴 확인',
    altName: '일룸 링고 커버 + 회전방지 싯브레이크 캐스터',
    altSearchKeyword: '시디즈 T20 메쉬 의자'
  },
  {
    id: 'xenics-arena',
    brand: 'XENICS',
    name: '제닉스 아레나 게이밍 의자',
    category: '책상·의자',
    verdict: 'NOPE',
    priceTier: '12~19만 원대',
    chips: ['여름 땀·열감', '양반다리 불가', 'PU 가죽 벗겨짐'],
    oneLiner: '버킷 시트가 어깨·골반을 조이고 여름엔 땀 차며 인조가죽 1~2년 내 벗겨짐.',
    specs: { dust: 3, deposit: 2, trouble: 5 },
    checks: [
      '가죽 모델 기준 여름 등·엉덩이 통기성 최악',
      '양쪽 버킷 날개 때문에 체격 크거나 양반다리 습관 있으면 불편',
      '1~2년 사용 시 인조가죽 가수분해 벗겨짐·팔걸이 유격 보고'
    ],
    tones: ['steel-modern'],
    styles: ['모던·스틸'],
    pairIds: ['roomnhome-steel', 'ikea-raskog'],
    goodLine: '레이싱 버킷 디자인과 팔걸이 각도 조절',
    checkLine: '여름 땀 차고 1~2년 내 인조가죽 벗겨짐 잦음',
    altName: '메쉬 등판 사무용 의자 (린백·시디즈)',
    altSearchKeyword: '통기성 좋은 메쉬 사무용 의자'
  },
  {
    id: 'secretlab-titan',
    brand: 'SECRETLAB',
    name: '시크릿랩 타이탄 에보 의자',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '55~75만 원대',
    chips: ['돌처럼 단단함', '50만+ 고가', '초고중량·거대'],
    oneLiner: '마감은 최상급이나 좌판·등받이가 매우 단단해 푹신한 착좌감 기대 시 후회.',
    specs: { dust: 2, deposit: 2, trouble: 3 },
    pros: [
      '합성피혁·자석 헤드필로우 등 디테일 마감과 하부 틸팅 메커니즘 완성도가 최상급',
      '고하중을 버티는 탄탄한 프레임으로 내구성이 매우 뛰어남'
    ],
    cautions: [
      '착좌감이 상당히 단단하고 의자 자체가 크고 무거워 푹신한 감이나 좁은 방 배치에는 호불호가 큼'
    ],
    checks: [
      '리뷰 검증: 정자세 지지 위해 착좌감 극도로 단단(허리통증 호불호)',
      '50~70만 원대 고가라 체형 안 맞을 시 기회비용 매우 큼',
      '무게·부피가 커서 좁은 자취방 이동·배치 어려움'
    ],
    tones: ['steel-modern'],
    styles: ['모던·스틸'],
    pairIds: ['roomnhome-steel', 'ikea-raskog'],
    goodLine: '최상급 마감과 묵직한 하부 틸팅 완성도',
    checkLine: '착좌감 매우 단단해 좁은 방·푹신파엔 비추천',
    altName: '쇼룸 시착 후 결정 또는 중가 메쉬체어',
    altSearchKeyword: '인체공학 메쉬 의자 요추지지'
  },
  {
    id: 'cloudback-chair',
    brand: 'CLOUDBACK',
    name: '클라우드백 메쉬/마이사이즈 체어',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '25~38만 원대',
    chips: ['요추지지 호불호', '어깨·허벅지 압박', '사이즈 선택 중요'],
    oneLiner: '등받이 굴곡이 체형과 안 맞으면 등 중앙이 뜨고 어깨·허벅지가 눌림.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '듀얼 요추 지지대 구조가 체형에 맞으면 허리를 탄탄하게 밀어주어 장시간 집중 작업에 유리',
      '사이즈(S/M/XL) 세분화로 내 키와 체중에 맞춘 선택이 가능함'
    ],
    cautions: [
      '볼록한 요추지지대와 날개형 등판이 마른 체형이나 특정 어깨 폭엔 압박감을 줄 수 있어 사이즈 표 필수 확인'
    ],
    checks: [
      '리뷰 검증: 볼록한 요추지지대+날개 구조가 마른/특정 체형엔 압박감',
      '좌판 앞쪽 경사 구조에 따라 허벅지 뒤쪽 저림 후기 존재',
      'S/M/XL 사이즈 선택이 중요해 키·체중 기준 꼭 확인'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['roomnhome-steel', 'ikea-raskog'],
    goodLine: '체형 맞으면 듀얼 요추지지대 허리 밀착 우수',
    checkLine: '날개형 등판 압박 줄 수 있어 S/M/XL 사이즈 확인',
    altName: '평탄한 등판형 메쉬 사무용 의자',
    altSearchKeyword: '시디즈 T20 사무용 의자'
  },
  {
    id: 'leanback-chair',
    brand: 'LEANBACK',
    name: '린백(LEANBACK) 가성비 의자',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '10~18만 원대',
    chips: ['플라스틱 마감', '장시간 쿠션꺼짐', '틸팅 소음'],
    oneLiner: '10만 원대 가성비는 좋으나 마감 거칠고 하루 8시간+ 작업엔 쿠션 금방 꺼짐.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '10만 원 초반 예산에서 메쉬 통기성과 기본 틸팅·헤드레스트 구성을 모두 갖춘 가성비 의자',
      '디자인이 무난해 화이트·그레이톤 원룸 데스크테리어에 부담 없이 매치됨'
    ],
    cautions: [
      '사출 플라스틱 마감이 투박할 수 있으며, 하루 8시간 이상 헤비 유저보다는 가벼운 학습·작업용에 적합'
    ],
    checks: [
      '리뷰 검증: 사출 플라스틱 단면·볼트 홀 등 디테일 마감 아쉬움',
      '팔걸이 유격 및 틸팅 잠금장치 소음이 비교적 빨리 발생',
      '가벼운 학습용엔 무난하나 장시간 재택엔 허리 지지력 한계'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['muji-pp-drawer', 'ikea-raskog'],
    goodLine: '10만 원 초반에 메쉬 통기성+헤드레스트',
    checkLine: '플라스틱 마감 투박하며 장시간 작업엔 쿠션 한계',
    altName: '예산 추가 가능 시 시디즈 T20 / 중가 메쉬체어',
    altSearchKeyword: '시디즈 T20 메쉬 의자'
  },
  {
    id: 'ikea-nisse',
    brand: 'IKEA',
    name: '이케아 니세(NISSE) 접이식 의자',
    category: '책상·의자',
    verdict: 'NOPE',
    priceTier: '2~3만 원대',
    chips: ['쿠션 0%', '장시간 허리통증', '겨울 냉기'],
    oneLiner: '예쁘고 접히지만 플라스틱 좌판이라 재택 2시간 넘기면 엉덩이 아픔.',
    specs: { dust: 1, deposit: 1, trouble: 4 },
    checks: [
      '딱딱한 플라스틱+직각 등받이(방석 필수)',
      '손님용 보조 의자엔 좋으나 메인 책상 의자로는 비추',
      '스틸 프레임+플라스틱이라 겨울 착석 시 매우 차가움'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['muji-pp-drawer', 'ikea-raskog'],
    goodLine: '접어서 벽 틈에 세워두기 좋은 보조 의자',
    checkLine: '딱딱한 플라스틱 좌판이라 장시간 착석 불가',
    altName: '쿠션 패브릭 접이식 의자 / 사무용 메쉬의자',
    altSearchKeyword: '자취방 쿠션 인테리어 의자'
  },
  {
    id: 'cheap-pu-chair',
    brand: '쿠팡·오늘의집',
    name: '3~5만 원대 초저가 PU·메쉬 의자',
    category: '책상·의자',
    verdict: 'NOPE',
    priceTier: '3~5만 원대',
    chips: ['PU 가루 날림', '장판 찍힘', '3개월 삐걱'],
    oneLiner: '1년 지나면 인조가죽 가루 떨어지고 저가 바퀴가 장판에 검은 자국 남김.',
    specs: { dust: 3, deposit: 4, trouble: 5 },
    checks: [
      '저가 플라스틱 바퀴가 장판 찍어 원상복구 감액',
      '저가 PU 가죽 1~2년 내 갈라지고 검은 가루 날림',
      '볼트 풀리며 3개월 만에 삐걱거림 발생'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['roomnhome-steel', 'ikea-raskog'],
    goodLine: '3~5만 원대 부담 없는 임시 책상 의자',
    checkLine: '인조가죽 가루 떨어짐과 저가 바퀴 장판 자국 주의',
    altName: '우레탄 바퀴 + 패브릭/메쉬 + 투명 의자매트',
    altSearchKeyword: '투명 의자매트 장판보호'
  },

  // ==================== 2. 수납 · 행거 · 서랍 (18종) ====================
  {
    id: 'ikea-mulig',
    brand: 'IKEA',
    name: '이케아 뮬리그(MULIG) 스탠드 행거',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '1~2만 원대',
    chips: ['겨울코트 휘어짐', '먼지 노출', '좌우 흔들림'],
    oneLiner: '가성비 좋지만 겨울 패딩·코트 빽빽이 걸면 봉 휘고 흔들림.',
    specs: { dust: 5, deposit: 1, trouble: 3 },
    pros: [
      '1~2만 원대 초가성비에 슬림한 화이트 스틸 라인이라 좁은 방 틈새에 두기 깔끔함',
      '조립이 간단해 데일리 셔츠나 다음 날 입을 외투 걸이 용도로 활용도가 좋음'
    ],
    cautions: [
      '겨울 패딩·롱코트를 빽빽하게 걸면 중앙 파이프가 휠 수 있으니 가벼운 데일리 의류 위주 배치 권장'
    ],
    checks: [
      '리뷰 검증: 셔츠 위주엔 OK, 겨울 외투 과적 시 파이프 휨',
      '오픈형이라 2주 만에 옷 어깨 먼지 쌓임',
      '기본 부속 동봉 (십자드라이버 있으면 더 단단히 고정)'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '1~2만 원대 슬림 화이트 틈새 행거',
    checkLine: '무거운 겨울 코트 과적 시 중앙 파이프 휨 주의',
    altName: '반투명 행거 커버 병행 또는 도어형 슬림 옷장',
    altSearchKeyword: '행거 먼지방지 반투명 커버'
  },
  {
    id: 'ikea-rigga',
    brand: 'IKEA',
    name: '이케아 릭가(RIGGA) 이동식 행거',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '2~3만 원대',
    chips: ['바퀴 끌면 나사풀림', '과적 시 휨', '먼지 노출'],
    oneLiner: '높이 조절은 편하지만 바퀴로 끌고 다니면 나사 풀려 주기적 재조임 필수.',
    specs: { dust: 5, deposit: 1, trouble: 3 },
    pros: [
      '하단 선반(신발·박스 보관)과 상단 높이 조절 봉까지 갖춰 수납 유연성이 좋은 이동식 행거',
      '바퀴가 달려 청소할 때 방 구석으로 살짝 밀어두기 편리함'
    ],
    cautions: [
      '바퀴로 자주 이동하면 연결 나사가 느슨해지기 쉬워 동봉 렌치를 보관해 두고 가끔 조여주는 것이 좋음'
    ],
    checks: [
      '리뷰 검증: 이동 시 나사 풀림 잦아 동봉 렌치 보관 필수',
      '무거운 코트 몰리면 중앙 파이프 미세 휨',
      '알록달록한 옷 노출 시 원룸이 좁아 보임'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '하단 신발 선반과 높이 조절까지 갖춘 이동 행거',
    checkLine: '자주 끌고 다니면 나사 풀려 주기적 재조임 필요',
    altName: '커튼/도어형 슬림 드레스룸 수납장',
    altSearchKeyword: '도어형 슬림 옷장 600'
  },
  {
    id: 'wangja-hanger',
    brand: '왕자행거',
    name: '왕자행거 천장고정 압축 행거',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '3~7만 원대',
    chips: ['지지대 밀림 주의', '혼자 수직 어려움', '3개월 재조임'],
    oneLiner: '수납력 최고지만 천장 지지대 나사 안 조여주면 자다 행거 무너짐.',
    specs: { dust: 4, deposit: 3, trouble: 4 },
    pros: [
      '바닥 면적을 거의 쓰지 않으면서 벽 한 면을 통째로 드레스룸으로 만드는 압도적인 수납력',
      '못질 없이 천장과 바닥 사이 압축 고정 방식이라 보증금 부담이 적음'
    ],
    cautions: [
      '석고보드 천장 보호 패드를 꼭 대고 설치해야 하며, 3~6개월마다 스프링 장력을 한 번씩 재확인할 것'
    ],
    checks: [
      '리뷰 검증: 3~6개월마다 천장 압축 스프링 재고정 필수',
      '혼자 완벽한 수직 맞추기 까다로움',
      '천장 석고보드 약하면 지지판 아래 보호 패드 덧대기 필수'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '바닥 차지 없이 벽 한 면을 드레스룸화',
    checkLine: '석고보드 천장 보호패드 필수·3~6개월 점검',
    altName: '커튼 포함형 왕자행거 + 천장 보호패드',
    altSearchKeyword: '왕자행거 커튼형 보호패드'
  },
  {
    id: 'comet-tension-rod',
    brand: 'COUPANG · 코멧',
    name: '코멧 무타공 압축봉 행거',
    category: '수납·행거',
    verdict: 'NOPE',
    priceTier: '1만 원대',
    chips: ['무게에 미끄러짐', '석고벽 찌그러짐', '수평 난이도'],
    oneLiner: '겨울 패딩 걸면 스프링 힘 못 버텨 스르륵 떨어지고 벽지 파손 위험.',
    specs: { dust: 3, deposit: 4, trouble: 5 },
    checks: [
      '겨울옷·두꺼운 암막커튼 걸면 시간 지나 추락 빈번',
      '꽉 조이다 원룸 석고보드·실크벽지 파임 주의',
      '얇은 커튼·가벼운 수건 용도로만 사용'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '못질 없이 10분 만에 설치하는 초저가 압축봉',
    checkLine: '겨울 외투 무게 못 버텨 스프링 추락 위험 높음',
    altName: '바닥 지지형 슬림 스탠드 옷장',
    altSearchKeyword: '원룸 슬림 도어 옷장'
  },
  {
    id: 'marketb-quattro-hanger',
    brand: 'MARKETB',
    name: '마켓비 콰트로/피아노 철제 행거',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '4~8만 원대',
    chips: ['설명서 불친절', '도장 까짐 주의', '가조립 필수'],
    oneLiner: '튼튼하지만 설명서 부실해 방향 반대로 끼우기 쉬움. 가조립 후 꽉 조여야 함.',
    specs: { dust: 4, deposit: 1, trouble: 3 },
    pros: [
      '기둥이 굵은 철제 프레임이라 흔한 1단 행거보다 흔들림 없이 안정적이고 수납하중이 넉넉함',
      '선반과 행거봉을 함께 조합해 모자·가방·리빙박스까지 깔끔하게 정리 가능'
    ],
    cautions: [
      '부품 방향이 헷갈릴 수 있어 처음부터 나사를 꽉 조이지 말고 전체 가조립 후 수평을 맞추며 마감 권장'
    ],
    checks: [
      '리뷰 검증: 부속 방향 헷갈리기 쉬워 2인 조립 권장',
      '처음부터 꽉 조이지 말고 전체 가조립→수평→마무리',
      '조립 중 철제끼리 부딪히면 도장 까짐'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['apix-gaming-desk', 'ikea-tertial'],
    goodLine: '굵은 철제 기둥과 선반 조합으로 하중 안정적',
    checkLine: '부품 방향 헷갈리기 쉬워 가조립 후 수평 마감',
    altName: '커버 포함형 철제 옷장',
    altSearchKeyword: '커버형 튼튼한 철제 옷장'
  },
  {
    id: 'ikea-helmer',
    brand: 'IKEA',
    name: '이케아 헬메르(HELMER) 철제 서랍',
    category: '수납·행거',
    verdict: 'NOPE',
    priceTier: '5~7만 원대',
    chips: ['조립 극악', '장갑·펜치 필수', '철판 찰랑소음'],
    oneLiner: '예쁘지만 얇은 철판 구부리며 조립하다 손 베이기 쉽고 소음 큼.',
    specs: { dust: 1, deposit: 1, trouble: 4 },
    checks: [
      '철판 꺾쇠 구부리는 조립 → 목장갑·펜치 필수',
      '서랍 레일 없이 철판끼리 닿아 여닫을 때 찰랑 소음',
      '수평 조금만 틀어져도 서랍 뻑뻑함'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['apix-gaming-desk', 'ikea-tertial'],
    goodLine: '슬림 폭으로 책상 옆·밑에 쏙 들어가는 철제 서랍',
    checkLine: '얇은 철판 구부리는 조립 난이도와 손 베임 주의',
    altName: '무인양품 PP 서랍장 (완제품, 조립 0분)',
    altSearchKeyword: '무인양품 PP 서랍장'
  },
  {
    id: 'ikea-alex',
    brand: 'IKEA',
    name: '이케아 알렉스(ALEX) 5단 서랍유닛',
    category: '수납·행거',
    verdict: 'NOPE',
    priceTier: '11~14만 원대',
    chips: ['조립 2시간+ 극악', '책상높이 호환주의', '무광 손때'],
    oneLiner: '국민 책상 서랍이지만 부품 수 최상급(전동드릴 필수) + 기존 책상 밑에 안 들어갈 수 있음.',
    specs: { dust: 2, deposit: 2, trouble: 4 },
    checks: [
      '레일·판넬 방향 헷갈리기 쉽고 전동드릴 없으면 손목 무리',
      '기존 책상 하부 높이 실측 안 하면 안 들어가거나 의자 걸림',
      '화이트 무광 기준 손때·화장품·볼펜 이염 취약'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '책상 상판 받침 겸용 5단 대용량 수납 서랍',
    checkLine: '부품 수 최상급(전동드릴 필수)+높이 체크',
    altName: '무인양품 PP 서랍 또는 완제품 3단 이동식 서랍',
    altSearchKeyword: '완제품 이동식 책상 밑 서랍장'
  },
  {
    id: 'muji-pp-drawer',
    brand: 'MUJI',
    name: '무인양품 PP 폴리프로필렌 서랍장',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '2~5만 원대(단품)',
    chips: ['조립 0분 완제품', '모듈 규격 통일', '이사 간편'],
    oneLiner: '조립 없이 바로 쓰고 이사 갈 때도 그대로 들고 옮길 수 있는 가장 실속 있는 수납장.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '완제품이라 조립 시간이 0분이고 가벼워 1인 가구도 방 안 배치 이동·이사가 매우 수월함',
      '가로·깊이 규격이 표준화되어 단품을 하나씩 사도 레고처럼 깔끔하게 적층 확장 가능'
    ],
    pairTips: [
      '속이 비쳐 지저분해 보이는 게 싫다면 화이트그레이(불투명) 라인을 고르면 시각적 노이즈가 확 줄어듦',
      '옷을 꽉 채워 서랍 끝까지 자주 당긴다면 프레임 뒤쪽 클립으로 살짝 고정해 두면 탈선 방지'
    ],
    checks: [
      '리뷰 검증: 서랍 스토퍼 약해 세게 당기면 탈선(뒤쪽 더블클립으로 해결)',
      '플라스틱 특성상 모서리 정전기 먼지 붙음',
      '규격 칼같이 맞고 이사 갈 때 그대로 들고 이동 가능'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '조립 0분 완제품+이사할 때 그대로 이동 가능',
    checkLine: '깔끔한 가림 수납엔 불투명 화이트그레이 추천',
    altName: '무인양품 PP 케이스 화이트그레이(불투명)',
    altSearchKeyword: '무인양품 PP 케이스 화이트그레이'
  },
  {
    id: 'marketb-mkb-cabinet',
    brand: 'MARKETB',
    name: '마켓비 MKB 철제 캐비닛',
    category: '수납·행거',
    verdict: 'NOPE',
    priceTier: '6~12만 원대',
    chips: ['이케아급+ 조립지옥', '철제 깡통소음', '설명서 불친절'],
    oneLiner: '컬러 인테리어 효과 최고지만 수십 개 나사·철판 조립하다 손 베임 주의.',
    specs: { dust: 1, deposit: 2, trouble: 4 },
    checks: [
      '그림 설명서 불친절 + 철판 날카로워 장갑 필수',
      '문 닫을 때 얇은 철판 깡통 소리 울림',
      '얇은 강판 특성상 모서리 미세 찌그러짐 주의'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['모던·스틸', '깔끔 미니멀', '컬러 포인트'],
    pairIds: ['apix-gaming-desk', 'ikea-tertial'],
    goodLine: '포인트 컬러감 예쁜 콤팩트 철제 캐비닛',
    checkLine: '나사가 많고 철판 마감이 날카로워 장갑 필수',
    altName: '완제품 캐비닛 또는 룸앤홈 스틸선반',
    altSearchKeyword: '완제품 철제 캐비닛 수납장'
  },
  {
    id: 'ikea-malm',
    brand: 'IKEA',
    name: '이케아 말름(MALM) 서랍장',
    category: '수납·행거',
    verdict: 'NOPE',
    priceTier: '12~25만 원대',
    chips: ['전동드릴+망치 필수', '벽타공 권장', '초고중량'],
    oneLiner: '수납력 좋지만 조립 2시간+ 무게 40kg대라 원룸 이사·원상복구에 치명적.',
    specs: { dust: 1, deposit: 4, trouble: 4 },
    checks: [
      '서랍 다 열면 앞으로 넘어져 벽 타공 고정(안티팁) 권장',
      '십자·전동드릴·망치 별도 필요, 파티클보드 습기 취약',
      '조립 후 매우 무거워 혼자 방 배치 바꾸기 어려움'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '깊고 넉넉한 국민 서랍장 디자인',
    checkLine: '조립 2시간+40kg대 무게라 원룸 이사에 불리',
    altName: '리빙박스 모듈 또는 3단 경량 서랍장',
    altSearchKeyword: '원룸 3단 모듈 서랍장 완제품'
  },
  {
    id: 'ikea-eket',
    brand: 'IKEA',
    name: '이케아 에케트(EKET) 큐브 수납장',
    category: '수납·행거',
    verdict: 'NOPE',
    priceTier: '3~9만 원대',
    chips: ['조립 이케아 최악급', '다리 미타공', '문짝 단차'],
    oneLiner: '뒷판 90도 끼우기 극악이라 패널 파손 빈번 + 다리 구멍 없어 전동드릴 필수.',
    specs: { dust: 2, deposit: 2, trouble: 5 },
    checks: [
      '마지막 패널 90도 끼우는 구조가 뻑뻑해 파손·손다침 다수',
      '다리 추가 시 나사 구멍 미타공 많아 전동드릴 필수',
      '도어형 모듈은 경첩 오차로 문짝 양쪽 단차 맞추기 까다로움'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '원하는 모듈로 쌓는 컬러 큐브 수납장',
    checkLine: '뒷판 90도 결합이 까다로워 패널 파손 빈번',
    altName: '완제품 큐브 수납장 또는 무인양품 수납',
    altSearchKeyword: '완제품 모듈 큐브 수납장'
  },
  {
    id: 'ikea-baggebo',
    brand: 'IKEA',
    name: '이케아 바게보(BAGGEBO) 수납장·책장',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '3~5만 원대',
    chips: ['30분 쉬움', '종이포일 약함', '고하중 휨'],
    oneLiner: '극가성비+조립 30분 컷이나 종이 포일 마감이라 습기와 무거운 책에 약함.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '3~5만 원대 가격으로 도어 수납장·책장을 들일 수 있고, 30분 내외로 조립이 끝나는 입문용 모델',
      '화이트 메탈/우드 조합이 가벼워 작은 원룸에서도 답답해 보이지 않음'
    ],
    cautions: [
      '종이 포일 마감 보드이므로 물기가 닿는 주방보다 거실/침실용 가벼운 소품·문고판 수납용으로 적합'
    ],
    checks: [
      '리뷰 검증: 초보자 혼자 30분 컷이나 나사 과조임 시 헛돌 수 있음',
      '파티클보드+종이 포일 마감이라 물기·고하중 책 적재 시 휨',
      '가벼운 소품·잡화 수납용으로 적합'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '3~5만 원대에 30분 컷으로 세팅하는 도어장',
    checkLine: '종이포일 마감이라 물기 피하고 가벼운 소품 수납',
    altName: '한샘 샘책장 / 룸앤홈 스틸선반',
    altSearchKeyword: '룸앤홈 스틸 모듈 선반'
  },
  {
    id: 'ikea-ivar',
    brand: 'IKEA',
    name: '이케아 이바르(IVAR) 원목 선반',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '8~18만 원대',
    chips: ['생나무 거친마감', '사포질 권장', '벽고정 필수'],
    oneLiner: '감성 좋지만 무가공 소나무라 가시 박힘 주의(사포·바니시 셀프 권장).',
    specs: { dust: 4, deposit: 3, trouble: 3 },
    pros: [
      '무가공 소나무 원목 특유의 내추럴한 감성이 좋고, 선반 칸 높이를 자유롭게 바꿔 쓸 수 있음',
      '원하는 컬러로 바니시·오일 스테인 셀프 커스터마이징하기 딱 좋은 베이스 선반'
    ],
    cautions: [
      '마감이 안 된 생나무라 모서리가 거칠 수 있어 가볍게 사포질·바니시를 칠하고, 높은 모델은 전도 주의'
    ],
    checks: [
      '리뷰 검증: 마감 안 된 생나무 상태라 표면 거칠고 나무 가시 주의',
      '오픈 선반 구조라 먼지 쌓여 박스 수납 병행 추천',
      '높이 있는 유닛은 전도 방지를 위해 벽 고정 안내'
    ],
    tones: ['oak-natural', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['포근 내추럴', '컬러 포인트'],
    pairIds: ['livart-ronan', 'ikea-nesna'],
    goodLine: '생나무 원목 감성과 자유로운 선반 높이 조절',
    checkLine: '거친 표면 사포질·바니시 후 쓰면 마감 업그레이드',
    altName: '샌딩·코팅 마감된 원목/스틸 선반',
    altSearchKeyword: '바니시 마감 원목 선반장'
  },
  {
    id: 'ikea-fjallbo',
    brand: 'IKEA',
    name: '이케아 피엘보(FJÄLLBO) 철제·원목 선반',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '12~22만 원대',
    chips: ['전동드릴+2인', '문짝 수평 조절', '묵직한 무게'],
    oneLiner: '인더스트리얼 감성·내구 좋으나 나사 많아 전동드릴+2인 조립 필수.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '철제 메쉬 도어와 원목 상판 조합으로 인더스트리얼·홈카페장 무드를 내기에 완성도가 높음',
      '리모컨 신호·와이파이 전파가 메쉬 도어를 통과해 공유기/셋톱박스 수납 TV장으로 아주 유용'
    ],
    cautions: [
      '나사 개수가 많아 전동드릴과 2인 조립이 편하며, 문짝 단차를 맞추기 위해 마지막 나사 체결 전 수평 조정 필요'
    ],
    checks: [
      '리뷰 검증: 나사 수 많아 전동드릴 없으면 손목 아프고 2인 수평 권장',
      '철제 망+원목 조합이라 조립 오차 시 문짝 단차 스트레스',
      '완성 후 묵직하고 튼튼해 TV장·홈카페장 만족도 높음'
    ],
    tones: ['walnut-vintage', 'steel-modern', 'sage-terracotta'],
    styles: ['감성 빈티지', '모던·스틸'],
    pairIds: ['desker-desk', 'marketb-rusta'],
    goodLine: '철제 메쉬 도어로 리모컨·와이파이 통과 우수',
    checkLine: '나사가 많아 전동드릴+2인 수평 조립 권장',
    altName: '룸앤홈 스틸선반 (더 가볍고 간단한 조립)',
    altSearchKeyword: '룸앤홈 스틸 거실장 선반'
  },
  {
    id: 'ikea-raskog',
    brand: 'IKEA',
    name: '이케아 라스크호그(RÅSKOG) 3단 카트',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '3~4만 원대',
    chips: ['35cm 틈새 수납', '360° 바퀴 이동', '분체도장 스틸'],
    oneLiner: '냉장고 옆·책상 옆 좁은 틈새를 알차게 채워주는 튼튼한 이동식 만능 트롤리.',
    specs: { dust: 3, deposit: 1, trouble: 2 },
    pros: [
      '35×45cm 콤팩트한 바닥 면적으로 원룸 주방·침대 옆·화장대 보조 수납으로 활용도가 매우 높음',
      '파우더 코팅 스틸 프레임으로 튼튼하고 중간 선반 높이를 물건 크기에 맞춰 조절 가능'
    ],
    pairTips: [
      '최상단에 전용 대나무 뚜껑(HOGSMA)을 얹으면 협탁·임시 테이블로도 겸용 가능',
      '메쉬 바닥 틈이 신경 쓰이는 작은 소품(립밤·문구류)은 실리콘 매트나 소형 트레이를 깔아주면 깔끔함'
    ],
    checks: [
      '리뷰 검증: 바구니 바닥 메쉬 구멍 → 작은 소품 빠짐(이너매트 추천)',
      '짐 가득 실으면 바퀴 핸들링 다소 뻑뻑함',
      '간이 렌치 동봉 (십자드라이버 있으면 더 단단히 체결)'
    ],
    tones: ['white-minimal', 'steel-modern', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '모던·스틸', '컬러 포인트'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '35cm 틈새에 쏙 들어가는 360도 만능 트롤리',
    checkLine: 'HOGSMA 대나무 상판 얹으면 협탁으로도 겸용',
    altName: '이케아 라스크호그 + 호그스마(HOGSMA) 상판',
    altSearchKeyword: '라스크호그 호환 상판 매트'
  },
  {
    id: 'ikea-billy',
    brand: 'IKEA',
    name: '이케아 빌리(BILLY) 책장',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '7~12만 원대',
    chips: ['80cm 선반 U자 휨', '얇은 종이뒷판', '벽고정 필수'],
    oneLiner: '깔끔하지만 80cm 폭 모델은 무거운 책 꽂으면 가운데 선반이 휘어짐.',
    specs: { dust: 3, deposit: 3, trouble: 3 },
    pros: [
      '슬림한 깊이와 다양한 폭·높이 옵션으로 좁은 복도나 벽면을 깔끔한 서재로 바꾸기 좋은 스테디셀러',
      '유리문/도어 부속을 추가해 먼지 막이 장식장으로 확장하기 쉬움'
    ],
    cautions: [
      '80cm 넓은 폭 모델은 무거운 전공서적을 가득 꽂으면 선반이 휠 수 있어 책이 많다면 40cm 폭 권장'
    ],
    checks: [
      '리뷰 검증: 넓은 폭에 전공서적 가득 채우면 선반 중앙 U자 처짐',
      '뒷판이 매우 얇아 못질 시 찢어짐 주의',
      '높이 높아 벽 고정 브래킷 안내(원룸 타공 제약 확인)'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '슬림 깊이로 좁은 벽면을 서재로 바꾸는 책장',
    checkLine: '무거운 책 많다면 처짐 적은 40cm 폭 모델 권장',
    altName: '40cm 슬림형 빌리 또는 한샘 샘책장',
    altSearchKeyword: '이케아 빌리 40cm 책장'
  },
  {
    id: 'ikea-kallax',
    brand: 'IKEA',
    name: '이케아 칼락스(KALLAX) 정사각 선반',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '6~12만 원대',
    chips: ['허니콤 무거움', '재조립 약함', '칸 규격 고정'],
    oneLiner: 'LP·인테리어 예쁘지만 속이 허니콤이라 분해 후 재조립하면 헐거워짐.',
    specs: { dust: 3, deposit: 2, trouble: 3 },
    pros: [
      '정사각 큐브 비율이 시각적으로 안정적이며 LP 레코드판·도트 바스켓 수납 규격과 딱 맞음',
      '방 한가운데 파티션(공간 분리) 용도로 세워도 양면 모두 깔끔하게 보임'
    ],
    cautions: [
      '속이 허니콤 심재라 무게는 가볍지만 분해 후 재조립하면 나사홀이 헐거워져 한 자리 고정 사용 권장'
    ],
    checks: [
      '리뷰 검증: 분해·재조립 시 나사 구멍 헐거워져 흔들림 발생',
      '정사각 칸 고정이라 긴 물건·큰 박스 안 들어감',
      '오픈 칸 많으면 지저분해 보여 전용 바스켓 필수'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '감성 빈티지'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: 'LP판·정사각 바스켓 규격 딱 맞는 파티션 선반',
    checkLine: '허니콤 심재라 분해 재조립하면 헐거워져 고정 추천',
    altName: '칼락스 전용 드뢰나(DRÖNA) 수납함 조합',
    altSearchKeyword: '이케아 드뢰나 수납함'
  },
  {
    id: 'ikea-besta',
    brand: 'IKEA',
    name: '이케아 베스토(BESTÅ) 수납장',
    category: '수납·행거',
    verdict: 'NOPE',
    priceTier: '15~40만 원대',
    chips: ['경첩 수평 지옥', '부품 추가 과금', '벽고정 부담'],
    oneLiner: '모듈 조합 끝판왕이지만 문짝 경첩 맞추기 극악+부속 추가 시 예산 폭증.',
    specs: { dust: 1, deposit: 3, trouble: 4 },
    checks: [
      '도어 경첩 상하좌우 각도 맞추는 데 진땀 빠짐',
      '프레임+문+다리+선반 따로 담다 보면 가격 2배',
      '공중 부양(행잉) 설치는 월세집 타공 불가'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '거실·TV장 맞춤 확장 끝판왕 모듈 수납장',
    checkLine: '도어 경첩 수평 맞추기와 부속 추가 비용 부담',
    altName: '완제품 낮은 거실장/수납장',
    altSearchKeyword: '완제품 화이트 낮은 수납장'
  },
  {
    id: 'hanssem-sam',
    brand: 'HANSSEM',
    name: '한샘 샘(SAM) 책장',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '9~15만 원대',
    chips: ['기사 무료시공', '가성비 국민책장', '변형 적음'],
    oneLiner: '기사님이 수평까지 맞춰 설치해 주어 조립 스트레스 없이 쓰는 실속형 책장.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '기사 방문 시공으로 혼자 무거운 판재를 들고 조립하거나 수평 맞추는 수고가 전혀 없음',
      '10만 원 내외 가격대에서 판재 두께와 고정력이 안정적이라 원룸 기본 수납장으로 무난함'
    ],
    pairTips: [
      '전용 폴리바스켓이나 도어 세트를 필요한 칸에만 끼우면 잡동사니를 감춰 방이 훨씬 정돈돼 보임',
      '선반 높이 고정이므로 키 큰 LP·A4 파일 보관 여부는 칸 내경(약 32cm) 확인 후 배치 권장'
    ],
    checks: [
      '리뷰 검증: 전문 시공기사 방문 설치로 흔들림·조립 피로 없음',
      '선반 높낮이 조절 불가해 큰 앨범·화일 크기 확인 필수',
      '매우 무거운 책 빽빽이 꽂으면 미세 처짐 보고'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '기사 방문 시공으로 조립·수평 스트레스 제로',
    checkLine: '전용 바스켓 끼우면 오픈 칸 잡동사니 깔끔 정리',
    altName: '한샘 샘책장 5단 + 전용 폴리바스켓',
    altSearchKeyword: '한샘 샘책장 폴리바스켓'
  },
  {
    id: 'hanssem-samkids',
    brand: 'HANSSEM',
    name: '한샘 샘키즈 수납장',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '12~19만 원대',
    chips: ['틈새 먼지 유입', '플라스틱 레일 마모', '부품 추가금'],
    oneLiner: '수납력 좋지만 오픈 프레임과 박스 틈으로 먼지 들어가 바닥 청소 필요.',
    specs: { dust: 4, deposit: 1, trouble: 3 },
    pros: [
      '아이보리·파스텔톤 수납박스 덕분에 어수선한 옷·생활용품을 한 번에 가릴 수 있어 방이 환해 보임',
      '전문 기사 시공 옵션을 활용하면 수평 걱정 없이 탄탄하게 세팅 가능'
    ],
    cautions: [
      '플라스틱 박스 위아래 틈새로 먼지가 들어갈 수 있고, 무거운 짐을 자주 여닫으면 플라스틱 레일 마모 체크'
    ],
    checks: [
      '리뷰 검증: 플라스틱 박스와 프레임 사이 유격으로 하단 먼지 쌓임',
      '무거운 짐 넣고 세게 여닫으면 플라스틱 레일 마모·소음',
      '추후 선반/옷장으로 전환 시 추가 부속 별매 비용'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '파스텔 수납박스로 생활 잡화 한 번에 가림',
    checkLine: '박스 틈새 먼지 유입과 플라스틱 레일 마모 체크',
    altName: '도어형 서랍장 또는 무인양품 PP 서랍',
    altSearchKeyword: '도어형 4단 서랍 수납장'
  },
  {
    id: 'roomnhome-steel',
    brand: 'ROOMNHOME',
    name: '룸앤홈 스틸 모듈 선반',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '4~9만 원대',
    chips: ['20분 간편 조립', '모던 화이트/우드', '가성비 모듈'],
    oneLiner: '깔끔한 스틸 프레임 감성을 합리적인 가격에 들일 수 있는 20분 컷 오픈 선반.',
    specs: { dust: 3, deposit: 1, trouble: 2 },
    pros: [
      '부품 수가 단순하고 육각렌치가 동봉돼 자취 초보자도 20~30분 안에 어렵지 않게 완성',
      '프레임이 슬림해 좁은 원룸에 두어도 시야를 덜 가리고 홈카페장·프린터 선반으로 활용도 높음'
    ],
    pairTips: [
      '불투명 리빙박스 2~3개와 함께 배치하면 오픈 선반 특유의 어수선함을 가릴 수 있음',
      '장판 방에서는 하단 조절 발판을 돌려 수평을 맞추면 흔들림 없이 안정적으로 고정됨'
    ],
    checks: [
      '리뷰 검증: 노출 나사 가리는 스티커 색상이 판자와 미세하게 다름',
      '육각렌치 동봉, 초보자 혼자 20~30분 컷',
      '원룸 장판 굴곡 있으면 하단 발판 수평 조절 필수'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['apix-gaming-desk', 'ikea-tertial'],
    goodLine: '무인양품 감성 스틸 선반을 반값에 20분 조립',
    checkLine: '불투명 리빙박스 2~3개 같이 두면 시각 노이즈 제로',
    altName: '룸앤홈 스틸 모듈 선반 + 화이트 수납박스',
    altSearchKeyword: '룸앤홈 스틸 선반'
  },
  {
    id: 'samick-wardrobe',
    brand: '삼익가구',
    name: '삼익가구 보급형 옷장·장롱',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '18~35만 원대',
    chips: ['초기 새가구 냄새', '바닥 수평 문단차', '가성비 기사설치'],
    oneLiner: '가성비 좋지만 보급형 자재 특유의 냄새 빠지는 데 2~4주 환기 필요.',
    specs: { dust: 1, deposit: 1, trouble: 3 },
    pros: [
      '20만 원 전후 합리적 가격으로 기사 설치까지 받아 깔끔한 여닫이 옷장을 들일 수 있는 가성비 모델',
      '내부 선반/행거 구성 선택 폭이 넓어 자취방 옷 수납을 한 번에 정리하기 좋음'
    ],
    cautions: [
      '보급형 MDF 자재 특성상 배송 직후 2~4주간 충분한 환기가 필요하며 바닥 수평에 맞춰 문 단차 확인 필수'
    ],
    checks: [
      '리뷰 검증: 배송 후 초기 MDF/마감재 냄새 빠지는 데 수주 소요',
      '원룸 바닥 수평 틀어지면 문짝 단차·닫힘 뻑뻑함 발생',
      '기사 설치 포함 여부는 옵션별 확인 필수'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: '20만 원대 기사 설치 포함 가성비 여닫이 옷장',
    checkLine: '초기 MDF 냄새 빠지도록 2~4주 환기 필요',
    altName: 'E0 등급 인증 완제품 옷장 + 초기 2주 환기',
    altSearchKeyword: 'E0 등급 원룸 슬림 옷장'
  },
  {
    id: 'borneo-wardrobe',
    brand: '보루네오',
    name: '보루네오 여닫이·붙박이 옷장',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '25~60만 원대',
    chips: ['추가설치비 체크', '밀폐 초기냄새', '기사 숙련도'],
    oneLiner: 'E0 자재로 무난하나 현장 여건(사다리차·몰딩) 따라 추가비 발생 주의.',
    specs: { dust: 1, deposit: 2, trouble: 2 },
    pros: [
      'E0 등급 자재와 차분한 컬러감으로 오래 써도 질리지 않는 국내 브랜드 기본형 옷장',
      '문짝 댐핑 경첩 등 기본 Hardware 품질이 보급형 저가 제품 대비 안정적'
    ],
    cautions: [
      '설치 환경(사다리차·기존 가구 이동)에 따른 현장 추가 비용 조건과 초기 며칠간의 환기만 챙기면 무난'
    ],
    checks: [
      '리뷰 검증: 밀폐 옷장 특성상 초기 며칠 환기 필요',
      '사다리차·기존가구 철거 등 현장 추가 비용 사전 확인',
      '보급형 라인은 도어 경첩·손잡이 부속 내구성 평범'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['desker-desk', 'ikea-fado'],
    goodLine: 'E0 자재+차분한 톤으로 무난한 기본형 옷장',
    checkLine: '사다리차 등 현장 추가비 조건만 사전 확인',
    altName: '이동 가능한 독립형 800mm 옷장 (원룸 추천)',
    altSearchKeyword: '원룸 800 여닫이 옷장 E0'
  },

  // ==================== 3. 소파 · 침대 · 매트리스 · 패브릭 (18종) ====================
  {
    id: 'mongbijou-boucle',
    brand: '오늘의집 인기',
    name: '몽비쥬 등 부클레 패브릭 소파',
    category: '소파·침대·매트',
    verdict: 'NOPE',
    priceTier: '15~35만 원대',
    chips: ['털·부스러기 끼임', '올 튿어짐', '물세탁 불가'],
    oneLiner: '양털 루프 직조에 먼지·음식물 박히면 안 빠지고 세탁 시 뭉개짐.',
    specs: { dust: 5, deposit: 2, trouble: 5 },
    checks: [
      '꼬인 루프 틈에 머리카락·반려동물 털 고착',
      '커피·국물 스며들면 물티슈로 복구 불가',
      '반려동물 발톱에 올 쉽게 뜯기며 중고 처분 어려움'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '포근한 양털 질감의 트렌디한 감성 소파',
    checkLine: '루프 직조에 국물·먼지 박히면 세탁 복구 불가',
    altName: '커버 분리 세탁 소파 (이케아 클리판/쇠데르함)',
    altSearchKeyword: '커버분리 세탁가능 2인 소파'
  },
  {
    id: 'casamia-campo',
    brand: 'CASAMIA',
    name: '까사미아 캄포(CAMPO) 소파',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '150~300만 원대',
    chips: ['구스 꺼짐·토닥임', '깃털 찌름', '셀프세탁 불가'],
    oneLiner: '구름 착석감이지만 주기적 쿠션 두드림 필수 + 미세 깃털 삐져나옴 주의.',
    specs: { dust: 3, deposit: 2, trouble: 3 },
    pros: [
      '구스 다운 충전재 특유의 푹 안기는 구름 착석감과 모듈 이동 자유도가 매우 높은 인기 소파',
      '생활 발수 기능성 패브릭이라 일상적인 가벼운 얼룩 닦아내기가 수월함'
    ],
    cautions: [
      '구스 소재 특성상 앉은 뒤 쿠션을 손으로 두드려 펴주어야 뭉침이 없고, 세탁은 전문 케어 권장'
    ],
    checks: [
      '리뷰 검증: 구스 충전재 뭉침·꺼짐 있어 자주 두드려 펴야 함',
      '원단 뚫고 깃털 삐져나와 찌르는 현상 간헐 보고',
      '커버 분리되나 부피 커서 집 세탁 불가(전문 세탁소)'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '몸을 감싸는 구름 착석감과 모듈 이동 자유도',
    checkLine: '구스 뭉침 막으려면 가끔 쿠션 두드려 펴주기',
    altName: '이케아 쇠데르함 / 고밀도 폼 아쿠아텍스 소파',
    altSearchKeyword: '아쿠아텍스 모듈 소파'
  },
  {
    id: 'ikea-soderhamn',
    brand: 'IKEA',
    name: '이케아 쇠데르함(SÖDERHAMN) 소파',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '40~80만 원대',
    chips: ['낮은 등받이', '커버 통세탁', '세탁 후 수축'],
    oneLiner: '커버 통세탁은 최강 장점이나, 등받이 낮고 뒤로 누워 허리 쿠션 별도 필요.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '커버 전체를 분리해 세탁기로 물세탁할 수 있고, 팔걸이·카우치 모듈 조합을 마음대로 바꿀 수 있음',
      '다리가 높고 디자인이 슬림해 큰 소파 치고 원룸을 덜 좁아 보이게 만드는 매력이 큼'
    ],
    cautions: [
      '좌방석이 깊고 등받이가 낮아 정자세로 앉기보단 기대어 눕기에 최적화 (허리 쿠션 추가하면 훨씬 편함)'
    ],
    checks: [
      '리뷰 검증: 커버 전체 분리 후 세탁기 물세탁 가능(관리 최상)',
      '좌방석 깊고 등받이 낮아 정자세로 앉기 불편',
      '밝은 커버 세탁 시 약간 수축해 다시 씌울 때 빡빡함'
    ],
    tones: ['white-minimal', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '커버 전체 분리 세탁 가능+슬림한 다리 비율',
    checkLine: '등받이가 낮아 허리 쿠션 추가하면 훨씬 편함',
    altName: '등받이용 큰 쿠션 2개 추가 조합',
    altSearchKeyword: '소파 등받이 빅쿠션'
  },
  {
    id: 'ikea-klippan',
    brand: 'IKEA',
    name: '이케아 클리판(KLIPPAN) 2인 소파',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '25~35만 원대',
    chips: ['커버 통세탁', '커버 색상 교체', '자취방 정석 소파'],
    oneLiner: '커버를 통째로 벗겨 세탁·교체할 수 있어 자취방에서도 오염 부담이 적은 소파.',
    specs: { dust: 3, deposit: 1, trouble: 2 },
    pros: [
      '지퍼로 커버 전체가 분리돼 세탁기 물세탁이 가능하고, 질리거나 오염되면 커버만 새로 교체 가능',
      '폭 180cm 콤팩트 비율과 탄탄한 메탈 스프링 프레임으로 6~8평 원룸에도 무리 없이 들어감'
    ],
    pairTips: [
      '등받이가 낮은 편이므로 푹 기대 쉬고 싶다면 등 쿠션 2개 + 스툴을 함께 두면 편안함이 크게 올라감',
      '반려동물이 있다면 스크래치에 강한 두꺼운 코튼/캔버스 계열 커버(방수 패드 병행) 추천'
    ],
    checks: [
      '리뷰 검증: 커버 벗겨 세탁기 가능 + 오염 시 커버만 교체',
      '쿠션 포근함보다 단단한 편, 등받이 낮아 목 기댐 불가',
      '기본 패브릭 정전기 먼지 붙어 돌돌이 필요'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '커버 통세탁+색상 교체 가능한 자취 정석 소파',
    checkLine: '등받이 낮으니 등 쿠션 2개·스툴 조합 추천',
    altName: '이케아 클리판 소파 + 등쿠션·발스툴 조합',
    altSearchKeyword: '이케아 클리판 소파 커버'
  },
  {
    id: 'ikea-poang',
    brand: 'IKEA',
    name: '이케아 포앙(POÄNG) 암체어',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '12~19만 원대',
    chips: ['허리 말림 주의', '일어날 때 힘듦', '앞뒤 부피 큼'],
    oneLiner: '탄성감 좋지만 등허리 둥글게 말려 장시간 착석 시 허리 부담+스툴 두면 부피 큼.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '자작나무 겹판 프레임 특유의 탄성이 몸을 부드럽게 받아주어 독서·영화 감상용 라운지 체어로 호평',
      '커버 교체가 가능하고 무게가 가벼워 거실·창가 이동이 쉬움'
    ],
    cautions: [
      '깊게 뒤로 눕는 각도라 허리 받침 쿠션을 대면 훨씬 편하며, 풋스툴까지 놓으면 앞뒤 공간 꽤 차지'
    ],
    checks: [
      '리뷰 검증: 뒤로 기대는 각도라 허리 받침 쿠션 없으면 요통 보고',
      '깊게 앉는 구조라 체구 작을수록 일어설 때 힘듦',
      '원룸에선 스툴까지 두면 의외로 앞뒤 공간 많이 차지'
    ],
    tones: ['oak-natural', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['포근 내추럴', '깔끔 미니멀', '컬러 포인트'],
    pairIds: ['livart-ronan', 'hanssem-sam'],
    goodLine: '자작나무 프레임 탄성이 부드러운 독서 암체어',
    checkLine: '뒤로 눕는 각도라 허리 받침+앞뒤 공간 확인',
    altName: '포앙 + 요추 쿠션 병행 또는 컴팩트 1인 체어',
    altSearchKeyword: '컴팩트 패브릭 1인 암체어'
  },
  {
    id: 'ikea-strandmon',
    brand: 'IKEA',
    name: '이케아 스트란드몬(STRANDMON) 윙체어',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '30~38만 원대',
    chips: ['단단한 쿠션', '등받이 단추 압박', '좁은방 부피감'],
    oneLiner: '클래식 디자인 예쁘지만 쿠션 생각보다 단단하고 등받이 단추 마감 체형 탐.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '클래식한 윙체어 실루엣 하나로 원룸·서재 포인트 인테리어 분위기를 확실히 살려주는 의자',
      '높은 등받이와 측면 날개가 머리와 어깨를 감싸주어 아늑한 개인 휴식 존 연출에 좋음'
    ],
    cautions: [
      '쿠션이 생각보다 탄탄한 편이고 부피감이 있어 5~6평 원룸보다는 7평 이상 거실·코너 배치가 자연스러움'
    ],
    checks: [
      '리뷰 검증: 푹신함보다 단단한 착석감 + 등받이 단추 부위 배김 호불호',
      '키가 크거나 작으면 목 위치가 애매할 수 있음',
      '시각적·물리적 부피감 커서 5~6평 원룸엔 부담'
    ],
    tones: ['walnut-vintage', 'oak-natural', 'sage-terracotta'],
    styles: ['감성 빈티지', '컬러 포인트'],
    pairIds: ['desker-desk', 'ikea-fjallbo'],
    goodLine: '공간 포인트 살려주는 클래식 윙체어 실루엣',
    checkLine: '착좌감 단단하고 부피 커 7평 이상 공간 추천',
    altName: '매장 시착 후 결정 또는 슬림형 1인 소파',
    altSearchKeyword: '원룸 슬림 1인 패브릭 소파'
  },
  {
    id: 'ikea-friheten',
    brand: 'IKEA',
    name: '이케아 프리헤텐(FRIHETEN) 소파베드',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '55~75만 원대',
    chips: ['경계면 배김(토퍼필수)', '조립·이동 극악', '낮은 등받이'],
    oneLiner: '수납+베드 겸용 최강이나 펼쳤을 때 접힘 경계 딱딱해 토퍼 추가 필수.',
    specs: { dust: 3, deposit: 2, trouble: 4 },
    pros: [
      '소파 아래 대용량 수납함과 손님용 더블 침대 변형 기능을 한 번에 해결하는 원룸 만능 소파베드',
      '등쿠션을 활용해 소파·카우치·침대 모드로 빠르게 전환할 수 있음'
    ],
    cautions: [
      '침대로 펼쳤을 때 프레임 경계면이 단단하므로 매일 수면용으로 쓴다면 얇은 토퍼를 깔아주는 것이 좋음'
    ],
    checks: [
      '리뷰 검증: 침대 변형 시 프레임 경계선 단단해 허리 배김(토퍼 권장)',
      '부피·무게 매우 커서 이사 시 분해·운반 난이도 상',
      '소파 모드 등받이가 낮고 얕아 장시간 기대기 아쉬움'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '하부 대용량 수납+더블 침대 변형 만능 소파베드',
    checkLine: '매일 침대로 쓰려면 접힘 경계 위 얇은 토퍼 추가',
    altName: '프리헤텐 + 얇은 5cm 토퍼 함께 사용',
    altSearchKeyword: '5cm 접이식 메모리폼 토퍼'
  },
  {
    id: 'ikea-nyhamn',
    brand: 'IKEA',
    name: '이케아 뉘하마(NYHAMN) 소파베드',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '25~35만 원대',
    chips: ['등받이 어정쩡', '변형 시 커버 밀림', '매트리스 옵션'],
    oneLiner: '가성비 소파베드이나 소파로 앉을 때 각도 어정쩡하고 접고 펼 때 커버 밀림.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '20만 원대에 심플한 소파와 침대 기능을 모두 해결하며, 커버를 벗겨 세탁할 수 있어 위생적',
      '프레임이 단순해 무거운 목재 소파베드 대비 원룸 공간 부담이 덜함'
    ],
    cautions: [
      '주 수면용 겸용이라면 기본 폼보다 포켓스프링 매트리스 옵션을 고르는 편이 허리 지지력에 훨씬 유리'
    ],
    checks: [
      '리뷰 검증: 침대 겸용 특성상 소파 착석감·각도 푹신함 부족',
      '변형할 때마다 매트리스와 커버 밀려 매번 손으로 정리 필요',
      '기본 폼보다 포켓스프링 매트리스 옵션이 수면엔 유리'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '20만 원대 커버 세탁 가능한 콤팩트 소파베드',
    checkLine: '수면 겸용이라면 기본 폼 대신 포켓스프링 선택',
    altName: '원룸엔 차라리 슈퍼싱글 침대+빅쿠션 추천',
    altSearchKeyword: '침대 등받이 삼각 빅쿠션'
  },
  {
    id: 'recliner-1p',
    brand: '오늘의집·쿠팡',
    name: '1인용 리클라이너 체어 (수동·전동)',
    category: '소파·침대·매트',
    verdict: 'NOPE',
    priceTier: '15~45만 원대',
    chips: ['뒷공간 필수', '초고중량', '기계·모터 AS'],
    oneLiner: '원룸 로망템이지만 젖힐 뒷공간 꽤 먹고 무거워 결국 옷걸이 신세 되기 쉬움.',
    specs: { dust: 3, deposit: 2, trouble: 4 },
    checks: [
      '벽에서 30~50cm 띄워야 젖혀져 원룸 동선 파괴',
      '철제 프레임+모터 무게 상당해 혼자 청소·이동 불가',
      '저가형 수동 레버/기어 고장 및 사용 빈도 급락 후기 다수'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '편안하게 다리 뻗고 쉬는 1인 휴식 체어',
    checkLine: '젖힐 뒷공간 많이 먹고 무거워 원룸 동선 압박',
    altName: '가벼운 1인 좌식/패브릭 체어 + 접이식 발받침',
    altSearchKeyword: '원룸 컴팩트 스툴 발받침 체어'
  },
  {
    id: 'ikea-brimnes',
    brand: 'IKEA',
    name: '이케아 브림네스(BRIMNES) 수납침대',
    category: '소파·침대·매트',
    verdict: 'NOPE',
    priceTier: '30~45만 원대',
    chips: ['조립 4~5시간', '재조립 불가(이사X)', '정강이 모서리'],
    oneLiner: '수납력 괴물이지만 분해 후 재조립 시 헐거워져 이사 자주 가는 자취생엔 NOPE.',
    specs: { dust: 2, deposit: 2, trouble: 5 },
    checks: [
      '조립 4~5시간 소요 + 분해·재조립 시 파티클보드 헐거워짐',
      '서랍 때문에 침대 높이 높고 각진 모서리에 정강이 부딪힘 주의',
      '오래 거주할 자가·장기 전세에 적합'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '헤드·하부까지 꽉 찬 압도적 수납침대',
    checkLine: '분해 후 재조립 시 헐거워져 이사 잦으면 비추',
    altName: '단순 철제·원목 프레임 + 하부 리빙박스',
    altSearchKeyword: '침대밑 수납 리빙박스 바퀴형'
  },
  {
    id: 'ikea-hemnes-daybed',
    brand: 'IKEA',
    name: '이케아 헴네스(HEMNES) 데이베드',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '45~65만 원대',
    chips: ['소나무 콕 찍힘', '확장 시 삐걱', '조립량 방대'],
    oneLiner: '감성 원탑이나 무른 소나무라 찍힘 쉽고 2인 확장 프레임 삐그덕 소음 주의.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '클래식한 화이트 원목 프레임과 하단 대형 서랍 3개가 어우러져 침실 로망 인테리어를 완성해 줌',
      '평소엔 싱글 데이베드/소파처럼 쓰다가 손님이 오면 더블 침대로 확장할 수 있음'
    ],
    cautions: [
      '무른 소나무 원목이라 찍힘에 주의하고, 확장 슬라이딩 구조 및 부품 수가 많아 2인 조립/기사 시공 권장'
    ],
    checks: [
      '리뷰 검증: 소나무 원목이 물러 손톱·물건 부딪힘에 쉽게 찍힘',
      '싱글→더블 확장 슬라이딩 구조상 사용할수록 삐걱 소음 발생',
      '서랍·프레임 조립 부품 방대해 2인 조립/시공 권장'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['포근 내추럴', '감성 빈티지'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '화이트 원목+서랍 3개 감성 데이베드 겸 더블',
    checkLine: '무른 소나무 찍힘 주의·부품 많아 2인 시공 권장',
    altName: '조립부 펠트 테이프 보강 + 단단한 고무나무 프레임',
    altSearchKeyword: '원목 데이베드 고무나무 프레임'
  },
  {
    id: 'hanssem-imbig',
    brand: 'HANSSEM',
    name: '한샘 아임빅 수납침대',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '35~55만 원대',
    chips: ['초고중량 이동불가', '하부 습기·환기', '서랍 뻑뻑함'],
    oneLiner: '원룸 수납 최강이지만 엄청 무겁고 바닥 밀착형이라 매트리스 아래 습기 관리 필수.',
    specs: { dust: 2, deposit: 2, trouble: 3 },
    pros: [
      '침대 아래 공간을 서랍과 벙커 수납장으로 빈틈없이 활용해 좁은 원룸 수납 문제를 극적으로 해결함',
      '기사 방문 시공으로 튼튼하게 조립되며 E0 등급 자재라 마감 신뢰도가 높음'
    ],
    cautions: [
      '무게가 매우 무거워 방 배치 변경이 어렵고, 바닥 밀착형이므로 환기 시 매트리스를 가끔 세워 습기 제거 권장'
    ],
    checks: [
      '리뷰 검증: 하부 전체가 수납이라 무게 엄청나 혼자 배치 변경 불가',
      '바닥 통기성 약해 주기적으로 매트리스 세워 환기 안 하면 곰팡이 위험',
      '서랍 가득 채우면 무거워지며 마찰 소음·뻑뻑함 발생'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '벙커+서랍으로 원룸 수납 문제 한 번에 해결',
    checkLine: '무거워 이동 불가·가끔 매트리스 세워 습기 환기',
    altName: '아임빅 + 매트리스 아래 제습패드/주기적 세워 말리기',
    altSearchKeyword: '매트리스 습기방지 제습시트'
  },
  {
    id: 'lady-storage-bed',
    brand: '레이디가구',
    name: '레이디가구 수납침대 · 화장대',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '20~40만 원대',
    chips: ['뒤척임 삐걱소음', '하부 통풍 약함', '화장대 레일 뻑뻑'],
    oneLiner: '트렌디한 가성비지만 보급형 레일 덜컹거림과 수납침대 삐걱 소음 주의.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '트렌디한 화이트/크림 톤 디자인에 수납침대·화장대를 가성비 있게 세트로 맞추기 좋은 라인업',
      '좁은 원룸에서 별도 옷장·서랍장 자리를 아끼고 싶을 때 실속 있는 선택'
    ],
    cautions: [
      '통판 수납침대 특성상 마찰 소음 예방용 펠트 패드 체크와 하부 습기 환기 관리만 챙기면 무난'
    ],
    checks: [
      '리뷰 검증: 수납침대 통판 구조상 뒤척임 시 나무 마찰 소음',
      '저가 화장대는 서랍 볼레일 부재로 뻑뻑함·스툴 쿠션 꺼짐',
      '수납침대 하단 틈새 먼지·습기 환기 관리 필요'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '크림톤 수납침대+화장대 세트로 원룸 톤 통일',
    checkLine: '마찰음 막는 펠트 패드와 하부 환기만 챙기기',
    altName: '볼레일 옵션 확인 또는 다리 높은 통풍형 프레임',
    altSearchKeyword: '청소기 들어가는 원목 침대 프레임'
  },
  {
    id: 'dongseo-storage-bed',
    brand: '동서가구',
    name: '동서가구 이즈카이 수납침대',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '22~38만 원대',
    chips: ['기본매트 단단함', '서랍 레일 확인', '초기 환기 필수'],
    oneLiner: '가성비 좋으나 기본 본넬 매트리스 딱딱해 토퍼 추가하는 경우 매우 많음.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '프레임+매트리스 세트를 합리적인 가격에 한 번에 해결할 수 있어 자취 초기 세팅 부담이 적음',
      '깊은 하단 서랍과 헤드보드 콘센트/수납 옵션 등 실용적인 편의 기능이 잘 들어가 있음'
    ],
    cautions: [
      '기본 세트 매트리스가 다소 단단할 수 있으므로 푹신한 감을 원하면 상단 토퍼를 얹거나 프레임 단독 구매 추천'
    ],
    checks: [
      '리뷰 검증: 세트 본넬 스프링 매트리스 단단·스프링 느낌 호불호',
      '하단 서랍 저가 레일 시 바닥 긁힘·뻑뻑함 가능',
      '배송 직후 MDF/PB 냄새 빠져야 해 며칠 환기 필수'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '프레임+매트리스 세트를 합리적 가격에 일괄 세팅',
    checkLine: '기본 매트가 단단해 푹신파는 상단 토퍼 추가 추천',
    altName: '프레임 단독 구매 + 지누스/독립스프링 매트리스 조합',
    altSearchKeyword: '독립스프링 슈퍼싱글 매트리스'
  },
  {
    id: 'wellfurniture-monster',
    brand: '웰퍼니쳐',
    name: '웰퍼니쳐 몬스터 수납침대',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '25~40만 원대',
    chips: ['매트리스 밀림', '방문설치 권장', '소음 발생 가능'],
    oneLiner: '수납은 광활하지만 매트리스가 잘 밀리고 셀프 조립 시 시간 매우 오래 걸림.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '압도적인 벙커+서랍 용량으로 계절 이불과 캐리어까지 침대 아래에 모두 수납 가능한 수납 특화 침대',
      '조명·USB 포트 등 실생활에 편리한 헤드보드 옵션을 고를 수 있음'
    ],
    cautions: [
      '매트리스가 밀리지 않도록 논슬립 패드를 깔고, 판재 무게가 커서 기사 방문 설치 옵션을 선택하는 것이 편함'
    ],
    checks: [
      '리뷰 검증: 통판 위 매트리스 밀림 방지 패드 깔지 않으면 자꾸 밀림',
      '판재 부피 커서 셀프 조립 비추(기사 방문 설치 선택 권장)',
      '뒤척임 잦을 시 장기 사용에 따른 미세 삐걱거림'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '계절 이불·캐리어까지 들어가는 대용량 벙커침대',
    checkLine: '매트리스 밀림 방지 패드 깔고 방문설치 선택 권장',
    altName: '기사 설치 옵션 + 매트리스 미끄럼방지 패드',
    altSearchKeyword: '매트리스 밀림방지 논슬립 패드'
  },
  {
    id: 'zinus-mattress',
    brand: 'ZINUS',
    name: '지누스 그린티 메모리폼 매트리스',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '12~25만 원대',
    chips: ['초기 냄새 72h', '여름 열감', '롤팩 복원'],
    oneLiner: '가성비 원탑이지만 폼 특성상 여름철 땀 차는 열감과 초기 냄새 환기 필수.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '압축 롤팩 배송으로 좁은 원룸 계단·엘리베이터에도 간편하게 들일 수 있는 가성비 메모리폼 매트리스',
      '몸의 굴곡을 포근하게 감싸주어 옆으로 자는 수면 자세에서도 어깨·골반 배김이 적음'
    ],
    cautions: [
      '개봉 직후 최소 24~72시간 창문을 열어 복원·환기해야 하며, 메모리폼 특성상 여름철엔 쿨링 패드 병행 추천'
    ],
    checks: [
      '리뷰 검증: 박스 개봉 후 최소 24~72시간 창문 열고 환기 필수',
      '메모리폼 특성상 겨울엔 단단하고 여름엔 등 열감 느껴짐',
      '고체중 사용자는 1~2년 뒤 꺼짐 체감 가능'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '롤팩 배송으로 좁은 계단도 간편 반입+가성비',
    checkLine: '개봉 후 24~72시간 환기·여름엔 쿨링패드 병행',
    altName: '지누스 하이브리드(스프링+폼) + 쿨링 패드',
    altSearchKeyword: '지누스 하이브리드 매트리스'
  },
  {
    id: 'emons-mattress',
    brand: 'EMONS',
    name: '에몬스 독립/유로탑 매트리스',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '35~80만 원대',
    chips: ['국내 정식 A/S', '검증된 스프링', '체형별 경도'],
    oneLiner: '꺼짐·냄새 뽑기 리스크 없이 오래 쓰기 좋은 국내 대표 브랜드 매트리스.',
    specs: { dust: 1, deposit: 1, trouble: 2 },
    pros: [
      '오프라인 매장과 공식 A/S 망이 잘 갖춰져 있어 스프링 꺼짐·하자 대응이 투명하고 안정적',
      '허리를 받쳐주는 탄탄한 독립스프링 라인업이 다양해 허리 약한 사용자 만족도가 높음'
    ],
    pairTips: [
      '온·오프라인 전용 모델 내장재가 다를 수 있으므로 구매 전 스프링 회전수·토퍼 두께 스펙 확인 권장',
      '부드러운 푹신함보다 허리 지지를 원한다면 유로탑보다 미디엄·하드 타입이 오래 쓰기 좋음'
    ],
    checks: [
      '리뷰 검증: 매장 시착 모델과 온라인 전용 저가형 내장재 다를 수 있음',
      '소프트 유로탑은 초기 포근하나 허리 약하면 하드/독립 추천',
      '중저가 인터넷 브랜드 대비 초기 가격대는 높음'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '오프라인 A/S 탄탄하고 허리 지지력 우수한 스프링',
    checkLine: '매장과 온라인 전용 내장재 차이 여부 사전 확인',
    altName: '에몬스 독립스프링 미디엄하드 매트리스',
    altSearchKeyword: '에몬스 독립스프링 하드 매트리스'
  },
  {
    id: 'slou-topper',
    brand: 'SLOU',
    name: '슬로우(Slou) 메모리폼 토퍼',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '18~30만 원대',
    chips: ['무게 매우 무거움', '여름 답답함', '바닥난방 주의'],
    oneLiner: '쫀쫀한 착와감 좋지만 엄청 무거워 커버 세탁 시 힘들고 겨울 보일러 고온 변형 주의.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '고밀도 메모리폼의 쫀쫀한 탄성과 포근함 덕분에 기존 딱딱한 바닥·매트리스를 호텔 침대처럼 바꿔줌',
      '오가닉 겉커버 분리 세탁이 가능해 위생 관리가 편리함'
    ],
    cautions: [
      '고밀도 폼이라 무게가 묵직하고, 바닥난방 고온 장시간 사용 시 폼 물성 저하를 막기 위해 온도 조절 주의'
    ],
    checks: [
      '리뷰 검증: 고밀도 폼이라 생각보다 훨씬 무거워 들거나 털기 힘듦',
      '몸 감싸는 폼이라 여름 열감 있고 바닥난방 고온 시 물성 변형 우려',
      '푹 파묻혀 자고 일어날 때 힘 더 든다는 호불호'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '고밀도 폼 탄성으로 딱딱한 바닥을 침대처럼 보완',
    checkLine: '무게 묵직하고 바닥난방 고온 사용 시 변형 주의',
    altName: '가벼운 3단 폴딩 토퍼 또는 쿨링 겉커버 병행',
    altSearchKeyword: '슬로우 토퍼 쿨링 패드'
  },
  {
    id: 'mongze-mattress',
    brand: 'MONGZE',
    name: '몽제(Mongze) 딥슬립 매트리스',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '35~48만 원대',
    chips: ['돌처럼 단단함', '바스락 소음', '3단 이음새'],
    oneLiner: '물세탁·통풍 최강이나 돌덩이처럼 단단해 푹신한 침대 선호 시 어깨 아픔.',
    specs: { dust: 1, deposit: 1, trouble: 3 },
    pros: [
      '겉커버는 물론 내장재(에어네트)까지 통째로 물세탁이 가능해 집먼지진드기·땀·위생 걱정이 없음',
      '통기성이 뛰어나 여름철 등 배김이나 꿉꿉함이 적은 탄탄한 매트리스'
    ],
    cautions: [
      '지지력이 돌처럼 탄탄한 편이라 푹신하게 감기는 감을 원한다면 하드한 착와감에 적응 기간 필요'
    ],
    checks: [
      '리뷰 검증: 극강의 단단한 지지력 → 푹신파는 초기 어깨·허리 통증',
      '에어네트 그물 소재라 뒤척일 때 바스락 소음·바닥 밀림 발생',
      '3단 분리형 이음새 느껴질 수 있음 + 가격대 높은 편'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '에어네트 내장재까지 통째로 물세탁 가능한 위생',
    checkLine: '돌처럼 단단한 지지력이라 푹신파엔 적응 필요',
    altName: '에어네트 위 도톰한 순면 패드 깔아 소음·단단함 완화',
    altSearchKeyword: '슈퍼싱글 도톰한 누빔 패드'
  },
  {
    id: 'folding-mattress',
    brand: '오늘의집·쿠팡',
    name: '가성비 3단 접이식 매트리스',
    category: '소파·침대·매트',
    verdict: 'NOPE',
    priceTier: '5~11만 원대',
    chips: ['접힘선 허리배김', '6개월 꺼짐', '바닥 결로 곰팡이'],
    oneLiner: '접어두기 편하지만 매일 자면 이음새 허리 배기고 바닥에 깔면 곰팡이 잘 핌.',
    specs: { dust: 3, deposit: 2, trouble: 5 },
    checks: [
      '3단 접히는 홈 부분이 꺼지거나 허리에 배김',
      '저밀도 스펀지는 매일 사용 시 수개월 내 푹 꺼짐',
      '바닥 직사용 시 습기 차므로 매일 세워 말리지 않으면 곰팡이'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '낮에 접어 공간을 넓게 쓰는 3단 바닥 매트',
    checkLine: '이음새 허리 배김과 바닥 습기 곰팡이 위험 높음',
    altName: '깔판(파렛트) + 통판 10cm+ 롤팩 매트리스',
    altSearchKeyword: '통기성 원목 침대 깔판'
  },
  {
    id: 'luna-bed-frame',
    brand: '오늘의집·쿠팡',
    name: '가성비 원목/철제 심플 침대프레임',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '7~15만 원대',
    chips: ['뒤척임 삐걱소음', '나사 주기적 조임', '하부 먼지'],
    oneLiner: '예쁘고 싸지만 3~6개월 쓰면 삐걱 소음 나사 재조임과 하부 먼지 쌓임.',
    specs: { dust: 4, deposit: 2, trouble: 3 },
    pros: [
      '미니멀한 저상형/원목 감성 프레임으로 원룸이 훨씬 넓고 깔끔해 보이는 인테리어 효과가 뛰어남',
      '10만 원대 가성비로 하부 공간이 뚫려 있어 매트리스 통기성 관리가 수월함'
    ],
    cautions: [
      '결합 부위에 펠트 테이프를 붙여 조립하고 3~6개월마다 나사 조임을 점검하면 삐걱거림 없이 오래 씀'
    ],
    checks: [
      '리뷰 검증: 마찰 부위 삐걱거림 → 육각렌치 3개월마다 재조임',
      '하부 높이 10cm 미만이면 청소기 안 들어가 먼지 지옥',
      '결합 부위에 무소음 펠트 테이프 붙이고 조립 시 소음 감소'
    ],
    tones: ['oak-natural', 'white-minimal', 'walnut-vintage', 'butter-pastel', 'sage-terracotta'],
    styles: ['포근 내추럴', '깔끔 미니멀'],
    pairIds: ['livart-ronan', 'hanssem-sam'],
    goodLine: '미니멀 저상·원목 프레임으로 방이 넓어 보임',
    checkLine: '조립 시 펠트 테이프 붙이고 3개월마다 나사 점검',
    altName: '하부 20cm+ 높은 프레임(청소기 진입 가능)',
    altSearchKeyword: '청소기 들어가는 침대 프레임'
  },
  {
    id: 'shaggy-rug',
    brand: '쿠팡·오늘의집',
    name: '장모 샤기 / 극세사 대형 러그',
    category: '소파·침대·매트',
    verdict: 'NOPE',
    priceTier: '2~5만 원대',
    chips: ['진드기·먼지 온상', '세탁기 불가', '장판 변색'],
    oneLiner: '긴 털에 청소기 걸리고, 뒷면 고무가 겨울 난방에 장판 눌어붙어 변색됨.',
    specs: { dust: 5, deposit: 4, trouble: 5 },
    checks: [
      '원룸 9~10kg 세탁기 용량 초과 → 코인세탁소 비용',
      '논슬립 고무가 보일러 열에 녹아 장판 황변(원상복구 주의)',
      '음식물·머리카락 빠지면 청소기로 제거 불가'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '포근한 발 촉감과 인테리어 분위기 전환 효과',
    checkLine: '긴 털 먼지 청소 지옥+난방 시 뒷면 장판 변색',
    altName: '세탁기 들어가는 단모 워셔블 폴리 러그',
    altSearchKeyword: '단모 워셔블 물세탁 러그'
  },

  // ==================== 4. 식탁 · 주방 · 생활가전/용품 (10종) ====================
  {
    id: 'ikea-docksta',
    brand: 'IKEA',
    name: '이케아 독스타(DOCKSTA) 원형 식탁',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '22~28만 원대',
    chips: ['중앙기둥 미세흔들림', '김치·카레 이염', '하부 초고중량'],
    oneLiner: '카페 감성 최강이나 1기둥 구조라 한쪽 기대면 흔들리고 화이트 상판 이염 주의.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '중앙 단일 기둥과 부드러운 곡선 실루엣 덕분에 좁은 다이닝 공간에서도 의자 동선이 걸리지 않음',
      '놓기만 해도 카페·브런치 무드를 만들어 주는 검증된 디자인 스테디셀러'
    ],
    cautions: [
      '1기둥 구조 특성상 한쪽 끝에 강하게 기대면 미세 흔들림이 있고, 화이트 상판 음식물 얼룩은 바로 닦기 권장'
    ],
    checks: [
      '리뷰 검증: 중앙 단일 기둥 특성상 팔꿈치 기대면 반대쪽 들림/흔들림',
      '화이트 상판에 김치국물·카레·스크래치 방치 시 자국 남음',
      '전도 방지용 하부 원판이 매우 무거워 운반·조립 시 2인 권장'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '감성 빈티지'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '중앙 1기둥 구조라 좁은 방에서도 의자 동선 쾌적',
    checkLine: '화이트 상판 김치·카레 이염은 바로 닦아주기',
    altName: '독스타 + 투명 식탁 매트 병행 또는 4다리 원형 식탁',
    altSearchKeyword: '원형 식탁 투명 PVC 매트'
  },
  {
    id: 'ikea-ekedalen',
    brand: 'IKEA',
    name: '이케아 에케달렌(EKEDALEN) 확장식탁',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '28~40만 원대',
    chips: ['확장 틈새 찌꺼기', '조립 난이도 상', '무게 무거움'],
    oneLiner: '평소 4인·손님 시 확장 유용하나 조립 어렵고 상판 확장 틈에 이물질 낌.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '평소엔 2~4인 컴팩트 식탁으로 쓰다가 손님 방문 시 다리 간섭 없이 넓게 확장되는 구조가 매우 실용적',
      '깔끔한 원목 무늬와 안정적인 사다리형 다리 프레임 덕분에 식탁·대형 작업대 겸용으로 훌륭함'
    ],
    cautions: [
      '확장 레일 조립 무게가 묵직하므로 2인 조립 권장, 평소 확장 기능을 거의 안 쓴다면 고정형 식탁이 더 깔끔'
    ],
    checks: [
      '리뷰 검증: 확장 레일·다리 조립 난이도 높고 무게 무거움',
      '가운데 확장 판넬 결합 틈새에 미세 단차·부스러기 낌',
      '접고 펴는 일 드물면 고정형 식탁이 훨씬 깔끔'
    ],
    tones: ['oak-natural', 'walnut-vintage', 'sage-terracotta'],
    styles: ['포근 내추럴', '감성 빈티지'],
    pairIds: ['livart-ronan', 'hanssem-sam'],
    goodLine: '평소 4인에서 손님 올 때 넓게 펼치는 확장 식탁',
    checkLine: '무게감 있어 2인 조립·확장 안 쓰면 고정형 추천',
    altName: '원룸엔 가벼운 800mm 2인 사각/반원 식탁',
    altSearchKeyword: '원룸 2인용 반원 화이트 식탁'
  },
  {
    id: 'ceramic-2p-table',
    brand: '오늘의집 인기',
    name: '2인용 세라믹 식탁 세트',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '15~30만 원대',
    chips: ['그릇 쨍 소음', '모서리 이나감', '겨울 팔 시림'],
    oneLiner: '스크래치·열에 강하지만 그릇 내려놓을 때 시끄럽고 모서리 충격 시 깨짐.',
    specs: { dust: 1, deposit: 1, trouble: 3 },
    pros: [
      '김치·카레·뜨거운 냄비를 바로 올려도 이염·스크래치·열 변형이 거의 없는 최강의 상판 내구성',
      '물걸레로 쓱 닦으면 끝나 1~2인 가구 식탁 겸 홈카페 테이블로 관리가 매우 편함'
    ],
    cautions: [
      '유리·도자기 그릇 닿을 때 소리가 날카로우니 식사 시 실리콘·패브릭 테이블 매트를 깔아두면 쾌적함'
    ],
    checks: [
      '리뷰 검증: 식기 부딪히는 날카로운 소음 커서 실리콘 매트 필수',
      '단단해서 유리컵·도자기 그릇 잘못 놓으면 오히려 그릇이 깨짐',
      '모서리 무거운 물건 부딪히면 칩(이 나감) 발생·겨울 냉기'
    ],
    tones: ['white-minimal', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '뜨거운 냄비·김치 국물에도 얼룩·흠집 걱정 제로',
    checkLine: '그릇 닿는 소리 날카로우니 테이블 매트 함께 사용',
    altName: '세라믹 식탁 + 실리콘 테이블 매트 필수 조합',
    altSearchKeyword: '세라믹 식탁 실리콘 매트'
  },
  {
    id: 'ikea-nyboda',
    brand: 'IKEA',
    name: '이케아 뉘보달(NYBODA) 보조테이블',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '5~8만 원대',
    chips: ['양면 리버시블', '10분 직관 조립', '튼튼한 스틸다리'],
    oneLiner: '분위기 따라 상판 색을 뒤집어 쓸 수 있고 구조가 심플해 활용도가 높은 보조테이블.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '상판 양면 컬러가 달라 기분이나 인테리어 톤에 맞춰 뒤집어 쓰기 좋고 조립도 10분 내외로 간단함',
      '하부 그리드 선반이 함께 있어 리모컨·책·노트북을 올려두기 편해 원룸 침대/소파 옆에 최적화'
    ],
    pairTips: [
      '뜨거운 냄비나 컵을 자주 올려둔다면 코스터(받침)를 함께 두어 시트지 변형을 예방하면 오래 씀',
      '높낮이가 낮아 좌식용 간이 테이블이나 소파 사이드 테이블로 활용 시 가장 자연스러움'
    ],
    checks: [
      '리뷰 검증: 상판 뒤집어 분위기 전환 가능하고 조립 간단',
      '시간 지나면 다리/바퀴 나사 느슨해져 한 번씩 조여야 함',
      '뜨거운 냄비 바로 올리면 상판 자국 남음'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['모던·스틸', '깔끔 미니멀', '컬러 포인트'],
    pairIds: ['apix-gaming-desk', 'roomnhome-steel'],
    goodLine: '양면 상판 컬러 전환 가능+10분 간편 조립',
    checkLine: '뜨거운 컵·냄비는 코스터 깔아 상판 시트 보호',
    altName: '이케아 뉘보달 + 규조토/코르크 코스터 세트',
    altSearchKeyword: '실리콘 냄비받침 코스터'
  },
  {
    id: 'ikea-risatorp',
    brand: 'IKEA',
    name: '이케아 리사토르프(RISATORP) 철망 바구니',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '1~1.5만 원대',
    chips: ['완제품 무조립', '원목 손잡이', '통기성 메쉬'],
    oneLiner: '조립 없이 바로 놓기만 해도 주방·책상 위 잡동사니를 깔끔하게 묶어주는 바구니.',
    specs: { dust: 3, deposit: 1, trouble: 2 },
    pros: [
      '손잡이만 걸면 되는 사실상 완제품에 스틸 메쉬가 튼튼해 과일·빵·화장품·수건 어디에나 잘 어울림',
      '통풍이 잘 되는 메쉬 구조라 양파·감자·간식류나 데일리 잡화를 한눈에 찾기 좋음'
    ],
    pairTips: [
      '빵 부스러기나 작은 소품을 넣을 땐 바닥에 키친타월·린넨 천 한 장 깔아주면 훨씬 깔끔하게 관리됨',
      '물기가 고이는 싱크대 안쪽·욕실보다 건식 주방 상판, 팬트리, 드레스룸 선반 위에 두는 것이 가장 오래 감'
    ],
    checks: [
      '리뷰 검증: 완제품/손잡이만 끼우는 수준이라 조립 스트레스 0',
      '습한 욕실·싱크대 물기 방치 시 철망 이음새 녹 발생',
      '작은 가루·부스러기 떨어지는 식품엔 종이호일 깔기 추천'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '무조립 완제품에 스틸 메쉬로 주방·책상 만능 수납',
    checkLine: '싱크대 물기 피하고 건식 주방·팬트리에 두고 쓰기',
    altName: '이케아 리사토르프 바스켓 2개 세트',
    altSearchKeyword: '이케아 리사토르프 바스켓'
  },
  {
    id: 'stainless-dish-rack',
    brand: '쿠팡·오늘의집',
    name: '스텐 1단/2단 식기건조대',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '2~5만 원대',
    chips: ['조리대 공간 점유', '물곰팡이 지옥', '2단 상부장 충돌'],
    oneLiner: '좁은 원룸 싱크대 다 차지하고, 물받이 트레이 매주 안 닦으면 분홍 물곰팡이.',
    specs: { dust: 2, deposit: 1, trouble: 4 },
    pros: [
      '스테인리스 소재로 녹에 강하고 설거지 후 자연 물빠짐 배수 가이드가 있어 위생적으로 오래 씀',
      '원룸 싱크대 규격에 맞는 슬림 폭(20~25cm대)을 고르면 수직 공간을 알차게 활용 가능'
    ],
    cautions: [
      '구매 전 상부장 높이 간섭 여부를 재고, 물받이 트레이는 주 1회 헹궈 물때만 관리하면 깔끔함'
    ],
    checks: [
      '리뷰 검증: 물빠짐 트레이·배수구에 주 1회 세척 안 하면 물때 고착',
      '1단은 프라이팬 자리 없고, 2단은 원룸 상부장에 걸리는 경우 다수',
      '원룸 좁은 주방에선 조리 공간 사라져 요리 포기하게 됨'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['apix-gaming-desk', 'roomnhome-steel'],
    goodLine: '녹에 강한 스텐+배수 가이드로 설거지 건조 편함',
    checkLine: '상부장 높이 먼저 재고 물받이 주 1회 헹구기',
    altName: '규조토/실리콘 롤업 건조 매트 + 접이식 식기거치대',
    altSearchKeyword: '싱크대 롤업 식기건조 매트'
  },
  {
    id: 'microwave-rack',
    brand: '쿠팡·오늘의집',
    name: '1~2만 원대 철제 전자레인지 선반',
    category: '식탁·주방·생활',
    verdict: 'NOPE',
    priceTier: '1.5~3만 원대',
    chips: ['작동 시 진동 흔들림', '조립 수평 불량', '문·코드 간섭'],
    oneLiner: '얇은 철제 프레임이라 전자레인지 돌릴 때마다 덜덜 떨리고 문 열림 간섭 잦음.',
    specs: { dust: 3, deposit: 1, trouble: 4 },
    checks: [
      '저가형 얇은 파이프는 전자레인지 진동·상단 밥솥 무게에 흔들림',
      '발판·문 열림 반경·뒤쪽 전원코드 길이 미계산 시 기둥에 걸림',
      '나사 조립 수평 안 맞아 덜컹거리는 후기 빈번'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['apix-gaming-desk', 'roomnhome-steel'],
    goodLine: '1~2만 원대 초저가로 전자레인지 위 수납 확보',
    checkLine: '얇은 철제라 작동 시 흔들림·소음 심함',
    altName: '두꺼운 스틸/목재 전자레인지 전용 렌지대 수납장',
    altSearchKeyword: '튼튼한 주방 렌지대 수납장'
  },
  {
    id: 'laundry-drying-rack',
    brand: '쿠팡·오늘의집',
    name: '저가형 접이식 실내 빨래건조대',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '2~4만 원대',
    chips: ['한쪽 쏠림 넘어짐', '원룸 동선 파괴', '겨울 빨래 쉰내'],
    oneLiner: '청바지·수건 한쪽에 널면 기우뚱 쓰러지고, 원룸 한가운데 펴면 걸을 길 없음.',
    specs: { dust: 2, deposit: 1, trouble: 4 },
    pros: [
      '접어서 틈새에 숨길 수 있고 펼치면 속옷부터 이불까지 넉넉하게 널 수 있는 자취 필수 생활템',
      '튼튼한 이중 잠금 관절·대형 X자형 제품을 고르면 무거운 빨래에도 안정적'
    ],
    cautions: [
      '한쪽 날개에만 무거운 청바지·수건을 몰아 널지 말고, 장마철엔 서큘레이터와 함께 쓰면 빨래 쉰내 방지'
    ],
    checks: [
      '리뷰 검증: 얇은 알루미늄/스틸 날개형은 무게 쏠릴 때 전도 빈번',
      '겨울·장마철 자연건조 지연 → 쉰내 예방 위해 서큘레이터/제습 병행',
      '접었을 때 틈새 보관 폭(두께) 확인 필수'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '접어서 틈새 보관 가능하고 이불까지 널 수 있음',
    checkLine: '무거운 빨래 한쪽 쏠림 주의·장마철 서큘 병행',
    altName: '하중 분산 H형 튼튼한 건조대 또는 창틀 거치형',
    altSearchKeyword: '무너지지 않는 H형 빨래건조대'
  },

  // ==================== 5. 조명 · 협탁 · 거울 (7종) ====================
  {
    id: 'ikea-fado',
    brand: 'IKEA',
    name: '이케아 파도(FADO) 원형 달 조명',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '2~3만 원대',
    chips: ['유리 파손 위험', '하단 가벼움', '전구 별매'],
    oneLiner: '은은한 감성 최고지만 갓 전체가 유리라 전선 스치면 떨어져 깨질 위험.',
    specs: { dust: 2, deposit: 1, trouble: 4 },
    pros: [
      '오팔 유리 특유의 부드러운 360도 확산광으로 2~3만 원대에 침실·거실 무드를 가장 예쁘게 바꿔주는 조명',
      '심플한 구체 디자인이라 원목·모던·미니멀 어떤 방 톤에도 자연스럽게 스며듦'
    ],
    cautions: [
      '유리 갓 대비 하단 받침이 가벼우니 발에 걸리지 않는 협탁·선반 안쪽에 두고, E26 2700K 전구색 전구 별매 체크'
    ],
    checks: [
      '장점: 오팔 유리 특유의 은은한 확산광으로 침실 무드등 연출이 뛰어남',
      '주의: 유리 갓 무게 대비 하단 베이스가 가벼워 전선 걸림·낙하 파손 주의',
      '참고 스펙: E26 전구 별매 (따뜻한 전구색 2700K LED 전구 조합 권장)'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '감성 빈티지', '컬러 포인트'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '오팔 유리 확산광으로 침실·거실 무드 연출 최상',
    checkLine: '유리 갓 무게 대비 하단 가벼워 협탁 안쪽 배치',
    altName: '충전식 무선 포터블 램프 (유선·파손 0)',
    altSearchKeyword: '무선 충전식 버섯 단스탠드'
  },
  {
    id: 'ikea-tertial',
    brand: 'IKEA',
    name: '이케아 테르티알(TERTIAL) 스윙 조명',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '2~3만 원대',
    chips: ['집게 클램프 파손', '스프링 삐걱', '전구 별매'],
    oneLiner: '작업등 가성비 좋지만 플라스틱 클램프 힘주면 쪼개지고 관절 스프링 소음.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '2만 원대 가성비에 자유로운 관절 각도 조절이 가능해 작업등·침대 독서등으로 활용도가 높음',
      '클램프(집게)와 벽 고정 브래킷을 모두 제공해 책상 공간을 차지하지 않음'
    ],
    cautions: [
      '책상 상판에 클램프 고정 시 플라스틱 파손을 막기 위해 과하게 조이지 말고 벽 뒤 여유 간격(10cm) 확보'
    ],
    checks: [
      '리뷰 검증: 책상 물리는 클램프 과조임 시 쪼개짐 빈번',
      '각도 바꿀 때 스프링 쇠 긁히는 삐걱 소리',
      '책상 뒤벽에 딱 붙이면 관절 움직일 공간 부족'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['모던·스틸', '감성 빈티지'],
    pairIds: ['apix-gaming-desk', 'roomnhome-steel'],
    goodLine: '2만 원대 자유로운 각도 조절 작업등·클램프 램프',
    checkLine: '플라스틱 집게 과조임 피하고 벽 뒤 10cm 여유',
    altName: '모니터 상단 거치 스크린바 (공간 0 차지)',
    altSearchKeyword: '모니터 스크린바 LED 조명'
  },
  {
    id: 'marketb-rusta',
    brand: 'MARKETB',
    name: '마켓비 루스타(RUSTA) 단스탠드',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '1~3만 원대',
    chips: ['전구 별도', '밝기 부족', '마감 유격'],
    oneLiner: '인테리어 무드엔 좋지만 공부·독서용으론 너무 어둡고 전구 크기 안 맞음 주의.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '슬림한 머쉬룸/모던 실루엣으로 낮에는 오브제, 밤에는 은은한 간접조명 역할을 톡톡히 함',
      '색상 선택 폭이 넓고 가격 부담이 적어 침대 옆 포인트 조명으로 인기가 많음'
    ],
    cautions: [
      '무드등 밝기이므로 책상 독서등 용도론 어둡고, E26 전구 별매 시 갓 크기 안에 들어가는 미니 볼전구 확인'
    ],
    checks: [
      '리뷰 검증: 무드등 전용이라 책 읽기엔 어두움',
      'E26 전구 별매 + 갓 크기 안 맞으면 전구 삐져나와 눈부심',
      '금속 연결부 미세 유격·도장 까짐 간혹 발생'
    ],
    tones: ['walnut-vintage', 'white-minimal', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['감성 빈티지', '모던·스틸'],
    pairIds: ['desker-desk', 'ikea-fjallbo'],
    goodLine: '버섯형 슬림 실루엣으로 포인트 오브제 조명 역할',
    checkLine: '독서등으론 어둡고 E26 미니 볼전구 호환 체크',
    altName: '밝기 3단 조절 무선 스탠드 (전구 포함)',
    altSearchKeyword: '3단 밝기조절 무선 단스탠드'
  },
  {
    id: 'ikea-nesna',
    brand: 'IKEA',
    name: '이케아 네스나(NESNA) 대나무 협탁',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '2만 원대',
    chips: ['유리상판 충격주의', '가벼운 흔들림', '오픈 먼지'],
    oneLiner: '2만 원대 감성 협탁이지만 가벼워 툭 치면 흔들리고 하단 선반 먼지 쌓임.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '대나무 프레임과 강화유리 상판 조합이 시원하고 가벼워 2만 원대에 감성적인 침대 협탁을 만들 수 있음',
      '하단 2단 선반에 잡지·충전기·안경 등을 분리해 올려두기 좋은 적당한 높이'
    ],
    cautions: [
      '가벼운 협탁이므로 정수기·무거운 가전 대신 스탠드·컵 등 가벼운 침실 소품용으로 활용 권장'
    ],
    checks: [
      '리뷰 검증: 얇은 대나무+유리 상판이라 무거운 가전·정수기 금지',
      '대나무 가시 거칠 수 있음 · 나사 수평 잘 맞춰야 함',
      '서랍 없는 오픈 구조라 지저분한 물건 안 가려짐'
    ],
    tones: ['oak-natural', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['포근 내추럴', '깔끔 미니멀', '컬러 포인트'],
    pairIds: ['livart-ronan', 'hanssem-sam'],
    goodLine: '대나무+유리 조합 2만 원대 시원한 감성 협탁',
    checkLine: '가벼운 프레임이라 가전 대신 스탠드·컵 정도 적당',
    altName: '네스나 + 상단 소형 트레이로 잡동사니 정리',
    altSearchKeyword: '미니 서랍 침대 협탁'
  },
  {
    id: 'ikea-gladom',
    brand: 'IKEA',
    name: '이케아 글라돔(GLADOM) 트레이테이블',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '2만 원대',
    chips: ['쟁반 덜그럭 소음', '도장 까짐', '초경량 흔들림'],
    oneLiner: '10분 컷 가성비 협탁이지만 분리형 철제 쟁반이라 건드리면 덜그럭 소음·도장 까짐.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '상판 쟁반을 분리해 티 트레이로 그대로 들고 이동할 수 있는 재치 있고 깔끔한 사이드 테이블',
      '10분 내외의 간단한 조립과 슬림한 다리 라인으로 소파 옆에 두기 딱 좋음'
    ],
    cautions: [
      '얹어두는 쟁반 구조라 다리 모서리에 투명 실리콘 범폰(충격방지 패드)을 붙이면 덜그럭 소음 없이 완벽함'
    ],
    checks: [
      '리뷰 검증: 얹혀 있는 쟁반 상판이라 투명 실리콘 범폰 붙이면 소음 해결',
      '매우 가벼워 컵 올려둔 채 부딪히면 쏟기 쉬움',
      '보급형 분체도장이라 날카로운 물건 긁히면 벗겨짐'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['모던·스틸', '깔끔 미니멀', '컬러 포인트'],
    pairIds: ['apix-gaming-desk', 'roomnhome-steel'],
    goodLine: '상판 쟁반을 분리해 티 트레이로 쓰는 영리한 구조',
    checkLine: '모서리 실리콘 범폰 붙이면 덜그럭 소음 해결',
    altName: '글라돔 + 실리콘 범폰(완충 스티커) 병행',
    altSearchKeyword: '투명 실리콘 범폰 가구 소음방지'
  },
  {
    id: 'marketb-side-table',
    brand: 'MARKETB',
    name: '마켓비 철제 사이드 테이블',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '2~4만 원대',
    chips: ['조립 손아픔', '철제 물기 녹', '미세 흔들림'],
    oneLiner: '인테리어 감성 좋지만 설명서 불친절하고 물기 오래 닿으면 녹·도장 까짐.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '감성적인 컬러 스틸 라인업으로 포인트 협탁·화분 받침대·침대 옆 테이블로 두기 예쁨',
      '가격 대비 인테리어 분위기 전환 효과가 크고 하부 수납 칸이 있어 실용적'
    ],
    cautions: [
      '차가운 음료 컵을 올려둘 땐 코스터를 사용해 도장면 물기·녹을 예방하고, 가벼운 소품 위주로 배치 권장'
    ],
    checks: [
      '리뷰 검증: 철제 아귀 맞추다 손 아프고 조립 시간 은근히 걸림',
      '차가운 컵 물기 방치 시 나사 주변 녹 발생 위험',
      '묵직한 가전 올리기엔 다소 흔들림'
    ],
    tones: ['steel-modern', 'walnut-vintage', 'sage-terracotta'],
    styles: ['감성 빈티지', '모던·스틸', '컬러 포인트'],
    pairIds: ['apix-gaming-desk', 'roomnhome-steel'],
    goodLine: '포인트 컬러 철제로 소파·침대 옆 분위기 전환',
    checkLine: '찬 음료는 코스터 써서 도장면 물기·녹 예방',
    altName: '완제품 모듈 협탁 + 코스터 병행',
    altSearchKeyword: '완제품 원룸 사이드 테이블'
  },
  {
    id: 'full-stand-mirror',
    brand: '오늘의집·쿠팡',
    name: '스탠드형 아치·원목 전신거울',
    category: '조명·거울',
    verdict: 'NOPE',
    priceTier: '4~9만 원대',
    chips: ['바닥 35cm 차지', '전도 파손 위험', '이사 처분 헬'],
    oneLiner: '뒤로 다리가 펼쳐져 5평 원룸 동선 막고, 이사 갈 때 파손·처분 골치.',
    specs: { dust: 2, deposit: 3, trouble: 4 },
    checks: [
      '스탠드 지지대 때문에 방 구석 죽는 공간 큼',
      '비산방지 필름 미부착 저가형은 깨지면 파편 위험',
      '10kg+ 유리라 이사 시 용달 부담 및 당근 급처분'
    ],
    tones: ['oak-natural', 'walnut-vintage', 'sage-terracotta'],
    styles: ['포근 내추럴', '감성 빈티지'],
    pairIds: ['livart-ronan', 'hanssem-sam'],
    goodLine: '전신 코디 확인에 좋은 아치·원목 스탠드 거울',
    checkLine: '뒷다리 펼쳐져 5평 원룸 동선 막고 파손 처분 골치',
    altName: '도어후크형 비산방지 슬림 전신거울 (공간 0)',
    altSearchKeyword: '도어후크 비산방지 전신거울'
  },

  // ==================== 6. 무타공 · 창문 · 욕실 (6종) ====================
  {
    id: '3m-command',
    brand: '3M',
    name: '3M 코맨드 무타공 테이프·후크',
    category: '무타공·욕실',
    verdict: 'WARN',
    priceTier: '0.5~1.5만 원대',
    chips: ['실크벽지 뜯김', '여름 고온다습 약함', '수평 제거 필수'],
    oneLiner: '타일·유리엔 최고지만 실크·합지 벽지에 붙였다 잘못 떼면 도배 뜯김.',
    specs: { dust: 1, deposit: 5, trouble: 3 },
    pros: [
      '유리·타일·매끈한 가구 옆면에 못질 없이 멀티탭·수건걸이·리모컨을 깔끔하게 고정하는 검증된 접착 솔루션',
      '정품 스트립은 수직 아래로 천천히 당기면 자국 없이 깔끔하게 제거됨'
    ],
    cautions: [
      '요철 있는 실크·합지 벽지에는 사용을 피하고(벽지엔 꼭꼬핀), 표기 하중의 70% 이내로 부착 권장'
    ],
    checks: [
      '리뷰 검증: 요철 있는 실크벽지엔 접착력 급락 또는 제거 시 찢어짐',
      '반드시 아래로 천천히 수평 당기기(끊어지면 참사)',
      '표기 무게 70% 이하로만 사용 권장'
    ],
    tones: ['white-minimal', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '모던·스틸', '컬러 포인트'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '타일·유리·가구에 못질 없이 깔끔하게 접착 고정',
    checkLine: '요철 벽지엔 뜯김 주의·벽지엔 꼭꼬핀 사용',
    altName: '벽지는 꼭꼬핀(2kg 이하), 타일엔 3M/진공흡착',
    altSearchKeyword: '진공흡착 욕실 선반'
  },
  {
    id: 'daiso-kkokkopin',
    brand: '다이소',
    name: '다이소 꼭꼬핀 (벽지 전용 핀)',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '1~2천 원대',
    chips: ['보증금 100% 방어', '공구 불필요', '초가성비'],
    oneLiner: '벽지 훼손 없이 포스터·시계를 걸어 퇴실 원상복구 스트레스를 없애주는 자취 필수템.',
    specs: { dust: 1, deposit: 2, trouble: 2 },
    pros: [
      '미세 핀을 벽지 틈에만 꽂는 방식이라 제거 후 자국이 거의 남지 않아 전·월세 보증금 방어에 최고',
      '1~2천 원대 가격으로 시계·가벼운 액자·패브릭 포스터를 1분 만에 걸 수 있음'
    ],
    pairTips: [
      '벽지 뒤가 비어 있지 않은 콘크리트 직시공 벽면엔 안 꽂히므로 손톱으로 벽지를 살짝 눌러 확인 후 구매',
      '지나가다 가방이나 팔에 걸리지 않는 눈높이 이상 벽면에 두고, 무거운 거울 대신 초경량 패브릭·아크릴 소품 추천'
    ],
    checks: [
      '리뷰 검증: 벽지 뒤 틈 없는 콘크리트 직시공 벽엔 핀이 안 꽂힘',
      '시계·엽서·가벼운 포스터만 (거울·선반 비추)',
      '지나가다 가방 걸리면 핀 휘며 벽지 찢어짐'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '감성 빈티지', '모던·스틸', '컬러 포인트'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '제거 후 자국 거의 없어 전·월세 보증금 100% 방어',
    checkLine: '콘크리트 직시공 벽엔 안 꽂히니 도배 틈 확인',
    altName: '꼭꼬핀 정품 + 초경량 캔버스/패브릭 포스터',
    altSearchKeyword: '다이소 꼭꼬핀 2kg'
  },
  {
    id: 'blackout-curtain',
    brand: '오늘의집·쿠팡',
    name: '원룸 암막 커튼 (기성·아일렛형)',
    category: '무타공·욕실',
    verdict: 'WARN',
    priceTier: '2~6만 원대',
    chips: ['무게로 압축봉 추락', '먼지 세탁 필수', '낮에도 어두움'],
    oneLiner: '우풍·빛 차단 최고지만 원단 매우 무거워 무타공 압축봉 달면 잘 떨어짐.',
    specs: { dust: 4, deposit: 3, trouble: 3 },
    pros: [
      '외풍 차단(단열)과 햇빛 차단 효과가 뛰어나 침실 숙면 질을 높이고 겨울 난방비를 줄여줌',
      '깔끔한 원색 린넨룩을 고르면 좁은 원룸 벽면 정리 정돈 효과가 매우 큼'
    ],
    cautions: [
      '원단 무게가 꽤 나가므로 무타공 압축봉 대신 기존 커튼레일·피스 고정 브래킷을 확인하고 주기적 먼지 세탁 권장'
    ],
    checks: [
      '리뷰 검증: 두꺼운 암막 원단 무게 때문에 저가 압축봉·꼭꼬핀 추락 다수',
      '기존 커튼봉/레일 여부 확인 필수 · 주기적 세탁 필요',
      '여름엔 커튼과 창문 사이 복사열 고여 열 주머니 형성'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '모던·스틸', '컬러 포인트'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '외풍·햇빛 차단으로 숙면과 겨울 난방비 절약',
    checkLine: '무게 나가니 저가 압축봉 대신 기존 레일 확인',
    altName: '기존 레일 확인 후 형상기억 암막커튼 / 경량 허니콤',
    altSearchKeyword: '기존 레일용 경량 형상기억 암막커튼'
  },
  {
    id: 'wood-roll-screen',
    brand: '오늘의집·쿠팡',
    name: '우드룩 롤스크린 블라인드',
    category: '무타공·욕실',
    verdict: 'NOPE',
    priceTier: '2~5만 원대',
    chips: ['물세탁 불가', '줄 고장·편심 말림', '양옆 빛샘'],
    oneLiner: '저렴하지만 한쪽으로 비뚤게 말려 올라가는 편심 고장과 세탁 불가 단점.',
    specs: { dust: 4, deposit: 3, trouble: 4 },
    checks: [
      '저가형은 올림줄·내부 톱니 고장 및 한쪽 쏠림(편심) 빈번',
      '물세탁 불가능해 음식 기름·얼룩 묻으면 닦기 까다로움',
      '창틀 밀착 안 돼 양옆 틈새 빛샘 심함'
    ],
    tones: ['oak-natural', 'walnut-vintage', 'sage-terracotta'],
    styles: ['포근 내추럴', '감성 빈티지'],
    pairIds: ['livart-ronan', 'hanssem-sam'],
    goodLine: '우드 질감 느낌 내는 가성비 롤스크린 블라인드',
    checkLine: '한쪽 비뚤게 감기는 편심 고장과 세탁 불가 단점',
    altName: '워셔블 암막커튼 또는 창틀 고정 허니콤 블라인드',
    altSearchKeyword: '창틀 무타공 허니콤 블라인드'
  },
  {
    id: 'wood-blind',
    brand: '오늘의집·쿠팡',
    name: '원목 / PVC 우드 블라인드',
    category: '무타공·욕실',
    verdict: 'NOPE',
    priceTier: '4~10만 원대',
    chips: ['천장 피스 타공', '날개 먼지 지옥', '무타공 추락'],
    oneLiner: '천장 드릴 타공 필수라 보증금 위험 높고 날개 수십 개 손으로 닦아야 함.',
    specs: { dust: 5, deposit: 5, trouble: 4 },
    checks: [
      '집주인 허가 없는 천장 피스 타공 시 원상복구 청구',
      '슬랫 한 줄씩 손으로 닦아야 해 먼지 관리 최악',
      '무거운 원목을 무타공 클립으로 달면 추락 파손 위험'
    ],
    tones: ['oak-natural', 'walnut-vintage', 'sage-terracotta'],
    styles: ['포근 내추럴', '감성 빈티지'],
    pairIds: ['livart-ronan', 'hanssem-sam'],
    goodLine: '원목 슬랫으로 햇빛 각도 조절되는 카페 무드',
    checkLine: '천장 드릴 타공 필수(보증금 위험)+날개 먼지 지옥',
    altName: '형상기억 암막커튼 또는 초경량 창틀 클립 블라인드',
    altSearchKeyword: '무타공 창틀 클립 블라인드'
  },
  {
    id: 'hard-diatomite',
    brand: '쿠팡·다이소',
    name: '하드 타입 규조토 발매트',
    category: '무타공·욕실',
    verdict: 'NOPE',
    priceTier: '1~2만 원대',
    chips: ['주기적 사포질', '바닥 단차 깨짐', '분진 날림'],
    oneLiner: '한 달 지나면 물기 안 먹어 사포질(가루 날림) 해야 하고 잘못 디디면 깨짐.',
    specs: { dust: 2, deposit: 1, trouble: 4 },
    checks: [
      '발 유분으로 구멍 막히면 사포로 갈아야 함(미세 분진)',
      '욕실 앞 타일 단차 있으면 밟다 두 동강 깨짐',
      '저가 상품은 KC 인증 여부 확인 필수'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'muji-pp-drawer'],
    goodLine: '물기 즉시 흡수해 젖은 발 뽀송하게 말려줌',
    checkLine: '한 달 뒤 사포질(가루 날림) 필수+깨짐 위험',
    altName: '빨아쓰는 소프트 규조토 매트 또는 면 와플 발매트',
    altSearchKeyword: '소프트 규조토 발매트 KC인증'
  },
  {
    id: 'ikea-knarrevik',
    brand: 'IKEA',
    name: '이케아 크나르빅(KNARREVIK) 미니 협탁',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '1만 원대',
    chips: ['1만 원대 가성비', '37cm 슬림 폭', '파스텔·블랙 컬러'],
    oneLiner: '1만 원대 가격으로 37cm 좁은 침대 틈새에 들어가고 15분 만에 조립 끝나는 철제 협탁.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '폭 37cm로 침대와 벽 사이 좁은 틈새에도 쏙 들어가고 하단 선반까지 2단 수납 가능',
      '블랙부터 파스텔 그린·베이지까지 색상이 다양해 6대 방 톤 어디에나 맞추기 쉬움'
    ],
    pairTips: [
      '철판 울림 소리가 신경 쓰인다면 상판에 얇은 코스터나 천 매트를 1장 깔아두면 조용함',
      '조립 시 처음부터 한쪽 나사를 꽉 조이지 말고 바닥 수평을 맞춘 뒤 마무리 체결 추천'
    ],
    checks: [
      '강점: 1만 원대 초가성비 · 15분 컷 조립 · 37×28cm 틈새 맞춤',
      '참고: 가벼운 철제 구조라 소형 조명·컵·스마트폰 등 가벼운 물건 위주 적당'
    ],
    tones: ['white-minimal', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '모던·스틸', '컬러 포인트'],
    pairIds: ['ikea-fado', 'ikea-klippan'],
    goodLine: '1만 원대 초가성비에 37cm 틈새 쏙 들어가는 협탁',
    checkLine: '상판에 얇은 매트 깔면 철판 울림 없이 깔끔함',
    altName: '이케아 크나르빅 (화이트/파스텔/블랙 옵션)',
    altSearchKeyword: '이케아 크나르빅 협탁'
  },
  {
    id: 'sidiz-t20',
    brand: 'SIDIZ',
    name: '시디즈 T20 탭플러스 의자',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '10만 원 후반대',
    chips: ['국내 공식 A/S', '정자세 서포트', '부드러운 바퀴'],
    oneLiner: '20만 원 이하 입문용 브랜드 의자 중 허리 지지력과 조용한 바퀴 주행감이 가장 무난한 모델.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '저가 보급형 의자와 달리 척추 라인을 받쳐주는 메쉬 등판과 탱탱한 좌판 탄력이 안정적',
      '바퀴 소음이 적고 국내 공식 A/S·부품 교체가 가능해 오래 쓰기 좋음'
    ],
    pairTips: [
      '패브릭 좌판 오염이 걱정된다면 얇은 전용 좌판 커버나 방석 패드를 함께 두면 관리가 편함',
      '고정형 요추 지지대 구조이므로 키 180cm 이상이거나 푹신함을 원하면 T50 이상 고려'
    ],
    checks: [
      '강점: 10만 원 후반대 시디즈 정식 A/S와 탄탄한 학습·재택 정자세 지지',
      '참고: 단단한 스펀지 좌판과 고정형 팔걸이 스펙 확인'
    ],
    tones: ['white-minimal', 'oak-natural', 'steel-modern', 'butter-pastel'],
    styles: ['깔끔 미니멀', '모던·스틸', '포근 내추럴'],
    pairIds: ['desker-desk', 'livart-ronan'],
    goodLine: '10만 원대 시디즈 정식 A/S와 탄탄한 정자세 지지',
    checkLine: '좌판 커버 씌우면 패브릭 오염 없이 깔끔히 오래 씀',
    altName: '시디즈 T20 탭플러스 화이트쉘',
    altSearchKeyword: '시디즈 T20 탭플러스'
  },

  // ==================== 7. 조명 · 식탁 · 무타공 · 월넛/스틸 보강 (20종) ====================
  {
    id: 'lexon-mina-portable',
    brand: 'LEXON',
    name: '렉슨 미나 M 무선 포터블 무드등',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '4~6만 원대',
    chips: ['USB-C 무선 충전', '생활방수', '전구색·백색 조광'],
    oneLiner: '선 없이 침대 협탁·책상·욕실까지 들고 다닐 수 있는 손바닥 크기의 완성형 간접등.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '무선 충전식이라 콘센트 위치와 무관하게 원하는 곳에 따뜻한 2700K 포인트 조명을 둘 수 있음',
      '크롬·월넛·버터·세이지 등 톤 매칭 컬러가 다양해 어떤 무드에도 자연스럽게 섞임'
    ],
    pairTips: [
      '방 천장 형광등을 끄고 미나 램프 + 책상 스탠드 2개만 켜면 작은 원룸도 아늑한 호텔 분위기로 바뀜'
    ],
    checks: [
      '강점: 무선이라 전선 지저분함이 0이고 생활방수 지원',
      '참고: 은은한 보조 무드등 광량이므로 독서·공부 주조명과는 별도 사용'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '감성 빈티지', '모던·스틸', '컬러 포인트'],
    pairIds: ['ikea-knarrevik', 'walnut-bedside-nightstand'],
    goodLine: '전선 없이 어디든 2700K 감성 무드를 켜는 무선 램프',
    checkLine: '공부용 주조명보다는 취침 전·저녁 간접 무드등 용도',
    altName: '렉슨 미나 M (알루미늄/메탈 컬러)',
    altSearchKeyword: '렉슨 미나 M 무선 조명'
  },
  {
    id: 'snowman-mushroom-lamp',
    brand: 'ILKW',
    name: '스노우맨8 / 머쉬룸 포터블 테이블 램프',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '5~10만 원대',
    chips: ['2700K 전구색', '눈부심 차단 갓', '오브제 존재감'],
    oneLiner: '빛이 아래로 부드럽게 퍼지는 반구형 갓 구조라 밤에 틀어둬도 눈이 전혀 부시지 않음.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '버섯형 아크릴 갓이 전구를 가려 직사광 피로감 없이 방 전체에 따뜻한 간접광을 채움',
      '켜지 않은 낮 시간에도 화이트·버터·피치 컬러 오브제 역할을 톡톡히 함'
    ],
    pairTips: [
      '월넛 원목 테이블이나 철제 모듈 선반 2단 위에 두면 전선 노출이 가려져 더욱 정돈돼 보임'
    ],
    checks: [
      '강점: 직사광 눈부심 제로 · 인테리어 완성도 최고',
      '참고: 충전식 포터블형 vs 유선 전원형 모델 구분해 구매'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트', '감성 빈티지'],
    pairIds: ['walnut-round-cafe-table', 'midcentury-module-shelf'],
    goodLine: '전구가 안 보이는 반구형 갓이라 밤새 켜도 눈이 편함',
    checkLine: '콘센트 위치 제약 피하려면 USB 충전식 포터블 모델 권장',
    altName: '일광전구 스노우맨8 포터블',
    altSearchKeyword: '일광전구 스노우맨8 포터블'
  },
  {
    id: 'acrylic-cloud-neon',
    brand: 'GENERIC',
    name: '저가형 아크릴 LED 네온사인 · 구름등',
    category: '조명·거울',
    verdict: 'NOPE',
    priceTier: '1~2만 원대',
    chips: ['눈부심 심함', '벽지 접착 손상', '단자 불량'],
    oneLiner: '사진 찍을 땐 예쁘지만 실생활에선 눈이 시려 금방 안 켜게 되고 USB 단자가 잘 고장 남.',
    specs: { dust: 2, deposit: 4, trouble: 4 },
    checks: [
      '실사용: 확산 갓 없이 LED 띠가 그대로 노출돼 저녁에 켜면 시야 피로가 큼',
      '원상복구: 벽 부착용 투명 아크릴 테이프 뗄 때 실크벽지 찢김 주의',
      '내구성: 저가 스위치·5핀 단자 접촉 불량 빈번'
    ],
    tones: ['butter-pastel', 'white-minimal'],
    styles: ['컬러 포인트'],
    pairIds: ['lexon-mina-portable', 'snowman-mushroom-lamp'],
    goodLine: '1만 원대 초반 파티·촬영 소품용',
    checkLine: '직사광 눈부심 + 벽지 훼손 + 단자 고장이 잦음',
    altName: '렉슨 미나 또는 스노우맨 포터블 (확산 갓 간접등)',
    altSearchKeyword: '포터블 무드등 2700K 전구색'
  },
  {
    id: 'door-hook-mirror',
    brand: 'LIVING',
    name: '문걸이형 무타공 전신거울',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '3~5만 원대',
    chips: ['바닥 면적 0cm', '전도 위험 없음', '원상복구'],
    oneLiner: '좁은 방 바닥 공간을 1cm도 안 쓰고 방문 뒤에 걸어 쓰는 가장 안전한 전신거울.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '스탠드 거울처럼 다리가 튀어나오지 않아 4~6평 원룸 동선을 방해하지 않고 넘어질 염려도 없음',
      '후크 고리에 거는 무타공 방식이라 못질 없이 퇴실 시 그대로 챙겨 나오면 끝'
    ],
    pairTips: [
      '거울 뒷면 하단에 투명 실리콘 범퍼를 2개 붙여두면 문 여닫을 때 쿵 소리가 안 남'
    ],
    checks: [
      '필수 측정: 방문 상단 두께(보통 3.5~4.5cm)와 문틀 위 여유 틈새 2mm 확인',
      '비산방지 안전 필름 적용 여부 체크'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'steel-modern'],
    styles: ['깔끔 미니멀', '포근 내추럴', '모던·스틸'],
    pairIds: ['3m-command', 'ikea-mulig'],
    goodLine: '바닥 0cm 차지 + 못질 없이 문에 거는 안전 거울',
    checkLine: '구매 전 우리 집 방문 두께와 문틀 위 틈새만 체크',
    altName: '비산방지 무타공 도어후크 전신거울',
    altSearchKeyword: '문걸이 전신거울 비산방지'
  },
  {
    id: 'ikea-forsa-clamp',
    brand: 'IKEA',
    name: '이케아 포르스오(FORSÅ) 스틸 작업 스탠드',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '3만 원대',
    chips: ['묵직한 스틸 바디', '각도 자유 조절', '빈티지·모던'],
    oneLiner: '묵직한 쇠 베이스 덕분에 관절을 쭉 뻗어도 쓰러지지 않는 3만 원대 클래식 책상 스탠드.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '니켈·블랙·다크그린 등 금속 마감이 고급스러워 월넛 우드나 실버 스틸 방에 완벽하게 어울림',
      'E14 규격 전구 교체형이라 3000K 온백색(작업)부터 2700K 전구색(휴식)까지 취향껏 세팅 가능'
    ],
    pairTips: [
      'E14 전구가 미포함인 경우가 많으니 따뜻하고 눈 편한 LED E14(400~600lm)를 같이 담아야 바로 씀'
    ],
    checks: [
      '강점: 튼튼한 철제 관절과 묵직한 하부 무게추',
      '주의: 전구 별매 확인 (E14 소켓)'
    ],
    tones: ['walnut-vintage', 'steel-modern', 'sage-terracotta', 'white-minimal'],
    styles: ['감성 빈티지', '모던·스틸', '깔끔 미니멀'],
    pairIds: ['dodot-quattro', 'walnut-bedside-nightstand'],
    goodLine: '묵직한 철제 관절과 클래식 실루엣의 작업·독서 스탠드',
    checkLine: '전구 별매(E14 규격)인지 옵션 확인 후 전구색·주백색 선택',
    altName: '이케아 포르스오 + E14 LED 전구',
    altSearchKeyword: '이케아 포르스오 단스탠드'
  },
  {
    id: 't5-indirect-ledbar',
    brand: 'OSRAM / LED',
    name: '침대·선반 뒤 T5 간접 조명 바 (2700K)',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '1~3만 원대',
    chips: ['방 넓어 보이는 효과', '2700K~3000K', '접착 테이프 주의'],
    oneLiner: '침대 헤드나 선반 뒤에 숨겨 벽을 비추면 자취방이 1.5배 넓고 아늑해지지만 고정 방식을 잘 골라야 함.',
    specs: { dust: 1, deposit: 3, trouble: 2 },
    pros: [
      '천장의 하얀 형광등 대신 벽면 간접광을 쓰면 천장이 높아 보이고 눈 피로가 확 줄어듦',
      '길이별(30~90cm) 연결과 리모컨 디밍 옵션도 있어 침대 옆 스위치 조작이 편함'
    ],
    cautions: [
      '동봉된 강한 양면테이프를 벽지에 바로 붙이면 퇴실 시 도배지가 뜯기므로 가구 뒷면에 부착할 것'
    ],
    checks: [
      '원상복구: 벽면이 아닌 침대 헤드·책상 뒷면에 부착해 간접 반사광 유도',
      '색온도: 자취방은 2700K~3000K(전구색·온백색)이 가장 편안함'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'steel-modern', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '모던·스틸', '감성 빈티지'],
    pairIds: ['desker-desk', 'walnut-bedside-nightstand'],
    goodLine: '벽에 간접광을 쏴 천장이 높아 보이고 호텔 같은 밤 무드 완성',
    checkLine: '벽지 말고 가구 뒷판에 붙여야 퇴실 시 벽지 훼손 없음',
    altName: '전원 스위치형 T5 3000K LED 바 (클립·자석 거치)',
    altSearchKeyword: 'T5 간접조명 3000K 스위치'
  },
  {
    id: 'walnut-round-cafe-table',
    brand: 'MARKET B / WOOD',
    name: '월넛 원형 카페 테이블 750~800mm',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '8~14만 원대',
    chips: ['모서리 없음', '1~2인 겸용', '월넛 빈티지 무드'],
    oneLiner: '각진 사각 테이블보다 동선 회전 반경이 넓어져 작은 자취방에 홈카페 존 만들기 가장 좋은 비율.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '750~800mm 원형 상판은 1인 노트북 작업부터 2인 식사까지 넉넉하면서 사방 모서리가 걸리지 않음',
      '짙은 월넛 상판과 중앙 외다리 스틸 기둥 조합이 빈티지·모던 무드를 한 번에 잡아줌'
    ],
    pairTips: [
      '원형 외다리 테이블은 흔들림 방지를 위해 하부 원판 베이스 직경이 45cm 이상인지 체크하면 안정적'
    ],
    checks: [
      '강점: 동선 막힘 없는 라운드 상판 · 홈카페·식사 멀티 사용',
      '주의: 중앙 1자 다리형은 가장자리 강하게 누를 때 쏠림 여부(원판 무게) 확인'
    ],
    tones: ['walnut-vintage', 'oak-natural', 'sage-terracotta', 'white-minimal'],
    styles: ['감성 빈티지', '포근 내추럴', '깔끔 미니멀'],
    pairIds: ['ikea-forsa-clamp', 'snowman-mushroom-lamp'],
    goodLine: '각진 모서리 없이 동선을 살려주는 1~2인 홈카페 라운드 식탁',
    checkLine: '중앙 기둥 베이스가 묵직한 철제 원판인지 확인하면 흔들림 적음',
    altName: '원형 카페 테이블 800 (LPM 방수 상판)',
    altSearchKeyword: '원형 카페 테이블 800 월넛'
  },
  {
    id: 'marble-film-table',
    brand: 'GENERIC',
    name: '저가 대리석 무늬 필름(시트지) 식탁',
    category: '식탁·주방·생활',
    verdict: 'NOPE',
    priceTier: '4~7만 원대',
    chips: ['열기 자국 남음', '모서리 시트 들뜸', '물 스밈'],
    oneLiner: '겉만 대리석 사진 인쇄 시트지를 붙인 MDF라 뜨거운 국그릇 몇 번 올리면 허옇게 변색·들뜸.',
    specs: { dust: 2, deposit: 1, trouble: 5 },
    checks: [
      '소재 주의: 진짜 세라믹·포세린이 아닌 얇은 PVC 시트지 마감',
      '실사용: 뜨거운 찌개 냄비·물기 스밈으로 가장자리 엣지 테이프 벗겨짐 다수',
      '흔들림: 얇은 15T 이하 상판 + 가벼운 튜브 다리로 식사 시 흔들림 큼'
    ],
    tones: ['white-minimal'],
    styles: ['깔끔 미니멀'],
    pairIds: ['walnut-round-cafe-table', 'ceramic-2p-table'],
    goodLine: '4~7만 원대 저렴한 대리석 느낌 외관',
    checkLine: '시트지 마감이라 열기·물기에 쉽게 들뜨고 변색됨',
    altName: '세라믹 상판 또는 LPM 23T 방수 원형 테이블',
    altSearchKeyword: 'LPM 방수 원형 식탁 800'
  },
  {
    id: 'ikea-norden-dropleaf',
    brand: 'IKEA',
    name: '이케아 노르덴(NORDEN) 접이식 드롭리프 테이블',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '18~26만 원대',
    chips: ['양쪽 날개 접이식', '중앙 서랍 6개', '40kg대 무게'],
    oneLiner: '평소 폭 26cm 콘솔처럼 접어뒀다 손님 올 때 152cm 4인 식탁으로 펼치는 마법 같은 공간절약형.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '자작나무 원목 감성과 중앙 6칸 깊은 서랍 덕분에 식기·커트러리·상비약까지 수납 가능',
      '한쪽 날개만 펴서 1~2인 식탁·책상으로 쓰고 평소엔 접어 원룸 바닥을 넓게 확보'
    ],
    cautions: [
      '원목+서랍 구조로 40kg 이상 무거워 자주 옮기긴 어렵고, 조립 시 서랍 레일 간격 맞추기가 까다로움'
    ],
    checks: [
      '강점: 4~7평 원룸 공간 활용 끝판왕 · 6칸 서랍 수납',
      '주의: 무게 40kg 이상 + 장시간 조립 필요 (이사 시 운반 주의)'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['포근 내추럴', '깔끔 미니멀', '감성 빈티지'],
    pairIds: ['ikea-raskog', 'muji-pp-drawer'],
    goodLine: '접으면 26cm 콘솔, 펴면 4인 식탁 되는 공간 활용 최고봉',
    checkLine: '40kg 이상 묵직한 원목이라 1인 조립·이사 이동이 힘든 편',
    altName: '이케아 노르덴 게이트레그 테이블 (화이트/자작)',
    altSearchKeyword: '이케아 노르덴 접이식 식탁'
  },
  {
    id: 'ss304-under-sink-rack',
    brand: 'LIVING',
    name: '싱크대 하부 슬라이딩 철제 수납랙',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '2~4만 원대',
    chips: ['하부장 공간 2배', '슬라이딩 바스켓', '물기·세제 정리'],
    oneLiner: '자취방 싱크대 아래 어지럽게 쌓인 세제·수세미를 꺼내기 쉽게 2단 서랍처럼 정리하는 필수템.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '하단 서랍이 앞으로 미끄러져 나와 안쪽 세제·청소용품을 허리 숙여 뒤지지 않아도 됨',
      '배수관 파이프 위치를 피해 좁은 폭(20~27cm)으로 들어가는 슬림 L자형 구조'
    ],
    pairTips: [
      '설치 전 싱크대 하부장 문 열었을 때 배수관 왼쪽/오른쪽 여유 폭과 경첩 돌출 길이를 꼭 자로 재세요'
    ],
    checks: [
      '필수 측정: 하부장 문 경첩 위치 및 배수관 옆 유효 폭(22~28cm) 확인',
      '소재: 습기 많은 싱크대 아래엔 스텐 또는 분체도장 철제 권장'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['stainless-dish-rack', 'pedal-stainless-bin'],
    goodLine: '싱크대 하부 죽은 공간을 슬라이딩 서랍처럼 살리는 정리템',
    checkLine: '하부장 경첩과 배수 파이프 간섭 폭(약 25cm)만 재고 구매',
    altName: '분체도장·스텐 L자 슬라이딩 싱크대 선반',
    altSearchKeyword: '싱크대 하부장 슬라이딩 수납선반'
  },
  {
    id: 'pedal-stainless-bin',
    brand: 'EKO / LIVING',
    name: '소프트 클로징 발페달 스텐 휴지통 12~20L',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '3~8만 원대',
    chips: ['냄새 밀폐 뚜껑', '조용한 댐퍼', '이너버킷 세척'],
    oneLiner: '뚜껑 없는 오픈 휴지통 대신 두기만 해도 방 안 배달 음식 냄새와 지저분한 비닐봉투가 사라짐.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '소프트 댐퍼 덕분에 뚜껑이 쾅 닫히지 않고 발로 밟아 비위생적인 손 접촉 없이 버릴 수 있음',
      '안쪽 플라스틱 내통(이너버킷)만 쏙 빼서 씻을 수 있고 봉투가 밖으로 안 삐져나와 깔끔함'
    ],
    pairTips: [
      '1인 자취방엔 12~20L가 10L 종량제 봉투 딱 맞게 들어가고 1주일 비우기도 적당한 크기'
    ],
    checks: [
      '강점: 냄새 차단 + 종량제 봉투 숨김 + 지문방지 스텐/매트 컬러',
      '크기: 1인가구 기준 12~20L(10L 봉투 호환) 가장 추천'
    ],
    tones: ['white-minimal', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '모던·스틸', '포근 내추럴'],
    pairIds: ['ss304-under-sink-rack', 'stainless-dish-rack'],
    goodLine: '냄새 밀폐+종량제 봉투 숨김으로 방이 단번에 깔끔해짐',
    checkLine: '자취방은 12~20L 용량이 10L 종량제 봉투 넣기 딱 맞음',
    altName: '소프트클로징 페달 휴지통 15L~20L (이너버킷 포함)',
    altSearchKeyword: '소프트클로징 페달 휴지통 20L 이너버킷'
  },
  {
    id: 'plastic-rice-rack',
    brand: 'GENERIC',
    name: '저가 플라스틱 3단 밥솥·렌지 선반',
    category: '식탁·주방·생활',
    verdict: 'NOPE',
    priceTier: '1~2만 원대',
    chips: ['스팀 열기 휘어짐', '심한 흔들림', '무거운 전자레인지 비추'],
    oneLiner: '가벼운 플라스틱 기둥이라 12kg 넘는 전자레인지 올리고 문 열 때마다 선반 전체가 기우뚱함.',
    specs: { dust: 3, deposit: 1, trouble: 5 },
    checks: [
      '하중 한계: 전자레인지 무게 + 버튼 누르는 힘에 기둥이 뒤틀림',
      '열기 변형: 전기밥솥 고압 증기 계속 닿으면 상판 플라스틱 처짐·변색'
    ],
    tones: ['white-minimal'],
    styles: ['깔끔 미니멀'],
    pairIds: ['stainless-dish-rack', 'ikea-raskog'],
    goodLine: '1만 원대 가벼운 플라스틱 수납 가격',
    checkLine: '전자레인지 무게·밥솥 증기에 기둥 흔들림과 판 휘어짐',
    altName: '두꺼운 스틸 프레임 전자레인지대 (상판 20mm+)',
    altSearchKeyword: '스틸 프레임 전자레인지 선반 튼튼한'
  },
  {
    id: 'ss304-tension-bath-rod',
    brand: 'LIVING',
    name: '스테인리스 304 무타공 압축봉 욕실 코너선반',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '2~4만 원대',
    chips: ['욕실 습기 녹 없음', '바닥~천장 압축 고정', '원상복구 100%'],
    oneLiner: '접착식 선반이 자꾸 떨어지는 타일 욕실에서 못질 없이 샴푸·바디워시를 가장 안전하게 받쳐줌.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '바닥과 천장 사이에 스프링 텐션으로 밀어 고정하므로 습기가 차도 절대 떨어지지 않음',
      '스테인리스 304 소재를 고르면 물기 닿아도 녹이 안 슬고 퇴실 시 1분 만에 철거 가능'
    ],
    pairTips: [
      '욕실 천장 재질(SMC 플라스틱)이 너무 약한 곳은 천장 판이 살짝 들릴 수 있으니 적당한 텐션으로 고정하세요'
    ],
    checks: [
      '필수 측정: 욕실 바닥(또는 젠다이)~천장까지 정확한 높이 cm 측정',
      '소재: 저가 크롬도금 철제 말고 304 스테인리스/알루미늄 선택'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['soft-diatomite-mat', '3m-command'],
    goodLine: '습기에도 절대 안 떨어지고 녹 없는 무타공 304 스텐 선반',
    checkLine: '설치 위치(바닥~천장 또는 젠다이~천장) 높이 cm 먼저 재기',
    altName: '스텐304 기둥형 무타공 욕실 코너선반',
    altSearchKeyword: '스텐304 무타공 압축봉 욕실 코너선반'
  },
  {
    id: 'suction-corner-rack',
    brand: 'GENERIC',
    name: '저가 흡착 · 양면테이프 플라스틱 욕실 선반',
    category: '무타공·욕실',
    verdict: 'NOPE',
    priceTier: '1만 원 미만',
    chips: ['밤중 추락 사고', '습기 접착 풀림', '타일 틈새 공기 유입'],
    oneLiner: '처음 일주일은 잘 붙어 있다가 따뜻한 샤워 수증기가 차면 밤중에 샴푸통째로 와르르 떨어짐.',
    specs: { dust: 2, deposit: 2, trouble: 5 },
    checks: [
      '실사용: 무광 타일이나 줄눈(시멘트 틈)에 걸리면 며칠 내 공기 들어가 탈락',
      '위험성: 밤에 유리병·대용량 샴푸가 세면대나 발등으로 떨어질 수 있음'
    ],
    tones: ['white-minimal'],
    styles: ['깔끔 미니멀'],
    pairIds: ['ss304-tension-bath-rod', 'soft-diatomite-mat'],
    goodLine: '1만 원 미만의 간편한 임시 부착 비용',
    checkLine: '뜨거운 샤워 수증기+샴푸 하중으로 수개월 내 추락 빈번',
    altName: '바닥~천장 스텐304 기둥형 압축 선반',
    altSearchKeyword: '스텐304 무타공 압축봉 욕실 선반'
  },
  {
    id: 'soft-diatomite-mat',
    brand: 'LIVING',
    name: '워셔블 소프트 규조토 발매트',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '1~2만 원대',
    chips: ['세탁기 세탁 가능', '깨짐·가루 없음', '미끄럼 방지 바닥'],
    oneLiner: '딱딱한 돌 규조토의 단점(깨짐·사포질·차거움)을 없애고 물 흡수력과 세탁 편의성을 둘 다 잡은 대안.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '표면이 부드러운 스웨이드·나파 촉감이라 겨울철 발바닥이 시리지 않고 말아서 보관 가능',
      '때가 타면 사포로 갈아낼 필요 없이 울코스·세탁망에 넣어 돌리면 위생적임'
    ],
    pairTips: [
      '건조기 고열에는 하단 고무 논슬립 층이 상할 수 있으니 그늘에서 자연 건조만 지키면 오래 씀'
    ],
    checks: [
      '강점: 1분 건조 흡수력 + 깨짐 0% + 물세탁 위생 관리',
      '주의: 건조기 사용 금지 (자연 건조 권장)'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['ss304-tension-bath-rod', 'pedal-stainless-bin'],
    goodLine: '사포질 없이 세탁기 돌리는 뽀송한 소프트 규조토 매트',
    checkLine: '건조기 고열만 피하고 그늘 자연건조하면 논슬립 수명 길어짐',
    altName: 'KC인증 논슬립 소프트 규조토 발매트',
    altSearchKeyword: '소프트 규조토 발매트 워셔블'
  },
  {
    id: 'pin-sheer-curtain',
    brand: 'DECO',
    name: '무타공 꼭꼬핀 커튼봉 + 린넨 쉬폰 커튼',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '3~6만 원대',
    chips: ['원상복구 가능', '자연광 투과', '사생활 보호'],
    oneLiner: '어두운 암막 커튼 대신 햇빛을 부드럽게 걸러 방이 훨씬 넓고 따뜻해 보이는 자취방 치트키.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '가벼운 쉬폰·린넨 커튼은 무타공 커튼 브라켓(꼭꼬핀)이나 압축봉만으로도 처짐 없이 지탱 가능',
      '낮 동안 외부 시선은 가려주면서도 자연광이 은은하게 들어와 5~7평 방이 답답하지 않음'
    ],
    pairTips: [
      '숙면을 위해 빛 차단이 꼭 필요한 창이라면 창틀 안쪽 압축봉에 쉬폰을 달고 바깥쪽엔 얇은 롤스크린을 겹치세요'
    ],
    checks: [
      '원상복구: 무거운 암막 대신 400g~800g대 쉬폰을 써야 무타공 핀이 안정적으로 버팀',
      '치수: 가로 창폭의 1.5~2배 주름으로 사야 헐렁하고 예쁨'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['daiso-kkokkopin', 'snowman-mushroom-lamp'],
    goodLine: '햇빛을 부드럽게 걸러 좁은 방을 넓어 보이게 하는 가벼운 커튼',
    checkLine: '창폭 1.5배 이상 주름으로 맞추고 압축봉·꼭꼬핀으로 무타공 설치',
    altName: '도톰 린넨 쉬폰 커튼 + 무타공 압축 커튼봉',
    altSearchKeyword: '무타공 쉬폰 커튼 린넨 압축봉'
  },
  {
    id: 'walnut-bedside-nightstand',
    brand: 'SOODAM / WOOD',
    name: '월넛 원목 서랍형 협탁',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '9~16만 원대',
    chips: ['깊은 월넛 질감', '전선·잡동사니 숨김', '완제품 옵션'],
    oneLiner: '침대 옆 핸드크림·충전기·안경 같은 생활감을 서랍 안에 싹 숨겨 월넛 빈티지 무드를 완성하는 협탁.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '오픈형 협탁과 달리 서랍이 1~2칸 있어 머리맡 잡동사니가 보이지 않아 방이 정돈됨',
      '고무나무·애쉬 원목 월넛 스테인 마감은 시트지 가구와 달리 긁힘이 생겨도 빈티지하게 어울림'
    ],
    pairTips: [
      '높이 45~55cm 제품을 고르면 일반 침대 매트리스 높이와 나란히 맞아 누워서 물건 집기 가장 편함'
    ],
    checks: [
      '강점: 시트지 들뜸 없는 원목 질감 + 서랍 깔끔 수납',
      '치수: 매트리스 상단 높이와 ±5cm 이내 맞추기'
    ],
    tones: ['walnut-vintage', 'oak-natural', 'sage-terracotta'],
    styles: ['감성 빈티지', '포근 내추럴'],
    pairIds: ['ikea-forsa-clamp', 'lexon-mina-portable'],
    goodLine: '생활감을 서랍에 숨기고 깊은 월넛 무드를 완성하는 침대 협탁',
    checkLine: '내 침대 매트리스 높이와 5cm 이내로 맞추면 사용감 최고',
    altName: '애쉬·고무나무 월넛 원목 2단 협탁 (완제품)',
    altSearchKeyword: '월넛 원목 서랍 협탁 완제품'
  },
  {
    id: 'midcentury-module-shelf',
    brand: 'USM STYLE / LIVING',
    name: '미드센추리 크롬 스틸 모듈 선반 2단',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '12~22만 원대',
    chips: ['크롬 파이프 감성', '원룸 오브제 포인트', '지문·도장 스크래치'],
    oneLiner: '스틸·버터·화이트 어떤 방에 놔도 핀터레스트 감성을 내지만 저가형은 유격·도장 까짐을 가려야 함.',
    specs: { dust: 4, deposit: 1, trouble: 3 },
    pros: [
      '반짝이는 크롬 파이프와 얇은 패널 구조라 부피감 없이 오브제·턴테이블·책을 진열하기 좋음',
      '2단 높이(약 70~75cm)는 좁은 방 시야를 가리지 않아 TV 다이 겸용으로도 인기'
    ],
    cautions: [
      '오픈형 패널이라 먼지가 잘 보이고 크롬 기둥에 손자국이 남으며, 강화유리 패널은 무거운 물건 낙하 주의'
    ],
    checks: [
      '리뷰 검증: 볼트 유격 없이 딱 맞는지, 패널 도장(LPM/분체도장) 마감 확인',
      '관리: 아래 1칸은 수납 바스켓/도어 옵션을 넣어야 너저분해 보이지 않음'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel', 'walnut-vintage'],
    styles: ['모던·스틸', '컬러 포인트', '깔끔 미니멀'],
    pairIds: ['snowman-mushroom-lamp', 'ikea-helmer'],
    goodLine: '두기만 해도 힙한 인스타 감성 크롬 파이프 모듈 선반',
    checkLine: '저가 유격 피하고, 1칸엔 리빙박스를 넣어 시각적 정돈 유지',
    altName: '국내 제작 도장패널 스틸 모듈 2단 선반',
    altSearchKeyword: '미드센추리 모듈 선반 2단 크롬'
  },
  {
    id: 'walnut-magazine-rack',
    brand: 'MARKET B / WOOD',
    name: '월넛 슬림 매거진랙 · 북선반',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '4~7만 원대',
    chips: ['폭 15~25cm 슬림', '잡지·LP 표지 진열', '원목/철제'],
    oneLiner: '벽과 침대 사이 남는 20cm 자투리 공간에 책·태블릿·LP를 세워 좁은 방 감성을 살리는 틈새템.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '일반 책장(깊이 30~40cm)을 둘 수 없는 작은 방 복도나 책상 옆 자투리 벽에 쏙 들어감',
      '표지가 예쁜 책·포스터북 한두 권만 꽂아도 허전한 벽이 바로 채워짐'
    ],
    pairTips: [
      '바닥에 두는 자립형은 넘어지지 않게 하단 발판 깊이가 22cm 이상인지 확인하세요'
    ],
    checks: [
      '강점: 20cm대 초슬림 폭으로 동선 방해 제로 · 벽 인테리어 효과',
      '참고: 많은 책 보관보다는 자주 보는 5~10권 진열용'
    ],
    tones: ['walnut-vintage', 'oak-natural', 'steel-modern'],
    styles: ['감성 빈티지', '포근 내추럴', '모던·스틸'],
    pairIds: ['walnut-bedside-nightstand', 'walnut-round-cafe-table'],
    goodLine: '20cm 틈새 벽을 감성 서재처럼 채우는 슬림 매거진랙',
    checkLine: '자립 안정감 위해 하단 발판 폭·벽 기대기 여부 확인',
    altName: '원목/스틸 슬림 매거진랙',
    altSearchKeyword: '원목 슬림 매거진랙 월넛'
  },
  {
    id: 'corduroy-beanbag-1p',
    brand: 'LOUNGE / FABRIC',
    name: '코듀로이 · 부클레 1인 빈백 소파',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '7~14만 원대',
    chips: ['좁은 방 소파 대안', '이동 초간편', '여름 땀·충전재 꺼짐'],
    oneLiner: '무거운 소파 대신 5평대 원룸에서 영화 보기 좋지만, 6개월 지나면 EPP 충전재 꺼짐과 세탁 여부가 갈림.',
    specs: { dust: 4, deposit: 1, trouble: 3 },
    pros: [
      '단단한 프레임이 없어 모서리에 부딪힐 일 없고 청소할 때 한 손으로 번쩍 들어 치우기 쉬움',
      '코듀로이·부클레 소재가 포근한 빈티지·파스텔 방 분위기를 한층 부드럽게 만들어줌'
    ],
    cautions: [
      '겉커버만 벗겨 세탁 가능한 이중 지퍼(속커버 포함) 제품이 아니면 커피 쏟았을 때 세탁 불가',
      '수개월 사용 후 알갱이 숨이 죽기 때문에 리필용 충전재 추가가 필요한 편'
    ],
    checks: [
      '필수 확인: 겉커버+속커버 이중 분리 세탁 가능 여부 & 국내 EPP 비즈 사용 여부',
      '주의: 바닥 열기·여름철 땀 참에 취약할 수 있음'
    ],
    tones: ['walnut-vintage', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['포근 내추럴', '감성 빈티지', '컬러 포인트'],
    pairIds: ['walnut-round-cafe-table', 'snowman-mushroom-lamp'],
    goodLine: '무거운 소파 대신 좁은 방에 한 손으로 옮겨 쓰는 푹신한 휴식존',
    checkLine: '반드시 겉·속 이중 커버로 커버만 세탁 가능한 모델 선택',
    altName: '이중커버 워셔블 1인용 빈백 소파 (EPP 비즈)',
    altSearchKeyword: '이중커버 워셔블 코듀로이 빈백 소파'
  },

  // ==================== 8. 오늘의집 자취 베스트셀러 추가 검증 (12종) ====================
  {
    id: 'ikea-lersta',
    brand: 'IKEA',
    name: '이케아 레르스타(LERSTA) 플로어 장스탠드',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '1~2만 원대',
    chips: ['1만 원대 가성비', '각도 자유 조절', '베이스 가벼움'],
    oneLiner: '2만 원 미만으로 체리목 몰딩·노란 장판 방도 아늑하게 바꾸는 가성비 장스탠드지만 전구 별매·하단 경량 주의.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '유연한 상단 관절로 벽을 향해 쏘는 간접등부터 침대 옆 독서등까지 자유롭게 각도 조절 가능',
      '알루미늄 소재로 가벼워 청소·배치 변경 시 한 손으로 쉽게 옮길 수 있음'
    ],
    cautions: [
      '가벼운 스틸 베이스 구조라 반려동물이나 좁은 동선에 세게 부딪히면 넘어질 수 있고 E26 전구는 별도 구매해야 함'
    ],
    checks: [
      '강점: 1~2만 원대 극강의 가성비로 천장 형광등을 끄는 원룸 간접광 입문용 1순위',
      '필수 체크: E26 전구색(2700K) LED 전구 함께 구매 필요'
    ],
    tones: ['white-minimal', 'oak-natural', 'steel-modern', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '모던·스틸'],
    pairIds: ['sisal-look-rug', 'low-slatted-pallet'],
    goodLine: '2만 원 미만으로 원룸 분위기를 단숨에 바꾸는 국민 장스탠드',
    checkLine: 'E26 전구 별매 확인 및 동선에 걸리지 않는 침대·소파 코너 배치',
    altName: '이케아 레르스타 장스탠드 + E26 2700K LED 전구',
    altSearchKeyword: '이케아 레르스타 장스탠드 전구포함'
  },
  {
    id: 'rareraw-system',
    brand: 'RARERAW',
    name: '레어로우(RARERAW) 스틸 시스템 선반',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '20~50만 원대',
    chips: ['모던 스틸 감성', '벽 타공 옵션 확인', '부품 추가 고가'],
    oneLiner: '인스타 감성 모던·스틸 인테리어의 끝판왕이지만 전월세 원룸에선 벽 타공 불가 여부를 반드시 먼저 체크해야 함.',
    specs: { dust: 3, deposit: 4, trouble: 2 },
    pros: [
      '단단한 분체도장 철제 프레임과 선반 조합으로 변형이 없고 북엔드·후크 등 모듈 확장성이 뛰어남',
      '스틸·화이트·컬러 선반 커스터마이징만으로 방 전체 분위기 수준이 달라짐'
    ],
    cautions: [
      '기본 벽 고정(타공) 라인은 집주인 동의 없이 원룸 설치가 불가능하므로 무타공 천장·바닥 압축형(포스트) 모델인지 꼭 구분해야 함'
    ],
    checks: [
      '원상복구 필수 체크: 벽타공형 vs 무타공 포스트형 구분 (전월세는 무타공 포스트 필수)',
      '예산: 기본 유닛 외 선반·액세서리 추가 시 가격 상승 폭 큼'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel', 'walnut-vintage'],
    styles: ['모던·스틸', '컬러 포인트', '깔끔 미니멀'],
    pairIds: ['midcentury-module-shelf', 'ikea-forsa-clamp'],
    goodLine: '압도적인 모던·스틸 존재감과 튼튼한 철제 확장 시스템',
    checkLine: '전월세라면 벽타공 모델 대신 바닥-천장 무타공 포스트형 선택 필수',
    altName: '레어로우 포스트(무타공) 또는 국내 스틸 포스트 선반',
    altSearchKeyword: '무타공 포스트 시스템 선반 스틸'
  },
  {
    id: 'sisal-look-rug',
    brand: 'DECO / RUG',
    name: '사이잘룩 단모 사계절 러그 (PP 직조)',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '3~7만 원대',
    chips: ['먼지 날림 최소', '의자 바퀴 호환', '반려동물 스크래치 방어'],
    oneLiner: '샤기 러그와 달리 털 빠짐·먼지 뭉침이 거의 없고 의자 바퀴가 잘 굴러가 자취방 구역 분리에 최적.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '짧고 단단한 폴리프로필렌(PP) 루프 직조라 비염이 있거나 청소가 잦은 자취생에게 가장 위생적',
      '커피·음식을 흘려도 바로 물티슈·중성세제로 닦기 쉽고 여름에도 답답해 보이지 않음'
    ],
    pairTips: [
      '까슬거리는 내추럴 직조감이 특징이라 맨살에 닿는 포근한 낮잠용보다는 책상·식탁 아래 구역 분리용으로 최고'
    ],
    checks: [
      '강점: 먼지 끼임 최소화 + 반려동물 발톱 뜯김 방어 + 사계절 사용',
      '참고: 폭신한 촉감이 아닌 탄탄·까슬한 조직감'
    ],
    tones: ['oak-natural', 'white-minimal', 'walnut-vintage', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '감성 빈티지'],
    pairIds: ['walnut-round-cafe-table', 'ikea-lersta'],
    goodLine: '털 빠짐·먼지 걱정 없이 책상·식탁 아래 구역 분리하는 단모 러그',
    checkLine: '폭신함보다는 깔끔한 청소·바퀴 굴림·사계절 실용성 중시할 때 최적',
    altName: '논슬립 워셔블 사이잘룩 단모 러그',
    altSearchKeyword: '사이잘룩 단모 러그 워셔블'
  },
  {
    id: 'low-slatted-pallet',
    brand: 'LIVING',
    name: '원목 · PE 저상형 매트리스 깔판',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '3~9만 원대',
    chips: ['층고 높아 보임', '결로·곰팡이 차단', '하부 먼지 청소'],
    oneLiner: '무거운 침대 프레임 없이 매트리스 바닥 곰팡이를 막고 방을 넓어 보이게 하지만 깔판 아래 청소는 주기적으로 필요.',
    specs: { dust: 3, deposit: 1, trouble: 2 },
    pros: [
      '바닥에서 3~10cm 띄워 공기층을 만들어 주므로 온돌 바닥 열기·장마철 매트리스 결로 곰팡이를 예방',
      '침대 헤드와 높은 프레임이 없어 4~6평 원룸 시야가 트이고 층고가 높아 보이는 개방감 확보'
    ],
    cautions: [
      '바닥과의 틈새에 머리카락·먼지가 쌓이면 매트리스를 세워 청소해야 하며, 저가 소나무·얇은 플라스틱 연결부는 삐걱임 가능'
    ],
    checks: [
      '체크포인트: 미끄럼 방지 패드 동봉 여부 + 지지 하중(150kg+) 및 모서리 라운드 마감',
      '관리: 계절 바뀔 때 매트리스 세워 환기·바닥 청소'
    ],
    tones: ['oak-natural', 'white-minimal', 'walnut-vintage', 'butter-pastel'],
    styles: ['포근 내추럴', '깔끔 미니멀', '감성 빈티지'],
    pairIds: ['zinus-mattress', 'sisal-look-rug'],
    goodLine: '높은 프레임 없이 바닥 습기·곰팡이 막고 방을 넓어 보이게 함',
    checkLine: '모서리 다치지 않는 라운드 PE/고무나무 깔판 & 논슬립 패드 확인',
    altName: '미끄럼방지 고무나무·라운드 PE 저상형 깔판',
    altSearchKeyword: '저상형 매트리스 깔판 원목'
  },
  {
    id: 'curtain-dress-hanger',
    brand: 'WANGJA / LIVING',
    name: '패브릭 커튼형 2단 행거 커버 세트',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '5~9만 원대',
    chips: ['옷 먼지·시각 정돈', '고정형 벽체 안정', '자취방 깔끔 치트키'],
    oneLiner: '붙박이장 없는 원룸에서 오픈 행거의 옷 색깔·먼지 스트레스를 커튼 한 장으로 깔끔하게 가려주는 대안.',
    specs: { dust: 2, deposit: 2, trouble: 2 },
    pros: [
      '알록달록한 옷을 린넨·아이보리 커튼으로 가리는 순간 방 전체 톤이 한 톤으로 정리돼 넓어 보임',
      '상단·측면까지 덮이는 커버형은 겨울 코트·니트에 쌓이는 미세먼지를 크게 줄여줌'
    ],
    pairTips: [
      '커튼 원단이 바닥에 끌리면 먼지가 타니 행거 높이 + 2cm 맞춰 길이를 재고 천장 압축형은 3개월마다 나사 재조임 하세요'
    ],
    checks: [
      '강점: 도어형 옷장을 들이기 좁은 방에서 비용 1/3로 시각적 미니멀리즘 구현',
      '관리: 커튼 분리 세탁 가능 여부 & 바닥 천장형 압축 패드 점검'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['wangja-hanger', 'pin-sheer-curtain'],
    goodLine: '옷장 들이기 좁은 원룸에서 옷 먼지·알록달록함을 커튼으로 즉시 가림',
    checkLine: '커튼 분리 물세탁 가능 제품인지, 행거 하중 40kg+ 봉 두께인지 확인',
    altName: '커튼 일체형 무타공 2단 스틸 행거 (방진 패드)',
    altSearchKeyword: '커튼형 2단 행거 드레스룸'
  },
  {
    id: 'rattan-point-nightstand',
    brand: 'DECO / WOOD',
    name: '라탄 도어 원목 협탁',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '7~13만 원대',
    chips: ['포근한 내추럴 무드', '숨김 수납 도어', '가벼운 시각 무게'],
    oneLiner: '천연·인조 케인 라탄 도어로 통풍이 되고 답답해 보이지 않으면서 충전기·약통은 깔끔히 가려주는 감성 협탁.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '꽉 막힌 원목 도어보다 가볍고 통풍이 잘되며 오크·세이지·빈티지 방에 자연스러운 소재감을 줌',
      '도어 안쪽 선반에 멀티탭과 스킨케어 제품을 숨겨 침대 주변이 정돈됨'
    ],
    pairTips: [
      '습한 방에서 천연 라탄 곰팡이가 걱정된다면 닦기 쉽고 갈라짐 없는 PE 인조 라탄(케인) 도어 모델도 실용적'
    ],
    checks: [
      '강점: 감성 인테리어 포인트 + 숨김 도어 수납',
      '관리: 라탄 틈새는 한 달에 1번 작은 솔이나 청소기 브러시로 먼지 제거'
    ],
    tones: ['oak-natural', 'walnut-vintage', 'sage-terracotta', 'butter-pastel'],
    styles: ['포근 내추럴', '감성 빈티지'],
    pairIds: ['snowman-mushroom-lamp', 'pin-sheer-curtain'],
    goodLine: '감성 소재감과 도어 숨김 수납을 동시에 잡는 침대 옆 협탁',
    checkLine: '습한 원룸은 관리 쉬운 PE 라탄 또는 원목 건조 마감 확인',
    altName: '오크·월넛 라탄 도어 침대 협탁 (완제품/반조립)',
    altSearchKeyword: '라탄 도어 원목 협탁'
  },
  {
    id: 'folding-camping-chair-room',
    brand: 'LIVING',
    name: '폴딩 우드·패브릭 1인 릴렉스 체어',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '4~9만 원대',
    chips: ['접어서 벽 세우기', '좁은 방 소파 대안', '장판 고무캡 확인'],
    oneLiner: '평소엔 감성 1인 소파처럼 기대 쉬다가 청소·손님 방문 시 3초 만에 접어 벽에 세워둘 수 있는 실속 아이템.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '무게가 가볍고 접으면 폭 15cm 이내로 줄어들어 4~6평 원룸 동선을 전혀 차지하지 않음',
      '아이보리 캔버스·우드 프레임 조합이 내추럴·테라코타 무드와 아주 잘 어울림'
    ],
    cautions: [
      '장기간 사용 시 천 시트가 늘어질 수 있고, 금속·원목 다리 끝 고무캡이 없으면 장판이 찍힐 수 있어 펠트 패드 부착 권장'
    ],
    checks: [
      '강점: 3초 폴딩으로 바닥 면적 회수 가능 · 이동·이사 편리',
      '관리: 세탁 가능한 분리형 캔버스 시트 & 바닥 펠트 패드 추가'
    ],
    tones: ['oak-natural', 'sage-terracotta', 'white-minimal', 'walnut-vintage'],
    styles: ['포근 내추럴', '감성 빈티지', '컬러 포인트'],
    pairIds: ['ikea-gladom', 'sisal-look-rug'],
    goodLine: '소파 들이기 좁은 원룸에서 쉬고 접어두는 1인 릴렉스 체어',
    checkLine: '시트 세탁 가능 여부 + 바닥 긁힘 막는 펠트 패드 부착 체크',
    altName: '워셔블 캔버스 폴딩 릴렉스 체어 (우드프레임)',
    altSearchKeyword: '실내 폴딩 릴렉스 체어 패브릭'
  },
  {
    id: 'fabric-cafe-chair',
    brand: 'DECO',
    name: '부클레·패브릭 원목/스틸 카페 의자',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '5~11만 원대',
    chips: ['디자인 완성도', '생활방수 원단 필수', '장시간 작업 비추'],
    oneLiner: '원형 식탁·화장대 옆에 두면 잡지 속 한 컷처럼 예쁘지만 4시간 이상 공부·재택용 메인 의자로는 허리가 아픔.',
    specs: { dust: 3, deposit: 1, trouble: 2 },
    pros: [
      '사무용 메쉬 의자 특유의 투박함 없이 미니멀·빈티지·파스텔 무드를 가장 예쁘게 살려줌',
      '이지클린(발수) 패브릭을 고르면 커피·음식물을 흘려도 물티슈로 닦아내기 수월함'
    ],
    cautions: [
      '높낮이 조절과 요추 지지대가 없어 장시간 컴퓨터 작업용이라면 시디즈 등 메쉬 의자와 용도를 분리해야 함'
    ],
    checks: [
      '소재 체크: 일반 면·부클레 대신 생활방수(이지클린/아쿠아텍스) 원단 선택',
      '용도: 식사·화장·1~2시간 가벼운 작업용 추천'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta', 'steel-modern'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트', '모던·스틸'],
    pairIds: ['walnut-round-cafe-table', 'ikea-docksta'],
    goodLine: '투박한 사무의자 없이 홈카페·화장대 감성을 살리는 디자인 체어',
    checkLine: '꼭 이지클린 방수 원단 고르고, 장시간 재택용으론 비추',
    altName: '이지클린 발수 패브릭 디자인 체어 (완제품)',
    altSearchKeyword: '이지클린 패브릭 디자인 식탁의자'
  },
  {
    id: 'pb-sheet-drawer',
    brand: 'GENERIC',
    name: '초저가 시트지 PB 5단 서랍장 (5~8만 원대)',
    category: '수납·행거',
    verdict: 'NOPE',
    priceTier: '5~8만 원대',
    chips: ['서랍 레일 처짐', '시트지 모서리 까짐', '이사 시 파손'],
    oneLiner: '무겁게 옷을 채우면 몇 달 뒤 서랍 바닥 합판이 빠지고 2년 뒤 이사 때 나사 구멍이 부서져 버리고 가는 제품.',
    specs: { dust: 2, deposit: 2, trouble: 5 },
    checks: [
      '구조 결함: 얇은 3mm MDF 서랍 바닥판이 무거운 청바지·니트 하중에 쉽게 빠짐',
      '레일·냄새: 저가 플라스틱/볼레일 뻑뻑함 및 시트지 본드 냄새 오래 감',
      '조립: 수십 개 목다보·캠볼트 셀프 조립 후 수평 어긋남 빈번'
    ],
    tones: ['white-minimal', 'oak-natural'],
    styles: ['깔끔 미니멀'],
    pairIds: ['muji-pp-drawer', 'ikea-helmer'],
    goodLine: '5~8만 원대로 서랍 칸 수만 많이 확보하는 저가 옵션',
    checkLine: '서랍 바닥 빠짐 + 시트지 까짐 + 재조립 불가로 오래 못 씀',
    altName: '무인양품 PP 서랍 또는 스틸 프레임 + LPM 서랍장 (완제품)',
    altSearchKeyword: '완제품 5단 서랍장 LPM'
  },
  {
    id: 'alumi-slim-blind',
    brand: 'DECO',
    name: '알루미늄 슬림 블라인드 25mm',
    category: '무타공·욕실',
    verdict: 'WARN',
    priceTier: '2~5만 원대',
    chips: ['모던·스틸 햇살 맛집', '날개 꺾임 주의', '무타공 브라켓 필수'],
    oneLiner: '창문으로 들어오는 햇살 줄기를 예쁘게 쪼개주며 우드 블라인드보다 가볍지만 날개가 얇아 구부러지기 쉬움.',
    specs: { dust: 3, deposit: 2, trouble: 2 },
    pros: [
      '우드 블라인드 무게의 1/3 수준이라 무타공 창틀 클램프 브라켓으로도 안정적으로 거치 가능',
      '화이트·실버·버터 컬러가 모던·미니멀·스틸 방에 아주 선명하고 깔끔한 직선미를 줌'
    ],
    cautions: [
      '0.18~0.21mm 얇은 알루미늄 슬랫은 창문을 세게 열거나 반려동물·몸에 걸리면 한 번 꺾인 자국이 펴지지 않음'
    ],
    checks: [
      '원상복구: 드릴 타공 없이 창틀 틈새에 끼우는 무타공 브라켓 함께 주문',
      '주의: 창 여닫을 때 블라인드 올리고 여닫기 (날개 구김 방지)'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel'],
    styles: ['모던·스틸', '깔끔 미니멀', '컬러 포인트'],
    pairIds: ['rareraw-system', 'pin-sheer-curtain'],
    goodLine: '우드보다 3배 가벼워 무타공 설치 가능하고 예쁜 빛 줄기 연출',
    checkLine: '창틀 무타공 브라켓 추가 & 손 걸려 날개 꺾이지 않게 주의',
    altName: '무타공 브라켓 세트 알루미늄 블라인드 25mm',
    altSearchKeyword: '알루미늄 블라인드 25mm 무타공'
  },
  {
    id: 'stackable-acrylic-box',
    brand: 'LIVING',
    name: '투명 아크릴 · 폴딩 리빙 정리함',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '1~3만 원대',
    chips: ['내용물 한눈에 파악', '내부 보이면 어수선', '정전기 먼지'],
    oneLiner: '모자·가방·화장품을 바로 찾아 꺼내기는 편하지만 색색의 옷과 생필품이 그대로 비쳐 방이 복잡해 보일 수 있음.',
    specs: { dust: 3, deposit: 1, trouble: 2 },
    pros: [
      '전면 도어가 자석으로 열려 박스를 위로 들어올리지 않고도 아래 칸 물건을 꺼낼 수 있음',
      '피규어·향수·가방 등 보여주고 싶은 소장품 진열장에 넣으면 먼지 차단 쇼케이스 역할'
    ],
    cautions: [
      '일반 생활용품·양말·케이블을 투명 박스에 채우면 방 전체가 창고처럼 어수선해 보이므로 불투명 화이트/아이보리 박스가 유리'
    ],
    checks: [
      '감각 팁: 보여줄 소품(향수·모자·컵)은 투명, 잡동사니·옷은 반투명/불투명 리빙박스로 분리',
      '관리: 아크릴 정전기로 붙은 먼지는 마른 수건 말고 극세사로 살살 닦기 (스크래치 방지)'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel'],
    styles: ['깔끔 미니멀', '모던·스틸', '컬러 포인트'],
    pairIds: ['muji-pp-drawer', 'ikea-helmer'],
    goodLine: '박스 안 치우고 앞문으로 꺼내는 모듈 정리 · 소장품 진열에 좋음',
    checkLine: '생활 잡동사니까지 투명으로 넣으면 어수선하니 불투명 제품과 섞기',
    altName: '불투명 아이보리 앞열림 폴딩 리빙박스',
    altSearchKeyword: '앞열림 폴딩 리빙박스 불투명 아이보리'
  },
  {
    id: 'ikea-vittsjo-shelf',
    brand: 'IKEA',
    name: '이케아 빗셰(VITTSJÖ) 스틸·강화유리 선반',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '7~12만 원대',
    chips: ['시야 탁 트임', '유리 먼지·지문', '스틸 얇은 프레임'],
    oneLiner: '얇은 블랙 스틸 선과 투명 강화유리 덕분에 큰 선반인데도 작은 원룸이 답답해 보이지 않는 가성비 대표 선반.',
    specs: { dust: 4, deposit: 2, trouble: 2 },
    pros: [
      '판넬이 막혀 있지 않고 유리라 빛과 시야가 통과해 좁은 방에서도 덩치가 작아 보임',
      '조명·화분·LP·책을 올려두면 모던 스틸 인테리어의 중심 잡기가 쉬움'
    ],
    cautions: [
      '검정 프레임과 유리 선반 위 먼지·손지문이 잘 눈에 띄므로 1주 1회 유리 닦기가 필요하고, 유리 파손 방지 실리콘 범퍼 체결 필수'
    ],
    checks: [
      '강점: 시야가 뚫려 좁은 방에서도 개방감이 유지되는 가성비 스틸 선반',
      '관리: 강화유리 지문/먼지 관리 + 2단 이상 높이는 전도 방지 주의'
    ],
    tones: ['steel-modern', 'white-minimal', 'walnut-vintage'],
    styles: ['모던·스틸', '깔끔 미니멀', '감성 빈티지'],
    pairIds: ['ikea-lersta', 'rareraw-system'],
    goodLine: '얇은 스틸+유리 선반으로 시야가 뚫려 작은 방이 답답하지 않음',
    checkLine: '유리 지문·먼지가 티 나므로 오브제 위주 최소 진열 추천',
    altName: '이케아 빗셰 랩탑·낮은 선반유닛',
    altSearchKeyword: '이케아 빗셰 선반'
  },

  // ==================== 9. Batch A: 책상·의자 · 주방·식탁 확장 (21종) ====================
  {
    id: 'desker-motion-desk',
    brand: 'DESKER',
    name: '데스커 모션데스크 (전동 높낮이 조절)',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '50~70만 원대',
    chips: ['기사 시공 권장', '스탠딩 시 미세 흔들림', '배선 트레이 필수'],
    oneLiner: '허리 디스크·재택근무엔 최고지만 최대 높이로 올리면 타이핑 시 모니터 떨림과 배선 길이 여유 체크가 필수.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '앉고 서는 높낮이를 버튼으로 저장해 허리·거북목 피로를 낮추는 검증된 국내 브랜드 모션데스크',
      '1400~1600mm 와이드 상판은 듀얼 모니터와 데스크테리어 소품을 올리기 넉넉함'
    ],
    cautions: [
      '스탠딩 높이(105cm 이상)로 올릴수록 2다리 구조 특성상 미세 흔들림이 있고, 선 정리를 느슨하게 안 하면 상승 시 모니터 선이 빠질 수 있음'
    ],
    checks: [
      '무게·설치: 50kg 이상 묵직하므로 기사 방문 시공 옵션 강력 권장',
      '배선 팁: 멀티탭을 상판 아래 배선트레이에 고정해 코드 1줄만 바닥으로 내릴 것'
    ],
    tones: ['white-minimal', 'oak-natural', 'steel-modern', 'walnut-vintage'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['sidiz-t50', 'monitor-stand-shelf'],
    goodLine: '재택·장시간 작업 시 자세 전환으로 허리 피로를 줄여주는 정석 모션데스크',
    checkLine: '상승 시 선 씹힘 막기 위해 하부 배선트레이+1.5m 이상 여유 케이블 필수',
    altName: '데스커 모션데스크 + 하부 배선트레이 세트',
    altSearchKeyword: '데스커 모션데스크 1400'
  },
  {
    id: 'lunarlab-motion-desk',
    brand: 'LUNARLAB',
    name: '루나랩 싱글·듀얼모터 전동 모션데스크',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '25~45만 원대',
    chips: ['가성비 전동책상', '듀얼모터 추천', '셀프 조립 무거움'],
    oneLiner: '가성비 전동 책상으로 인기가 높지만 싱글모터보다 소음·안정감 좋은 듀얼모터를 고르고 상판 무게 조립 인원 필요.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '메모리 버튼과 충돌 방지 센서가 탑재돼 20~30만 원대 합리적 예산으로 스탠딩 데스크 입문 가능',
      '라지·와이드 옵션과 화이트/블랙 프레임이 깔끔하게 떨어짐'
    ],
    cautions: [
      '싱글모터는 최대 하중과 승강 속도가 아쉽고, 전동 다리가 매우 무거워 1인 뒤집기·조립 시 주의 필요'
    ],
    checks: [
      '모델 선택: 모니터암+본체 올린다면 듀얼모터 사양 선택 권장',
      '조립: 박스 무게가 30kg+이므로 전동드릴과 2인 조립 또는 설치 옵션 체크'
    ],
    tones: ['white-minimal', 'steel-modern', 'oak-natural'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['sidiz-t20', 'monitor-stand-shelf'],
    goodLine: '합리적 가격대로 메모리 높이 저장·스탠딩 작업 가능한 전동 데스크',
    checkLine: '무거운 듀얼 모니터라면 싱글 말고 듀얼모터 사양 추천',
    altName: '루나랩 듀얼모터 모션데스크',
    altSearchKeyword: '루나랩 듀얼모터 모션데스크'
  },
  {
    id: 'l-shape-corner-desk',
    brand: 'APIX / SOFSYS',
    name: 'L자형 코너 게이밍 · 듀얼 작업 책상',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '10~22만 원대',
    chips: ['작업 공간 극대화', '원룸 배치 고정', '좌우 방향 확인'],
    oneLiner: '본체·공부·식사 공간을 ㄱ자로 나눌 수 있지만 5~7평 원룸에선 방 한쪽 코너에만 묶여 배치 변경이 어려워짐.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '1400×1200mm 이상 코너 면적으로 듀얼 모니터와 서류·노트북 공간을 동시에 넓게 활용 가능',
      '코너 연결부 하단에 본체나 서랍장을 숨기기 편함'
    ],
    cautions: [
      '문·창문 위치와 좌형/우형 방향이 안 맞으면 방 동선이 막히고, 일반 1200 일자 책상보다 이사 후 새 방에 맞출 확률이 낮음'
    ],
    checks: [
      '치수 체크: 이사 갈 가능성 높다면 L자 일체형보다 일자 책상+이동식 사이드테이블 조합이 유리',
      '조립: 코너 연결판 나사 유격이 생길 수 있어 수평 글라이드 확인 필수'
    ],
    tones: ['steel-modern', 'white-minimal', 'walnut-vintage'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['xenics-arena', 'ikea-helmer'],
    goodLine: '듀얼 모니터와 서류 작업을 한 번에 펼치는 넓은 코너 작업실',
    checkLine: '원룸 잦은 이사 예정이면 일자 책상 + 이동식 보조테이블이 배치 유연함',
    altName: '데스커·두닷 1400 일자 책상 + 이동식 사이드 트롤리',
    altSearchKeyword: '두닷 1400 일자 책상'
  },
  {
    id: 'folding-floor-desk',
    brand: 'LIVING',
    name: '접이식 600·800 좌식 미니 테이블',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '2~4만 원대',
    chips: ['접어서 벽 보관', '장시간 공부 비추', '다리 락킹 확인'],
    oneLiner: '간단한 식사·간식용으로 4평 원룸에 최고지만 하루 2시간 이상 노트북·공부하면 목·허리가 바로 아픔.',
    specs: { dust: 1, deposit: 1, trouble: 2 },
    pros: [
      '사용 후 3초 만에 다리를 접어 침대 옆이나 틈새에 끼워두면 바닥이 텅 비어 방이 넓어 보임',
      '컵홀더·태블릿 거치 홈이 있는 모델은 침대 위 트레이로도 활용 가능'
    ],
    cautions: [
      '고정 래치 없는 저가형은 상판을 앞으로 밀면 다리가 접힐 수 있고, 좌식 자세 자체가 척추·무릎 부담이 큼'
    ],
    checks: [
      '용도: 식사·1시간 이내 가벼운 영상 시청용으로만 사용 (메인 책상 대체 불가)',
      '안전: 다리 접힘 방지 안전 버튼(락킹) 유무 확인'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'walnut-vintage'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['corduroy-beanbag-1p', 'sisal-look-rug'],
    goodLine: '식사 후 접어서 틈새에 넣어두는 4~5평 초소형 원룸 보조 상',
    checkLine: '메인 공부·재택용으로는 거북목·허리 통증이 오니 짧은 사용만 권장',
    altName: '안전잠금 접이식 원목/LPM 좌식 테이블 800',
    altSearchKeyword: '접이식 좌식 테이블 800 안전잠금'
  },
  {
    id: 'hermanmiller-aeron',
    brand: 'HERMAN MILLER',
    name: '허먼밀러 에어론 · 세일 체어',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '90~220만 원대',
    chips: ['12년 장기 보증', '한국인 체형 사이즈 주의', '겨울 메쉬 서늘함'],
    oneLiner: '인체공학 의자의 정점이지만 서양인 체형 기준이라 B/C 사이즈 선택 실패 시 허벅지 눌림과 겨울 냉기가 큼.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '바닥 쿠션 꺼짐 없는 펠리클 메쉬와 12년 보증으로 하루 8시간 이상 앉는 직군에서 최강의 내구성 입증',
      '중고 감가가 적어 나중에 처분할 때도 환금성이 가장 높음'
    ],
    cautions: [
      '키 160~175cm라도 다리 길이·체중에 따라 A/B/C 사이즈가 확 갈리며, 겨울철 방이 추우면 메쉬 좌판이 꽤 차갑게 느껴짐'
    ],
    checks: [
      '사이즈: 반드시 매장 앉아보고 A/B 사이즈 및 헤드레스트(별매 아틀라스) 필요 여부 체크',
      '관리: 펠리클 메쉬 아래에 먼지가 떨어지고 니트·얇은 바지 마찰 주의'
    ],
    tones: ['steel-modern', 'white-minimal'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['desker-motion-desk', 'monitor-stand-shelf'],
    goodLine: '12년 보증·쿠션 꺼짐 없는 하이엔드 인체공학 메쉬 체어',
    checkLine: '서양인 규격(A/B/C)이라 반드시 착석 후 구매 + 겨울 방석 고려',
    altName: '허먼밀러 세일 체어 (100만 이하 입문/스튜디오 감성)',
    altSearchKeyword: '허먼밀러 세일 체어 정품'
  },
  {
    id: 'sizeof-chair',
    brand: 'SIZEOF',
    name: '사이즈오브체어 (체형 맞춤 의자)',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '30~40만 원대',
    chips: ['키·체중 맞춤 제작', '국산 A/S', '주문제작 반품 주의'],
    oneLiner: '내 키와 몸무게에 맞춰 좌판 길이·요추 지지 높이를 맞춰주는 국내 맞춤 의자 (단, 커스텀 특성상 단순 반품 어려움).',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '기성 의자가 크거나 작아 발이 뜨거나 오금이 닿는 소·장신 자취생에게 좌판 깊이 맞춤 만족도가 높음',
      '완제품 형태로 배송되거나 간단한 체결만 필요해 조립 부담이 낮음'
    ],
    pairTips: [
      '키가 160cm 이하이거나 양반다리 습관이 있다면 맞춤 옵션에서 좌판 넓이·팔걸이 간격을 넉넉히 상담하세요'
    ],
    checks: [
      '주문 전: 키·체중 입력 맞춤 제작이므로 옵션 오입력 시 반품 수수료 확인',
      '소재: 통기성 원할 땐 메쉬, 포근함 원할 땐 패브릭 선택'
    ],
    tones: ['white-minimal', 'steel-modern', 'butter-pastel'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['desker-desk', 'dodot-quattro-air'],
    goodLine: '기성 의자 높이가 안 맞는 소신·장신 체형을 위한 국산 맞춤 의자',
    checkLine: '주문제작 특성상 구매 전 키·다리 길이 치수 측정 정확히 입력하기',
    altName: '사이즈오브체어 베이직 / 몰디브 에디션',
    altSearchKeyword: '사이즈오브체어 맞춤의자'
  },
  {
    id: 'duoback-dk2500',
    brand: 'DUOBACK',
    name: '듀오백 브라보 · Q1W 메쉬 의자',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '15~26만 원대',
    chips: ['투백 허리 지지', '국내 3년 무상AS', '등받이 디자인 호불호'],
    oneLiner: '인테리어 감성보단 실속과 허리 지지력을 택했을 때 20만 원 전후에서 가장 실패 확률이 낮은 국산 스테디셀러.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '좌우 분리형 듀얼 등받이가 척추를 가운데 두고 양쪽 근육을 감싸줘 장시간 공부·인강 시청에 편안함',
      '국내 공식 A/S망과 부품 교체(바퀴·중심봉·커버)가 매우 쉬움'
    ],
    pairTips: [
      '등받이 연결 고무 부속에서 오래 쓰면 삐걱임이 날 때 실리콘 오일이나 커버 워싱으로 손쉽게 해결됨'
    ],
    checks: [
      '강점: 3년 A/S·튼튼한 바퀴·가성비 최고 수준의 요추 밀착감',
      '취향 체크: 듀얼 등받이 특유의 스포티/사무실 외관 확인'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['dodot-quattro', 'desker-desk'],
    goodLine: '감성보단 허리 편안함과 3년 무상 A/S가 우선일 때 확실한 선택',
    checkLine: '모던 원룸엔 화이트 프레임+그레이/아이보리 시트 조합이 덜 투박함',
    altName: '듀오백 Q1W 화이트 메쉬',
    altSearchKeyword: '듀오백 Q1W 화이트'
  },
  {
    id: 'dodot-quattro-air',
    brand: 'DODOT',
    name: '두닷 콰트로 에어 책상 (라운드 마감)',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '10~17만 원대',
    chips: ['모서리 라운드 안전', '튼튼한 스틸 다리', '자취방 좁은 동선 적합'],
    oneLiner: '기존 콰트로의 흔들림 없는 뼈대에 뾰족한 모서리를 둥글게 깎아 좁은 원룸 동선에서 허벅지 찍힐 걱정을 줄인 모델.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '모서리가 둥글고 프레임 안쪽 배치가 매끈해 침대 옆 좁은 통로에서도 부딪힐 위험이 낮음',
      'E0 등급 LPM 상판이라 컵 물기·음식 국물이 떨어져도 닦아내기 쉬움'
    ],
    pairTips: [
      '깊이 600mm(슬림) vs 800mm(모니터+작업) 중 5평 미만 원룸엔 1200×600mm가 가장 답답하지 않음'
    ],
    checks: [
      '치수: 원룸은 1200×600mm, 듀얼 모니터·넓은 작업은 1400×700mm 추천',
      '조립: 전동드릴 있으면 20분 컷 완조립'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'steel-modern'],
    styles: ['깔끔 미니멀', '포근 내추럴', '모던·스틸'],
    pairIds: ['sidiz-t20', 'monitor-stand-shelf'],
    goodLine: '튼튼한 프레임에 둥근 모서리 마감으로 좁은 방 동선까지 배려한 책상',
    checkLine: '원룸 메인 책상은 1200×600mm 규격이 가장 균형 잡힘',
    altName: '두닷 콰트로 에어 1200×600 (화이트/우드)',
    altSearchKeyword: '두닷 콰트로 에어 1200'
  },
  {
    id: 'ikea-micke-desk',
    brand: 'IKEA',
    name: '이케아 미케(MICKE) 서랍형 책상 105cm',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '11~15만 원대',
    chips: ['전선 구멍·수납', '폭 50cm 슬림 깊이', '상판 얇고 종이심재'],
    oneLiner: '폭 50cm로 좁은 벽면에 들어가고 서랍+전선 홀이 있어 화장대·노트북 책상 겸용으로 인기지만 모니터암 거치는 불가.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '깊이 50cm라 원룸 통로를 거의 막지 않고 서랍 2개+측면 수납장까지 일체형으로 깔끔함',
      '후면 전선 구멍과 하부 선반이 있어 멀티탭 숨기기가 편함'
    ],
    cautions: [
      '상판 내부가 파티클보드+허니콤 심재라 무거운 클램프형 모니터암을 조이면 파손 위험이 있고, 조립 부품 수가 꽤 많음'
    ],
    checks: [
      '용도: 24인치 이하 모니터 스탠드·노트북·화장대 겸용 적합 (모니터암 금지)',
      '치수: 깊이 50cm라 큰 데스크탑 작업엔 좁음'
    ],
    tones: ['white-minimal', 'oak-natural'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['ikea-helmer', 'snowman-mushroom-lamp'],
    goodLine: '깊이 50cm 슬림 사이즈+서랍+전선구멍이 다 있는 화장대 겸용 책상',
    checkLine: '깊이 좁고 허니콤 구조라 모니터암 거치는 피하고 노트북/화장대용 추천',
    altName: '이케아 미케 105×50 화이트',
    altSearchKeyword: '이케아 미케 책상 105'
  },
  {
    id: 'monitor-stand-shelf',
    brand: 'LIVING',
    name: '원목 · 알루미늄 모니터 받침대 (800mm)',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '2~5만 원대',
    chips: ['거북목 높이 보정', '키보드·노트북 하부 수납', '상판 휨 체크'],
    oneLiner: '모니터 시선을 8~10cm 높여 목 통증을 줄이고, 아래 공간에 키보드·마우스를 밀어 넣어 책상을 넓게 쓰는 필수 소품.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '사용 후 키보드와 노트북을 받침대 아래로 밀어 넣으면 식사·필기 공간이 즉시 생김',
      '멀티탭이나 작은 수납 트레이를 올려도 책상이 훨씬 정돈돼 보임'
    ],
    pairTips: [
      '폭 1000mm 이상 너무 긴 MDF 받침대는 무거운 모니터 올릴 때 중앙이 휘므로 500~800mm 원목 또는 스틸/알루미늄 추천'
    ],
    checks: [
      '체크: 하부 통과 높이 7cm 이상이어야 기계식 키보드도 간섭 없이 들어감',
      '소재: 중앙 처짐 막으려면 18T 이상 원목 또는 스틸/알루미늄 선택'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸', '감성 빈티지'],
    pairIds: ['desker-desk', 'dodot-quattro-air'],
    goodLine: '모니터 눈높이 교정+하부 키보드 수납으로 좁은 책상 효율 2배 상승',
    checkLine: '기계식 키보드 수납하려면 하단 높이 7cm+ · 중앙 안 휘는 원목/스틸 고르기',
    altName: '알루미늄·고무나무 원목 800mm 모니터 받침대',
    altSearchKeyword: '원목 모니터 받침대 800'
  },
  {
    id: 'homebar-island-table',
    brand: 'HANSSEM / 오늘의집',
    name: '수납형 홈바 아일랜드 식탁 1200',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '15~32만 원대',
    chips: ['조리대+식탁+렌지대 3in1', '원룸 부피 주의', '방수 상판 필수'],
    oneLiner: '주방 조리공간이 손바닥만 한 원룸에서 밥솥·전자레인지·도마 작업·식사를 한 번에 해결하지만 방 폭 실측 필수.',
    specs: { dust: 2, deposit: 2, trouble: 3 },
    pros: [
      '하부에 전자레인지·밥솥 슬라이딩 칸과 식료품 도어 수납이 있어 주방이 완전히 정리됨',
      '상판 위에서 재료 손질과 홈카페·식사까지 해결 가능'
    ],
    cautions: [
      '깊이 55~75cm, 길이 120cm로 덩치가 커서 6평 이하 원룸에선 출입 동선을 막을 수 있으며 셀프 조립 시 반나절 소요'
    ],
    checks: [
      '필수 체크: 슬라이딩 레일 밥솥 칸 유무 + 상판 생활방수 LPM 마감 여부',
      '시공: 무게가 크므로 가급적 기사 방문 조립 또는 부분 완제품 선택'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['sliding-rice-rack', 'door-hook-foodbin'],
    goodLine: '좁은 자취방 주방에 조리대·렌지대·홈바 식탁을 한 번에 추가',
    checkLine: '깊이 60cm+ 덩치 크므로 동선 60cm 남는지 먼저 재고 기사 조립 권장',
    altName: '기사설치 LPM 방수 홈바 아일랜드 1000~1200',
    altSearchKeyword: '수납형 홈바 아일랜드 식탁 1200'
  },
  {
    id: 'sliding-rice-rack',
    brand: 'LIVING',
    name: '슬라이딩 밥솥 · 전자레인지대 (LPM 방수)',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '7~14만 원대',
    chips: ['밥솥 증기 탈출 레일', '방수 LPM 상판', '콤팩트 폭 60cm'],
    oneLiner: '좁은 폭(60cm)으로 틈새에 들어가면서 밥할 때만 슬라이딩 선반을 앞으로 뽑아 상판 부풀어 오름을 막아주는 정석템.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '하단 슬라이딩 트레이를 앞으로 당겨 취사하면 뜨거운 밥솥 김이 윗판에 직접 닿지 않아 시트지 들뜸 방지',
      '전자레인지·에어프라이어·전기포트까지 수직 3~4단으로 모아 깔끔함'
    ],
    pairTips: [
      '뒤판이 뚫려 있거나 배선 홀이 있는 제품을 골라야 두꺼운 가전 콘센트 플러그가 벽에 안 걸림'
    ],
    checks: [
      '필수 스펙: 상단 판 두께 18T 이상 + 방수 LPM/스틸 + 슬라이딩 레일 스토퍼 유무',
      '전기 안전: 고용량 가전(밥솥+렌지) 동시 사용 시 4000W 고용량 멀티탭 권장'
    ],
    tones: ['white-minimal', 'oak-natural', 'steel-modern'],
    styles: ['깔끔 미니멀', '포근 내추럴', '모던·스틸'],
    pairIds: ['homebar-island-table', 'ss304-under-sink-rack'],
    goodLine: '폭 60cm 틈새에 밥솥·렌지·포트를 안전하게 모으는 슬라이딩 렌지대',
    checkLine: '저가 PVC 시트지 말고 LPM 방수+스틸 프레임 모델인지 확인',
    altName: '스틸프레임 LPM 4단 슬라이딩 렌지대 600',
    altSearchKeyword: '스틸 LPM 슬라이딩 렌지대 600'
  },
  {
    id: 'door-hook-foodbin',
    brand: 'LIVING',
    name: '싱크대 도어형 · 푸시락 밀폐 음식물쓰레기통 3L',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '1~2만 원대',
    chips: ['날파리·악취 차단', '1인 2~3L 적정', '실리콘 패킹 세척'],
    oneLiner: '싱크대 문 안쪽이나 상판에 걸어두는 소형 밀폐통으로 여름철 원룸 날파리·음식물 악취를 막는 가성비 필수템.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '혼자 살 때 5L 이상 큰 통은 꽉 채우기 전 곰팡이가 피지만 2~3L는 2~3일마다 비우기 딱 적당한 용량',
      '실리콘 패킹 뚜껑이 달려 상온에서도 냄새가 새지 않고 설거지 시 바로 버리기 편함'
    ],
    pairTips: [
      '도어 걸이형은 싱크대 문 상단 두께(보통 2cm 이내)와 고리 접촉부 스크래치 방지 실리콘 패드가 있는지 확인하세요'
    ],
    checks: [
      '용량: 1인가구 기준 2.5~3L 추천 (여름엔 냉동실 보관용 실리콘 지퍼백과 병행)',
      '관리: 내통과 뚜껑 실리콘 패킹 분리 세척 가능한지 체크'
    ],
    tones: ['white-minimal', 'butter-pastel', 'steel-modern'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['pedal-stainless-bin', 'ss304-under-sink-rack'],
    goodLine: '2~3L 딱 맞는 크기와 패킹 뚜껑으로 원룸 날파리·악취 완벽 차단',
    checkLine: '싱크대 문 두께 확인 후 걸이 고리 실리콘 패드 있나 보기',
    altName: '분리형 내통 도어걸이 밀폐 음식물쓰레기통 3L',
    altSearchKeyword: '밀폐 음식물쓰레기통 도어형 3L'
  },
  {
    id: 'mesh-3tier-trolley',
    brand: 'MARKETB / LIVING',
    name: '슬림 철제 메쉬 3단 주방·욕실 트롤리',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '2~4만 원대',
    chips: ['틈새 18~30cm 이동', '청소 시 밀어 이동', '망 틈새 이너매트 필요'],
    oneLiner: '냉장고 옆이나 세면대 옆 20cm 틈새를 살리기 좋지만 저가형은 바퀴 뻑뻑함·망 틈새 작은 병 넘어짐이 있음.',
    specs: { dust: 3, deposit: 1, trouble: 2 },
    pros: [
      '바퀴가 달려 바닥 물걸레질할 때 통째로 밀고 닦을 수 있어 고정 선반보다 위생적',
      '원룸에선 간식·양념·세탁세제·화장품까지 구역별로 옮겨 다니며 쓰기 좋음'
    ],
    cautions: [
      '플라스틱 기둥+얇은 철망 저가형은 무거운 1.5L 생수·세제를 많이 올리면 기우뚱하고, 작은 양념통은 메쉬 망 사이에 빠짐'
    ],
    checks: [
      '보완 팁: 라스크호그처럼 전체 스틸 프레임 모델 또는 얇은 PP 이너매트 깔고 사용',
      '크기: 틈새용이라면 바퀴 폭 포함한 전체 폭(예: 18cm/22cm) 실측 필수'
    ],
    tones: ['white-minimal', 'butter-pastel', 'sage-terracotta', 'steel-modern'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['ikea-raskog', 'ss304-under-sink-rack'],
    goodLine: '냉장고 옆 죽은 틈새를 움직이는 수납장으로 살리는 3단 카트',
    checkLine: '바퀴 포함 실제 너비 실측하고 무거운 물건은 맨 아래 칸에 적재',
    altName: '올스틸 분체도장 슬림 틈새 트롤리 3단',
    altSearchKeyword: '스틸 틈새 트롤리 3단 바퀴'
  },
  {
    id: 'cafe-machine-shelf',
    brand: 'LIVING',
    name: '홈카페 커피머신 · 캡슐 서랍 선반',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '2~5만 원대',
    chips: ['캡슐·티백 숨김 수납', '상부 머신 거치', '공간 절약'],
    oneLiner: '네스프레소 등 커피머신 바로 아래에 깔아 캡슐·티백·시럽을 서랍에 숨기면 좁은 테이블도 깔끔한 카페 존이 됨.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '원래 머신이 차지하던 바닥 면적 그대로 아래층 수납 서랍만 추가돼 공간을 1cm도 더 안 씀',
      '철제·우드 상판 제품이 많아 방 톤에 맞춰 홈카페 존 완성도가 확 올라감'
    ],
    pairTips: [
      '물통 채울 때 머신 높이가 위로 올라가므로 상부장 바로 아래에 둘 땐 윗공간 15cm 이상 여유 확인하세요'
    ],
    checks: [
      '호환: 내 캡슐(오리지널 vs 버츄오 vs 돌체구스토) 칸 크기 호환 확인',
      '진동: 머신 추출 시 덜그럭 소리 막기 위해 하단 논슬립 고무패드 필수'
    ],
    tones: ['white-minimal', 'walnut-vintage', 'steel-modern', 'oak-natural'],
    styles: ['깔끔 미니멀', '감성 빈티지', '모던·스틸'],
    pairIds: ['walnut-round-cafe-table', 'sliding-rice-rack'],
    goodLine: '머신 놓던 자리 그대로 아래에 캡슐·티백 서랍을 숨기는 정리함',
    checkLine: '오리지널/버츄오 캡슐 규격 호환과 상단 물통 빼는 높이 확인',
    altName: '스틸·우드 커피캡슐 수납 서랍 선반',
    altSearchKeyword: '커피머신 캡슐 수납 서랍 선반'
  },
  {
    id: 'ikea-variera-organizer',
    brand: 'IKEA',
    name: '이케아 바리에라(VARIERA) 주방 2단 선반·수납통',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '5천~1만 원대',
    chips: ['상부장 접시 분리', '1만 원 미만 가성비', '물세척 가능'],
    oneLiner: '자취방 주방 상부장이나 하부장 높이가 남아돌 때 그릇·컵을 2층으로 쌓아 공간 효율을 2배 늘리는 국민 정리템.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '겹쳐 쌓으면 아래 접시 꺼낼 때마다 힘들던 그릇들을 위아래 층으로 나눠 한 번에 꺼내기 쉬움',
      '분체도장 스틸 선반과 둥근 PP 박스는 오염 시 통째로 물세척 가능'
    ],
    pairTips: [
      '크기가 큰 버전(32×28cm)과 작은 버전(32×13cm)을 상부장 깊이에 맞춰 2개 조합하면 공간 낭비가 없음'
    ],
    checks: [
      '실측: 상부장 내경 가로·깊이 측정 후 대/소 조합',
      '조립: 나사 4개만 조이면 1분 컷 완성'
    ],
    tones: ['white-minimal'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['ss304-under-sink-rack', 'stainless-dish-rack'],
    goodLine: '만 원 안팎으로 주방 상·하부장 수납량을 2배로 늘리는 필수 선반',
    checkLine: '상부장 깊이(보통 30cm 내외) 재고 대·소 조합해 구매하기',
    altName: '이케아 바리에라 선반인서트 대+소 세트',
    altSearchKeyword: '이케아 바리에라 선반인서트'
  },
  {
    id: 'silicone-drying-mat',
    brand: 'LIVING',
    name: '실리콘 물빠짐 배수 식기 건조 매트',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '1만 원대',
    chips: ['원룸 협소 싱크대 최적', '말아서 보관', '열탕·식세기 소독'],
    oneLiner: '거대한 식기건조대를 놓을 자리조차 없는 1인 원룸 주방에서 설거지할 때만 펼쳐 쓰고 말아 치우는 대안.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '배수구 쪽 경사형 립(날개)이 달린 제품은 물이 싱크대로 자연스럽게 흘러 물고임·물곰팡이 걱정이 적음',
      '사용 후 돌돌 말아 세워두면 조리 공간이 온전히 살아남'
    ],
    pairTips: [
      '100% 백금 실리콘 제품을 골라야 끓는 물 소독이나 식기세척기 세척 시 냄새·변형 없이 위생적으로 씀'
    ],
    checks: [
      '디자인: 싱크볼 쪽으로 물이 빠지는 경사 배수 립 구조 선택',
      '관리: 주 1회 베이킹소다·끓는 물 소독으로 물때 완벽 제거'
    ],
    tones: ['white-minimal', 'oak-natural', 'sage-terracotta', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['stainless-dish-rack', 'door-hook-foodbin'],
    goodLine: '건조대 놓을 자리 없는 원룸 싱크대를 넓게 쓰는 배수형 실리콘 매트',
    checkLine: '싱크볼 쪽으로 물이 흐르는 배수 날개형 + 열탕 가능한 국내산 실리콘 추천',
    altName: '배수구 물빠짐 실리콘 식기건조매트',
    altSearchKeyword: '실리콘 물빠짐 식기건조매트'
  },
  {
    id: 'expandable-dish-rack',
    brand: 'LIVING',
    name: '싱크볼 거치형 스텐 확장 식기건조대',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '2~5만 원대',
    chips: ['싱크볼 위 공간 활용', '바스켓 길이 실측 필수', '수전 간섭 주의'],
    oneLiner: '싱크볼 위 허공에 걸쳐 조리대를 아끼는 똑똑한 아이템이지만 내 싱크볼 가로 폭과 수도꼭지 높이 안 재면 설치 불가.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '그릇에서 떨어지는 물이 바로 싱크볼로 빠지므로 물받이 판을 따로 닦을 필요가 없음',
      '바닥 면적을 0cm 차지해 좁은 주방 조리 공간을 그대로 보존'
    ],
    cautions: [
      '싱크볼 폭을 벗어나는 조절 길이 한계나 벽/수도꼭지(수전) 위치에 걸려 얹히지 않는 경우가 잦음'
    ],
    checks: [
      '필수 측정: 싱크볼 내경/외경 가로 길이(cm) + 뒤쪽 수전 돌출 길이 확인',
      '소재: 물이 계속 닿으므로 꼭 SUS304 스테인리스 확인'
    ],
    tones: ['steel-modern', 'white-minimal'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['stainless-dish-rack', 'silicone-drying-mat'],
    goodLine: '물받이 청소 없이 싱크볼 위 허공에 그릇을 말리는 공간 절약형 건조대',
    checkLine: '구매 전 싱크볼 가로 길이와 수전(수도꼭지) 간섭 여부 꼭 측정하기',
    altName: '304 스텐 길이조절 싱크볼 식기건조대',
    altSearchKeyword: '싱크볼 거치 스텐304 식기건조대'
  },
  {
    id: 'magnetic-fridge-rack',
    brand: 'LIVING',
    name: '냉장고 옆면 자석 마그네틱 키친타올·양념랙',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '1~3만 원대',
    chips: ['무타공 1초 부착', '원상복구 100%', '초강력 자석 체크'],
    oneLiner: '못질이나 테이프 없이 냉장고 옆면에 딱 붙여 키친타올·랩·자주 쓰는 양념을 공중 수납하는 자취 필수품.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '벽면·타공 걱정 0%로 1초 만에 붙였다가 이사할 때 그대로 떼어 가져갈 수 있음',
      '싱크대 위 조리 공간에 굴러다니던 키친타올·호일·가위가 깔끔히 정리됨'
    ],
    pairTips: [
      '최근 냉장고 중 강화유리(글라스) 도어 전면은 자석이 안 붙지만 옆면 철판에는 대부분 붙으니 구매 전 냉장고 옆면에 일반 자석부터 대보세요'
    ],
    checks: [
      '사전 체크: 내 냉장고 옆면이 자석 붙는 철판인지 먼저 테스트',
      '하중: 고무 자석판 넓은 제품(2~4kg 하중)을 골라야 키친타올 뜯을 때 안 밀림'
    ],
    tones: ['white-minimal', 'steel-modern', 'oak-natural'],
    styles: ['깔끔 미니멀', '모던·스틸', '포근 내추럴'],
    pairIds: ['door-hook-foodbin', 'ss304-under-sink-rack'],
    goodLine: '못질·테이프 없이 냉장고 옆면에 붙이는 원상복구 100% 공중 수납',
    checkLine: '내 냉장고 옆면에 자석 붙는지 먼저 확인하고 하중 3kg+ 통자석 모델 구매',
    altName: '고하중 분체도장 마그네틱 냉장고 선반',
    altSearchKeyword: '냉장고 옆면 자석 선반 키친타올'
  },
  {
    id: 'airfryer-heat-rack',
    brand: 'GENERIC',
    name: '저가 조립식 플라스틱/얇은 철선 에어프라이어 랙',
    category: '식탁·주방·생활',
    verdict: 'NOPE',
    priceTier: '1만 원대',
    chips: ['고온 열기 변형', '진동 흔들림', '코팅 벗겨짐'],
    oneLiner: '에어프라이어·오븐 작동 시 나오는 고열과 진동을 버티지 못해 플라스틱 부품이 뒤틀리거나 윗판이 처짐.',
    specs: { dust: 2, deposit: 1, trouble: 5 },
    checks: [
      '열기 주의: 에어프라이어·토스터 상단/후면 배기구 고열에 저가 코팅·플라스틱 부품 손상',
      '안정성: 얇은 와이어 선반은 무거운 바스켓 꺼낼 때마다 선반째 끌려 나와 위험'
    ],
    tones: ['white-minimal'],
    styles: ['깔끔 미니멀'],
    pairIds: ['sliding-rice-rack', 'homebar-island-table'],
    goodLine: '1만 원대 저렴한 2단 거치 가격',
    checkLine: '고온 열기와 바스켓 당기는 힘에 흔들림·변형이 심함',
    altName: '두꺼운 스틸 프레임 LPM 전자레인지·에어프라이어 선반',
    altSearchKeyword: '튼튼한 스틸 전자레인지 선반 LPM'
  },
  {
    id: 'foldable-round-dining',
    brand: 'DECO / WOOD',
    name: '원목 반접이식 버터플라이 식탁 900',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '11~19만 원대',
    chips: ['원형 ↔ 반달 벽밀착', '원목 내구성', '손님 초대 확장'],
    oneLiner: '평소엔 한쪽 날개를 접어 벽에 붙인 반달 테이블로 쓰다가 손님이 오면 900mm 둥근 식탁으로 펴는 원룸 맞춤 설계.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '반원 상태로 벽에 바짝 붙이면 방 통로가 넓게 남고, 동그란 모서리 덕분에 지나다니며 부딪힐 일이 없음',
      '고무나무·애쉬 원목 모델이 많아 오크·내추럴·빈티지 톤과 잘 어울림'
    ],
    pairTips: [
      '접히는 경첩 아래 받침 다리가 고정되는 잠금 걸쇠가 튼튼한지 확인하면 기대었을 때도 안 접힘'
    ],
    checks: [
      '강점: 벽 밀착 반달 형태(1인)와 원형(2~3인)을 자유롭게 전환',
      '관리: 원목 제품은 뜨거운 냄비 받침 필수'
    ],
    tones: ['oak-natural', 'walnut-vintage', 'white-minimal', 'sage-terracotta'],
    styles: ['포근 내추럴', '감성 빈티지', '깔끔 미니멀'],
    pairIds: ['walnut-round-cafe-table', 'fabric-cafe-chair'],
    goodLine: '평소엔 벽에 붙이는 반달 식탁, 손님 올 땐 둥근 식탁으로 변신',
    checkLine: '날개 지탱 잠금장치 튼튼한 원목·LPM 방수 마감 모델 선택',
    altName: '고무나무 원목 반타원 접이식 버터플라이 테이블',
    altSearchKeyword: '반타원 접이식 원목 식탁'
  },

  // ==================== 10. Batch B: 조명·거울 · 무타공·욕실 확장 (21종) ====================
  {
    id: 'ikea-simrishamn',
    brand: 'IKEA',
    name: '이케아 심리스함(SIMRISHAMN) 크롬 유리 스탠드',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '6~18만 원대',
    chips: ['크롬+오팔유리 감성', 'E14 전구 별매', '생각보다 큰 부피'],
    oneLiner: '크롬 파이프와 동글한 유리 볼 조합으로 모던 스틸 방 완성도가 높지만 E14 규격 전구와 생각보다 큰 높이·눈부심 주의.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '반짝이는 크롬 프레임과 우유빛 유리 구체가 꺼져 있을 때도 오브제 같은 존재감을 발휘',
      '장스탠드 모델은 광량이 풍부해 방 전체 서브 메인등 역할까지 가능'
    ],
    cautions: [
      '동네 마트에 잘 없는 E14 꼬마전구 소켓을 쓰며, 유리 갓 바로 옆에 앉으면 전구 빛이 다소 눈부실 수 있음'
    ],
    checks: [
      '규격 체크: 전구 별매(E14 소켓)이므로 이케아/온라인에서 전구색 LED 함께 주문',
      '치수: 사진보다 볼 지름과 전체 높이가 크므로 협탁 위 여유 공간 실측 필수'
    ],
    tones: ['steel-modern', 'white-minimal', 'butter-pastel'],
    styles: ['모던·스틸', '컬러 포인트'],
    pairIds: ['midcentury-module-shelf', 'rareraw-system'],
    goodLine: '실물 존재감이 압도적인 크롬 메탈 + 오팔 유리 오브제 조명',
    checkLine: 'E14 소켓 전구 별도 구매 + 침대 바로 옆 눈부심 거리 두기',
    altName: '이케아 심리스함 테이블 스탠드 + E14 2700K 전구',
    altSearchKeyword: '이케아 심리스함 스탠드 조명'
  },
  {
    id: 'ikea-tarnaby',
    brand: 'IKEA',
    name: '이케아 테르나뷔(TÄRNABY) 디밍 테이블 램프',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '3만 원대',
    chips: ['밝기 조절 다이얼', '빈티지 램프 감성', '전구 1개 E14'],
    oneLiner: '전통 등유 램프 디자인에 밝기 조절(디머) 스위치가 달려 잠들기 전 최소 광량으로 낮춰 쓰기 완벽한 감성 무드등.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '본체 옆 노브를 돌려 독서용 밝기부터 은은한 취침 수면등까지 자유롭게 조광 가능',
      '유리 갓 안으로 보이는 필라멘트 LED 전구가 월넛·오크·세이지 방 무드를 확 살려줌'
    ],
    pairTips: [
      '디밍 기능이 있는 조명이라 일반 전구가 아닌 반드시 "밝기조절용(Dimmable) E14 LED 전구"를 끼워야 깜빡임 없이 부드럽게 작동함'
    ],
    checks: [
      '전구 필수 체크: 일반 E14 전구 넣으면 디머에서 깜빡일 수 있으므로 디밍 지원 E14 전구 사용',
      '크기: 높이 25cm 콤팩트 사이즈라 좁은 협탁에도 딱 맞음'
    ],
    tones: ['walnut-vintage', 'oak-natural', 'sage-terracotta', 'steel-modern'],
    styles: ['감성 빈티지', '포근 내추럴'],
    pairIds: ['walnut-bedside-nightstand', 'walnut-round-cafe-table'],
    goodLine: '다이얼로 밝기 조절되는 빈티지 감성 침대 옆 무드등',
    checkLine: '깜빡임 없으려면 꼭 밝기조절용(디밍 가능) E14 전구 장착하기',
    altName: '이케아 테르나뷔 + 디밍가능 E14 필라멘트 전구',
    altSearchKeyword: '이케아 테르나뷔 테이블스탠드'
  },
  {
    id: 'ikea-tokabo',
    brand: 'IKEA',
    name: '이케아 토카보(TOKABO) 1만 원대 유리 무드등',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '1만 원 후반대',
    chips: ['1만 원대 미니 갓', '손바닥 크기', '좁은 선반 쏙'],
    oneLiner: '1만 원대 가격으로 손바닥만 한 공간을 차지해 책장 칸이나 좁은 창틀에 쏙 들어가는 버섯형 오팔 유리 램프.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '지름 15cm의 앙증맞은 크기라 빌리/칼락스 선반 칸 내부나 아주 좁은 침대 협탁에도 여유롭게 들어감',
      '오팔 유리가 빛을 둥글게 감싸 직사광 눈부심이 없음'
    ],
    pairTips: [
      '바닥 코르크/파스텔 버전에 2700K 전구색 E14 전구를 넣으면 가격 대비 감성 가성비가 최고'
    ],
    checks: [
      '전구 체크: E14 소켓 전구 별매 (따뜻한 전구색 추천)',
      '안전: 상단 유리 갓이 얹혀진 구조라 흔들리는 위치 피해서 배치'
    ],
    tones: ['white-minimal', 'butter-pastel', 'oak-natural', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '컬러 포인트', '포근 내추럴'],
    pairIds: ['ikea-kallax', 'ikea-knarrevik'],
    goodLine: '1만 원대로 책장 칸이나 좁은 틈새에 놓기 딱 좋은 미니 오팔 램프',
    checkLine: '전구(E14) 별매 확인 + 떨어지지 않는 선반 안쪽 배치 추천',
    altName: '이케아 토카보 테이블 스탠드',
    altSearchKeyword: '이케아 토카보 스탠드'
  },
  {
    id: 'ikea-lauters',
    brand: 'IKEA',
    name: '이케아 라우테르스(LAUTERS) 원목 삼각 장스탠드',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '7~10만 원대',
    chips: ['애쉬 원목 삼각다리', '높이 조절', '전선 다리 내부 숨김'],
    oneLiner: '전선을 나무 다리 속으로 숨겨 깔끔하고 패브릭 갓 덕분에 밤에 방을 가장 포근하게 채우는 우드 장스탠드.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '삼각 원목 다리 홈 안쪽으로 전선을 숨길 수 있어 플로어 스탠드 특유의 선 지저분함이 없음',
      '높이를 119~151cm 사이로 조절 가능해 소파·침대 높이에 맞춰 세팅 가능'
    ],
    pairTips: [
      '삼각 다리 반경이 약 60cm 차지하므로 4~5평 초소형 원룸보다는 소파·침대 옆 코너가 남는 6평 이상 방에 어울림'
    ],
    checks: [
      '공간 체크: 삼각 다리 지름 62cm 바닥 면적 여유 필요',
      '전구: E26 일반 규격 사용 (패브릭 갓이 빛을 잘 걸러줌)'
    ],
    tones: ['oak-natural', 'white-minimal', 'sage-terracotta', 'butter-pastel'],
    styles: ['포근 내추럴', '깔끔 미니멀', '감성 빈티지'],
    pairIds: ['ikea-klippan', 'pin-sheer-curtain'],
    goodLine: '전선까지 나무 다리에 숨기는 포근한 애쉬 원목 삼각 장스탠드',
    checkLine: '하부 삼각 다리 지름 62cm 코너 공간 남는지 먼저 재보기',
    altName: '이케아 라우테르스 플로어 스탠드 (애쉬/화이트)',
    altSearchKeyword: '이케아 라우테르스 플로어 스탠드'
  },
  {
    id: 'smart-bulb-wifi',
    brand: 'TP-LINK / PHILIPS',
    name: '스마트 Wi-Fi LED 전구 (밝기·색온도 앱 제어)',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '1~2만 원대',
    chips: ['침대 위 스마트폰 소등', '2700K~6500K 전환', '2.4GHz 와이파이 확인'],
    oneLiner: '이케아·마켓비 스탠드에 이 전구만 끼우면 잘 때 일어나 스위치 끌 필요 없이 앱으로 색감·취침 타이머까지 조절됨.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '낮엔 집중용 주백색(4000K)으로 공부하다가 밤 10시엔 전구색(2700K) 밝기 20%로 자동 전환 가능',
      '스위치 끄러 침대 밖으로 나갈 필요 없이 폰·음성으로 바로 소등'
    ],
    pairTips: [
      '스탠드 소켓 규격(한국/이케아 큰 소켓 E26 vs 작은 소켓 E14)을 꼭 확인하고 사야 헛걸음 안 함'
    ],
    checks: [
      '와이파이 조건: 초기 연결 시 공유기 2.4GHz 대역만 지원하는 경우가 많음',
      '규격: E26 소켓인지 E14 소켓인지 스탠드 상세표 확인'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '모던·스틸', '포근 내추럴'],
    pairIds: ['ikea-lersta', 'ikea-fado'],
    goodLine: '기존 스탠드를 1만 원대 스마트 취침 예약 조명으로 업그레이드',
    checkLine: '내 스탠드 소켓 크기(E26/E14) 확인 & 2.4GHz 와이파이 페어링',
    altName: '티피링크 타포 / 필립스 위즈 E26 스마트 LED 전구',
    altSearchKeyword: '티피링크 타포 스마트 전구 E26'
  },
  {
    id: 'strap-round-mirror',
    brand: 'DECO',
    name: '스트랩 원형 벽거울 500mm (가죽/패브릭)',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '3~7만 원대',
    chips: ['화장대·현관 포인트', '무게 2.5~4kg 낙하 주의', '꼭꼬핀 한계 확인'],
    oneLiner: '동그란 거울+가죽 스트랩 조합이 감성적이지만 거울 자체가 무거워 실크벽지 일반 꼭꼬핀으론 떨어질 수 있음.',
    specs: { dust: 2, deposit: 3, trouble: 3 },
    pros: [
      '사각 거울보다 곡선 라인이 방 분위기를 부드럽게 만들고 화장대·서랍장 위에 걸면 좁은 벽이 트여 보임',
      '바닥 면적을 안 써 좁은 원룸에 공간 효율이 좋음'
    ],
    cautions: [
      '지름 500mm 이상 유리 거울은 무게가 3~4kg에 달해 꼭꼬핀 1개로 버티다 새벽에 떨어져 깨질 수 있으므로 다중 하중 핀·타공 불가 시 주의'
    ],
    checks: [
      '하중 체크: 제품 실제 무게(kg) 확인 → 2kg 이하는 대형 꼭꼬핀 2중 분산, 3kg 이상은 선반 위 기대어 사용 권장',
      '안전: 비산방지 필름 부착 여부 확인'
    ],
    tones: ['oak-natural', 'white-minimal', 'walnut-vintage', 'butter-pastel'],
    styles: ['포근 내추럴', '감성 빈티지', '깔끔 미니멀'],
    pairIds: ['daiso-kkokkopin', 'ikea-micke-desk'],
    goodLine: '곡선감으로 화장대·서랍장 위 벽을 카페처럼 만드는 원형 거울',
    checkLine: '무게 3kg 넘는 유리는 무타공 핀에 매달기 위험하므로 서랍 위 세움 권장',
    altName: '경량 알루미늄 프레임 원형 탁상/벽거울 (비산방지)',
    altSearchKeyword: '비산방지 원형 거울 500'
  },
  {
    id: 'led-touch-vanity-mirror',
    brand: 'LIVING',
    name: 'USB 충전 LED 터치 탁상 화장 거울',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '2~4만 원대',
    chips: ['그늘 없는 정면 조명', '3단 색온도 전환', '무선 C타입 충전'],
    oneLiner: '어두운 원룸 화장대·책상에서 천장 형광등 역광 때문에 얼굴에 그림자 지는 스트레스를 해결해 주는 실속템.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '자연광(4500K)·전구색·주광색 3단 전환이 되어 외출 전 피부 톤·메이크업 확인이 정확함',
      '하단 받침대가 립밤·귀걸이 놓는 미니 트레이 역할을 겸하는 모델이 많아 책상 정리에 유리'
    ],
    pairTips: [
      '건전지 4개 들어가는 구형 말고 USB-C 충전 내장배터리 모델을 사야 유지비 없이 오래 씀'
    ],
    checks: [
      '전원: USB-C타입 무선 충전 지원 + 각도 90° 조절 가능 여부',
      '크기: 가로는 최소 18~20cm 이상이어야 얼굴 전체가 한눈에 들어옴'
    ],
    tones: ['white-minimal', 'butter-pastel', 'oak-natural'],
    styles: ['깔끔 미니멀', '컬러 포인트'],
    pairIds: ['ikea-micke-desk', 'stackable-acrylic-box'],
    goodLine: '역광 원룸에서도 자연광 톤으로 정확히 얼굴 비춰주는 LED 화장거울',
    checkLine: '건전지형 말고 USB-C 충전 내장배터리 · 받침대 트레이형 고르기',
    altName: 'USB-C 3색 조명 LED 탁상 거울 (트레이 받침)',
    altSearchKeyword: 'USB C타입 LED 탁상 화장거울'
  },
  {
    id: 'ikea-nissedal-mirror',
    brand: 'IKEA',
    name: '이케아 니세달(NISSEDAL) 슬림 전신거울 40×150',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '6~8만 원대',
    chips: ['슬림 프레임', '경첩 문/벽 겸용', '비산방지 보호필름'],
    oneLiner: '거추장스러운 지지대 없이 벽에 기대어 세우거나 경첩으로 열어 쓰는 슬림한 40cm 폭의 깔끔한 전신거울.',
    specs: { dust: 2, deposit: 2, trouble: 2 },
    pros: [
      '군더더기 없는 얇은 베젤(화이트·블랙·월넛 등)이라 방이 넓어 보이고 어느 무드에도 자연스러움',
      '뒷면 비산방지 안전 필름 처리 및 바닥 고정/벽 기대기 모두 깔끔함'
    ],
    pairTips: [
      '원룸에서 벽에 못 박지 않고 세워둘 땐 바닥에 얇은 논슬립 실리콘 패드를 깔아 미끄러짐을 막으세요'
    ],
    checks: [
      '크기: 폭 40cm라 좁은 벽 틈새에도 쏙 들어가며 전신 확인 충분',
      '안전: 타공 없이 세울 땐 하단 미끄럼 방지 패드 추가 필수'
    ],
    tones: ['white-minimal', 'steel-modern', 'walnut-vintage', 'oak-natural'],
    styles: ['깔끔 미니멀', '모던·스틸', '감성 빈티지'],
    pairIds: ['door-hook-mirror', 'ikea-mulig'],
    goodLine: '군더더기 없는 얇은 베젤과 40cm 슬림 폭의 정석 전신거울',
    checkLine: '원룸 무타공 바닥 세움 시 거울 하단 논슬립 패드 붙이면 밀림 방지',
    altName: '이케아 니세달 40×150 화이트/월넛/블랙',
    altSearchKeyword: '이케아 니세달 거울 40 150'
  },
  {
    id: 'acrylic-wave-mirror',
    brand: 'GENERIC',
    name: '저가 아크릴 웨이브 · 구름 전신/벽거울',
    category: '조명·거울',
    verdict: 'NOPE',
    priceTier: '1~3만 원대',
    chips: ['거울 상 왜곡(울렁거림)', '기스 잘 남', '양면테이프 벽 손상'],
    oneLiner: '유리가 아닌 얇은 아크릴 재질이라 두 걸음만 뒤로 물러서도 얼굴과 몸이 울렁울렁 찌그러져 실용성 제로.',
    specs: { dust: 2, deposit: 3, trouble: 5 },
    checks: [
      '왜곡: 1~2mm 아크릴 거울은 벽면 굴곡을 그대로 따라 휘어져 거울 구실을 못함',
      '스크래치: 휴지로 닦아도 잔기스가 금방 생겨 뿌옇게 변함',
      '벽지 손상: 동봉 양면 폼테이프로 붙이면 퇴실 시 도배지 찢어짐'
    ],
    tones: ['butter-pastel', 'white-minimal'],
    styles: ['컬러 포인트'],
    pairIds: ['full-stand-mirror', 'door-hook-mirror'],
    goodLine: '깨지지 않고 가벼운 1만 원대 사진 소품 가격',
    checkLine: '반사가 울렁거려 실사용 불가 + 양면테이프 벽지 훼손 위험',
    altName: '진짜 유리 비산방지 필름 아치형 전신거울 (3mm 이상)',
    altSearchKeyword: '유리 비산방지 아치형 전신거울'
  },
  {
    id: 'paper-hanji-lamp',
    brand: 'DECO / PAPER',
    name: '아카리 스타일 한지 · 라이스페이퍼 단/장스탠드',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '3~7만 원대',
    chips: ['빛 확산 최고 부드러움', '종이 찢김·습기 주의', '먼지 털기 조심'],
    oneLiner: '전구 빛을 한지가 구름처럼 부드럽게 퍼뜨려 인테리어 잡지 분위기를 내지만 습한 방·반려동물엔 찢김 주의.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '전구 직사광을 가장 포근하고 균일하게 분산시켜 좁은 방을 아늑한 갤러리 무드로 바꿔줌',
      '무게가 아주 가벼워 택배 배송·이사 시 접어서 부피 없이 가져갈 수 있음'
    ],
    cautions: [
      '얇은 한지·쌀종이 갓은 모서리에 스치면 찢어지거나 장마철 습기를 먹어 누렇게 변색될 수 있으며 물걸레질 불가'
    ],
    checks: [
      '조립: 와이어 지지대 끼울 때 종이 안 찢어지게 조심해 천천히 펼칠 것',
      '전구: 발열 없는 LED 전구(2700K, 5~8W)만 사용 필수 (백열등 열기 변색 위험)'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'sage-terracotta'],
    styles: ['포근 내추럴', '감성 빈티지', '깔끔 미니멀'],
    pairIds: ['walnut-bedside-nightstand', 'low-slatted-pallet'],
    goodLine: '빛을 가장 부드럽고 포근하게 퍼뜨려 방 전체 분위기를 180도 바꿈',
    checkLine: '저발열 LED 전구 필수 + 물기/반려동물/날카로운 모서리 스침 주의',
    altName: '이케아 비드야(VIDJA) / 패브릭 갓 스탠드 (내구성 대체)',
    altSearchKeyword: '한지 라이스페이퍼 단스탠드 조명'
  },
  {
    id: 'filter-shower-head',
    brand: 'LIVING',
    name: '원룸 녹물 · 수압상승 필터 샤워기 헤드',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '1~3만 원대',
    chips: ['노후 배관 녹물 차단', '약한 수압 보강', '리필 필터 유지비'],
    oneLiner: '오래된 원룸 빌라의 녹물·잔류염소 걱정을 눈으로 확인하며 거르고 수압까지 시원하게 높여주는 입주 1순위 필수템.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '1분 만에 돌려서 무타공 교체 가능하고 퇴실 시 원래 샤워기 헤드만 다시 껴두면 원상복구 완료',
      '투명 손잡이 내부 세디먼트 필터 색 변화로 우리 집 배관 상태를 바로 확인 가능'
    ],
    pairTips: [
      '너무 무거운 헤드는 기존 벽걸이 거치대에서 고개가 아래로 꺾이므로 150~200g대 가벼운 제품으로 고르세요'
    ],
    checks: [
      '체크: 기존 원룸 샤워기 헤드는 버리지 말고 세면대 하부장 안쪽에 비닐에 싸서 보관 (퇴실 시 원복용)',
      '교체 주기: 물 색에 따라 1~2개월마다 세디먼트 필터 교체'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['soft-diatomite-mat', 'no-drill-toilet-seat'],
    goodLine: '구옥 원룸 녹물·약한 수압 해결 + 퇴실 시 원래 헤드로 1분 원복',
    checkLine: '가벼운 헤드 고르고 원래 있던 집주인 샤워기 헤드는 꼭 보관해 두기',
    altName: '초경량 수압상승 비타민·세디먼트 필터 샤워기 + 리필',
    altSearchKeyword: '수압상승 녹물 필터 샤워기 헤드'
  },
  {
    id: 'no-drill-toilet-seat',
    brand: 'DAELIM / LIVING',
    name: '무타공 셀프 교체 소프트 변기커버',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '1~3만 원대',
    chips: ['공구 없이 5분 교체', '이전 사용자 흔적 리셋', 'O형·U형 규격 필수'],
    oneLiner: '전 세입자가 쓰던 낡고 변색된 변기커버를 공구 없이 5분 만에 새것으로 갈아 위생을 챙기는 자취 입주 꿀템.',
    specs: { dust: 1, deposit: 1, trouble: 2 },
    pros: [
      '하부 플라스틱 볼트/너트를 손으로 돌려 푸는 방식이라 드라이버 없이 5분 내 교체 가능',
      '소프트 클로징(천천히 닫힘) 댐퍼 모델은 밤에 뚜껑 쾅 닫히는 층간·욕실 소음까지 막아줌'
    ],
    pairTips: [
      '쿠션형 비닐 커버는 이음새가 터져 물이 스며들 수 있으므로 위생 관리가 편한 단단한 PP/ABS 방수 소프트닫힘형 추천'
    ],
    checks: [
      '필수 측정: 변기 앞모양(둥근 O형 / 뾰족 V형 / U형) + 볼트 구멍 간격(보통 13~17cm) + 길이 실측',
      '원복: 오래된 기존 커버 사진 찍어두거나 세입자 협의 후 교체'
    ],
    tones: ['white-minimal'],
    styles: ['깔끔 미니멀'],
    pairIds: ['filter-shower-head', 'silicone-toilet-brush'],
    goodLine: '공구 없이 5분 만에 새 욕실처럼 위생 리셋 + 조용한 소프트 닫힘',
    checkLine: '변기 모양(O/U형)과 볼트 간격 안 재면 100% 반품되니 줄자로 꼭 재기',
    altName: '소프트클로징 원터치 분리세척 변기커버 (PP)',
    altSearchKeyword: '소프트클로징 변기커버 원터치'
  },
  {
    id: 'door-towel-bar',
    brand: 'LIVING',
    name: '문걸이형 스테인리스 욕실 수건걸이',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '1만 원대',
    chips: ['습기에 절대 안 떨어짐', '타일 훼손 제로', '문 두께 2~4.5cm 확인'],
    oneLiner: '흡착·테이프 수건걸이가 습기에 떨어지는 걸 원천 차단하고 욕실 문이나 싱크대 문에 톡 걸어 쓰는 100% 무타공 걸이.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '접착제나 타공 없이 문 상단에 걸기만 하면 돼 무거운 젖은 바스타월 2장 걸어도 추락 위험 제로',
      '설치·철거가 1초라 이사할 때도 그대로 챙겨 가면 됨'
    ],
    pairTips: [
      '걸이 안쪽에 EVA 폼/실리콘 패드가 붙어있는지 봐야 문틀 기스를 막고 덜그럭 소리가 안 남'
    ],
    checks: [
      '실측 체크: 걸려는 문 상단 두께(싱크대 문 2cm vs 방문 3.5~4.5cm) 및 문 닫힐 때 위쪽 틈새 2mm 확인',
      '소재: 습한 욕실엔 SUS304 스테인리스 추천'
    ],
    tones: ['steel-modern', 'white-minimal'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['ss304-tension-bath-rod', 'door-hook-mirror'],
    goodLine: '타일 접착 추락 없이 젖은 수건 여러 장 버티는 무타공 문걸이',
    checkLine: '싱크대 문용(2cm) vs 욕실 방문용(4cm) 걸이 폭 꼭 구분해 주문',
    altName: '스텐304 문걸이형 2단 수건걸이 (기스방지 패드)',
    altSearchKeyword: '문걸이 스텐 수건걸이 무타공'
  },
  {
    id: 'gel-sticky-towel-bar',
    brand: 'GENERIC',
    name: '매직테이프 · 겔 패드 접착식 수건·휴지걸이',
    category: '무타공·욕실',
    verdict: 'WARN',
    priceTier: '5천~1.5만 원대',
    chips: ['유광 타일 건조 부착 필수', '무광·줄눈 위 추락', '드라이기 가열 제거'],
    oneLiner: '매끈한 유광 타일에 유분기 닦고 24시간 말려 붙이면 튼튼하지만 대충 붙이거나 줄눈에 걸치면 밤새 떨어짐.',
    specs: { dust: 1, deposit: 2, trouble: 3 },
    pros: [
      '원하는 위치·높이(세면대 옆 손 닿는 자리)에 못질 없이 정확히 배치 가능',
      '수건뿐 아니라 드라이기 거치대·칫솔꽂이 등 다양한 파츠 호환'
    ],
    cautions: [
      '유광 타일이 아닌 거친 돌·무광 타일이나 타일 사이 시멘트 줄눈에 걸치면 공기 유입으로 탈락하며, 퇴실 시 뗄 땐 드라이기 열을 가해야 끈적이 안 남음'
    ],
    checks: [
      '부착 규칙: 알코올/물티슈 탈지 → 물기 완전 건조 → 부착 후 24시간 뒤 물건 거치',
      '주의: 벽지엔 절대 부착 금지 (타일·유리·매끈한 가구 옆면 전용)'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['ss304-tension-bath-rod', 'door-towel-bar'],
    goodLine: '원하는 타일 위치에 못질 없이 붙이는 심플한 욕실 정리',
    checkLine: '반드시 줄눈 피한 매끈한 타일 위·완전 건조 후 24시간 뒤 사용하기',
    altName: 'SUS304 무타공 접착 수건걸이 (예비 매직패드 포함)',
    altSearchKeyword: '무타공 접착 스텐304 수건걸이'
  },
  {
    id: 'foldable-laundry-basket',
    brand: 'LIVING',
    name: '슬림 폴딩 메쉬 · 방수 패브릭 빨래바구니',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '1~2만 원대',
    chips: ['세탁기 옆 틈새 맞춤', '통풍으로 냄새 방지', '분리 운반 가능'],
    oneLiner: '딱딱한 대형 플라스틱 바구니 대신 세탁기·변기 옆 20cm 틈새에 들어가고 빨래 없는 날엔 접어 치우는 자취 필수품.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '통풍되는 메쉬·방수 옥스포드 소재라 젖은 수건·운동복 넣어둬도 쉰내·곰팡이가 덜 피움',
      '폭 18~22cm 슬림형은 작은 원룸 욕실·베란다 틈새 동선을 방해하지 않음'
    ],
    pairTips: [
      '어깨끈 또는 튼튼한 손잡이가 달려 있으면 코인세탁방 갈 때도 그대로 들고 나가기 좋음'
    ],
    checks: [
      '크기: 세탁기 옆이나 화장실 문 뒤 남는 폭(보통 20cm 전후) 실측 후 선택',
      '구조: 바닥 지지대 와이어가 있어 빈 상태에서도 자립되는 모델 추천'
    ],
    tones: ['white-minimal', 'oak-natural', 'steel-modern', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['soft-diatomite-mat', 'mesh-3tier-trolley'],
    goodLine: '20cm 좁은 틈새에 쏙 들어가고 통풍돼 빨래 쉰내 막아주는 바구니',
    checkLine: '흐물거리지 않게 상단·바닥 프레임 자립형 + 손잡이 튼튼한지 보기',
    altName: '틈새 슬림 자립형 폴딩 메쉬 빨래바구니 20cm',
    altSearchKeyword: '슬림 틈새 폴딩 빨래바구니'
  },
  {
    id: 'no-drill-door-stopper',
    brand: 'DAISO / LIVING',
    name: '무타공 자석 · 실리콘 현관문 도어스토퍼',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '3천~1.5만 원대',
    chips: ['환기 시 문 쾅 방지', '택배·분리수거 편리', '발로 톡 고정'],
    oneLiner: '창문 열고 맞통풍 환기할 때 현관문이 바람에 쾅 닫히는 걸 막아주고 분리수거 나갔다 문 잠기는 대참사를 예방.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '양손에 분리수거·배달음식 들었을 때 발로 톡 눌러 문을 열어둘 수 있어 자취 생활 만족도 급상승',
      '철제 현관문에 붙이는 강력 자석형이나 바닥 끼움 실리콘형 모두 구멍 0개'
    ],
    pairTips: [
      '자석형 도어스토퍼는 우리 집 현관문 아랫단이 철판인지(알루미늄·우드 시트 내부 철판 여부) 자석부터 붙여보고 주문하세요'
    ],
    checks: [
      '타입: 현관문 틈새 높이(1~3cm)에 맞는 쐐기형 실리콘 vs 발페달 자석형 중 선택',
      '주의: 자석형은 자석 약하면 문 열 때마다 흘러내리니 3M+네오디뮴 자석 이중 타입 권장'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['door-hook-mirror', 'magnetic-fridge-rack'],
    goodLine: '환기할 때 현관문 쾅 닫힘·자동 잠김 사고를 막는 1만 원 이하 꿀템',
    checkLine: '문 바닥과 현관 바닥 높이 차이를 재고 자석/실리콘형 고르기',
    altName: '자석 부착형 무타공 발페달 현관 도어스토퍼',
    altSearchKeyword: '무타공 자석 현관 도어스토퍼'
  },
  {
    id: 'silicone-toilet-brush',
    brand: 'LIVING',
    name: '물 안 고이는 TPR 실리콘 변기솔 (벽걸이·자립)',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '5천~1.5만 원대',
    chips: ['털 빠짐·세균 0%', '통풍 받침대', '납작 헤드 구석 청소'],
    oneLiner: '기존 나일론 모 변기솔 안에 찌꺼기가 끼고 바닥에 물이 고여 냄새나던 단점을 없앤 깔끔한 실리콘 브러시.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '납작하고 유연한 실리콘 헤드라 변기 안쪽 턱(물 나오는 틈)까지 구부러져 들어가고 머리카락이 솔에 안 감김',
      '하단 통풍 구멍이 뚫린 케이스라 물기가 금방 말라 세균·악취가 적음'
    ],
    pairTips: [
      '변기 뒤쪽 벽 타일에 무타공 패드로 띄워 거치하면 욕실 바닥 물청소할 때 솔통을 매번 들지 않아도 됨'
    ],
    checks: [
      '디자인: 하부 물빠짐 이중 받침대 분리 세척 가능 여부 확인',
      '주의: 물 얼룩만 가볍게 씻기는 용도이며 심한 묵은 때는 락스/거품세정제 병행 필요'
    ],
    tones: ['white-minimal', 'steel-modern', 'butter-pastel'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['no-drill-toilet-seat', 'soft-diatomite-mat'],
    goodLine: '솔에 오물이 안 끼고 물기 빨리 마르는 위생적인 실리콘 변기솔',
    checkLine: '하부 통풍 받침대 분리 세척 가능한지 체크해 곰팡이 방지',
    altName: '통풍 받침대 분리형 TPR 실리콘 변기솔',
    altSearchKeyword: '통풍 실리콘 변기솔 TPR'
  },
  {
    id: 'window-draft-seal',
    brand: '3M / LIVING',
    name: '창문 틈새 우풍 차단 모헤어 · 실리콘 테이프',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '5천~1.5만 원대',
    chips: ['겨울 난방비 절감', '미세먼지·날벌레 차단', '창틀 프레임 전용'],
    oneLiner: '구옥 원룸 창문 틈으로 들어오는 찬 바람·도로 소음·여름 날벌레를 1만 원 미만으로 막아주는 월동 필수템.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '창문 하단과 겹쳐지는 중간 레일 틈에 모헤어/실리콘 스트립만 붙여도 겨울철 실내 체감 온도가 2~3°C 올라감',
      '여름엔 창문 물구멍 방충망 스티커와 함께 쓰면 초파리·날벌레 유입을 크게 줄임'
    ],
    pairTips: [
      '샷시 알루미늄/PVC 프레임에 붙이므로 벽지 훼손 걱정이 없고, 젤형보다 잔여물 적게 남는 투명 실리콘/모헤어 타입이 퇴실 때 깔끔함'
    ],
    checks: [
      '실측: 창문 틈새 두께(보통 3~6mm vs 8~12mm)에 맞는 폭·두께 고르기',
      '함께 챙길 것: 창틀 하단 물구멍 방충망 스티커'
    ],
    tones: ['white-minimal'],
    styles: ['깔끔 미니멀'],
    pairIds: ['blackout-curtain', 'pin-sheer-curtain'],
    goodLine: '구옥 원룸 우풍·벌레·소음을 1만 원 미만으로 잡는 방한 틈새 테이프',
    checkLine: '벽지 말고 샷시 틈새에만 붙이고 창틀 물구멍 방충망도 함께 막기',
    altName: '투명 실리콘 창문 문풍지 + 창틀 물구멍 방충망 스티커',
    altSearchKeyword: '투명 실리콘 문풍지 창문 틈새'
  },
  {
    id: 'drain-hair-catcher',
    brand: 'DAISO / LIVING',
    name: '실리콘 · 일회용 욕실 배수구 머리카락 거름망',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '2천~1만 원대',
    chips: ['하수구 막힘 예방', '냄새·벌레 1차 차단', '초가성비'],
    oneLiner: '배수구 막혀서 출장비 10만 원 날리는 참사와 나방파리 올라오는 문제를 2천 원대로 막는 자취생 생존템.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '샤워 후 모인 머리카락을 손대지 않고 스티커형이나 실리콘 손잡이로 한 번에 떼어 버릴 수 있음',
      '세면대·욕실 배수구 물고임과 악취 트랩 역할까지 보완'
    ],
    pairTips: [
      '배수구 덮개 지름(보통 10×10cm 사각 유가 vs 원형)을 자로 재고 맞춰 사면 물 넘침 없이 딱 붙음'
    ],
    checks: [
      '규격 체크: 우리 집 바닥 배수구 가로×세로 크기 확인',
      '관리: 머리카락 방치하면 물이 역류하니 2~3일 1회 교체/비우기'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀'],
    pairIds: ['silicone-toilet-brush', 'soft-diatomite-mat'],
    goodLine: '배수구 막힘 수리비와 나방파리를 막는 자취방 1순위 소모품',
    checkLine: '배수구 유가 크기(10cm 내외) 재고 실리콘/스티커형 선택',
    altName: '실리콘 욕실 배수구 트랩 · 머리카락 거름망',
    altSearchKeyword: '실리콘 욕실 배수구 머리카락 거름망'
  },
  {
    id: 'adhesive-wallpaper-sheet',
    brand: 'GENERIC',
    name: '저가 점착식 시트지 벽지 · 접착식 바닥 데코타일',
    category: '무타공·욕실',
    verdict: 'NOPE',
    priceTier: '2~6만 원대',
    chips: ['보증금 공제 1순위', '도배지 찢김·끈적이', '원상복구 지옥'],
    oneLiner: '누런 장판·낡은 벽지 가리겠다고 전월세 방에 붙였다가 퇴실 때 본드가 안 떼어져 도배·장판비 수십만 원 청구받는 주범.',
    specs: { dust: 1, deposit: 5, trouble: 5 },
    checks: [
      '원상복구 재앙: 1년 뒤 뗄 때 기존 실크벽지·장판 표면 코팅까지 통째로 뜯겨 나감',
      '실사용: 장판 위 접착 데코타일은 바닥 난방 열기에 본드가 녹아 틈새로 끈적한 풀이 새어 나옴',
      '대안: 바닥은 비접착 조립식 데코타일이나 대형 러그, 벽면은 패브릭 포스터(꼭꼬핀) 활용'
    ],
    tones: ['white-minimal', 'oak-natural'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['sisal-look-rug', 'pin-sheer-curtain'],
    goodLine: '방 전체 색감을 한 번에 가려주는 착시 효과',
    checkLine: '퇴실 시 본드 자국·벽지 찢김으로 도배·장판 원상복구비 폭탄 주의',
    altName: '비접착 깔기식 데코타일 또는 대형 사이잘룩 러그',
    altSearchKeyword: '무접착 끼움식 데코타일 원룸'
  },
  {
    id: 'tension-curtain-rod-black',
    brand: 'MARKETB / LIVING',
    name: '논슬립 굵은(32mm) 무타공 압축 커튼봉',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '1~3만 원대',
    chips: ['못질 0개 원상복구', '32mm 두꺼운 강관', '창틀 안쪽 처짐 없음'],
    oneLiner: '1만 원 미만 얇은 압축봉이 암막커튼 무게에 휘어 떨어지는 문제를 32mm 굵은 파이프와 넓은 논슬립 고무발로 잡은 제품.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '창틀 안쪽(콘크리트/우드 샷시 틀) 벽 사이에 밀어 고정하므로 벽지 손상 없이 무거운 암막커튼도 거치 가능',
      '커튼뿐 아니라 원룸 공간 분리용 파티션 가림막 커튼 설치에도 활용'
    ],
    pairTips: [
      '반드시 1~2cm 넓고 얇은 16mm봉이 아니라 지름 25~32mm 이상 두꺼운 압축봉을 사야 2m 창 가로에서도 중앙이 안 휨'
    ],
    checks: [
      '필수 측정: 창틀 안쪽 좌우 내경 길이(cm)와 커튼봉 설치 가능 평면 폭(최소 4cm)',
      '설치: 스프링 압축 구간 외에 안전 고정 너트까지 끝까지 조여 떨어짐 방지'
    ],
    tones: ['white-minimal', 'steel-modern', 'oak-natural'],
    styles: ['깔끔 미니멀', '모던·스틸', '포근 내추럴'],
    pairIds: ['pin-sheer-curtain', 'blackout-curtain'],
    goodLine: '못질 없이 창틀에 꽉 물려 무거운 커튼·가림막을 버티는 32mm 강관 봉',
    checkLine: '지름 25~32mm 이상 굵기 확인 + 창틀 안쪽 평평한 너비 4cm+ 확인',
    altName: '32mm 초강력 무타공 논슬립 압축 커튼봉',
    altSearchKeyword: '32mm 초강력 무타공 압축봉 커튼'
  },

  // ==================== 11. Batch C: 소파·침대·수납 확장 (21종) ====================
  {
    id: 'jack-sofa-bed',
    brand: '오늘의집 / LIVING',
    name: '원룸 2인 접이식 소파베드 (3단 각도 조절)',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '12~25만 원대',
    chips: ['소파+침대 2in1', '접힘 이음새 배김', '별도 토퍼 권장'],
    oneLiner: '5평 원룸에 소파·침대를 동시에 놓기 좁을 때 매력적이지만, 펴서 잘 때 가운데 접힘선 배김과 기어 유격 주의.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '낮엔 등받이를 세워 소파로 쓰고 손님 오거나 밤엔 180° 펼쳐 침대로 전환 가능',
      '1인 가구 원룸 공간과 가구 예산을 동시에 절약'
    ],
    cautions: [
      '매일 주 침대로 쓰기엔 쿠션이 단단하거나 가운데 틈이 배기고, 등받이 기어 고장 시 각도 고정이 안 풀릴 수 있음'
    ],
    checks: [
      '보완 팁: 매일 잠자리로 쓴다면 얇은 5cm 토퍼/요패드를 위에 깔아 이음새 배김 방지',
      '커버: 음식물 흘림 대비 생활방수 원단이나 커버 분리 가능 여부 확인'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['silent-waterproof-cover', 'waffle-linen-throw'],
    goodLine: '소파와 침대를 한 번에 해결하는 좁은 원룸 다목적 소파베드',
    checkLine: '접힘 틈새 배김을 막으려면 얇은 토퍼를 위에 깔고 이지클린 원단 고르기',
    altName: '이케아 프리헤텐 또는 생활방수 2인 소파베드',
    altSearchKeyword: '생활방수 2인용 접이식 소파베드'
  },
  {
    id: 'silent-waterproof-cover',
    brand: 'LIVING / DECO',
    name: '순면 무소음 방수 매트리스 · 토퍼 커버',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '1~3만 원대',
    chips: ['커피·땀 100% 방어', '바스락 소음 없음', '집먼지진드기 차단'],
    oneLiner: '세탁 불가능한 매트리스·토퍼에 커피 쏟거나 여름 땀 배는 참사를 막아주며 순면 상단이라 비닐 소리도 안 남.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '고밀도 TPU 무소음 방수막 덕분에 뒤척여도 비닐 바스락 소리가 안 나고 액체 투과를 100% 차단',
      '집먼지진드기 통과를 막아 자취방 비염·피부 트러블 예방에 큰 도움'
    ],
    pairTips: [
      '위에는 일반 감성 이불/패드를 덮고, 그 아래 매트리스에 딱 맞게 씌워두면 인테리어 색감을 해치지 않으면서 수명을 3배 늘림'
    ],
    checks: [
      '소재 체크: 저렴한 PVC/PE 비닐 대신 상단 면 100% + 하단 TPU 무소음 방수막 확인',
      '크기: 내 매트리스·토퍼 두께(예: 10cm vs 25cm)에 맞는 옆면 높이(밴드/지퍼) 고르기'
    ],
    tones: ['white-minimal', 'butter-pastel', 'oak-natural'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['zinus-mattress', 'high-density-topper'],
    goodLine: '매트리스 오염·진드기 완벽 차단하면서 바스락 소리 없는 순면 방수커버',
    checkLine: '반드시 매트리스 두께 맞는 옆단 높이 + 무소음 TPU 코팅 확인',
    altName: '순면 100% 무소음 TPU 지퍼형 방수 매트리스 커버',
    altSearchKeyword: '순면 무소음 TPU 방수 매트리스 커버'
  },
  {
    id: 'high-density-topper',
    brand: 'SLOU / MONGE / LIVING',
    name: '고밀도 폼 · 3단 접이식 토퍼 매트리스 (8~10cm)',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '8~22만 원대',
    chips: ['접어서 바닥 넓힘', '허리 안 배김', '바닥 습기 환기'],
    oneLiner: '침대 프레임 없이 바닥 생활하면서도 허리 통증 없이 푹 자고, 낮엔 접어 세워 방을 넓게 쓰는 원룸 인기 대안.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '두께 8~10cm 이상 고밀도 폼(50kg/m³ 이상)은 얇은 요와 달리 옆으로 누워도 골반·어깨가 바닥에 안 배김',
      '이사 갈 때 말거나 접어서 차량에 쏙 들어가 대형 폐기물 걱정 없음'
    ],
    pairTips: [
      '바닥 직결 사용 시 일주일에 한 번은 벽에 세워 밑면 습기를 날려주거나 얇은 PE 저상형 깔판을 아래 두면 완벽함'
    ],
    checks: [
      '두께·밀도: 성인 기준 최소 7~8cm 이상 & 분리 세탁 가능한 겉커버 모델 선택',
      '관리: 방수 속커버 + 주 1회 세워 환기'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['silent-waterproof-cover', 'low-slatted-pallet'],
    goodLine: '침대 프레임 없이도 허리 편하고 이사·청소 때 접어 치우는 토퍼',
    checkLine: '두께 8cm+ 고밀도 폼 + 겉커버 세탁 가능 여부 & 주 1회 환기',
    altName: '8~10cm 고밀도 메모리폼 3단 접이식 토퍼 (커버분리)',
    altSearchKeyword: '고밀도 3단 접이식 토퍼 10cm'
  },
  {
    id: 'ikea-utaker-stack-bed',
    brand: 'IKEA',
    name: '이케아 우토케르(UTÅKER) 스태킹 침대 2단',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '22~30만 원대',
    chips: ['겹쳐서 소파 활용', '손님 올 때 2인 침대', '소나무 원목 프레임'],
    oneLiner: '평소엔 두 개를 겹쳐 싱글 침대/데이베드 소파로 쓰다가 친구 놀러 오면 바로 분리해 2개의 침대가 되는 똑똑한 침대.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '원룸에 손님이 자주 오거나 퀸 침대가 부담스러울 때 2개로 분리해 넓게 쓰거나 코너 소파로 배치 가능',
      '가벼운 소나무 원목 프레임이라 여성 혼자서도 떼었다 겹쳤다 하기 쉬움'
    ],
    pairTips: [
      '매트리스 2장 두께가 합쳐서 너무 두꺼우면 스태킹 높이가 높아지므로 12~14cm 폼 매트리스 2개 조합이 권장됨'
    ],
    checks: [
      '매트리스 두께: 스태킹 전용 권장 두께(최대 13~15cm) 초과하지 않도록 맞춰 구매',
      '참고: 무도장 원목 느낌이라 젖은 걸레보다 마른 천 관리 추천'
    ],
    tones: ['oak-natural', 'white-minimal', 'sage-terracotta'],
    styles: ['포근 내추럴', '깔끔 미니멀'],
    pairIds: ['silent-waterproof-cover', 'waffle-linen-throw'],
    goodLine: '평소엔 싱글/데이베드, 손님 올 땐 2인 침대로 변신하는 스태킹 침대',
    checkLine: '매트리스 두께 13~15cm 이하 2장을 맞춰야 깔끔하게 포개짐',
    altName: '이케아 우토케르 스태킹 침대 + 얇은 폼매트리스',
    altSearchKeyword: '이케아 우토케르 스태킹 침대'
  },
  {
    id: 'aloe-microfiber-bedding',
    brand: 'DECO',
    name: '알러지케어 고밀도 마이크로화이버 차렵이불',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '4~9만 원대',
    chips: ['먼지 날림 최소화', '원룸 세탁기 통세탁', '반려동물 털 안 붙음'],
    oneLiner: '자취방 먼지·머리카락 뭉침의 50%를 차지하는 면 이불 대신 가볍고 통세탁·빠른 건조되는 알러지케어 원단.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '원사 틈새가 촘촘해 먼지·진드기·반려동물 털이 천에 박히지 않고 손으로 털면 바로 떨어짐',
      '9~12kg 원룸 드럼세탁기에도 쏙 들어가고 탈수 후 반나절이면 마르는 빠른 건조력'
    ],
    pairTips: [
      '60% 바탕 색감을 정할 때 이불 컬러 하나만 크림·버터·세이지 단색으로 맞춰도 방 인테리어의 절반이 완성됨'
    ],
    checks: [
      '색상 팁: 무늬 있는 이불 대신 무지 크림·아이보리·파스텔 단색 고르면 방이 넓고 정돈돼 보임',
      '세탁: 고온 건조기 돌리면 원단이 뻣뻣해질 수 있어 저온 건조 또는 자연 건조 권장'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta', 'walnut-vintage'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['hotel-micro-pillow', 'waffle-linen-throw'],
    goodLine: '자취방 먼지·털 안 붙고 원룸 세탁기에서 통세탁·빠른 건조되는 이불',
    checkLine: '방이 넓어 보이려면 무늬 없는 무지 크림·버터·세이지 단색 추천',
    altName: '세미마이크로 알러지케어 무지 차렵이불 (SS/Q)',
    altSearchKeyword: '알러지케어 무지 차렵이불'
  },
  {
    id: 'hotel-micro-pillow',
    brand: 'LIVING',
    name: '지퍼형 높이조절 호텔식 마이크로화이버 베개',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '1~3만 원대',
    chips: ['솜 빼서 높이 맞춤', '통세탁 가능', '저가 솜 뭉침 주의'],
    oneLiner: '빵빵한 호텔 베개가 멋져 보여 샀다가 너무 높아 목 디스크 올 수 있으므로 반드시 지퍼로 솜 양 조절 가능한 모델 선택.',
    specs: { dust: 1, deposit: 1, trouble: 2 },
    pros: [
      '지퍼를 열어 내 목 C커브에 맞게 충전재를 덜어내면 거북목·어깨 결림을 크게 줄일 수 있음',
      '세탁망에 넣어 통째로 물세탁 가능해 침구 위생 유지가 쉬움'
    ],
    cautions: [
      '지퍼 없는 봉제 일체형 초빵빵 베개는 높은 베개가 안 맞는 체형에게 최악이며 저가 솜은 3개월 만에 납작하게 꺼짐'
    ],
    checks: [
      '필수 조건: 겉커버+속통 지퍼가 있어 솜 빼기/보충 가능한 제품 고르기',
      '높이 기준: 똑바로 누웠을 때 목이 꺾이지 않는 6~8cm 눌림 높이가 이상적'
    ],
    tones: ['white-minimal', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['aloe-microfiber-bedding', 'silent-waterproof-cover'],
    goodLine: '통세탁 위생과 부드러운 호텔 촉감 (지퍼 높이 조절형 기준)',
    checkLine: '지퍼 없는 빵빵 베개 피하고, 내 목에 맞게 솜 덜어내는 조절형 고르기',
    altName: '높이조절 지퍼형 알러지케어 호텔 베개솜',
    altSearchKeyword: '높이조절 지퍼 호텔 베개'
  },
  {
    id: 'folding-steel-cot',
    brand: 'GENERIC',
    name: '저가 철망·바퀴 일체형 접이식 간이침대',
    category: '소파·침대·매트',
    verdict: 'NOPE',
    priceTier: '6~12만 원대',
    chips: ['철망 삐걱 소음', '허리·등 배김', '접어도 부피 큼'],
    oneLiner: '접으면 편할 것 같지만 막상 접으면 무겁고 한쪽 벽을 다 차지하며, 뒤척일 때마다 철제 스프링·관절 소음이 심함.',
    specs: { dust: 2, deposit: 2, trouble: 5 },
    checks: [
      '착와감: 얇은 폼+하단 철제 와이어가 그대로 느껴져 1주일만 자도 허리 통증 호소 다수',
      '소음·부피: 바퀴 잠금장치 풀림 및 관절 삐걱임 + 접었을 때도 30cm+ 두께 차지',
      '대안: 차라리 고밀도 3단 접이식 토퍼 + PE 깔판이 수면 질·보관성 모두 압승'
    ],
    tones: ['steel-modern', 'white-minimal'],
    styles: ['깔끔 미니멀'],
    pairIds: ['high-density-topper', 'ikea-utaker-stack-bed'],
    goodLine: '임시 손님용 프레임 포함 가격',
    checkLine: '철망 배김+관절 소음+접었을 때 무겁고 부피가 커서 주 침대로 비추',
    altName: '고밀도 3단 접이식 토퍼 매트리스 (10cm)',
    altSearchKeyword: '고밀도 3단 접이식 토퍼 10cm'
  },
  {
    id: 'round-boucle-ottoman',
    brand: 'DECO',
    name: '수납형 원형 부클레 · 패브릭 스툴 (오토만)',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '3~7만 원대',
    chips: ['내부 이불·잡동사니 수납', '보조의자+발받침', '둥근 실루엣 포인트'],
    oneLiner: '화장대 의자·소파 발받침·손님용 보조의자로 쓰면서 뚜껑을 열면 계절 옷·가방까지 숨길 수 있는 1석3조 원룸 스툴.',
    specs: { dust: 3, deposit: 1, trouble: 1 },
    pros: [
      '모서리가 없는 둥근 형태라 좁은 동선에 놔도 답답하지 않고 포근한 오브제 포인트가 됨',
      '내부 깊은 수납공간에 드라이기·여분 수건·잡동사니를 감쪽같이 숨김'
    ],
    pairTips: [
      '부클레 원단 먼지 끼임이 신경 쓰인다면 매끈한 생활방수 패브릭이나 코듀로이 뚜껑 모델을 고르세요'
    ],
    checks: [
      '하중: 사람이 앉아야 하므로 MDF 상판 지지 하중 80~100kg 이상인지 확인',
      '크기: 지름 35~40cm가 책상·화장대 아래 넣기 딱 좋음'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta', 'walnut-vintage'],
    styles: ['포근 내추럴', '컬러 포인트', '깔끔 미니멀'],
    pairIds: ['ikea-klippan', 'ikea-micke-desk'],
    goodLine: '보조의자·발받침·비밀 수납함 역할을 한 번에 하는 둥근 포인트 스툴',
    checkLine: '내하중 90kg+ 튼튼한 몸체 및 생활방수 패브릭 여부 확인',
    altName: '생활방수 패브릭 원형 수납 스툴 오토만',
    altSearchKeyword: '원형 수납 스툴 오토만 패브릭'
  },
  {
    id: 'washable-short-carpet',
    brand: 'DECO / RUG',
    name: '워셔블 먼지없는 단모 카페트 러그 150×200',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '3~6만 원대',
    chips: ['세탁기 통세탁', '장판 황변 적은 논슬립', '부드러운 맨발 촉감'],
    oneLiner: '샤기 러그의 먼지·세탁 불가 단점과 사이잘룩의 까슬함을 동시에 해결해 사계절 침대 옆·책상 아래 깔기 가장 무난한 러그.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '파일(털) 길이 4~6mm 초단모라 먼지가 박히지 않고 돌돌이·청소기 한 번으로 깔끔히 관리됨',
      '가벼워서 원룸 세탁기 울코스로 빨아 널기 편하고 보일러 바닥에도 잘 어울림'
    ],
    pairTips: [
      '바닥 변색을 완전히 막으려면 검정 고무 도트 대신 원단 일체형 TPU/논슬립 도트 뒷면인지 보고 두 달에 한 번씩 들춰 바닥을 닦아주세요'
    ],
    checks: [
      '치수 가이드: 싱글 침대 발치·소파 앞엔 150×200cm(또는 140×200cm)가 방 비율에 딱 맞음',
      '관리: 세탁기 가능 & 건조기 사용 금지'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta', 'walnut-vintage'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['low-slatted-pallet', 'walnut-round-cafe-table'],
    goodLine: '세탁기 들어가고 까슬거리지 않아 사계절 침실 베이스로 가장 무난한 러그',
    checkLine: '150×200mm 이상 크기로 침대·테이블 다리를 살짝 걸쳐야 밀리지 않음',
    altName: '국내생산 워셔블 먼지없는 단모 러그 150×200',
    altSearchKeyword: '워셔블 먼지없는 단모 러그 150 200'
  },
  {
    id: 'heated-electric-mat',
    brand: 'KYUNGDONG / LIVING',
    name: '워셔블 탄소매트 · 카본 전기매트 싱글 (전자파 안심)',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '7~15만 원대',
    chips: ['난방비 30% 절약', '라텍스·폼 위 온도 주의', '물세탁 가능'],
    oneLiner: '겨울철 원룸 도시가스 폭탄을 막는 구원템이지만 라텍스/메모리폼 매트리스 위 고온 사용 시 폼 손상·화재 위험 체크 필수.',
    specs: { dust: 1, deposit: 1, trouble: 2 },
    pros: [
      '탄소 열선·DC 저전압 매트는 무거운 물통 보충 없이 통째로 접어 세탁기 세탁이 가능하고 전기료가 매우 저렴함',
      '온수매트 특유의 호스 물소리·모터 소음·물 빼기 번거로움이 없음'
    ],
    cautions: [
      '천연 라텍스나 저가 메모리폼 위에 전기장판을 고온(45°C+)으로 오래 켜두면 열 축적으로 폼이 변색·경화될 수 있음'
    ],
    checks: [
      '안전 스펙: EMF 전자파 안심 인증 + 15시간 자동 타이머 + KC 안전 인증 확인',
      '호환: 메모리폼 위엔 얇은 면 패드 1장 덧대고 취침 온도(35~38°C)로 사용'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['aloe-microfiber-bedding', 'window-draft-seal'],
    goodLine: '물통 없이 물세탁 가능하고 원룸 겨울 난방비를 확 줄이는 탄소매트',
    checkLine: '메모리폼·토퍼 위에선 38°C 이하 중저온 + 얇은 이불 패드 덧대 사용',
    altName: '워셔블 DC 탄소매트 싱글 EMF 인증',
    altSearchKeyword: '워셔블 탄소매트 싱글 EMF 인증'
  },
  {
    id: 'waffle-linen-throw',
    brand: 'DECO',
    name: '와플 직조 면·린넨 소파 커버 · 베드 러너',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '2~4만 원대',
    chips: ['낡은 옵션 가구 가리기', '5분 톤 맞추기', '통세탁 간편'],
    oneLiner: '풀옵션 원룸의 낡고 색 안 맞는 가구·침대 발치 위에 툭 덮어두면 단 2만 원대에 방 무드가 잡히는 스타일링 치트키.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '바꾸기 힘든 집주인 옵션 소파·의자·칙칙한 이불 색을 버터·테라코타·세이지·크림 톤으로 즉시 덮어 통일감 부여',
      '음식물을 흘려도 소파가 아닌 커버만 벗겨 세탁기에 돌리면 끝'
    ],
    pairTips: [
      '10% 포인트 컬러(머스타드·벽돌색·세이지 그린)를 방에 처음 시도할 때 가장 실패 부담이 적은 방법'
    ],
    checks: [
      '사이즈: 1~2인 소파 덮기엔 최소 150×200cm 이상 대형 블랭킷으로 사야 안 벗겨짐',
      '소재: 와플 직조는 올 풀림이 있을 수 있어 날카로운 반려동물 발톱·지퍼 고리 주의'
    ],
    tones: ['sage-terracotta', 'butter-pastel', 'oak-natural', 'walnut-vintage', 'white-minimal'],
    styles: ['포근 내추럴', '컬러 포인트', '감성 빈티지'],
    pairIds: ['ikea-klippan', 'pin-sheer-curtain'],
    goodLine: '안 예쁜 풀옵션 가구·침대에 툭 걸쳐 5분 만에 색감 맞추는 데코 천',
    checkLine: '소파 전체 덮으려면 150×200cm 이상 넉넉한 사이즈 선택하기',
    altName: '워싱 코튼 와플 소파 커버 멀티 블랭킷 대형',
    altSearchKeyword: '와플 코튼 소파 멀티커버 대형'
  },
  {
    id: 'underbed-sealed-box',
    brand: 'LIVING',
    name: '실리콘 밀폐 바퀴형 침대 밑 수납박스',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '2~5만 원대',
    chips: ['침대 아래 데드스페이스', '먼지 차단 밀폐 뚜껑', '높이 16~20cm 확인'],
    oneLiner: '옷장 부족한 원룸에서 계절 옷·여분 이불을 침대 아래 숨기되, 뚜껑 밀폐가 안 되면 먼지 구덩이가 되므로 패킹 필수.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '침대 바닥 틈새 높이(보통 18~24cm)에 맞춰 계절 옷 2박스 분량을 시야 밖으로 깔끔히 정리',
      '바퀴가 달려 한 번씩 밀어 내고 바닥 물걸레질하기 편함'
    ],
    pairTips: [
      '박스를 전부 꺼내지 않고 앞쪽 절반만 열 수 있는 양개형(반접힘) 뚜껑 모델을 고르면 침대 옆 좁은 통로에서도 물건 꺼내기 쉬움'
    ],
    checks: [
      '필수 측정: 내 침대 프레임 하단~바닥 실제 높이(cm) 재고 최소 2cm 여유 두기',
      '위생: 부직포 오픈 지퍼 백 말고 먼지 안 들어가는 단단한 PP 밀폐 뚜껑형 권장'
    ],
    tones: ['white-minimal', 'oak-natural'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['hanssem-imbig', 'vacuum-storage-bags'],
    goodLine: '옷장 없는 원룸에서 침대 아래 공간을 먼지 없이 100% 활용',
    checkLine: '침대 밑 실제 높이(cm) 실측 후 양쪽 반열림 PP 밀폐형 고르기',
    altName: '반접힘 뚜껑 바퀴형 침대밑 밀폐 수납함',
    altSearchKeyword: '침대밑 수납박스 바퀴 밀폐'
  },
  {
    id: 'slim-15cm-gap-drawer',
    brand: 'LIVING',
    name: '15~20cm 초슬림 틈새 플라스틱 서랍장 4단',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '2~5만 원대',
    chips: ['세탁기·냉장고 옆 틈새', '무게중심 앞으로 쏠림 주의', '바퀴 방향 확인'],
    oneLiner: '냉장고·세탁기 옆 18cm 자투리 틈에 생필품을 엄청 채울 수 있지만 위 칸에 무거운 걸 넣으면 앞으로 쏠려 쓰러짐.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '다른 가구가 절대 못 들어가는 14~20cm 폭 공간에 화장지·세제·라면·스킨케어를 수직 적재 가능',
      '불투명 화이트 바디는 옆면이 뚫려있지 않아 먼지와 시각적 지저분함을 가려줌'
    ],
    cautions: [
      '폭이 극도로 좁은 4~5단 구조라 맨 위 칸에 무거운 세제·음료를 넣고 서랍을 당기면 가구 자체가 앞으로 넘어질 수 있음'
    ],
    checks: [
      '수납 법칙: 무거운 액체 세제·생수는 반드시 맨 아래 1단에, 가벼운 롤휴지·수건은 위 칸에 적재',
      '실측: 폭 15/18/22cm 중 문턱·배관 걸리지 않는 실제 너비 재기'
    ],
    tones: ['white-minimal'],
    styles: ['깔끔 미니멀'],
    pairIds: ['foldable-laundry-basket', 'opaque-living-box-set'],
    goodLine: '세탁기·냉장고 옆 18cm 죽은 틈새를 알차게 쓰는 4단 수직 서랍장',
    checkLine: '앞으로 넘어짐 막기 위해 무거운 세제는 꼭 맨 아래 칸에 넣기',
    altName: '불투명 화이트 폭 18cm 슬림 틈새 4단 서랍장',
    altSearchKeyword: '불투명 18cm 슬림 틈새 서랍장 4단'
  },
  {
    id: 'tower-drying-rack-sts',
    brand: 'LIVING',
    name: '접이식 3단 타워형 빨래건조대 (스텐 파이프)',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '3~6만 원대',
    chips: ['X자 대비 공간 1/2', '스텐 녹 방지', '한쪽만 펴기 가능'],
    oneLiner: '일반 X자 건조대가 5평 원룸 가운데를 다 막아버리는 문제를 수직 3단+날개 반접힘 구조로 해결한 원룸 정석 건조대.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '한쪽 날개만 펴서 벽에 바짝 붙여 쓸 수 있고, 3단 수직 구조라 티셔츠·수건 20장 이상 한 번에 널 수 있음',
      '바퀴 달린 모델은 햇빛 잘 드는 창가로 통째로 밀고 이동하기 편함'
    ],
    pairTips: [
      '크롬 도금 저가 철제 파이프는 1년 만에 녹이 쓸어 흰 티셔츠에 녹물이 묻으므로 꼭 스테인리스(STS) 파이프 모델을 사세요'
    ],
    checks: [
      '소재 체크: 파이프 녹 방지용 스테인리스(STS201/304) 및 두꺼운 플라스틱 관절 잠금',
      '균형: 한쪽 날개에만 두꺼운 청바지를 몰아 널면 기울 수 있으니 양쪽 분산'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['foldable-laundry-basket', 'laundry-drying-rack'],
    goodLine: '원룸 바닥을 절반만 쓰고 벽에 붙여서 말리는 수직 3단 건조대',
    checkLine: '녹물 방지 위해 꼭 스텐 파이프 모델 + 하단 바퀴 브레이크 확인',
    altName: '올스텐 바퀴형 접이식 3단 타워 빨래건조대',
    altSearchKeyword: '올스텐 3단 타워형 빨래건조대'
  },
  {
    id: 'velvet-nonslip-hanger',
    brand: 'LIVING',
    name: '벨벳 슬림 논슬립 옷걸이 30~50개 세트',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '1~2만 원대',
    chips: ['행거 수납량 1.5배', '실크·니트 흘러내림 방지', '첫 사용 전 털기'],
    oneLiner: '세탁소 철사·두꺼운 플라스틱 옷걸이를 두께 0.5cm 벨벳 옷걸이로 통일하는 순간 작은 행거에 옷 15벌이 더 걸림.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '옷걸이 두께가 얇고 높이가 동일해 행거가 훨씬 정돈돼 보이고 걸 수 있는 옷 수량이 확 늘어남',
      '니트·가디건·나시 원피스가 바닥으로 툭툭 떨어지지 않음'
    ],
    pairTips: [
      '저가 블랙 벨벳 옷걸이는 처음 개봉 시 검은 보풀이나 물 빠짐이 있을 수 있으므로 젖은 흰 수건으로 한 번 닦아내고 밝은 아이보리/베이지 컬러 추천'
    ],
    checks: [
      '색상 추천: 밝은 흰 셔츠·니트 물듦 막으려면 블랙보다 아이보리/베이지/그레이 벨벳 선택',
      '용도: 젖은 빨래 바로 거는 용도론 비추 (마른 옷 보관 전용)'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['curtain-dress-hanger', 'ikea-mulig'],
    goodLine: '두꺼운 옷걸이 교체만으로 행거 수납량과 통일감을 1.5배 올림',
    checkLine: '이염 막으려면 밝은 베이지/아이보리 벨벳 고르고 마른 옷 전용으로 쓰기',
    altName: '아이보리·베이지 논슬립 슬림 벨벳 옷걸이 30P',
    altSearchKeyword: '아이보리 논슬립 벨벳 옷걸이 30'
  },
  {
    id: 'divided-underwear-box',
    brand: 'LIVING',
    name: '워셔블 칸막이 속옷 · 양말 · 티셔츠 서랍 정리함',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '1만 원대',
    chips: ['서랍 속 뒤섞임 끝', '물세탁 가능 메쉬/PP', '1초 꺼내기'],
    oneLiner: '말름·무인양품 서랍장 안에 속옷·양말·반팔티가 뒤엉켜 아침마다 찾는 스트레스를 칸막이 세트로 완전히 없앰.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '세워서 꽂는 방식이라 아래 깔린 티셔츠를 꺼낼 때 위 옷들이 무너지지 않음',
      '종이 보드가 아닌 플라스틱/나일론 메쉬 재질은 통째로 물세탁이 가능해 위생적'
    ],
    pairTips: [
      '부직포+종이판 정리함은 몇 달 지나면 흐물흐물 꺾이고 빨지 못하므로 PP 하드판이나 워셔블 메쉬 제품을 고르세요'
    ],
    checks: [
      '소재: 부직포 종이판 말고 물세탁 되는 PP 플라스틱 또는 나일론 메쉬(지지대 포함)',
      '크기: 내 서랍 내경 높이(보통 12~16cm)보다 낮은지 체크'
    ],
    tones: ['white-minimal', 'oak-natural'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['muji-pp-drawer', 'ikea-malm'],
    goodLine: '서랍 속 양말·속옷·반팔티가 절대 뒤섞이지 않게 고정하는 칸막이',
    checkLine: '종이 부직포 말고 물세탁 되는 워셔블 메쉬·PP 칸막이 + 서랍 높이 확인',
    altName: '워셔블 PP지지대 칸막이 속옷·티셔츠 정리함 세트',
    altSearchKeyword: '워셔블 메쉬 속옷 티셔츠 정리함'
  },
  {
    id: 'opaque-living-box-set',
    brand: 'LOCKNLOCK / LIVING',
    name: '불투명 아이보리 앞열림 폴딩 리빙박스 55L',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '2~4만 원대',
    chips: ['내용물 가림(미니멀)', '위로 쌓고 앞문 열림', '이사 시 그대로 운반'],
    oneLiner: '투명 박스와 달리 속의 알록달록한 짐이 안 비쳐서 쌓아두기만 해도 깔끔하고, 위 박스를 안 내리고 앞문으로 꺼냄.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '서랍장 살 돈·공간이 아까운 자취생이 모서리에 2~3단 쌓아두면 즉시 깔끔한 도어형 수납장으로 변신',
      '이사 갈 때 안 접어도 그대로 싣거나 안 쓸 땐 8cm 두께로 납작하게 접어 보관 가능'
    ],
    pairTips: [
      '뚜껑 위 홈과 바퀴가 서로 맞물리는 잠금 구조인지 확인해야 3단 적재 시 미끄러지지 않음'
    ],
    checks: [
      '색상: 투명이 아닌 완전 불투명 아이보리/크림/화이트 선택이 방 정돈감 2배',
      '하중: 상판 20kg 이상 지지하는 두꺼운 리빙박스 고르기'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['stackable-acrylic-box', 'underbed-sealed-box'],
    goodLine: '짐을 다 가려 방을 깨끗하게 만들고 이사 땐 통째로 옮기는 앞열림 박스',
    checkLine: '속이 비치는 투명 말고 불투명 크림·화이트 + 상단 바퀴 고정홈 체크',
    altName: '불투명 아이보리 5면개방 폴딩 리빙박스 55L',
    altSearchKeyword: '불투명 앞열림 폴딩 리빙박스 55L'
  },
  {
    id: 'steel-bookshelf-4tier',
    brand: 'MARKETB / ROOMNHOME',
    name: '분체도장 올스틸 4단 책장 · 멀티 선반 800',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '6~12만 원대',
    chips: ['선반 U자 처짐 0%', '매트 분체도장', '자석 소품 부착'],
    oneLiner: '파티클보드 책장처럼 무거운 전공책 올려도 가운데가 휘지 않고, 철제 옆면에 자석 고리·포스터까지 붙일 수 있는 튼튼한 선반.',
    specs: { dust: 3, deposit: 1, trouble: 2 },
    pros: [
      '단당 하중 25~40kg 이상 버티므로 전공서적·LP·전자제품·무거운 리빙박스를 마음껏 적재 가능',
      '무광 파우더코팅(분체도장)이라 습한 방에서도 곰팡이나 시트지 들뜸이 전혀 없음'
    ],
    pairTips: [
      '오픈형이므로 맨 아래 1~2칸은 같은 톤의 불투명 리빙박스 2개를 딱 맞춰 넣어야 먼지 스트레스 없이 깔끔함'
    ],
    checks: [
      '안정성: 흔들림 막는 X자 뒷면 보강대 또는 코너 브라켓 유무 확인',
      '치수: 아래 칸에 넣을 리빙박스 가로·깊이 미리 맞추기'
    ],
    tones: ['white-minimal', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '모던·스틸', '컬러 포인트'],
    pairIds: ['opaque-living-box-set', 'ikea-billy'],
    goodLine: '습기에 곰팡이 피거나 휘지 않고 무거운 책·가전 다 버티는 올스틸 선반',
    checkLine: '아래 1~2칸에 불투명 리빙박스를 넣어 오픈 선반 지저분함 보완하기',
    altName: '올스틸 분체도장 4단 선반 800 (무광 화이트/버터)',
    altSearchKeyword: '올스틸 분체도장 4단 선반 800'
  },
  {
    id: 'vacuum-storage-bags',
    brand: 'LIVING',
    name: '이중 지퍼 겨울 이불 · 패딩 진공 압축팩 + 전동펌프',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '1~2만 원대',
    chips: ['부피 1/3 압축', '곰팡이·습기 차단', '전동펌프 필수'],
    oneLiner: '5평 자취방 옷장을 꽉 막는 겨울 솜이불·패딩 3벌을 1/3 두께로 납작하게 줄여 침대 밑·장롱 꼭대기에 쏙 넣는 아이템.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '장마철 습기·옷좀·먼지를 완전히 밀봉 차단하면서 계절 옷 보관 공간을 70% 아낌',
      '미니 전동 무선 펌프 포함 세트를 쓰면 청소기 노즐 없는 자취생도 10초 만에 공기 흡입 완료'
    ],
    pairTips: [
      '천연 구스다운 이불이나 비싼 울 코트는 너무 납작하게 완전 진공하면 복원력이 떨어질 수 있으니 60~70%만 적당히 압축하세요'
    ],
    checks: [
      '구성 체크: 손펌프는 팔이 빠지므로 미니 USB/유선 전동펌프 포함 세트 선택',
      '주의: 비싼 구스패딩·오리털 이불은 완전 압착 피하기'
    ],
    tones: ['white-minimal'],
    styles: ['깔끔 미니멀'],
    pairIds: ['underbed-sealed-box', 'opaque-living-box-set'],
    goodLine: '겨울 솜이불·외투 부피를 1/3로 줄여 침대 밑에 쏙 넣는 밀봉 압축팩',
    checkLine: '무조건 전동펌프 포함 세트 고르고 구스다운은 살짝만 압축하기',
    altName: '역류방지 이중지퍼 이불 진공압축팩 + 미니 전동펌프',
    altSearchKeyword: '이불 진공압축팩 미니 전동펌프'
  },
  {
    id: 'fabric-hanging-organizer',
    brand: 'DAISO / LIVING',
    name: '행거 걸이식 4~5단 패브릭 선반 정리함',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '5천~1.5만 원대',
    chips: ['옷봉에 걸어 서랍 대용', '무거운 옷 넣으면 처짐', 'PP 보드 내장 확인'],
    oneLiner: '서랍장 살 돈·자리 없이 행거 봉에 걸어 티셔츠·모자 칸을 만들기 좋지만 저가 부직포형은 몇 주 만에 U자로 처짐.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '행거 한쪽에 걸어두면 접어 보관해야 하는 니트·수건·에코백을 세로 공간에 차곡차곡 쌓을 수 있음',
      '찍찍이 벨크로만 떼면 이사 시 납작하게 접어 가져감'
    ],
    cautions: [
      '종이 골판지 심지가 들어간 저가 부직포형은 청바지·후드티 2벌만 올려도 선반 바닥이 U자로 휘고 부직포가 찢어짐'
    ],
    checks: [
      '소재 체크: 반드시 내부 지지대가 종이가 아닌 PP 플라스틱 보드+옥스포드/린넨 캔버스 원단인지 확인',
      '하중: 니트·속옷·모자 등 가벼운 물건 전용으로 사용'
    ],
    tones: ['white-minimal', 'oak-natural'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['curtain-dress-hanger', 'ikea-mulig'],
    goodLine: '행거 봉에 걸어 좁은 원룸에 니트·모자 선반을 5초 만에 추가',
    checkLine: '종이판 부직포 말고 PP보드 내장 캔버스형 + 가벼운 니트만 넣기',
    altName: 'PP보드 내장 워셔블 5단 행거 걸이 수납함',
    altSearchKeyword: 'PP보드 행거 걸이 수납정리함'
  },
  {
    id: 'low-plastic-3tier-chest',
    brand: 'GENERIC',
    name: '초저가 얇은 투명 플라스틱 조립 서랍장 3~4단',
    category: '수납·행거',
    verdict: 'NOPE',
    priceTier: '1~3만 원대',
    chips: ['상판 처짐·서랍 탈선', '내용물 비쳐 어수선', '황변·깨짐'],
    oneLiner: '가볍고 저렴해서 샀다가 옷 몇 벌 넣으면 기둥이 휘면서 서랍이 툭 빠지고 방이 창고처럼 너저분해 보이는 제품.',
    specs: { dust: 2, deposit: 1, trouble: 5 },
    checks: [
      '구조 결함: 얇은 1mm대 플라스틱 프레임이라 위 칸에 물건 올리면 아래 서랍이 눌려 안 열림',
      '시각·내구: 투명·반투명 재질로 알록달록한 짐이 비치고 자외선에 금방 누렇게 변색·파손',
      '대안: 무인양품 PP(두꺼운 폴리프로필렌) + 불투명 앞면 또는 스틸+LPM 서랍장'
    ],
    tones: ['white-minimal'],
    styles: ['깔끔 미니멀'],
    pairIds: ['muji-pp-drawer', 'opaque-living-box-set'],
    goodLine: '1~2만 원대 임시 보관 비용',
    checkLine: '기둥 휘어 서랍 빠짐+내용물 다 비쳐 방이 지저분해 보이는 주범',
    altName: '무인양품 PP 수납케이스 화이트 또는 불투명 폴딩 리빙박스',
    altSearchKeyword: '무인양품 PP 서랍 화이트'
  },

  // ==================== 12. Batch D: 데스크테리어·소형가전·조명·소품 (21종 → 총 200종) ====================
  {
    id: 'clamp-desk-pegboard',
    brand: 'LIVING',
    name: '책상 클램프형 무타공 스틸 타공판 파티션',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '2~5만 원대',
    chips: ['벽 타공 0개', '책상 바닥 면적 절약', '자석 메모 부착'],
    oneLiner: '벽에 못 박을 수 없는 전월세 원룸에서 책상 상판에 나사로 조여 펜꽂이·헤드셋·메모를 공중 수납하는 데스크테리어 꿀템.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '스틸 소재라 후크·선반뿐 아니라 마그네틱 자석으로 엽서·고지서도 깔끔하게 붙일 수 있음',
      '책상 위 잡동사니를 공중으로 올려 작업 면적을 넓게 확보'
    ],
    pairTips: [
      '클램프 조임 부분에 실리콘/EVA 패드가 있는지 봐야 책상 상판 시트지가 눌리지 않음'
    ],
    checks: [
      '설치 두께: 내 책상 상판 두께(18~30mm) 및 뒷면 프레임 간섭 유무 체크',
      '하중: 무거운 물건 한쪽 쏠림 주의 (가벼운 소품·헤드셋·문구 위주)'
    ],
    tones: ['white-minimal', 'steel-modern', 'butter-pastel', 'oak-natural'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['ikea-skadis-pegboard', 'dodot-quattro-air'],
    goodLine: '벽 훼손 없이 책상에 끼워 펜·헤드셋·메모를 띄워 정리하는 타공판',
    checkLine: '책상 상판 두께(보통 18~25T)와 뒤쪽 철제 프레임 돌출 간섭 확인',
    altName: '무타공 클램프 스틸 책상 타공판 + 전용 후크세트',
    altSearchKeyword: '책상 클램프 무타공 스틸 타공판'
  },
  {
    id: 'cable-organizer-box',
    brand: 'LIVING',
    name: '난연 ABS 통풍 슬롯 멀티탭 · 전선 정리함',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '1~2만 원대',
    chips: ['멀티탭 먼지 화재 예방', '시각 정돈 2배 상승', '고열 가전 주의'],
    oneLiner: '바닥·책상 위에 얽힌 검은 전선과 멀티탭을 덮어 인테리어 완성도와 먼지 스파크 화재 예방을 동시에 챙기는 필수품.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '어지러운 멀티탭·어댑터를 상자 안에 숨겨 원룸 시각적 노이즈를 절반 이상 줄여줌',
      '플러그 구멍에 먼지가 쌓여 생기는 트래킹 화재 위험을 막아줌'
    ],
    pairTips: [
      '드라이기·전기포트·온풍기 등 고전력 가전은 열 방출이 중요하므로 정리함 밖 벽면 단독 콘센트에 꽂으세요'
    ],
    checks: [
      '소재·통풍: 열 방출 구멍(슬롯) + 난연 ABS 또는 나무 뚜껑(고열 방지)',
      '크기: 내 4구/6구 멀티탭 길이+전원 어댑터 높이를 재고 라지 사이즈 고르기'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'steel-modern'],
    styles: ['깔끔 미니멀', '포근 내추럴', '모던·스틸'],
    pairIds: ['desk-under-tray', 'desker-desk'],
    goodLine: '얽힌 멀티탭·전선을 가려 방이 깔끔해지고 화재 먼지까지 막아줌',
    checkLine: '내 4~6구 멀티탭 길이 실측 + 통풍 구멍 있는 난연 ABS 제품 선택',
    altName: '난연 ABS 우드뚜껑 멀티탭 전선 정리함 대형',
    altSearchKeyword: '난연 ABS 멀티탭 전선 정리함 대형'
  },
  {
    id: 'desk-under-tray',
    brand: 'LIVING',
    name: '책상 하부 무타공 클램프 전선 트레이',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '1~3만 원대',
    chips: ['발에 전선 안 걸림', '바닥 청소 초간편', '상판 나사 타공 불필요'],
    oneLiner: '멀티탭을 바닥이 아닌 책상 아랫면에 공중 거치해 로봇청소기·밀대질할 때 선을 들 필요가 없게 해주는 정리템.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '바닥에 닿는 전선이 전원선 딱 1줄만 남게 되어 방이 훨씬 넓고 깨끗해 보임',
      '클램프 조임 방식은 책상 상판에 나사 구멍을 뚫지 않고 1분 만에 장착 가능'
    ],
    pairTips: [
      '스틸 바스켓형은 통풍이 잘 되어 어댑터 발열 걱정이 적고 옆으로 선을 빼기 편함'
    ],
    checks: [
      '체크: 내 책상 뒷면 철제 프레임(에이프런) 폭 때문에 클램프가 안 들어갈 수 있으니 여백 4cm+ 확인',
      '크기: 4~6구 멀티탭 무게를 버티는 스틸 프레임 제품 권장'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['cable-organizer-box', 'desker-motion-desk'],
    goodLine: '멀티탭을 책상 아래 공중에 매달아 바닥 전선 1줄만 남기는 스틸 트레이',
    checkLine: '상판 뒤쪽 클램프 물릴 평면 여백(약 4cm) 있는지 확인하고 구매',
    altName: '무타공 클램프 책상 밑 스틸 전선 정리 트레이',
    altSearchKeyword: '무타공 클램프 책상 하부 전선트레이'
  },
  {
    id: 'ergonomic-monitor-arm',
    brand: 'NB / LUNA / LIVING',
    name: '싱글 가스스프링 모니터암 (+ 상판 보강판)',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '3~7만 원대',
    chips: ['책상 공간 +30% 확보', '거북목 교정', '얇은 상판 보강플레이트 필수'],
    oneLiner: '투박한 모니터 받침 다리를 치우고 모니터를 공중에 띄워 좁은 책상에서 공부·식사 공간을 넓히는 데스크 필수품.',
    specs: { dust: 1, deposit: 1, trouble: 2 },
    pros: [
      '모니터 아래 공간이 완전히 비어 키보드·노트·아이패드를 자유롭게 펼칠 수 있음',
      '눈높이·거리·피벗(세로 회전)을 손가락 하나로 조절해 거북목 예방'
    ],
    pairTips: [
      '이케아 린몬·라그캅텐 등 얇거나 약한 상판엔 반드시 5천 원대 스틸 모니터암 보강 플레이트를 같이 끼워야 함몰을 막음'
    ],
    checks: [
      '호환 체크: 모니터 뒷면 VESA 홀(75×75 / 100×100mm) 유무 및 내 모니터 무게(보통 2~9kg) 범위 확인',
      '상판 주의: 허니콤 종이심재 책상엔 비추 (E0 풀판+스틸 보강판 권장)'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['desker-desk', 'dodot-quattro-air'],
    goodLine: '모니터 받침을 없애 좁은 책상 사용 면적을 30% 이상 넓히는 필수 암',
    checkLine: '모니터 베사홀 유무 확인 + 약한 상판은 스틸 보강 플레이트 필수 추가',
    altName: '가스스프링 싱글 모니터암 + 상판 보호 스틸 보강판',
    altSearchKeyword: '싱글 모니터암 스틸 보강 플레이트'
  },
  {
    id: 'top-fill-humidifier',
    brand: 'LIVING',
    name: '상부 급수 통세척 가습기 4L (원룸용)',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '4~9만 원대',
    chips: ['겨울 건조·비염 필수', '물통 설거지 귀찮음', '바닥 젖음 위치 주의'],
    oneLiner: '겨울 자취방 목 마름 해결사지만 주 2~3회 통세척을 귀찮아하면 핑크 물때가 끼며 낮은 바닥에 두면 장판이 젖음.',
    specs: { dust: 1, deposit: 1, trouble: 3 },
    pros: [
      '물통을 거꾸로 들지 않고 위에서 바로 부어 보충하며 진동자 부위까지 손이 닿는 완전 분리형은 세척이 훨씬 쉬움',
      '4L 대용량이면 밤새 틀어도 물 부족 멈춤 없이 8~10시간 가동'
    ],
    cautions: [
      '초음파 가습기는 바닥에 직접 두면 주변 바닥·이불이 축축해져 곰팡이가 생길 수 있으므로 최소 허리 높이(협탁·선반 위)에 올려둬야 함'
    ],
    checks: [
      '구조: 부품 수가 적고 손이 수조 구석까지 들어가는 완전 분리 통세척형 선택',
      '위생: 매일 물 갈아주기 + 주 2회 구연산/세척 (가열식/자연기화식 대안 검토)'
    ],
    tones: ['white-minimal', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['air-purifier-compact', 'ikea-knarrevik'],
    goodLine: '위에서 물 붓고 수조 통째로 씻는 겨울철 원룸 목 건조 해결사',
    checkLine: '바닥 말고 협탁 위에 올려두고 주 2~3회 수조 설거지 필수',
    altName: '완전분리 상부급수 대용량 통세척 가습기 4L',
    altSearchKeyword: '완전분리 상부급수 통세척 가습기'
  },
  {
    id: 'dc-air-circulator',
    brand: 'SHINIL / LIVING',
    name: '저소음 BLDC 공기순환 서큘레이터',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '5~11만 원대',
    chips: ['실내 빨래 2배 빠른 건조', '에어컨·난방 효율 상승', 'BLDC 조용함'],
    oneLiner: '여름 냉방·겨울 난방 순환뿐 아니라 장마철 원룸 실내 빨래 쉰내를 없애주는 사계절 원룸 필수 가전.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '직진성 바람을 천장이나 빨래건조대 쪽으로 쏘아 주면 좁은 방 환기·냄새 제거·빨래 건조 속도가 2배 빨라짐',
      'BLDC 모터 제품은 1~2단 미풍 시 20dB대로 조용해 취침 시 틀어두기 좋음'
    ],
    pairTips: [
      '안전망(그릴)과 날개가 나사 없이 원터치 분리 물세척되는지 체크해야 먼지 청소가 편함'
    ],
    checks: [
      '스펙 체크: BLDC 모터 여부 + 앞/뒤 안전망·날개 분리 물세척 가능 여부',
      '활용: 몸에 직접 쏘이지 말고 창문·빨래·천장 방향으로 대류시키기'
    ],
    tones: ['white-minimal', 'butter-pastel', 'steel-modern'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['tower-drying-rack-sts', 'air-purifier-compact'],
    goodLine: '사계절 냉난방 순환부터 장마철 실내 빨래 쉰내 제거까지 다 하는 가전',
    checkLine: '저소음 BLDC 모터 + 안전망 날개 분리 물세척 가능한 모델 고르기',
    altName: '분리세척 저소음 BLDC 에어 서큘레이터',
    altSearchKeyword: 'BLDC 분리세척 서큘레이터'
  },
  {
    id: 'object-ceramic-diffuser',
    brand: 'DECO / LIVING',
    name: '세라믹·유리 오브제 스틱 디퓨저',
    category: '무타공·욕실',
    verdict: 'WARN',
    priceTier: '1~4만 원대',
    chips: ['원룸 첫인상 향기', '반려동물 독성 성분 확인', '리필액 유지비'],
    oneLiner: '현관·욕실 냄새를 가리고 인테리어 소품 역할까지 하지만, 고양이·강아지 키우는 집엔 에센셜 오일 독성 주의 필수.',
    specs: { dust: 1, deposit: 1, trouble: 2 },
    pros: [
      '투박한 플라스틱 병 대신 세라믹/컬러 유리병 디퓨저를 현관이나 선반에 두면 공간 무드가 확 살아남',
      '섬유 스틱 개수로 5평 원룸 발향 세기를 미세 조절 가능'
    ],
    cautions: [
      '저가 알코올 강한 제품은 좁은 원룸에서 두통을 유발하며, 일부 아로마 오일은 반려동물(특히 고양이)에게 치명적이므로 펫 프렌들리 여부 확인 필수'
    ],
    checks: [
      '주의: 고양이/강아지 반려 가정은 사용 자제 또는 수의학 검증 펫세이프 확인',
      '관리: 원룸엔 스틱 1~2개만 꽂아도 충분 (많이 꽂으면 금방 증발+머리 아픔)'
    ],
    tones: ['sage-terracotta', 'white-minimal', 'walnut-vintage', 'oak-natural'],
    styles: ['감성 빈티지', '포근 내추럴', '컬러 포인트'],
    pairIds: ['entry-magnetic-keytray', 'door-hook-foodbin'],
    goodLine: '좁은 자취방 현관·욕실 잡내를 가려주는 감성 오브제 소품',
    checkLine: '원룸엔 스틱 1~2개만 꽂기 + 반려동물 가정은 에센셜 오일 주의',
    altName: '세라믹 화병 오브제 디퓨저 (소프트 코튼·우디향)',
    altSearchKeyword: '세라믹 오브제 실내 디퓨저'
  },
  {
    id: 'dehumidifier-mini-closet',
    brand: 'LIVING',
    name: '반영구 실리카겔 · 미니 옷장 제습기',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '1~3만 원대',
    chips: ['일회용 물먹는하마 대체', '물 새는 사고 0%', '드라이/전자동 재생'],
    oneLiner: '일회용 제습제가 넘어져 옷에 염화칼슘 물이 쏟아지는 대참사를 막고 콘센트에 꽂아 말려 몇 년씩 재사용하는 제습템.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '옷장·신발장·서랍 속에 걸거나 세워둬도 액체 물통이 터져 가죽가방·옷을 버릴 위험이 없음',
      '알갱이 색이 변하면 2~3시간 전원 코드 꽂아 건조시킨 뒤 다시 넣으면 반영구 재사용 가능'
    ],
    pairTips: [
      '장마철 방 전체 습도 낮추는 용도는 10L 이상 컴프레서 제습기가 필요하며, 이 제품은 옷장·서랍·신발장 내부 곰팡이 방어용으로 최적'
    ],
    checks: [
      '용도 구분: 방 전체 제습 X, 옷장·수납함·신발장·욕실 하부장 내부 습기 제거 O',
      '안전: 재생 건조 시 주변에 타월이나 옷을 덮지 말고 열린 공간에서 말리기'
    ],
    tones: ['white-minimal'],
    styles: ['깔끔 미니멀'],
    pairIds: ['vacuum-storage-bags', 'curtain-dress-hanger'],
    goodLine: '염화칼슘 물 터질 걱정 없이 콘센트 꽂아 말려 다시 쓰는 옷장 제습기',
    checkLine: '건조 재생할 땐 옷장 밖 통풍되는 책상 위에서 말린 뒤 다시 넣기',
    altName: '반영구 실리카겔 무선 코드식 미니 옷장 제습기',
    altSearchKeyword: '반영구 실리카겔 옷장 미니 제습기'
  },
  {
    id: 'cordless-stick-vacuum',
    brand: 'XIAOMI / LIVING',
    name: '원룸용 초경량 1kg대 무선 스틱 청소기',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '5~13만 원대',
    chips: ['무게 1.2~1.6kg 초경량', '틈새 노즐 활용', '먼지통 물세척'],
    oneLiner: '3kg 넘는 무거운 프리미엄 청소기 대신 한 손으로 매일 1분씩 침대 밑·창틀 머리카락을 빨아들이기 좋은 원룸 최적 스펙.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '가볍고 C타입·벽걸이 거치 없이 자립되거나 구석에 세워둘 수 있어 보증금 타공 불필요',
      '침구 브러시·틈새 노즐 교체로 창틀 먼지와 매트리스 위 부스러기까지 1분 청소 가능'
    ],
    pairTips: [
      '헤파필터와 먼지통이 물세척 가능한 모델인지, 1만원대 여분 필터를 쉽게 구할 수 있는지 먼저 보세요'
    ],
    checks: [
      '거치 방식: 벽에 못 박는 거치대 대신 스탠드 거치대 포함 또는 자립형 확인',
      '소모품: HEPA 리필 필터 저렴하게 추가 구매 가능한 인기 모델 추천'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['washable-short-carpet', 'sisal-look-rug'],
    goodLine: '타공 거치대 없이 세워두고 1분 만에 머리카락 미는 초경량 무선청소기',
    checkLine: '못 안 박는 스탠드 거치 포함 여부 + 물세척 HEPA 필터 호환 확인',
    altName: '자립형·스탠드 거치 초경량 무선 스틱 청소기',
    altSearchKeyword: '초경량 무선 청소기 원룸 스탠드거치'
  },
  {
    id: 'air-purifier-compact',
    brand: 'WINIX / CUCKOO / XIAOMI',
    name: '10평 미만 원룸형 360° 원통 공기청정기',
    category: '식탁·주방·생활',
    verdict: 'PASS',
    priceTier: '8~16만 원대',
    chips: ['미세먼지·요리냄새 케어', 'A4 용지 1장 면적', '호환 필터 가성비'],
    oneLiner: '창문 자주 열기 힘든 도로변·반지하·요리 미분리 원룸에서 패브릭 냄새 배임과 미세먼지를 낮춰주는 콤팩트 가전.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '360° 원통형 모델은 지름 22~25cm로 바닥 면적을 거의 안 차지하고 벽 모서리에 둬도 흡입 효율이 좋음',
      '탈취(활성탄) 일체형 필터가 들어가 간단한 요리 후 공기 정화 속도를 높여줌'
    ],
    pairTips: [
      '프리필터(겉망)를 2주에 1번 물티슈·청소기로 훑어주면 원룸 머리카락·이불 먼지가 메인 필터를 막는 걸 크게 지연시킴'
    ],
    checks: [
      '유지비: 정품·호환 헤파+탈취 필터 가격(연 1~2회 교체 비용) 미리 확인',
      '소음: 10평 미만 원룸은 취침모드 25dB 이하 저소음 중요'
    ],
    tones: ['white-minimal', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['dc-air-circulator', 'top-fill-humidifier'],
    goodLine: 'A4 1장 자리만 차지하며 원룸 먼지·요리 잔여 냄새를 잡는 청정기',
    checkLine: '탈취(활성탄) 기능 포함 필터 + 호환 필터 수급 쉬운 모델 고르기',
    altName: '360도 원통형 10평형 원룸 공기청정기 (탈취필터 포함)',
    altSearchKeyword: '원룸 소형 원통형 공기청정기 10평'
  },
  {
    id: 'fabric-poster-tapestry',
    brand: 'DECO',
    name: '꼭꼬핀 설치 대형 린넨 · 면 패브릭 포스터',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '1~2만 원대',
    chips: ['두꺼비집·낡은 벽 가리기', '무게 200g 초경량', '꼭꼬핀 2개로 완료'],
    oneLiner: '원룸 벽 한가운데 튀어나온 두꺼비집(분전함)·오래된 벽지 얼룩을 못질 없이 꼭꼬핀 2개로 감성 카페처럼 가려주는 치트키.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '무거운 액자와 달리 천이라서 실크벽지 전용 꼭꼬핀 2개만으로 떨어질 위험 없이 완벽 고정',
      '방 톤에 맞는 크림·우드·보태니컬 그림을 거는 순간 인테리어 초보도 갤러리 무드 연출 가능'
    ],
    pairTips: [
      '구겨진 채 걸면 볼품없으니 걸기 전 분무기로 물 살짝 뿌려 다리미질 한 번 해두면 10만 원짜리 액자처럼 빳빳해짐'
    ],
    checks: [
      '용도: 두꺼비집·인터폰 옆 칙칙한 벽 가리기 (단, 두꺼비집 위를 아예 덮어 막진 말고 위쪽 걸이만 살짝 걸쳐 쉽게 들추게 설치)',
      '크기: 가구 폭(예: 침대 헤드/책상 가로)의 60~70% 너비가 가장 비율이 예쁨'
    ],
    tones: ['oak-natural', 'walnut-vintage', 'sage-terracotta', 'butter-pastel', 'white-minimal'],
    styles: ['감성 빈티지', '포근 내추럴', '컬러 포인트'],
    pairIds: ['daiso-kkokkopin', 'pin-sheer-curtain'],
    goodLine: '못 박기 불가 원룸에서 두꺼비집·못생긴 벽을 2만 원 이하로 가리는 1순위',
    checkLine: '걸기 전 꼭 스팀/다림질 1번 해서 주름 펴고 꼭꼬핀 2개로 고정하기',
    altName: '도톰 린넨 캔버스 대형 패브릭 포스터 + 꼭꼬핀',
    altSearchKeyword: '대형 린넨 패브릭 포스터 두꺼비집 가림'
  },
  {
    id: 'ikea-skadis-pegboard',
    brand: 'IKEA',
    name: '이케아 스코디스(SKÅDIS) 타공판 + 책상 클램프',
    category: '수납·행거',
    verdict: 'PASS',
    priceTier: '2~5만 원대',
    chips: ['클램프 무타공 거치', '후크·수납통 호환 풍부', '화이트/원목 무늬'],
    oneLiner: '전용 수납통·고무줄·선반 파츠가 가장 다양해 책상 위 소품부터 현관 열쇠·마스크까지 내 맘대로 짜 맞추는 국민 타공판.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '벽에 못을 못 박는 자취생도 이케아 전용 "책상 커넥터(클램프)"를 추가하면 무타공 파티션처럼 세워 쓸 수 있음',
      '규격화된 전용 용기·집게·후크 가격이 2~5천 원대로 저렴해 확장이 쉬움'
    ],
    pairTips: [
      '자석을 붙이고 싶다면 스틸 타공판을, 따뜻한 크림/우드 느낌과 풍부한 악세사리를 원한다면 스코디스(도장 섬유판)가 유리함'
    ],
    checks: [
      '부속 필수: 벽타공 불가 시 별매 "SKÅDIS 책상연결부속(2개입)" 함께 장바구니 담기',
      '참고: 일반 철제 타공판용 원형 자석은 안 붙음 (전용 후크 파츠 사용)'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['clamp-desk-pegboard', 'desker-desk'],
    goodLine: '별매 책상 클램프 끼우면 못질 없이 쓰는 모듈 확장성 최고 타공판',
    checkLine: '벽타공 안 되면 꼭 스코디스 책상연결부속(클램프) 옵션 추가 구매',
    altName: '이케아 스코디스 타공판 76×56 + 책상 클램프 세트',
    altSearchKeyword: '이케아 스코디스 타공판 책상연결부속'
  },
  {
    id: 'entry-magnetic-keytray',
    brand: 'LIVING',
    name: '현관문 자석 마스크 · 차키 · 택배칼 거치 정리함',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '1~2만 원대',
    chips: ['현관문 1초 자석 부착', '외출 소지품 0초 찾기', '하단 고리 우산·에코백'],
    oneLiner: '바쁜 아침 차키·무선이어폰·우산·택배 커터칼 찾느라 방을 헤매는 시간을 없애고 현관문 안쪽에 깔끔히 모으는 꿀템.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '철제 현관문에 자석으로 딱 붙어 퇴실 시 흔적 0개로 떼어 가기만 하면 됨',
      '상단 선반엔 향수/지갑, 내부엔 마스크, 아래 고리엔 에코백·장우산까지 수납'
    ],
    pairTips: [
      '긴 장우산을 현관 바닥에 세우면 자꾸 쓰러지므로 하단 마그네틱 우산꽂이 세트와 함께 두면 좁은 현관이 완전히 비워짐'
    ],
    checks: [
      '주의: 현관문이 나무·알루미늄 시트로 덮여 자석이 안 붙는 건물도 간혹 있으니 냉장고 자석으로 먼저 테스트',
      '자석 강도: 고무 통자석 판이 넓게 붙은 스틸 제품 선택'
    ],
    tones: ['white-minimal', 'steel-modern', 'walnut-vintage'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['no-drill-door-stopper', 'magnetic-fridge-rack'],
    goodLine: '현관문에 붙여 차키·향수·마스크·우산까지 외출 준비 10초 컷',
    checkLine: '우리 집 현관문 안쪽에 자석 붙는지 먼저 대보고 통자석 모델 구매',
    altName: '강력 자석 현관문 마스크·차키 선반 + 우산걸이',
    altSearchKeyword: '현관문 자석 수납 선반 우산꽂이'
  },
  {
    id: 'bathroom-squeegee',
    brand: 'LIVING',
    name: '실리콘 욕실 물기제거 스퀴지 + 후크',
    category: '무타공·욕실',
    verdict: 'PASS',
    priceTier: '5천~1.5만 원대',
    chips: ['욕실 물곰팡이 80% 감소', '샤워 후 30초 컷', '실리콘 날 유리 기스 없음'],
    oneLiner: '샤워 직후 유리 파티션·바닥 물기만 30초 쓱 밀어내도 욕실 분홍 물때와 실리콘 검은 곰팡이 청소 주기가 3배 길어짐.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '퇴실 시 보증금 감액 단골인 욕실 줄눈·실리콘 곰팡이 예방에 락스보다 훨씬 근본적인 해결책',
      '전용 걸이 고리로 샤워기 줄이나 수건걸이에 걸어둘 수 있음'
    ],
    pairTips: [
      '날 폭 22~26cm 정도가 한 손으로 거울과 바닥을 동시에 훑기 가장 편하고 손목이 안 아픔'
    ],
    checks: [
      '소재: 전체 실리콘 몰딩 타입을 고르면 떨어뜨려도 타일·유리가 깨지지 않음',
      '거치: 타일 접착 고리 말고 샤워 호스·수건걸이에 거는 후크형 추천'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀'],
    pairIds: ['silicone-toilet-brush', 'soft-diatomite-mat'],
    goodLine: '샤워 후 30초 물기 훑기로 욕실 물때·실리콘 곰팡이 예방하는 1등템',
    checkLine: '떨어져도 타일 안 깨지는 올실리콘 일체형 + 고리 걸이식 추천',
    altName: '올실리콘 욕실 유리 물기제거 스퀴지 (걸이형)',
    altSearchKeyword: '올실리콘 욕실 물기제거 스퀴지'
  },
  {
    id: 'sunset-projection-lamp',
    brand: 'GENERIC / DECO',
    name: '선셋 · 오로라 렌즈 무드 프로젝션 램프',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '1~3만 원대',
    chips: ['사진·유튜브 감성 최고', '직사 눈부심·발열 주의', '저가 USB 단자 약함'],
    oneLiner: '흰 벽에 노을빛 원을 쏘아 사진 찍기엔 예쁘지만, 방 안을 밝히는 조명보단 장식용이며 렌즈 직시하면 눈이 꽤 부심.',
    specs: { dust: 1, deposit: 1, trouble: 2 },
    pros: [
      '밋밋한 원룸 흰 벽에 주황·붉은빛 그라데이션을 비춰 순식간에 스튜디오 포토존 연출',
      '손바닥 크기라 자리 차지 없이 선반 한쪽에 두기 편함'
    ],
    cautions: [
      '고출력 볼록 렌즈가 빛을 집중해 쏘므로 눈 높이에 두면 눈이 아프고, 장시간 켜두면 헤드 방열판이 뜨거워짐'
    ],
    checks: [
      '안전: 알루미늄 방열 바디 및 밝기 조절(디밍)·시간 제한 사용 권장',
      '용도: 장시간 독서/생활 조명이 아닌 저녁 감성 포인트·촬영 보조등'
    ],
    tones: ['sage-terracotta', 'walnut-vintage', 'butter-pastel'],
    styles: ['컬러 포인트', '감성 빈티지'],
    pairIds: ['lexon-mina-portable', 'fabric-poster-tapestry'],
    goodLine: '흰 벽을 노을빛 스튜디오로 만드는 1~2만 원대 감성 무드 포인트등',
    checkLine: '생활 주조명으론 눈부시니 낮은 높이에서 벽면 전용으로 짧게 켜두기',
    altName: '알루미늄 방열 리모컨 선셋 램프 (밝기조절)',
    altSearchKeyword: '알루미늄 선셋 램프 밝기조절'
  },
  {
    id: 'bedside-clamp-lamp',
    brand: 'IKEA / LIVING',
    name: '침대 헤드 · 선반 자바라 집게형 독서 스탠드',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '1~3만 원대',
    chips: ['협탁 없어도 설치 가능', '각도 360도 조절', '집게 4cm 폭 확인'],
    oneLiner: '침대 옆 협탁 놓을 30cm 공간조차 없는 4~5평 원룸에서 침대 프레임·책장 끝에 집게로 딱 물려 쓰는 초슬림 조명.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '바닥이나 테이블 공간을 전혀 쓰지 않으면서 침대 위에서 책 보거나 잠들기 전 은은한 불빛 확보',
      '집게 내부에 고무/스펀지 패드가 있어 가구에 흠집 없이 고정'
    ],
    pairTips: [
      '전구색(2700~3000K) 3단계 밝기 조절 스위치 있는 유선 USB/어댑터형을 고르면 밤에 눈 안 부시고 고장도 적음'
    ],
    checks: [
      '치수 체크: 집게 최대 벌림 폭(보통 3.5~5cm)이 내 침대 헤드/선반 두께를 무는지 확인',
      '보호: 집게 무는 힘 강할 땐 얇은 펠트/천 덧대 시트지 자국 예방'
    ],
    tones: ['white-minimal', 'steel-modern', 'oak-natural', 'butter-pastel'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['mattress-side-pocket', 'ikea-forsa-clamp'],
    goodLine: '협탁 놓을 자리 없는 좁은 침대 옆 프레임에 바로 집어 쓰는 독서 무드등',
    checkLine: '집게 최대 벌림 두께(4~5cm) 확인 + 시트지 보호용 패드 유무 체크',
    altName: 'USB 어댑터 3색 10단 밝기 집게형 LED 독서등',
    altSearchKeyword: '집게형 침대 독서등 스탠드 3색'
  },
  {
    id: 'arch-table-mirror',
    brand: 'DECO',
    name: '원목 받침 무프레임 탁상 아치 거울 30cm',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '1~3만 원대',
    chips: ['책상 위 작은 화장대 완성', '유리 왜곡 없음', '비산방지 확인'],
    oneLiner: '화장대를 따로 둘 수 없는 원룸에서 책상·협탁 한쪽에 꽂아두면 화장 거울이자 감성 오브제가 되는 아치 유리 거울.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '거추장스러운 플라스틱 뒷판 없이 원목 베이스 홈에 3~5mm 두꺼운 유리 거울만 꽂는 깔끔한 디자인',
      '아치 곡선이 각진 책상 위 모니터·노트북의 차가운 인상을 부드럽게 중화시켜 줌'
    ],
    pairTips: [
      '유리가 얇으면 깨질 위험이 있으니 모서리 라운드 연마 처리 + 뒷면 비산방지 필름이 붙어있는지 확인하세요'
    ],
    checks: [
      '규격 체크: 높이 28~35cm 정도면 상반신·얼굴 전체 보기 적당',
      '안전: 원목 홈이 깊고 거울이 흔들리지 않게 실리콘 고정패드 동봉된 제품 선택'
    ],
    tones: ['oak-natural', 'walnut-vintage', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['포근 내추럴', '감성 빈티지', '깔끔 미니멀'],
    pairIds: ['led-touch-vanity-mirror', 'ikea-micke-desk'],
    goodLine: '책상 한쪽을 화장대 겸 감성 포토존으로 만드는 원목 받침 아치 거울',
    checkLine: '유리 두께 3~5mm 이상 + 모서리 연마·비산방지 필름 부착 확인',
    altName: '원목 받침 비산방지 탁상 아치 거울 30cm',
    altSearchKeyword: '원목 받침 탁상 아치 거울'
  },
  {
    id: 'battery-motion-sensor-light',
    brand: 'LIVING',
    name: '현관 · 옷장 자석 USB 충전 모션센서 LED 등',
    category: '조명·거울',
    verdict: 'PASS',
    priceTier: '5천~1.5만 원대',
    chips: ['어두운 현관·옷장 자동점등', '자석 1초 탈부착 충전', '전구색 추천'],
    oneLiner: '밤에 귀가해 어두운 현관에서 스위치 더듬을 필요 없이 문 열자마자 부드러운 불이 켜지는 자취 생활 질 상승 아이템.',
    specs: { dust: 1, deposit: 1, trouble: 1 },
    pros: [
      '철제 현관문·철제 행거 선반에 자석으로 바로 붙거나 얇은 철판 스티커로 옷장 천장에 무타공 부착',
      '자석으로 톡 떼어 USB-C 충전만 하면 되므로 건전지 교체 비용 없음'
    ],
    pairTips: [
      '현관이나 침대 발치(야간 화장실 동선)에 둘 때는 눈 안 부신 3000K 전구색이 백색(6000K)보다 훨씬 고급스럽고 눈이 편함'
    ],
    checks: [
      '배터리: 1회용 건전지 말고 USB-C 충전형 + 인체감지 자동소등(20초) 센서 확인',
      '주의: 벽지 직접 부착 금지 (현관 철문·가구 안쪽 천장·침대 프레임 하단 활용)'
    ],
    tones: ['white-minimal', 'oak-natural', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['entry-magnetic-keytray', 't5-indirect-ledbar'],
    goodLine: '밤에 귀가하거나 옷장 열 때 자동 켜지는 USB 충전 자석 센서등',
    checkLine: '건전지형 말고 C타입 충전식 + 눈 안 부신 3000K 전구색 고르기',
    altName: 'USB C타입 자석 부착형 인체감지 모션센서등 3000K',
    altSearchKeyword: 'USB C타입 자석 모션센서등 3000K'
  },
  {
    id: 'linen-cushion-cover-45',
    brand: 'DECO',
    name: '워싱 코튼·린넨 체크 쿠션커버 45×45 + 방울솜',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '1~2만 원대',
    chips: ['1만 원대 무드 체인지', '지퍼 분리 물세탁', '무지 1 + 체크 1 조합'],
    oneLiner: '이불이나 가구를 새로 사지 않고도 소파·침대 위 쿠션 2개만 바꿔 계절감과 10% 포인트 컬러를 가장 쉽게 넣는 방법.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '커버만 여러 장 모아두면 여름엔 시원한 블루/그린, 가을·겨울엔 코듀로이/테라코타로 1분 만에 방 분위기 전환',
      '침대 벽면에 기대어 핸드폰 볼 때 등받이 쿠션 역할도 톡톡히 함'
    ],
    pairTips: [
      '45×45cm 커버 안에 50×50cm 빵빵한 마이크로화이버/방울솜을 넣어야 모서리가 죽지 않고 백화점 소파처럼 각이 살아남'
    ],
    checks: [
      '볼륨 팁: 커버 45cm 기준 솜은 한 치수 큰 50×50cm 빵빵솜 권장',
      '관리: 세탁기 세탁 가능한 숨김 지퍼형(콘솔 지퍼) 커버 선택'
    ],
    tones: ['butter-pastel', 'sage-terracotta', 'oak-natural', 'walnut-vintage', 'white-minimal'],
    styles: ['컬러 포인트', '포근 내추럴', '감성 빈티지'],
    pairIds: ['waffle-linen-throw', 'ikea-klippan'],
    goodLine: '1만 원대 투자로 침대·소파에 10% 포인트 컬러를 얹는 가장 쉬운 방법',
    checkLine: '45cm 커버에 50cm 솜을 넣어야 모서리 각이 예쁘게 살아남',
    altName: '워싱 면 린넨 45×45 쿠션커버 + 50×50 방울솜',
    altSearchKeyword: '워싱 코튼 체크 쿠션커버 45 45'
  },
  {
    id: 'floor-backrest-pillow',
    brand: 'DECO / LIVING',
    name: '삼각 등받이 헤드 쿠션 (침대·바닥 겸용)',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '3~6만 원대',
    chips: ['헤드 없는 침대 등받이', '커버 분리 세탁 필수', '저가 솜 쏠림 주의'],
    oneLiner: '침대 헤드나 소파 없이 벽에 기대 쉴 때 허리·목을 받쳐주지만 커버 분리가 안 되거나 솜 밀도가 낮으면 금방 찌그러짐.',
    specs: { dust: 3, deposit: 1, trouble: 2 },
    pros: [
      '헤드리스 침대 프레임이나 바닥 토퍼 위에서 벽 찬기 막아주고 소파처럼 편하게 기대어 영상 시청 가능',
      '사이드 포켓이 있는 제품은 리모컨·안경 넣기 편함'
    ],
    cautions: [
      '지퍼가 없어 겉커버만 빨 수 없는 통봉제 제품은 땀·머리 기름으로 누렇게 변해도 세탁이 어려움'
    ],
    checks: [
      '필수 조건: 겉커버 지퍼 분리 물세탁 가능 + 내부 고탄력 솜(또는 메모리폼 혼합)',
      '크기: 1인 침대(슈퍼싱글 110cm)엔 가로 80~100cm, 보조등받이용은 60cm 추천'
    ],
    tones: ['butter-pastel', 'oak-natural', 'sage-terracotta', 'white-minimal'],
    styles: ['포근 내추럴', '컬러 포인트'],
    pairIds: ['low-slatted-pallet', 'high-density-topper'],
    goodLine: '침대 헤드 없는 매트리스·바닥에서 소파처럼 기대어 쉬는 삼각 쿠션',
    checkLine: '반드시 겉커버 분리 물세탁 가능 + 솜 눌림 덜한 고밀도 제품 고르기',
    altName: '겉커버 분리형 코듀로이·면 삼각 등받이 쿠션',
    altSearchKeyword: '커버분리 삼각 등받이 쿠션'
  },
  {
    id: 'mattress-side-pocket',
    brand: 'LIVING',
    name: '매트리스 끼움형 펠트 베드사이드 수납 포켓',
    category: '소파·침대·매트',
    verdict: 'PASS',
    priceTier: '5천~1.5만 원대',
    chips: ['협탁 놓을 틈 0cm 해결', '매트리스 밑 쏙 끼움', '리모컨·폰·책 수납'],
    oneLiner: '침대 옆이 벽이나 옷장으로 꽉 막혀 미니 협탁조차 둘 수 없는 좁은 방에서 매트리스 아래 끼워 쓰는 천재 수납 포켓.',
    specs: { dust: 2, deposit: 1, trouble: 1 },
    pros: [
      '두꺼운 펠트·캔버스 날개를 매트리스와 프레임 사이에 끼우기만 하면 침대 옆에 4~5칸 주머니가 생김',
      '스마트폰·충전선·리모컨·안경·태블릿을 침대 밖으로 떨어뜨리지 않고 정리 가능'
    ],
    pairTips: [
      '얇은 부직포 말고 5mm 이상 두꺼운 하드 펠트 + 미끄럼 방지 고무패드가 날개에 붙은 모델을 골라야 아이패드 넣어도 안 빠짐'
    ],
    checks: [
      '호환: 20cm 이상 매트리스 아래 끼울 때 가장 단단히 고정 (얇은 요 위엔 비추)',
      '포켓 구성: 충전 케이블 통과 홀이 있는 모델이 침대 옆 충전할 때 편함'
    ],
    tones: ['white-minimal', 'oak-natural', 'steel-modern'],
    styles: ['깔끔 미니멀', '포근 내추럴', '모던·스틸'],
    pairIds: ['bedside-clamp-lamp', 'high-density-topper'],
    goodLine: '협탁 둘 틈조차 없는 원룸 침대 옆에 폰·태블릿·책을 꽂아두는 포켓',
    checkLine: '아이패드 무게에도 안 빠지게 두꺼운 펠트+미끄럼방지 날개 확인',
    altName: '두꺼운 하드 펠트 침대 매트리스 사이드 수납포켓',
    altSearchKeyword: '침대 매트리스 사이드 포켓 펠트'
  },
  {
    id: 'speedrack-steel-shelf',
    brand: 'SPEEDRACK',
    name: '스피드랙 무볼트 철제 앵글 선반 (3~5단)',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '3~7만 원대',
    chips: ['고무망치 타격 소음', '기본 합판 습기 취약', '단당 80kg 고하중'],
    oneLiner: '나사 없이 단당 80kg을 버티는 수납 최강자지만 기본 무코팅·일반 합판은 습기·냄새에 약하고 망치 조립 소음이 큼.',
    specs: { dust: 3, deposit: 2, trouble: 3 },
    pros: [
      '볼트·너트 없이 기둥 홈에 가로대를 끼우는 방식이라 5cm 단위로 선반 높낮이를 자유롭게 조절 가능',
      '포스코 스틸 프레임 기준 단당 약 80kg 이상의 고하중을 견뎌 생수통·소형가전·이불 수납에 탁월'
    ],
    cautions: [
      '무코팅·일반 합판은 다용도실 습기에 부풀거나 곰팡이가 필 수 있고 초기 자재 냄새 환기가 필요하며, 고무망치 타격 시 층간소음 및 손베임 주의'
    ],
    checks: [
      '리뷰 검증: 베란다·세탁실 등 습한 공간이라면 일반 합판 대신 방수 PET 마감 선반 또는 올스틸 선반 선택 필수',
      '조립 공구: 1인 조립 시 프레임 흔들려 수평 잡기 번거로우며 고무망치·목장갑 준비 후 낮 시간대 조립 권장',
      '전도 주의: 180cm 이상 높은 슬림형은 하단에 무거운 짐을 두고 벽 밀착 또는 전도방지 브래킷 사용 권장'
    ],
    tones: ['white-minimal', 'steel-modern', 'oak-natural'],
    styles: ['깔끔 미니멀', '모던·스틸', '포근 내추럴'],
    pairIds: ['opaque-living-box-set', 'dehumidifier-mini-closet'],
    goodLine: '볼트 없이 높이 자유 조절과 단당 80kg 고하중 수납',
    checkLine: '습한 곳엔 일반 합판 대신 PET 코팅 선택 및 망치 조립 소음 주의',
    altName: '스피드랙 PET 코팅 선반 화이트 + 하부 55L 리빙박스',
    altSearchKeyword: '스피드랙 PET 코팅 철제선반 화이트'
  },
  {
    id: 'ikea-markus-chair',
    brand: 'IKEA',
    name: '이케아 마르쿠스(MARKUS) 하이백 메쉬 의자',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '19~23만 원대',
    chips: ['고정 팔걸이 책상 간섭', '175cm+ 장신 추천', '10년 보증·메쉬 통풍'],
    oneLiner: '10년 품질보증과 탄탄한 메쉬 등판이 장점이지만, 팔걸이·목받침 높이가 완전 고정이라 책상 밑에 안 들어가거나 작은 체형엔 목이 앞으로 밀림.',
    specs: { dust: 2, deposit: 2, trouble: 3 },
    pros: [
      '19만 원대 가격에 묵직한 강철 프레임과 10년 품질 보증이 적용되어 장기간 사용 내구성이 우수함',
      '등판 전체가 통기성 좋은 메쉬 소재이고 하이백 높이가 넉넉해 키 175cm 이상 장신 사용자에게 지지가 좋음'
    ],
    cautions: [
      '팔걸이(바닥 기준 69~81cm)·목받침·좌판 깊이(약 47~49cm) 조절이 전혀 안 돼 책상 하부 간섭과 체형 호불호가 큼'
    ],
    checks: [
      '리뷰 검증: 고정형 팔걸이 높이가 높아 일반 72~74cm 책상 하단에 의자가 완전히 들어가지 않는 간섭 사례 다수',
      '체형 기준: 키 165cm 이하 또는 마른 체형은 좌판 깊이가 길고 고정 목받침이 뒷머리를 앞으로 밀어 불편할 수 있음',
      '원룸 배송비: 이케아 온라인 주문 시 대형 택배 배송비(3~6만 원대)가 추가되므로 실구매가 비교 필요'
    ],
    tones: ['steel-modern', 'white-minimal'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['desker-desk', 'dodot-quattro'],
    goodLine: '10년 보증과 시원한 메쉬 등판의 장신용 탄탄한 하이백 의자',
    checkLine: '팔걸이 높이 조절 불가로 책상 하부 여유 높이와 체형 확인 필수',
    altName: '시디즈 T20 탭플러스 (팔걸이·헤드 조절형 메쉬 의자)',
    altSearchKeyword: '시디즈 T20 탭플러스 의자'
  },
  {
    id: 'ikea-varmblixt-lamp',
    brand: 'IKEA',
    name: '이케아 바름블릭스트(VARMBLIXT) LED 도넛 조명',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '7~8만 원대',
    chips: ['무타공 벽부착 추락 위험', '내장 LED 교체 불가', '85lm 무드등 조도'],
    oneLiner: '오렌지 블로운 유리 오브제 존재감은 독보적이지만 2kg대 무게라 꼭꼬핀·접착 테이프로 벽에 걸면 추락·파손 위험이 큼.',
    specs: { dust: 2, deposit: 3, trouble: 2 },
    pros: [
      '지름 30cm·높이 11cm의 입으로 불어 만든 유리 갓과 따뜻한 오렌지빛 간접광이 꺼져 있을 때도 오브제 역할을 함',
      '탁상 스탠드와 벽등 겸용 설계로 협탁·선반 위에 세워두기만 해도 묵직해 쉽게 밀리지 않음'
    ],
    cautions: [
      '포장 포함 약 2.06kg의 두꺼운 유리 본체라 3M 코맨드·꼭꼬핀 등 무타공 부착 시 낙하 파손 사례가 잦으며, 85루멘 내장 일체형 LED라 독서용 주조명 대체나 전구 교체는 불가함'
    ],
    checks: [
      '리뷰 검증: 전월세 무타공 방이라면 벽걸이 대신 테이블·선반 위 탁상 거치를 권장하며, 벽 설치 시에는 콘크리트 앵커·나사 타공 고정 필수',
      '전원·밝기: 전원 코드 길이가 2.0m로 벽 높은 위치 설치 시 연장선이나 선 가림 정리가 필요하고 디밍·색온도 조절 없는 단순 온오프 방식(오리지널 유광 기준)',
      '유지관리: 매끈한 유광 유리 표면이라 지문·먼지가 눈에 잘 띄므로 마른 극세사 천으로 주기적 닦기 권장'
    ],
    tones: ['walnut-vintage', 'sage-terracotta', 'butter-pastel', 'oak-natural'],
    styles: ['감성 빈티지', '컬러 포인트', '포근 내추럴'],
    pairIds: ['walnut-round-cafe-table', 'midcentury-module-shelf'],
    goodLine: '탁상 거치 시 낮에는 유리 오브제, 밤에는 은은한 오렌지 무드등 완성',
    checkLine: '무거운 유리라 꼭꼬핀·테이프 벽 부착 금지 및 85lm 약한 조도 확인',
    altName: '이케아 바름블릭스트 탁상 거치 또는 일광전구 스노우맨8 포터블',
    altSearchKeyword: '이케아 바름블릭스트 LED 조명'
  },
  {
    id: 'ikea-vesken-shelf',
    brand: 'IKEA',
    name: '이케아 베스켄(VESKEN) 욕실 틈새 선반 · 카트',
    category: '무타공·욕실',
    verdict: 'WARN',
    priceTier: '1~2만 원대',
    chips: ['18~23cm 틈새 맞춤', '올플라스틱 방수·물빠짐', '단독 배치 흔들림'],
    oneLiner: '녹 안 슬고 타공 없이 세탁기·변기 옆 18~23cm 틈에 쏙 들어가지만, 가벼운 끼움식 플라스틱이라 사방이 트인 곳에 혼자 세우면 흔들림.',
    specs: { dust: 2, deposit: 1, trouble: 2 },
    pros: [
      '폴리프로필렌(PP) 100% 방수 소재와 선반 바닥 물빠짐 타공 구조로 습한 샤워실·세탁실에서도 녹·곰팡이 부담 없이 사용 가능',
      '나사·전동드릴 없이 기둥 홈에 끼워 맞추는 방식이고 카트형(폭 54×깊이 18×높이 71cm)·선반형(폭 36.7×깊이 23.3cm) 중 틈새 규격에 맞춰 선택 가능'
    ],
    cautions: [
      '선반당 최대 하중이 약 4kg(카트형 전체 6kg)으로 낮아 대용량 세제 여러 통을 올리면 판이 휘고, 한번 꽉 끼우면 이사 시 파손 없이 재분해하기가 뻑뻑함'
    ],
    checks: [
      '리뷰 검증: 단독 배치 시 유격으로 흔들리므로 세탁기·벽·세면대 사이 틈새에 끼워 쓰거나 높은 4단 선반형은 동봉 안전장치로 벽 밀착 권장',
      '조립 팁: 맨손으로 끝까지 안 들어가면 수건 대고 고무망치로 톡톡 치면 밀착되며, 조립 방향 반대로 끼우면 빼기 어려워 단수·방향 먼저 확인 필수',
      '실측 기준: 카트형(깊이 18cm) vs 3~4단 선반형(깊이 23cm) 중 변기·문 열림·배수관 걸림 없는 치수 실측 후 선택'
    ],
    tones: ['white-minimal', 'oak-natural'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['soft-diatomite-mat', 'foldable-laundry-basket'],
    goodLine: '타공·녹 걱정 없이 욕실·세탁실 18~23cm 죽은 틈새를 살리는 방수 선반',
    checkLine: '선반당 4kg 이하 가벼운 욕실용품 위주 수납 및 벽·가구 사이 틈새 고정 권장',
    altName: '이케아 베스켄 18cm 카트 또는 스테인리스 304 압축봉 선반',
    altSearchKeyword: '이케아 베스켄 틈새 선반 카트'
  },
  {
    id: 'zinus-smartbase-frame',
    brand: 'ZINUS',
    name: '지누스 스마트베이스 철제 침대 프레임 (엘리트 · 디럭스)',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '7~12만 원대',
    chips: ['공구 없는 10분 설치', '하부 33~36cm 수납', '장판 다리 찍힘 주의'],
    oneLiner: '공구 없이 펼쳐 10분 만에 설치되고 침대 밑 33~36cm 수납이 가능하지만, 좁은 철제 다리에 하중이 집중돼 장판·마루 바닥 찍힘이 잦음.',
    specs: { dust: 1, deposit: 3, trouble: 2 },
    pros: [
      '전동드릴 없이 접힌 프레임을 펼쳐 고정 장치만 잠그면 10~15분 만에 설치되며 이사 시에도 접어서 이동 가능',
      '하부 높이가 약 33~36cm로 넉넉해 리빙박스·캐리어·계절 이불 대량 수납 및 로봇청소기 청소가 수월함'
    ],
    cautions: [
      '좁은 철제 다리에 체중·매트리스 하중이 집중돼 전월세 장판·강마루 찍힘이 잘 생기며, 얇은 토퍼만 깔면 철제 격자 배김이나 볼트 풀림 소음이 생길 수 있음'
    ],
    checks: [
      '리뷰 검증: 설치 전 모든 다리 하단에 두꺼운 고무 가구 받침대나 조각 매트를 받쳐 장판 눌림·원상복구 리스크 예방 필수',
      '매트리스 호환: 스틸 와이어 격자 구조라 얇은 요·토퍼 단독 사용 시 배김이 느껴지므로 도톰한 매트리스 또는 하단 패드·논슬립 패드 병용 권장',
      '소음·높이 체크: 사용 중 접합부 볼트가 느슨해지면 삐그덕 마찰음이 나므로 정기 재조임이 필요하며, 프레임(약 35cm)+매트리스(25~30cm) 합산 높이 확인 필요'
    ],
    tones: ['steel-modern', 'white-minimal', 'oak-natural'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['underbed-sealed-box', 'zinus-mattress'],
    goodLine: '공구 없이 10분 설치 후 침대 밑 33cm를 창고처럼 쓰는 접이식 철제 프레임',
    checkLine: '장판 찍힘 막는 다리 받침 패드 필수 및 얇은 토퍼 단독 배김 주의',
    altName: '지누스 스마트베이스 + 두꺼운 실리콘 가구 발받침 패드',
    altSearchKeyword: '지누스 스마트베이스 철제 침대 프레임'
  },
  {
    id: 'clear-folding-chair',
    brand: 'OHOUSE / LIVING',
    name: '투명 폴리카보네이트 접이식 의자 (고스트 · 플리아 스타일)',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '3~6만 원대',
    chips: ['시야 안 가리는 투명감', '접이식 틈새 보관', '스크래치·삐걱거림 주의'],
    oneLiner: '투명 소재라 좁은 원룸이 넓어 보이고 접어 세워둘 수 있지만, 잔기스·정전기 먼지가 잘 보이고 2시간 이상 장시간 작업용으론 허리·엉덩이가 배김.',
    specs: { dust: 3, deposit: 2, trouble: 2 },
    pros: [
      '시선을 막지 않는 투명 좌판·등판과 4~6kg대 접이식 구조 덕분에 4~6평 원룸 식탁·화장대·손님용 서브 의자로 공간 차지 없이 활용 가능',
      '스틸 파이프 프레임과 폴리카보네이트(PC) 조합 기준 약 100~120kg 하중을 버텨 일반 아크릴 대비 충격 내구성이 우수함'
    ],
    cautions: [
      '저가 아크릴 혼용 제품은 크랙·황변에 취약하고, 투명 표면 특성상 미세 스크래치·지문이 눈에 잘 띄며 여름철 맨살 달라붙음·겨울철 냉기 체감이 큼'
    ],
    checks: [
      '소재 검증: 1~2만 원대 저가 아크릴 대신 내충격성이 높은 폴리카보네이트(PC) 소재 여부와 초기 스크래치 교환 규정 확인 필수',
      '소음·바닥 보호: 접이식 경첩 볼트가 풀리면 앉을 때 삐걱거림이 생기므로 볼트 재조임·윤활 관리와 다리 끝 실리콘·펠트 패드 부착 권장',
      '착석 한계: 쿠션과 요추 지지대가 없는 직각 등판이라 식사·화장·단기 착석용으로 적합하며 3시간 이상 재택근무용으론 방석 추가 또는 메쉬 의자 분리 권장'
    ],
    tones: ['white-minimal', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '모던·스틸', '컬러 포인트'],
    pairIds: ['ikea-docksta', 'foldable-round-dining'],
    goodLine: '좁은 방에서도 시야를 트이게 하고 접어 틈새에 숨기는 투명 폴딩 체어',
    checkLine: '저가 아크릴 아닌 폴리카보네이트(PC) 확인 및 다리 패드·방석 병용 권장',
    altName: '폴리카보네이트(PC) 스틸 프레임 투명 접이식 의자 + 원형 방석',
    altSearchKeyword: '폴리카보네이트 투명 접이식 의자'
  },
  {
    id: 'ikea-trones',
    brand: 'IKEA',
    name: '이케아 트로네스(TRONES) 벽걸이 슬림 신발장 · 수납함',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '3~4만 원대 (2개 세트)',
    chips: ['18cm 초슬림 현관', '벽 타공 고정 필수', '280mm+ 신발 제한'],
    oneLiner: '두께 18cm라 좁은 현관·복도에 딱 맞지만, 앞으로 열리는 구조라 벽 타공 없이 세워두거나 꼭꼬핀으로 걸면 추락 위험이 큼.',
    specs: { dust: 1, deposit: 4, trouble: 3 },
    pros: [
      '모듈 1개 기준 폭 52×깊이 18×높이 39cm의 얇은 두께로 좁은 원룸 현관이나 복도 통행을 가리지 않고 수납 가능',
      '폴리프로필렌(PP) 소재라 물티슈·물세척 관리가 쉽고, 도어 분리 청소 및 상단 홈에 차키·지갑 올려두기 편함'
    ],
    cautions: [
      '자립형이 아닌 벽 고정 필수 제품이라 바닥에 그냥 두거나 꼭꼬핀·양면테이프로 붙이면 문 열 때 앞으로 쏠려 추락·벽지 찢어짐 위험이 있음'
    ],
    checks: [
      '리뷰 검증: 전월세라 벽 타공이 불가하다면 벽걸이 설치 대신 현관 스탠드형 선반을 고르거나, 꼭꼬핀·테이프 편법 부착은 절대 피할 것',
      '수납 치수: 모듈당 최대 약 4켤레 들어가지만 280mm 이상 큰 운동화·발볼 넓은 신발·목 긴 부츠는 문이 안 닫혀 2켤레 이하로 줄어듦',
      '하중 한계: 가벼운 플라스틱 성형이라 무거운 공구·세제 대량 적재 시 변형이 올 수 있어 슬리퍼·단화·마스크 등 가벼운 물품 위주 권장'
    ],
    tones: ['white-minimal', 'steel-modern', 'oak-natural'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['entry-magnetic-keytray', 'no-drill-door-stopper'],
    goodLine: '깊이 18cm 초슬림 규격으로 좁은 현관·복도를 살리는 모듈형 수납함',
    checkLine: '벽 나사 고정 필수(꼭꼬핀 추락 위험) 및 280mm+ 큰 신발 수납 한계',
    altName: '무타공 자립식 슬림 스틸 신발장 또는 현관문 자석 수납함',
    altSearchKeyword: '자립식 슬림 현관 신발장 좁은'
  },
  {
    id: 'no-drill-partition',
    brand: 'OHOUSE / LIVING',
    name: '원룸 무타공 천장고정 압축 가벽 파티션 (우드 · 메쉬형)',
    category: '무타공·욕실',
    verdict: 'WARN',
    priceTier: '6~15만 원대',
    chips: ['석고보드 천장 함몰', '우물천장 설치 불가', '2인 수직 설치 권장'],
    oneLiner: '못질 없이 현관·침실 시선을 깔끔하게 가려주지만, 약한 석고보드 천장에 강하게 조이면 함몰·파손되고 우물천장 단차엔 고정이 어려움.',
    specs: { dust: 2, deposit: 3, trouble: 4 },
    pros: [
      '천장과 바닥을 스프링·나사 압착봉으로 고정해 벽지나 바닥에 못 자국 없이 원룸 침대·책상 공간을 분리 가능',
      '우드 간살·패널형은 침실 시선 차단에 좋고, 철제 메쉬형은 S자 고리·가벼운 소품 거치로 개방감 있게 활용 가능'
    ],
    cautions: [
      '합판·석고보드 천장을 무리하게 조이면 천장 마감재가 움푹 들어가거나 파손될 수 있고, 우물천장 단차 구간에는 수평 고정이 불안정함'
    ],
    checks: [
      '리뷰 검증: 설치 전 천장이 단단한 콘크리트인지 석고보드인지 두드려 확인하고, 석고보드라면 천장 뼈대(목상) 위치 파악 및 넓은 보호 패드 필수',
      '실측·설치: 바닥~천장 층고와 제품 조절 범위를 1cm 단위로 실측해야 하며, 혼자 수직 맞추기 까다로워 2인 동시 지지·조임 권장',
      '유지관리: 시간 경과·진동으로 압축력이 느슨해질 수 있어 주기적 재조임이 필요하며, 무거운 가방·선반을 매달면 앞으로 기울 수 있음'
    ],
    tones: ['oak-natural', 'white-minimal', 'walnut-vintage', 'steel-modern'],
    styles: ['포근 내추럴', '깔끔 미니멀', '감성 빈티지', '모던·스틸'],
    pairIds: ['wangja-hanger', 'pin-sheer-curtain'],
    goodLine: '못질 없이 원룸 현관·침실 공간을 시각적으로 분리하는 압축형 가벽',
    checkLine: '석고보드 천장 함몰·우물천장 단차 확인 및 2인 수직 설치 필수',
    altName: '32mm 무타공 압축 커튼봉 + 린넨 쉬폰 가림막 커튼',
    altSearchKeyword: '원룸 무타공 압축 가벽 파티션'
  },
  {
    id: 'ikea-dyvlinge-chair',
    brand: 'IKEA',
    name: '이케아 뒤블링에(DYVLINGE) 1인 회전 암체어',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '24~25만 원대',
    chips: ['커버 분리세탁 불가', '골덴 먼지·털 끼임', '목받침 없는 저상형'],
    oneLiner: '원룸 포인트로 놓기 좋은 콤팩트 1인 회전 체어지만, 골덴 결에 먼지·털이 잘 붙고 커버 분리 세탁이 불가해 오염 관리와 목받침 부재(높이 68cm)를 감안해야 함.',
    specs: { dust: 4, deposit: 2, trouble: 2 },
    pros: [
      '폭 63×깊이 75cm 콤팩트한 풋프린트와 5개 크롬 다리 회전 구조로 5~7평 원룸 구석에서도 뒤로 넘어짐 없이 안정적으로 배치 가능',
      '하부 베이스와 시트 볼트 체결 중심의 단순한 구조라 이케아 제품 중에서도 조립 난이도가 낮아 15~30분 내 혼자 완성 가능'
    ],
    cautions: [
      '셸링에 골덴 질감 패브릭이라 옷 먼지·반려동물 털이 결 사이에 잘 박히고, 커버 분리 세탁이 불가능해 음료 오염 시 부분 클리닝만 가능함'
    ],
    checks: [
      '리뷰 검증: 등받이 높이 68cm(좌석 높이 43cm) 저상형에 헤드레스트가 없어 목까지 기대며 자거나 장시간 바른 자세 노트북 작업용으론 부적합',
      '유지관리: 돌돌이·패브릭 브러시 상시 관리가 필요하며, 오염 방지를 위해 블랭킷이나 별도 커버를 덧대어 쓰는 사용자가 많음',
      '바닥 보호: 약 15kg 하중이 5개 다리 끝에 실려 회전·이동 시 마루·장판 미세 긁힘이 생기므로 다리 밑 펠트 패드나 러그 병용 권장'
    ],
    tones: ['walnut-vintage', 'sage-terracotta', 'steel-modern', 'butter-pastel'],
    styles: ['감성 빈티지', '컬러 포인트', '포근 내추럴'],
    pairIds: ['washable-short-carpet', 'ikea-gladom'],
    goodLine: '폭 63cm 콤팩트 풋프린트와 5발 회전 베이스로 좁은 방에서도 안정적인 1인 라운지 체어',
    checkLine: '커버 분리 세탁 불가·골덴 먼지 끼임·목받침 없는 68cm 저상형 등받이 확인 필요',
    altName: '이케아 쇠데르함 1인용(커버 분리 세탁 가능) 또는 뒤블링에 + 워셔블 단모 러그',
    altSearchKeyword: '이케아 뒤블링에 회전 암체어'
  },
  {
    id: 'liftup-sofa-table',
    brand: 'OHOUSE / LIVING',
    name: '원룸 수납형 리프트업 소파 테이블 (거실 좌탁 겸용)',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '7~16만 원대',
    chips: ['수납+식탁 겸용', '힌지 삐걱·수평', '내릴 때 손끼임 주의'],
    oneLiner: '상판 아래 수납과 소파 위 식사·노트북 작업을 한 번에 해결하지만, 저가 스프링 힌지는 쾅 닫히며 손끼임 위험이 있고 오래 쓰면 좌우 수평 틀어짐·삐걱거림이 생김.',
    specs: { dust: 2, deposit: 2, trouble: 4 },
    pros: [
      '상판을 몸 쪽으로 당겨 올릴 수 있어 좁은 원룸에서 별도 식탁·책상 없이도 소파나 매트리스 위에서 허리 굽힘 없이 식사·노트북 작업 가능',
      '상판 하부 통수납 공간에 멀티탭·리모컨·충전기·노트북을 가려 보관할 수 있어 거실·원룸 시야 정리에 유리'
    ],
    cautions: [
      '하부 수납함과 철제 리프트 하드웨어가 들어가 자체 무게가 무거워 바닥 청소 시 혼자 밀기 어렵고, 상판을 올린 채 끝단에 하중이 쏠리면 앞으로 기울 위험이 있음'
    ],
    checks: [
      '리뷰 검증: 7~10만 원대 저가 스프링 힌지는 닫힐 때 쾅 내려앉아 손가락 끼임 사고가 잦으므로 천천히 닫히는 유압 댐퍼 적용 여부 필수 확인',
      '유지관리: 조립 공차나 사용 중 볼트 풀림으로 상판 좌우 단차·삐걱거림이 생기기 쉬워 3~6개월마다 볼트 재조임 및 관절 부위 윤활 관리 권장',
      '치수·바닥 체크: 소파·침대 좌석 높이 대비 상판 상승 높이를 실측해야 허리·팔이 편하며, 무거운 본체 이동 시 장판·마루 긁힘 방지 펠트 패드 필수'
    ],
    tones: ['oak-natural', 'white-minimal', 'walnut-vintage', 'steel-modern'],
    styles: ['깔끔 미니멀', '포근 내추럴', '모던·스틸'],
    pairIds: ['cable-organizer-box', 'ikea-klippan'],
    goodLine: '상판 하부 숨은 수납과 소파 앞 식사·작업 높이를 동시에 채우는 원룸 다기능 테이블',
    checkLine: '유압 댐퍼(손끼임 방지)·힌지 수평 볼트 주기적 점검 및 상판 상승 높이 실측 필수',
    altName: '유압 댐퍼 탑재 리프트업 테이블 (기사 설치 옵션) 또는 접이식 원형 식탁',
    altSearchKeyword: '유압 댐퍼 리프트업 소파 테이블'
  },
  {
    id: 'ikea-bjorkasen-stand',
    brand: 'IKEA',
    name: '이케아 비에르크오센(BJÖRKÅSEN) 노트북 스탠드',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '3~4만 원대',
    chips: ['높이·각도 조절', '외발 기둥 흔들림', '상판 폭 46cm 협소'],
    oneLiner: '소파·침대 밑으로 ㄷ자 다리를 밀어 넣고 90도로 접어 보관하기 좋지만, 외발 기둥 구조라 강한 타이핑 시 흔들림이 있고 폭 46cm라 마우스 공간이 좁음.',
    specs: { dust: 1, deposit: 1, trouble: 2 },
    pros: [
      '폭 46×깊이 35cm, 높이 60~70cm 조절과 상판 최대 90도 접이식 구조 덕분에 소파·침대 옆에서 쓰고 틈새에 세워 보관하기 좋음',
      '에폭시 파우더코팅 스틸 상판(최대 하중 12kg)이라 자석 부착이 가능하고, 측면 기둥에 폴리프로필렌 컵홀더가 기본 포함됨'
    ],
    cautions: [
      '바닥에서 한쪽 기둥으로만 지지하는 외발 구조와 다단 경첩 유격 탓에 키보드를 세게 치거나 필기할 때 상판 미세 흔들림이 체감됨'
    ],
    checks: [
      '리뷰 검증: 상판 폭 46×깊이 35cm로 태블릿·소형 노트북 단독 사용엔 적당하나 15인치 이상 노트북과 마우스를 함께 두기엔 폭이 좁음',
      '치수 체크: ㄷ자 하단 프레임을 소파·침대 아래로 밀어 넣으려면 가구 하단 바닥 여유 높이를 먼저 실측해야 몸에 바짝 당겨 쓸 수 있음',
      '조작·컵홀더: 높이·각도 조절 시 양쪽 버튼을 동시에 눌러야 해 잦은 조절은 번거로우며, 기본 컵홀더는 굵은 대용량 텀블러 수납이 좁음'
    ],
    tones: ['white-minimal', 'steel-modern', 'butter-pastel', 'sage-terracotta'],
    styles: ['깔끔 미니멀', '모던·스틸', '컬러 포인트'],
    pairIds: ['ikea-klippan', 'corduroy-beanbag-1p'],
    goodLine: '높이 60~70cm 조절과 90도 접이식 틈새 보관이 가능한 3만 원대 스틸 노트북 스탠드',
    checkLine: '외발 기둥 흔들림과 46cm 좁은 상판 폭 및 소파 하단 틈 높이 확인 필수',
    altName: '이케아 글라돔(GLADOM) 또는 4발 이동식 사이드 테이블',
    altSearchKeyword: '이케아 비에르크오센 노트북 스탠드'
  },
  {
    id: 'ikea-sortera-bin',
    brand: 'IKEA',
    name: '이케아 소르테라(SORTERA) 적층 분리수거함 (37L · 60L)',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '2~3만 원대 (개당)',
    chips: ['앞접이 적층 수납', '깊이 55cm 돌출', '완전 밀폐 아님'],
    oneLiner: '앞쪽 접이식 뚜껑 덕에 2단으로 쌓은 채 버리기 편하지만, 앞뒤 깊이가 55cm로 길어 좁은 복도에선 튀어나오고 반밀폐라 세척 안 한 용기 냄새가 새어 나옴.',
    specs: { dust: 1, deposit: 1, trouble: 2 },
    pros: [
      '폴리프로필렌(PP) 소재에 앞쪽 절반이 꺾여 열리는 뚜껑 구조라 2단으로 쌓아둔 상태에서도 플라스틱·캔·종이를 간편하게 투입 가능',
      '폭 39~41×깊이 55cm 바닥 면적이 동일하고 높이만 28cm(37L)·45cm(60L)로 나뉘어 주방·다용도실 규격에 맞춰 조합하기 쉬움'
    ],
    cautions: [
      '앞뒤 깊이 55cm가 좁은 원룸 복도·싱크대 옆에선 꽤 깊게 돌출되며, 고무 패킹 없는 반밀폐 뚜껑이라 잔여 음료·음식물이 남으면 냄새가 새어 나옴'
    ],
    checks: [
      '리뷰 검증: 제조사·실사용 기준 안전 적층은 최대 2개까지이며, 아래칸에 유리병 등 무거운 품목을 과적하면 뚜껑 결합부가 뻑뻑해지거나 변형됨',
      '비닐·청소 관리: 전용 내부 비닐 고정 링이 없어 일반 봉투가 안으로 미끄러지기 쉬워 대형 키친백·고무밴드 고정과 캔·페트병 세척 후 투입 필수',
      '사용 동선: 아래칸 통을 통째로 비우거나 속비닐을 교체할 때는 위칸 통을 들어 내려야 하므로 상단 여유 공간과 55cm 깊이 실측 필요'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['door-hook-foodbin', 'pedal-stainless-bin'],
    goodLine: '쌓아둔 채 앞뚜껑만 열어 버리는 폭 39~41cm 적층형 PP 분리수거함',
    checkLine: '깊이 55cm 돌출 치수·최대 2단 적층·반밀폐 냄새 방지용 세척 투입 확인 필요',
    altName: '슬림 2단 스윙 도어형 분리수거함 (폭 28~30cm) 또는 창신리빙 프랑코',
    altSearchKeyword: '이케아 소르테라 분리수거함 37L 60L'
  },
  {
    id: 'ikea-snidad-basket',
    brand: 'IKEA',
    name: '이케아 스니다드(SNIDAD) 라탄 수납 바구니',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '4~5만 원대',
    chips: ['내추럴 포인트', '라탄 가시·부스러기', '습기 곰팡이 주의'],
    oneLiner: '바닥에 두기만 해도 따뜻한 원목·내추럴 분위기를 살려주는 넉넉한 바구니지만, 천연 등나무 특성상 잔가시·부스러기와 습기 많은 방 곰팡이에 주의해야 함.',
    specs: { dust: 4, deposit: 1, trouble: 2 },
    pros: [
      '직경 약 54×높이 39cm의 넉넉한 용량과 양쪽 손잡이 덕분에 어지러진 담요·쿠션·세탁물을 한 번에 담아 방 시야를 깔끔하게 정리 가능',
      '수작업 엮임 천연 라탄 소재라 원룸 화이트·오크 톤 인테리어에 따뜻한 소재감 포인트 소품으로 활용도가 높음'
    ],
    cautions: [
      '천연 등나무 표면에 날카로운 잔가시나 마른 줄기 부스러기가 나올 수 있어 니트·스타킹이나 얇은 패브릭 보관 시 올 뜯김 주의가 필요함'
    ],
    checks: [
      '리뷰 검증: 구입 직후 천연 라탄 특유의 훈증·풀 냄새가 수일간 남을 수 있어 1~2일 통풍 환기 후 실내 배치를 권장',
      '습기·먼지 관리: 물세탁이 불가하며 욕실 앞·결로 벽면 등 습한 바닥에 바로 두면 곰팡이가 피기 쉬우므로 마른 수건 닦기 및 건조 관리 필수',
      '사용 팁: 옷·이불 보관용으로 쓸 때는 내부에 면 파우치나 린넨 천을 한 겹 깔아야 라탄 가시에 옷감이 상하지 않음'
    ],
    tones: ['oak-natural', 'white-minimal', 'sage-terracotta', 'butter-pastel'],
    styles: ['포근 내추럴', '감성 빈티지'],
    pairIds: ['washable-short-carpet', 'foldable-laundry-basket'],
    goodLine: '담요·쿠션을 한 번에 가리고 따뜻한 질감을 더하는 대형 천연 라탄 바구니',
    checkLine: '라탄 잔가시 올 뜯김 방지용 내피 패브릭과 습기·곰팡이 통풍 관리 필수',
    altName: '면 로프 워셔블 바스켓 또는 폴딩 패브릭 빨래바구니 (올 뜯김 없음)',
    altSearchKeyword: '면 로프 대형 수납 바구니'
  },
  {
    id: 'ikea-tolkning-bench',
    brand: 'IKEA',
    name: '이케아 톨크닝(TOLKNING) 라탄 수납 벤치 / 스툴',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '7~12만 원대',
    chips: ['의자+내부 수납', '상판 들기 번거로움', '장시간 착석 비추'],
    oneLiner: '현관이나 침대 발치에서 앉는 용도와 이불·잡동사니 수납을 동시에 해결하지만, 상판 위에 소품이 올라가면 안쪽 물건 꺼내기가 번거롭고 딱딱해 오래 앉긴 불편함.',
    specs: { dust: 3, deposit: 1, trouble: 2 },
    pros: [
      '벤치·스툴 좌석과 내부 수납함을 하나로 합쳐 좁은 원룸이나 현관에서 신발 착화용 겸 계절 패브릭 보관함으로 공간 절약에 유리',
      '스틸 프레임과 천연 라탄 엮임 조합이라 좁은 방에서도 묵직하게 답답하지 않고 카페 같은 포근한 포인트를 만듦'
    ],
    cautions: [
      '등받이와 쿠션이 없는 딱딱한 상판 구조라 책상·식탁의 주 의자로 장시간 앉기엔 허리·엉덩이 피로가 큼'
    ],
    checks: [
      '리뷰 검증: 뚜껑을 위로 들어 열어 쓰는 방식이므로 상판 위에 화분·트레이·옷을 올려두면 매번 치우고 열어야 해 수납 접근성이 떨어짐',
      '소재·바닥 체크: 라탄 표면 틈새 먼지 청소 시 브러시 청소기 사용 권장 및 현관·마루 긁힘 방지를 위해 다리 밑 펠트 패드 부착 필수',
      '조립 체크: 스틸 프레임과 라탄 패널 체결 시 나사 구멍 유격을 먼저 가조립으로 맞춘 뒤 최종 조여야 흔들림이 줄어듦'
    ],
    tones: ['oak-natural', 'white-minimal', 'sage-terracotta'],
    styles: ['포근 내추럴', '감성 빈티지'],
    pairIds: ['ikea-nesna', 'walnut-bedside-nightstand'],
    goodLine: '현관·침대 발치에서 간이 의자와 숨은 수납을 한 번에 해결하는 2-in-1 벤치',
    checkLine: '상판 적재 시 내부 수납 접근성 저하 및 딱딱한 좌판 착석감 확인 필요',
    altName: '앞열림 서랍형 수납 스툴 또는 푹신한 부클레 원형 스툴',
    altSearchKeyword: '앞열림 수납 벤치 스툴'
  },
  {
    id: 'ikea-skubb-box',
    brand: 'IKEA',
    name: '이케아 스쿠브(SKUBB) 침대밑·옷장 패브릭 수납케이스',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '1~2만 원대',
    chips: ['19cm 슬림 보관', '물세탁 불가', '속 비면 각 무너짐'],
    oneLiner: '침대 밑이나 옷장 상단에 쏙 들어가는 19cm 낮은 높이와 가벼운 무게가 장점이지만, 물세탁이 안 되고 내용물이 비면 흐물거리며 장기 밀폐 방습에는 약함.',
    specs: { dust: 3, deposit: 1, trouble: 2 },
    pros: [
      '대표 대형 기준 폭 69×깊이 55×높이 19cm로 좁은 원룸 침대 밑이나 행거 상단 틈새에 계절 이불·니트를 납작하게 숨기기 좋음',
      '지퍼 3면 개방 구조와 전면 손잡이가 있어 꺼내지 않고도 내용물 확인·인출이 쉽고, 안 쓸 때는 접어 1~2cm 두께로 보관 가능'
    ],
    cautions: [
      '내부 지지판(PP)과 폴리에스테르 코팅 구조 탓에 세탁기 물세탁이 불가능하며, 젖은 걸레로 닦은 뒤 완전히 말리지 않으면 꿉꿉함이 남음'
    ],
    checks: [
      '리뷰 검증: 하드 플라스틱 리빙박스와 달리 측면 보강판 힘이 약해 내용물을 70% 이상 채우지 않으면 형태가 구겨지거나 쌓기 어려움',
      '내구성·습기 관리: 무거운 책·가전을 넣고 침대 밑에서 자주 끌어당기면 앞면 손잡이 박음질이 해어질 수 있고, 완전 밀폐가 아니므로 제습제 동봉 필수',
      '치수 체크: 내 침대 프레임 하단 지상고(예: 18cm 이하 저상형 여부)를 먼저 재고 19cm 높이가 통과하는지 확인 필요'
    ],
    tones: ['white-minimal', 'steel-modern', 'oak-natural'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['underbed-sealed-box', 'dehumidifier-mini-closet'],
    goodLine: '침대 밑·옷장 위 죽은 틈새에 계절 이불을 가볍게 숨기는 가성비 패브릭 보관함',
    checkLine: '물세탁 불가·속 비면 각 무너짐·습기 취약(밀폐형 필요 시 PP 리빙박스 권장)',
    altName: '투명/반투명 PP 바퀴형 침대밑 밀폐박스 (물세척·적층 가능)',
    altSearchKeyword: '침대밑 밀폐 바퀴 리빙박스 19cm'
  },
  {
    id: 'ikea-bekvam-stepstool',
    brand: 'IKEA',
    name: '이케아 베크벰(BEKVÄM) 너도밤나무·자작나무 스텝스툴',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '3~4만 원대',
    chips: ['최대하중 100kg', '협탁·사다리 겸용', '논슬립 패드 권장'],
    oneLiner: '상단 손잡이 구멍과 100kg 튼튼한 하중으로 높은 수납장 오르기·침대 협탁·화분 스탠드로 두루 쓰이지만, 원목이라 묵직하고 매끈한 바닥엔 미끄럼 주의가 필요.',
    specs: { dust: 1, deposit: 1, trouble: 2 },
    pros: [
      '폭 43×깊이 39×높이 50cm 규격과 최대 하중 100kg 견고한 원목 프레임 덕분에 1인 가구 높은 수납장 정리용 발판과 침대 옆 협탁을 겸함',
      '무도장 원목 마감이라 그대로 쓰면 내추럴 인테리어에 어울리고, 취향에 맞게 스테인·바니시 커스텀 도색도 가능'
    ],
    cautions: [
      '무거운 자작·너도밤나무 원목 덩어리라 가벼운 플라스틱 스툴처럼 한 손으로 휙 들고 옮기기엔 다소 묵직함'
    ],
    checks: [
      '리뷰 검증: 강마루나 장판·타일 바닥 위에서 발판으로 올라설 때 원목 다리 바닥이 미끄러질 수 있으므로 다리 밑 논슬립 실리콘 패드 부착 권장',
      '유지관리: 조립 후 수개월간 체중이 실리다 보면 목재 수축·진동으로 나사가 살짝 풀려 삐걱거릴 수 있어 주기적인 육각렌치 재조임 필요',
      '오염 관리: 무도장 원목 버전을 협탁이나 주방용으로 쓸 경우 커피·물 얼룩이 바로 스며들 수 있어 코스터 사용이나 투명 바니시 마감 추천'
    ],
    tones: ['oak-natural', 'white-minimal', 'walnut-vintage'],
    styles: ['포근 내추럴', '깔끔 미니멀'],
    pairIds: ['ikea-nesna', 'walnut-bedside-nightstand'],
    goodLine: '사다리 발판·침대 협탁·간이 스툴 1석3조로 오래 쓰는 100kg 내구성 원목 스툴',
    checkLine: '원목 자체 무게감과 매끈한 바닥 미끄럼 방지용 논슬립 패드 부착 확인 필요',
    altName: '슬림 2단 알루미늄 접이식 사다리 스툴 (초경량 보관용)',
    altSearchKeyword: '초경량 접이식 2단 스텝스툴'
  },
  {
    id: 'ikea-runnen-deck',
    brand: 'IKEA',
    name: '이케아 룬넨(RUNNEN) 베란다 조립마루 (9개입)',
    category: '무타공·욕실',
    verdict: 'WARN',
    priceTier: '3~5만 원대 (0.81㎡)',
    chips: ['무타공 베란다 변신', '하부 먼지 청소 난이도', '아카시아 오일 관리'],
    oneLiner: '접착제 없이 딸깍 끼워 칙칙한 베란다 타일을 30분 만에 카페 바닥으로 바꾸지만, 틈새 아래 쌓인 머리카락·먼지 청소 시 마루를 다 뜯어야 하고 원목은 관리 필요.',
    specs: { dust: 4, deposit: 2, trouble: 4 },
    pros: [
      '30×30×두께 2cm 모듈을 클릭식으로 연결하는 무타공 방식이라 전월세 퇴실 시 100% 원상복구 후 다음 집으로 그대로 가져갈 수 있음',
      '차가운 베란다 시멘트·타일 냉기를 차단해 맨발 출입과 세탁기·건조대 앞 보행감을 크게 높여줌'
    ],
    cautions: [
      '하단 배수용 플라스틱 격자가 바닥에서 떠 있어 머리카락·모래·벌레·습기 찌꺼기가 타일 밑에 쌓이며, 완벽 청소 시 연결을 통째로 분해해야 함'
    ],
    checks: [
      '리뷰 검증: 아카시아 원목형은 직사광선·빗물 노출 시 회색 변색과 갈라짐이 빨리 와 연 1~2회 목재 오일스테인 관리가 필요(귀찮으면 WPC/플라스틱형 권장)',
      '시공 체크: 베란다 배수구·모서리 기둥에 딱 맞추려면 끝부분 플라스틱 베이스와 나무를 톱·전지가위로 직접 재단해야 해 작업 시간·분진이 발생',
      '실측 필수: 베란다 방문·샷시 문틀 하단 개폐 간섭이 없는지 2cm 두께 여유 높이를 먼저 확인 후 면적(가로×세로÷0.81) 계산 필수'
    ],
    tones: ['oak-natural', 'walnut-vintage', 'steel-modern'],
    styles: ['포근 내추럴', '모던·스틸'],
    pairIds: ['hard-diatomite', 'drain-hair-catcher'],
    goodLine: '본드 없이 깔고 이사 갈 때 떼어가는 30×30cm 무타공 베란다 조립 데크타일',
    checkLine: '하부 이물질 대청소 시 전체 해체 번거로움 및 원목형 오일 관리·문턱 2cm 실측 필수',
    altName: '이케아 룬넨 플라스틱(WPC)형 또는 물청소 쉬운 30×30 코일 베란다 매트',
    altSearchKeyword: '물빠짐 코일 베란다 매트'
  },
  {
    id: 'desker-3tier-drawer',
    brand: 'DESKER',
    name: '데스커(DESKER) 3단 슬림 이동서랍 (잠금장치 포함)',
    category: '책상·의자',
    verdict: 'PASS',
    priceTier: '12~16만 원대',
    chips: ['폭 30cm 슬림', '완제품 배송·잠금', '대형 파일 내경 협소'],
    oneLiner: '1200폭 책상 아래에 쏙 들어가 다리 공간을 안 뺏고 완제품 배송·잠금까지 되지만, 폭 30cm 슬림 규격이라 두꺼운 노트북 파우치나 큰 서류함 수납엔 좁음.',
    specs: { dust: 1, deposit: 1, trouble: 2 },
    pros: [
      '가로 약 30cm 슬림폭으로 1200mm 원룸 책상 하부에 넣어도 의자·무릎 공간을 넉넉히 남기며, 완제품(바퀴·손잡이만 결합) 배송이라 조립 스트레스가 없음',
      '일괄 잠금장치와 하단 전도 방지용 보조 바퀴가 달려 있어 서랍을 꽉 열어 젖혀도 앞으로 쏠리거나 뒤집힐 위험이 낮음'
    ],
    cautions: [
      '슬림형 특성상 서랍 내부 실제 폭이 약 23cm대라 부피 큰 멀티탭·A4 바인더 파일·대형 노트북은 가로 방향 수납이 제한될 수 있음'
    ],
    checks: [
      '리뷰 검증: 3~4만 원대 저가 철제 서랍 대비 철판 두께와 레일 주행감이 안정적이나, 수년 사용 시 레일 윤활 점검 및 가격대 체감 고려 필요',
      '치수·책상 호환: 내 책상 하단 가로빔·프레임 안쪽 높이를 재어 이동서랍 전체 높이가 간섭 없이 들어가는지 먼저 체크',
      '바닥 보호: 무거운 내용물을 채운 상태로 바퀴 잠금을 푼 채 장판 위를 자주 굴리면 바퀴 자국이 눌릴 수 있으므로 위치 확정 후 앞바퀴 스토퍼 고정 권장'
    ],
    tones: ['white-minimal', 'oak-natural', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['desker-desk', 'cable-organizer-box'],
    goodLine: '1200 책상 다리 공간을 살려주고 전도 방지 바퀴까지 갖춘 완제품 3단 슬림 서랍',
    checkLine: '내부 유효 폭(슬림형 약 23cm) 확인 및 책상 하단 프레임 높이 간섭 실측 필요',
    altName: '이케아 헬메르 6단 철제 서랍 (저예산) 또는 폭 40cm 일반형 3단 이동서랍',
    altSearchKeyword: '데스커 3단 슬림 이동서랍'
  },
  {
    id: 'muji-soft-box',
    brand: 'MUJI',
    name: '무인양품(MUJI) 폴리에스테르 면마 혼방 소프트박스 (각·원형)',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '1~2만 원대',
    chips: ['접이식 선반 맞춤', '속 비면 흐물거림', '세탁 불가·먼지'],
    oneLiner: '무인양품 선반이나 행거 칸 규격에 딱 맞고 안 쓸 땐 납작하게 접을 수 있지만, 내부가 비면 각이 무너지고 물세탁이 안 되며 오픈형은 위쪽 먼지가 쌓임.',
    specs: { dust: 3, deposit: 1, trouble: 2 },
    pros: [
      '가벼운 폴리에스테르 면마 혼방 소재에 손잡이가 있어 옷장·선반 위에서 바스켓처럼 꺼내기 편하고, 미사용 시 납작하게 접어 보관이 쉬움',
      '차분한 베이지·아이보리 패브릭 질감 덕분에 플라스틱 박스 특유의 생활감 없이 방 톤을 부드럽게 통일해 줌'
    ],
    cautions: [
      '안쪽 코팅과 부드러운 직물 구조 때문에 통째로 물세탁·건조기 사용이 불가능하며, 겉면 직조 틈새에 잔먼지·반려동물 털이 잘 붙음'
    ],
    checks: [
      '리뷰 검증: 단단한 지지 프레임이 없는 소프트 구조이므로 내용물을 꽉 채워 넣지 않으면 옆면이 안으로 주저앉아 각이 살지 않음',
      '먼지 차단 체크: 상단 오픈형 모델은 위에 먼지가 그대로 유입되므로 장기 옷·이불 보관 시에는 뚜껑 일체형 모델 선택 또는 선반 내부 배치 권장',
      '적재 주의: 직물 박스 위에 무거운 상자를 2단 이상 직접 쌓으면 형태가 찌그러지므로 반드시 선반 칸별 단독 수납용으로만 활용 필요'
    ],
    tones: ['oak-natural', 'white-minimal', 'butter-pastel'],
    styles: ['포근 내추럴', '깔끔 미니멀'],
    pairIds: ['muji-pp-drawer', 'vacuum-storage-bags'],
    goodLine: '선반 칸에 부드럽게 맞춰 넣고 안 쓸 땐 납작하게 접는 베이지 패브릭 수납함',
    checkLine: '물세탁 불가·내용물 적으면 각 무너짐·상부 오픈형 먼지 유입 확인 필요',
    altName: '무인양품 부드러운 폴리에틸렌 케이스 (물세척 가능 · 형태 유지)',
    altSearchKeyword: '무인양품 폴리에틸렌 케이스 뚜껑'
  },
  {
    id: 'ikea-satsumas-stand',
    brand: 'IKEA',
    name: '이케아 사츠마스(SATSUMAS) 대나무·스틸 화분스탠드',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '4~6만 원대',
    chips: ['플랜테리어 포인트', '단당 5kg 하중 제한', '대나무 물기 변색'],
    oneLiner: '계단식 높낮이로 햇빛이 잘 들게 화분을 층별로 배치하기 좋지만, 선반당 5kg 하중 제한이 있어 무거운 대형 토분엔 약하고 대나무 다리는 물 튐 방치 시 변색됨.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '분체도장 스틸 화분 받침과 대나무 다리 조합으로 좁은 창가·베란다 앞에서도 수직으로 화분을 여러 개 올려 플랜테리어 포인트를 내기 좋음',
      '깊이가 깊지 않고 다리가 가늘어 4~6평 원룸 바닥 시야를 크게 가리지 않으며, 식물 외 가벼운 오브제·무드등 진열대로도 활용 가능'
    ],
    cautions: [
      '선반 1칸당 최대 하중이 약 5kg으로 제한되고 바닥 지지 폭이 좁은 편이라 무거운 흙·도자기 대형 화분을 올리거나 반려동물이 치면 전도 위험이 있음'
    ],
    checks: [
      '리뷰 검증: 물주기 후 젖은 대나무 다리 이음새를 방치하면 얼룩·곰팡이가 생기므로 반드시 방수 물받침 사용 및 물 튐 즉시 닦기 필수',
      '안전 체크: 고양이나 반려견이 있는 방에선 하단 무거운 화분을 낮게 두고, 가능한 벽면에 밀착 배치해 흔들림·넘어짐을 막아야 함',
      '치수·수량: 지름 큰 사각·대형 화분보다 직경 14~20cm 중·소형 화분 위주 배치에 적합함'
    ],
    tones: ['oak-natural', 'white-minimal', 'sage-terracotta'],
    styles: ['포근 내추럴', '깔끔 미니멀'],
    pairIds: ['terracotta-planter-set', 'plant-grow-led-stand'],
    goodLine: '좁은 창가에서도 화분을 층별로 올려 햇빛과 시야를 살리는 대나무 스탠드',
    checkLine: '선반당 5kg 하중 한계·대나무 다리 물기 변색 방지 물받침 및 전도 주의',
    altName: '올스틸 방수 3단 화분선반 (녹·변형 없음) 또는 사츠마스 + 규조토 물받침',
    altSearchKeyword: '이케아 사츠마스 화분스탠드'
  },
  {
    id: 'plant-grow-led-stand',
    brand: 'LIVING',
    name: '원룸 식물 생장등 LED 스탠드 (풀스펙트럼 · 타이머형)',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '2~6만 원대',
    chips: ['저채광 플랜테리어', '강한 눈부심·발열', '자동 타이머 필수'],
    oneLiner: '해가 덜 드는 북향·저층 원룸에서도 식물을 죽이지 않게 돕지만, 직광 수준으로 눈이 부셔 침실에선 시각적 피로가 크고 저가 헤드는 장시간 발열이 심함.',
    specs: { dust: 1, deposit: 1, trouble: 3 },
    pros: [
      '해가 짧은 원룸 북향·복도형 창가에서도 몬스테라·올리브나무·허브류 광합성을 보충해 잎 처짐·웃자람을 줄여줌',
      '보라색 핑크광 대신 자연광에 가까운 3500K~4000K 풀스펙트럼 주백색 제품을 고르면 일반 간접 스탠드처럼 방 톤을 덜 해침'
    ],
    cautions: [
      '식물 성장용 높은 광량(PPFD) 때문에 시선 높이에 노출되면 매우 눈부시고, 방 한가운데 두면 원룸 전체가 식물공장처럼 차가워 보일 수 있음'
    ],
    checks: [
      '리뷰 검증: 내장 4h/8h/12h 자동 반복 타이머가 없는 저가 모델은 출퇴근마다 켜고 끄기 번거로워 방치하기 쉬움(리모컨·타이머 탑재 여부 필수)',
      '발열·전선 체크: 1~2만 원대 얇은 클립형은 LED 헤드 발열과 집게 고정력 약화가 잦으니 알루미늄 방열판 + 바닥 삼각대보다 책상·선반 레일형 고려',
      '눈부심 방지: 갓(전등갓) 깊이감이 있어 빛이 아래 화분으로만 모이는 디자인을 골라 침대 쪽 눈부심을 막아야 함'
    ],
    tones: ['white-minimal', 'sage-terracotta', 'oak-natural'],
    styles: ['포근 내추럴', '깔끔 미니멀'],
    pairIds: ['ikea-satsumas-stand', 'terracotta-planter-set'],
    goodLine: '북향·저층 원룸의 해 부족을 보완해 실내 식물을 살려주는 타이머 생장등',
    checkLine: '보라색 광원 회피(3500~4000K 권장)·직접 눈부심 차단 갓 및 발열 체크 필수',
    altName: '4000K 갓형 스포트 식물등 (눈부심 차단) + 스마트 콘센트 타이머',
    altSearchKeyword: '갓형 식물 생장등 풀스펙트럼 4000K'
  },
  {
    id: 'terracotta-planter-set',
    brand: 'DECO',
    name: '테라코타 토분 + 방수 세라믹 물받침 세트',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '1~3만 원대',
    chips: ['과습 방지 통기성', '백화 현상(하얀 얼룩)', '물받침 없으면 장판 오염'],
    oneLiner: '흙이 숨을 쉬어 식물 뿌리 과습을 잘 막아주고 따뜻한 테라코타 색감을 더하지만, 겉면에 하얀 물때(백화)가 피고 물빠짐 구멍 아래 받침이 부실하면 장판·원목이 썩음.',
    specs: { dust: 2, deposit: 2, trouble: 2 },
    pros: [
      '토분 벽면의 미세 기공으로 수분과 공기가 순환해 실내 통풍이 부족한 원룸 초보 식집사도 뿌리 물러짐(과습) 실패를 크게 줄일 수 있음',
      '세이지·오크·화이트 방에서 흙빛 테라코타 질감 1점만 더해도 방 생기와 색 균형이 자연스럽게 살아남'
    ],
    cautions: [
      '통기성이 좋은 만큼 흙이 빨리 말라 여름철 급수 주기가 짧아지며, 충격에 약해 이동·청소 시 살짝만 부딪혀도 테두리가 깨지기 쉬움'
    ],
    checks: [
      '리뷰 검증: 물과 흙 미네랄이 벽면으로 스며 나오며 하얗게 얼룩(백화현상)이 생기는 것은 자연 현상이므로 깔끔함을 원하면 유약 도자기 커버를 겹쳐 사용(이중 화분)',
      '바닥·장판 보호: 토분 자체 밑바닥이 축축하게 젖어 PVC 장판 황변이나 원목 협탁 물얼룩을 만드므로 반드시 유약 코팅 물받침 + 규조토 코스터를 함께 까세요',
      '무게 체크: 물을 흠뻑 준 직후 토분은 체감 무게가 크게 늘어나므로 약한 유리·벽선반 위에는 소형 사이즈만 배치 권장'
    ],
    tones: ['sage-terracotta', 'oak-natural', 'white-minimal'],
    styles: ['포근 내추럴', '감성 빈티지'],
    pairIds: ['ikea-satsumas-stand', 'hard-diatomite'],
    goodLine: '초보 식집사의 과습 실패를 줄이고 따뜻한 색 포인트를 주는 통기성 토분',
    checkLine: '장판·가구 물얼룩 막는 유약 물받침 필수 및 표면 하얀 백화 얼룩 관리 확인',
    altName: '저면관수 플라스틱 내화분 + 유약 도자기/라탄 커버팟 (백화·물얼룩 없음)',
    altSearchKeyword: '유약 세라믹 화분 물받침 세트'
  },
  {
    id: 'desk-mat-felt-vs-pu',
    brand: 'DESKER / LIVING',
    name: '데스크테리어 대형 데스크매트 (울 펠트 vs PU 가죽)',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '1~4만 원대',
    chips: ['데스크테리어 핵심', '펠트 커피 얼룩·보풀', 'PU 여름 끈적임·까짐'],
    oneLiner: '책상 위 키보드·마우스 구역을 정돈해 데스크테리어 완성도를 단숨에 올리지만, 울 펠트는 커피 얼룩과 보풀에 약하고 저가 PU 가죽은 여름 팔뚝 달라붙음·가장자리 까짐이 잦음.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '폭 800~900mm 대형 매트 한 장으로 책상 시트지 까짐·손목 시림·마우스 소음을 동시에 줄이고 키보드·모니터 구역을 시각적으로 정리해 줌',
      '화이트·오크 책상 위에 차콜 펠트나 모카 브라운 매트를 얹으면 케이블·소품이 흩어져 보이지 않는 데스크셋업 효과를 줌'
    ],
    cautions: [
      '펠트형은 음료·라면 국물을 한 번 흘리면 세탁·제거가 어렵고 팔꿈치 마찰 부위 보풀이 생기며, 저가 PU형은 여름철 땀이 차 팔뚝이 달라붙고 1년 내 테두리 갈라짐이 옴'
    ],
    checks: [
      '리뷰 검증: 방에서 식사+작업을 같은 책상에서 겸한다면 펠트 단독 대신 방수 물티슈로 바로 닦이는 천연 코르크·리놀륨 또는 양면 데스크매트가 관리상 압도적으로 편함',
      '게이밍·마우스 체크: 울 펠트 위에서는 마우스 브레이킹감이 커서 FPS·빠른 작업용 마우스는 별도 소형 게이밍 패드를 겹치거나 매끈한 원단형 선택 필요',
      '치수 실측: 내 책상 깊이(600mm vs 700mm) 대비 400mm 깊이 매트가 모니터 받침대 발과 겹치지 않는지 먼저 재보세요'
    ],
    tones: ['steel-modern', 'oak-natural', 'walnut-vintage', 'white-minimal'],
    styles: ['모던·스틸', '깔끔 미니멀', '포근 내추럴'],
    pairIds: ['desker-desk', 'desk-under-tray'],
    goodLine: '키보드 타건 소음을 줄이고 책상 시트지 보호·시야 정돈을 한 번에 잡는 데스크셋업 매트',
    checkLine: '식사 겸용 시 펠트 얼룩·보풀 주의, 저가 PU 여름 끈적임(코르크/방수형 고려)',
    altName: '방수 양면 매트(식사+작업 겸용) 또는 논슬립 뒷면 모직 펠트 매트',
    altSearchKeyword: '방수 데스크매트 양면 800x400'
  },
  {
    id: 'ikea-lack-table',
    brand: 'IKEA',
    name: '이케아 라크(LACK) 보조테이블 55×55',
    category: '조명·거울',
    verdict: 'WARN',
    priceTier: '1~2만 원대',
    chips: ['1만 원대 초경량', '종이 벌집 심재(10kg 한계)', '물기 부풀음·나사 헛돔'],
    oneLiner: '1만 원대 가격과 초경량 무게로 자취방 협탁·소품대로 쓰기 좋지만, 속이 종이 벌집(허니콤) 심재라 10kg 이상 하중이나 젖은 컵 물기를 방치하면 쉽게 부풀고 꺼짐.',
    specs: { dust: 1, deposit: 1, trouble: 3 },
    pros: [
      '가로·세로 55×55cm(높이 45cm) 컴팩트 규격에 1만 원대 초가성비로 침대 옆 협탁이나 소품·조명 거치대로 부담 없이 배치할 수 있음',
      '무게가 매우 가볍고 다리 4개를 돌려서 결합하는 단순 구조라 혼자서도 10분 이내에 조립하고 방 배치를 바꾸기 쉬움'
    ],
    cautions: [
      '상판 내부가 재생 종이 벌집 구조이고 표면이 페이퍼 포일(시트지) 마감이라 최대 하중 10kg을 넘기거나 물기가 스며들면 복구 불가 수준으로 부풀어 오름'
    ],
    checks: [
      '리뷰 검증: 다리 나사를 전동드릴로 강하게 조이면 내부 종이·파티클보드 나사산이 망가져 헛돌기 쉬우므로 손드라이버로 적정 힘까지만 체결 필요',
      '유지관리: 시트지 모서리 틈으로 음료·얼음물 결로가 스며들면 상판이 들뜨므로 차가운 컵이나 화분 아래 반드시 방수 코스터·트레이 받침 사용',
      '안전·하중: 밟고 올라서거나 전자레인지·무거운 가전을 올리면 상판 함몰 위험이 크며, 사용 중 다리 풀림 시 주기적 재조임 권장'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'butter-pastel'],
    styles: ['깔끔 미니멀', '포근 내추럴', '컬러 포인트'],
    pairIds: ['ikea-fado', 'ikea-lersta'],
    goodLine: '1만 원대 초경량 55×55 협탁으로 혼자 10분 만에 조립해 가볍게 쓰는 보조테이블',
    checkLine: '속이 빈 종이 벌집 심재(10kg 한계)·전동드릴 나사 헛돔·시트지 물기 부풀음 주의',
    altName: '이케아 글라돔(GLADOM) 철제 트레이테이블 (물기 변형 없음)',
    altSearchKeyword: '이케아 글라돔 트레이테이블'
  },
  {
    id: 'ikea-neiden-bed',
    brand: 'IKEA',
    name: '이케아 네이덴(NEIDEN) 원목 침대프레임',
    category: '소파·침대·매트',
    verdict: 'WARN',
    priceTier: '7~11만 원대 (갈빗살 별매)',
    chips: ['가성비 생소나무 원목', '갈빗살 별매·규격 차이', '마찰 삐걱거림 소음'],
    oneLiner: '10만 원 안팎으로 소나무 원목 침대를 들일 수 있지만, 루뢰위 갈빗살이 별도 판매라 추가 비용이 붙고 한국 슈퍼싱글 매트리스 규격 불일치와 목재 마찰 삐걱거림이 잦음.',
    specs: { dust: 2, deposit: 1, trouble: 4 },
    pros: [
      '이케아 원목 침대 중 가장 진입 장벽이 낮은 가격대로, 낮은 헤드보드와 간결한 프레임 덕분에 좁은 자취방에서도 시야가 답답하지 않음',
      '무도장 소나무 원목 특유의 내추럴한 결을 그대로 살리거나 취향에 맞게 오일·스테인으로 셀프 마감하기 좋음'
    ],
    cautions: [
      '프레임 단품 가격에 갈빗살(LURÖY 등)과 매트리스가 포함되지 않으며, 한국 표준 슈퍼싱글(110×200cm)과 이케아 규격(90×200·140×200cm 등)이 달라 호환 실측이 필수'
    ],
    checks: [
      '리뷰 검증: 기본 루뢰위(LURÖY) 갈빗살이 프레임 지지대와 맞닿아 뒤척일 때마다 삐걱거리는 소음이 잦으므로 실리콘·부직포 테이프 보강 또는 뢴세트(LÖNSET) 권장',
      '치수·수납: 사제 매트리스 사용 시 프레임 내경과 매트리스 가로·세로 실측 비교가 필수이며, 하단 높이가 낮아 대형 수납박스 적재 공간은 좁은 편',
      '마감·안전: 무도장 생소나무라 조립 시 잔가시·손베임 주의 및 물기·음료 얼룩 스며듦 방지를 위한 표면 보호 마감 권장'
    ],
    tones: ['oak-natural', 'white-minimal', 'sage-terracotta'],
    styles: ['포근 내추럴', '깔끔 미니멀'],
    pairIds: ['zinus-mattress', 'ikea-skubb-box'],
    goodLine: '10만 원 안팎으로 소나무 원목 감성과 가벼운 저상형 구조를 맞추는 가성비 프레임',
    checkLine: '루뢰위 갈빗살 별매 비용·한국 SS 매트리스 규격 불일치·마찰 삐걱거림 소음 주의',
    altName: '지누스 스마트베이스 철제 프레임 (한국 규격 호환·무소음) 또는 이케아 뢴세트 조합',
    altSearchKeyword: '이케아 네이덴 침대프레임 뢴세트'
  },
  {
    id: 'moving-tv-stand',
    brand: 'LIVING',
    name: '이동식 TV 스탠드 · 삼탠바이미 거치대 (바퀴형)',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '5~10만 원대 (거치대 단독)',
    chips: ['벽 타공 없는 이동 시청', 'VESA·하중 규격 확인', '무거운 하판 장판 눌림'],
    oneLiner: '벽에 못을 박지 않고 43인치 이하 스마트 모니터나 TV를 침대·책상 앞으로 옮겨 보기 좋지만, 전도 방지용 무거운 철제 하판 때문에 약한 원룸 장판에 바퀴 눌림 자국이 남기 쉬움.',
    specs: { dust: 2, deposit: 2, trouble: 3 },
    pros: [
      '전세·월세 원룸에서 벽 타공 없이 침대·소파·식탁 동선에 맞춰 피벗(세로/가로)·틸트·높이 조절로 대형 화면을 유연하게 활용할 수 있음',
      'TV 장식장을 따로 두지 않아도 되어 바닥 차지 면적이 줄어들고 방이 넓어 보이는 효과가 큼'
    ],
    cautions: [
      '무선 배터리 제품이 아니므로 전원 콘센트선과 멀티탭 동선이 항상 따라다니며, 하단 무게추 베이스(8~15kg+)가 무거워 문턱 이동이 버겁고 장판 찢김 위험이 있음'
    ],
    checks: [
      '리뷰 검증: 보유 모니터·TV 뒷면 VESA 홀 규격(75×75·100×100·200×200mm)과 최대 적재 하중(12~15kg) 미달 시 추가 연장 브라켓 구매 필요',
      '바퀴·장판 보호: 저가 플라스틱 바퀴는 끌림 소음과 장판 손상을 유발하므로 우레탄 무소음 바퀴 탑재 여부 확인 및 하부 매트·러그 병행 권장',
      '흔들림·배선: 외발 기둥 구조 특성상 화면 터치나 침대 접촉 시 상단 미세 흔들림이 있으므로 기둥 볼트 체결 강화 및 기둥 내 선 정리 홀 활용 필수'
    ],
    tones: ['white-minimal', 'steel-modern', 'oak-natural'],
    styles: ['모던·스틸', '깔끔 미니멀'],
    pairIds: ['cable-organizer-box', 'washable-short-carpet'],
    goodLine: '벽 타공 없이 원룸 어디든 43인치 이하 모니터·TV를 옮겨 보는 이동식 거치대',
    checkLine: 'VESA 규격·하중(12~15kg) 확인, 우레탄 바퀴·장판 눌림 방지 매트 및 전원선 길이 체크',
    altName: '우레탄 무소음 바퀴 + 버튼식 높이조절 VESA 200×200 호환 스탠드',
    altSearchKeyword: '이동식 TV 스탠드 우레탄 바퀴 삼탠바이미'
  },
  {
    id: 'over-toilet-rack',
    brand: 'LIVING',
    name: '무타공 변기 위 · 세탁기 상단 스틸 수납선반',
    category: '무타공·욕실',
    verdict: 'WARN',
    priceTier: '1~7만 원대 (용도별 상이)',
    chips: ['죽은 공간 수직 수납', '수전·물내림 버튼 간섭', '습기 부식·탈수 흔들림'],
    oneLiner: '좁은 원룸 욕실 변기 위나 세탁기 상단을 타공 없이 수납장으로 살려주지만, 뒤쪽 급수 밸브·수전 돌출부와 프레임이 걸려 조립 불가 반품이 많고 저가 철제는 녹이 잘 씀.',
    specs: { dust: 2, deposit: 1, trouble: 4 },
    pros: [
      '욕실 수납장이 부족한 자취방에서 타일 타공 없이 변기 탱크 위나 세탁기 상단에 2~3단 선반을 세워 휴지·수건·세제 보관 공간을 확보함',
      '바닥 면적을 거의 추가로 쓰지 않고 수직 공간을 활용해 좁은 욕실·다용도실 동선을 정리해 줌'
    ],
    cautions: [
      '변기 뒤 앵글밸브·급수 호스, 비데 콘센트, 세탁기 벽면 수도꼭지(수전) 위치와 다리 프레임이 부딪혀 설치 자체를 못 하는 사례가 매우 흔함'
    ],
    checks: [
      '리뷰 검증: 설치 전 변기 탱크 뒤 벽면 여유(최소 3~5cm), 상단 물내림 버튼 높이, 벽면 수전 돌출 위치를 줄자로 실측해 도면과 대조 필수',
      '녹 방지 체크: 습기가 많은 욕실에선 저가 분체도장 철제 파이프 나사·용접부가 몇 달 내 부식되므로 STS304 스테인리스나 방수 코팅 소재 선택 권장',
      '진동·전도: 세탁기 탈수 진동이나 문 여닫힘에 선반이 흔들려 세제가 낙하할 수 있으므로 벽면 압착·흡착 고정 패드와 하단 수평 조절발 필수'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['ikea-vesken-shelf', 'foldable-laundry-basket'],
    goodLine: '벽을 뚫지 않고 변기·세탁기 위 빈 공간을 2~3단 수납공간으로 살리는 스탠드 선반',
    checkLine: '수전·급수호스·물내림 버튼 간섭 실측 필수, 습기 녹(STS304 권장) 및 탈수 진동 흔들림 주의',
    altName: '올 스테인리스(STS304) 무타공 틈새 선반 또는 세탁기 전용 보강 앵글랙',
    altSearchKeyword: '스테인리스 무타공 변기 위 선반 304'
  },
  {
    id: 'folding-floor-chair',
    brand: 'LIVING',
    name: '각도조절 1인용 접이식 좌식 등받이 의자',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '2~5만 원대',
    chips: ['다단 각도·틈새 보관', '스펀지 꺼짐 철제 배김', '통세탁 불가·기어 마모'],
    oneLiner: '좁은 좌식 원룸에서 다단 각도로 편히 기대다 접어 두기 좋지만, 몇 개월 쓰면 쿠션 숨이 죽어 내부 철제 파이프가 몸에 배기고 저가 톱니 기어는 뒤로 풀리는 고장이 잦음.',
    specs: { dust: 3, deposit: 1, trouble: 3 },
    pros: [
      '소파를 둘 여유가 없는 4~5평 좌식 원룸에서 5단~42단 등받이 각도를 조절해 독서·영상 시청·휴식 자세를 편하게 받쳐줌',
      '사용하지 않을 때는 일자로 완전히 펴서 침대 밑이나 벽 틈새에 얇게 밀어 보관하기 수월함'
    ],
    cautions: [
      '내부 철제 프레임·기어 위에 스펀지를 감싸 꿰맨 일체형 제품이 많아 통째 물세탁이 불가능하며, 엉덩이 부위 스펀지가 꺼지면 철제 배김이 심해짐'
    ],
    checks: [
      '리뷰 검증: 저가형 다단 톱니 기어는 기대어 체중을 자주 실으면 맞물림이 마모되어 뒤로 푹 꺾일 수 있으므로 내구성 검증된 기어·목재 프레임 확인',
      '세탁·위생: 오염 시 곰팡이와 냄새를 막기 위해 반드시 커버 지퍼 분리가 가능한 모델이나 물티슈 관리가 되는 방수 패브릭·코듀로이형 권장',
      '바닥·공간: 하단 지퍼·파이프가 장판을 긁거나 밀릴 수 있어 러그·방석 병행이 좋으며, 등받이를 눕힐 뒤쪽 여유 공간(40cm+) 확보 필요'
    ],
    tones: ['white-minimal', 'oak-natural', 'butter-pastel', 'sage-terracotta'],
    styles: ['포근 내추럴', '깔끔 미니멀', '컬러 포인트'],
    pairIds: ['folding-floor-desk', 'washable-short-carpet'],
    goodLine: '좌식 테이블에 맞춰 다단 각도로 편하게 기대고 좁은 공간에 접어 두는 1인 좌식의자',
    checkLine: '스펀지 꺼짐 시 내부 철제 배김·기어 마모 꺾임 주의, 분리 세탁 커버 여부 확인 필수',
    altName: '분리형 세탁 커버 고밀도 폼 좌식의자 + 별도 메모리폼 방석 조합',
    altSearchKeyword: '커버 분리 세탁 각도조절 좌식의자'
  },
  {
    id: 'ikea-jonaxel-system',
    brand: 'IKEA',
    name: '이케아 요낙셀(JONAXEL) 4단 메쉬 바구니 수납장',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '4~7만 원대',
    chips: ['습기·통풍 강한 메쉬', '망치 타격 조립 소음', '먼지 유입·철제 마찰음'],
    oneLiner: '통풍이 뛰어나 습한 드레스룸·다용도실 수납에 강하지만, 부품을 망치로 쳐서 끼우는 조립 소음이 크고 레일이 없는 철제 바구니 구조라 여닫을 때 쇳소리·먼지 유입이 생김.',
    specs: { dust: 4, deposit: 1, trouble: 4 },
    pros: [
      '스틸 철망(메쉬) 구조라 통풍이 잘되고 수납물이 한눈에 보여 다용도실·드레스룸·옷장 내부 속옷·수건·세제 정리에 효율적임',
      '폭 25cm·50cm 등 다양한 모듈과 바퀴 옵션을 조합해 좁은 틈새 공간에 딱 맞춰 넣기 좋음'
    ],
    cautions: [
      '나사 체결 대신 프레임을 강하게 두드려 끼우는 방식이라 분해·재조립이 어렵고, 슬라이딩 레일이 없어 철제 프레임끼리 긁히는 마찰음이 발생함'
    ],
    checks: [
      '리뷰 검증: 조립 시 고무망치(또는 수건 덧대기)로 강하게 타격해야 결합되므로 공동주택에선 반드시 낮 시간 조립 및 바닥 매트 깔기 필수',
      '먼지·의류 보호: 사방이 뚫린 철망 틈으로 미세먼지가 쉽게 쌓이고 거친 도장에 니트·스타킹 올이 걸릴 수 있어 속정리함·파우치 병행 권장',
      '안정성: 상단이 뚫려 있어 위에 물건을 올리려면 별도 상판을 얹어야 하며, 단독 배치 시 좌우 흔들림이 있어 3~4단 이상은 평탄한 바닥·벽 밀착 배치 권장'
    ],
    tones: ['white-minimal', 'steel-modern'],
    styles: ['깔끔 미니멀', '모던·스틸'],
    pairIds: ['divided-underwear-box', 'opaque-living-box-set'],
    goodLine: '습한 드레스룸·다용도실에서도 통풍이 잘되고 수납물이 한눈에 보이는 스틸 메쉬 서랍',
    checkLine: '망치 타격 조립 소음·레일 없는 철제 마찰음, 메쉬 먼지 유입 및 흔들림 주의',
    altName: '무인양품 PP 서랍장 (먼지 차단·무소음 조립) 또는 룸앤홈 철제 수납장',
    altSearchKeyword: '무인양품 PP 서랍장'
  },
  {
    id: 'ikea-kyrre-stool',
    brand: 'IKEA',
    name: '이케아 퀴레 · 쉬레(KYRRE) 자작나무 스툴',
    category: '책상·의자',
    verdict: 'WARN',
    priceTier: '1~2만 원대 (공식 19,900원)',
    chips: ['가성비 스태킹 스툴', '3발 수평 흔들림', '장시간 착석 비추천'],
    oneLiner: '가볍고 겹쳐 보관하기 좋은 화장대·손님용 보조 스툴이지만, 3발 구조라 장판·러그 위에서 균형이 흔들리기 쉽고 등받이 없는 딱딱한 상판이라 메인 작업 의자로 쓰기엔 불편함.',
    specs: { dust: 1, deposit: 2, trouble: 2 },
    pros: [
      '공식가 19,900원의 부담 없는 가격대로 화이트·블랙·자작·그린 등 컬러 포인트나 침대 옆 간이 협탁, 화분 받침대로 두루 쓰기 좋음',
      '최대 하중 110kg을 지지하는 자작나무 베니어 구조이며 사용하지 않을 때 위로 포개어(스태킹) 좁은 원룸 바닥 면적을 아낄 수 있음'
    ],
    cautions: [
      '상판 나사 구멍이 뻑뻑해 동봉 육각렌치만으로 손조립하면 피로하고 덜 조여질 수 있으며, 합판 체결부 특성상 사용 중 볼트 풀림과 다리 바닥 긁힘이 생기기 쉬움'
    ],
    checks: [
      '리뷰 검증: 3개의 다리를 대각선 순서로 번갈아 조여 수평을 맞추는 것이 중요하며, 푹신한 장판이나 도톰한 러그 위에선 4발 의자보다 덜컹거림이 잘 느껴짐',
      '원상복구·보호: 다리 끝단 바닥 보호 패드가 기본 부실하므로 마루·장판 긁힘과 끌림 소음을 막기 위해 실리콘 커버나 펠트 패드 별도 부착 권장',
      '표면·용도: 베니어 무늬목 표면이 물기와 찍힘에 약해 화분 받침용이면 물받침 필수이며, 쿠션 없는 딱딱한 좌판이라 식탁·책상 장시간 착석엔 부적합'
    ],
    tones: ['oak-natural', 'white-minimal', 'butter-pastel', 'sage-terracotta'],
    styles: ['포근 내추럴', '깔끔 미니멀', '컬러 포인트'],
    pairIds: ['ikea-bekvam-stepstool', 'washable-short-carpet'],
    goodLine: '1만 원대에 겹쳐 보관하며 협탁·화장대·여분 의자로 두루 쓰는 자작나무 3발 스툴',
    checkLine: '3발 구조 장판 흔들림, 볼트 주기적 재조임, 다리 바닥 패드 부착 및 장시간 착석 주의',
    altName: '이케아 베크벰 2단 스텝스툴 (안정적 4발 원목) 또는 쿠션 방석 추가 조합',
    altSearchKeyword: '이케아 쉬레 스툴 바닥 보호 패드'
  },
  {
    id: 'ikea-tarno-set',
    brand: 'IKEA',
    name: '이케아 테르뇌(TÄRNÖ) 접이식 베란다 테이블 · 의자 세트',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '6~8만 원대 (공식몰 기준)',
    chips: ['접이식 베란다 홈카페', '55cm 협소 상판', '결로 녹·원목 곰팡이'],
    oneLiner: '아카시아 원목과 스틸 프레임 조합으로 베란다 홈카페 분위기를 내기 좋지만, 상판(55×54cm)이 작고 야외용 마감이라 비·결로 습기에 방치하면 나사 녹과 원목 검은 곰팡이가 생김.',
    specs: { dust: 2, deposit: 1, trouble: 3 },
    pros: [
      '테이블과 의자 2개 모두 납작하게 접을 수 있어 좁은 아파트 베란다나 원룸 발코니에서 필요할 때만 펼쳐 커피 테이블로 활용하기 좋음',
      '공식몰 기준 6~7만 원대(오픈마켓 대행 시 배송비 포함 가격 주의)로 가성비 있게 감성 야외 카페 무드를 완성할 수 있음'
    ],
    cautions: [
      '베란다 결로·빗물 유입 환경에서 습기를 말리지 않으면 파우더 코팅 틈새·나사 구멍의 적녹(붉은 녹)과 아카시아 원목의 곰팡이·백화 변색이 빠르게 진행됨'
    ],
    checks: [
      '리뷰 검증: 55×54cm 콤팩트 상판이라 커피·브런치 2인용으로는 적당하지만 노트북 작업이나 넓은 상차림 용도로는 비좁고 가벼워 수평 편차에 흔들릴 수 있음',
      '착좌감·보강: 등받이와 좌판이 얇은 원목 판자 구조라 오래 앉으면 엉덩이와 등이 배기므로 전용 야외 방석이나 린넨 쿠션 병행 필수',
      '유지관리: 물방울이 스며들기 시작하면 연 1~2회 아크릴 목재 스테인·오일 재도장 및 장마·겨울철엔 접어서 실내 보관 또는 방수 커버 사용 권장'
    ],
    tones: ['oak-natural', 'walnut-vintage', 'sage-terracotta'],
    styles: ['포근 내추럴', '감성 빈티지'],
    pairIds: ['ikea-runnen-deck', 'linen-cushion-cover-45'],
    goodLine: '좁은 베란다에 접어 두고 필요할 때만 펼치는 아카시아 원목 홈카페 2인 세트',
    checkLine: '베란다 습기·결로로 인한 나사 녹 및 원목 곰팡이 주의, 방석·정기 스테인 관리 필요',
    altName: '이케아 룬넨 조립마루 + 테르뇌 공식몰 직구 + 방수 야외 방석 조합',
    altSearchKeyword: '이케아 테르뇌 야외 테이블 방석'
  },
  {
    id: 'ikea-mosslanda-shelf',
    brand: 'IKEA',
    name: '이케아 모스란다(MOSSLANDA) 벽선반 · 액자선반 (55·115cm)',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '8천~1만 원대 (55·115cm)',
    chips: ['1만 원대 포스터 선반', '무타공 꼭꼬핀 추락', '콘크리트 피스 필수'],
    oneLiner: '홈이 파여 있어 액자·엽서·LP판을 세우기 좋은 국민 벽선반이지만, 본체 무게와 앞쏠림 회전력 때문에 꼭꼬핀·양면테이프로 무타공 설치하면 벽지를 찢고 추락하는 사고가 잦음.',
    specs: { dust: 2, deposit: 5, trouble: 4 },
    pros: [
      '앞쪽 홈 디자인 덕분에 얇은 액자·포스터·책 표지가 미끄러지지 않고 깔끔하게 기대어 세워지는 시각적 효과가 뛰어남',
      '55cm(약 7,900원대)·115cm(약 12,900원대) 두 가지 폭으로 좁은 벽면이나 책상 위 허전한 여백을 가성비 있게 채울 수 있음'
    ],
    cautions: [
      '전월세 원상복구를 위해 꼭꼬핀이나 강력 양면테이프로 매다는 시도가 많으나, 1kg 이상 본체 무게와 앞쪽 돌출 하중 때문에 시간이 지나면 앞으로 기울어 추락하고 벽지를 크게 찢음'
    ],
    checks: [
      '리뷰 검증: 공식 매뉴얼상 벽 재질에 맞는 칼블럭·나사 타공 고정이 필수이며, 나사머리를 가리는 커버가 별매 또는 구성 확인이 필요함',
      '하중·치수: 최대 하중 5kg(55cm 기준) 내외이며 선반 안쪽 유효 깊이가 약 9.5cm 수준으로 좁아 깊은 화분·무거운 서적 진열에는 부적합',
      '무타공 대안: 벽 타공이 불가한 전월세 방이라면 억지로 꼭꼬핀에 걸지 말고 꼭꼬핀 전용 초경량 선반이나 책상 위 이젤·패브릭 포스터로 우회 권장'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage', 'steel-modern'],
    styles: ['깔끔 미니멀', '포근 내추럴', '감성 빈티지'],
    pairIds: ['daiso-kkokkopin', 'fabric-poster-tapestry'],
    goodLine: '앞쪽 홈으로 액자·엽서·LP판을 깔끔하게 세워 전시하는 1만 원대 가성비 벽선반',
    checkLine: '무타공 꼭꼬핀·테이프 부착 시 벽지 찢김 및 추락 위험, 타공 불가 원룸은 사용 자제',
    altName: '다이소 꼭꼬핀 + 패브릭 포스터 또는 책상 위 스코디스 클램프 선반',
    altSearchKeyword: '무타공 꼭꼬핀 전용 초경량 아크릴 선반'
  },
  {
    id: 'minix-mini-dryer',
    brand: 'LIVING',
    name: '미닉스(MINIX) 미니 건조기 PRO+ (3~3.5kg 원룸용)',
    category: '식탁·주방·생활',
    verdict: 'WARN',
    priceTier: '27~38만 원대',
    chips: ['배수관 없는 원룸 건조', '전면 배기 열기·습기', '필터 소모품·이불 불가'],
    oneLiner: '배수 호스 없이 전원만 꽂아 수건·속옷·데일리 옷을 뽀송하게 말리는 자취 필수 가전이지만, 온풍 배기가 방 안으로 바로 나와 창가 환기 없는 밀폐 원룸에선 덥고 습해짐.',
    specs: { dust: 1, deposit: 1, trouble: 3 },
    pros: [
      '별도 배수관·타공 시공이 필요 없고 콤팩트한 크기라 세탁기 옆, 주방 선반, 다용도실에 올려 바로 사용할 수 있어 원상복구 부담이 없음',
      '수건·반려동물 털·옷감 먼지를 배기 필터가 확실하게 걸러주며 1회 가동 전기요금도 약 170원 안팎으로 부담이 적은 편'
    ],
    cautions: [
      '히터식 열풍 배기 구조라 작동 중 배기구로 따뜻하고 습한 공기가 직접 배출되므로 환기창이나 베란다 문 없이 닫힌 방 안에서 돌리면 실내가 금방 후텁지근해짐'
    ],
    checks: [
      '리뷰 검증: 정격 3~3.5kg이나 구김·건조 효율을 위해 실제론 수건 7~10장·일상복 소량 위주가 적합하며 두꺼운 겨울 이불은 건조 불가',
      '유지비용·소음: 흡기·배기 필터에 2~3회마다 보풀이 가득 차므로 주기적 필터 청소와 소모품 교체 비용이 들고, 히터·드럼 회전음 때문에 심야 원룸 가동은 주의',
      '배치 체크: 후면·전면 배기 방향 여유 공간 확보 및 진동 방지를 위한 수평·견고한 전용 거치대/선반(약 15kg+ 본체 하중 지지) 확인 필수'
    ],
    tones: ['white-minimal', 'butter-pastel', 'steel-modern'],
    styles: ['깔끔 미니멀', '포근 내추럴'],
    pairIds: ['tower-drying-rack-sts', 'dehumidifier-mini-closet'],
    goodLine: '배수 공사 없이 전원만 꽂아 수건·속옷 보풀과 건조대 자리를 줄여주는 원룸 미니 건조기',
    checkLine: '실내 온풍·습기 배기 환기 필수, 두꺼운 이불 건조 불가 및 소모품 필터 교체 비용 체크',
    altName: '창가·베란다 배치 + 미니 건조기 전용 스틸 거치 선반 조합',
    altSearchKeyword: '미닉스 미니건조기 PRO+ 전용 앵글 선반'
  },
  {
    id: 'rotating-bookcase-tower',
    brand: 'LIVING',
    name: '360도 원형 회전 책장 북타워 (4~5단)',
    category: '수납·행거',
    verdict: 'WARN',
    priceTier: '6~13만 원대 (보급형 MDF 기준)',
    chips: ['좁은 구석 150권+ 수납', '전동드릴 필수 조립', '무게중심 쏠림 흔들림'],
    oneLiner: '좁은 방 코너 한 뼘 면적에 책 100~200권을 사방으로 꽂는 압도적 수납력이 장점이지만, 반제품 보급형은 "조립 지옥" 수준으로 손이 많이 가고 한쪽 편중 수납 시 회전판이 흔들림.',
    specs: { dust: 3, deposit: 1, trouble: 4 },
    pros: [
      '가로·세로 약 45~50cm 좁은 바닥 면적만 차지하면서 4면이 모두 수납공간이라 원룸 코너나 침대 옆에 책·만화책·피규어를 대량 정리하기 좋음',
      '앉은 자리에서 360도 가볍게 돌려 원하는 책을 바로 꺼낼 수 있어 좁은 동선에서도 서가 활용 효율이 뛰어남'
    ],
    cautions: [
      '저가 MDF·PB 보급형은 수많은 나사를 직접 박아야 해 수동 드라이버로 조립하면 손목 무리와 조립 오차가 커지며, 하부 턴테이블 베어링 1개로 버텨 무게 편중 시 삐걱거림이 생김'
    ],
    checks: [
      '리뷰 검증: 전동드릴 미보유 시 조립 난이도가 매우 높다는 평이 압도적이므로 전동공구 준비 또는 완제품·원목(자작·편백) 상위 라인 검토 권장',
      '하중 배치: 4~5단 고층 모델일수록 무거운 전공서·대형 도서는 반드시 1~2단 아래칸에, 그리고 4면 사방에 무게를 고르게 분산해 꽂아야 전도·기울어짐 방지',
      '바닥·안전: 장판 위에서는 회전 시 하부 쏠림이나 눌림이 생길 수 있으므로 평탄한 바닥 수평 확인 및 어린아이·반려동물 매달림 주의'
    ],
    tones: ['white-minimal', 'oak-natural', 'walnut-vintage'],
    styles: ['깔끔 미니멀', '포근 내추럴', '감성 빈티지'],
    pairIds: ['hanssem-sam', 'steel-bookshelf-4tier'],
    goodLine: '코너 50cm 미만 자리에서 360도 돌려 150권 이상 꽂는 초고효율 수직 북타워',
    checkLine: '전동드릴 필수 조립 피로도 및 4면 무게 균형 맞춤·하단 중량 배치 체크 필수',
    altName: '한샘 샘책장 5단 (방문 시공·고정형) 또는 4단 스틸 북선반',
    altSearchKeyword: '완제품 원목 360도 회전 책장 4단'
  },
  {
    id: 'door-hook-hanger',
    brand: 'LIVING',
    name: '무타공 방문 걸이 도어후크 행거 (원목 · 스틸 5~6구)',
    category: '무타공·욕실',
    verdict: 'WARN',
    priceTier: '1~2만 원대',
    chips: ['1초 설치 무타공 옷걸이', '문틀 틈새 1.5mm 안닫힘', '문 상단 시트지 긁힘'],
    oneLiner: '못을 박지 않고 방문 뒤에 외투·가방·모자를 주르륵 걸어 동선을 살리지만, 철판 두께(1~1.5mm+)만큼 문 윗틈이 좁아 문이 안 닫히거나 여닫을 때 문짝 시트지가 까져 보증금 훼손 위험이 있음.',
    specs: { dust: 2, deposit: 3, trouble: 2 },
    pros: [
      '행거를 세울 바닥 공간조차 없는 3~4평 초소형 원룸에서 죽은 공간인 방문 뒷면을 외투·가방·에코백 거치대로 즉시 활용 가능',
      '설치와 철거가 1초 만에 끝나 이사할 때 그대로 빼서 가져갈 수 있는 대표적인 무타공 수납 아이템'
    ],
    cautions: [
      '대부분의 아파트·원룸 방문 상단 유격이 좁아 후크를 걸면 문이 꽉 끼어 안 닫히거나 래치가 안 걸려 스르륵 열리며, 금속 마찰로 문 상단 페인트·필름 시트지가 벗겨지기 쉬움'
    ],
    checks: [
      '리뷰 검증: 구매 전 동전(100원·500원)을 방문 상단 틈에 끼워 문이 자연스럽게 닫히는지 1.5mm+ 여유 틈새 실측 및 방문 두께(표준 3.5~4cm) 확인 필수',
      '원상복구·보호: 걸이 안쪽에 두꺼운 EVA 스펀지나 실리콘 완충 패드가 없는 철제 그대로 걸면 문틀 마찰 소음과 도장 까짐으로 퇴실 시 수리비 분쟁 위험',
      '하중 주의: 겨울 롱패딩·무거운 백팩을 한 문에 과도하게 걸면 방문 경첩이 처져 닫힘 불량이 심해지므로 가벼운 데일리 겉옷 위주로 분산 거치 권장'
    ],
    tones: ['white-minimal', 'oak-natural', 'steel-modern'],
    styles: ['깔끔 미니멀', '포근 내추럴', '모던·스틸'],
    pairIds: ['door-towel-bar', 'wangja-hanger'],
    goodLine: '바닥 공간 0평으로 방문 뒤에 데일리 외투·가방을 바로 거는 1초 무타공 도어후크',
    checkLine: '방문 상단 틈새(1.5mm+)·두께(3.5~4cm) 실측과 스크래치 방지 완충 패드 유무 필수',
    altName: '완충 실리콘 패드 슬림 도어후크 1.2mm + 문 두께 맞춤 스페이서',
    altSearchKeyword: '초슬림 문걸이 도어후크 기스방지 패드'
  }
];
