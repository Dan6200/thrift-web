// Purpose: Page for displaying all products
import { Products } from '@/components/products'
import { isProductData } from '@/types/products'
import getProducts from './get-products'

export default async function ProductsPage() {
  // Products component now handles fetching internally
  return (
    <>
      <Products />
    </>
  )
}
