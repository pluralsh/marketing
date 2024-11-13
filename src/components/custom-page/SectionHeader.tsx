import { type SectionHeaderComponentFragment } from '@src/generated/graphqlDirectus'

import { Body1, OverlineLabel, ResponsiveText } from '../Typography'

export function SectionHeader({
  overline,
  title,
  description,
}: SectionHeaderComponentFragment) {
  return (
    <div className="mx-auto flex w-1/2 flex-col items-center gap-medium py-xlarge text-center">
      {overline && <OverlineLabel>{overline}</OverlineLabel>}
      <ResponsiveText textStyles={{ lg: 'mHero2', '': 'mTitle1' }}>
        {title}
      </ResponsiveText>
      <Body1 $color="text-light">{description}</Body1>
    </div>
  )
}
