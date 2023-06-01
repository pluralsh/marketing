import { Children, type ReactNode, useState } from 'react'

import { Button, CaretRightIcon } from '@pluralsh/design-system'
import { type ButtonProps } from 'honorable'

import { useVisuallyHidden } from '@react-aria/visually-hidden'
import styled from 'styled-components'

import { mqs } from '@src/breakpoints'

const switchMQ = mqs.sm

function CarouselUnstyled({ children, ...props }: { children: ReactNode }) {
  const [selected, setSelected] = useState(0)
  const count = Children.count(children)

  const dots = Children.map(children, (child, i) => {
    console.log('child.key', (child as any)?.key)

    return (
      <Dot
        onClick={() => {
          setSelected(i)
        }}
        $selected={i === selected}
      />
    )
  })

  return (
    <div {...props}>
      <ItemsWrap style={{ translate: `-${100 * selected}%` }}>
        {Children.map(children, (child, i) => {
          console.log('child', child)

          return (
            <ItemWrap
              key={i}
              style={{
                ...(i !== 0 ? { position: 'absolute', top: 0, left: 0 } : {}),
                transform: `translate(${100 * i}%)`,
              }}
            >
              {child}
            </ItemWrap>
          )
        })}
      </ItemsWrap>
      <Interface>
        <Dots className="absolute">{dots}</Dots>
        <Buttons>
          <NavButton
            direction="left"
            disabled={selected === 0}
            onClick={() => {
              setSelected(Math.max(0, selected - 1))
            }}
          />
          <NavButton
            direction="right"
            disabled={selected === count - 1}
            onClick={() => {
              setSelected(Math.min(count - 1, selected + 1))
            }}
          />
        </Buttons>
      </Interface>
    </div>
  )
}

const NavButton = styled(
  ({ direction, ...props }: { direction: 'left' | 'right' } & ButtonProps) => {
    const { visuallyHiddenProps } = useVisuallyHidden()

    return (
      <Button
        floating
        {...props}
      >
        <div
          className="icon"
          aria-hidden="true"
        >
          <CaretRightIcon />
        </div>
        <div {...visuallyHiddenProps}>{direction}</div>
      </Button>
    )
  }
)(({ direction }) => ({
  pointerEvents: 'auto',
  '&&': {
    width: 38,
  },
  '.icon': {
    display: 'flex',
    alignItems: 'center',
    transform: `scaleX(${direction === 'left' ? '-100%' : '100%'})`,
  },
}))

export const Carousel = styled(CarouselUnstyled)((_) => ({
  position: 'relative',
  overflow: 'hidden',
}))

const Interface = styled.div(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing.large,
  left: theme.spacing.large,
  bottom: theme.spacing.large,
  right: theme.spacing.large,
  //   padding: theme.spacing.large,
  pointerEvents: 'none',
}))

const OFFSET = 10

const Buttons = styled.div(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'start',
  paddingTop: '208px',
  justifyContent: 'space-between',
  [switchMQ]: {
    paddingTop: 'unset',
    gap: theme.spacing.medium,
    justifyContent: 'end',
    alignItems: 'end',
  },
}))

const ItemWrap = styled.div((_) => ({
  width: '100%',
  paddingLeft: OFFSET,
  paddingRight: OFFSET,
}))

const ItemsWrap = styled.div((_) => ({
  position: 'relative',
  marginLeft: -OFFSET,
  marginRight: -OFFSET,
  transition: 'all 0.7s ease',
}))

const Dots = styled.div((_) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  gap: 5,
  alignItems: 'end',
  justifyContent: 'center',
  [switchMQ]: {
    justifyContent: 'start',
  },
}))

const Dot = styled.div<{ $selected: boolean }>(({ theme, $selected }) => ({
  pointerEvents: 'auto',
  cursor: 'pointer',
  borderRadius: '50%',
  width: 10,
  height: 10,
  ...($selected
    ? { backgroundColor: theme.colors['action-link-active'] }
    : { border: `1px solid ${theme.colors['icon-xlight']}` }),
}))
