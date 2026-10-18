import { jobs } from '@/content/experience'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section className={`wrap ${styles.section}`} aria-label="경력" id="work">
      {jobs.map((job) => (
        <article key={job.company} className={styles.job}>
          <h2 className={styles.company} data-reveal>
            {job.company}
          </h2>
          <dl className={styles.meta} data-reveal style={{ '--i': 1 } as React.CSSProperties}>
            <div>
              <dt>역할</dt>
              <dd>{job.role}</dd>
            </div>
            <div>
              <dt>기간</dt>
              <dd className="num">{job.period}</dd>
            </div>
            <div>
              <dt>제품</dt>
              <dd>{job.products}</dd>
            </div>
            <div>
              <dt>기술</dt>
              <dd>{job.stack}</dd>
            </div>
          </dl>
          {job.note && <p className={styles.note}>{job.note}</p>}

          <div className={styles.cases}>
            {job.cases.map((c, i) => (
              <section key={c.title} className={styles.case} data-reveal style={{ '--i': i % 2 } as React.CSSProperties}>
                <h3 className={styles.caseTitle}>{c.title}</h3>
                <p className={styles.problem}>{c.problem}</p>
                <p className={styles.result}>{c.result}</p>
                <details className={styles.details}>
                  <summary className={styles.summary}>
                    어떻게 했나
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <ul className={styles.did}>
                    {c.did.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </details>
              </section>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}
