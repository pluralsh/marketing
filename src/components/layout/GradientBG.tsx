import { type ComponentProps, type ReactNode } from 'react'

import styled from 'styled-components'
import { type Merge } from 'type-fest'

const GradientBGSC = styled.div<{
  $position?: string
  $image?: string
  $size?: string
}>(
  ({
    theme,
    $position: position = 'top center',
    $size = '100%',
    $image: image = '/images/gradients/gradient-bg-1.jpg',
  }) => ({
    position: 'relative',
    '.bg': {
      // Make sure background doesn't intersect 3d objects in older Safari
      transform: `translateZ(-1000px)`,
      perspective: 'none',
    },
    '.bg, .bg::after': {
      overflow: 'hidden',
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
    },
    '.bg::after': {
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
      backgroundSize: $size,
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.colors['fill-zero'],
    },
    '.content': {
      position: 'relative',
    },
  })
)

export function GradientBG({
  children,
  position,
  image,
  size,
  ...props
}: Merge<
  ComponentProps<typeof GradientBGSC>,
  {
    children: ReactNode
    position?: string
    image?: string
    size?: string
  }
>) {
  return (
    <GradientBGSC
      $position={position}
      $image={image}
      $size={size}
      {...props}
    >
      <div className="bg" />
      <div className="content">{children}</div>
    </GradientBGSC>
  )
}
