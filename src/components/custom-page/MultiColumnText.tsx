import { IconFrame } from '@pluralsh/design-system'

import * as designSystemIcons from '@pluralsh/design-system/dist/icons'

import * as productNavIcons from '@src/components/menu/ProductNavIcons'
import { type MultiColumnTextComponentFragment } from '@src/generated/graphqlDirectus'
import { cn } from '@src/utils/cn'

import { Body1, Subtitle1 } from '../Typography'

import { getSpacingClassName } from './common'

const icons = { ...productNavIcons, ...designSystemIcons }

export function MultiColumnText({
  spacing,
  columns,
}: MultiColumnTextComponentFragment) {
  return (
    <section
      className={cn(
        getSpacingClassName(spacing),
        'mx-xxxlarge flex gap-xlarge'
      )}
    >
      {columns?.map((c, index) => {
        const Icon =
          icons[`${c?.rich_text_columns_id?.icon ?? 'Kubernetes'}Icon`] ??
          icons.KubernetesIcon
        const heading = c?.rich_text_columns_id?.heading
        const bodyText = c?.rich_text_columns_id?.body_text

        return (
          <div
            className="flex flex-col items-center gap-medium text-center"
            key={index}
          >
            <IconFrame
              size="xlarge"
              type="floating"
              icon={<Icon color="icon-light" />}
            />
            <Subtitle1>{heading}</Subtitle1>
            <Body1 $color="text-light">{bodyText}</Body1>
          </div>
        )
      })}
    </section>
  )
}
