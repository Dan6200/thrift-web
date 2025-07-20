import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
// import { ShoppingCartIcon, Plus } from 'lucide-react'
import { ShoppingCart } from '../../shopping-cart/types'
// import { Button } from '@/components/ui/button'
import { ProductImage } from '../image'
import { Product } from '../types'
// import { BuyNow } from './buy-now'
import { Price } from './price'
import { Dispatch, SetStateAction } from 'react'
import { useSetAtom } from 'jotai'
import { Title } from './title'

type AddItem = ReturnType<typeof useSetAtom<null, [newProduct: Product], void>>
type SetShoppingCart = ReturnType<typeof useSetAtom<null, [ShoppingCart], void>>

export default function ProductCard({
  // shoppingCart,
  product,
  isSmallScreen,
  // setShowToast,
  // addItem,
  // setShoppingCart,
}: {
  product: Product
  // setShowToast: Dispatch<SetStateAction<boolean>>
  // addItem: AddItem
  // setShoppingCart: SetShoppingCart
  // shoppingCart: ShoppingCart | null
  isSmallScreen: boolean
}) {
  // const MAX_TITLE_LEN = isSmallScreen ? 15 : 50
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
      <CardFooter className="p-2 sm:p-4 flex flex-1 flex-col justify-between">
        <Title title={product?.title} product_id={product?.product_id} />
        <Price netPrice={product?.net_price} listPrice={product?.list_price} />
      </CardFooter>
    </Card>
  )
}
/*
          <Button
            className="hover:bg-primary shadow-around p-2 sm:h-9 sm:w-full w-fit rounded-full self-end sm:self-center flex justify-between"
            variant="outline"
            onClick={() => {
              shoppingCart
                ? addItem(product)
                : setShoppingCart(new ShoppingCart(product, null))
              setShowToast(true)
            }}
          >
            <span className="hidden sm:block">Add To Cart</span>
            <ShoppingCartIcon />
            <Plus className="w-4" />
          </Button>
					/*}
          {/* <BuyNow
            imgData={product?.media?.find((img) => img?.is_display_image)}
            netPrice={product?.net_price}
            listPrice={product?.list_price}
            quantityAvailable={product?.quantity_available}
          />
					*/
