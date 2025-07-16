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

export const ListPrice = ({
  form,
}: {
  form: UseFormReturn<ProductFormType, any, undefined>
}) => (
  <FormField
    control={form.control}
    name="list_price"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>List Price</FormLabel>
        <FormControl>
          <Input
            type="number"
            placeholder="Product's list price"
            {...(field as InputProps)}
            onChange={(event) => field.onChange(+event.target.value)}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
