import { Section, SectionLabel, Reveal } from '@/components/ui/PageHeader'
import { timeline }                       from '@/lib/data'
import { cn }                             from '@/lib/utils'

/* ── ABOUT STORY ─────────────────────────────── */
export function AboutStory() {
  const pillars = [
    { icon: '⚛', title: 'Physics Mindset',   desc: 'First-principles thinking applied to every challenge. Every system obeys laws — find them, and you can reshape them.' },
    { icon: '🤖', title: 'AI Architecture',   desc: 'Building intelligent systems from the ground up — not using AI, but engineering it from mathematical fundamentals.' },
    { icon: '📊', title: 'Quantitative Rigor', desc: 'Markets are noisy signals. Statistical mechanics taught me to find the signal, model it, and extract consistent edge.' },
    { icon: '⚡', title: 'Hardware Fluency',   desc: 'Silicon, sensors, and embedded firmware — bridging the gap between digital intelligence and physical reality.' },
    { icon: '✍', title: 'Research Depth',     desc: 'Writing forces clarity of thought. I publish research to crystallize understanding and contribute to the commons.' },
    { icon: '🚀', title: 'Founder Vision',     desc: 'Turning research into products that scale. Building a deep-tech company is the north star that guides every decision.' },
  ]

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <SectionLabel>The Story</SectionLabel>
          <h2 className="font-display font-light text-4xl sm:text-5xl leading-tight tracking-tight mb-8">
            A Physicist Who Builds
          </h2>
        </Reveal>
        <div className="space-y-5 text-silver text-base leading-relaxed mb-16">
          {[
            "It started with a question: why does the universe follow such beautiful mathematical laws? That question led me to physics, and physics led me everywhere.",
            "In my second year of university, I encountered neural networks and realized something profound — the mathematics of learning systems mirrors the mathematics of physical systems. Both are governed by energy minimisation, gradient flows, and emergent complexity.",
            "That insight became an obsession. I began building: ML models that borrowed physics intuitions, trading algorithms that treated markets as statistical mechanical systems, embedded devices that turned equations into physical actions.",
            "Today I work at the frontier of AI, quantitative finance, hardware engineering, and research — not because I was told to, but because each domain revealed the next. This is what physics teaches you: everything is connected, if you look deep enough.",
          ].map((para, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p>{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="font-display font-light text-3xl mb-8">Core Pillars</h3>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="glass rounded-xl p-5 border border-white/5 hover:border-gold/20 transition-all duration-300 hover:-translate-y-1 h-full">
                <span className="text-2xl mb-3 block">{p.icon}</span>
                <h4 className="font-semibold text-white text-sm mb-2">{p.title}</h4>
                <p className="text-silver text-xs leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ── TIMELINE ─────────────────────────────────── */
export function TimelineSection() {
  const typeColors: Record<string, string> = {
    education: 'border-cyan text-cyan',
    work:      'border-gold text-gold',
    milestone: 'border-green-400 text-green-400',
  }

  return (
    <Section className="bg-gradient-to-b from-transparent via-deep/30 to-transparent">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionLabel>Journey</SectionLabel>
          <h2 className="font-display font-light text-4xl sm:text-5xl tracking-tight">
            The <em className="italic shimmer-gold">Timeline</em>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent sm:-translate-x-px" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={cn(
                  'relative flex gap-6 sm:gap-0',
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                )}>
                  {/* Dot */}
                  <div className="absolute left-5 sm:left-1/2 w-3 h-3 rounded-full bg-surface border-2 border-gold/50 -translate-x-1/2 mt-1.5 z-10" />

                  {/* Content */}
                  <div className={cn(
                    'ml-12 sm:ml-0 sm:w-[45%]',
                    i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:ml-auto'
                  )}>
                    <div className="glass rounded-xl p-5 border border-white/5 hover:border-gold/15 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="font-mono text-xs text-gold font-bold">{item.year}</span>
                        <span className={cn(
                          'text-[0.6rem] font-mono uppercase tracking-wider border rounded-full px-2 py-0.5',
                          typeColors[item.type]
                        )}>
                          {item.type}
                        </span>
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                      <p className="font-mono text-xs text-gold/70 mb-2">{item.org}</p>
                      <p className="text-silver text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ── VISION ───────────────────────────────────── */
export function VisionSection() {
  const cards = [
    { icon: '🎯', phase: 'Short Term',  text: 'Master AI/ML systems, publish impactful research, build open-source tools, and work with world-class teams on frontier problems.' },
    { icon: '🌍', phase: 'Mid Term',    text: 'Launch an AI product used by 100K+ users. Secure funding. Build a team of exceptional people. Establish deep-tech credibility.' },
    { icon: '🚀', phase: 'Long Term',   text: 'Found a company building autonomous AI infrastructure — technology that changes industries, creates abundance, and outlasts its founders.' },
  ]

  return (
    <Section>
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <SectionLabel>Vision</SectionLabel>
          <h2 className="font-display font-light text-4xl sm:text-5xl tracking-tight mb-6">
            Not Just Building Products.<br />
            <em className="italic shimmer-gold">Building the Future.</em>
          </h2>
          <p className="text-silver text-lg leading-relaxed max-w-2xl mx-auto mb-14">
            My goal is not merely to be an engineer. I'm on a path to found a deep-tech company
            at the convergence of AI, physics simulation, and autonomous systems.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.phase} delay={i * 0.1}>
              <div className="glass rounded-2xl p-7 text-left border border-white/5 hover:border-gold/20 transition-all duration-300 hover:-translate-y-1">
                <span className="text-3xl mb-4 block">{c.icon}</span>
                <h4 className="font-mono text-xs text-gold uppercase tracking-widest mb-3">{c.phase}</h4>
                <p className="text-silver text-sm leading-relaxed">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
