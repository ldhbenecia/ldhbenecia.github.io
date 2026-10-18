import { shelf, tagLabel } from '@/content/shelf'
import styles from './Shelf.module.css'

export function Shelf() {
  return (
    <section className={`wrap ${styles.section}`} aria-labelledby="shelf-title">
      <div className={styles.head} data-reveal>
        <h2 id="shelf-title" className={styles.title}>
          만든 것 전부
        </h2>
        <p className={styles.note}>공개 저장소 {shelf.length}개. 옆으로 넘기고, 책등을 누르면 GitHub으로 갑니다.</p>
      </div>
      <ul className={styles.shelf} data-reveal style={{ '--i': 1 } as React.CSSProperties}>
        {shelf.map((s) => (
          <li key={s.href}>
            <a className={styles.spine} data-tag={s.tag} href={s.href} target="_blank" rel="noreferrer">
              <span className={styles.spineName}>{s.name}</span>
              <span className={styles.spineTag}>{tagLabel[s.tag]}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
