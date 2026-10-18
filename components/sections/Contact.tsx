import { profile } from '@/content/profile'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section className={`wrap ${styles.section}`} aria-labelledby="contact-title" id="contact">
      <h2 id="contact-title" className={styles.title} data-reveal>
        Contact
      </h2>
      <ul className={styles.list}>
        {profile.links.map((l, i) => (
          <li key={l.href} data-reveal style={{ '--i': i + 1 } as React.CSSProperties}>
            <a className={styles.link} href={l.href} target="_blank" rel="noreferrer">
              <span className={styles.label}>{l.label}</span>
              <span className={styles.text}>{l.text}</span>
              <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
