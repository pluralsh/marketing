import { IconFrame } from '@pluralsh/design-system'

import createIcon from '@pluralsh/design-system/dist/components/icons/createIcon'
import * as designSystemIcons from '@pluralsh/design-system/dist/icons'

import * as productNavIcons from '@src/components/menu/ProductNavIcons'
import { type MultiColumnTextComponentFragment } from '@src/generated/graphqlDirectus'
import { cn } from '@src/utils/cn'

import { Body1, Subtitle1 } from '../Typography'

import { getSpacingClassName } from './common'

// TODO: StackRun icon very much temporary, need to update the DS in this repo soon
const icons = {
  ...productNavIcons,
  ...designSystemIcons,
  StackRunIcon: createIcon(({ size, color }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 4.89331L8 8.39331V1.39331L14 4.89331Z"
        fill={color}
        stroke={color}
        strokeLinejoin="round"
      />
      <path
        d="M2 7.78662L7.89923 11.2278C7.9615 11.2642 8.0385 11.2642 8.10077 11.2278L14 7.78662"
        stroke={color}
        strokeLinecap="round"
      />
      <path
        d="M2 11.2866L7.89923 14.7278C7.9615 14.7642 8.0385 14.7642 8.10077 14.7278L14 11.2866"
        stroke={color}
        strokeLinecap="round"
      />
    </svg>
  )),
}

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
    </section>
  )
}

export function TextColumnWithIcon({
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
    <div className="flex flex-col items-center gap-medium text-center">
      <IconFrame
        size="xlarge"
        type="floating"
        icon={<Icon color="icon-light" />}
      />
      <Subtitle1>{heading}</Subtitle1>
      <Body1 $color="text-light">{bodyText}</Body1>
    </div>
  )
}
