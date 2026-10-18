// 'AI 를 잘 쓴다' 대신 실제로 한 일과 그 결과만. 근거는 각 레포의 .claude/·docs/ 와 넛지 사례
// 커밋 비율: 2026-02 이후 개인 레포(cairn·orbit·nine-mens-morris·manifests·포트폴리오) 본인 커밋 2,000개 중
// 평일 09–18시(KST) 밖 98.8%
export type AiPractice = { title: string; body: string; where: string }

export const aiPractices: { title: string; lead: string; items: AiPractice[] } = {
  title: 'AI와 일하는 방식',
  lead: '입사 후 개인 프로젝트 커밋 약 2,000개 중 99%를 퇴근 후와 주말에 했습니다. 그 작업 대부분을 AI 에이전트와 함께 하며 다듬은 방식입니다.',
  items: [
    {
      title: '맥락은 규칙으로 준다',
      body: '레포마다 CLAUDE.md·AGENTS.md와 규칙(Cairn 8종, orbit 14종)을 두고, 에이전트가 ADR·진행 일지를 먼저 읽고 시작하게 합니다. 반복 작업은 PR 리뷰·백테스트 검토·장애 기록 같은 전용 스킬로 만들었습니다.',
      where: 'Cairn · orbit · Nine Men’s Morris',
    },
    {
      title: 'AI의 권한에 선을 긋는다',
      body: '돈이 걸린 orbit에서는 AI가 실주문을 실행하지 못하게 규칙으로 막았습니다. 실거래 전환과 한도 상향은 점검표(go-live-check)까지만 맡기고, 결정은 사람이 합니다.',
      where: 'orbit',
    },
    {
      title: 'AI가 쓴 테스트는 측정해서 거른다',
      body: '버그 16,932개를 주입해 테스트의 실제 검출력을 쟀고(59.7% → 76.9%), 출력값이 아니라 규칙을 검증하라는 기준을 에이전트 규칙으로 강제했습니다.',
      where: '넛지헬스케어',
    },
    {
      title: '추측 대신 재현으로 확인한다',
      body: '1차 전수조사로 치명 결함 13건을 고친 뒤, 서버를 실제로 띄워 소켓과 REST를 직접 찔러 보는 2차 감사로 다시 확인했습니다. 감사 문서 18개와 ADR 18건으로 남겼습니다.',
      where: 'Nine Men’s Morris',
    },
    {
      title: '비용과 지연도 잰다',
      body: '요약 파이프라인의 추론 강도와 입력을 실측해 조정했습니다. 일지 1건 96초 → 28초, 출력 토큰 85% 절감. 머지된 PR의 AI 리뷰도 전수 감사해 놓친 지적 8건을 반영했습니다.',
      where: 'Cairn',
    },
    {
      title: '모르는 분야는 배우면서 만든다',
      body: '퀀트처럼 처음 하는 분야는 AI가 코드만 쓰지 않고, 새 개념을 "무엇·왜·언제 깨지는지" 세 줄로 설명하고 용어집에 남기게 했습니다. 실패한 실험도 기록합니다.',
      where: 'orbit',
    },
  ],
}
