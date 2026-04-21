import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { siteConfig, navLinks } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <span className="font-display text-3xl font-semibold">
              KY<span className="text-gold">.</span>
            </span>
            <p className="mt-3 text-sm text-silver leading-relaxed max-w-xs">
              Building tomorrow's intelligence, today.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-silver hover:text-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-3">
              {[
                { href: siteConfig.github,   Icon: Github,   label: 'GitHub' },
                { href: siteConfig.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: siteConfig.twitter,  Icon: Twitter,  label: 'Twitter' },
                { href: `mailto:${siteConfig.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-silver hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs font-mono text-muted">{siteConfig.location}</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-muted">© {year} Krishna Yadav. All rights reserved.</span>
          <span className="text-xs font-mono text-muted">Designed & Built with Precision</span>
        </div>
      </div>
    </footer>
  )
}
