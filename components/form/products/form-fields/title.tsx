import { Input, InputProps } from '@/components/ui/input'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../ui/form'

export const Title = ({
  form,
}: {
  form: UseFormReturn<CardInfoFormType, any, undefined>
}) => (
  <FormField
    control={form.control}
    name="title"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>Product Title</FormLabel>
        <FormControl>
          <Input placeholder="Product's title" {...(field as InputProps)} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
