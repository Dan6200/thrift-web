import { StoreFormType } from './types'

export const submitHandler = (
  setStore: (data: StoreFormType) => void,
  data: StoreFormType,
) => {
  console.log('Store data submitted:', data)
  setStore(data)
}
