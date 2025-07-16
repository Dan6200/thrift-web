'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { createVendorAccount } from './utils'
import { useAtomValue } from 'jotai'
import { userAtom } from '@/atoms'
import router from 'next/router'

export default function CreateVendorPage() {
  const userAccount = useAtomValue(userAtom)
  if (userAccount?.is_vendor) router.push('/list-product')
  return (
    <div className="container flex overflow-hidden h-[80vh] mx-auto p-4 mt-20">
      <Card className="w-full h-fit rounded-lg space-y-4 sm:w-4/5 p-8 mx-auto shadow-lg shadow-primary">
        <CardHeader className="w-full mx-auto text-2xl font-bold text-center">
          Start Selling On Thrift!
        </CardHeader>
        <CardContent className="space-x-8 flex items-start">
          <Image
            className="rounded-md"
            src="/pexels-shop.jpg"
            alt="shop image"
            width={500}
            height={500}
          />
          <p>
            &quot;Create a vendor account to list your products, reach more
            customers, and track your sales with ease. Our platform gives you a
            powerful dashboard to manage orders and view performance
            insights—all in one place. Ready to expand your reach? Join today
            and start selling!&quot;
          </p>
        </CardContent>
        <CardFooter className="flex justify-end w-full">
          <Button className="" onClick={() => createVendorAccount()}>
            Create A Vendor Account
          </Button>
        </CardFooter>
      </Card>
      <section className="absolute top-0 right-10 mt-[30%] flex flex-col items-center h-fit overflow-y-hidden">
        <div className="bg-primary rounded-full w-[50px] h-[50px] flex justify-center items-center">
          1
        </div>
        <div className="border-primary border h-96 w-0"></div>
      </section>
    </div>
  )
}
