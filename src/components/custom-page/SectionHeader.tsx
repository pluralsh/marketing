import { type SectionHeaderComponentFragment } from '@src/generated/graphqlDirectus'

import { cn } from '../cn'
import { Body1, Hero2, OverlineLabel } from '../Typography'

import { getSpacingClassName } from './common'

export function SectionHeader({
  spacing,
  overline,
  title,
  description,
}: SectionHeaderComponentFragment) {
  return (
    <section
      className={cn(
        getSpacingClassName(spacing),
        'm-auto flex w-1/2 flex-col items-center gap-medium'
      )}
    >
      {overline && <OverlineLabel>{overline}</OverlineLabel>}
      <Hero2>{title}</Hero2>
      <Body1 $color="text-light">{description}</Body1>
    </section>
  )
}
