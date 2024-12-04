import Link from 'next/link'

import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import {
  type FooterFragment,
  type FooterLinkFragment,
} from '@src/generated/graphqlDirectus'

import { FullPageWidth } from './layout/LayoutHelpers'
import { NewsletterSignupForm } from './NewsletterSignupForm'

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
  color: theme.colors['marketing-white'],
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

export function FooterNav({
  footerData,
}: {
  footerData: Nullable<FooterFragment>
}) {
  if (!footerData) return null

  return (
    <FooterNavWrapSC>
      <FullPageWidth>
        <NavSections>
          <FooterColumn
            title={footerData.column_1_title}
            links={sanitizeFooterLinks(footerData.column_1_links)}
          />
          <FooterColumn
            title={footerData.column_2_title}
            links={sanitizeFooterLinks(footerData.column_2_links)}
          />
          <FooterColumn
            title={footerData.column_3_title}
            links={sanitizeFooterLinks(footerData.column_3_links)}
          />
          <FooterColumn
            title={footerData.column_4_title}
            links={sanitizeFooterLinks(footerData.column_4_links)}
          />
          <NavSection className="newsletter">
            <NewsletterSignupForm />
          </NavSection>
        </NavSections>
      </FullPageWidth>
    </FooterNavWrapSC>
  )
}

const sanitizeFooterLinks = (
  links: Nullable<
    Nullable<{ footer_links_id?: Nullable<FooterLinkFragment> }>[]
  >
) =>
  links
    ?.filter((link): link is { footer_links_id: FooterLinkFragment } => !!link)
    .map((link) => ({
      name: link.footer_links_id?.name ?? '',
      url: link.footer_links_id?.url ?? '',
    })) ?? []

function FooterColumn({
  title,
  links,
}: {
  title: Nullable<string>
  links: { name: string; url: string }[]
}) {
  if (!title) return null

  return (
    <NavSection>
      <FooterHeading>{title}</FooterHeading>
      <NavItems>
        {links?.map((link) => (
          <NavItem key={link?.url}>
            <FooterNavLink
              href={link?.url || ''}
              target={link?.url.charAt(0) === '/' ? '_self' : '_blank'}
            >
              {link?.name}
            </FooterNavLink>
          </NavItem>
        ))}
      </NavItems>
    </NavSection>
  )
}

const FooterNavWrapSC = styled.div(({ theme }) => {
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
