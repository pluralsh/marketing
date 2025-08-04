'use client'

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { motion } from 'motion/react'
import { useState } from 'react'

import PrismicButton from '@/components/PrismicButton'

import type { FeaturesImageRightProps } from '../FeaturesImageRight'

type ScrollImageRightProps = {
  features: FeaturesImageRightProps['slice']['primary']['features']
}

export default function ScrollImageRight({ features }: ScrollImageRightProps) {
  const [, setActiveIndexes] = useState('0'.repeat(features.length))
  const [activeIndex, setActiveIndex] = useState(0)

  function handleViewportEnter(idx: number) {
    setActiveIndexes((prev) => {
      const newPrev = prev.split('')
      newPrev[idx] = '1'
      const newPrevJoined = newPrev.join('')
      setActiveIndex(
        newPrevJoined.split('').findIndex((idx) => idx === '1') || 0
      )
      return newPrevJoined
    })
  }

  function handleViewportLeave(idx: number) {
    setActiveIndexes((prev) => {
      const newPrev = prev.split('')
      newPrev[idx] = '0'
      const newPrevJoined = newPrev.join('')
      if (newPrev.find((idx) => idx === '1')) {
        setActiveIndex(
          newPrevJoined.split('').findIndex((idx) => idx === '1') || 0
        )
      }
      return newPrevJoined
    })
  }

  return (
    <div className="relative grid grid-cols-1 gap-x-3 md:grid-cols-2">
      {/* Left column with scrollable content */}
      <div className="flex flex-col gap-y-10 md:gap-y-64 md:py-15 md:pl-4">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex max-w-lg items-start gap-x-6 gap-y-4 max-md:flex-col max-md:!opacity-100"
            initial={{ opacity: 0.5 }}
            transition={{ duration: 0.5 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              amount: 1,
              margin: '0px 0px 0px 0px',
            }}
            onViewportEnter={() => handleViewportEnter(idx)}
            onViewportLeave={() => handleViewportLeave(idx)}
          >
            <div className="border-neutral-000/10 grid size-10 shrink-0 place-items-center rounded-full border">
              <div className="bg-primary-600 grid size-6.5 place-items-center rounded-full">
                <PrismicNextImage
                  field={feature.title_icon}
                  className="h-4 w-4"
                  fallbackAlt=""
                />
              </div>
            </div>
            <div>
              <PrismicRichText
                field={feature.title}
                components={{
                  heading3: ({ children }) => (
                    <h3 className="text-title-large mb-6">{children}</h3>
                  ),
                }}
              />
              <PrismicRichText
                field={feature.description}
                components={{
                  paragraph: ({ children }) => (
                    <>
                      <p className="text-body mt-4">{children}</p>
                      <hr className="border-neutral-000/10 my-4 border-0 border-b" />
                    </>
                  ),
                }}
              />
              {feature.buttons.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-x-2 md:mt-10">
                  {feature.buttons.map((button, idx) => (
                    <PrismicButton
                      key={idx}
                      field={button}
                      size="large"
                    />
                  ))}
                </div>
              )}
              <PrismicNextImage
                field={feature.image}
                className="mt-10 h-auto w-full object-contain md:hidden"
                fallbackAlt=""
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right column with sticky image */}
      <div className="relative hidden h-full md:block">
        <div className="sticky top-1/6 aspect-[684/527] w-full">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="absolute inset-0 overflow-clip rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === idx ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <PrismicNextImage
                field={feature.image}
                className="size-full object-cover"
                fallbackAlt=""
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
