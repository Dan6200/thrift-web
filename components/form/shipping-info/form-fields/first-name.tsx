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

export const RecipientFirstName = ({
  form,
}: {
  form: UseFormReturn<ShippingInfoFormType>
}) => (
  <FormField
      control={form.control as any}
    name="recipient_first_name"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>Recipient First Name</FormLabel>
        <FormControl>
          <Input
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="First Name"
            />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
