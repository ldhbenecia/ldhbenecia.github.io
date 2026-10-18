import { profile } from '@/content/profile'
import styles from './Footer.module.css'

export function Footer() {
  const [local, domain] = profile.email.split('@')
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.notes}>
          <p className={styles.wordmark}>{profile.handle}</p>
          <p>임동혁 · Backend Engineer → SRE·DevOps</p>
          <p>서울</p>
        </div>
        <a className="link" href="#top">
          맨 위로
        </a>
      </div>

      <a className={styles.mail} href={`mailto:${profile.email}`}>
        <span>{local}</span>
        <span>@{domain}</span>
      </a>

      <div className={styles.meta}>
        <p className={styles.links}>
          <a className="link" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="link" href={profile.blog} target="_blank" rel="noreferrer">
            velog
          </a>
          <a className="link" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
        <p>Next.js 정적 빌드 · GitHub Pages</p>
        <p className="num">Seoul {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
