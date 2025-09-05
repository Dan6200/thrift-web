import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { ProductsTiles } from './tiles'
import { Product } from '@/types/products'
import getProducts from '@/app/products/get-products' // Corrected import path and removed default export

export const Products = async () => {
  let page = 1,
    limit = 22

  let currentPage = page,
    totalPages = 0
  let products: Product[] | null = null
  let totalProducts = ''
  try {
    ;({ products, total_products: totalProducts } = await getProducts({
      page,
      limit,
    }))
    console.log('products', products)
    console.log('total products', totalProducts)
    totalPages = Number(totalProducts) / limit
  } catch (error) {
    console.error('Failed to fetch products:', error)
    // Handle error, maybe set an error state
  }

  const renderPaginationItems = () => {
    const items = []
    const maxVisiblePages = 5 // Adjust as needed
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (startPage > 1) {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink href="/products?page=1">1</PaginationLink>
        </PaginationItem>,
      )
      if (startPage > 2) {
        items.push(<PaginationEllipsis key="ellipsis-start" />)
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      items.push(
        <PaginationItem key={page}>
          <PaginationLink
            href={`/products?page=${page}`}
            isActive={page === currentPage}
          >
            {page}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(<PaginationEllipsis key="ellipsis-end" />)
      }
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href={`/products?page=${totalPages}`}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      )
    }
    return items
  }

  return (
    <div className="container p-4">
      {products && <ProductsTiles productsToDisplay={products} />}
      {totalPages > 1 && (
        <Pagination className="my-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`/products?page=${Math.max(1, currentPage - 1)}`}
                aria-disabled={currentPage === 1}
                tabIndex={currentPage === 1 ? -1 : undefined}
                className={
                  currentPage === 1
                    ? 'pointer-events-none opacity-50'
                    : undefined
                }
              />
            </PaginationItem>
            {renderPaginationItems()}
            <PaginationItem>
              <PaginationNext
                href={`/products?page=${Math.min(totalPages, currentPage + 1)}`}
                aria-disabled={currentPage === totalPages}
                tabIndex={currentPage === totalPages ? -1 : undefined}
                className={
                  currentPage === totalPages
                    ? 'pointer-events-none opacity-50'
                    : undefined
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}
