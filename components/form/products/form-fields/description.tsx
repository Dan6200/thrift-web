import { Textarea, TextareaProps } from '@/components/ui/textarea'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../ui/form'
import { ProductFormType } from '../types'

export const Description = ({
  form,
}: {
  form: UseFormReturn<ProductFormType, any, undefined>
}) => {
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block">Description</FormLabel>
          <FormControl>
            <Textarea
              {...(field as TextareaProps)}
              placeholder="Write about your product"
              className="h-24"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
