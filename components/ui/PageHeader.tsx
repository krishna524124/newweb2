'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence }      from 'framer-motion'
import { ArrowUp }                       from 'lucide-react'
import { cn }                            from '@/lib/utils'

/* ── SCROLL PROGRESS BAR ─────────────────────── */
export function ScrollBar() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0
      if (barRef.current) barRef.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      ref={barRef}
      id="scroll-progress"
      style={{ width: '0%' }}
    />
  )
}

/* ── BACK TO TOP ─────────────────────────────── */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1,   y: 0  }}
          exit={{    opacity: 0, scale: 0.8, y: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-6 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-gold text-black shadow-gold hover:scale-110 transition-transform duration-200"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* ── PAGE HEADER ─────────────────────────────── */
interface PageHeaderProps {
  badge:       string
  title:       string
  titleAccent: string
  subtitle:    string
}

export function PageHeader({ badge, title, titleAccent, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-navy/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/25 bg-gold/5 font-mono text-xs text-gold tracking-widest mb-8"
        >
          {badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-light text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight"
        >
          {title}{' '}
          <span className="italic shimmer-gold">{titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0  }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-silver text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}

/* ── SECTION WRAPPER ─────────────────────────── */
interface SectionProps {
  id?:       string
  className?: string
  children:  React.ReactNode
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('relative py-24 lg:py-32 z-10', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

/* ── SECTION LABEL ───────────────────────────── */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs text-gold tracking-widest uppercase mb-5">
      {children}
    </p>
  )
}

/* ── REVEAL WRAPPER ──────────────────────────── */
interface RevealProps {
  children:   React.ReactNode
  delay?:     number
  className?: string
  direction?: 'up' | 'left' | 'right'
}

export function Reveal({ children, delay = 0, className, direction = 'up' }: RevealProps) {
  const initial = {
    up:    { opacity: 0, y: 40  },
    left:  { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40  },
  }[direction]

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
