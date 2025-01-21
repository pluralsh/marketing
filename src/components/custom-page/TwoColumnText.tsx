import { type TwoColumnTextComponentFragment } from '@src/generated/graphqlDirectus'

import BasicMarkdown from '../BasicMarkdown'

export function TwoColumnText({
  main_content: mainContent,
  side_content: sideContent,
}: TwoColumnTextComponentFragment) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-xxxlarge lg:flex-row">
      <div
        className="w-full text-text-light lg:flex-[2]"
        css={{ '& p, & ul, & ol': { fontSize: '16px', lineHeight: '24px' } }}
      >
        <BasicMarkdown text={mainContent} />
      </div>
      <div
        className="w-full text-text-light lg:flex-[1]"
        css={{ '& p, & ul, & ol': { fontSize: '14px', lineHeight: '18px' } }}
      >
        <BasicMarkdown text={sideContent} />
      </div>
    </div>
  )
}
