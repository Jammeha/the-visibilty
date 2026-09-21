import Link from 'next/link'
import { ArrowUpRight, Mail, MessageCircle, Camera, Globe2 } from 'lucide-react'

const navLinks = [
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our work', href: '/work' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#041334] px-6 py-16 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Top CTA band */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-16 md:flex-row md:items-center">
          <p className="max-w-xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
            Ready to be<br />
            <span className="text-[#48b2ff]">seen?</span>
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-full bg-[#1687ff] px-7 py-4 text-xs font-black uppercase tracking-[0.12em] transition-all hover:bg-[#48b2ff] hover:shadow-[0_0_40px_rgba(72,178,255,.3)]"
          >
            Start a conversation <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-[#1687ff] text-xl font-black italic">V</span>
              <span className="leading-[0.9]">
                <span className="block text-[15px] font-black tracking-[0.18em]">THE VISIBILITY</span>
                <span className="block pt-1 text-[8px] font-medium tracking-[0.3em] text-blue-300">PR & COMMUNICATIONS</span>
              </span>
            </Link>
            <p className="mt-8 max-w-xs text-2xl font-black leading-tight">
              We make<br />
              <span className="text-[#48b2ff]">you seen.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-200/70">
              Strategic visibility from The Gambia 🇬🇲
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="footer-label">Explore</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-blue-100/80">
              {navLinks.map(({ label, href }) => (
                <Link key={label} href={href} className="transition-colors hover:text-white">{label}</Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="footer-label">Connect</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-blue-100/80">
              <a href="mailto:hello@thevisibility.gm" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="size-3.5" /> hello@thevisibility.gm
              </a>
              <a href="https://wa.me/2200000000" className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle className="size-3.5" /> WhatsApp us
              </a>
              <span className="text-blue-300">The Gambia 🇬🇲</span>
              <div className="flex gap-3 pt-2">
                <a href="#" aria-label="Instagram" className="rounded-full border border-white/20 p-2.5 transition-colors hover:bg-white/10">
                  <Camera className="size-3.5" />
                </a>
                <a href="#" aria-label="Facebook" className="rounded-full border border-white/20 p-2.5 transition-colors hover:bg-white/10">
                  <Globe2 className="size-3.5" />
                </a>
                <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/20 p-2.5 transition-colors hover:bg-white/10">
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.15em] text-blue-300 sm:flex-row">
          <span>© 2026 The Visibility PR & Communications. All rights reserved.</span>
          <span>Strategic visibility from The Gambia</span>
        </div>
      </div>
    </footer>
  )
}
