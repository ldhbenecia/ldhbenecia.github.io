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
