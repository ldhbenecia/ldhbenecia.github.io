# Git / 커밋 컨벤션

## 브랜치

- `main` 단일 트렁크. `main` 에 push 하면 GitHub Pages 로 바로 배포된다
- 작업 브랜치가 필요하면 prefix 풀네임: `feature/<slug>`, `fix/<slug>`, `refactor/<slug>`, `docs/<slug>`, `chore/<slug>`
- 문구 수정·소규모 정리는 main 직접 push 허용 (1인 프로젝트). 디자인·구조를 바꾸는 작업은 브랜치 + PR

## 커밋 (Conventional Commits)

- 형식: `type(scope): subject`
- type: `feat` `fix` `refactor` `style` `docs` `test` `build` `chore` `perf` `ci`
- scope: `ui`(컴포넌트·스타일), `content`(이력·프로젝트 데이터), `deps`, `ci`, `seo`, `assets`
- **subject 톤**: 한국어 명사구 우선. 영어 명령형 동사(`add`, `update`)는 피함
  - 좋음: `feat(ui): 쿼리 재생 — 18초와 53ms를 실제 시간으로`
  - 피함: `feat(ui): add query race`
- **body 톤**: bullet (`- `) 기본. 문단은 배경 설명이 꼭 필요할 때만
  - 한 줄에 한 변경/이유
- **WHY 를 적는다. WHAT 은 diff 가 말해준다**
- footer: `Refs:`, `Closes #N`, `BREAKING CHANGE:`

## 의미 단위 커밋

- 한 커밋 = 한 가지 변경 + **빌드가 깨지지 않는 상태**
- 삭제·포맷·리네임은 기능 변경과 섞지 않는다. 각각 단독 커밋
- 이력·수치 변경(`content`)과 화면 변경(`ui`)은 나눈다

## 커밋 전 확인

```bash
npm run typecheck
npm run build      # out/ 정적 export 까지
```

**빌드를 돌리지 않고 커밋하지 않는다.** "될 것 같다"는 근거가 아니다.
