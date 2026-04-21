import type { Metadata } from 'next'
import { PageHeader }      from '@/components/ui/PageHeader'
import { AboutStory }      from '@/components/sections/AboutStory'
import { TimelineSection } from '@/components/sections/TimelineSection'
import { VisionSection }   from '@/components/sections/VisionSection'

export const metadata: Metadata = {
  title:       'About',
  description: 'The story of Krishna Yadav — from Physics to AI, from curiosity to creation.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="01 — About"
        title="From Physics to"
        titleAccent="Artificial Intelligence"
        subtitle="A story of curiosity, rigor, and the relentless pursuit of building things that matter."
      />
      <AboutStory />
      <TimelineSection />
      <VisionSection />
    </>
  )
}
