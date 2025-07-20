import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ProductImage } from '../image'
import { Product } from '../types'
import { Price } from './price'
import { Title } from './title'
import { Ratings } from './rating'

export default function ProductCard({ product }: { product: Product }) {
  if (!product?.average_rating) return null
  return (
    <Card className="h-fit flex flex-col w-full overflow-hidden rounded-sm">
      <Link
        href={`/products/${product?.product_id}`}
        passHref
        className="hover:bg-primary/20"
      >
        <CardContent className="bg-background h-[10rem] sm:h-[16rem] border-b p-0 flex items-center">
          <ProductImage
            className="object-contain mx-auto h-[10rem] sm:h-[16rem]"
            imgData={product?.media.find((img) => img?.is_display_image)}
            width={256}
            height={256}
          />
        </CardContent>
      </Link>
      <CardFooter className="p-2 sm:p-4 flex flex-1 flex-col gap-4 justify-between">
        <Title title={product?.title} product_id={product?.product_id} />
        <Ratings
          average_rating={product?.average_rating}
          review_count={product?.review_count}
        />
        <Price netPrice={product?.net_price} listPrice={product?.list_price} />
      </CardFooter>
    </Card>
  )
}
