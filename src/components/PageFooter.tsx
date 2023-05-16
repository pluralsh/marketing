import { DiscordIcon } from '@pluralsh/design-system'

import styled from 'styled-components'

import { mqs } from '@src/breakpoints'

import GithubStars from './GithubStars'
import { MaxWidthLimiter } from './MaxWidthLimiter'
import { SocialLink } from './PageHeaderButtons'

export default function PageFooter({ className }: { className?: string }) {
  return (
    <Footer
      className={className}
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role
      role="contentinfo"
    >
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
      <div className="footerLinks">
        <FooterLink as="div">© Plural {new Date().getFullYear()}</FooterLink>
        <FooterLink href="https://plural.sh/legal/privacy-policy">
          Privacy Policy
        </FooterLink>
        <FooterLink href="https://www.plural.sh/legal/terms-and-conditions">
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
    </Footer>
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

const Footer = styled(MaxWidthLimiter).attrs(() => ({ as: 'footer' }))(
  ({ theme }) => ({
    position: 'sticky',
    top: '100vh',
    marginTop: theme.spacing.xxlarge,
    paddingBottom: theme.spacing.large,
    width: '100%',
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
  })
)
