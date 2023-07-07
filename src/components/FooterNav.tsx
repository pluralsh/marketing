import { type ComponentProps, type ReactNode, useId, useState } from 'react'

import { ArrowRightIcon, Input, Tooltip } from '@pluralsh/design-system'
import Link from 'next/link'

import styled from 'styled-components'
import { type ReadonlyDeep } from 'type-fest'

import { mqs } from '@src/breakpoints'

import { FullPage } from './layout/FullPage'

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
        href: 'https://github.com/plural.sh',
        target: '_blank',
      },
      {
        children: 'Pricing',
        href: 'https://github.com/pricing',
      },
      {
        children: 'Support',
        href: 'https://github.com/support',
      },
      {
        children: 'Live demo',
        href: 'https://www.plural.sh/demo-login',
      },
    ],
  },
  {
    heading: 'Company',
    links: [
      {
        children: 'About',
        href: 'https://app.plural.sh/login',
        target: '_blank',
      },
      {
        children: 'Join the team',
        href: '/careers',
        target: '_blank',
      },
      {
        children: 'In the news',
        href: '/blog',
        target: '_blank',
      },
      {
        children: 'Support',
        href: '/community',
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
        href: 'https://github.com/pluralsh/plural',
        target: '_blank',
      },
    ] as const,
  },
  {
    heading: 'Contact',
    links: [
      {
        children: 'Discord',
        href: 'https://discord.gg/pluralsh',
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
        href: 'https://www.plural.sh/contact',
        target: '_blank',
      },
    ],
  },
] as const satisfies ReadonlyDeep<NavItemT[]>

const NavSections = styled.ul(({ theme }) => ({
  ...theme.partials.reset.list,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  // var(--v-gap) is set in Sticky Footer in '@src/components/FullFooter.tsx'
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

const Heading = styled.h6(({ theme }) => ({
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

const NavLink = styled(Link)(({ theme }) => ({
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

const NEWSLETTER_FORM_NAME = 'newsletter-signup'
const HONEYPOT_NAME = 'extra'

export const FooterNav = styled(({ ...props }: ComponentProps<'div'>) => {
  const [email, setEmail] = useState('')
  const emailInputId = useId()
  // const submitEmail = useCallback<MouseEventHandler & FormEventHandler>(
  //   (e) => {
  //     e.preventDefault()
  //     alert(`submit: ${email}`)
  //   },
  //   [email]
  // )

  return (
    <div {...props}>
      <FullPage>
        <NavSections>
          {navItems.map((navItem) => (
            <NavSection key={navItem.heading}>
              <Heading>{navItem.heading}</Heading>
              <NavItems>
                {navItem.links.map((link) => (
                  <NavItem key={`${link.children}${link.href}`}>
                    <NavLink {...link} />
                  </NavItem>
                ))}
              </NavItems>
            </NavSection>
          ))}
          <NavSection className="newsletter">
            <form
              // onSubmit={submitEmail}
              action="/forms/newsletter.html"
              method="POST"
              data-netlify="true"
              // eslint-disable-next-line react/no-unknown-property
              netlify-honeypot={HONEYPOT_NAME}
              data-netlify-honeypot={HONEYPOT_NAME}
              data-netlify-recaptcha="true"
              name={NEWSLETTER_FORM_NAME}
            >
              <p className="hidden">
                <input
                  type="text"
                  name={HONEYPOT_NAME}
                />
              </p>
              <input
                type="hidden"
                name="form-name"
                value={NEWSLETTER_FORM_NAME}
              />
              <Heading>Newsletter</Heading>
              <NavLink
                as="p"
                className="mb-medium"
              >
                Be the first to know when we drop something new.
              </NavLink>
              <label
                htmlFor={emailInputId}
                className="sr-only"
              >
                Email
              </label>
              <Input
                id={emailInputId}
                placeholder="Email address"
                onChange={(e) => {
                  setEmail(e?.target?.value)
                }}
                value={email}
                endIcon={
                  <Tooltip label="Subscribe">
                    <button
                      type="submit"
                      className="submitButton"
                      aria-label="Subscribe"
                    >
                      <ArrowRightIcon aria-label="Subscribe" />
                    </button>
                  </Tooltip>
                }
              />
            </form>
          </NavSection>
        </NavSections>
      </FullPage>
    </div>
  )
})(({ theme }) => {
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
