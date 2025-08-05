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
import { RegisterFormState } from '../types'

export const Phone = ({
  form,
}: {
  form: UseFormReturn<RegisterFormState>
}) => {
  return (
    <FormField
      control={form.control as any}
      name="phone"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="block">Phone number</FormLabel>
          <FormControl>
            <Input
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="Phone Number"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
