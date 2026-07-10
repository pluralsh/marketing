import type { Content } from '@prismicio/client'

import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'
import VideoDemoFrame from '@/components/video-demo/VideoDemoFrame'
import Eyebrow from '@/components/ui/Eyebrow'

export type HeroExclusiveVideoDemoProps = SliceVariationProps<
  Content.HeroSlice,
  'exclusiveVideoDemo'
>

/** Homepage hero with tabbed Supademo walkthroughs (use only on `home` in Prismic). */
export default function HeroExclusiveVideoDemo({
  slice,
}: HeroExclusiveVideoDemoProps) {
  const { eyebrow, eyebrow_emphasized, title, description, cta } = slice.primary

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
            />
          )}
        </div>
      </div>
      <div className="separator" />
      <div className="content-full-bleed">
        <div className="my-3 flex w-full justify-center px-4 md:px-0">
          <div className="w-full max-w-[1080px] md:w-[72%]">
            <VideoDemoFrame />
          </div>
        </div>
      </div>
    </SliceContainer>
  )
}
