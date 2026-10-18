import { Fragment } from 'react'
import { impact, type ImpactRow } from '@/content/impact'
import styles from './Impact.module.css'

function groupByYear(rows: ImpactRow[]) {
  const groups = new Map<string, ImpactRow[]>()
  for (const r of rows) groups.set(r.year, [...(groups.get(r.year) ?? []), r])
  return [...groups.entries()]
}

export function Impact() {
  const groups = groupByYear(impact)
  return (
    <section className={`wrap ${styles.section}`} aria-labelledby="impact-title" id="impact">
      <h2 id="impact-title" className={styles.title} data-reveal>
        <span>고친 것과</span>
        <span className={styles.indent}>잰 것</span>
      </h2>

      <table className={styles.table} data-reveal style={{ '--i': 1 } as React.CSSProperties}>
        <caption className="visually-hidden">개선 전후 실측값</caption>
        <thead className="visually-hidden">
          <tr>
            <th scope="col">연도</th>
            <th scope="col">어디서</th>
            <th scope="col">무엇을</th>
            <th scope="col">이전 → 이후</th>
          </tr>
        </thead>
        <tbody>
          {groups.map(([year, rows], gi) => (
            <Fragment key={year}>
              {gi > 0 && (
                <tr className={styles.spacer} aria-hidden="true">
                  <td colSpan={4} />
                </tr>
              )}
              {rows.map((r, i) => (
                <tr key={r.what} className={styles.row}>
                  <td className={`${styles.year} ${i === 0 ? styles.yearShown : ''} num`}>{i === 0 ? year : <span className="visually-hidden">{year}</span>}</td>
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
            </Fragment>
          ))}
        </tbody>
      </table>
    </section>
  )
}
