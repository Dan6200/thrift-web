import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
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
  currentPage,
  totalPages,
  onPageChange,
}: {
  productsToDisplay: Product[]
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
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

  const renderPaginationItems = () => {
    const items = []
    const maxVisiblePages = 5 // Adjust as needed
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (startPage > 1) {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink onClick={() => onPageChange(1)}>1</PaginationLink>
        </PaginationItem>
      )
      if (startPage > 2) {
        items.push(<PaginationEllipsis key="ellipsis-start" />)
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      items.push(
        <PaginationItem key={page}>
          <PaginationLink
            onClick={() => onPageChange(page)}
            isActive={page === currentPage}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      )
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(<PaginationEllipsis key="ellipsis-end" />)
      }
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      )
    }
    return items
  }

  return (
    <div className="mx-auto">
      <div className="my-8 w-full sm:px-2 sm:py-2 md:px-4 md:py-4 mx-auto place-items-center grid grid-cols-2 gap-y-4 sm:gap-y-8 md:gap-y-16 lg:gap-y-32 gap-2 sm:gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {productsToDisplay.map((product, index) => {
          console.log(product.product_id, index)
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
      {totalPages > 1 && (
        <Pagination className="my-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                aria-disabled={currentPage === 1}
                tabIndex={currentPage === 1 ? -1 : undefined}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
            {renderPaginationItems()}
            <PaginationItem>
              <PaginationNext
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                aria-disabled={currentPage === totalPages}
                tabIndex={currentPage === totalPages ? -1 : undefined}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}
