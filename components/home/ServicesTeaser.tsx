import Link from 'next/link'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { services } from '@/lib/data/services'
import SectionReveal from '@/components/shared/SectionReveal'
import AnimatedHeading from '@/components/shared/AnimatedHeading'

export default function ServicesTeaser() {
  return (
    <section className="bg-[#f3f7fc] px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionReveal>
              <p className="eyebrow">02 / What we do</p>
            </SectionReveal>
            <AnimatedHeading
              delay={0.1}
              className="mt-5 max-w-2xl text-5xl font-black leading-[.92] tracking-[-0.055em] md:text-7xl"
            >
              Communication that moves people.
            </AnimatedHeading>
          </div>
          <SectionReveal delay={0.2} className="max-w-xs">
            <p className="text-sm leading-relaxed text-[#667892]">From reputation to reach, we build the systems and stories that make progress visible.</p>
            <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#1687ff]">
              All services <ArrowUpRight className="size-3.5" />
            </Link>
          </SectionReveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-[#dce6f2] bg-[#dce6f2] md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, number, title, text, slug }, i) => (
            <SectionReveal key={number} delay={i * 0.07}>
              <article className="group h-full bg-[#f3f7fc] p-7 transition-colors hover:bg-[#071f54] hover:text-white md:p-9">
                <div className="flex items-start justify-between">
                  <Icon className="size-7 text-[#1687ff]" strokeWidth={1.5} />
                  <span className="font-mono text-xs text-[#9bb0ca]">{number}</span>
                </div>
                <h3 className="mt-16 text-xl font-black tracking-tight">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#667892] group-hover:text-blue-100">{text}</p>
                <Link
                  href={`/services#${slug}`}
                  className="mt-8 inline-flex items-center text-[10px] font-black uppercase tracking-[0.15em] text-[#1687ff] group-hover:text-[#48b2ff]"
                >
                  Learn more <ChevronRight className="ml-1 size-3" />
                </Link>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
