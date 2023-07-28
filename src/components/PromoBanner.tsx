import { type ComponentProps, useEffect, useState } from 'react'

import { ArrowRightIcon, isExternalUrl } from '@pluralsh/design-system'
import Link from 'next/link'

import { type Maybe } from 'graphql/jsutils/Maybe'
import styled, { createGlobalStyle } from 'styled-components'
import { type Merge } from 'type-fest'

import { mqs } from '@src/breakpoints'

import BasicMarkdown from './BasicMarkdown'

export type PromoBannerProps = { content?: Maybe<string>; url?: Maybe<string> }

const PromoBannerSC = styled.div(({ theme }) => ({
  ...theme.partials.marketingText.body2,
  backgroundColor: theme.colors.blue[500],
  display: 'flex',
  position: 'relative',
  gap: theme.spacing.large,
  height: 'var(--top-nav-banner-height)',
  overflow: 'hidden',
  transition: 'height 0.2s ease',
}))

const PromoBannerLink = styled.div(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  paddingLeft: theme.spacing.xxlarge,
  paddingRight: theme.spacing.xxlarge,
  [`&:hover ${ArrowSC}`]: {
    transform: 'translateX(50%)',
  },
}))

const ArrowSC = styled.div(({ theme }) => ({
  position: 'relative',
  top: 1,
  display: 'inline-block',
  color: 'white',
  marginLeft: theme.spacing.medium,
  transition: 'transform 0.2s ease',
}))

// const CloseButtonSC = styled.div(({ theme }) => ({
//   ...theme.partials.marketingText.body2,
//   zIndex: 1,
//   position: 'absolute',
//   top: 0,
//   right: 0,
//   width: theme.spacing.xlarge,
//   height: theme.spacing.xlarge,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   cursor: 'pointer',
//   color: 'white',
// }))

const GlobalStyle = createGlobalStyle<{ $isOpen: boolean }>(
  ({ $isOpen, theme }) => {
    if (!$isOpen) {
      return {}
    }

    return {
      ':root': {
        '--top-nav-banner-height': `${theme.spacing.medium + 25.6 * 4}px`,
      },
      [mqs.xs]: {
        ':root': {
          '--top-nav-banner-height': `${theme.spacing.medium + 25.6 * 3}px`,
        },
      },
      [mqs.sm]: {
        ':root': {
          '--top-nav-banner-height': `${theme.spacing.medium + 25.6 * 2}px`,
        },
      },
      [mqs.lg]: {
        ':root': {
          '--top-nav-banner-height': `${theme.spacing.medium + 25.6 * 1}px`,
        },
      },
    }
  }
)

export function PromoBanner({
  content,
  url,
  ...props
}: Merge<ComponentProps<typeof PromoBannerSC>, PromoBannerProps>) {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const listener = (e) => {
      const scrolled = window.scrollY !== 0

      if (e.currentTarget.scroll) {
        setIsOpen(!scrolled)
      }
    }
    const scrolled = window.scrollY !== 0

    setIsOpen(!scrolled)

    window.addEventListener('scroll', listener, { passive: true })

    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  if (!content) {
    return null
  }
  const linkProps = {
    ...(url
      ? {
          as: Link,
          href: url,
          ...(isExternalUrl(url) ? { target: '_blank' } : {}),
        }
      : { as: 'div' }),
  }

  return (
    <>
      <GlobalStyle $isOpen={isOpen} />
      <PromoBannerSC {...props}>
        {/* @ts-expect-error */}
        <PromoBannerLink
          {...linkProps}
          className="mainLink [text-wrap:balance]"
        >
          <BasicMarkdown text={content} />
          <ArrowSC>
            <ArrowRightIcon
              size={14}
              color="white"
            />
          </ArrowSC>
        </PromoBannerLink>
        {/* <CloseButtonSC onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </CloseButtonSC> */}
      </PromoBannerSC>
    </>
  )
}
