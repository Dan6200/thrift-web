import { Input } from '@/components/ui/input'
import { ComponentProps } from 'react'

type InputProps = ComponentProps<typeof Input>
import { forwardRef } from 'react'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../ui/form'
import { ShippingInfoFormType } from '../types'

export const Address = ({
  form,
}: {
  form: UseFormReturn<ShippingInfoFormType>
}) => (
  <FormField
      control={form.control as any}
    name="address"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>Enter Address</FormLabel>
        <FormControl>
          <Input
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="Address"
            />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
