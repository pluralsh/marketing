import { Markdown } from '@pluralsh/design-system'

import { type TwoColumnTextComponentFragment } from '@src/generated/graphqlDirectus'

export function TwoColumnText({
  main_content: mainContent,
  side_content: sideContent,
}: TwoColumnTextComponentFragment) {
  return (
    <div className="flex flex-col items-center gap-xxlarge lg:flex-row">
      <div className="w-full text-text-light lg:w-2/3">
        <Markdown text={mainContent} />
      </div>
      <div className="w-full text-text-light lg:w-1/3">
        <Markdown text={sideContent} />
      </div>
    </div>
  )
}
