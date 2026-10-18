import { profile } from '@/content/profile'
import styles from './Contact.module.css'

const rows = [
  { label: 'GitHub', text: 'github.com/ldhbenecia', href: profile.github },
  { label: '블로그', text: 'velog.io/@ldhbenecia', href: profile.blog },
  { label: 'LinkedIn', text: 'linkedin.com/in/ldhbenecia', href: profile.linkedin },
]

export function Contact() {
  return (
    <section className={styles.section} aria-label="연락처" id="contact">
      <ul>
        {rows.map((r, i) => (
          <li key={r.href} className={styles.row} data-reveal style={{ '--i': i } as React.CSSProperties}>
            <a className={styles.link} href={r.href} target="_blank" rel="noreferrer" aria-label={`${r.label} ${r.text}`}>
              {r.text}
            </a>
          </li>
        ))}
        <li className={`${styles.row} ${styles.greet}`} data-reveal style={{ '--i': 3 } as React.CSSProperties}>
          <a className={styles.greetLink} href={`mailto:${profile.email}`}>
            <span>안녕하세요</span>
            <span className={styles.arrow} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
            <span className="visually-hidden">메일 보내기</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
