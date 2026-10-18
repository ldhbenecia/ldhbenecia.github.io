import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Donghyeok Lim
      </p>
      <p className={styles.built}>Built with Next.js · GitHub Pages</p>
      <a className="link" href="#top">
        Back to top
      </a>
    </footer>
  )
}
