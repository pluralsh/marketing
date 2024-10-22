import { Button } from '@pluralsh/design-system'
import Link from 'next/link'

import { type CtaComponentFragment } from '@src/generated/graphqlDirectus'

import { cn } from '../cn'
import { Body1, Hero2 } from '../Typography'

import { getSpacingClassName } from './common'

export function CallToAction({
  spacing,
  heading,
  body_text: bodyText,
  cta_text: ctaText,
  cta_url: ctaUrl,
}: CtaComponentFragment) {
  return (
    <section
      className={cn(
        getSpacingClassName(spacing),
        'mx-auto flex w-1/2 flex-col items-center gap-medium text-center'
      )}
    >
      <Hero2>{heading}</Hero2>
      <Body1 $color="text-light">{bodyText}</Body1>
      <Button
        className="mt-medium"
        as={Link}
        target="_blank"
        rel="noopener noreferrer"
        href={ctaUrl}
      >
        {ctaText}
      </Button>
    </section>
  )
}
