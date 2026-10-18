'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './QueryRace.module.css'

const BEFORE_MS = 18_000 // 실제 크론이 걸리던 시간. 줄이면 비교의 의미가 사라짐
const AFTER_MS = 53 // 개선 후 평균

type Phase = 'idle' | 'running' | 'done'

export function QueryRace() {
  const sectionRef = useRef<HTMLElement>(null)
  const rafRef = useRef(0)
  // 서버 렌더와 스크립트 없는 화면에서는 끝난 결과를 보여 줌
  const [elapsed, setElapsed] = useState(BEFORE_MS)
  const [phase, setPhase] = useState<Phase>('done')

  const run = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    const start = performance.now()
    setPhase('running')
    const tick = (now: number) => {
      const t = Math.min(now - start, BEFORE_MS)
      setElapsed(t)
      if (t < BEFORE_MS) rafRef.current = requestAnimationFrame(tick)
      else setPhase('done')
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    setElapsed(0)
    setPhase('idle')
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        run()
      },
      { threshold: 0.45 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [run])

  const before = `${(elapsed / 1000).toFixed(1)}s`
  const after = `${Math.round(Math.min(elapsed, AFTER_MS))}ms`
  const afterDone = phase === 'done' || elapsed >= AFTER_MS
  const beforeDone = phase === 'done'

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="race-title">
      <div className={`wrap ${styles.head}`}>
        <h2 id="race-title" className={styles.title} data-reveal>
          18초가 53ms로
        </h2>
        <div className={styles.copy}>
          <p data-reveal style={{ '--i': 1 } as React.CSSProperties}>
            캐시워크 챌린지 채널 구독자 53만 명을 뽑는 주 1회 크론이 3,889만 행을 전부 읽고 있었습니다. ORDER BY … LIMIT
            때문에 옵티마이저가 PK 스캔을 골랐고, 찾는 행은 테이블 끝에 몰려 있었습니다. 통계 갱신, 히스토그램, LIMIT
            조정을 하나씩 검증해 기각한 뒤 보조 인덱스를 강제했습니다.
          </p>
          <div className={styles.controls} data-reveal style={{ '--i': 2 } as React.CSSProperties}>
            <button type="button" className="button" onClick={run} disabled={phase === 'running'}>
              {phase === 'running' ? '도는 중…' : '두 쿼리 다시 돌리기'}
            </button>
            <p className={styles.status} aria-live="polite">
              {beforeDone ? '같은 5,001건, 약 340배 빠름' : afterDone ? '새 쿼리는 이미 끝남' : ''}
            </p>
          </div>
        </div>
      </div>

      <div className={`wrap ${styles.specimens}`}>
        <figure className={styles.specimen}>
          <div className={styles.box}>
            <p className={`${styles.figure} num`} aria-label={`이전 쿼리 ${before}`}>
              {before}
            </p>
          </div>
          <div className={styles.bar} aria-hidden="true">
            <span style={{ transform: `scaleX(${elapsed / BEFORE_MS})` }} />
          </div>
          <figcaption className={styles.caption}>
            이전 · PK 전량 스캔{beforeDone ? ' · 끝남' : phase === 'running' ? ' · 아직 읽는 중' : ''}
          </figcaption>
        </figure>
        <figure className={styles.specimen}>
          <div className={`${styles.box} ${styles.boxAfter}`}>
            <p className={`${styles.figure} num`} aria-label={`이후 쿼리 ${after}`}>
              {after}
            </p>
          </div>
          <div className={`${styles.bar} ${styles.barAfter}`} aria-hidden="true">
            <span style={{ transform: `scaleX(${Math.min(elapsed / AFTER_MS, 1)})` }} />
          </div>
          <figcaption className={styles.caption}>
            이후 · 보조 인덱스, p99 98ms{afterDone ? ' · 끝남' : ''}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
