'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles, CheckCircle2, Globe } from 'lucide-react'
import { TEAM_MEMBERS, TeamMember } from '@/lib/data/team'

function LinkedInIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
    </svg>
  )
}

function TwitterIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}


export default function TeamSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null)

  const categories = ['All', 'Leadership', 'Strategy & Comms', 'Media & Digital']

  const filteredMembers = selectedCategory === 'All' 
    ? TEAM_MEMBERS 
    : TEAM_MEMBERS.filter(m => m.category === selectedCategory)

  return (
    <section id="team" className="relative bg-[#070b19] px-6 py-24 text-white md:px-12 lg:px-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute left-0 top-1/3 -z-10 size-[450px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 -z-10 size-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md">
              <Sparkles className="size-3.5 text-cyan-400" />
              <span>Leadership & Experts</span>
            </div>
            <h2 className="mt-4 text-[clamp(2.4rem,4.8vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em]">
              THE 8 STRATEGISTS <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                BEHIND THE VISIBILITY.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base text-blue-100/70 md:text-lg">
            A multidisciplinary collective of senior PR architects, media analysts, and storytellers driving reputation and authority across West Africa.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-12 flex flex-wrap items-center gap-3 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                  : 'border border-white/15 bg-white/5 text-blue-200/70 hover:border-white/40 hover:text-white'
              }`}
            >
              {cat} {cat === 'All' ? `(${TEAM_MEMBERS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Team Grid (8 Cards) */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-slate-900/60 p-4 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
            >
              {/* Image Container */}
              <div>
                <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-slate-950">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Social Badge Overlay */}
                  <div className="absolute right-3 top-3 flex gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-cyan-500 hover:text-black"
                      >
                        <LinkedInIcon className="size-4" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-cyan-500 hover:text-black"
                      >
                        <TwitterIcon className="size-4" />
                      </a>
                    )}
                  </div>

                </div>

                {/* Info Content */}
                <div className="mt-5 px-1">
                  <div className="inline-block rounded-md bg-cyan-950/70 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-cyan-300">
                    {member.role}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-blue-100/70 line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Highlights List */}
              {member.highlights && (
                <div className="mt-6 border-t border-white/10 pt-4 px-1">
                  <div className="space-y-1.5">
                    {member.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-blue-200/80">
                        <CheckCircle2 className="size-3.5 shrink-0 text-cyan-400" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
