'use client'

import { useState }                          from 'react'
import { motion, AnimatePresence }           from 'framer-motion'
import { Send, Github, Linkedin, Twitter, Mail, MapPin, CheckCircle } from 'lucide-react'
import { Section, Reveal }                   from '@/components/ui/PageHeader'
import { siteConfig }                        from '@/lib/data'

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1400))   // mock send
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 6000)
  }

  const socials = [
    { href: siteConfig.github,   Icon: Github,   label: 'GitHub'   },
    { href: siteConfig.linkedin, Icon: Linkedin, label: 'LinkedIn' },
    { href: siteConfig.twitter,  Icon: Twitter,  label: 'Twitter'  },
    { href: `mailto:${siteConfig.email}`, Icon: Mail, label: 'Email' },
  ]

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

        {/* Left — info */}
        <div className="lg:col-span-2 space-y-5">
          {[
            { Icon: Mail,    label: 'Email',    value: siteConfig.email,   href: `mailto:${siteConfig.email}` },
            { Icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/krishnayadav', href: siteConfig.linkedin },
            { Icon: Github,  label: 'GitHub',   value: 'github.com/krishnayadav', href: siteConfig.github },
            { Icon: MapPin,  label: 'Location', value: siteConfig.location, href: undefined },
          ].map(({ Icon, label, value, href }) => (
            <Reveal key={label} direction="left">
              <div className="glass rounded-xl p-5 border border-white/5 hover:border-gold/15 transition-colors duration-300 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-gold" />
                </div>
                <div>
                  <p className="font-mono text-[0.6rem] text-muted uppercase tracking-widest mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-white hover:text-gold transition-colors">{value}</a>
                  ) : (
                    <span className="text-sm text-white">{value}</span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}

          {/* Social row */}
          <Reveal direction="left" delay={0.2}>
            <div className="flex gap-3 pt-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-white/10 text-silver hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — form */}
        <Reveal direction="right" className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 sm:p-9 border border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <Field label="Full Name"    name="name"    type="text"  placeholder="Your name"      value={form.name}    onChange={handleChange} />
              <Field label="Email"        name="email"   type="email" placeholder="your@email.com" value={form.email}   onChange={handleChange} />
            </div>
            <Field label="Subject" name="subject" type="text" placeholder="Collaboration / Opportunity / Research..." value={form.subject} onChange={handleChange} className="mb-5" />
            <div className="mb-6">
              <label className="block text-xs font-semibold text-silver uppercase tracking-widest mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about the opportunity or idea..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-muted outline-none focus:border-gold/50 focus:bg-gold/3 transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-black text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-gold hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0"
            >
              {status === 'loading' ? (
                <>
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={14} />
                  Send Message
                </>
              )}
            </button>

            {/* Success */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{   opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-2 p-4 rounded-xl bg-green-400/8 border border-green-400/20 text-green-400 text-sm font-mono"
                >
                  <CheckCircle size={16} />
                  Message sent! I'll respond within 24 hours.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

/* ── Reusable form field ─────────────────────── */
interface FieldProps {
  label:     string
  name:      string
  type:      string
  placeholder: string
  value:     string
  onChange:  (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

function Field({ label, name, type, placeholder, value, onChange, className }: FieldProps) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold text-silver uppercase tracking-widest mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-muted outline-none focus:border-gold/50 focus:bg-gold/3 transition-all duration-300"
      />
    </div>
  )
}
