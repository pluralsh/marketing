'use client'

import { useEffect, useState } from 'react'

import { WorkbenchMock } from '@/components/product/WorkbenchMock'

import { VideoDemoFrame, VideoDemoPlaceholder } from './VideoDemoFrame'

/**
 * The video demo is desktop-only. Below 1080px wide (tablet and smaller)
 * we render the static workbench mock instead, and Supademo iframes are never
 * mounted so those devices don't pay for them. Gating is width-only so short
 * laptops (e.g. 1280x800) still get the demo. Keep the Tailwind breakpoints
 * below in sync with this query.
 */
const DEMO_MEDIA_QUERY = '(min-width: 1080px)'

export function HomeDemo() {
  // Start false so SSR/first paint matches on every device; upgrade to the
  // demo after mount when the screen fits.
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
      <div className="flex w-full justify-center">
        <VideoDemoFrame />
      </div>
    )
  }

  return (
    <>
      <div className="hidden w-full justify-center min-[1080px]:flex">
        <VideoDemoPlaceholder />
      </div>
      <WorkbenchMock className="min-[1080px]:hidden" />
    </>
  )
}
