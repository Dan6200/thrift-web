'use client'
import { isSmallScreenAtom } from '@/atoms'
import { useAtomValue } from 'jotai'
import { Product } from '../types'
import Link from 'next/link'

export function Title({
  title,
  product_id,
}: Pick<Product, 'title' | 'product_id'>) {
  const isSmallScreen = useAtomValue(isSmallScreenAtom)
  const MAX_TITLE_LEN = isSmallScreen ? 15 : 50
  return (
    <Link
      href={`/products/${product_id}`}
      passHref
      className="active:text-accent h-[50%] lg:h-[65%] flex flex-col justify-between"
    >
      <h4 className="hover:text-primary dark:hover:text-secondary my-2 w-full whitespace-normal break-words">
        {/* remove &nbsp; that breaks ui */}
        {title.length > MAX_TITLE_LEN
          ? title.slice(0, MAX_TITLE_LEN).replace(/\u00A0/g, ' ') + '...'
          : title}
      </h4>
    </Link>
  )
}
