import { Product } from '@/types/products'
import Link from 'next/link'

export function Title({
  title,
  product_id,
}: Pick<Product, 'title' | 'product_id'>) {
  // TODO: Use css to truncate based on pixel size...
  return (
    <Link
      href={`/products/${product_id}`}
      passHref
      className="active:text-accent w-full flex justify-between"
    >
      <h4 className="sm:text-xl hover:text-primary dark:hover:text-secondary single-line-truncate-responsive w-full whitespace-normal break-words">
        {title}
      </h4>
    </Link>
  )
}
