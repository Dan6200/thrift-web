import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { Product } from '@/types/products'
import { UserAccount } from '@/components/user-account/types'
import ShippingInfo from '@/types/shipping-info'
import { CardInfo } from '@/types/card-info'
export * from './shopping-cart'
export * from './store'

export const pageAtom = atom(0)
export const productsAtom = atom<Product[]>([])
export const productAtom = atom<Product | null>(null)
export const isSmallScreenAtom = atom(true)
export const pageNumAtom = atom(1)
export const cardInfo = atom<CardInfo | null>(null)
export const userAtom = atomWithStorage<
  (UserAccount & { token: string }) | null
>('user_account_details', null)
export const shippingInfoAtom = atomWithStorage<ShippingInfo | null>(
  'shipping-info',
  null,
)

