'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Lightbox.module.css'

type Item = { src: string; alt: string }

// 페이지에 하나만 둠. [data-zoom-group] 버튼을 누르면 같은 그룹의 이미지들을 크게 보여 줌
export function Lightbox() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)
  const [items, setItems] = useState<Item[]>([])
  const [index, setIndex] = useState(0)

  const move = useCallback((d: number) => setIndex((i) => (i + d + items.length) % items.length), [items.length])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const btn = (e.target as Element).closest?.<HTMLElement>('[data-zoom-group]')
      if (!btn) return
      const group = [...document.querySelectorAll<HTMLElement>(`[data-zoom-group="${btn.dataset.zoomGroup}"]`)]
      setItems(group.map((b) => ({ src: b.querySelector('img')!.currentSrc || b.querySelector('img')!.src, alt: b.querySelector('img')!.alt })))
      setIndex(group.indexOf(btn))
      openerRef.current = btn
      dialogRef.current?.showModal()
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onKey = (e: KeyboardEvent) => {
      if (!dialog.open || items.length < 2) return
      if (e.key === 'ArrowRight') move(1)
      if (e.key === 'ArrowLeft') move(-1)
    }
    // 닫히면 연 버튼으로 포커스를 돌려 읽던 자리를 잃지 않게
    const onClose = () => openerRef.current?.focus()
    window.addEventListener('keydown', onKey)
    dialog.addEventListener('close', onClose)
    return () => {
      window.removeEventListener('keydown', onKey)
      dialog.removeEventListener('close', onClose)
    }
  }, [items.length, move])

  const item = items[index]

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label="화면 크게 보기"
      // 이미지 바깥(배경)을 누르면 닫음
      onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
    >
      {item && (
        <figure className={styles.figure} onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}>
          <img key={item.src} src={item.src} alt={item.alt} className={styles.image} />
          <figcaption className={styles.caption}>
            <span>{item.alt}</span>
            {items.length > 1 && (
              <span className="num">
                {index + 1} / {items.length}
              </span>
            )}
          </figcaption>
        </figure>
      )}

      <button type="button" className={`${styles.control} ${styles.close}`} onClick={() => dialogRef.current?.close()} aria-label="닫기">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
      {items.length > 1 && (
        <>
          <button type="button" className={`${styles.control} ${styles.prev}`} onClick={() => move(-1)} aria-label="이전 화면">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>
          <button type="button" className={`${styles.control} ${styles.next}`} onClick={() => move(1)} aria-label="다음 화면">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </>
      )}
    </dialog>
  )
}
