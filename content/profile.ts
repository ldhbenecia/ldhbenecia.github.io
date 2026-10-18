export const profile = {
  handle: 'ldhbenecia',
  nameKo: '임동혁',
  links: [
    { label: 'GitHub', text: 'github.com/ldhbenecia', href: 'https://github.com/ldhbenecia' },
    { label: 'Blog', text: 'velog.io/@ldhbenecia', href: 'https://velog.io/@ldhbenecia' },
    { label: 'LinkedIn', text: 'linkedin.com/in/ldhbenecia', href: 'https://linkedin.com/in/ldhbenecia' },
  ],
  summary: '느린 쿼리를 재고 고치고, 인프라와 관측성까지 다루는 백엔드 엔지니어 임동혁의 포트폴리오.',
  intro: '넛지헬스케어에서 캐시워크 챌린지와 캐시워크 for 비즈니스의 백엔드를 맡고 있습니다. 뒤의 그래프는 퇴근 뒤 직접 운영하는 클러스터와 프로젝트 구성입니다.',
}

export const about = {
  paragraph:
    '넛지헬스케어에서 캐시워크 챌린지와 캐시워크 for 비즈니스의 백엔드를 맡고 있습니다. 느린 쿼리는 실행 계획을 열어 원인을 확인한 뒤에 고치고, 고친 결과는 숫자로 남깁니다. 관측성과 배포 파이프라인에도 관심이 많아, 퇴근 뒤에는 로컬 쿠버네티스 클러스터를 Argo CD로 운영합니다.',
  facts: [
    { label: '지금', value: '넛지헬스케어 Backend Engineer' },
    { label: '담당', value: '캐시워크 챌린지, 캐시워크 for 비즈니스' },
    { label: '기록', value: 'velog, ADR, 진행 일지' },
  ],
  recordsLabel: '이력',
  toolsLabel: '도구',
  aiLabel: 'AI와 일하는 방식',
  // 'AI 를 잘 쓴다' 대신 실제로 한 일과 그 결과만. 근거는 Cairn 레포와 넛지 사례
  ai: [
    {
      title: '맥락은 규칙으로 준다',
      body: 'Claude Code와 Codex가 같은 규칙(CLAUDE.md·AGENTS.md, 규칙 7종)과 ADR·진행 일지를 먼저 읽고 시작하게 합니다. 세션이 바뀌어도 컨벤션과 결정 근거가 유지됩니다.',
    },
    {
      title: 'AI가 쓴 테스트는 측정해서 거른다',
      body: '버그 16,932개를 주입해 테스트의 실제 검출력을 쟀고(59.7% → 76.9%), 출력값이 아니라 규칙을 검증하라는 기준을 에이전트 규칙으로 강제했습니다.',
    },
    {
      title: 'AI 리뷰도 다시 본다',
      body: '머지된 PR의 AI 리뷰를 주기적으로 전수 감사해, 처리되지 않고 지나간 지적 8건을 찾아 반영했습니다.',
    },
    {
      title: '비용과 지연도 잰다',
      body: '요약 파이프라인의 추론 강도와 입력을 실측해 조정했습니다. 일지 1건 96초 → 28초, 출력 토큰 85% 절감.',
    },
  ],
  aiResult: '평일 업무 시간 커밋 4% 수준으로 Cairn PR 330개 이상, 릴리스 37회를 유지하고 있습니다.',
  records: [
    {
      title: '학력·교육',
      items: [
        { name: '한국외국어대학교 컴퓨터전자시스템공학부 졸업', year: '2026' },
        { name: '네이버 부스트캠프 웹·모바일 8기 — 웹 풀스택, 백엔드 심화', year: '2023' },
        { name: '학생 IT 자치기구 Hufstory 회장', year: '2023' },
      ],
    },
    {
      title: '자격·수상',
      items: [
        { name: '정보처리기사', year: '2025' },
        { name: 'SQLD', year: '2024' },
        { name: 'HUFSummer 해커톤 공과대학장상', year: '2023' },
      ],
    },
  ],
  tools: [
    { label: '언어', value: 'Java, Kotlin, TypeScript, Python' },
    { label: '서버', value: 'Spring Boot, NestJS' },
    { label: '데이터', value: 'MySQL, Redis, MongoDB, Kafka, RabbitMQ' },
    { label: '운영', value: 'Kubernetes, Argo CD, Helm, Terraform, Docker, GitHub Actions' },
    { label: '관측', value: 'OpenTelemetry, Prometheus, Grafana, Loki, Tempo, Sentry' },
  ],
}
