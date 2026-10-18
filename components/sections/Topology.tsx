'use client'

import { useEffect, useRef } from 'react'
import { topoEdges, topoNodes, type TopoNode } from '@/content/topology'
import styles from './Topology.module.css'

const COLORS = {
  line: 'rgba(60, 84, 128, 0.55)',
  lineHot: 'rgba(123, 159, 212, 0.9)',
  label: '#6f7889',
  labelHot: '#e6e9ee',
  pulse: '#9bb8e6',
  group: { platform: '#7b9fd4', msa: '#c3cbd8', morris: '#5b7bb0', app: '#8a93a3' } as Record<TopoNode['group'], string>,
}

const REPEL_RADIUS = 150
const HOVER_RADIUS = 26

type Body = TopoNode & { ax: number; ay: number; px: number; py: number; vx: number; vy: number; phase: number; flash: number }
type Pulse = { from: number; to: number; t: number; speed: number }

export function Topology({ statusId }: { statusId: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const host = canvas.parentElement as HTMLElement
    const status = document.getElementById(statusId)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // canvas 의 font 에는 CSS 변수를 쓸 수 없어 계산된 이름을 넣음
    const family = getComputedStyle(document.documentElement).getPropertyValue('--font-geist').trim() || 'system-ui'
    const labelFont = `500 12px ${family}, system-ui, sans-serif`

    const index = new Map(topoNodes.map((n, i) => [n.id, i]))
    const edges = topoEdges.map(([a, b]) => [index.get(a)!, index.get(b)!] as const)
    const neighbours = topoNodes.map((_, i) => new Set(edges.flatMap(([a, b]) => (a === i ? [b] : b === i ? [a] : []))))
    const bodies: Body[] = topoNodes.map((n, i) => ({ ...n, ax: 0, ay: 0, px: 0, py: 0, vx: 0, vy: 0, phase: i * 1.7, flash: 0 }))
    const pulses: Pulse[] = []

    let w = 0
    let h = 0
    let dpr = 1
    const mouse = { x: -9999, y: -9999 }
    let hovered = -1
    let raf = 0
    let running = false
    let last = performance.now()
    let spawnAt = 0
    let delivered = 0
    let rateAt = performance.now()

    // 좁은 화면은 그래프를 위쪽 전체 폭에, 넓은 화면은 문구가 놓이는 왼쪽 아래를 비워 둠
    const place = () => {
      const wide = w > 860
      for (const b of bodies) {
        b.ax = wide ? (0.44 + (b.x - 0.3) * 0.8) * w : (0.03 + (b.x - 0.3) * 1.05) * w
        b.ay = wide ? (0.14 + b.y * 0.66) * h : (0.12 + b.y * 0.44) * h
        if (b.px === 0 && b.py === 0) {
          b.px = b.ax
          b.py = b.ay
        }
      }
    }

    const resize = () => {
      const r = host.getBoundingClientRect()
      w = r.width
      h = r.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      place()
      if (!running) draw()
    }

    const spawn = () => {
      const [a, b] = edges[Math.floor(Math.random() * edges.length)]
      const forward = Math.random() > 0.35
      pulses.push({ from: forward ? a : b, to: forward ? b : a, t: 0, speed: 0.35 + Math.random() * 0.55 })
    }

    const step = (now: number, dt: number) => {
      for (const b of bodies) {
        const driftX = Math.sin(now / 2600 + b.phase) * 10
        const driftY = Math.cos(now / 3100 + b.phase) * 8
        let fx = (b.ax + driftX - b.px) * 0.012
        let fy = (b.ay + driftY - b.py) * 0.012
        const dx = b.px - mouse.x
        const dy = b.py - mouse.y
        const d = Math.hypot(dx, dy)
        if (d < REPEL_RADIUS && d > 0.01) {
          const push = (1 - d / REPEL_RADIUS) * 2.4
          fx += (dx / d) * push
          fy += (dy / d) * push
        }
        b.vx = (b.vx + fx) * 0.86
        b.vy = (b.vy + fy) * 0.86
        b.px += b.vx * dt * 60
        b.py += b.vy * dt * 60
        b.flash = Math.max(0, b.flash - dt * 1.6)
      }

      if (now > spawnAt) {
        spawn()
        spawnAt = now + 140 + Math.random() * 260
      }
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.t += dt * p.speed
        if (p.t >= 1) {
          bodies[p.to].flash = 1
          delivered++
          pulses.splice(i, 1)
        }
      }

      if (status && now - rateAt > 1000) {
        status.textContent = `노드 ${bodies.length}개 · 초당 요청 ${Math.round((delivered * 1000) / (now - rateAt))}`
        delivered = 0
        rateAt = now
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      hovered = -1
      let best = HOVER_RADIUS
      bodies.forEach((b, i) => {
        const d = Math.hypot(b.px - mouse.x, b.py - mouse.y)
        if (d < best) {
          best = d
          hovered = i
        }
      })
      const hot = hovered >= 0 ? neighbours[hovered] : null

      ctx.lineWidth = 1
      for (const [a, b] of edges) {
        const isHot = hovered === a || hovered === b
        ctx.strokeStyle = isHot ? COLORS.lineHot : COLORS.line
        ctx.beginPath()
        ctx.moveTo(bodies[a].px, bodies[a].py)
        ctx.lineTo(bodies[b].px, bodies[b].py)
        ctx.stroke()
      }

      for (const p of pulses) {
        const a = bodies[p.from]
        const b = bodies[p.to]
        const t = p.t
        const x = a.px + (b.px - a.px) * t
        const y = a.py + (b.py - a.py) * t
        const tx = a.px + (b.px - a.px) * Math.max(0, t - 0.08)
        const ty = a.py + (b.py - a.py) * Math.max(0, t - 0.08)
        const trail = ctx.createLinearGradient(tx, ty, x, y)
        trail.addColorStop(0, 'rgba(155, 184, 230, 0)')
        trail.addColorStop(1, 'rgba(155, 184, 230, 0.9)')
        ctx.strokeStyle = trail
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.fillStyle = COLORS.pulse
        ctx.beginPath()
        ctx.arc(x, y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.font = labelFont
      ctx.textBaseline = 'middle'
      bodies.forEach((b, i) => {
        const isHover = i === hovered
        const isNear = hot?.has(i) ?? false
        if (b.flash > 0) {
          ctx.fillStyle = `rgba(123, 159, 212, ${b.flash * 0.22})`
          ctx.beginPath()
          ctx.arc(b.px, b.py, 4 + (1 - b.flash) * 14, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.fillStyle = COLORS.group[b.group]
        ctx.beginPath()
        ctx.arc(b.px, b.py, isHover ? 6 : 3.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = isHover || isNear ? COLORS.labelHot : COLORS.label
        ctx.fillText(b.label, b.px + 10, b.py)
      })
      host.style.cursor = hovered >= 0 ? 'crosshair' : ''
    }

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      step(now, dt)
      draw()
      raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (running || reduced) return
      running = true
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
      if (reduced) draw()
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
      if (reduced) draw()
    }
    const onVisibility = () => (document.hidden ? stop() : start())

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(host)
    // 화면 밖에 있을 때는 그리지 않음
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()))
    io.observe(host)
    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    if (reduced && status) status.textContent = `노드 ${bodies.length}개`

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [statusId])

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
}
