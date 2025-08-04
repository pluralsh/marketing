import type { Content } from '@prismicio/client'

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'

export type HeroImageProps = SliceVariationProps<Content.HeroSlice, 'image'>

export default function HeroImage({ slice }: HeroImageProps) {
  const { eyebrow, title, description, cta, image } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="2xl:content my-8 grid grid-cols-1 items-center gap-x-3 gap-y-10 md:my-16 md:grid-cols-2">
        <div className="md:ml-14 md:max-w-[440px] 2xl:ml-0">
          <Eyebrow
            field={eyebrow}
            emphasized
            className="mb-6"
          />
          <PrismicRichText
            field={title}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-heading-small">{children}</h1>
              ),
            }}
          />
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-body-medium mt-6 md:mt-8">{children}</p>
              ),
            }}
          />
          <PrismicButton
            field={cta}
            size="large"
            className="mt-6 self-start md:mt-10"
          />
        </div>
        <div>
          <PrismicNextImage
            field={image}
            className="rounded-xl object-cover"
            fallbackAlt=""
            priority
          />
        </div>
      </div>
      <div className="separator" />
    </SliceContainer>
  )
}
