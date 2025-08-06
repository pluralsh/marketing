'use client'

import type { Content, KeyTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Eyebrow from '@/components/ui/Eyebrow'

export type FeaturesHorizontallyScrollableProps = SliceVariationProps<
  Content.FeaturesSlice,
  'horizontallyScrollable'
>

export default function FeaturesHorizontallyScrollable({
  slice,
}: FeaturesHorizontallyScrollableProps) {
  const { title, features } = slice.primary

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const [slideSize, setSlideSize] = useState(0)

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        setSlideSize(window.innerHeight)
      }
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const eyebrowOrder = useMemo(
    () => [...new Set(features.map(({ eyebrow }) => eyebrow))],
    [features]
  )

  const slides = useMemo(
    () =>
      Object.values(
        features.reduce(
          (acc, feature) => {
            if (!feature.eyebrow) return acc
            const featureList = acc[feature.eyebrow] || []
            acc[feature.eyebrow] = [...featureList, feature]
            return acc
          },
          {} as Record<string, typeof features>
        )
      ).sort((a, b) => {
        const aEyebrow = a[0]?.eyebrow
        const bEyebrow = b[0]?.eyebrow
        const aIndex = eyebrowOrder.indexOf(aEyebrow as KeyTextField)
        const bIndex = eyebrowOrder.indexOf(bEyebrow as KeyTextField)
        return aIndex - bIndex
      }),
    [features, eyebrowOrder]
  )

  const scrollStart = 0.3
  const scrollEnd = 0.7

  const x = useTransform(
    scrollYProgress,
    [scrollStart, scrollEnd],
    ['0px', `-${slideSize * (slides.length - 1)}px`],
    { clamp: true }
  )

  const SCROLL_SPEED_MULTIPLIER = 2 // or 2.5, 3, etc.

  const totalHeight =
    slideSize * (slides.length - 1) * SCROLL_SPEED_MULTIPLIER + slideSize

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="content my-14 flex flex-col items-center md:mt-26">
        <PrismicRichText
          field={title}
          components={{
            heading3: ({ children }) => (
              <h3 className="text-heading-small mb-12 max-w-[596px] md:mb-16 md:text-center">
                {children}
              </h3>
            ),
          }}
        />

        <section
          ref={containerRef}
          className="relative w-full"
          style={{ height: totalHeight }}
        >
          <div className="sticky top-0 mx-auto h-[100dvh] w-[100dvh] overflow-hidden">
            <motion.div
              className="flex h-[100dvh]"
              style={{
                x,
                width: `calc(${slides.length} * 100dvh)`,
              }}
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={
                    'flex h-[100dvh] w-[100dvh] flex-shrink-0 flex-col items-center gap-6'
                  }
                >
                  {slide[0] && <Eyebrow field={slide[0].eyebrow} />}
                  <div className="grid-cols-p grid"></div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </SliceContainer>
  )
}
