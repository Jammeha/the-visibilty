import SectionReveal from '@/components/shared/SectionReveal'
import AnimatedHeading from '@/components/shared/AnimatedHeading'

const testimonials = [
  {
    quote: 'The Visibility understood the nuance of what we were trying to achieve. They didn\'t just run PR — they rebuilt how international media sees The Gambia.',
    author: 'Director of Marketing',
    org: 'Gambia Tourism Board',
    initials: 'GT',
  },
  {
    quote: 'Our communications went from an afterthought to one of the most-praised aspects of the Chamber\'s work. The Visibility gave us a voice we didn\'t know we were missing.',
    author: 'Secretary General',
    org: 'GCCI',
    initials: 'GC',
  },
  {
    quote: 'We didn\'t just launch a product — we launched a movement. The Visibility understood that and built a campaign worthy of it.',
    author: 'CEO',
    org: 'Reliance Financial Services',
    initials: 'RF',
  },
]

export default function Testimonials() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <p className="eyebrow">05 / Client voices</p>
        </SectionReveal>
        <AnimatedHeading
          delay={0.1}
          className="mt-5 max-w-2xl text-5xl font-black leading-[.92] tracking-[-0.055em] text-[#071b49] md:text-7xl"
        >
          Words from those we serve.
        </AnimatedHeading>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {testimonials.map(({ quote, author, org, initials }, i) => (
            <SectionReveal key={org} delay={i * 0.12}>
              <div className="flex h-full flex-col rounded-3xl border border-[#dce6f2] bg-[#f8fbff] p-8">
                <p className="flex-1 text-lg font-medium leading-relaxed text-[#071b49]">"{quote}"</p>
                <div className="mt-8 flex items-center gap-4 border-t border-[#dce6f2] pt-6">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1687ff] text-xs font-black text-white">
                    {initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#071b49]">{author}</p>
                    <p className="text-xs text-[#9bb0ca]">{org}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
