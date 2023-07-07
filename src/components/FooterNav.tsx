import {
  type ComponentProps,
  type FormEventHandler,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useState,
} from 'react'

import {
  ArrowRightIcon,
  Input,
  Tooltip,
  usePrevious,
} from '@pluralsh/design-system'
import Link from 'next/link'

// import ReCAPTCHA from 'react-google-recaptcha'
import styled from 'styled-components'
import { type ReadonlyDeep } from 'type-fest'

import { mqs } from '@src/breakpoints'
import { isValidEmail } from '@src/utils/text'

import { FullPage } from './layout/FullPage'
import { ResponsiveText } from './Typography'

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

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const prevEmail = usePrevious(email)

  const emailInputId = useId()
  const [response, setResponse] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  useEffect(() => {
    // Clear response if email field is changed,
    // unless field was changed to empty because of successful submission
    if (email !== prevEmail && !(response?.type === 'success' && !email)) {
      setResponse(null)
    }
  }, [email, prevEmail, response?.type])

  function setError(error: string | Error) {
    setResponse({
      type: 'error',
      message: `There was a problem subscribing to the newsletter: ${error}`,
    })
  }
  const submitEmail = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault()
      setResponse(null)
      console.log('response', response)

      const formData = new FormData(event.target as HTMLFormElement)

      if (!isValidEmail(formData.get('email')?.toString())) {
        setResponse({
          type: 'error',
          message: 'Please enter a valid email address.',
        })

        return
      }
      const body = new URLSearchParams(formData as any).toString()

      if (process.env.NODE_ENV === 'development') {
        setResponse({
          type: 'error',
          message: 'Must be server-deployed to submit form.',
        })

        return
      }
      fetch('/forms/newsletter.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
        .then((e) => {
          console.log('e', e)
          console.log('e.ok', e.ok)
          console.log('e.status', e.status)
          console.log('e.statusText', e.statusText)
          if (e.ok) {
            setResponse({
              type: 'success',
              message: 'Thank you for subscribing to the newsletter',
            })
            setEmail('')
          } else {
            setError(e.statusText)
          }
        })
        .catch((error) => {
          console.log('error', error)
          setError(error)
        })
    },
    []
  )

  return (
    <form
      onSubmit={submitEmail}
      action="/forms/newsletter.html"
      method="POST"
      data-netlify="true"
      // eslint-disable-next-line react/no-unknown-property
      netlify-honeypot={HONEYPOT_NAME}
      data-netlify-honeypot={HONEYPOT_NAME}
      // data-netlify-recaptcha="true"
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
        inputProps={{ name: 'email' }}
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
      {response && (
        <ResponsiveText
          textStyles={{ '': 'mComponentText' }}
          color={
            response.type === 'error'
              ? 'text-danger-light'
              : 'text-success-light'
          }
          className="mt-small"
        >
          {response.message}
        </ResponsiveText>
      )}
      {/* <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_SITE_RECAPTCHA_KEY}
        onChange={(value) => {
          console.log('recaptcha change', value)
        }}
      /> */}
    </form>
  )
}

export const FooterNav = styled(({ ...props }: ComponentProps<'div'>) => (
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
          <NewsletterForm />
        </NavSection>
      </NavSections>
    </FullPage>
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
