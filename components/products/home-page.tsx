//cspell: ignore semibold jotai
import { ProductsTiles } from './tiles'
import { Product } from '@/types/products'
import getProducts from '@/app/products/get-products'

/** Display products in a grid
 * for home page only
 * @returns A grid of products
 * @description This component displays pre-fetched products in a grid. It also
 * fetches more products from the API when the last page is reached
 * */

export const ProductsHome = async () => {
  const page = 1,
    limit = 22
  let products: Product[]
  try {
    ;({ products } = await getProducts({
      page,
      limit,
    }))
    console.log('products', products)
  } catch (error) {
    console.error('Failed to fetch products:', error)
    // Handle error, maybe set an error state
  }

  return (
    <div className="container mx-auto my-0">
      <h4 className="w-full mx-auto my-4 text-xl md:text-3xl font-bold text-center">
        New Arrivals
      </h4>
      <ProductsTiles
        productsToDisplay={products}
        currentPage={page}
        totalPages={limit}
      />
    </div>
  )
}
