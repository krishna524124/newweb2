'use client'

import { useEffect, useRef, useState } from 'react'
import Link                              from 'next/link'
import { motion }                        from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { siteConfig }                    from '@/lib/data'

const WORDS = ['Physics Graduate', 'Data Science Builder', 'AI Innovator', 'Future Founder']

function useTypewriter(words: string[], speed = 55, pause = 1600) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx(w => (w + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? speed * 0.5 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export function HeroSection() {
  const typed = useTypewriter(WORDS)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!glowRef.current) return
      const xPct = (e.clientX / window.innerWidth  - 0.5) * 60
      const yPct = (e.clientY / window.innerHeight - 0.5) * 40
      glowRef.current.style.transform =
        `translate(calc(-50% + ${xPct}px), calc(-50% + ${yPct}px))`
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 w-[700px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(30,58,122,0.2) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
      />
      {/* Gold accent glow bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-[80px] bg-gold/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/25 bg-gold/5 font-mono text-xs text-gold tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for Collaboration
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-light leading-[0.92] tracking-tight mb-6"
            style={{ fontSize: 'clamp(4rem, 13vw, 9.5rem)' }}
          >
            <span className="block text-white">Krishna</span>
            <span className="block italic shimmer-gold">Yadav</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div variants={itemVariants} className="mb-6 h-8 flex items-center justify-center">
            <span className="font-mono text-sm sm:text-base text-silver tracking-widest">
              {typed}
              <span className="inline-block w-0.5 h-4 bg-gold ml-0.5 animate-pulse" />
            </span>
          </motion.div>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-silver text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Engineering intelligence at the intersection of physics, mathematics, and machine learning.
            Building systems that think. Creating products that matter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-black text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-gold hover:-translate-y-1"
            >
              View Projects
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/12 text-white text-sm font-medium rounded-full transition-all duration-300 hover:border-gold/50 hover:text-gold hover:bg-gold/5"
            >
              Get In Touch
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/12 text-silver text-sm font-medium rounded-full transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              <Download size={14} />
              Resume
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5"
          >
            {[
              { value: '15+', label: 'Projects Built' },
              { value: '5+',  label: 'Research Papers' },
              { value: '3+',  label: 'Years Experience' },
              { value: '20+', label: 'Technologies' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-light text-3xl text-white">{stat.value}</div>
                <div className="font-mono text-xs text-muted uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[0.6rem] text-muted tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-scroll-line" />
      </div>
    </section>
  )
}
