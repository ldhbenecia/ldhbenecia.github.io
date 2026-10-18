export const impactTitle = '숫자로 본 개선'

export type ImpactRow = { year: string; where: string; what: string; before: string; after: string }

export const impact: ImpactRow[] = [
  { year: '2026', where: '캐시워크 챌린지', what: '캐시워크 채널 구독자 조회 크론', before: '18s', after: '53ms' },
  { year: '2026', where: '캐시워크 챌린지', what: '인증샷 목록·카운트 쿼리', before: '10.8s', after: '7.5ms' },
  { year: '2026', where: '캐시워크 챌린지', what: '하루 error 로그', before: '75,000', after: '600' },
  { year: '2026', where: '캐시워크 for 비즈니스', what: '뮤테이션 테스트 검출률', before: '59.7%', after: '76.9%' },
  { year: '2026', where: '캐시워크 for 비즈니스', what: '배너 원장 5분 적재 행 수', before: '86', after: '3' },
  { year: '2026', where: '캐시워크 for 비즈니스', what: '에러 코드 정의', before: '170', after: '96' },
  { year: '2026', where: 'Cairn', what: '업무 일지 1건 요약 시간', before: '96s', after: '28s' },
  { year: '2026', where: 'Nine Men’s Morris', what: '배포 중 대국 입력 불가', before: '5s', after: '0.2s' },
  { year: '2025', where: 'MaiT', what: '서비스 Docker 이미지', before: '66GB', after: '14GB' },
  { year: '2025', where: 'MaiT', what: '이미지 빌드 시간', before: '18분', after: '18초' },
  { year: '2025', where: 'Sent', what: '일정 목록 조회 (k6)', before: '14.35s', after: '44ms' },
  { year: '2025', where: 'Sent', what: '채팅 이력 조회, 동시 1,000명', before: '16.18s', after: '22.85ms' },
  { year: '2025', where: 'Mono Mail', what: '메일 인증코드 추출 응답', before: '13s', after: '2s' },
]

// 쿼리 재생 섹션. 실제로 걸리던 시간 그대로 재생하므로 값을 줄이면 비교의 의미가 사라짐
export const race = {
  beforeMs: 18_000,
  afterMs: 53,
  rows: '5,001건',
  beforeLabel: '이전 · PK 전량 스캔',
  afterLabel: '이후 · 보조 인덱스, p99 98ms',
  replay: '두 쿼리 다시 돌리기',
  running: '도는 중…',
  stillRunning: '아직 읽는 중',
  done: '끝남',
  afterFirst: '새 쿼리는 이미 끝남',
  story:
    '캐시워크 챌린지의 채널 중 "캐시워크" 채널의 구독자 53만 명을 뽑는 주 1회 크론이 3,889만 행을 전부 읽고 있었습니다. ORDER BY … LIMIT 때문에 옵티마이저가 PK 스캔을 골랐고, 찾는 행은 테이블 끝에 몰려 있었습니다. 통계 갱신, 히스토그램, LIMIT 조정을 하나씩 검증해 기각한 뒤 보조 인덱스를 강제했습니다.',
}
