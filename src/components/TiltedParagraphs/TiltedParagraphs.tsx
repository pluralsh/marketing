'use client'

import { Fragment } from 'react'
import { motion } from 'motion/react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import type {
  Simplify,
  TiltedParagraphsSliceWithTextPrimaryItemsItem,
} from '../../../prismicio-types'

type TiltedParagraphsProps = {
  items: Simplify<TiltedParagraphsSliceWithTextPrimaryItemsItem>[]
}

export default function TiltedParagraphs({ items }: TiltedParagraphsProps) {
  return items.map(({ icon, text }, i) => (
    <Fragment key={i}>
      <motion.div
        initial={{ opacity: 0, rotateZ: i % 2 === 0 ? -0.5 : 0.5 }}
        whileInView={{ opacity: 1, rotateZ: i % 2 === 0 ? -2 : 2 }}
        transition={{
          opacity: {
            duration: 0.3,
            ease: 'easeOut',
          },
          rotateZ: {
            delay: 0.2,
            duration: 0.5,
            ease: 'easeOut',
          },
        }}
        viewport={{
          once: true,
          amount: 0.5,
          margin: `${10 + ((i * 100) / items.length) * 0.5}% 0px -${10 + ((i * 100) / items.length) * 0.5}% 0px`,
        }}
        className="flex max-w-[335px] items-center rounded-lg border border-white/10 bg-neutral-800 px-3 py-2 md:max-w-[420px]"
      >
        <PrismicNextImage
          field={icon}
          className="mr-2 h-auto w-6"
          fallbackAlt=""
        />
        <PrismicRichText
          field={text}
          components={{
            paragraph: ({ children }) => (
              <p className="text-body-medium text-white">{children}</p>
            ),
          }}
        />
      </motion.div>
    </Fragment>
  ))
}
