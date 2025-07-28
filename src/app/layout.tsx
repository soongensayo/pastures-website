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
  title: 'Pastures - Connect with your thoughts, experiences and the Word of God',
  description: 'Pastures is a one-stop solution for journalling, learning, and growing spiritually. AI-powered categorization, personalized devotionals, and spiritual guidance for your faith journey.',
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
