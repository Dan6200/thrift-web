// Purpose: Page for displaying all products
import { Products } from '@/components/products'
import { isProductData } from '@/types/products'
import getProducts from './get-products'

export default async function ProductsPage() {
  // fetch 3 pages of products
  const productData: unknown = await getProducts()
  if (!isProductData(productData)) {
    throw new Error('Invalid product data')
  }
  return (
    <>
      <Products products={productData.products} />
    </>
  )
}
