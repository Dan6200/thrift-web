//cspell: ignore semibold jotai
'use client'
import { useState, useEffect, useCallback } from 'react'
import { ProductsTiles } from './tiles'
import { Product } from '@/types/products'
import getProducts from '@/app/products/get-products'

/** Display products in a grid
 * for home page only
 * @returns A grid of products
 * @description This component displays pre-fetched products in a grid. It also
 * fetches more products from the API when the last page is reached
 * */

export const ProductsHome = () => {
  const [productsToDisplay, setProductsToDisplay] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const itemsPerPage = 22 // You can make this dynamic if needed

  const fetchProducts = useCallback(async (page: number) => {
    try {
      const { products, totalCount } = await getProducts({
        page,
        limit: itemsPerPage,
      })
      setProductsToDisplay(products)
      setTotalPages(Math.ceil(totalCount / itemsPerPage))
    } catch (error) {
      console.error('Failed to fetch products:', error)
      // Handle error, maybe set an error state
    }
  }, [itemsPerPage])

  useEffect(() => {
    fetchProducts(currentPage)
  }, [currentPage, fetchProducts])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="container mx-auto my-0">
      <h4 className="w-full mx-auto my-4 text-xl md:text-3xl font-bold text-center">
        New Arrivals
      </h4>
      <ProductsTiles
        productsToDisplay={productsToDisplay}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
