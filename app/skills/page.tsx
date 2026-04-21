import type { Metadata } from 'next'
import { PageHeader }     from '@/components/ui/PageHeader'
import { SkillsDisplay }  from '@/components/sections/SkillsDisplay'

export const metadata: Metadata = {
  title:       'Skills',
  description: 'Technologies and domains Krishna Yadav commands at an exceptional level.',
}

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        badge="04 — Expertise"
        title="The"
        titleAccent="Arsenal"
        subtitle="Technologies and domains I command at an exceptional level — built through deep study and real application."
      />
      <SkillsDisplay />
    </>
  )
}
