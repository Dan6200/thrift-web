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

export const Name = ({
  form,
}: {
  form: UseFormReturn<CardInfoFormType>
}) => (
  <FormField
    control={form.control as any}
    name="name"
    render={({ field }) => (
      <FormItem className="md:w-[45%]">
        <FormLabel>Name On Card</FormLabel>
        <FormControl>
          <Input
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              value={field.value}
              placeholder="Name"
            />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
