import type { Metadata } from 'next'
import { HeroSection }     from '@/components/sections/HeroSection'
import { AboutPreview }    from '@/components/sections/AboutPreview'
import { SkillsPreview }   from '@/components/sections/SkillsPreview'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { QuoteSection }    from '@/components/sections/QuoteSection'
import { CtaSection }      from '@/components/sections/CtaSection'
import { StatsSection }    from '@/components/sections/StatsSection'

export const metadata: Metadata = {
  title:       'Krishna Yadav | AI Innovator & Future Founder',
  description: 'Physics Graduate building the future through Data Science, AI, and deep-tech systems.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <SkillsPreview />
      <FeaturedProjects />
      <QuoteSection />
      <CtaSection />
    </>
  )
}
