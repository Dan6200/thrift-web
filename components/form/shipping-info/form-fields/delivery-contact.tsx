import { Input } from '@/components/ui/input'
import { ComponentProps } from 'react'

type InputProps = ComponentProps<typeof Input>
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../ui/form'
import { ShippingInfoFormType } from '../types'

export const DeliveryContact = ({
  form,
}: {
  form: UseFormReturn<ShippingInfoFormType>
}) => {
  return (
    <FormField
      control={form.control as any}
      name="delivery_contact"
      render={({ field }) => (
        <FormItem className="md:w-[45%]">
          <FormLabel className="block">Delivery Contact</FormLabel>
          <FormControl>
            <Input
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="Delivery Contact"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
