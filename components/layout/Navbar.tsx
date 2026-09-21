'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Insights', href: '/insights' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isHome = pathname === '/'
  const isDark = isHome && !scrolled

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 transition-all duration-300 ${scrolled ? 'pt-2' : ''}`}>
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 shadow-2xl backdrop-blur-xl transition-all duration-500 md:px-7
          ${scrolled
            ? 'bg-[#061b4b]/95 border border-white/10 text-white'
            : isDark
              ? 'bg-[#061b4b]/80 border border-white/20 text-white'
              : 'bg-white/90 border border-[#dce6f2] text-[#071b49]'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="brand-mark flex size-9 items-center justify-center rounded-full bg-[#1687ff] text-lg font-black italic text-white">V</span>
            <span className="leading-[0.9]">
              <span className="block text-[15px] font-black tracking-[0.18em]">THE VISIBILITY</span>
              <span className={`block pt-1 text-[8px] font-medium tracking-[0.3em] ${scrolled || isDark ? 'text-blue-200' : 'text-[#667892]'}`}>PR & COMMUNICATIONS</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className={`hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em] lg:flex ${scrolled || isDark ? 'text-blue-100' : 'text-[#486080]'}`}>
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`relative transition-colors hover:text-[#1687ff] ${pathname === href ? 'text-[#1687ff]' : ''}`}
              >
                {label}
                {pathname === href && (
                  <motion.span layoutId="nav-indicator" className="absolute -bottom-1 left-0 h-px w-full bg-[#1687ff]" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className={`hidden rounded-full px-5 py-3 text-[11px] font-black uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5 sm:block
            ${scrolled || isDark ? 'bg-white text-[#071b49]' : 'bg-[#071b49] text-white'}`}
          >
            Start a conversation <ArrowUpRight className="ml-2 inline size-3" />
          </Link>

          {/* Hamburger */}
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="rounded-full p-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="mx-auto mt-2 flex max-w-7xl flex-col gap-5 rounded-3xl bg-[#061b4b] p-6 text-sm font-bold uppercase tracking-[0.15em] text-white lg:hidden"
            >
              {navLinks.map(({ label, href }) => (
                <Link key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
              ))}
              <Link href="/contact" className="mt-2 rounded-full bg-[#1687ff] px-5 py-3 text-center text-xs font-black uppercase tracking-[0.12em]">
                Start a conversation
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
