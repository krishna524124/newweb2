'use client'

import { useState }                          from 'react'
import { motion, AnimatePresence }           from 'framer-motion'
import { Github, ExternalLink }              from 'lucide-react'
import { Section, Reveal }                   from '@/components/ui/PageHeader'
import { projects, type ProjectCategory }    from '@/lib/data'
import { cn }                                from '@/lib/utils'

const ALL_CATS: ('All' | ProjectCategory)[] = [
  'All', 'AI / ML', 'Quant Finance', 'Hardware', 'Research', 'Web Dev',
]

export function ProjectsGrid() {
  const [active, setActive] = useState<'All' | ProjectCategory>('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <Section>
      {/* Filter tabs */}
      <Reveal className="flex flex-wrap justify-center gap-2 mb-12">
        {ALL_CATS.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              'px-4 py-2 text-xs font-medium rounded-full border transition-all duration-300',
              active === cat
                ? 'bg-gold border-gold text-black'
                : 'border-white/10 text-silver hover:border-gold/40 hover:text-white'
            )}
          >
            {cat}
          </button>
        ))}
      </Reveal>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{   opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x  = e.clientX - rect.left
    const y  = e.clientY - rect.top
    const cx = rect.width  / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -5
    const rotY = ((x - cx) / cx) *  5
    e.currentTarget.style.transform =
      `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`
  }
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = ''
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group glass rounded-2xl p-6 border border-white/5 hover:border-gold/20 transition-all duration-500 hover:shadow-card-hover relative overflow-hidden flex flex-col h-full"
      style={{ transition: 'transform 0.15s ease, box-shadow 0.5s ease, border-color 0.5s ease' }}
    >
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-gold/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="font-mono text-[0.65rem] text-gold tracking-widest mb-4">
        {String(index + 1).padStart(2, '0')}
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

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.map(t => (
          <span key={t} className="text-[0.65rem] font-mono px-2 py-0.5 rounded border border-white/8 text-silver">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mb-5 pt-4 border-t border-white/5">
        {project.metrics.map(m => (
          <div key={m.label}>
            <div className="text-sm font-semibold text-gold">{m.value}</div>
            <div className="font-mono text-[0.6rem] text-muted uppercase tracking-wide">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-silver hover:text-white transition-colors">
            <Github size={13} /> Source
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
  )
}
