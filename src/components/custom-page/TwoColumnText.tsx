import { Markdown } from '@pluralsh/design-system'

import { type TwoColumnTextComponentFragment } from '@src/generated/graphqlDirectus'

import { cn } from '../cn'

import { getSpacingClassName } from './common'

export function TwoColumnText({
  spacing,
  main_content: mainContent,
  side_content: sideContent,
}: TwoColumnTextComponentFragment) {
  return (
    <section
      className={cn(
        getSpacingClassName(spacing),
        'mx-xxxxxxlarge flex gap-xxlarge'
      )}
    >
      <div className="w-2/3">
        <Markdown text={mainContent} />
      </div>
      <div className="w-1/3">
        <Markdown text={sideContent} />
      </div>
    </section>
  )
}
