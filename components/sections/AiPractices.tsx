import { aiPractices } from '@/content/ai'
import styles from './AiPractices.module.css'

export function AiPractices() {
  return (
    <section className={`wrap ${styles.section}`} aria-labelledby="ai-title" id="ai">
      <h2 id="ai-title" className={styles.title} data-reveal>
        {aiPractices.title}
      </h2>
      <p className={styles.lead} data-reveal style={{ '--i': 1 }}>
        {aiPractices.lead}
      </p>
      <ul className={styles.list}>
        {aiPractices.items.map((a, i) => (
          <li key={a.title} className={styles.item} data-reveal style={{ '--i': i % 2 }}>
            <h3 className={styles.itemTitle}>{a.title}</h3>
            <p>{a.body}</p>
            <p className={styles.where}>{a.where}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
