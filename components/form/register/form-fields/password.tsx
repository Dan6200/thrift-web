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

export const Password = ({
  form,
}: {
  form: UseFormReturn<RegisterFormState>
}) => (
  <FormField
      control={form.control as any}
    name="password"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Choose a Secure Password</FormLabel>
        <FormControl>
          <Input
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="Password"
            />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
