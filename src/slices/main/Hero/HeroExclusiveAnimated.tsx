'use client'

import { isFilled, type Content } from '@prismicio/client'

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, useEffect, useState } from 'react'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'
import { cn } from '@/utils/cn'

export type HeroExclusiveAnimatedProps = SliceVariationProps<
  Content.HeroSlice,
  'exclusiveAnimated'
>

export default function HeroExclusiveAnimated({
  slice,
}: HeroExclusiveAnimatedProps) {
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

  // Scroll animations for homepage
  const sectionRef = useRef<HTMLDivElement>(null)
  const [sectionHeight, setSectionHeight] = useState(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.offsetHeight)
    }
  }, [])

  const backgroundColor = useTransform(
    scrollY,
    [0, sectionHeight * 0.5], // 50% of section height
    ['rgba(255, 255, 255, 0.05)', 'rgba(0, 0, 0, 0.2)'] // From light spotlight to dark overlay
  )

  return (
    <motion.div
      ref={sectionRef}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.02)', // Light spotlight effect
      }}
      className="relative"
    >
      <motion.div
        style={{
          backgroundColor: backgroundColor,
        }}
        className="absolute inset-0"
      />
      <SliceContainer
        slice={slice}
        className="grid-container relative z-10"
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block h-fit w-fit"
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-lg"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(255, 255, 255, 0)',
                      '0 0 8px 3px rgba(255, 255, 255, 0.12)',
                      '0 0 15px 6px rgba(255, 255, 255, 0.18)',
                      '0 0 8px 3px rgba(255, 255, 255, 0.12)',
                      '0 0 0 0 rgba(255, 255, 255, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeIn',
                    repeatDelay: 1,
                  }}
                />
                <PrismicButton
                  field={cta}
                  size="large"
                  className="relative z-10 self-start"
                />
              </motion.div>
            )}
          </div>
        </div>
        <div className="separator" />
        <div>
          <motion.div
            initial={{ scale: 0.98 }}
            animate={{
              scale: [1, 1.01, 1],
            }}
            transition={{
              duration: 1.4,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            <PrismicNextImage
              field={full_bleed_image}
              className={cn(
                'my-3 h-[200px] w-full rounded-xl object-cover sm:h-[400px] md:h-[600px]',
                {
                  'h-[200px]': is_short_image,
                  'sm:h-[300px]': is_short_image,
                  'md:h-[300px]': is_short_image,
                  'max-md:hidden': isFilled.image(image_mobile),
                }
              )}
              priority
              fallbackAlt=""
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0.98 }}
            animate={{
              scale: [1, 1.01, 1],
            }}
            transition={{
              duration: 1.4,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            <PrismicNextImage
              field={image_mobile}
              className={cn(
                'my-3 h-[200px] w-full rounded-xl object-cover sm:h-[400px] md:h-[600px]',
                {
                  'h-[200px]': is_short_image,
                  'sm:h-[300px]': is_short_image,
                  'md:h-[300px]': is_short_image,
                  'md:hidden': isFilled.image(full_bleed_image),
                }
              )}
              priority
              fallbackAlt=""
            />
          </motion.div>
        </div>
      </SliceContainer>
    </motion.div>
  )
}
