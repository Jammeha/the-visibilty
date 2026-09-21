import { work } from '@/lib/data/work'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function WorkIndexPage() {
  return (
    <main className="bg-[#061b4b] pt-32 pb-32 text-white min-h-screen">
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow-light">Case Studies</p>
            <h1 className="mt-6 text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.88] tracking-[-0.05em]">
              Selected Work.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-blue-100/80">
              A selection of our recent work across public relations, strategic communications, and digital marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-t border-white/10 pt-16 md:gap-24">
            {work.map((item, i) => (
              <article key={item.slug} className="group md:grid md:grid-cols-[1fr_1fr] md:items-center md:gap-16">
                <Link href={`/work/${item.slug}`} className={`block overflow-hidden bg-blue-900/50 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="aspect-[4/3] md:aspect-[4/4] lg:aspect-[16/10]">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="size-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                </Link>
                
                <div className={`mt-8 md:mt-0 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#48b2ff]">
                    {item.label}
                  </p>
                  <h2 className="mt-4 text-4xl font-black tracking-tight lg:text-5xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-xl font-medium text-white/50">
                    {item.client}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                     {item.services.map(s => (
                       <span key={s} className="rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-blue-200">
                         {s}
                       </span>
                     ))}
                  </div>
                  <Link href={`/work/${item.slug}`} className="mt-12 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#48b2ff] group-hover:text-white transition-colors">
                    View Case Study <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
