'use client'

import { useEffect, useRef, useState } from 'react'
import { motion }                        from 'framer-motion'
import { Section, Reveal }              from '@/components/ui/PageHeader'
import { stats }                         from '@/lib/data'

function useCounter(target: number, duration = 2000) {
  const [count, setCount]     = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    const easeOut   = (t: number) => 1 - Math.pow(1 - t, 3)

    const step = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1)
      setCount(Math.round(easeOut(t) * target))
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return { count, setStarted }
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { count, setStarted } = useCounter(value)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.5 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [setStarted])

  return (
    <div ref={ref} className="text-center px-8">
      <div className="font-display font-light text-5xl lg:text-6xl text-white">
        {count}<span className="text-gold text-3xl">{suffix}</span>
      </div>
      <div className="font-mono text-xs text-muted uppercase tracking-widest mt-2">{label}</div>
    </div>
  )
}

export function StatsSection() {
  return (
    <Section className="py-16 lg:py-20">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl border border-white/5 bg-white/[0.02]" />
        <Reveal className="relative z-10 flex flex-wrap items-center justify-center divide-x divide-white/8 py-10">
          {stats.map((s, i) => (
            <StatItem key={i} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
