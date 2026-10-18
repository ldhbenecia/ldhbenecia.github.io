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
                <ul className={styles.did}>
                  {c.did.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p className={styles.result}>{c.result}</p>
              </section>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}
