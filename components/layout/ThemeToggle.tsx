'use client'

import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { prefersReducedMotion } from '@/lib/motion'
import styles from './ThemeToggle.module.css'

type Theme = 'light' | 'dark'

const current = (): Theme => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')

// 브라우저 상단 색을 시스템 설정이 아니라 지금 고른 테마의 바탕색에 맞춤
const syncThemeColor = () => {
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', bg))
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    setTheme(current())
    syncThemeColor()
    // 직접 고른 적이 없으면 시스템 설정 변경을 그대로 따라감
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const onSystem = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem('theme')) return
      } catch {}
      document.documentElement.dataset.theme = e.matches ? 'light' : 'dark'
      syncThemeColor()
      setTheme(current())
    }
    mq.addEventListener('change', onSystem)
    return () => mq.removeEventListener('change', onSystem)
  }, [])

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = current() === 'light' ? 'dark' : 'light'
    const apply = () => {
      document.documentElement.dataset.theme = next
      syncThemeColor()
      try {
        localStorage.setItem('theme', next)
      } catch {}
      flushSync(() => setTheme(next))
    }

    const reduced = prefersReducedMotion()
    if (!document.startViewTransition || reduced) {
      apply()
      return
    }

    // 누른 버튼에서 원이 퍼지며 새 테마가 드러남. 반지름은 가장 먼 모서리까지
    const r = e.currentTarget.getBoundingClientRect()
    const x = r.left + r.width / 2
    const y = r.top + r.height / 2
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    const root = document.documentElement
    root.classList.add('vt')
    const transition = document.startViewTransition(apply)
    transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        {
          duration: 650,
          easing: getComputedStyle(root).getPropertyValue('--ease-in-out').trim(),
          pseudoElement: '::view-transition-new(root)',
        },
      )
    })
    transition.finished.finally(() => root.classList.remove('vt'))
  }

  const label = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'

  return (
    <button type="button" className={styles.toggle} onClick={toggle} aria-label={label} title={label} data-theme={theme ?? 'dark'}>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <mask id="theme-moon">
          <rect width="24" height="24" fill="#fff" />
          <circle className={styles.cut} cx="17" cy="7" r="6" fill="#000" />
        </mask>
        <circle className={styles.core} cx="12" cy="12" r="5" mask="url(#theme-moon)" fill="currentColor" />
        <g className={styles.rays} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
        </g>
      </svg>
    </button>
  )
}
