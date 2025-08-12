import type { Content } from '@prismicio/client'

import { isFilled } from '@prismicio/client'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'

import AnimatedCircles from './components/AnimatedCircles'
import TestimonialCarousel from './components/TestimonialCarousel'

export type TestimonialsAnimationSliderProps = SliceVariationProps<
  Content.TestimonialsSlice,
  'animationSlider'
>

export default function TestimonialsAnimationSlider({
  slice,
}: TestimonialsAnimationSliderProps) {
  const { eyebrow, testimonials } = slice.primary

  if (testimonials?.link_type !== 'Document') {
    return null
  }

  return (
    <SliceContainer
      slice={slice}
      className="grid-container relative"
    >
      <div className="my-14 grid grid-cols-subgrid">
        <div className="content-full-width grid grid-cols-subgrid rounded-xl bg-neutral-800">
          {isFilled.keyText(eyebrow) && (
            <div className="content-full-width border-neutral-000/10 grid grid-cols-subgrid border-b p-4 max-sm:hidden md:p-5">
              <div className="content-full-width 2xl:content">
                <Eyebrow field={eyebrow} />
              </div>
            </div>
          )}
          <div className="content-full-width 2xl:content grid grid-cols-1 lg:grid-cols-2">
            <div className="grid place-items-center px-12 py-16 max-lg:hidden">
              <AnimatedCircles />
            </div>
            <div className="border-neutral-000/10 grid grid-cols-subgrid place-items-center overflow-clip py-4 md:py-8 lg:border-l lg:py-16">
              <TestimonialCarousel
                testimonials={testimonials.data?.testimonials || []}
              />
            </div>
          </div>
        </div>
      </div>
    </SliceContainer>
  )
}
