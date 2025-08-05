import { atom } from 'jotai'
import { StoreFormType } from '@/components/form/store/types'

export const storeAtom = atom<StoreFormType | null>(null)
