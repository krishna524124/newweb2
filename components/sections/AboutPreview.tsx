import Link from 'next/link'
import { ArrowRight }              from 'lucide-react'
import { Section, SectionLabel, Reveal } from '@/components/ui/PageHeader'

export function AboutPreview() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left — portrait / visual */}
        <Reveal direction="left">
          <div className="relative flex justify-center lg:justify-start">
            {/* Rings */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy to-surface2 flex items-center justify-center">
                <span className="font-display italic font-light text-7xl text-gold">KY</span>
              </div>
              {['-16px', '-32px', '-52px'].map((inset, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-gold/15"
                  style={{
                    inset,
                    animation: `spin ${12 + i * 6}s linear infinite ${i % 2 === 1 ? 'reverse' : ''}`,
                  }}
                />
              ))}
            </div>

            {/* Status card */}
            <div className="absolute bottom-0 right-0 sm:right-8 glass rounded-xl px-4 py-3 flex flex-col gap-1">
              <span className="font-mono text-[0.6rem] text-muted uppercase tracking-widest">Status</span>
              <span className="flex items-center gap-2 text-green-400 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_#4ade80]" />
                Building the Future
              </span>
            </div>
          </div>
        </Reveal>

        {/* Right — text */}
        <Reveal direction="right" delay={0.1}>
          <SectionLabel>01 — About</SectionLabel>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
            Where Physics Meets<br />
            <em className="italic shimmer-gold">Artificial Intelligence</em>
          </h2>
          <p className="text-silver leading-relaxed mb-4">
            I'm Krishna Yadav — a physics graduate who discovered that the same mathematical elegance
            governing the cosmos also powers the algorithms shaping our digital world.
          </p>
          <p className="text-silver leading-relaxed mb-8">
            From designing quantitative trading models that read market signals like waveforms, to
            engineering embedded systems that breathe life into hardware — I treat every problem as a
            system to be understood, optimized, and transcended.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['⚛ Physics Mindset', '🤖 AI Architecture', '🚀 Founder Vision'].map(p => (
              <span key={p} className="glass px-4 py-2 rounded-full text-sm text-silver border border-white/8">
                {p}
              </span>
            ))}
          </div>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wide hover:gap-3 transition-all duration-200"
          >
            Read Full Story
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </Section>
  )
}
