import { work } from '@/lib/data/work'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export async function generateStaticParams() {
  return work.map((item) => ({
    slug: item.slug,
  }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseData = work.find((w) => w.slug === slug)
  
  if (!caseData) notFound()

  return (
    <main className="bg-white">
      {/* Hero section with parallax image */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#061b4b]">
        <img
          src={caseData.heroImage}
          alt={caseData.title}
          className="absolute inset-0 size-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061b4b] to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 px-6 pb-20 md:px-12 md:pb-32 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <Link href="/work" className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-200 hover:text-white transition-colors">
              <ArrowLeft className="size-4" /> Back to work
            </Link>
            <h1 className="max-w-4xl text-[clamp(3.2rem,6vw,6.5rem)] font-black leading-[0.9] tracking-[-0.05em] text-white">
              {caseData.title}
            </h1>
            <div className="mt-8 flex flex-wrap gap-8 text-sm font-bold uppercase tracking-[0.15em] text-blue-200">
              <div>
                <span className="block text-[10px] text-white/50 mb-1">Client</span>
                {caseData.client}
              </div>
              <div>
                <span className="block text-[10px] text-white/50 mb-1">Year</span>
                {caseData.year}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_2.5fr] lg:gap-32">
            
            {/* Sidebar Services */}
            <div>
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[#9bb0ca]">Services provided</p>
              <ul className="mt-6 flex flex-col gap-4">
                {caseData.services.map(s => (
                  <li key={s} className="border-t border-[#dce6f2] pt-4 text-sm font-bold text-[#071b49]">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Body */}
             <div className="max-w-3xl">
               <h2 className="text-3xl font-black tracking-tight text-[#071b49] md:text-4xl">The Challenge</h2>
               <p className="mt-6 text-xl leading-relaxed text-[#486080] md:text-2xl md:leading-loose">
                 {caseData.challenge}
               </p>

               <div className="my-16 h-px w-full bg-[#dce6f2]" />

               <h2 className="text-3xl font-black tracking-tight text-[#071b49] md:text-4xl">The Approach</h2>
               <p className="mt-6 text-lg leading-relaxed text-[#486080] md:text-xl md:leading-loose">
                 {caseData.approach}
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
             {caseData.images.map((img, i) => (
               <div key={i} className={`aspect-[4/5] w-full overflow-hidden bg-[#f3f7fc] ${i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                 <img src={img} alt="" className="size-full object-cover" />
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Results & Testimonial */}
      <section className="bg-[#f3f7fc] px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
           <div className="grid gap-20 lg:grid-cols-[1fr_1fr]">
              {/* Results */}
              <div>
                <p className="eyebrow">The Impact</p>
                <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12">
                  {caseData.results.map((r, i) => (
                    <div key={i} className="border-t border-[#dce6f2] pt-6">
                      <p className="text-4xl font-black text-[#1687ff] md:text-5xl">{r.metric}</p>
                      <p className="mt-3 text-sm font-medium leading-relaxed text-[#071b49]">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="flex flex-col justify-center rounded-3xl bg-[#061b4b] p-8 text-white shadow-2xl md:p-16">
                 <p className="text-2xl font-medium leading-relaxed md:text-3xl lg:leading-normal">"{caseData.testimonial.quote}"</p>
                 <div className="mt-12 pt-8 border-t border-white/10">
                   <p className="font-bold text-white">{caseData.testimonial.author}</p>
                   <p className="text-sm text-blue-200/60 mt-1">{caseData.client}</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
         <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-none tracking-[-0.05em] text-[#071b49]">
              Ready for similar impact?
            </h2>
            <Link href="/contact" className="mt-12 inline-flex items-center gap-4 rounded-full bg-[#1687ff] px-8 py-5 text-sm font-black uppercase tracking-[0.12em] text-white transition-all hover:bg-[#061b4b]">
              Start your project <ArrowUpRight className="size-5" />
            </Link>
         </div>
      </section>
    </main>
  )
}
