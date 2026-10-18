import { MetaList } from '@/components/ui/MetaList'
import { caseDetailsLabel, jobs } from '@/content/experience'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section className={`wrap ${styles.section}`} aria-label="경력" id="work">
      {jobs.map((job) => (
        <article key={job.company} className={styles.job}>
          <h2 className={styles.company} data-reveal>
            {job.company}
          </h2>
          <MetaList
            className={styles.meta}
            i={1}
            items={[
              { label: '역할', value: job.role },
              { label: '기간', value: job.period, num: true },
              { label: '제품', value: job.products },
              { label: '기술', value: job.stack },
            ]}
          />
          {job.note && <p className={styles.note}>{job.note}</p>}

          <div className={styles.cases}>
            {job.cases.map((c, i) => (
              <section key={c.title} className={styles.case} data-reveal style={{ '--i': i % 2 }}>
                <h3 className={styles.caseTitle}>{c.title}</h3>
                <p className={styles.problem}>{c.problem}</p>
                <p className={styles.result}>{c.result}</p>
                <details className={styles.details}>
                  <summary className={styles.summary}>
                    {caseDetailsLabel}
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
