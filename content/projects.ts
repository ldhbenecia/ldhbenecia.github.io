export type Project = {
  id: string
  name: string
  years: string
  kind: string
  line: string
  role: string
  stack: string
  links: { label: string; href: string }[]
  points: { title: string; body: string }[]
  facts?: { label: string; value: string }[]
  images?: ProjectImage[]
  pipeline?: string[]
}

// framed: 이미지 자체에 맥 창 테두리와 그림자가 들어 있음. 아니면 화면에서 같은 모양의 창을 씌움
export type ProjectImage = { src: string; alt: string; width: number; height: number; framed?: boolean; caption?: string }

export const projects: Project[] = [
  {
    id: 'mono',
    name: 'Mono Mail',
    years: '2024.07 – 2025.06',
    kind: '메일 웹앱',
    line: '업무용 메일 경험을 다시 만든 웹앱. 2025 Y Combinator Spring·Summer 배치 최종 인터뷰까지 갔고, 기업가치 50억 원으로 약 5억 원을 실제로 투자받았습니다. AI 코딩 도구 없이, 회사와 학업을 병행하며 1년 동안 서버를 만들었습니다.',
    role: '서버 개발 · FE 1 / BE 2',
    stack: 'Java, Spring Boot, JPA, MySQL, Firestore, Flyway, GCP Cloud Run, Docker',
    links: [{ label: 'monomail.co', href: 'https://monomail.co' }],
    facts: [
      { label: '미국 사용자', value: '400+' },
      { label: '연동 계정', value: '500+' },
      { label: '투자 유치', value: '5억' },
    ],
    images: [
      { src: '/images/mono_inbox.png', alt: 'Mono Mail 받은편지함. 왼쪽 Work·Personal Space, 가운데 메일 목록, 오른쪽 메일 본문과 발신자 정보', width: 1800, height: 1077, framed: true },
    ],
    points: [
      {
        title: '여러 계정을 Space로 묶는 Multi Auth',
        body: '여러 메일 계정을 연동하고 Space 단위로 나눠 관리하는 구조를 설계하고, 계정을 연결할 Target Member 로직을 FE·BE 모두 구현했습니다. 설계 시나리오를 문서로 남겼습니다.',
      },
      {
        title: 'ChatGPT 기반 메일 기능',
        body: 'HTML 파싱과 프롬프트 설계로 인증코드 추출 응답을 13초에서 2초로 줄였습니다. Gmail 스레드를 Base64 디코딩과 Jsoup으로 텍스트화해 요약하고, 발송 전 교정과 톤 조정 기능을 만들었습니다.',
      },
      {
        title: '개발자도 못 읽는 개인정보',
        body: 'CASA Tier 2 기준에 맞춰 AES 암호화와 데이터 특성에 맞는 IV를 적용하고, 운영 중에 기존 평문 데이터를 암호화하는 마이그레이션을 만들었습니다. Flyway로 운영 DB 형상을 관리했습니다.',
      },
      {
        title: '공유, 트래킹, 대기자 운영',
        body: '접근 제어 기반 메일 공유 링크, 열람률 트래킹 픽셀, Firestore 대기자 수백 명에게 일괄 알림을 보내고 실패를 즉시 되돌리는 자동화를 맡았습니다.',
      },
    ],
  },
  {
    id: 'cairn',
    name: 'Cairn',
    years: '2026 –',
    kind: '데스크톱 앱',
    line: '흩어진 PR과 커밋을 모아 Claude로 요약하고, 일간 업무 일지와 주간·월간 롤업을 만드는 로컬 우선 macOS 앱.',
    role: '1인 개발 · 기획, 디자인, 엔진, 데스크톱, 웹',
    stack: 'TypeScript, NestJS standalone, Claude Agent SDK, Octokit, Electron, React 19, Next.js, Drizzle, PostgreSQL',
    links: [{ label: 'GitHub', href: 'https://github.com/ldhbenecia/cairn' }],
    facts: [
      { label: '커밋', value: '1,500+' },
      { label: 'PR', value: '330+' },
      { label: '릴리스', value: '37' },
    ],
    images: [
      { src: '/images/cairn_statistic.png', alt: 'Cairn 대시보드. PR 608, 커밋 2,275, 활동일 119와 누적 활동 그래프', width: 1800, height: 1161, framed: true },
      { src: '/images/cairn_graph.png', alt: 'Cairn 그래프 뷰. 일간·주간·월간 일지가 위키 링크로 이어진 네트워크', width: 1800, height: 1161, framed: true },
    ],
    points: [
      {
        title: 'AI를 규칙과 검증으로 통제하는 팀원처럼',
        body: 'CLAUDE.md와 AGENTS.md로 Claude Code와 Codex가 같은 규칙을 읽게 하고, 규칙 7종과 ADR·진행 일지를 작업 전에 먼저 읽도록 구성했습니다. PR 리뷰 스킬, Husky·commitlint, CI의 typecheck·lint·test로 사람이 보기 전에 체계가 먼저 거르고, 머지된 PR의 리뷰를 주기적으로 전수 감사해 놓친 지적 8건을 반영했습니다. 평일 업무 시간 커밋 4% 수준으로 PR 330개 이상을 유지하고 있습니다.',
      },
      {
        title: '요약 96초 → 28초, 출력 토큰 85% 절감',
        body: '실측해 보니 SDK 기본 effort가 요약마다 8~10K 토큰을 thinking에 쓰고 있었고, 수천 자짜리 PR 템플릿이 입력 대부분이었습니다. 요약은 추론 작업이 아니라고 보고 effort를 낮추고 PR 본문을 상한 안으로 잘랐습니다. 프롬프트 캐시 read/creation 토큰을 따로 로깅해 적중을 검증합니다.',
      },
      {
        title: 'GitHub API N번 호출을 배치 한 번으로',
        body: 'PR마다 REST로 커밋을 부르던 것을 GraphQL alias로 15개씩 묶었고, 실패하거나 커밋이 100개 넘는 PR만 REST로 폴백합니다. 백필 검색은 (token, query) 캐시와 진행 중인 promise 공유로 N회에서 1회로 줄였습니다.',
      },
      {
        title: '헤드리스 엔진과 얇은 클라이언트, 로컬 우선 보안',
        body: '수집 → 요약 → 발행 엔진을 UI와 무관한 NestJS standalone 앱으로 만들고 데스크톱은 이를 자식 프로세스로 띄웁니다. 시크릿은 Keychain 키로 암호화하고, 자식 프로세스에는 최소 env만 넘기며, 소스 코드와 diff는 기기 밖으로 보내지 않는다는 egress 정책을 ADR로 남겼습니다.',
      },
    ],
  },
  {
    id: 'morris',
    name: 'Nine Men’s Morris',
    years: '2024 · 2026',
    kind: '실시간 보드게임',
    line: '1:1 실시간 턴제 보드게임. 2024년 첫 Spring Boot 팀 프로젝트를, 2026년에 고가용성 다중 서버를 전제로 혼자 다시 설계하고 있습니다.',
    role: '2024 백엔드 리드 · 2026 재설계는 1인',
    stack: 'Java 21, Spring Boot, STOMP, MySQL, Redis, Flyway, Kubernetes, Argo CD, Testcontainers, React 19',
    links: [{ label: 'GitHub', href: 'https://github.com/ldhbenecia/nine-mens-morris' }],
    facts: [
      { label: '감사 문서', value: '18' },
      { label: 'ADR', value: '18' },
      { label: '테스트', value: '238' },
    ],
    images: [
      { src: '/images/nmm_moving.jpg', alt: '나인멘스모리스 대국 화면. Phase 2 돌 이동 단계, 흑돌과 백돌이 놓인 판', width: 1413, height: 881 },
    ],
    points: [
      {
        title: '서버 권위 게임 엔진',
        body: '서버가 턴과 좌표를 검증하지 않고 요청의 userId를 믿어서, 상대 id로 기권을 보내 점수를 조작할 수 있었습니다. 규칙을 Spring을 모르는 순수 Java 모듈로 분리하고 요청자는 JWT에서만 확정해, 남의 방 구독과 판 상태 위조를 막았습니다.',
      },
      {
        title: '단일 서버에서 무상태 다중 서버로',
        body: '판 상태가 서버 메모리에 있어 배포하면 진행 중인 판이 사라졌습니다. 분산 락 + 버전 CAS + Lua로 Redis에 원자적으로 저장하고, 방별 pub/sub 채널로 그 방 세션이 있는 서버만 이벤트를 받게 했습니다. 방 변경당 Redis 왕복 4 → 3회, 재접속 동기화 4 → 1회.',
      },
      {
        title: '배포 중에도 끊기지 않는 대국',
        body: '롤링 배포 때 WebSocket이 끊겨 5초간 입력이 막혔습니다. 종료 직전 서버가 이동 신호를 보내면 클라이언트가 새 연결을 먼저 붙이고 옛 연결을 닫습니다(make-before-break). 대국 중 서버 종료 테스트에서 세션 이동 0.2초, 끊김 표시 0건.',
      },
      {
        title: '레이팅 정합성',
        body: '동시에 끝난 두 판이 MMR을 덮어쓰던 문제를 user_id 순서의 비관적 락으로 해결하고, 즉시 기권·반복 대전 어뷰징을 막았습니다.',
      },
    ],
  },
  {
    id: 'infra',
    name: 'Infra Lab',
    years: '2025 –',
    kind: 'GitOps 클러스터',
    line: '로컬 쿠버네티스 클러스터를 Argo CD로 운영하는 실습장. 매니페스트 레포에 커밋하는 것이 곧 배포입니다.',
    role: '1인 운영',
    stack: 'Kubernetes(OrbStack), Argo CD, Helm, Sealed Secrets, GitHub Actions, GHCR, Terraform, Spring Cloud, Kafka',
    links: [
      { label: 'manifests', href: 'https://github.com/ldhbenecia/ldh-infra-lab-manifests' },
      { label: 'msa-playground', href: 'https://github.com/ldhbenecia/msa-playground' },
    ],
    pipeline: ['앱 레포 main 머지', 'GitHub Actions 테스트·arm64 빌드', 'GHCR 푸시', 'manifests image.tag 커밋', 'Argo CD 변경 감지', '롤링 업데이트'],
    points: [
      {
        title: 'App of Apps와 직접 만든 공통 차트',
        body: '루트 Application 하나만 수동으로 apply하고 나머지는 파일 추가로 늘어납니다. 차트는 언어가 아니라 워크로드 종류로 나눠 http-service 하나로 Spring 서비스 5개를 올리고, values는 차트 기본값 → 언어 프로필 → 앱 값 순서로 덮어씁니다.',
      },
      {
        title: '두 프로젝트, 두 네임스페이스',
        body: 'MSA 플레이그라운드(user·order·product 서비스, Spring Cloud Gateway)와 나인멘스모리스(게임 서버, MySQL·Redis StatefulSet)를 네임스페이스로 가르고, 게이트웨이의 디스커버리 Role을 한쪽에만 걸어 서로 노출되지 않게 했습니다.',
      },
      {
        title: '평문 없는 Git',
        body: 'Secret은 Sealed Secrets로 봉인한 암호문만 커밋합니다. CI는 이 레포 하나에 Contents 쓰기만 가진 fine-grained 토큰으로 image.tag를 바꿉니다.',
      },
      {
        title: 'Kafka 이벤트와 Saga',
        body: 'MSA 서비스끼리는 Kafka 이벤트로 통신하고, 주문 흐름의 정합성은 Saga 패턴으로 맞추는 연습을 Spring 기반으로 하고 있습니다.',
      },
    ],
  },
  {
    id: 'orbit',
    name: 'orbit',
    years: '2026 –',
    kind: '퀀트 연습장',
    line: '규칙으로 “살지 말지”의 근거를 보여 주는 개인 투자 대시보드이자, 퀀트 트레이딩을 만들면서 배우는 연습장.',
    role: '1인 개발',
    stack: 'Python 3.13, uv, FastAPI, Next.js 16, Tailwind, lightweight-charts',
    links: [{ label: 'GitHub', href: 'https://github.com/ldhbenecia/orbit' }],
    images: [
      {
        src: '/images/orbit_dashboard.jpg',
        alt: 'orbit 대시보드. 종목 타일, 일봉 차트, 규칙별 오늘의 신호와 가상 지갑',
        width: 1400,
        height: 1738,
        caption: '가상 데이터로 찍은 화면. 거래소 약관상 실제 시세는 로컬에서만 봅니다.',
      },
    ],
    points: [
      {
        title: '백테스트와 실제 판단이 같은 코드',
        body: '전략은 확정된 일봉만 보는 순수 함수이고, 미래 데이터 참조는 테스트로 막습니다. 같은 규칙을 기간을 반으로 나눠도, 이동평균 기간과 돌파 k를 바꿔도 결과가 유지되는지 검증합니다.',
      },
      {
        title: '돈을 다루는 코드의 기본기',
        body: '금액은 Decimal, DB에는 최소 단위 정수로 저장합니다. 수수료·최소 주문·호가 단위는 공식 자료로 확인한 값과 출처·확인일을 문서에 남기고, 주문까지 가능한 키는 조회 경로 화이트리스트로만 호출합니다.',
      },
      {
        title: '사람이 켜는 자동매매',
        body: '지금은 주문을 내지 않는 가상 장부(dry-run)만 있습니다. 예산 격리, 리스크 가드, 킬 스위치를 실거래와 같은 경로로 두고, 실거래 전환과 한도 상향은 사람만 할 수 있게 했습니다.',
      },
    ],
  },
  {
    id: 'sent',
    name: 'Sent',
    years: '2025',
    kind: '메모·투두 서버',
    line: '메모와 투두를 하나로 묶은 앱의 서버. 학습을 목적으로 멀티 모듈, 관측성, 부하 테스트를 실험한 프로젝트입니다.',
    role: '프로젝트 리드 · 백엔드, 인프라',
    stack: 'Kotlin, Spring Boot, JPA, MySQL, MongoDB, Redis, RabbitMQ, STOMP, Prometheus, Grafana, Sentry',
    links: [
      { label: 'GitHub', href: 'https://github.com/ldhbenecia/Sent-Server' },
      {
        label: 'N+1 최적화 기록',
        href: 'https://velog.io/@ldhbenecia/K6-%EA%B8%B0%EB%B0%98-%EB%B6%80%ED%95%98-%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%99%80-IN-%EC%BF%BC%EB%A6%ACMap-%EC%BA%90%EC%8B%B1%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-N1-%EC%BF%BC%EB%A6%AC-%EC%B5%9C%EC%A0%81%ED%99%94',
      },
      {
        label: '채팅 조회 개선 기록',
        href: 'https://velog.io/@ldhbenecia/k6-%EB%B6%80%ED%95%98-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B8%B0%EB%B0%98-%EC%B1%84%ED%8C%85-%EC%A1%B0%ED%9A%8C-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0',
      },
    ],
    points: [
      {
        title: '요청당 쿼리 301회 → 2회',
        body: '카테고리를 하나씩 조회하던 N+1을 IN 쿼리와 Map 캐싱으로 바꿔, 제한된 커넥션에서 나던 타임아웃을 없앴습니다. 평균 14.35초 → 44ms, 실패율 0%.',
      },
      {
        title: '채팅 이력 16초 → 23ms',
        body: '방 진입마다 전체 이력을 읽던 것을 커서 기반 페이지네이션과 (roomId, timestamp) 복합 인덱스로 바꿨습니다. 동시 1,000명에서 TPS 15배. 최근 5,000건은 Redis ZSet에 write-through로 두어 DB 부하를 격리했습니다.',
      },
      {
        title: 'api · core · storage 멀티 모듈',
        body: '비즈니스 로직을 담은 core가 ORM과 DB를 모르도록 모듈을 나눴습니다. GitHub Actions로 이미지 빌드·배포와 배포 후 헬스체크를 자동화하고, Prometheus·Grafana·Sentry와 Slack·Discord 알림을 붙였습니다.',
      },
    ],
  },
]
