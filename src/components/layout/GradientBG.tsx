import { type ComponentProps, type ReactNode } from 'react'

import styled from 'styled-components'
import { type Merge } from 'type-fest'

const GradientBGSC = styled.div<{
  $position?: string
  $image?: string
  $mobileImage?: string
  $size?: string
  $imageType?: 'image' | 'custom'
}>(
  ({
    theme,
    $position: position = 'top center',
    $size = '100%',
    $image: image = '/images/gradients/gradient-bg-1.jpg',
    $mobileImage: mobileImage,
    $imageType: imageType = 'image',
  }) => ({
    position: 'relative',
    '.bg': {
      // Make sure background doesn't intersect 3d objects in older Safari
      transform: `translateZ(-1000px)`,
      perspective: 'none',
    },
    '.bg, .bg::before': {
      overflow: 'hidden',
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
    },
    '.bg::before': {
      backgroundImage: imageType === 'image' ? `url(${image})` : image,
      backgroundPosition: position,
      backgroundSize: $size,
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.colors['fill-zero'],
      ...(mobileImage && {
        '@media (max-width: 767px)': {
          backgroundImage:
            imageType === 'image' ? `url(${mobileImage})` : mobileImage,
        },
      }),
    },
    '.content': {
      position: 'relative',
    },
  })
)

export function GradientBG({
  children,
  bgChildren,
  position,
  image,
  mobileImage,
  size,
  imageType,
  ...props
}: Merge<
  ComponentProps<typeof GradientBGSC>,
  {
    children: ReactNode
    bgChildren?: ReactNode
    position?: string
    image?: string
    mobileImage?: string
    size?: string
    imageType?: 'image' | 'custom'
  }
>) {
  return (
    <GradientBGSC
      $position={position}
      $image={image}
      $mobileImage={mobileImage}
      $size={size}
      $imageType={imageType}
      {...props}
    >
      <div className="bg">{bgChildren}</div>
      <div className="content">{children}</div>
    </GradientBGSC>
  )
}
