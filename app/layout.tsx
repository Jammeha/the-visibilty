import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SmoothScroll from '@/components/layout/SmoothScroll'
import CustomCursor from '@/components/layout/CustomCursor'
import PageTransition from '@/components/layout/PageTransition'

export const metadata: Metadata = {
  title: 'The Visibility | Strategic PR, Marketing & Communications Agency in Gambia',
  description: 'The Visibility is a Gambian strategic PR, marketing and communications agency helping organizations build visibility, influence and sustainable brand growth.',
  keywords: ['PR agency Gambia', 'Public relations Gambia', 'Marketing agency Gambia', 'Strategic communications Gambia'],
}

export const viewport: Viewport = {
  themeColor: '#061b4b',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#061b4b] text-[#071b49] antialiased">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
