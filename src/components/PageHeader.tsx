import { useEffect, useId, useState } from 'react'

import {
  Button,
  DiscordIcon,
  PluralLogoFull,
  usePrevious,
} from '@pluralsh/design-system'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import classNames from 'classnames'
import { useKey } from 'rooks'
import styled, { useTheme } from 'styled-components'

import { breakpointIsGreaterOrEqual, mqs } from '../breakpoints'

import { useBreakpoint } from './BreakpointProvider'
import GithubStars from './GithubStars'
import { PageMaxWidthLimiter } from './MaxWidthLimiter'
import { NavigationDesktop } from './NavigationDesktop'
import { NavigationMobile } from './NavigationMobile'
import { HamburgerButton, SearchButton, SocialLink } from './PageHeaderButtons'

const Filler = styled.div((_) => ({
  flexGrow: 1,
}))

export function PageHeader({ ...props }) {
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
    <HeaderWrap>
      <PageHeaderInner {...props}>
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
      </PageHeaderInner>
    </HeaderWrap>
  )
}

const HeaderWrap = styled(({ children, ...props }) => {
  const filterId = useId()
  const matrixId = `matrix-${filterId}`
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
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
  }, [])

  return (
    <div {...props}>
      <div
        className={classNames('backdrop', { show: hasScrolled })}
        style={{
          backdropFilter: `blur(7.5px) url(#${filterId})`,
        }}
      />
      <svg
        className="hide"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter
          id={filterId}
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix
            id={matrixId}
            type="matrix"
            values="0.220  0.000 -0.030  0.000  0.070 
                    0.000  0.220 -0.050  0.000  0.070 
                    0.000  0.000  0.220  0.000  0.080  
                    0.000  0.000  0.000  1.000  0.500"
          />
        </filter>
      </svg>
      <div className="content">{children}</div>
    </div>
  )
})(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  height: `var(--top-nav-height)`,
  position: 'fixed',
  zIndex: theme.zIndexes.modal - 100,
  '.content': {
    position: 'relative',
    zIndex: 1,
  },
  '.backdrop': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: 'translateY(-100%)',
    transition: 'all 0.2s ease-out',
    '&.show': {
      transform: 'translateY(0)',
    },
  },
  '& > .hide': {
    display: 'none',
  },
}))

const PageHeaderInner = styled(PageMaxWidthLimiter).attrs(() => ({
  as: 'header',
}))(({ theme }) => ({
  height: 'var(--top-nav-height)',
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
