'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/content/profile'
import styles from './Nav.module.css'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { id: 'impact', label: 'Impact' },
  { id: 'ai', label: 'AI' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const [active, setActive] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // 화면 가운데보다 위로 올라간 마지막 섹션이 현재 위치. 페이지 끝에 닿으면 마지막 링크
  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter((el): el is HTMLElement => !!el)
    let frame = 0
    const update = () => {
      frame = 0
      setScrolled(window.scrollY > window.innerHeight * 0.6)
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      let current: string | null = atBottom ? links[links.length - 1].id : null
      if (!atBottom) for (const s of sections) if (s.getBoundingClientRect().top <= window.innerHeight / 2) current = s.id
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // 메뉴가 열린 채 넓은 화면이 되면 닫음. 안 닫으면 시트는 숨어도 스크롤 잠금이 남음
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 721px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // 메뉴가 열린 동안 뒤 페이지가 스크롤되지 않게 하고 Esc 로 닫음
  useEffect(() => {
    if (!open) return
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <nav className={styles.nav} data-scrolled={scrolled} data-open={open} aria-label="Main">
      <a className={styles.wordmark} href="#top" onClick={() => setOpen(false)}>
        {profile.handle}
      </a>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l.id}>
            <a href={`#${l.id}`} className={styles.link} aria-current={active === l.id ? 'location' : undefined}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <div id="mobile-menu" className={styles.sheet} hidden={!open}>
        <ul>
          {links.map((l, i) => (
            <li key={l.id} style={{ '--i': i }}>
              <a
                href={`#${l.id}`}
                className={styles.sheetLink}
                aria-current={active === l.id ? 'location' : undefined}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.sheetMail} style={{ '--i': links.length }}>
          {profile.links.map((l) => (
            <a key={l.href} className="link" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </p>
      </div>
    </nav>
  )
}
