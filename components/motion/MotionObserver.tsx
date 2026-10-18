'use client'

import { useEffect } from 'react'

// [data-reveal], [data-shutter] 요소가 화면에 들어오면 is-in 을 한 번만 붙임
export function MotionObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-shutter]')
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
