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
import { ProductFormType } from '../types'

export const Category = ({
  form,
}: {
  form: UseFormReturn<ProductFormType>
}) => (
  <FormField
      control={form.control as any}
    name="category_id"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>Category</FormLabel>
        <FormControl>
          <Input
              type="number"
              onChange={(event) => field.onChange(+event.target.value)}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="Product's category ID"
            />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
