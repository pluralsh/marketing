import { type ComponentProps, type ReactNode, useEffect, useState } from 'react'

import {
  Button,
  DiscordIcon,
  PluralLogoFull,
  usePrevious,
} from '@pluralsh/design-system'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import chroma from 'chroma-js'
import classNames from 'classnames'
import { useKey } from 'rooks'
import styled, { StyleSheetManager, useTheme } from 'styled-components'
import { type Merge } from 'type-fest'

import { breakpointIsGreaterOrEqual, mqs } from '../breakpoints'

import { useBreakpoint } from './contexts/BreakpointProvider'
import GithubStars from './GithubStars'
import { FullPageWidth } from './layout/LayoutHelpers'
import { NavigationDesktop } from './NavigationDesktop'
import { NavigationMobile } from './NavigationMobile'
import { HamburgerButton, SearchButton, SocialLink } from './PageHeaderButtons'
import { PromoBanner, type PromoBannerProps } from './PromoBanner'

const DARKEN_FILTER_ID = 'svg-darken-filter'

const Filler = styled.div((_) => ({
  flexGrow: 1,
}))

export const PAGE_HEADER_ID = 'plural-page-header'

export function PageHeader({
  showHeaderBG,
  promoBanner,
  ...props
}: {
  showHeaderBG?: boolean
  promoBanner?: PromoBannerProps
}) {
  const theme = useTheme()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { pathname } = useRouter()
  const prevPathname = usePrevious(pathname)

  const breakpoint = useBreakpoint()

  useEffect(() => {
    if (breakpointIsGreaterOrEqual(breakpoint, 'fullHeader')) {
      setMenuIsOpen(false)
    }
  }, [breakpoint])

  useEffect(() => {
    if (pathname !== prevPathname) {
      setMenuIsOpen(false)
    }
  }, [pathname, prevPathname])

  useKey(['Escape'], () => {
    setMenuIsOpen(false)
  })

  return (
    <HeaderWrap
      alwaysShowBG={showHeaderBG}
      id={PAGE_HEADER_ID}
    >
      <PromoBanner {...promoBanner} />
      <PageHeaderInnerSC
        as="header"
        {...props}
      >
        <nav className="leftSection">
          <NextLink
            href="/"
            className="logoLink flex flex-shrink-0"
            passHref
          >
            <PluralLogoFull
              color={
                theme.mode === 'light'
                  ? theme.colors.grey[900]
                  : theme.colors.text
              }
            />
          </NextLink>
          <NavigationDesktop />
        </nav>
        <Filler />
        <section className="rightSection">
          <div className="socialIcons">
            <SocialLink
              className="discordIcon"
              href="https://discord.gg/pluralsh"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
            >
              <DiscordIcon size={16} />
            </SocialLink>
            <GithubStars />
          </div>
          <div className="buttons">
            <Button
              as="a"
              href="https://app.plural.sh/signup"
              primary
              fontFamily={theme.fontFamilies.sans}
            >
              Get started
            </Button>
            <Button
              as="a"
              href="https://app.plural.sh/login"
              secondary
              fontFamily={theme.fontFamilies.sans}
            >
              Sign in
            </Button>
          </div>
          <SearchButton />
          <HamburgerButton
            isOpen={menuIsOpen}
            onClick={() => {
              setMenuIsOpen(!menuIsOpen)
            }}
          />
        </section>
        <NavigationMobile
          isOpen={menuIsOpen}
          setIsOpen={setMenuIsOpen}
        />
      </PageHeaderInnerSC>
    </HeaderWrap>
  )
}

const BackdropSC = styled.div(({ theme }) => {
  const backdropFilter = `blur(7.5px) url(#${DARKEN_FILTER_ID})`
  const basicBackdropFilter = `blur(7.5px)`

  return {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: 'translateY(calc(var(--top-nav-banner-height) - 100%))',
    transition: 'all 0.2s ease-out',
    '&.show': {
      transform: 'translateY(var(--top-nav-banner-height))',
    },
    backgroundColor: `${chroma(theme.colors['fill-zero']).alpha(0.83)}`,
    // Use basic filter on Safari (doesn't support svg filters)
    [`@supports (-webkit-backdrop-filter: ${basicBackdropFilter})`]: {
      '-webkitBackdropFilter': basicBackdropFilter,
    },
    // Use advanced filter on browsers that support unprefixed backdrop-filter
    // Only tested on Chrome
    [`@supports (backdrop-filter: ${backdropFilter})`]: {
      backdropFilter,
      backgroundColor: 'transparent',
    },
    // Downgrade Firefox to basic filter because its feColorMatrix rendering is ugly
    [`@-moz-document url-prefix()`]: {
      backgroundColor: `${chroma(theme.colors['fill-zero']).alpha(0.83)}`,
      backdropFilter: basicBackdropFilter,
    },
  }
})

function Backdrop(props: Omit<ComponentProps<typeof BackdropSC>, 'children'>) {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <BackdropSC {...props} />
    </StyleSheetManager>
  )
}

const HeaderWrapSC = styled.div(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  height: `var(--top-nav-main-height)`,
  position: 'fixed',
  zIndex: theme.zIndexes.modal - 100,
  '.content': {
    position: 'relative',
    zIndex: 1,
  },
  '& > .hide': {
    display: 'none',
  },
}))

function HeaderWrap({
  children,
  alwaysShowBG = false,
  ...props
}: Merge<
  ComponentProps<typeof HeaderWrapSC>,
  {
    children: ReactNode
    alwaysShowBG?: boolean
  }
>) {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    if (alwaysShowBG) {
      return
    }
    const listener = (e) => {
      const scrolled = window.scrollY !== 0

      if (e.currentTarget.scroll) {
        setHasScrolled(scrolled)
      }
    }

    setHasScrolled(window.scrollY !== 0)

    window.addEventListener('scroll', listener, { passive: true })

    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [alwaysShowBG])

  return (
    <HeaderWrapSC {...props}>
      <Backdrop className={classNames({ show: alwaysShowBG || hasScrolled })} />
      <svg
        className="hide"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter
          id={DARKEN_FILTER_ID}
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix
            id={`${DARKEN_FILTER_ID}-matrix`}
            type="matrix"
            values="0.220  0.000 -0.030  0.000  0.070 
                    0.000  0.220 -0.050  0.000  0.070 
                    0.000  0.000  0.220  0.000  0.080  
                    0.000  0.000  0.000  1.000  0.500"
          />
        </filter>
      </svg>
      <div className="content">{children}</div>
    </HeaderWrapSC>
  )
}

const PageHeaderInnerSC = styled(FullPageWidth)(({ theme }) => ({
  height: 'var(--top-nav-main-height)',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  '.socialIcons': {
    display: 'none',
    [mqs.fullHeaderSocial]: {
      display: 'flex',
      flexDirection: 'row',
      gap: theme.spacing.medium,
    },
  },
  '.buttons': {
    display: 'none',
    gap: theme.spacing.medium,
    [mqs.fullHeader]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  '.logoLink': {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    width: 98,
  },
  '.rightSection, .leftSection': {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.medium,
  },
}))
