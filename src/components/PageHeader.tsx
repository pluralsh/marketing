import { type ComponentProps, HTMLProps, useEffect, useState } from 'react'

import { Button, DiscordIcon, usePrevious } from '@pluralsh/design-system'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { useKey } from 'rooks'
import styled, { useTheme } from 'styled-components'

import { type SiteSettingsFragment } from '@src/generated/graphqlDirectus'

import {
  breakpointIsGreaterOrEqual,
  mqs,
  useBreakpoint,
} from './BreakpointProvider'
import GithubStars from './GithubStars'
import MobileMenu from './MobileMenu'
import { HamburgerButton, SearchButton, SocialLink } from './PageHeaderButtons'

const Filler = styled.div((_) => ({
  flexGrow: 1,
}))

type Nav = Exclude<SiteSettingsFragment['main_nav'], null | undefined>['subnav']

function PageHeaderUnstyled({ nav, ...props }: { nav: Nav }) {
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

  console.log('NAV klink', nav)

  return (
    <header {...props}>
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
        <PageHeaderLinks nav={nav} />
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
    </header>
  )
}

const PageHeader = styled(PageHeaderUnstyled)(({ theme }) => ({
  top: 0,
  position: 'sticky',
  height: 'var(--top-nav-height)',
  background: theme.colors['fill-zero'],
  width: '100%',
  zIndex: '100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  paddingLeft: theme.spacing.large,
  paddingRight: theme.spacing.large,
  [mqs.fullHeader]: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  '.socialIcons': {
    display: 'none',
    [mqs.fullHeader]: {
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
}))

export const MainLink = styled.a(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '&:any-link': {
    color: theme.colors['text-light'],
    textDecoration: 'none',
  },
  '&[href]:hover': {
    textDecoration: 'underline',
    color: theme.colors.text,
  },
  padding: `${theme.spacing.xsmall}px ${theme.spacing.medium}px`,
  [mqs.fullHeader]: {
    padding: `${theme.spacing.small}px ${theme.spacing.medium}px`,
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

const PageHeaderLinks = styled(
  ({ nav, ...props }: { nav: Nav } & ComponentProps<'div'>) => (
    <div {...props}>
      {nav?.map((navList) => (
        <MainLink href={navList.link.url}>{navList?.link.title}</MainLink>
      ))}
    </div>
  )
)(({ theme }) => ({
  display: 'none',
  [mqs.fullHeader]: {
    display: 'flex',
    gap: theme.spacing.xsmall,
  },
}))

export { PageHeader }
