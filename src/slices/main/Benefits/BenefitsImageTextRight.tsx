import type { Content } from '@prismicio/client'

import { isFilled } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'

export type BenefitsImageTextRightProps = SliceVariationProps<
  Content.BenefitsSlice,
  'imageTextRight'
>

export default function BenefitsImageTextRight({
  slice,
}: BenefitsImageTextRightProps) {
  const { title, title_icon, description, buttons, image } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="2xl:content my-12 grid grid-cols-1 items-center gap-x-4 gap-y-10 md:my-30 md:grid-cols-2">
        <PrismicNextImage
          field={image}
          className="aspect-[684/527] h-auto w-full overflow-clip rounded-xl object-cover max-md:row-start-2"
          fallbackAlt=""
        />
        <div className="flex max-w-lg items-start gap-x-6 gap-y-4 max-md:flex-col md:justify-self-end md:px-4">
          <div className="border-neutral-000/10 grid size-10 shrink-0 place-items-center rounded-full border">
            <div className="bg-primary-600 grid size-6.5 place-items-center rounded-full">
              <PrismicNextImage
                field={title_icon}
                className="h-4 w-4"
                fallbackAlt=""
              />
            </div>
          </div>
          <div>
            <PrismicRichText
              field={title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-title-large mb-6">{children}</h2>
                ),
              }}
            />
            <PrismicRichText
              field={description}
              components={{
                paragraph: ({ children }) => (
                  <>
                    <p className="text-body mt-4">{children}</p>
                    <hr className="border-neutral-000/10 my-4 border-0 border-b last-of-type:hidden" />
                  </>
                ),
              }}
            />
            {buttons.some((button) => isFilled.link(button)) && (
              <div className="mt-6 flex flex-wrap gap-x-2 md:mt-10">
                {buttons.map((button, idx) => (
                  <PrismicButton
                    key={idx}
                    field={button}
                    size="large"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </SliceContainer>
  )
}
