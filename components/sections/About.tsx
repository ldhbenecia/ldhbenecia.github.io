import { about } from '@/content/profile'
import styles from './About.module.css'

export function About() {
  return (
    <section className={`wrap ${styles.section}`} aria-label="소개" id="about">
      <div className={styles.row}>
        <dl className={styles.facts} data-reveal>
          {about.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
        <p className={styles.paragraph} data-reveal style={{ '--i': 1 }}>
          {about.paragraph}
        </p>
      </div>

      <div className={styles.row}>
        <p className={styles.word} data-reveal>
          이력
        </p>
        <div className={styles.records}>
          {about.records.map((r, i) => (
            <div key={r.title} data-reveal style={{ '--i': i + 1 }}>
              <h2 className={styles.recordTitle}>{r.title}</h2>
              <ul className={styles.recordList}>
                {r.items.map((it) => (
                  <li key={it.name}>
                    <span>{it.name}</span>
                    <span className={`${styles.year} num`}>{it.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.row}>
        <p className={styles.word} data-reveal>
          도구
        </p>
        <dl className={styles.tools} data-reveal style={{ '--i': 1 }}>
          {about.tools.map((t) => (
            <div key={t.label}>
              <dt>{t.label}</dt>
              <dd>{t.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
