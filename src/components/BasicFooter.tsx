import { DiscordIcon } from '@pluralsh/design-system'

import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { DISCORD_LINK } from '@src/consts'

import GithubStars from './GithubStars'
import { FullPageWidth } from './layout/LayoutHelpers'
import { SocialLink } from './PageHeaderButtons'

export function BasicFooter({ className }: { className?: string }) {
  return (
    <BasicFooterWrap className={className}>
      <FullPageWidth>
        <div className="socialIcons">
          <SocialLink
            className="discordIcon"
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
          >
            <DiscordIcon size={16} />
          </SocialLink>
          <GithubStars />
        </div>
        <div className="footerLinks">
          <FooterLink as="div">© Plural {new Date().getFullYear()}</FooterLink>
          <FooterLink href="/legal/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink href="/legal/terms-and-conditions">
            Terms & Conditions
          </FooterLink>
          <FooterLink
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.Cookiebot?.show()
            }}
          >
            Cookie Settings
          </FooterLink>
        </div>
      </FullPageWidth>
    </BasicFooterWrap>
  )
}

export const FooterLink = styled.a(({ theme }) => ({
  '&, &:any-link': {
    ...theme.partials.text.body2,
    color: theme.colors['text-xlight'],
    textDecoration: 'none',
  },
  '&:any-link:hover': {
    color: theme.colors['text-light'],
    textDecoration: 'underline',
  },
}))

const BasicFooterWrap = styled.div(({ theme }) => ({
  '.footerLinks': {
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing.medium,
    flexWrap: 'wrap',
  },
  '.socialIcons': {
    display: 'none',
    justifyContent: 'center',
    gap: theme.spacing.medium,
    marginBottom: theme.spacing.small,
    [mqs.fullHeader]: {
      display: 'flex',
    },
    [mqs.fullHeaderSocial]: {
      display: 'none',
    },
  },
}))
