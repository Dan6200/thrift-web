import { FC, ReactNode } from 'react'

interface priceProps {
  netPrice: string | number
  listPrice: string | number
}

export const Price: FC<priceProps> = ({ netPrice, listPrice }) => {
  // if (typeof netPrice === 'string' && typeof listPrice === 'string')
  //   return (
  //     <>
  //       <p className="">
  //         {parseFloat(netPrice).toLocaleString('en-NG', {
  //           currency: 'NGN',
  //           style: 'currency',
  //         })}
  //       </p>
  //       {((parseFloat(listPrice) - parseFloat(netPrice)) /
  //         parseFloat(listPrice)) *
  //         100 >
  //         5 && (
  //         <p className="">
  //           -{' '}
  //           {Math.ceil(
  //             ((parseFloat(listPrice) - parseFloat(netPrice)) /
  //               parseFloat(listPrice)) *
  //               100,
  //           )}
  //           %
  //         </p>
  //       )}
  //     </>
  //   )
  // if (typeof netPrice !== 'number' || typeof listPrice !== 'number')
  //   throw new Error('Invalid price type')
  // ((listPrice - netPrice) / listPrice) * 100 > 5 && (
  //       <p className="">
  //         - {Math.ceil(((listPrice - netPrice) / listPrice) * 100)}%
  //       </p>
  //     )
  return (
    <p className="text-md sm:text-xl">
      {netPrice.toLocaleString('en-NG', {
        currency: 'NGN',
        style: 'currency',
      })}
    </p>
  )
}
