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
      const target = document.getElementById(id)
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
      // 키보드 사용자가 다음 Tab 으로 그 섹션 안을 이어서 읽을 수 있게 포커스도 옮김
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
      target.focus({ preventScroll: true })
      if (location.hash) history.replaceState(null, '', location.pathname + location.search)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
