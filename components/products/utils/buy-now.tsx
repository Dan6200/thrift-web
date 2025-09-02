'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../../ui/dialog'
import { useState } from 'react'
import { Check, ShoppingCart } from 'lucide-react'
import { useAtomValue } from 'jotai'
import { shippingInfoAtom } from '@/atoms'
import { ImgData } from '@/types/products'
import { AddShippingInfo } from './add-shipping-info'
import { SelectQuantity } from './select-quantity'
import { AddCardInfo } from './add-card-info'

export const BuyNow = ({
  imgData,
  netPrice,
  quantityAvailable,
}: {
  imgData: ImgData
  netPrice: string | number
  listPrice: string | number
  quantityAvailable: number
  isProductPage?: boolean
}) => {
  const shippingInfo = useAtomValue(shippingInfoAtom)
  const [isAddingShipping, setIsAddingShipping] = useState(false)
  const [isSelectingQuantity, setIsSelectingQuantity] = useState(true)
  const [isAddingCard, setIsAddingCard] = useState(false)
  const [quantity, setQuantity] = useState(1)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-[3rem] text-base sm:text-md md:text-xl text-primary-foreground hover:transition-colors font-bold w-full bg-secondary flex-1 bg-gradient-to-r hover:bg-gradient-to-l from-secondary to-primary gap-2 sm:gap-4">
          Buy Now
          <span className="flex w-8 sm:w-16">
            <ShoppingCart />
            <Check />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="transition-all ease-in-out overflow-y-scroll rounded-md w-[90vw] p-8 py-16 md:p-16 h-[90vh] sm:h-[80vh] sm:w-[80vw] md:w-[70vw] max-w-none">
        {isSelectingQuantity ? (
          <SelectQuantity
            quantity={quantity}
            quantityAvailable={quantityAvailable}
            setQuantity={setQuantity}
            shippingInfo={shippingInfo}
            imgData={imgData}
            netPrice={netPrice}
            setIsSelectingQuantity={setIsSelectingQuantity}
            setIsAddingCard={setIsAddingCard}
            setIsAddingShipping={setIsAddingShipping}
          />
        ) : isAddingShipping ? (
          <AddShippingInfo
            shippingInfo={shippingInfo}
            setIsAddingCard={setIsAddingCard}
            setIsAddingShipping={setIsAddingShipping}
            setIsSelectingQuantity={setIsSelectingQuantity}
          />
        ) : isAddingCard ? (
          <AddCardInfo
            shippingInfo={shippingInfo}
            setIsAddingCard={setIsAddingCard}
            setIsAddingShipping={setIsAddingShipping}
            setIsSelectingQuantity={setIsSelectingQuantity}
          />
        ) : (
          <SelectQuantity
            quantity={quantity}
            quantityAvailable={quantityAvailable}
            setQuantity={setQuantity}
            shippingInfo={shippingInfo}
            imgData={imgData}
            netPrice={netPrice}
            setIsSelectingQuantity={setIsSelectingQuantity}
            setIsAddingCard={setIsAddingCard}
            setIsAddingShipping={setIsAddingShipping}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
