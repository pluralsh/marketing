import {
  type ComponentProps,
  type ReactNode,
  forwardRef,
  useCallback,
} from 'react'

import { ArrowRightIcon } from '@pluralsh/design-system'

import styled, { css, keyframes } from 'styled-components'

import { AttachLastWordToElt } from './AttachLastWordToElt'
import { useScrollTo } from './hooks/useScrollTo'

const scrollToLinkIconAnim = keyframes({
  '0%': { transform: 'translateY(0)' },
  '33%': { transform: 'translateY(10%)' },
  '66%': { transform: 'translateY(-10)' },
  '100%': { transform: 'translateY(0)' },
})
const ScrollToLinkIcon = styled((props) => (
  <span {...props}>
    <ArrowRightIcon
      className="arrow"
      size={16}
    />
  </span>
))(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  top: 2,
  marginLeft: theme.spacing.medium,
  '.arrow': {
    transform: 'rotate(90deg)',
  },
}))
const ScrollToLinkSC = styled.a(
  ({ theme }) => ({
    display: 'block',
    gap: theme.spacing.medium,
    ...theme.partials.marketingText.body2Bold,
    fontWeight: 500,
    cursor: 'pointer',
    '&, &:any-link': {
      color: theme.colors.text,
    },
  }),
  css`
    &:hover {
      text-decoration: underline;
      ${ScrollToLinkIcon} {
        animation: 0.9s ${scrollToLinkIconAnim} ease infinite;
      }
    }
  `
)

export const ScrollToLink = forwardRef<
  HTMLAnchorElement,
  {
    scrollToTarget: string | HTMLElement
    options?: Parameters<typeof useScrollTo>[1]
    children: ReactNode
  } & ComponentProps<typeof ScrollToLinkSC>
>(({ scrollToTarget, children, options, ...props }, ref) => {
  const doScroll = useScrollTo(scrollToTarget, options)
  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      doScroll()
    },
    [doScroll]
  )

  return (
    <ScrollToLinkSC
      onClick={onClick}
      ref={ref}
      {...(typeof scrollToTarget === 'string'
        ? { href: `#${scrollToTarget}` }
        : {})}
      {...props}
    >
      <AttachLastWordToElt elt={<ScrollToLinkIcon />}>
        {children}
      </AttachLastWordToElt>
    </ScrollToLinkSC>
  )
})
