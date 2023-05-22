import {
  type ComponentProps,
  type HTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { Card, CaretDownIcon } from '@pluralsh/design-system'

import useResizeObserver from '@pluralsh/design-system/dist/hooks/useResizeObserver'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

import { useDisclosure } from './hooks/useDisclosure'

const paddingTransition = '0.2s ease'

function AccordionTriggerUnstyled({
  children,
  isOpen: _isOpen,
  ...props
}: { isOpen?: boolean } & ComponentProps<'div'>) {
  return (
    <div {...props}>
      <div className="content">{children}</div>
      <div className="icon">
        <CaretDownIcon size={14} />
      </div>
    </div>
  )
}

const AccordionTrigger = styled(AccordionTriggerUnstyled)(({ theme }) => {
  const focusInset = theme.spacing.xsmall
  const padding = theme.spacing.medium
  const bottomPadOpen = theme.spacing.small
  const bottomPadClosed = padding
  const bottomPadDiff = bottomPadClosed - bottomPadOpen

  return {
    display: 'flex',
    gap: theme.spacing.medium,
    padding,
    transition: `paddingBottom ${paddingTransition}`,
    ...theme.partials.text.body2Bold,
    '&[aria-expanded="true"]': {
      paddingBottom: bottomPadOpen,
    },
    '.content': {
      flexGrow: 1,
    },
    '.icon > *:first-child': {
      transform: 'scale(100%)',
      transition: 'transform 0.4 ease',
    },
    '&:focus-visible': {
      outline: 'none',
      position: 'relative',
      '&::after': {
        ...theme.partials.focus.insetAbsolute,
        borderRadius: theme.borderRadiuses.medium,
        top: focusInset,
        bottom: focusInset,
        left: focusInset,
        right: focusInset,
      },
      '&[aria-expanded="true"]::after': {
        bottom: focusInset - bottomPadDiff,
      },
    },
    '&:hover': {
      '.icon > *:first-child': {
        transform: 'scale(115%)',
      },
    },
    '.icon': {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      marginLeft: theme.spacing.xsmall,
      transformOrigin: '50% 50%',
      transform: 'scaleY(100%)',
      transition: 'transform 0.2s ease',
    },
    '&[aria-expanded="true"] .icon': {
      transform: 'scaleY(-100%)',
    },
  }
})

function AccordionContentUnstyled({
  isOpen,
  className,
  children,
  pad: _pad,
  ...props
}: { isOpen?: boolean; pad?: boolean } & HTMLAttributes<HTMLDivElement>) {
  const eltRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)
  const onResize = useCallback(() => {
    if (eltRef.current?.offsetHeight) {
      setContentHeight(eltRef.current?.offsetHeight)
    }
  }, [])

  useEffect(() => {
    onResize()
  }, [onResize])

  useResizeObserver(eltRef, onResize)
  const springs = useSpring({
    to: { height: isOpen ? contentHeight : 0 },
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

  return (
    <animated.div style={{ overflow: 'hidden', ...springs }}>
      <div
        className={className}
        ref={eltRef}
        {...props}
      >
        {children}
      </div>
    </animated.div>
  )
}
const AccordionContent = styled(AccordionContentUnstyled)(
  ({ theme, pad, isOpen }) => ({
    transition: `marginTop ${paddingTransition}`,
    marginTop: isOpen ? 0 : -(theme.spacing.medium - theme.spacing.small),
    ...(pad
      ? {
          paddingLeft: theme.spacing.medium,
          paddingRight: theme.spacing.medium,
          paddingBottom: theme.spacing.medium,
        }
      : {}),
  })
)

export function SingleAccordion({
  label,
  textValue,
  padContent = true,
  children,
}: PropsWithChildren<{
  label: ReactNode
  textValue?: string
  padContent?: boolean
}>) {
  if (!textValue && typeof label === 'string') {
    textValue = label
  }
  const { triggerProps, contentProps, isOpen } = useDisclosure()

  useEffect(() => {}, [isOpen])
  console.log('isOpen', isOpen)

  return (
    <Card>
      <AccordionTrigger
        isOpen={isOpen}
        {...triggerProps}
      >
        {label}
      </AccordionTrigger>
      <AccordionContent
        isOpen={isOpen}
        onClick={() => {
          console.log('clicked!')
        }}
        pad={padContent}
        {...contentProps}
      >
        {children}
      </AccordionContent>
    </Card>
  )
}
