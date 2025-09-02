//cspell:ignore CldImage, cloudinary, cloudinary's, unoptimized
'use client'
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import { ImgData } from '@/types/products'

export function ProductImage({
  className,
  imgData,
  width,
  height,
}: {
  className: string
  width: number
  height: number
  imgData: ImgData | undefined
}) {
  const placeHolder =
    'https://images.pexels.com/photos/16952091/pexels-photo-16952091/free-photo-of-wood-landscape-field-summer.jpeg'

  if (imgData?.filepath) {
    const src = imgData.filepath
    const alt = imgData.description
    // Note explicitly setting version is not necessary
    return (
      <CldImage
        {...{ src, alt, className, width, height }}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    )
  }
  return (
    <Image
      src={placeHolder}
      alt={'placeholder'}
      width={512}
      height={512}
      className={className}
    />
  )
}
