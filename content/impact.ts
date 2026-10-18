export type ImpactRow = { year: string; where: string; what: string; before: string; after: string }

export const impact: ImpactRow[] = [
  { year: '2026', where: '캐시워크 챌린지', what: '채널 구독자 조회 크론', before: '18s', after: '53ms' },
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
