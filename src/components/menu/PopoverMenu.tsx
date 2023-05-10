import styled, { useTheme } from 'styled-components'
import { animated, to, useTransition } from 'react-spring'

import {
  FloatingPortal,
  type Placement,
  type UseFloatingReturn,
} from '@floating-ui/react-dom-interactions'

import Popover, {
  type PopoverProps,
} from '@pluralsh/design-system/dist/components/ReactAriaPopover'
import { WrapWithIf } from '@pluralsh/design-system'
import { ReactNode } from 'react'

type PopoverMenuProps = {
  isOpen: boolean
  onClose: () => void
  //   listBoxState: ListState<object>
  //   listBoxProps: AriaListBoxOptions<object>
  floating: UseFloatingReturn<any>
  children: ReactNode
} & Pick<PopoverProps, 'popoverRef'>

export const PopoverWrapper = styled.div<{
  $isOpen: boolean
  $placement: Placement
}>(({ theme, $placement: placement }) => ({
  position: 'absolute',
  display: 'flex',
  width: '100%',
  alignItems: placement.startsWith('top') ? 'end' : 'start',
  ...(placement.endsWith('end') && { right: 0, left: 'auto' }),
  pointerEvents: 'none',
  zIndex: theme.zIndexes.selectPopover,
  clipPath: placement.startsWith('top')
    ? `polygon(-100px calc(100% + ${theme.spacing.xxsmall}px), calc(100% + 100px) calc(100% + ${theme.spacing.xxsmall}px), calc(100% + 100px) -100px, -100px -100px)`
    : `polygon(-100px ${-theme.spacing
        .xxsmall}px, -100px calc(100% + 100px), calc(100% + 100px) calc(100% + 100px), calc(100% + 100px) ${-theme
        .spacing.xxsmall}px)`,
  '&.enter-done': {
    clipPath: 'none',
  },
}))

const Animated = styled(animated.div)((_) => ({
  width: '100%',
  maxHeight: '100%',
  display: 'flex',
}))

function PopoverMenu({
  isOpen,
  onClose,
  //   listBoxState,
  //   listBoxProps,
  //   listBoxRef,
  popoverRef,
  //   dropdownHeaderFixed,
  //   dropdownFooterFixed,
  floating,
  children,
}: PopoverMenuProps) {
  const theme = useTheme()

  const direction = floating.placement.startsWith('bottom') ? -1 : 1

  const out = {
    opacity: 0,
    yOffset: 150,
  }
  const transitions = useTransition(isOpen ? [true] : [], {
    from: { ...out, delay: 1000 },
    enter: { opacity: 1, yOffset: 0 },
    leave: out,
    config: isOpen
      ? {
          mass: 0.6,
          tension: 280,
          velocity: 0.02,
        }
      : {
          mass: 0.6,
          tension: 400,
          velocity: 0.02,
          restVelocity: 0.1,
        },
  })

  const portalProps = {}

  return transitions((styles) => (
    <WrapWithIf
      condition
      wrapper={
        <FloatingPortal
          id={theme.portals.default.id}
          {...portalProps}
        />
      }
    >
      <PopoverWrapper
        $isOpen={isOpen}
        $placement={floating.placement}
        className="popoverWrapper"
        ref={floating.floating}
        style={{
          position: floating.strategy,
          left: floating.x ?? 0,
          top: floating.y ?? 0,
        }}
      >
        <Animated
          style={{
            ...styles,
            // Need to set translateY() here since flip() middleware might
            // change placement (and thus animation direction) right after
            // transition starts
            // https://www.react-spring.dev/docs/advanced/interpolation
            transform: to(
              styles.yOffset,
              (value) => `translateY(${direction * value}px)`
            ),
          }}
        >
          <Popover
            popoverRef={popoverRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            {children}
          </Popover>
        </Animated>
      </PopoverWrapper>
    </WrapWithIf>
  ))
}

export type { PopoverMenuProps as PopoverListBoxProps }
export { PopoverMenu as PopoverListBox }
