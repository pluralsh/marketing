import { type ReactNode } from 'react'

import styled from 'styled-components'

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
    '.bg, .bg::after': {
      '--blur-amount': '0px',
      overflow: 'hidden',
      content: '""',
      position: 'absolute',
      top: 'calc(var(--blur-amount) * -1.5)',
      left: 'calc(var(--blur-amount) * -1.5)',
      right: 'calc(var(--blur-amount) * -1.5)',
      bottom: 'calc(var(--blur-amount) * -1.5)',
    },
    '.bg::after': {
      '--blur-amount': '10px',
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
      backgroundSize: $size,
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.colors['fill-zero'],
      filter: 'blur(var(--blur-amount))',
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
}: {
  children: ReactNode
  position?: string
  image?: string
  size?: string
}) {
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
