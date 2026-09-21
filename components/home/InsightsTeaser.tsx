import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { insights } from '@/lib/data/insights'
import SectionReveal from '@/components/shared/SectionReveal'
import AnimatedHeading from '@/components/shared/AnimatedHeading'

export default function InsightsTeaser() {
  const featured = insights.slice(0, 3)

  return (
    <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <div>
            <SectionReveal>
              <p className="eyebrow">06 / Insights</p>
            </SectionReveal>
            <AnimatedHeading
              delay={0.1}
              className="mt-5 text-5xl font-black leading-[.92] tracking-[-0.055em] text-[#071b49] md:text-7xl"
            >
              Ideas worth sharing.
            </AnimatedHeading>
          </div>
          <SectionReveal delay={0.2} className="hidden sm:block">
            <Link href="/insights" className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#1687ff] hover:text-[#48b2ff] transition-colors">
              All insights <ArrowUpRight className="size-4" />
            </Link>
          </SectionReveal>
        </div>

        <div className="mt-14 grid border-t border-[#dce6f2] md:grid-cols-3">
          {featured.map(({ slug, category, title, readTime }, i) => (
            <SectionReveal key={slug} delay={i * 0.1}>
              <Link href={`/insights#${slug}`}>
                <article className="border-b border-[#dce6f2] p-6 pl-0 transition-colors hover:bg-[#f8fbff] md:border-b-0 md:border-r md:p-8 md:first:pl-0 md:last:border-r-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#1687ff]">{category}</span>
                    <span className="font-mono text-[10px] text-[#9bb0ca]">0{i + 1}</span>
                  </div>
                  <h3 className="mt-16 text-2xl font-black leading-tight tracking-tight text-[#071b49]">{title}</h3>
                  <p className="mt-8 text-xs font-bold text-[#9bb0ca]">{readTime}</p>
                </article>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
