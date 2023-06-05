import styled from 'styled-components'

import { mqs } from '@src/breakpoints'

import { BasicFooter } from './BasicFooter'
import { FooterNav } from './FooterNav'
import { MaxWidthLimiter } from './MaxWidthLimiter'

export function FullFooter({ className }: { className?: string }) {
  return (
    <StickyFooter
      className={className}
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role
      role="contentinfo"
    >
      <FooterNav />
      <BasicFooter />
    </StickyFooter>
  )
}

const StickyFooter = styled(MaxWidthLimiter).attrs(() => ({ as: 'footer' }))(
  ({ theme }) => ({
    '--v-gap': `${theme.spacing.xxlarge}px`,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 'var(--v-gap)',
    position: 'sticky',
    top: '100vh',
    paddingTop: theme.spacing.xxxlarge,
    paddingBottom: theme.spacing.xxxlarge,
    [mqs.md]: {
      paddingTop: theme.spacing.xxxxlarge,
      paddingBottom: theme.spacing.xlarge,
    },
  })
)
