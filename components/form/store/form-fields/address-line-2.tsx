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
import { StoreFormType } from '../types'

export const AddressLine2 = ({
  form,
}: {
  form: UseFormReturn<StoreFormType>
}) => (
  <FormField
      control={form.control as any}
    name="store_address.address_line_2"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>Address Line 2</FormLabel>
        <FormControl>
          <Input
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="Apartment, suite, unit, building, floor, etc."
            />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
