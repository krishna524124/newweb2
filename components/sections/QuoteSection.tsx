import Link from 'next/link'
import { ArrowRight }                  from 'lucide-react'
import { Section, Reveal }             from '@/components/ui/PageHeader'

/* ── QUOTE SECTION ───────────────────────────── */
export function QuoteSection() {
  return (
    <Section className="py-20 lg:py-28">
      <Reveal className="max-w-4xl mx-auto text-center">
        <div className="relative glass rounded-3xl px-8 py-16 sm:px-16 border border-white/5">
          {/* Decorative glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-navy/20 via-transparent to-gold/5 pointer-events-none" />

          <p className="font-mono text-xs text-gold uppercase tracking-widest mb-8">Philosophy</p>
          <blockquote className="font-display font-light text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-white mb-8">
            <span className="text-gold text-6xl leading-none">"</span>
            <br />
            The best way to predict the future is to build it.
            <br />
            <span className="text-gold text-6xl leading-none float-right">"</span>
          </blockquote>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-8 h-px bg-gold/40" />
            <span className="font-mono text-xs text-silver tracking-widest">KRISHNA YADAV</span>
            <div className="w-8 h-px bg-gold/40" />
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

/* ── CTA SECTION ─────────────────────────────── */
export function CtaSection() {
  return (
    <Section className="py-20 lg:py-28">
      <Reveal className="text-center max-w-3xl mx-auto">
        <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-6">
          Ready to Build Something <em className="italic shimmer-gold">Extraordinary?</em>
        </h2>
        <p className="text-silver text-lg leading-relaxed mb-10">
          Open to research collaborations, founding roles, and exceptional opportunities.
          Let's create something that matters.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-semibold rounded-full transition-all duration-300 hover:shadow-gold hover:-translate-y-1"
          >
            Start a Conversation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/12 text-white font-medium rounded-full transition-all duration-300 hover:border-gold/40 hover:text-gold"
          >
            Explore My Work
          </Link>
        </div>
      </Reveal>
    </Section>
  )
}
