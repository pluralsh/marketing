import type { Content } from '@prismicio/client'

import { asText, isFilled } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'
import SvgArrowDown from '@/components/svg/SvgArrowDown'

export type FeaturesResourcesProps = SliceVariationProps<
  Content.FeaturesSlice,
  'resources'
>

export default function FeaturesResources({ slice }: FeaturesResourcesProps) {
  const { eyebrow, resources, view_all_button } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="content my-12 md:my-16">
        {isFilled.keyText(eyebrow) && (
          <div className="mb-6 flex items-center gap-x-14">
            <h2 className="text-caption">{eyebrow}</h2>
            <SvgArrowDown />
          </div>
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {resources.map(({ title, description, image, link }, idx) => (
            <div key={idx}>
              <PrismicNextLink
                field={link}
                className="group flex flex-col"
              >
                <div className="w-full overflow-clip rounded-lg md:rounded-xl">
                  <PrismicNextImage
                    field={image}
                    fallbackAlt=""
                    className="aspect-[420/260] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div>
                  <PrismicRichText
                    field={title}
                    components={{
                      heading3: ({ children }) => (
                        <h3
                          className="text-title-medium mt-6 line-clamp-4"
                          title={asText(title)}
                        >
                          {children}
                        </h3>
                      ),
                    }}
                  />
                  <PrismicRichText
                    field={description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="mt-4 line-clamp-4">{children}</p>
                      ),
                    }}
                  />
                </div>
              </PrismicNextLink>
            </div>
          ))}
        </div>
        <div className="flex justify-center md:justify-end">
          <PrismicButton
            field={view_all_button}
            className="mt-10 md:mt-14"
            variant="secondary"
            size="small"
          />
        </div>
      </div>
    </SliceContainer>
  )
}
