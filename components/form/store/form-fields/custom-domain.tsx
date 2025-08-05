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

export const CustomDomain = ({
  form,
}: {
  form: UseFormReturn<StoreFormType>
}) => (
  <FormField
      control={form.control as any}
    name="custom_domain"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>Custom Domain</FormLabel>
        <FormControl>
          <Input
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="yourstore.com"
            />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
