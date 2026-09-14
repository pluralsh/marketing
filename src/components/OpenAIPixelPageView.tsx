'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    oaiq?: (
      command: 'measure',
      event: 'page_viewed',
      properties: { type: 'contents' }
    ) => void
  }
}

export function OpenAIPixelPageView() {
  const pathname = usePathname()
  const lastMeasuredPathname = useRef<string | null>(null)

  useEffect(() => {
    if (lastMeasuredPathname.current === pathname) {
      return
    }

    lastMeasuredPathname.current = pathname
    if (typeof window.oaiq !== 'function') {
      return
    }

    window.oaiq('measure', 'page_viewed', { type: 'contents' })
  }, [pathname])

  return null
}
