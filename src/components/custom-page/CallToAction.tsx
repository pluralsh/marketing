import { Button } from '@pluralsh/design-system'
import Link from 'next/link'

import { type CtaComponentFragment } from '@src/generated/graphqlDirectus'

import { Body1, ResponsiveText } from '../Typography'

export function CallToAction({
  heading,
  body_text: bodyText,
  cta_text: ctaText,
  cta_url: ctaUrl,
}: CtaComponentFragment) {
  return (
    <div className="mx-auto flex w-1/2 flex-col items-center gap-medium py-xlarge text-center">
      <ResponsiveText textStyles={{ lg: 'mHero2', '': 'mTitle1' }}>
        {heading}
      </ResponsiveText>
      <Body1 $color="text-light">{bodyText}</Body1>
      <Button
        className="mt-medium"
        as={Link}
        href={ctaUrl}
      >
        {ctaText}
      </Button>
    </div>
  )
}
