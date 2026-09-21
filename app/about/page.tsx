import TeamSection from '@/components/about/TeamSection'

export default function AboutPage() {
  return (
    <main className="bg-[#070b19] pt-32 pb-24 text-white">
      <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00f0ff]">The Organization</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.88] tracking-[-0.05em]">
            Influence is not an accident.
          </h1>
          
          <div className="mt-16 grid gap-16 border-t border-white/10 pt-16 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xl font-bold tracking-tight text-[#00f0ff]">Our Philosophy</p>
            </div>
            <div className="max-w-2xl text-lg leading-relaxed text-blue-100/80 md:text-xl md:leading-loose">
              <p>
                The Visibility is a strategic communications and marketing partner for organizations ready to be understood, remembered and trusted. Based in The Gambia, we bring global standard execution to local insight.
              </p>
              <p className="mt-6">
                We believe that visibility alone is a vanity metric. If people see you but don't understand you, the visibility is wasted. If they understand you but don't trust you, the visibility is dangerous. Our work is to build the systems, stories, and campaigns that turn attention into actual influence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Member Team Showcase */}
      <TeamSection />
    </main>
  )
}

