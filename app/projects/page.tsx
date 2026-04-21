import type { Metadata } from 'next'
import { PageHeader }       from '@/components/ui/PageHeader'
import { ProjectsGrid }     from '@/components/sections/ProjectsGrid'

export const metadata: Metadata = {
  title:       'Projects',
  description: 'A curated showcase of AI systems, quant models, hardware innovations, and web applications.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        badge="03 — Work"
        title="Selected"
        titleAccent="Projects"
        subtitle="A curated showcase of systems, models, and innovations across AI, finance, hardware, and the web."
      />
      <ProjectsGrid />
    </>
  )
}
