'use client'
import { Button } from '@/components/ui/button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Form } from '../../ui/form'
import { StoreFormType } from './types'
import { submitHandler } from './submit-handler'
import useFormProps from './use-form-props'
import { Fragment } from 'react'
import { storeAtom } from '@/atoms/index'
import { useSetAtom } from 'jotai'

import {
  StoreName,
  VendorId,
  CustomDomain,
  AddressLine1,
  AddressLine2,
  City,
  State,
  ZipPostalCode,
  Country,
} from './form-fields'

export function StoreForm() {
  const setStore = useSetAtom(storeAtom)
  const form = useForm<StoreFormType>(useFormProps)
  const { handleSubmit } = form
  const submit: SubmitHandler<StoreFormType> = submitHandler.bind(
    null,
    setStore,
  )

  return (
    <Fragment>
      <Form {...form}>
        <form className="flex flex-col w-full" onSubmit={handleSubmit(submit)}>
          <StoreName form={form} />
          <VendorId form={form} />
          <CustomDomain form={form} />
          <AddressLine1 form={form} />
          <AddressLine2 form={form} />
          <City form={form} />
          <State form={form} />
          <ZipPostalCode form={form} />
          <Country form={form} />
          <Button className="w-fit mx-auto mt-4 mb-8" type="submit">
            Create Store
          </Button>
        </form>
      </Form>
    </Fragment>
  )
}
