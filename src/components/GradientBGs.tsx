import { type ComponentProps } from 'react'

import styled from 'styled-components'

import { breakpoints, mqs } from '@src/breakpoints'

export const GradientBG = styled.div(() => ({
  background: 'url(/images/gradients/gradient-blue-1.png)',
  backgroundSize: 'cover',
}))
export const HeroGradientBG = styled(
  ({ className, children, ...props }: ComponentProps<'div'>) => (
    <div className={className}>
      <div className="background" />
      <div
        className="content"
        {...props}
      >
        {children}
      </div>
    </div>
  )
)(({ theme }) => ({
  position: 'relative',
  '.background, .background::before, .background::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 750,
    maskImage: 'linear-gradient(rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
  },
  '.background': {
    overflow: 'hidden',
    opacity: 0.45,
  },
  '.content': {
    position: 'relative',
  },
  '.background::before': {
    opacity: 0.6,
    minWidth: breakpoints.xxl,
    right: 'auto',
    background:
      'linear-gradient(76.99deg, rgba(249, 250, 251, 0.6) 22.61%, rgba(73, 79, 242, 0.6) 58.15%, rgba(143, 214, 255, 0.6) 74.8%, rgba(249, 250, 251, 0.6) 101.64%);',
  },
  '.background::after': {
    background: `linear-gradient(28.91deg, ${theme.colors['fill-zero']} 42.04%, rgba(50, 53, 59, 0) 81.67%)`,
  },
  [mqs.xxl]: {
    '.background::before': {
      minWidth: 'unset',
      right: 0,
    },
  },
}))
