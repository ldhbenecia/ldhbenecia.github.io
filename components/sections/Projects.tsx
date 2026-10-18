import { MetaList } from '@/components/ui/MetaList'
import { projects, type Project, type ProjectImage } from '@/content/projects'
import styles from './Projects.module.css'

// 이웃한 챕터가 같은 구성을 쓰지 않도록 프로젝트마다 고정
const layoutOf: Record<string, 'wide' | 'side' | 'pair' | 'pipeline' | 'text'> = {
  mono: 'wide',
  cairn: 'pair',
  morris: 'side',
  infra: 'pipeline',
  orbit: 'side',
  sent: 'text',
}

function Shot({ image, priority = false, className }: { image: ProjectImage; priority?: boolean; className?: string }) {
  return (
    <figure className={`${styles.shot} ${className ?? ''}`} data-shutter>
      <div className={image.framed ? styles.framed : styles.window}>
        {!image.framed && (
          <div className={styles.chrome} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      {image.caption && <figcaption className={styles.caption}>{image.caption}</figcaption>}
    </figure>
  )
}

function Head({ p }: { p: Project }) {
  return (
    <header className={styles.head}>
      <h2 className={styles.name} data-reveal>
        {p.name}
      </h2>
      <p className={styles.line} data-reveal style={{ '--i': 1 }}>
        {p.line}
      </p>
      <MetaList
        className={styles.meta}
        i={2}
        items={[
          { label: '역할', value: p.role },
          { label: '기간', value: p.years, num: true },
          { label: '기술', value: p.stack, wide: true },
          {
            label: '링크',
            value: (
              <span className={styles.links}>
                {p.links.map((l) => (
                  <a key={l.href} className="link" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </span>
            ),
          },
        ]}
      />
    </header>
  )
}

function Facts({ p }: { p: Project }) {
  if (!p.facts) return null
  return (
    <dl className={styles.facts}>
      {p.facts.map((f, i) => (
        <div key={f.label} data-reveal style={{ '--i': i }}>
          <dd className={`${styles.factValue} num`}>{f.value}</dd>
          <dt className={styles.factLabel}>{f.label}</dt>
        </div>
      ))}
    </dl>
  )
}

function Points({ p, columns = 2 }: { p: Project; columns?: 1 | 2 | 3 }) {
  return (
    <div className={styles.points} data-cols={columns}>
      {p.points.map((pt, i) => (
        <section key={pt.title} className={styles.point} data-reveal style={{ '--i': i % columns }}>
          <h3 className={styles.pointTitle}>{pt.title}</h3>
          <p>{pt.body}</p>
        </section>
      ))}
    </div>
  )
}

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <ol className={styles.pipeline} aria-label="배포 흐름">
      {steps.map((s, i) => (
        <li key={s} className={styles.step} data-reveal style={{ '--i': i }}>
          {s}
        </li>
      ))}
    </ol>
  )
}

function Chapter({ p }: { p: Project }) {
  const layout = layoutOf[p.id] ?? 'text'
  const [first, second] = p.images ?? []

  return (
    <article id={p.id} className={styles.chapter} data-layout={layout}>
      <div className="wrap">
        <Head p={p} />
      </div>

      {layout === 'wide' && first && (
        <>
          <Shot image={first} className={styles.wideShot} />
          <div className={`wrap ${styles.after}`}>
            <Facts p={p} />
            <Points p={p} />
            {second && <Shot image={second} className={styles.secondShot} />}
          </div>
        </>
      )}

      {layout === 'side' && first && (
        <div className={`wrap ${styles.side}`}>
          <Points p={p} columns={1} />
          <Shot image={first} className={styles.sideShot} />
        </div>
      )}

      {layout === 'pair' && first && (
        <div className={`wrap ${styles.pair}`}>
          <div className={styles.pairShots}>
            <Shot image={first} />
            {second && <Shot image={second} className={styles.pairSecond} />}
          </div>
          <div>
            <Facts p={p} />
            <Points p={p} columns={1} />
          </div>
        </div>
      )}

      {layout === 'pipeline' && (
        <div className={`wrap ${styles.after}`}>
          {p.pipeline && <Pipeline steps={p.pipeline} />}
          <Points p={p} />
        </div>
      )}

      {layout === 'text' && (
        <div className={`wrap ${styles.after}`}>
          <Points p={p} columns={3} />
        </div>
      )}
    </article>
  )
}

export function Projects() {
  return (
    <div className={styles.projects}>
      {projects.map((p) => (
        <Chapter key={p.id} p={p} />
      ))}
    </div>
  )
}
