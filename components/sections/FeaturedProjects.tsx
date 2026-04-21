import Link from 'next/link'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import { Section, SectionLabel, Reveal }    from '@/components/ui/PageHeader'
import { projects }                          from '@/lib/data'

export function FeaturedProjects() {
  const featured = projects.filter(p => p.featured).slice(0, 3)

  return (
    <Section>
      <Reveal className="text-center mb-14">
        <SectionLabel>03 — Work</SectionLabel>
        <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-4">
          Featured <em className="italic shimmer-gold">Projects</em>
        </h2>
        <p className="text-silver max-w-xl mx-auto">
          A curated selection of systems, models, and innovations
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {featured.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.1}>
            <div className="group glass rounded-2xl p-6 border border-white/5 hover:border-gold/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover relative overflow-hidden h-full flex flex-col">
              {/* Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-gold/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="font-mono text-[0.65rem] text-gold tracking-widest mb-4">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="flex items-start justify-between mb-5">
                <span className="text-3xl">{project.icon}</span>
                <span className="text-[0.65rem] font-mono px-2 py-1 rounded-md bg-navy/40 border border-navy-mid/50 text-cyan">
                  {project.category}
                </span>
              </div>

              <h3 className="font-display text-xl font-light leading-snug tracking-tight mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-silver text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.slice(0, 3).map(t => (
                  <span key={t} className="text-[0.65rem] font-mono px-2 py-0.5 rounded border border-white/8 text-silver">
                    {t}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="flex gap-4 mb-5 pt-3 border-t border-white/5">
                {project.metrics.map(m => (
                  <div key={m.label}>
                    <div className="text-sm font-semibold text-gold">{m.value}</div>
                    <div className="font-mono text-[0.6rem] text-muted uppercase tracking-wide">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-silver hover:text-white transition-colors">
                    <Github size={13} /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gold hover:text-gold-light transition-colors">
                    <ExternalLink size={13} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="text-center">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all duration-200"
        >
          View All Projects
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </Section>
  )
}
