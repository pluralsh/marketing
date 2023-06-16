import styled from 'styled-components'

import { mqs } from '@src/breakpoints'

import { BasicFooter } from './BasicFooter'
import { FooterNav } from './FooterNav'
import { FooterValueProp } from './FooterValueProp'
import { PageMaxWidthLimiter } from './MaxWidthLimiter'

export enum FooterVariant {
  none = 'none',
  min = 'min',
  withNav = 'withNav',
  kitchenSink = 'kitchenSink',
}

export function FullFooter({
  className,
  variant = FooterVariant.withNav,
}: {
  className?: string
  variant?: FooterVariant
}) {
  if (variant === FooterVariant.none) {
    return null
  }
  const showNav = variant !== FooterVariant.min
  const showValueProp = variant === FooterVariant.kitchenSink

  return (
    <StickyFooter className={className}>
      <PageMaxWidthLimiter>
        {showValueProp && (
          <div className="pt-xxxlarge md:py-xxxxlarge">
            <FooterValueProp />
          </div>
        )}
        <div
          // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role
          role="contentinfo"
          className="flex flex-col gap-y-xxxlarge pt-xxxxlarge"
        >
          {showNav && <FooterNav />}
          <BasicFooter />
        </div>
      </PageMaxWidthLimiter>
    </StickyFooter>
  )
}

const StickyFooter = styled.footer.attrs(() => ({
  as: 'footer',
}))(({ theme }) => ({
  '--v-gap': `${theme.spacing.xxlarge}px`,
  display: 'flex',
  flexDirection: 'column',
  rowGap: 'var(--v-gap)',
  position: 'sticky',
  top: '100vh',
  paddingBottom: theme.spacing.xlarge,
  [mqs.md]: {
    paddingBottom: theme.spacing.xlarge,
  },
  backgroundImage: 'url(/images/gradients/gradient-bg-6.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: '0% 50%',
}))
