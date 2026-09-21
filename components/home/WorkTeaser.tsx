import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { work } from '@/lib/data/work'
import SectionReveal from '@/components/shared/SectionReveal'
import AnimatedHeading from '@/components/shared/AnimatedHeading'

export default function WorkTeaser() {
  const featured = work.slice(0, 3)

  return (
    <section className="bg-[#061b4b] px-6 py-24 text-white md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionReveal>
              <p className="eyebrow-light">04 / Selected work</p>
            </SectionReveal>
            <AnimatedHeading
              delay={0.1}
              className="mt-5 text-5xl font-black leading-[.92] tracking-[-0.055em] md:text-7xl"
            >
              Work with intention.
            </AnimatedHeading>
          </div>
          <SectionReveal delay={0.2}>
            <Link href="/work" className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-blue-200 hover:text-white transition-colors">
              View all work <ArrowUpRight className="size-4" />
            </Link>
          </SectionReveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {featured.map((item, i) => (
            <SectionReveal key={item.slug} delay={i * 0.1}>
              <Link href={`/work/${item.slug}`}>
                <article className={`group ${i === 1 ? 'md:translate-y-12' : ''}`}>
                  <div className="aspect-[4/5] overflow-hidden bg-blue-900/50">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="size-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#48b2ff]">{item.label}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight">{item.title}</h3>
                  <p className="mt-1 text-sm text-blue-200/60">{item.client}</p>
                </article>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
