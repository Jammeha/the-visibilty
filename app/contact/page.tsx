import ContactForm from '@/components/contact/ContactForm'
import { Mail, MessageCircle, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="bg-[#f3f7fc] pt-32 pb-24 text-[#071b49] overflow-hidden">
      <section className="relative px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            
            {/* Left Col: Info */}
            <div>
              <p className="eyebrow">Contact</p>
              <h1 className="mt-6 max-w-lg text-[clamp(3.2rem,6vw,6rem)] font-black leading-[0.88] tracking-[-0.05em]">
                Let's start the conversation.
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-[#667892]">
                Whether you need a full strategic repositioning or a rapid crisis response, the first step is a confidential discussion about where you are and what you need to achieve.
              </p>

              <div className="mt-16 flex flex-col gap-8 border-t border-[#dce6f2] pt-12">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-[#1687ff] shadow-sm">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-[#9bb0ca]">Email us</p>
                    <a href="mailto:hello@thevisibility.gm" className="mt-1 block text-lg font-bold hover:text-[#1687ff] transition-colors">
                      hello@thevisibility.gm
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-[#1687ff] shadow-sm">
                    <MessageCircle className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-[#9bb0ca]">WhatsApp</p>
                    <a href="https://wa.me/2200000000" className="mt-1 block text-lg font-bold hover:text-[#1687ff] transition-colors">
                      +220 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-[#1687ff] shadow-sm">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-[#9bb0ca]">Location</p>
                    <p className="mt-1 text-lg font-bold">
                      Banjul, The Gambia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="relative mt-8 lg:mt-0">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
