import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'

import "react-loading-skeleton/dist/skeleton.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pastures.app'),
  title: {
    default: 'Pastures - Connect with your thoughts, experiences and the Word of God',
    template: '%s | Pastures',
  },
  description: 'Pastures is a one-stop solution for journalling, learning, and growing spiritually. AI-powered categorization, personalized devotionals, and spiritual guidance for your faith journey.',
  openGraph: {
    title: 'Pastures - Spiritual Growth & Journaling App',
    description: 'Connect with your thoughts, experiences and the Word of God through AI-powered journaling and personalized devotionals.',
    url: 'https://www.pastures.app',
    siteName: 'Pastures',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pastures - Spiritual Growth & Journaling',
    description: 'AI-powered spiritual journaling and devotionals.',
    // creator: '@pasturesapp', // If exists
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <Providers>
        <body
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
