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

export const NetPrice = ({
  form,
}: {
  form: UseFormReturn<ProductFormType, any, undefined>
}) => (
  <FormField
    control={form.control}
    name="net_price"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>Net Price</FormLabel>
        <FormControl>
          <Input
            type="number"
            placeholder="Product's net price"
            {...(field as InputProps)}
            onChange={(event) => field.onChange(+event.target.value)}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
