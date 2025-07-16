import { productAtom } from '@/atoms/index'
import { useSetAtom } from 'jotai'
import { ProductFormType } from './types'

type SetProduct = ReturnType<
  typeof useSetAtom<ProductFormType | null, any[], any>
>

export async function submitHandler(
  setProduct: SetProduct,
  formData: ProductFormType,
) {
  setProduct(formData)
}
