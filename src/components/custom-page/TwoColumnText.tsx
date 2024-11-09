import { Markdown } from '@pluralsh/design-system'

import { type TwoColumnTextComponentFragment } from '@src/generated/graphqlDirectus'

export function TwoColumnText({
  main_content: mainContent,
  side_content: sideContent,
}: TwoColumnTextComponentFragment) {
  return (
    <div className="mx-xxxxxxlarge flex gap-xxlarge">
      <div className="w-2/3 text-text-light">
        <Markdown text={mainContent} />
      </div>
      <div className="w-1/3 text-text-light">
        <Markdown text={sideContent} />
      </div>
    </div>
  )
}
