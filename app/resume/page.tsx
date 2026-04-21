import type { Metadata } from 'next'
import { PageHeader }    from '@/components/ui/PageHeader'
import { ResumeSection } from '@/components/sections/ResumeSection'

export const metadata: Metadata = {
  title:       'Resume',
  description: 'Krishna Yadav — Physics, Data Science, AI, Embedded Systems, Research.',
}

export default function ResumePage() {
  return (
    <>
      <PageHeader
        badge="05 — Resume"
        title="Credentials &"
        titleAccent="Experience"
        subtitle="A record of education, research, and professional development across science and technology."
      />
      <ResumeSection />
    </>
  )
}
