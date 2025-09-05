import { Product } from '@/types/products'
import { Star } from 'lucide-react'

export function Ratings({
  average_rating,
  review_count,
}: Pick<Product, 'average_rating' | 'review_count'>) {
  return (
    <div className="flex w-4/5 sm:w-3/5 justify-between">
      {/*<div className="flex w-4/5 sm:w-3/5 justify-between sm:justify-start sm:gap-1">*/}
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, i) => {
          const rating = average_rating ?? 0
          if (rating > i + 1) {
            return (
              // To offset the translate-x later
              <Star
                key={`full-${i}`}
                className="sm:w-6 w-4 text-secondary"
                fill="hsl(358 88% 58%)"
              />
            )
          }
          if (rating <= i + 1 && rating > i) {
            const diff = rating - i
            return (
              <>
                <Star
                  key={`half-${i}-a`}
                  className="sm:w-6 w-4 text-secondary"
                  fill="hsl(358 88% 58%)"
                  style={{ clipPath: `inset(0 ${(1 - diff) * 100}% 0 0)` }}
                />
                <Star
                  key={`half-${i}-b`}
                  className="sm:w-6 w-4 text-muted-foreground/60 scale-x-[-1] -translate-x-[100%]"
                  style={{ clipPath: `inset(0 ${diff * 100}% 0 0)` }}
                />
              </>
            )
          }
          return (
            <Star
              key={`empty-${i}`}
              className="sm:w-6 w-4 text-muted-foreground/60 -translate-x-[100%]"
            />
          )
        })}
      </div>
      ({review_count})
    </div>
  )
}
