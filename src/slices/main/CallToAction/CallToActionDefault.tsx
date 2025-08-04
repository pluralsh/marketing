import type { Content } from '@prismicio/client'

import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'

export type CallToActionDefaultProps = SliceVariationProps<
  Content.CallToActionSlice,
  'default'
>

export default function CallToActionDefault({
  slice,
}: CallToActionDefaultProps) {
  const { eyebrow, title, cta } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container max-lg:grid-container-gutter-content-4"
    >
      <div className="separator" />
      <div className="content-full-width grid grid-cols-subgrid">
        <div className="content-full-width my-3 grid grid-cols-subgrid rounded-xl bg-neutral-800 py-12 md:py-40">
          <div className="content [&>:first-child]:mt-0">
            <Eyebrow field={eyebrow} />
            <PrismicRichText
              field={title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-heading-small mt-6">{children}</h2>
                ),
              }}
            />
            <PrismicButton
              field={cta}
              className="mt-10"
              size="large"
            />
          </div>
        </div>
      </div>
    </SliceContainer>
  )
}
