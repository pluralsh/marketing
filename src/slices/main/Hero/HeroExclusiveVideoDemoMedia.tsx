'use client'

import { useEffect, useState } from 'react'

import { isFilled, type Content } from '@prismicio/client'

import { PrismicNextImage } from '@prismicio/next'

import VideoDemoFrame from '@/components/video-demo/VideoDemoFrame'
import { cn } from '@/utils/cn'

/**
 * The video demo is desktop-only. Below 1080px wide (tablet and smaller)
 * we render the static hero image instead, and Supademo iframes are never mounted
 * so those devices don't pay for them. Gating is width-only so short laptops
 * (e.g. 1280x800) still get the demo.
 */
const DEMO_MEDIA_QUERY = '(min-width: 1080px)'

type HeroExclusiveVideoDemoMediaProps = {
  fullBleedImage: Content.HeroSliceExclusiveVideoDemoPrimary['full_bleed_image']
  imageMobile: Content.HeroSliceExclusiveVideoDemoPrimary['image_mobile']
  isShortImage: Content.HeroSliceExclusiveVideoDemoPrimary['is_short_image']
}

export default function HeroExclusiveVideoDemoMedia({
  fullBleedImage,
  imageMobile,
  isShortImage,
}: HeroExclusiveVideoDemoMediaProps) {
  // Start false so SSR/first paint renders the image (mobile-first, no
  // hydration mismatch); upgrade to the demo after mount when the screen fits.
  const [showDemo, setShowDemo] = useState(false)

  useEffect(() => {
    const query = window.matchMedia(DEMO_MEDIA_QUERY)
    const update = () => setShowDemo(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  if (showDemo) {
    return (
      <div className="my-3 flex w-full justify-center px-4 md:px-0">
        <div className="w-full max-w-[1080px] md:w-[72%]">
          <VideoDemoFrame />
        </div>
      </div>
    )
  }

  return (
    <div>
      <PrismicNextImage
        field={fullBleedImage}
        className={cn(
          'my-3 h-[200px] w-full rounded-xl object-cover sm:h-[400px] md:h-[600px]',
          {
            'h-[200px]': isShortImage,
            'sm:h-[300px]': isShortImage,
            'md:h-[300px]': isShortImage,
            'max-md:hidden': isFilled.image(imageMobile),
          }
        )}
        priority
        fallbackAlt=""
      />
      <PrismicNextImage
        field={imageMobile}
        className={cn(
          'my-3 h-[200px] w-full rounded-xl object-cover sm:h-[400px] md:h-[600px]',
          {
            'h-[200px]': isShortImage,
            'sm:h-[300px]': isShortImage,
            'md:h-[300px]': isShortImage,
            'md:hidden': isFilled.image(fullBleedImage),
          }
        )}
        priority
        fallbackAlt=""
      />
    </div>
  )
}
