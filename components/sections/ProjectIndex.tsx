'use client'

import { useEffect, useRef, useState } from 'react'
import { projects } from '@/content/projects'
import styles from './ProjectIndex.module.css'

export function ProjectIndex() {
  const previewRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  // 미리보기가 커서를 약간 늦게 따라오도록 보간. 마우스가 있는 기기에서만
  useEffect(() => {
    const el = previewRef.current
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const target = { x: 0, y: 0 }
    const pos = { x: 0, y: 0 }
    let raf = 0
    const onMove = (e: PointerEvent) => {
      target.x = e.clientX
      target.y = e.clientY
    }
    const tick = () => {
      const k = reduced ? 1 : 0.16
      pos.x += (target.x - pos.x) * k
      pos.y += (target.y - pos.y) * k
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <nav className={styles.section} aria-label="프로젝트 목록">
      <h2 className={styles.title} data-reveal>
        프로젝트
      </h2>
      <ol className={styles.list} onPointerLeave={() => setHovered(null)}>
        {projects.map((p, i) => (
          <li key={p.id} data-reveal style={{ '--i': i } as React.CSSProperties}>
            <a
              className={styles.item}
              href={`#${p.id}`}
              data-dim={hovered !== null && hovered !== p.id}
              onPointerEnter={() => setHovered(p.id)}
              onFocus={() => setHovered(p.id)}
              onBlur={() => setHovered(null)}
            >
              <span className={styles.word} lang="en">
                {p.name}
              </span>
              <span className={styles.desc}>{p.kind}</span>
              <span className={`${styles.detail} num`}>{p.years}</span>
            </a>
          </li>
        ))}
      </ol>

      <div ref={previewRef} className={styles.previewAnchor} aria-hidden="true">
        {projects.map((p) => {
          const img = p.images?.[0]
          return (
            <div key={p.id} className={styles.preview} data-on={hovered === p.id}>
              {img ? (
                <img src={img.src} alt="" width={img.width} height={img.height} loading="lazy" decoding="async" />
              ) : (
                <p className={styles.previewText}>{p.line}</p>
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}
