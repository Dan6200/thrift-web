import { ProductsForm } from '@/components/form/products'

export default function AddProduct() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>
      <ProductsForm />
    </div>
  )
}

