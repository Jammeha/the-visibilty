import { insights } from '@/lib/data/insights'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function InsightsPage() {
  return (
    <main className="bg-white pt-32 pb-24 text-[#071b49]">
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow">Our Thinking</p>
            <h1 className="mt-6 text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.88] tracking-[-0.05em]">
              Insights.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[#667892]">
              Perspectives on public relations, brand strategy, and how communication shapes the modern operating environment for organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-t border-[#dce6f2] pt-16 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((article, i) => (
              <article key={article.slug} id={article.slug} className="group scroll-mt-32">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#f8fbff]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-[#1687ff]">
                    {article.category}
                  </span>
                  <span className="text-xs font-bold text-[#9bb0ca]">{article.readTime}</span>
                </div>
                <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-[#071b49]">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#667892] line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-6">
                  {/* Since no CMS yet, this just links to contact for now */}
                   <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#071b49] group-hover:text-[#1687ff] transition-colors">
                      Read full article <ArrowUpRight className="size-3.5" />
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
