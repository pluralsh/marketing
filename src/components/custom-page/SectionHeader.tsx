import { type SectionHeaderComponentFragment } from '@src/generated/graphqlDirectus'

import BasicMarkdown from '../BasicMarkdown'
import { Body1, OverlineLabel, ResponsiveText } from '../Typography'

export function SectionHeader({
  overline,
  title,
  description,
}: SectionHeaderComponentFragment) {
  return (
    <div className="flex w-full flex-col items-center justify-center py-xlarge">
      <div className="flex flex-col gap-medium text-center lg:min-w-[400px] lg:max-w-[624px]">
        {overline && <OverlineLabel>{overline}</OverlineLabel>}
        {title && (
          <ResponsiveText textStyles={{ lg: 'mHero2', '': 'mTitle1' }}>
            {title}
          </ResponsiveText>
        )}
        <Body1
          as="div"
          $color="text-light"
        >
          <BasicMarkdown text={description} />
        </Body1>
      </div>
    </div>
  )
}
