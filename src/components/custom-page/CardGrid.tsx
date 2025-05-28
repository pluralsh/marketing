import * as icons from '@src/components/menu/ProductNavIcons'
import { type MultiColumnTextComponentFragment } from '@src/generated/graphqlDirectus'
import { cn } from '@src/utils/cn'
import { sanitizeIconName } from '../Navigation'
import { Body1, Body2 } from '../Typography'

export function CardGrid({ columns }: MultiColumnTextComponentFragment) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-large  pb-xxlarge sm:grid-cols-2',
        columns?.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
      )}
    >
      {columns?.map((c, index) => {
        const heading = c?.rich_text_columns_id?.heading
        const bodyText = c?.rich_text_columns_id?.body_text

        return (
          <TextColumnWithIcon
            key={index}
            heading={heading ?? ''}
            bodyText={bodyText ?? ''}
            icon={c?.rich_text_columns_id?.icon ?? 'Kubernetes'}
          />
        )
      })}
    </div>
  )
}

function TextColumnWithIcon({
  heading,
  bodyText,
  icon,
}: {
  heading: string
  bodyText: string
  icon: string
}) {
  const Icon = icons[`${sanitizeIconName(icon)}`]

  return (
    <div className="flex min-w-[272px] flex-col items-center gap-small rounded-[12px] bg-grey-950 p-large text-center lg:items-start lg:text-left">
      {Icon && (
        <div className="p-xsmall">
          <Icon
            color="icon-light"
            fullColor
            size={32}
          />
        </div>
      )}
      <Body1
        $color="text"
        css={{ fontWeight: 700 }}
      >
        {heading}
      </Body1>
      <Body2 $color="text-light">{bodyText}</Body2>
    </div>
  )
}
