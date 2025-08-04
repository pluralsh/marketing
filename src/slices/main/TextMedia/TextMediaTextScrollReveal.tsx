'use client'

import type { Content, RichTextField } from '@prismicio/client'

import { asText } from '@prismicio/client'
import { motion } from 'motion/react'
import { Fragment, useRef } from 'react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'
import { cn } from '@/utils/cn'

export type TextMediaTextScrollRevealProps = SliceVariationProps<
  Content.TextMediaSlice,
  'textScrollReveal'
>

export default function TextMediaTextScrollReveal({
  slice,
}: TextMediaTextScrollRevealProps) {
  const { eyebrow, content, align_left } = slice.primary
  const textContainerRef = useRef<HTMLDivElement>(null)

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div
        className={cn('my-12 md:my-30', align_left && 'grid grid-cols-subgrid')}
      >
        <div
          className={cn(
            'mx-auto flex flex-col items-center gap-y-6 text-start md:text-center',
            align_left && 'col-start-2 mx-0 md:text-left xl:max-w-[910px]',
            !align_left && 'max-w-3xl'
          )}
        >
          <Eyebrow
            field={eyebrow}
            className={cn(align_left && 'self-start')}
          />
          <div
            ref={textContainerRef}
            className="text-heading-small"
          >
            {splitText(content).map((word, index, array) => (
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
      </div>
    </SliceContainer>
  )
}

function splitText(text: RichTextField) {
  return asText(text).split(/\s+/)
}
