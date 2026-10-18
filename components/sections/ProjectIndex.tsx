'use client'

import { useState } from 'react'
import { projects } from '@/content/projects'
import styles from './ProjectIndex.module.css'

export function ProjectIndex() {
  // 목록을 가리키지 않을 때는 첫 프로젝트를 보여 줌
  const first = projects[0].id
  const [hovered, setHovered] = useState(first)

  return (
    <nav className={`wrap ${styles.section}`} aria-label="프로젝트 목록">
      <h2 className="section-label" data-reveal>
        Projects
      </h2>
      <div className={styles.layout}>
        <ol className={styles.list} onPointerLeave={() => setHovered(first)} onBlur={() => setHovered(first)}>
          {projects.map((p, i) => (
            <li key={p.id} data-reveal style={{ '--i': i }}>
              <a
                className={styles.item}
                href={`#${p.id}`}
                data-active={hovered === p.id}
                onPointerEnter={() => setHovered(p.id)}
                onFocus={() => setHovered(p.id)}
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

        <div className={styles.preview} aria-hidden="true">
          {projects.map((p) => {
            const img = p.images?.[0]
            // 화면 캡처가 없는 프로젝트는 미리보기를 비움
            if (!img) return null
            return (
              <figure key={p.id} className={styles.slide} data-on={hovered === p.id}>
                <img src={img.src} alt="" width={img.width} height={img.height} loading="lazy" decoding="async" />
              </figure>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
