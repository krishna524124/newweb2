import type { Metadata } from 'next'
import { PageHeader }     from '@/components/ui/PageHeader'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title:       'Contact',
  description: 'Get in touch with Krishna Yadav for collaborations, opportunities, and research.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="06 — Contact"
        title="Let's Build Something"
        titleAccent="Extraordinary"
        subtitle="Open to research collaborations, founding roles, and exceptional opportunities worldwide."
      />
      <ContactSection />
    </>
  )
}
