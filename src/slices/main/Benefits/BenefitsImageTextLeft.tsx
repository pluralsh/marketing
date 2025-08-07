'use client'

import type { Content } from '@prismicio/client'

import { isFilled } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'

import { motion } from 'motion/react'
import Eyebrow from '@/components/ui/Eyebrow'

export type BenefitsImageTextLeftProps = SliceVariationProps<
  Content.BenefitsSlice,
  'imageTextLeft'
>

export default function BenefitsImageTextLeft({
  slice,
}: BenefitsImageTextLeftProps) {
  const { title, title_icon, description, buttons, image, eyebrow } =
    slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="2xl:content my-12 grid grid-cols-1 items-center gap-x-3 gap-y-10 md:my-30 md:grid-cols-2">
        <div className="flex max-w-lg items-start gap-x-6 gap-y-4 max-md:flex-col md:ps-4">
          {isFilled.image(title_icon) && (
            <div className="border-neutral-000/10 grid size-10 shrink-0 place-items-center rounded-full border">
              <div className="bg-primary-600 grid size-6.5 place-items-center rounded-full">
                <PrismicNextImage
                  field={title_icon}
                  className="h-4 w-4"
                  fallbackAlt=""
                />
              </div>
            </div>
          )}
          <div>
            <Eyebrow
              field={eyebrow}
              className="mb-8"
            />
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <PrismicNextImage
            field={image}
            className="aspect-[684/527] h-auto w-full overflow-clip rounded-xl object-cover"
            fallbackAlt=""
          />
        </motion.div>
      </div>
    </SliceContainer>
  )
}
