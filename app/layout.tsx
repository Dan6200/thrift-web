// cspell:ignore Resizer
'use strict'
import { Analytics } from '@vercel/analytics/react'
import { Resizer } from '@/components/handle-resize'
import { Nav } from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import Providers from './providers'
import { NextFont } from 'next/dist/compiled/@next/font'

export const metadata = {
  title: 'Sellit e-commerce Platform',
  description:
    'Sellit is a modern e-commerce platform designed for seamless buying and selling of products. Discover a wide range of items or easily list your own for sale.',
}

let font: NextFont
;(async () => {
  if (process.env.NODE_ENV === 'production') {
    const {
      default: { Lato },
    } = await import('next/font/google')
    font = Lato({ weight: '400', subsets: ['latin'] })
  } else {
    const { default: LocalFont } = await import('next/font/local')
    font = LocalFont({ src: '../../public/fonts/lato.woff2' })
  }
})()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className + ' h-fit'}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <Resizer>
              <Nav />
              {children}
            </Resizer>
            <Toaster />
          </Providers>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
