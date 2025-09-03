'use client'
import { useState, useEffect, useCallback } from 'react'
import { ProductsTiles } from './tiles'
import { Product } from '@/types/products'
import getProducts from '@/app/products/get-products' // Corrected import path and removed default export

export const Products = () => {
  const [productsToDisplay, setProductsToDisplay] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const itemsPerPage = 50 // You can make this dynamic if needed

  const fetchProducts = useCallback(async (page: number) => {
    try {
      // Assuming getProducts can take page and itemsPerPage as arguments
      // and returns an object with products and totalCount
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
    <div className="container p-4">
      <ProductsTiles
        productsToDisplay={productsToDisplay}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
