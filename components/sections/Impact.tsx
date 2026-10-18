import { impact, impactTitle, type ImpactRow } from '@/content/impact'
import styles from './Impact.module.css'

function groupByYear(rows: ImpactRow[]) {
  const groups = new Map<string, ImpactRow[]>()
  for (const r of rows) {
    const list = groups.get(r.year)
    if (list) list.push(r)
    else groups.set(r.year, [r])
  }
  return [...groups.entries()]
}

export function Impact() {
  return (
    <section className={`wrap ${styles.section}`} aria-labelledby="impact-title" id="impact">
      <h2 id="impact-title" className={styles.title} data-reveal>
        {impactTitle}
      </h2>

      <table className={styles.table} data-reveal style={{ '--i': 1 }}>
        <caption className="visually-hidden">개선 전후 실측값</caption>
        <thead className="visually-hidden">
          <tr>
            <th scope="col">연도</th>
            <th scope="col">어디서</th>
            <th scope="col">무엇을</th>
            <th scope="col">이전 → 이후</th>
          </tr>
        </thead>
        {/* 연도마다 tbody 하나. 연도 칸이 그 묶음 전체의 머리글 */}
        {groupByYear(impact).map(([year, rows]) => (
          <tbody key={year} className={styles.group}>
            {rows.map((r, i) => (
              <tr key={r.what} className={styles.row}>
                {i === 0 && (
                  <th scope="rowgroup" rowSpan={rows.length} className={`${styles.year} num`}>
                    {year}
                  </th>
                )}
                <td className={styles.where}>{r.where}</td>
                <td className={styles.what}>{r.what}</td>
                <td className={`${styles.delta} num`}>
                  <span className={styles.before}>{r.before}</span>
                  <span aria-hidden="true"> → </span>
                  <span className="visually-hidden"> 에서 </span>
                  <span className={styles.after}>{r.after}</span>
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </section>
  )
}
