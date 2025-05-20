import { type TableCustomComponentFragment } from '@src/generated/graphqlDirectus'

import { cn } from '@src/utils/cn'
import { TableMarkdown } from '../TableMarkdown'
import { Body1, Hero1, OverlineLabel } from '../Typography'

export function TableCustomComponent({
  overline,
  heading,
  description,
  width,
  scrollable,
  markdown,
}: TableCustomComponentFragment) {
  return (
    <div className="flex flex-col items-center gap-xxxlarge">
      <div className="flex max-w-[768px] flex-col items-center  gap-medium text-center">
        {overline && <OverlineLabel>{overline}</OverlineLabel>}
        {heading && <Hero1>{heading}</Hero1>}
        {description && <Body1>{description}</Body1>}
      </div>
      <div
        className={cn(
          'flex max-w-full flex-col gap-medium break-words',
          width === 'normal' && 'lg:max-w-[960px]'
        )}
      >
        {markdown && (
          <TableMarkdown
            scrollable={scrollable}
            text={markdown}
          />
        )}
      </div>
    </div>
  )
}
