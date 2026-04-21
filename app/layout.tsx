import type { Metadata } from 'next'
import '../styles/globals.css'
import { Navbar }     from '@/components/layout/Navbar'
import { Footer }     from '@/components/layout/Footer'
import { Cursor }     from '@/components/ui/Cursor'
import { Particles }  from '@/components/ui/Particles'
import { ScrollBar }  from '@/components/ui/ScrollBar'
import { BackToTop }  from '@/components/ui/BackToTop'

export const metadata: Metadata = {
  title:       { default: 'Krishna Yadav | AI Innovator & Future Founder', template: '%s | Krishna Yadav' },
  description: 'Physics Graduate building the future through Data Science, AI, and deep-tech systems.',
  keywords:    ['Krishna Yadav', 'Data Science', 'AI', 'Machine Learning', 'Physics', 'Portfolio', 'Quantitative Trading'],
  authors:     [{ name: 'Krishna Yadav' }],
  openGraph: {
    type:        'website',
    title:       'Krishna Yadav | AI Innovator & Future Founder',
    description: 'Physics Graduate building the future through Data Science and AI.',
    siteName:    'Krishna Yadav',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Krishna Yadav | AI Innovator & Future Founder',
    description: 'Physics Graduate building the future through Data Science and AI.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white font-sans antialiased overflow-x-hidden">
        <div className="noise-overlay" />
        <ScrollBar />
        <Cursor />
        <Particles />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
