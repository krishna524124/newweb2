'use client'

import { useEffect, useRef } from 'react'

export function Cursor() {
  const dotRef    = useRef<HTMLDivElement>(null)
  const ringRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return

    let mx = -100, my = -100, fx = -100, fy = -100

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
    }

    let raf: number
    const follow = () => {
      fx += (mx - fx) * 0.12
      fy += (my - fy) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = fx + 'px'
        ringRef.current.style.top  = fy + 'px'
      }
      raf = requestAnimationFrame(follow)
    }
    follow()

    document.addEventListener('mousemove', onMove, { passive: true })

    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width  = '52px'
        ringRef.current.style.height = '52px'
        ringRef.current.style.borderColor = 'rgba(200,167,97,0.8)'
      }
    }
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width  = '36px'
        ringRef.current.style.height = '36px'
        ringRef.current.style.borderColor = 'rgba(200,167,97,0.5)'
      }
    }

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  id="cursor" />
      <div ref={ringRef} id="cursor-ring" />
    </>
  )
}
