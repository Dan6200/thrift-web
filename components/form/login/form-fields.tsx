'use client'
import { LoginFormState } from './types'
import {
  FormControl,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { UseFormReturn } from 'react-hook-form'

export const TabbedContactField = ({
  form,
}: {
  form: UseFormReturn<LoginFormState>
}) => (
  <>
    <Tabs defaultValue="email" className="">
      <TabsList className="h-fit grid grid-cols-2 mb-8">
        <TabsTrigger value="email">Email</TabsTrigger>
        <TabsTrigger value="phone">Phone Number</TabsTrigger>
      </TabsList>
      <TabsContent value="email">
        <Email form={form} />
      </TabsContent>
      <TabsContent value="phone">
        <Phone form={form} />
      </TabsContent>
    </Tabs>
  </>
)

export const Password = ({ form }: { form: UseFormReturn<LoginFormState> }) => (
  <FormField
    control={form.control}
    name="password"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input {...field} type="password" autoComplete="current-password" />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export const Email = ({ form }: { form: UseFormReturn<LoginFormState> }) => (
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input {...field} placeholder="Email" value={field.value ?? ''} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export const Phone = ({ form }: { form: UseFormReturn<LoginFormState> }) => (
  <FormField
    control={form.control}
    name="phone"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Phone</FormLabel>
        <FormControl>
          <Input
            {...field}
            value={field.value ?? ''}
            placeholder="08012345678"
            autoComplete="tel"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
