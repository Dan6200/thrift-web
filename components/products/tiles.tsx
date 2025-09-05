'use client'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  addItemAtom,
  getTotalCountAtom,
  isSmallScreenAtom,
  shoppingCartAtom,
} from '@/atoms'
import { useToast } from '../ui/use-toast'
import { useEffect, useState } from 'react'
import ProductCard from './utils/product-card'
import { Product } from '@/types/products'

export const ProductsTiles = ({
  productsToDisplay,
}: {
  productsToDisplay: Product[]
}) => {
  const isSmallScreen = useAtomValue(isSmallScreenAtom)
  const [shoppingCart, setShoppingCart] = useAtom(shoppingCartAtom)
  const addItem = useSetAtom(addItemAtom)
  const totalItems = useAtomValue(getTotalCountAtom)
  const { toast } = useToast()
  const [showToast, setShowToast] = useState(false)
  useEffect(() => {
    if (showToast)
      toast({
        title: `${totalItems} Items Added To Cart.`,
      })
  }, [toast, showToast, totalItems])

  return (
    <div className="mx-auto">
      <div className="my-8 w-full sm:px-2 sm:py-2 md:px-4 md:py-4 mx-auto place-items-center grid grid-cols-2 gap-y-4 sm:gap-y-8 md:gap-y-16 lg:gap-y-32 gap-2 sm:gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {productsToDisplay.map((product) => {
          return (
            <ProductCard
              key={'product_' + product?.product_id}
              {...{
                setShoppingCart,
                addItem,
                product,
                isSmallScreen,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

