'use client'

import { asText, type Content, type RichTextField } from '@prismicio/client'

import type { SliceVariationProps } from '@/types/prismicio'
import SliceContainer from '@/components/SliceContainer'
import { Fragment } from 'react'
import { motion } from 'motion/react'
import Eyebrow from '@/components/ui/Eyebrow'
import { PrismicRichText } from '@prismicio/react'
import TiltedParagraphs from '@/components/TiltedParagraphs/TiltedParagraphs'

export type TiltedParagraphsWithTextProps = SliceVariationProps<
  Content.TiltedParagraphsSlice,
  'withText'
>

export default function TiltedParagraphsWithText({
  slice,
}: TiltedParagraphsWithTextProps) {
  const { eyebrow, title, items, text } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="content my-14 flex flex-col items-center md:my-30">
        <Eyebrow
          field={eyebrow}
          className="mb-6"
        />
        <PrismicRichText
          field={title}
          components={{
            heading3: ({ children }) => (
              <h3 className="text-heading-small mb-12">{children}</h3>
            ),
          }}
        />
        <div className="mb-17 flex flex-col items-center gap-6 md:mb-14">
          <TiltedParagraphs items={items} />
        </div>
        <div className="text-title-large max-w-[696px] text-center">
          {splitText(text).map((word, index, array) => (
            <Fragment key={index}>
              <motion.span
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                viewport={{
                  amount: 1,
                  margin: `${10 + ((index * 100) / array.length) * 0.5}% 0px -${10 + ((index * 100) / array.length) * 0.5}% 0px`,
                }}
              >
                {word}
              </motion.span>
              {index < array.length - 1 && <span> </span>}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="separator" />
    </SliceContainer>
  )
}

function splitText(text: RichTextField) {
  return asText(text).split(/\s+/)
}
