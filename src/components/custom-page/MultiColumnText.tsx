import * as designSystemIcons from '@pluralsh/design-system/dist/icons'

import * as productNavIcons from '@src/components/menu/ProductNavIcons'
import { type MultiColumnTextComponentFragment } from '@src/generated/graphqlDirectus'

import { Body1, Subtitle1 } from '../Typography'

export const icons = {
  ...productNavIcons,
  ...designSystemIcons,
}

export function MultiColumnText({ columns }: MultiColumnTextComponentFragment) {
  return (
    <div className="flex flex-col gap-large border-b border-border-input pb-xxlarge lg:flex-row">
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
  const Icon = icons[`${icon}Icon`] ?? icons.KubernetesIcon

  return (
    <div className="flex flex-col items-center gap-medium rounded-[12px] bg-grey-950 p-large text-center lg:items-start lg:text-left">
      <Icon
        color="icon-light"
        style={{ padding: 8 }}
        size={32}
      />
      <Subtitle1>{heading}</Subtitle1>
      <Body1 $color="text-light">{bodyText}</Body1>
    </div>
  )
}
