import { type SectionHeaderComponentFragment } from '@src/generated/graphqlDirectus'

import { Body1, Hero2, OverlineLabel } from '../Typography'

export function SectionHeader({
  overline,
  title,
  description,
}: SectionHeaderComponentFragment) {
  return (
    <div className="mx-auto flex w-1/2 flex-col items-center gap-medium py-xlarge text-center">
      {overline && <OverlineLabel>{overline}</OverlineLabel>}
      <Hero2>{title}</Hero2>
      <Body1 $color="text-light">{description}</Body1>
    </div>
  )
}
