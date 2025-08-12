import type { Content } from '@prismicio/client'

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { Fragment } from 'react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'

export type FeaturesTableProps = SliceVariationProps<
  Content.FeaturesSlice,
  'table'
>

export default function FeaturesTable({ slice }: FeaturesTableProps) {
  const { title, features_groups, features_list } = slice.primary

  const groups = getGroups(features_groups)
  const features = getFeatures(features_list)

  return (
    <SliceContainer
      slice={slice}
      className="grid-container md:grid-container-gutter-content-8 max-2xl:grid-container-gutter-content-4 2xl:grid-container-gutter-content-62"
    >
      <div className="separator" />
      <div className="content-full-width grid grid-cols-subgrid">
        <div className="content-full-width my-3 grid grid-cols-subgrid rounded-xl bg-neutral-800 py-6 md:py-16">
          <div className="content">
            <PrismicRichText
              field={title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-heading-small">{children}</h2>
                ),
              }}
            />
            <hr className="border-neutral-000/10 mt-8 mb-6 border-0 border-b md:mt-14 md:mb-10" />
            {Object.entries(groups).map(([id, group], idx) => (
              <Fragment key={idx}>
                <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-3 lg:gap-x-20">
                  <div>
                    <span className="text-accent-100/70 text-sm leading-[1.2]">
                      {group.eyebrow}
                    </span>
                    <PrismicRichText
                      field={group.title}
                      components={{
                        heading3: ({ children }) => (
                          <h3 className="text-title-large mt-1">{children}</h3>
                        ),
                      }}
                    />
                  </div>
                  <div className="col-span-2 grid grid-cols-1 gap-y-6 md:grid-cols-subgrid md:gap-y-8">
                    {features[id].map((feature, idx) => (
                      <div
                        key={1e3 + idx}
                        className="flex gap-x-2"
                      >
                        <PrismicNextImage
                          className="h-7 w-7 shrink-0"
                          field={feature.icon}
                          fallbackAlt=""
                        />
                        <PrismicRichText field={feature.text} />
                      </div>
                    ))}
                  </div>
                </div>
                <hr className="border-neutral-000/10 my-6 border-0 border-b last:hidden md:my-10" />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </SliceContainer>
  )
}

function getGroups(
  groups: Content.FeaturesSliceTablePrimaryFeaturesGroupsItem[]
) {
  return groups.reduce<
    Record<string, Content.FeaturesSliceTablePrimaryFeaturesGroupsItem>
  >((acc, group) => {
    const id = group.group_id
    if (!id) return acc
    return { ...acc, [id]: group }
  }, {})
}

function getFeatures(
  features: Content.FeaturesSliceTablePrimaryFeaturesListItem[]
) {
  return features.reduce<
    Record<string, Content.FeaturesSliceTablePrimaryFeaturesListItem[]>
  >((acc, feature) => {
    const id = feature.group_id
    if (!id) return acc
    if (!acc[id]) {
      return { ...acc, [id]: [feature] }
    }
    return { ...acc, [id]: [...acc[id], feature] }
  }, {})
}
