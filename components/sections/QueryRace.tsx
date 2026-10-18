'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { race } from '@/content/impact'
import { prefersReducedMotion } from '@/lib/motion'
import styles from './QueryRace.module.css'

const { beforeMs, afterMs } = race
const STEP_MS = 100 // 화면 숫자가 0.1초 단위라 그보다 자주 다시 그릴 필요 없음

export function QueryRace() {
  const sectionRef = useRef<HTMLElement>(null)
  const rafRef = useRef(0)
  // 서버 렌더와 스크립트 없는 화면에서는 끝난 결과를 보여 줌
  const [elapsed, setElapsed] = useState(beforeMs)
  const [running, setRunning] = useState(false)

  const run = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    // 동작 줄이기를 켠 사람에게는 18초 재생 대신 결과만 보여 줌
    if (prefersReducedMotion()) {
      setElapsed(beforeMs)
      return
    }
    const start = performance.now()
    setRunning(true)
    setElapsed(0)
    const tick = (now: number) => {
      const t = Math.min(now - start, beforeMs)
      // 같은 값이면 React 가 렌더를 건너뜀
      setElapsed(t === beforeMs ? t : Math.floor(t / STEP_MS) * STEP_MS)
      if (t < beforeMs) rafRef.current = requestAnimationFrame(tick)
      else setRunning(false)
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    setElapsed(0)
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        io.disconnect()
        run()
      },
      // 비율 기준이면 화면보다 긴 섹션(가로 폰 등)에서 영영 시작되지 않음. 머리가 화면 60% 지점을 지나면 시작
      { rootMargin: '0px 0px -40% 0px' },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [run])

  const before = `${(elapsed / 1000).toFixed(1)}s`
  const after = `${Math.min(elapsed, afterMs)}ms`
  const beforeDone = elapsed >= beforeMs
  const afterDone = elapsed >= afterMs

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="race-title">
      <div className={`wrap ${styles.head}`}>
        <h2 id="race-title" className={styles.title} data-reveal>
          {beforeMs / 1000}초가 {afterMs}ms로
        </h2>
        <div className={styles.copy}>
          <p data-reveal style={{ '--i': 1 }}>
            {race.story}
          </p>
          <div className={styles.controls} data-reveal style={{ '--i': 2 }}>
            <button type="button" className="button" onClick={run} disabled={running}>
              {running ? race.running : race.replay}
            </button>
            <p className={styles.status} aria-live="polite">
              {beforeDone ? `같은 ${race.rows}, 약 ${Math.round(beforeMs / afterMs)}배 빠름` : afterDone ? race.afterFirst : ''}
            </p>
          </div>
        </div>
      </div>

      <div className={`wrap ${styles.specimens}`}>
        <figure className={styles.specimen}>
          <p className={`${styles.figure} num`} aria-label={`이전 쿼리 ${before}`}>
            {before}
          </p>
          <div className={styles.bar} aria-hidden="true">
            <span style={{ transform: `scaleX(${elapsed / beforeMs})` }} />
          </div>
          <figcaption className={styles.caption}>
            {race.beforeLabel}
            {beforeDone ? ` · ${race.done}` : running ? ` · ${race.stillRunning}` : ''}
          </figcaption>
        </figure>
        <figure className={styles.specimen}>
          <p className={`${styles.figure} ${styles.figureAfter} num`} aria-label={`이후 쿼리 ${after}`}>
            {after}
          </p>
          <div className={`${styles.bar} ${styles.barAfter}`} aria-hidden="true">
            <span style={{ transform: `scaleX(${Math.min(elapsed / afterMs, 1)})` }} />
          </div>
          <figcaption className={styles.caption}>
            {race.afterLabel}
            {afterDone ? ` · ${race.done}` : ''}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
