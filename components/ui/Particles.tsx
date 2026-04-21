'use client'

import { useEffect, useRef } from 'react'

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0, animId = 0
    const COUNT = window.innerWidth < 768 ? 50 : 110

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    class Particle {
      x = 0; y = 0; r = 0; vx = 0; vy = 0
      alpha = 0; maxAlpha = 0; fadeSpeed = 0
      fading = false; gold = false

      constructor(init = false) { this.reset(init) }

      reset(init = false) {
        this.x  = Math.random() * W
        this.y  = init ? Math.random() * H : H + 10
        this.r  = Math.random() * 1.2 + 0.3
        this.vx = (Math.random() - 0.5) * 0.22
        this.vy = -(Math.random() * 0.3 + 0.08)
        this.alpha    = 0
        this.maxAlpha = Math.random() * 0.4 + 0.08
        this.fadeSpeed = Math.random() * 0.003 + 0.002
        this.fading = false
        this.gold = Math.random() > 0.6
      }

      update() {
        this.x += this.vx; this.y += this.vy
        if (!this.fading && this.alpha < this.maxAlpha) this.alpha += this.fadeSpeed
        if (this.y < H * 0.25 || this.alpha >= this.maxAlpha) this.fading = true
        if (this.fading) this.alpha -= this.fadeSpeed * 1.3
        if (this.alpha <= 0) this.reset()
      }

      draw() {
        if (!ctx) return
        ctx.globalAlpha = Math.max(0, this.alpha)
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.gold ? '#c8a761' : '#3a7bd5'
        ctx.fill()
      }
    }

    const particles = Array.from({ length: COUNT }, (_, i) => new Particle(i < COUNT))

    const drawConnections = () => {
      const D = 110
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < D && ctx) {
            const a = (1 - dist / D) * 0.05 * Math.min(particles[i].alpha, particles[j].alpha)
            ctx.globalAlpha = a
            ctx.strokeStyle = '#c8a761'
            ctx.lineWidth = 0.4
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const loop = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { p.update(); p.draw() })
      drawConnections()
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      aria-hidden="true"
    />
  )
}
