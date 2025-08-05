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
import { CardInfoFormType } from '../types'

export const CardNumber = ({
  form,
}: {
  form: UseFormReturn<CardInfoFormType>
}) => {
  return (
    <FormField
      control={form.control as any}
      name="card_number"
      render={({ field }) => (
        <FormItem className="md:w-[45%]">
          <FormLabel className="block">Card Number</FormLabel>
          <FormControl>
            <Input
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="XXXX XXXX XXXX XXXX"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
