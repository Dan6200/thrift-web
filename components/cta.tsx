import { cn } from '@/lib/utils'
import Link from 'next/link'

export function CTA({
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'text-base sm:text-lg md:text-xl xl:text-2xl flex flex-col sm:flex-row gap-3 md:gap-6 w-3/4 md:w-[50vw] lg:w-[30vw] md:items-start',
        className,
      )}
    >
      <Link href="/products" className="h-9 sm:h-14 w-full flex-1">
        <button
          type="button"
          className="h-full px-4 py-2 items-center justify-center rounded-md sm:rounded-lg md:rounded-xl transition-colors duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 flex w-full bg-gradient-to-r hover:bg-gradient-to-l from-hero-secondary to-hero-primary capitalize text-hero-primary-foreground font-semibold hover:shadow-wide shadow-primary hover:shadow-primary/30"
        >
          Browse
        </button>
      </Link>
      <div className="rounded-md md:rounded-lg shadow-around hover:shadow-wide hover:shadow-secondary/30 shadow-secondary/50 h-9 sm:h-14 bg-transparent w-full sm:w-fit flex-1 transition-all duration-500">
        <div className="border-2 md:border-4 lg:border-[6px] border-secondary/50 rounded-md md:rounded-lg h-full w-full bg-secondary/10">
          <Link
            href="/create-store"
            className="text-center block h-full rounded-md md:rounded-lg w-full bg-transparent"
          >
            <button
              type="button"
              className="p-1 w-full h-full capitalize font-semibold text-shadow-sm text-background dark:text-foreground"
            >
              Start selling
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
