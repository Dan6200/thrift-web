import Link from 'next/link'
import { ProductsHome } from '@/components/products/home-page'
import { MoveRight } from 'lucide-react'
import { Montagu_Slab } from 'next/font/google'
import { Hero } from '@/components/hero'
import { CTA } from '@/components/cta'

const font = Montagu_Slab({ weight: '500', subsets: ['latin'] })

export default async function Home() {
  return (
    <div className="w-full mx-auto space-y-8 md:space-y-16">
      <Hero
        className={`${font?.className} text-background dark:text-foreground flex flex-col gap-8 md:gap-20 lg:gap-24 xl:gap-32`}
      >
        Create lasting memories shopping with Thrift.
        <CTA />
      </Hero>
      <ProductsHome />
      <Link
        href="/products"
        className="dark:text-blue-200 text-blue-700 block w-fit my-8 ml-[60%] sm:ml-[80%]"
      >
        See more
        <MoveRight className="inline ml-2" />
      </Link>
    </div>
  )
}
