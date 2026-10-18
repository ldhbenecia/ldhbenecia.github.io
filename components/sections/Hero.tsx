import { profile } from '@/content/profile'
import styles from './Hero.module.css'
import { Topology } from './Topology'

export function Hero() {
  return (
    <header className={styles.hero} id="top">
      <Topology />

      <div className={`wrap ${styles.content}`} data-topo-column>
        <h1 className={styles.title}>
          <span className={styles.line}>
            <span style={{ '--i': 0 }}>
              안녕하세요,
            </span>
          </span>
          <span className={styles.line}>
            <span style={{ '--i': 1 }}>
              {profile.nameKo}입니다.
            </span>
          </span>
        </h1>
        <p className={styles.sentence}>{profile.intro}</p>
        <div className={styles.actions}>
          {profile.links.map((l, i) => (
            <a key={l.href} className={i === 0 ? 'button' : 'button button--ghost'} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>

    </header>
  )
}
