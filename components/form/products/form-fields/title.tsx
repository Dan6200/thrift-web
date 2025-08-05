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

export const Title = ({
  form,
}: {
  form: UseFormReturn<ProductFormType>
}) => (
  <FormField
      control={form.control as any}
    name="title"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>Product Title</FormLabel>
        <FormControl>
          <Input
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="Product's title"
            />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
