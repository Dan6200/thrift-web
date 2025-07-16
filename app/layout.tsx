// cspell:ignore Resizer
'use strict'
import { Analytics } from '@vercel/analytics/react'
import { Resizer } from '@/components/handle-resize'
import { Nav } from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import Providers from './providers'
import LocalFont from 'next/font/local'
import { resolve } from 'path'

export const metadata = {
  title: 'Sellit e-commerce Platform',
  description:
    'Sellit is a modern e-commerce platform designed for seamless buying and selling of products. Discover a wide range of items or easily list your own for sale.',
}

const font = LocalFont({ src: resolve('public/fonts/lato.woff2') })

// ;(async () => {
//   if (process.env.NODE_ENV === 'production') {
//     const {
//       default: { Lato },
//     } = await import('next/font/google')
//     font = Lato({ weight: '400', subsets: ['latin'] })
//   } else {
//   }
// })()

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
