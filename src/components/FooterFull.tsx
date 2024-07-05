import styled from 'styled-components'

import { mqs } from '@src/breakpoints'

import { BasicFooter } from './BasicFooter'
import { FooterNav } from './FooterNav'
import { FooterValueProp } from './FooterValueProp'

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
    <StickyFooterSC className={className}>
      <div
        className="absolute z-0 h-full w-full"
        style={{
          background:
            'linear-gradient(0deg, rgba(14, 16, 21, 0.00) 0%, rgba(0,0,0,0.3) 100%)',
        }}
      />
      {showValueProp && (
        <div className="relative z-20 pb-xlarge pt-xxxxxlarge md:pb-xxlarge md:pt-xxxxxxlarge">
          <FooterValueProp />
        </div>
      )}
      <div
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role
        role="contentinfo"
        className="relative z-20 flex flex-col gap-y-xxxlarge pt-xxxxlarge"
      >
        {showNav && <FooterNav />}
        <BasicFooter />
      </div>
    </StickyFooterSC>
  )
}

const StickyFooterSC = styled.footer(({ theme }) => ({
  '--v-gap': `${theme.spacing.large}px`,
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
