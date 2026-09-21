'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Sparkles, Award, TrendingUp, ShieldCheck, Globe, Star } from 'lucide-react'
import MagneticButton from '@/components/shared/MagneticButton'

export default function HomeHero() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  }
  
  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  const imageCard = {
    hidden: { opacity: 0, scale: 0.94, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] } 
    },
  }

  return (
    <section
      id="home"
      className="hero-grid grain relative flex min-h-[95vh] items-center overflow-hidden px-6 pb-20 pt-36 text-white md:px-12 lg:px-20"
    >
      {/* Ambient Lighting & Glow Orbs */}
      <div className="absolute left-[15%] top-[25%] -z-10 size-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-600/25 via-cyan-500/20 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute right-[5%] top-[20%] -z-10 size-[500px] rounded-full bg-gradient-to-bl from-cyan-400/20 via-indigo-600/15 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute left-[50%] bottom-[10%] -z-10 size-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-15 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none" />

      <motion.div
        className="relative mx-auto w-full max-w-7xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Headline, Narrative & Actions */}
          <div className="lg:col-span-7">
            {/* Top Pill Badge */}
            <motion.div variants={item} className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-slate-900/80 px-4 py-2 shadow-[0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-xl">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-[#00f0ff]" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-200">
                Strategic PR & Executive Comms · The Gambia
              </span>
              <div className="h-3 w-px bg-cyan-400/30" />
              <div className="flex items-center gap-1 text-[11px] font-bold text-amber-300">
                <Star className="size-3 fill-amber-300" />
                <span>Top Agency</span>
              </div>
            </motion.div>

            {/* WOW Headline with Animated Gradient Clip */}
            <motion.h1
              variants={item}
              className="text-[clamp(3.2rem,6.8vw,7rem)] font-black leading-[0.88] tracking-[-0.055em]"
            >
              WE CRAFT <br />
              <span className="bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(56,189,248,0.25)]">
                VISIBILITY
              </span> <br />
              THAT BUILDS <br />
              INFLUENCE<span className="text-[#00f0ff] animate-pulse">.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={item} 
              className="mt-7 max-w-xl text-base leading-relaxed text-blue-100/85 md:text-lg font-normal"
            >
              Transforming ambitious organizations into authority powerhouses. We deliver high-stakes media relations, narrative strategy, and digital PR across West Africa and global platforms.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#0070f3] via-[#00f0ff] to-[#0070f3] bg-[length:200%_auto] px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[0_0_35px_rgba(0,240,255,0.4)] transition-all duration-500 hover:bg-right hover:shadow-[0_0_55px_rgba(0,240,255,0.7)] hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start A Campaign 
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/work"
                  className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                >
                  View Case Studies
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Trust Highlights Strip */}
            <motion.div 
              variants={item} 
              className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-blue-200/70"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-[#00f0ff]" />
                <span className="font-semibold text-white/90">Trusted by Fortune 500 & Governments</span>
              </div>
              <div className="size-1 rounded-full bg-cyan-400/40" />
              <div className="flex items-center gap-2">
                <Globe className="size-4 text-[#00f0ff]" />
                <span className="font-semibold text-white/90">International Media Reach</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Visual Artwork Showcase Card */}
          <div className="relative lg:col-span-5">
            <motion.div
              variants={imageCard}
              whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.4 } }}
              className="group relative rounded-3xl border border-white/20 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-3.5 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
            >
              {/* Animated Rim Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500/40 via-blue-600/30 to-indigo-500/40 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Image Canvas Container */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-950 border border-white/10">
                <Image
                  src="/hero-agency-visual.png"
                  alt="The Visibility PR & Strategic Communications Visual Showcase"
                  width={850}
                  height={950}
                  priority
                  className="h-[440px] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 md:h-[520px]"
                />

                {/* Dark Gradient Overlay & Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />

                {/* Image Overlay Footer Badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div className="rounded-2xl border border-white/20 bg-slate-950/70 p-4 backdrop-blur-xl shadow-lg">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00f0ff]">
                      <Sparkles className="size-3.5 animate-spin text-[#00f0ff]" />
                      <span>Executive Brand Optics</span>
                    </div>
                    <p className="mt-1 text-sm font-bold text-white">The Gambia & International PR</p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 1 (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -right-5 -top-6 hidden sm:flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-slate-950/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 text-[#00f0ff]">
                  <Award className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-white">15+ Years</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-cyan-200/80">Strategic Excellence</p>
                </div>
              </motion.div>

              {/* Floating Stat Badge 2 (Bottom Left Overlap) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -bottom-7 -left-5 hidden sm:flex items-center gap-3.5 rounded-2xl border border-white/20 bg-slate-950/95 px-5 py-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-400/20 text-[#00f0ff]">
                  <TrendingUp className="size-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-base font-black text-white">+120M</span>
                    <span className="text-[10px] font-bold text-[#00f0ff]">Reach</span>
                  </div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-blue-200/70">Media Impressions</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}

