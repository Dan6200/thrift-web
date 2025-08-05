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
import { StoreFormType } from '../types'

export const State = ({
  form,
}: {
  form: UseFormReturn<StoreFormType>
}) => (
  <FormField
      control={form.control as any}
    name="store_address.state"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>State</FormLabel>
        <FormControl>
          <Input
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="State"
            />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
