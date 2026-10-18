export type Case = { title: string; problem: string; did: string[]; result: string }

export type Job = {
  company: string
  role: string
  period: string
  products: string
  stack: string
  note?: string
  cases: Case[]
}

export const jobs: Job[] = [
  {
    company: '넛지헬스케어',
    role: 'Backend Engineer',
    period: '2026.02 – 현재',
    products: '캐시워크 챌린지 · 캐시워크 for 비즈니스',
    stack: 'TypeScript, NestJS, Prisma, MySQL, Valkey, AWS RDS, Elastic Beanstalk, SQS, OpenTelemetry',
    cases: [
      {
        title: '3,889만 행을 다 읽던 크론',
        problem:
          '구독자 53만 명을 뽑는 주 1회 S2S 크론이 18초씩 걸렸고 3주 연속 재현됐습니다. 실행 계획을 보니 ORDER BY … LIMIT 때문에 옵티마이저가 PK 스캔을 골랐고, 대상 행이 테이블 뒤쪽에 몰려 있어 5,001건을 내려고 전 행을 읽고 있었습니다(효율 0.01%).',
        did: [
          '통계 갱신, 히스토그램, LIMIT 조정 가설을 하나씩 검증해 기각',
          'FORCE INDEX로 보조 인덱스를 강제',
          '인덱스가 있어도 PK를 타는 현상을 문서로 정리해 팀에 공유',
        ],
        result: '18초 → 평균 53ms, p99 98ms',
      },
      {
        title: '인증샷 10만 건 넘는 챌린지의 목록과 카운트',
        problem:
          '목록은 최대 41.2초, 카운트는 5개월 동안 10초 넘는 슬로우 쿼리로 178번 잡혔습니다.',
        did: [
          '목록: status IN + ORDER BY createdAt의 filesort를 상태별 서브쿼리 UNION ALL로 분리',
          '카운트: TEXT 컬럼 NULL 판별이 12.7만 건 전부에 PK 랜덤 I/O를 일으켜 Generated Column + 복합 인덱스로 커버링',
        ],
        result: '10.8초 → 7.5~19ms. 배포 뒤 슬로우 쿼리 0건, 월 120만 호출 API 평균 46ms / p95 94ms',
      },
      {
        title: '정원제 마감을 업로드 기반 마감으로',
        problem:
          '정원 100명 중 실제 구매자가 70명이면 광고주 예산 30명분이 그대로 사라지는 구조였습니다.',
        did: [
          '증가와 상한 검사를 조건부 UPDATE 한 번으로 묶어 동시 업로드에서도 목표 초과 차단',
          '외부 예치캐시 API, Redis, DB를 한 트랜잭션에 묶을 수 없어 2PC 대신 Saga 보상 트랜잭션',
          '만료 대기자를 승격하는 1분 주기 워커, 알림톡은 SQS로 분리해 재시도를 인프라에 위임',
        ],
        result: '광고주 예산이 정원 미달로 소멸하지 않는 마감 구조',
      },
      {
        title: '광고비 원장의 정합성과 동시성',
        problem:
          '원장 각 행이 직전 행의 누적 컬럼 13개를 이어받는 구조에서 PG 호출 동안 DB 행 잠금을 쥐고 있었고, 배너 소진은 광고마다 5분 간격으로 한 행씩 쌓였습니다.',
        did: [
          '행 잠금을 광고계정 단위 Redis 분산 락으로 바꾸고, 결제 취소는 PG 호출까지 락 범위에 넣어 “환불됐는데 DB 미반영” 차단',
          '고정 멱등키, 유니크 제약, 트랜잭션 안 재확인으로 중복 결제 차단. 서명 없는 웹훅은 PG 조회 API로 재검증',
          '배너 원장을 header/line으로 나누고 lot 차감을 “한 번 조회 → 메모리 FIFO → 일괄 update”로',
        ],
        result: '적재 86행 → 최대 3행. DB 왕복이 광고 수와 무관해져 임시 락 TTL 연장 제거',
      },
      {
        title: 'AI가 쓴 테스트가 실제로 잡는 버그',
        problem:
          'AI 덕에 테스트 작성이 싸지면서 구현이 낸 값을 그대로 기대값으로 박은 “통과용 테스트”가 쌓였습니다. 광고주 캐시를 다루는 서비스라 로직 오류는 곧 금액 오류입니다.',
        did: [
          '버그 16,932개를 주입해 보니 51.5%는 실행되는 테스트조차 없었고, 테스트가 있는 곳에서도 40%를 놓침. 놓친 버그의 56%가 결제·캐시 모듈',
          '출력값 대신 지켜야 할 규칙(항등식, 두 계산 경로의 일치, enum 전수 순회)을 검증하도록 바꾸고 무의미한 테스트 25개 제거',
          '이 기준을 .claude/rules/testing.md로 명문화해 이후 AI가 쓰는 테스트에도 강제',
        ],
        result:
          '검출률 59.7% → 76.9%(결제·캐시 52~60% → 80~82%), 숨은 버그 후보 14건. 약 200명 개발 조직에 적용기와 가이드 공유',
      },
      {
        title: '에러율 0%로 고정돼 있던 대시보드',
        problem:
          '전역 예외 필터가 모든 에러를 HTTP 200으로 내보내 에러율 알림을 걸 수 없었고, 시스템 장애를 비즈니스 에러로 감싼 21곳은 로그도 남지 않았습니다.',
        did: [
          '에러 코드 정의에 HTTP 상태를 묶어, 상태 없이 코드를 추가하면 컴파일이 실패하도록 강제. 응답을 전수 정정하고 170개 → 96개로 정리',
          '5xx만 error 로그와 span ERROR로 기록, app.error.code span 속성 연결, 지원 종료된 OTel 1.x → 2.x',
          'pm2 워커가 같은 라벨로 보내 4건이 8,086건으로 집계되던 문제와 winston colorize() 때문에 severity=0이던 문제 해결',
          '필터와 같은 매핑으로 실제 HTTP 상태와 errorCode를 Swagger에 자동 문서화(323개 중 275개), FE와 배포 순서를 맞춰 무중단 전환',
        ],
        result: 'error 로그 하루 7.5만 → 600건. Datadog 잔재를 걷어내고 OTel로 단일화, 팀 로깅 가이드 작성',
      },
    ],
  },
  {
    company: 'MaiT',
    role: 'Software Engineer Intern',
    period: '2025.01 – 2025.06',
    products: 'Medical AI Team · 온프레미스',
    stack: 'Docker, Docker Compose, Nginx, FastAPI, Linux, GitLab',
    note: '회사의 요청으로 2025년 1학기 동안 학업과 병행했습니다.',
    cases: [
      {
        title: '66GB짜리 Docker 이미지',
        problem: '레거시 서비스 이미지가 66GB였고 빌드에 18분이 걸렸습니다.',
        did: [
          'docker history와 du -ah로 COPY된 .git, 모델 파일 등 불필요한 레이어를 찾아 제거',
          'docker-compose.yml의 빌드 컨텍스트가 엉뚱한 경로를 가리키던 것을 발견해 수정, .dockerignore 정비',
        ],
        result: '이미지 66GB → 14GB, 빌드 18분 → 5분, 캐시 적용 뒤 18초',
      },
      {
        title: '개발 서버 도메인 이전과 사내 GitLab',
        problem: '도메인과 인증서를 옮기면서 사내 코드 저장소도 직접 운영해야 했습니다.',
        did: [
          "Let's Encrypt 인증서를 Cloudflare Origin CA로 전환하고 nginx 설정 반영",
          'Docker Compose와 nginx로 사내 GitLab 구축, Container Registry와 Git LFS로 대용량 레거시 이전, 과정 문서화',
          '사이트 진입 시 /mait로 강제 리다이렉트되던 nginx 설정 정리',
        ],
        result: '사내 GitLab과 CI/CD 기반 마련',
      },
    ],
  },
]
