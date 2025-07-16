// cspell:ignore Resizer
'use strict'
import { Analytics } from '@vercel/analytics/react'
import { Resizer } from '@/components/handle-resize'
import { Nav } from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Thrift eCommerce',
  description:
    'Thrift, an ecommerce platform to buy or sell any product. Still in development...',
}

let font
;(async () => {
  if (process.env.NODE_ENV === 'production') {
    ;({
      default: { Lato },
    } = await import('next/font/google'))
    font = Lato({ weight: '500', subsets: ['latin'] })
  } else {
    const LocalFont = await import('next/font/local')
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
