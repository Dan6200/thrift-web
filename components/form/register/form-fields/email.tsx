import { Input } from '@/components/ui/input'
import { ComponentProps } from 'react'

type InputProps = ComponentProps<typeof Input>
import { forwardRef } from 'react'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../ui/form'
import { RegisterFormState } from '../types'

export const Email = ({
  form,
}: {
  form: UseFormReturn<RegisterFormState>
}) => (
  <FormField
      control={form.control as any}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Enter your Email</FormLabel>
        <FormControl>
          <Input
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="Email"
            />
        </FormControl>
        <FormDescription>
          You may optionally enter your email, phone number or both
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
)
