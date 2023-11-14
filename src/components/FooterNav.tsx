import { type ComponentProps, type ReactNode } from 'react'

import Link from 'next/link'

import styled from 'styled-components'
import { type ReadonlyDeep } from 'type-fest'

import { mqs } from '@src/breakpoints'
import { DISCORD_LINK } from '@src/consts'

import { FullPageWidth } from './layout/LayoutHelpers'
import { NewsletterSignupForm } from './NewsletterSignupForm'

type NavItemT = {
  heading: ReactNode
  links: ComponentProps<typeof Link>[]
}

const navItems = [
  {
    heading: 'Product',
    links: [
      {
        children: 'Login',
        href: 'https://app.plural.sh/login',
        target: '_blank',
      },
      {
        children: 'GitHub',
        href: 'https://github.com/pluralsh/plural',
        target: '_blank',
      },
      {
        children: 'Pricing',
        href: '/pricing',
      },
      {
        children: 'Support',
        href: '/contact',
      },
      {
        children: 'Live demo',
        href: '/demo-login',
      },
    ],
  },
  {
    heading: 'Company',
    links: [
      {
        children: 'About',
        href: '/about',
      },
      {
        children: 'Join the team',
        href: '/careers',
      },
      {
        children: 'In the news',
        href: 'https://www.plural.sh/blog',
        target: '_blank',
      },
      {
        children: 'Support',
        href: '/contact',
      },
    ],
  },
  {
    heading: 'Resources',
    links: [
      {
        children: 'Docs',
        href: 'https://docs.plural.sh',
        target: '_blank',
      },
      {
        children: 'Blog',
        href: 'https://www.plural.sh/blog',
        target: '_blank',
      },
      {
        children: 'Releases',
        href: 'https://github.com/pluralsh/plural/releases',
        target: '_blank',
      },
    ] as const,
  },
  {
    heading: 'Contact',
    links: [
      {
        children: 'Discord',
        href: DISCORD_LINK,
        target: '_blank',
      },
      {
        children: 'Twitter',
        href: 'https://www.twitter.com/plural_sh',
        target: '_blank',
      },
      {
        children: 'LinkedIn',
        href: 'https://www.linkedin.com/company/pluralsh',
        target: '_blank',
      },
      {
        children: 'Email',
        href: '/contact',
        target: '_blank',
      },
    ],
  },
] as const satisfies ReadonlyDeep<NavItemT[]>

const NavSections = styled.ul(({ theme }) => ({
  ...theme.partials.reset.list,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  // var(--v-gap) is set in Sticky Footer in '@src/components/FooterFull.tsx'
  rowGap: 'var(--v-gap)',
  '.newsletter': {
    gridColumnStart: 1,
    gridColumnEnd: -1,
  },
  [mqs.sm]: {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
  [mqs.lg]: {
    '.newsletter': {
      gridColumnStart: 'auto',
      gridColumnEnd: 'auto',
    },
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  },
}))

const NavSection = styled.li(({ theme }) => ({
  ...theme.partials.reset.li,
}))

export const FooterHeading = styled.h6(({ theme }) => ({
  ...theme.partials.marketingText.body2,
  fontWeight: '500',
  color: theme.colors.text,
  marginBottom: theme.spacing.medium,
}))

const NavItems = styled.ul(({ theme }) => ({
  ...theme.partials.reset.list,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xsmall,
}))
const NavItem = styled.li(({ theme }) => ({
  ...theme.partials.reset.li,
  margin: 0,
}))

export const FooterNavLink = styled(Link)(({ theme }) => ({
  '&, &:any-link': {
    ...theme.partials.marketingText.body2,
    color: theme.colors['text-light'],
  },
  '&:any-link': {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

export const FooterNav = styled(({ ...props }: ComponentProps<'div'>) => (
  <div {...props}>
    <FullPageWidth>
      <NavSections>
        {navItems.map((navItem) => (
          <NavSection key={navItem.heading}>
            <FooterHeading>{navItem.heading}</FooterHeading>
            <NavItems>
              {navItem.links.map((link) => (
                <NavItem key={`${link.children}${link.href}`}>
                  <FooterNavLink {...link} />
                </NavItem>
              ))}
            </NavItems>
          </NavSection>
        ))}
        <NavSection className="newsletter">
          <NewsletterSignupForm />
        </NavSection>
      </NavSections>
    </FullPageWidth>
  </div>
))(({ theme }) => {
  const outlineOffset = -4

  return {
    '.submitButton': {
      ...theme.partials.reset.button,
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      cursor: 'pointer',
      borderRadius: 0,
      '&:focus, &:focus-visible': {
        outline: 'none',
      },
      '&::before': {
        display: 'block',
        content: '""',
        position: 'absolute',
        top: outlineOffset,
        left: outlineOffset,
        right: outlineOffset,
        bottom: outlineOffset,
        borderRadius: theme.borderRadiuses.medium,
      },
      '&:focus-visible::before': {
        border: theme.borders['outline-focused'],
      },
    },
  }
})
