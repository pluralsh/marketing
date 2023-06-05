import styled from 'styled-components'

export const CarouselDots = styled.div((_) => ({
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
      border: `1px solid ${theme.colors['icon-xlight']}`,
    },
    '&::after': {
      backgroundColor: theme.colors['action-link-active'],
      opacity: 0.2,
      transform: 'scale(0)',
      transition: 'all 0.3s ease',
      ...($selected ? { transform: 'scale(1)', opacity: '100%' } : {}),
    },
  })
)
