import styles from './MetaList.module.css'

export type MetaItem = { label: string; value: React.ReactNode; num?: boolean; wide?: boolean }

// 역할·기간·기술처럼 작은 라벨 아래 값을 두는 목록. 넓은 화면의 열 배치는 className 의 --cols 로
export function MetaList({ items, className, i }: { items: MetaItem[]; className?: string; i?: number }) {
  return (
    <dl className={`${styles.meta} ${className ?? ''}`} data-reveal style={{ '--i': i }}>
      {items.map((it) => (
        <div key={it.label} className={it.wide ? styles.wide : undefined}>
          <dt>{it.label}</dt>
          <dd className={it.num ? 'num' : undefined}>{it.value}</dd>
        </div>
      ))}
    </dl>
  )
}
