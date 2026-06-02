import type { Content } from '@prismicio/client'

import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'
import { HERO_BOOK_DEMO_CTA_ATTR } from '@/components/workbench-demo/bookDemoTarget'
import Eyebrow from '@/components/ui/Eyebrow'

import HeroExclusiveDemoMedia from './HeroExclusiveDemoMedia'

export type HeroExclusiveDemoProps = SliceVariationProps<
  Content.HeroSlice,
  'exclusiveDemo'
>

/** Homepage hero with embedded workbench walkthrough (use only on `home` in Prismic). */
export default function HeroExclusiveDemo({ slice }: HeroExclusiveDemoProps) {
  const {
    eyebrow,
    eyebrow_emphasized,
    title,
    description,
    cta,
    full_bleed_image,
    is_short_image,
    image_mobile,
  } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="content pt-5 pb-12 md:pt-14 md:pb-14">
        <Eyebrow
          field={eyebrow}
          emphasized={eyebrow_emphasized}
          className="mb-6"
        />
        <PrismicRichText
          field={title}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-heading-large">{children}</h1>
            ),
          }}
        />
        <div className="mt-6 flex flex-col gap-x-4 gap-y-6 md:mt-8 md:flex-row md:justify-between">
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-body-medium max-w-lg">{children}</p>
              ),
            }}
          />
          {cta && (
            <PrismicButton
              field={cta}
              size="large"
              className="self-start"
              {...{ [HERO_BOOK_DEMO_CTA_ATTR]: '' }}
            />
          )}
        </div>
      </div>
      <div className="separator" />
      <div className="content-full-bleed">
        <HeroExclusiveDemoMedia
          fullBleedImage={full_bleed_image}
          imageMobile={image_mobile}
          isShortImage={is_short_image}
        />
      </div>
    </SliceContainer>
  )
}
