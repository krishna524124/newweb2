'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Easter egg: click logo 5 times
  const [logoClicks, setLogoClicks] = useState(0)
  function handleLogoClick() {
    const next = logoClicks + 1
    setLogoClicks(next)
    if (next >= 5) {
      alert('✦ You found the easter egg! "The best way to predict the future is to build it." — Krishna Yadav')
      setLogoClicks(0)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled && 'bg-black/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Logo */}
            <button onClick={handleLogoClick} className="focus:outline-none">
              <span className="font-display text-2xl font-semibold tracking-tight">
                KY<span className="text-gold">.</span>
              </span>
            </button>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium tracking-wide transition-colors duration-200 relative group',
                      pathname === link.href ? 'text-gold' : 'text-silver hover:text-white'
                    )}
                  >
                    {link.label}
                    <span className={cn(
                      'absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300',
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    )} />
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold border border-gold/30 rounded-full px-5 py-2 transition-all duration-300 hover:bg-gold hover:text-black"
            >
              Hire Me
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2 text-silver hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-black/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
            >
              <div className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block py-3 text-base font-medium transition-colors',
                        pathname === link.href ? 'text-gold' : 'text-silver hover:text-white'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 text-center text-xs font-semibold tracking-widest uppercase text-black bg-gold rounded-full px-5 py-3"
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
