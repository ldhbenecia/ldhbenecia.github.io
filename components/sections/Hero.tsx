import { profile } from '@/content/profile'
import styles from './Hero.module.css'
import { Topology } from './Topology'

export function Hero() {
  return (
    <header className={styles.hero} id="top">
      <Topology statusId="topology-status" />

      <div className={`wrap ${styles.content}`}>
        <h1 className={styles.title}>
          <span className={styles.line}>
            <span data-line style={{ '--i': 0 } as React.CSSProperties}>
              안녕하세요,
            </span>
          </span>
          <span className={styles.line}>
            <span data-line style={{ '--i': 1 } as React.CSSProperties}>
              {profile.nameKo}입니다.
            </span>
          </span>
        </h1>
        <p className={styles.sentence}>{profile.intro}</p>
        <div className={styles.actions}>
          <a className="button" href={`mailto:${profile.email}`}>
            메일 보내기
          </a>
          <a className="button button--ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <p className={styles.status}>
        <span className={styles.dot} aria-hidden="true" />
        <span id="topology-status">로컬 클러스터 구성</span>
      </p>
    </header>
  )
}
