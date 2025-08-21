import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../globals.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Cafe - A quiet space for meaningful conversations',
  description: 'Join me for a free drink and meaningful conversation in my Sheares Hall room at NUS.',
}

export default function CafeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <Providers>
        <body
          className={cn(
            'min-h-screen font-sans antialiased',
            inter.className
          )}
          style={{ '--font-playfair': playfair.style.fontFamily } as React.CSSProperties}>
          {children}
        </body>
      </Providers>
    </html>
  )
}
