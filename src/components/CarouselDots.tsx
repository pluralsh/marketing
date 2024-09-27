import { ArrowLeftIcon } from '@pluralsh/design-system'

import styled from 'styled-components'

export const CarouselDots = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  marginTop: theme.spacing.large,
  justifyContent: 'center',
}))

export const CarouselDotsWrapperSC = styled.div((_) => ({
  display: 'flex',
  gap: 5,
}))

export const CarouselDot = styled.div<{ $selected: boolean }>(
  ({ theme, $selected }) => ({
    position: 'relative',
    pointerEvents: 'auto',
    cursor: 'pointer',

    width: 10,
    height: 10,
    '&::after, &::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: '50%',
      overflow: 'hidden',
    },
    '&::before': {
      backgroundColor: theme.colors['action-link-inline-visited-hover'],
    },
    '&::after': {
      backgroundColor: theme.colors['action-link-active'],
      transform: 'scale(0)',
      transition: 'all 0.3s ease',
      ...($selected ? { transform: 'scale(1)', opacity: '100%' } : {}),
    },
  })
)

export const CarouselArrow = styled(ArrowLeftIcon)<{
  $direction: 'left' | 'right'
}>(({ $direction }) => ({
  cursor: 'pointer',
  position: 'absolute',
  top: '-40%',
  transform: $direction === 'left' ? 'none' : 'rotate(180deg)',
  left: $direction === 'left' ? 0 : 'auto',
  right: $direction === 'right' ? 0 : 'auto',
  '&:hover': {
    filter: 'brightness(1.2)',
  },
}))
