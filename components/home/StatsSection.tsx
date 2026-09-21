'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import SectionReveal from '@/components/shared/SectionReveal'
import AnimatedHeading from '@/components/shared/AnimatedHeading'

const stats = [
  { value: 50, suffix: '+', label: 'Campaigns delivered' },
  { value: 18, suffix: '', label: 'International publications reached' },
  { value: 4.7, suffix: 'M+', label: 'People reached across all work' },
  { value: 100, suffix: '%', label: 'Client retention rate' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const isDecimal = value % 1 !== 0
    const duration = 1800
    const steps = 60
    const increment = value / steps
    let current = 0
    let step = 0
    const timer = setInterval(() => {
      step++
      current = Math.min(current + increment, value)
      setDisplay(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current))
      if (step >= steps) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-28">
          <div>
            <SectionReveal>
              <p className="eyebrow">03 / Our approach</p>
            </SectionReveal>
            <AnimatedHeading
              delay={0.1}
              className="mt-5 text-5xl font-black leading-[.92] tracking-[-0.055em] md:text-7xl"
            >
              Make the message matter.
            </AnimatedHeading>
            <SectionReveal delay={0.25}>
              <p className="mt-8 max-w-sm text-[#667892]">
                Every engagement starts with a question: what needs to change, and how can communication help move it forward?
              </p>
            </SectionReveal>
          </div>

          <div>
            {/* Process steps */}
            <div className="border-t border-[#dce6f2]">
              {[
                ['01', 'Discover', 'Understand the organization, audience and objectives.'],
                ['02', 'Strategize', 'Develop the communication and marketing strategy.'],
                ['03', 'Create', 'Produce compelling campaigns, content and experiences.'],
                ['04', 'Amplify', 'Put the message in front of the right people, through the right channels.'],
              ].map(([n, title, text], i) => (
                <SectionReveal key={n} delay={i * 0.1}>
                  <div className="grid grid-cols-[42px_1fr] gap-5 border-b border-[#dce6f2] py-7 md:grid-cols-[70px_1fr]">
                    <span className="font-mono text-xs text-[#1687ff]">{n}</span>
                    <div>
                      <h3 className="text-2xl font-black">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#667892]">{text}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-[#dce6f2] pt-16 md:grid-cols-4">
          {stats.map(({ value, suffix, label }, i) => (
            <SectionReveal key={label} delay={i * 0.1}>
              <div>
                <p className="text-4xl font-black tracking-[-0.04em] text-[#071b49] md:text-5xl">
                  <Counter value={value} suffix={suffix} />
                </p>
                <p className="mt-2 text-sm text-[#667892]">{label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
