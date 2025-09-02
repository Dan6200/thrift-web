import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ProductImage } from '../image'
import { Price } from './price'
import { Title } from './title'
import { Ratings } from './rating'
import { Discount } from './discount'
import { Product } from '@/types/products'

export default function ProductCard({ product }: { product: Product }) {
  const imageData = product?.media.find((img) => img.is_display_image)
  if (!imageData) throw new Error('Product must have a display image')
  return (
    <Card className="h-fit flex flex-col w-full overflow-hidden rounded-sm">
      <Link
        href={`/products/${product?.product_id}`}
        passHref
        className="hover:bg-primary/20 relative"
      >
        <CardContent className="bg-background h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[16rem] border-b p-0 flex items-center">
          <ProductImage
            className="object-contain mx-auto h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[16rem]"
            imgData={imageData}
            width={256}
            height={256}
          />
        </CardContent>
        <Discount
          listPrice={product?.list_price}
          netPrice={product?.net_price}
        />
      </Link>
      <CardFooter className="p-2 sm:p-4 flex flex-1 flex-col gap-2 sm:gap-4 justify-between">
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
