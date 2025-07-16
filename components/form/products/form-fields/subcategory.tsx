import { Input, InputProps } from '@/components/ui/input'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form'
import { ProductFormType } from '../types'

export const Subcategory = ({
  form,
}: {
  form: UseFormReturn<ProductFormType, any, undefined>
}) => (
  <FormField
    control={form.control}
    name="subcategory_id"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>Subcategory</FormLabel>
        <FormControl>
          <Input
            type="number"
            placeholder="Product's subcategory ID"
            {...(field as InputProps)}
            onChange={(event) => field.onChange(+event.target.value)}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
