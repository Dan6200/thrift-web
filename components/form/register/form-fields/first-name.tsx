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

export const FirstName = ({
  form,
}: {
  form: UseFormReturn<RegisterFormState>
}) => (
  <FormField
      control={form.control as any}
    name="first_name"
    render={({ field }) => (
      <FormItem>
        <FormLabel>First Name</FormLabel>
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
