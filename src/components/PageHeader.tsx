import { type ComponentProps, useEffect, useState } from 'react'

import { Button, DiscordIcon, usePrevious } from '@pluralsh/design-system'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { useKey } from 'rooks'
import styled, { useTheme } from 'styled-components'

import { useNavData } from '@src/contexts/NavDataContext'

import { breakpointIsGreaterOrEqual, mqs } from '../breakpoints'

import { useBreakpoint } from './BreakpointProvider'
import GithubStars from './GithubStars'
import { MaxWidthLimiter } from './MaxWidthLimiter'
import MobileMenu from './MobileMenu'
import { HamburgerButton, SearchButton, SocialLink } from './PageHeaderButtons'

const Filler = styled.div((_) => ({
  flexGrow: 1,
}))

function PageHeader({ ...props }) {
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
            className="flex flex-shrink-0"
            passHref
          >
            <img
              className="logo"
              alt="Plural docs"
              src="/images/plural-logo.svg"
            />
          </NextLink>
          <PageHeaderLinks />
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
        <MobileMenu
          isOpen={menuIsOpen}
          setIsOpen={setMenuIsOpen}
        />
      </PageHeaderInner>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.div(({ theme }) => ({
  top: 0,
  position: 'sticky',
  background: theme.colors['fill-zero'],
  zIndex: '100',
}))

const PageHeaderInner = styled(MaxWidthLimiter).attrs(() => ({ as: 'header' }))(
  ({ theme }) => ({
    height: 'var(--top-nav-height)',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    '--link-h-pad': `${theme.spacing.xsmall}px`,
    [mqs.lg]: {
      '--link-h-pad': `${theme.spacing.small}px`,
    },
    [mqs.xl]: {
      '--link-h-pad': `${theme.spacing.medium}px`,
    },
    '.socialIcons': {
      display: 'none',
      [mqs.showSocial]: {
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
    '.logo': {
      display: 'block',
      width: 98,
      [mqs.fullHeader]: {
        // width: 216,
      },
    },
    '.rightSection, .leftSection': {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing.medium,
    },
  })
)

export const MainLink = styled.a(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:any-link': {
    color: theme.colors['text-light'],
    textDecoration: 'none',
  },
  '&[href]:hover': {
    textDecoration: 'underline',
    color: theme.colors.text,
  },
  padding: `${theme.spacing.xsmall}px var(--link-h-pad)`,
  [mqs.fullHeader]: {
    padding: `${theme.spacing.small}px var(--link-h-pad)`,
  },
}))

export const SecondaryLink = styled.a(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '&:any-link': {
    color: theme.colors['text-light'],
    textDecoration: 'none',
  },
  '&:hover': {
    textDecoration: 'underline',
    color: theme.colors.text,
  },
  padding: `${theme.spacing.xsmall}px ${theme.spacing.medium}px`,
  [mqs.fullHeader]: {
    padding: `${theme.spacing.small}px ${theme.spacing.medium}px`,
  },
}))

function NavItemLink({ navItem }: { navItem?: any }) {
  return (
    <MainLink {...(navItem?.link?.url ? { href: navItem?.link?.url } : {})}>
      {navItem?.link?.title}
    </MainLink>
  )
}

const PageHeaderLinks = styled(({ ...props }: ComponentProps<'div'>) => {
  const nav = useNavData()

  return (
    <div {...props}>
      {nav?.map((navItem) => {
        if (navItem?.mobile_only) {
          return null
        }
        if (navItem?.flatten && navItem?.subnav) {
          return navItem?.subnav?.map((n) =>
            n?.mobile_only ? null : <NavItemLink navItem={n} />
          )
        }

        return <NavItemLink navItem={navItem} />
      })}
    </div>
  )
})(({ theme }) => ({
  display: 'none',
  [mqs.fullHeader]: {
    display: 'flex',
    gap: theme.spacing.xsmall,
  },
}))

export { PageHeader }
