'use client'

import { useEffect, useRef }              from 'react'
import { Section, SectionLabel, Reveal }  from '@/components/ui/PageHeader'
import { skillGroups }                    from '@/lib/data'

function AnimatedBar({ level }: { level: number }) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.width = level + '%'
        obs.disconnect()
      }
    }, { threshold: 0.4 })
    obs.observe(el.parentElement!)
    return () => obs.disconnect()
  }, [level])

  return (
    <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
      <div
        ref={barRef}
        className="h-full rounded-full bg-gradient-to-r from-navy-mid via-cyan to-gold"
        style={{ width: '0%', transition: 'width 1.4s cubic-bezier(0.16,1,0.3,1)' }}
      />
    </div>
  )
}

export function SkillsDisplay() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 0.1}>
            <div className="glass rounded-2xl p-7 border border-white/5 hover:border-gold/15 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-7">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-semibold text-white">{group.category}</h3>
              </div>

              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{skill.icon}</span>
                        <span className="text-sm text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="font-mono text-xs text-gold">{skill.level}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <AnimatedBar level={skill.level} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Tech cloud */}
      <Reveal className="mt-14">
        <div className="text-center mb-8">
          <SectionLabel>Also Familiar With</SectionLabel>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter', 'FastAPI',
            'Flask', 'React', 'Docker', 'Git', 'LaTeX', 'MATLAB', 'Verilog',
            'Bash', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'GCP', 'Linux',
          ].map(tech => (
            <span
              key={tech}
              className="glass px-4 py-2 rounded-full text-xs font-mono text-silver border border-white/6 hover:border-gold/25 hover:text-white transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
