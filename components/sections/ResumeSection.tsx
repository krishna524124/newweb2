import { Download, GraduationCap, Briefcase, Award } from 'lucide-react'
import { Section, SectionLabel, Reveal }             from '@/components/ui/PageHeader'
import { timeline }                                   from '@/lib/data'
import { cn }                                         from '@/lib/utils'

const education = [
  {
    degree: 'BSc Physics',
    institution: 'University (India)',
    year: '2020 – 2024',
    details: ['Computational Physics', 'Statistical Mechanics', 'Quantum Mechanics', 'Mathematical Modeling'],
  },
]

const certifications = [
  { name: 'Deep Learning Specialization',    org: 'Coursera / deeplearning.ai', year: '2023' },
  { name: 'Machine Learning with Python',    org: 'IBM / Coursera',             year: '2022' },
  { name: 'Quantitative Finance Fundamentals', org: 'Self-Study + CQF Materials', year: '2023' },
  { name: 'Embedded Systems with Arduino',   org: 'Arduino Project Hub',        year: '2021' },
]

export function ResumeSection() {
  return (
    <Section>
      {/* Download band */}
      <Reveal>
        <div className="glass rounded-2xl p-7 sm:p-10 border border-gold/20 bg-gradient-to-br from-gold/5 to-navy/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-14">
          <div>
            <h3 className="font-display text-2xl font-light mb-1">Krishna Yadav — Full Resume</h3>
            <p className="text-silver text-sm">Physics · Data Science · AI · Embedded Systems · Research</p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-black text-sm font-semibold rounded-full hover:shadow-gold hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
          >
            <Download size={15} />
            Download PDF
          </a>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-7">
              <GraduationCap size={18} className="text-gold" />
              <SectionLabel>Education</SectionLabel>
            </div>
          </Reveal>
          {education.map((edu, i) => (
            <Reveal key={i} delay={0.1}>
              <div className="glass rounded-xl p-6 border border-white/5 mb-4">
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <div>
                    <h4 className="font-semibold text-white">{edu.degree}</h4>
                    <p className="text-gold text-sm font-mono">{edu.institution}</p>
                  </div>
                  <span className="font-mono text-xs text-silver border border-white/10 rounded-full px-3 py-1">
                    {edu.year}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {edu.details.map(d => (
                    <span key={d} className="text-xs text-silver bg-white/4 rounded-full px-3 py-1">{d}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-7">
              <Award size={18} className="text-gold" />
              <SectionLabel>Certifications</SectionLabel>
            </div>
          </Reveal>
          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <Reveal key={cert.name} delay={i * 0.08}>
                <div className="glass rounded-xl p-5 border border-white/5 hover:border-gold/15 transition-colors duration-300 flex justify-between items-start gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">{cert.name}</h4>
                    <p className="font-mono text-xs text-silver">{cert.org}</p>
                  </div>
                  <span className="font-mono text-xs text-gold flex-shrink-0">{cert.year}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Experience timeline */}
      <div className="mt-14">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <Briefcase size={18} className="text-gold" />
            <SectionLabel>Experience & Milestones</SectionLabel>
          </div>
        </Reveal>
        <div className="space-y-4">
          {timeline.filter(t => t.type !== 'education').map((item, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="glass rounded-xl p-6 border border-white/5 hover:border-gold/15 transition-colors duration-300 flex gap-5 flex-wrap sm:flex-nowrap">
                <div className="flex-shrink-0">
                  <span className="font-mono text-sm text-gold font-bold">{item.year}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                  <p className="font-mono text-xs text-gold/70 mb-2">{item.org}</p>
                  <p className="text-silver text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
