import { services } from '@/lib/data/services'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function ServicesPage() {
  return (
    <main className="bg-[#f3f7fc] pt-32 pb-24 text-[#071b49]">
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow">Our Services</p>
            <h1 className="mt-6 text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.88] tracking-[-0.05em]">
              Capabilities.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[#667892]">
              Built to manage the full trajectory of a message — from the strategy that defines it, to the content that makes it compelling, to the digital and media channels that carry it.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px border border-[#dce6f2] bg-[#dce6f2]">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <article key={service.slug} id={service.slug} className="scroll-mt-32 bg-white p-8 md:p-16">
                  <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
                    {/* Left: Icon & Title */}
                    <div>
                      <Icon className="size-10 text-[#1687ff]" strokeWidth={1.5} />
                      <span className="mt-12 block font-mono text-sm font-bold text-[#9bb0ca]">{service.number}</span>
                      <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">{service.title}</h2>
                      <p className="mt-3 font-bold text-[#1687ff]">{service.tagline}</p>
                    </div>
                    {/* Right: Details & Deliverables */}
                    <div>
                      <p className="text-lg leading-relaxed text-[#486080]">{service.description}</p>
                      
                      <div className="mt-12">
                        <h3 className="text-xs font-black uppercase tracking-[0.15em] text-[#9bb0ca] mb-6">Core Deliverables</h3>
                        <ul className="grid gap-4 sm:grid-cols-2">
                          {service.deliverables.map(item => (
                            <li key={item} className="flex items-start gap-3 text-sm text-[#071b49] font-medium border-t border-[#dce6f2] pt-3">
                              <span className="shrink-0 text-[#1687ff] font-sans font-bold">×</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-12 pt-8 border-t border-[#dce6f2]">
                         <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#1687ff] hover:text-[#071b49] transition-colors">
                            Discuss this service <ArrowUpRight className="size-4" />
                         </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
