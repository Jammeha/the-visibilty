import Hero from '@/components/home/Hero'
import ServicesTeaser from '@/components/home/ServicesTeaser'
import StatsSection from '@/components/home/StatsSection'
import WorkTeaser from '@/components/home/WorkTeaser'
import Testimonials from '@/components/home/Testimonials'
import InsightsTeaser from '@/components/home/InsightsTeaser'
import MarqueeTicker from '@/components/shared/MarqueeTicker'

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <MarqueeTicker />
      <ServicesTeaser />
      <StatsSection />
      <WorkTeaser />
      <Testimonials />
      <InsightsTeaser />
    </main>
  )
}
