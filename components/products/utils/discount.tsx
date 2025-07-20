import { FC, ReactNode } from 'react'

interface priceProps {
  netPrice: number
  listPrice: number
}

export const Discount: FC<priceProps> = ({ netPrice, listPrice }) => {
  return (
    ((listPrice - netPrice) / listPrice) * 100 > 5 && (
      <span className="absolute p-2 sm:p-4 rounded-full right-2 top-2 dark:bg-secondary/80 dark:text-foreground bg-primary/70 text-background font-bold">
        - {Math.ceil(((listPrice - netPrice) / listPrice) * 100)}%
      </span>
    )
  )
}
