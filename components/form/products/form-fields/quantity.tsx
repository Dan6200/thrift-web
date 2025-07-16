import { Input, InputProps } from '@/components/ui/input'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../ui/form'
import { ProductFormType } from '../types'

export const Quantity = ({
  form,
}: {
  form: UseFormReturn<ProductFormType, any, undefined>
}) => (
  <FormField
    control={form.control}
    name="quantity_available"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>Quantity Available</FormLabel>
        <FormControl>
          <Input
            type="number"
            placeholder="Available quantity"
            {...(field as InputProps)}
            onChange={(event) => field.onChange(+event.target.value)}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
