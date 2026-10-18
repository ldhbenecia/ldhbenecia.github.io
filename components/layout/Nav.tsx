'use client'

import { useEffect, useState } from 'react'
import { profile } from '@/content/profile'
import styles from './Nav.module.css'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { id: 'impact', label: '성과' },
  { id: 'work', label: '경력' },
  { id: 'projects', label: '프로젝트' },
  { id: 'about', label: '소개' },
  { id: 'contact', label: '연락' },
]

export function Nav() {
  const [active, setActive] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6)
      // 연락처는 짧아서 가운데 띠에 닿기 전에 페이지가 끝남
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) setActive('contact')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // 화면 가운데 띠에 걸친 섹션을 현재 위치로 봄
    const sections = links.map((l) => document.getElementById(l.id)).filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
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
    <nav className={styles.nav} data-scrolled={scrolled} data-open={open} aria-label="주요 메뉴">
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
        aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <div id="mobile-menu" className={styles.sheet} hidden={!open}>
        <ul>
          {links.map((l, i) => (
            <li key={l.id} style={{ '--i': i } as React.CSSProperties}>
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
        <p className={styles.sheetMail} style={{ '--i': links.length } as React.CSSProperties}>
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
