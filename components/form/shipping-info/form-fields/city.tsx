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
import { ShippingInfoFormType } from '../types'

export const City = ({
  form,
}: {
  form: UseFormReturn<ShippingInfoFormType>
}) => (
  <FormField
    control={form.control as any}
    name="city"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>City/Town</FormLabel>
        <FormControl>
          <Input
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="Name of City"
            />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
