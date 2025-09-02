import ShippingInfo from '@/types/shipping-info'
import { useSetAtom } from 'jotai'
import { ShippingInfoFormType } from './types'

type SetShippingInfo = ReturnType<
  typeof useSetAtom<ShippingInfo | null, any[], any>
>

export async function submitHandler(
  setShippingInfo: SetShippingInfo,
  formData: ShippingInfoFormType,
) {
  const { delivery_instructions, ...newFormData } = formData
  setShippingInfo({
    ...newFormData,
    delivery_instructions: delivery_instructions
      ? delivery_instructions.split('\n')
      : null,
  })
}
