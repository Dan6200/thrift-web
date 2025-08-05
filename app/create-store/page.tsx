import { StoreForm } from '@/components/form/store'

export default function CreateStore() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-semibold mb-6">Create New Store</h1>
      <StoreForm />
    </div>
  )
}
