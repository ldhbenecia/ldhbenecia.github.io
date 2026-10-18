'use client'

import { useEffect } from 'react'
import { prefersReducedMotion } from '@/lib/motion'

// 페이지 안 링크는 주소에 #id 를 남기지 않고 해당 위치로 스크롤만 함
export function AnchorScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as Element).closest?.('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute('href')!.slice(1)
      const target = id === 'top' ? document.body : document.getElementById(id)
      if (!target) return
      e.preventDefault()
      const reduced = prefersReducedMotion()
      if (id === 'top') window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
      else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
      if (location.hash) history.replaceState(null, '', location.pathname + location.search)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
