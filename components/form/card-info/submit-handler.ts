import { useSetAtom } from 'jotai'
import { CardInfoFormType } from './types'
import { CardInfo } from '@/types/card-info'

type SetCardInfo = ReturnType<typeof useSetAtom<CardInfo | null, any[], any>>

export async function submitHandler(
  setCardInfo: SetCardInfo,
  formData: CardInfoFormType,
) {
  setCardInfo(formData)
}
