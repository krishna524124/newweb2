import Link from 'next/link'
import { ArrowRight }                    from 'lucide-react'
import { Section, SectionLabel, Reveal } from '@/components/ui/PageHeader'

const previewSkills = [
  { name: 'Python',         level: 95 },
  { name: 'Machine Learning', level: 92 },
  { name: 'Deep Learning',  level: 88 },
  { name: 'Quant Finance',  level: 85 },
  { name: 'ESP32 / Arduino', level: 90 },
  { name: 'Raspberry Pi',   level: 85 },
]

export function SkillsPreview() {
  return (
    <Section className="bg-gradient-to-b from-transparent via-deep/40 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <SectionLabel>02 — Expertise</SectionLabel>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-4">
            The <em className="italic shimmer-gold">Arsenal</em>
          </h2>
          <p className="text-silver mb-12">Technologies I command at an exceptional level</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {previewSkills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.07}>
              <div className="glass rounded-xl p-4 text-left border border-white/5 hover:border-gold/20 transition-colors duration-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                  <span className="font-mono text-xs text-gold">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-navy-mid to-gold"
                    style={{ width: `${skill.level}%`, transition: 'width 1.4s cubic-bezier(0.16,1,0.3,1)' }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            href="/skills"
            className="group inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wide hover:gap-3 transition-all duration-200"
          >
            View Full Skill Set
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </Section>
  )
}
