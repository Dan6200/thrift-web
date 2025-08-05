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

export const ListPrice = ({
  form,
}: {
  form: UseFormReturn<ProductFormType>
}) => (
  <FormField
    control={form.control as any}
    name="list_price"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>List Price</FormLabel>
        <FormControl>
          <Input
              type="number"
              onChange={(event) => field.onChange(+event.target.value)}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="Product's list price"
            />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
