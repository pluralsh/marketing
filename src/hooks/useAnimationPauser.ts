// Pauses animations in iframes that support receiving 'play' and 'pause' messages
// when scrolling or resizing the window
import { useEffect } from 'react'

// when the user scrolls
export function useAnimationPauser(selector = 'iframe[data-animation-frame]') {
  const DEBOUNCE_TIME = 300

  useEffect(() => {
    const iframes = document.querySelectorAll<HTMLIFrameElement>(selector)
    const iframeWindows: Window[] = []

    iframes.forEach((iframe) => {
      // Once the iframe is done loading, assign its window object
      // to the variable we prepared earlier
      // iframe.addEventListener('load', () => {
      const eventName = 'load'

      iframe.addEventListener(eventName, function loadListener() {
        if (iframe.contentWindow) {
          iframeWindows.push(iframe.contentWindow)
        }
        iframe.removeEventListener(eventName, loadListener)
      })
    })

    let timeout: number | undefined | null
    const listener = () => {
      if (typeof timeout !== 'number') {
        iframeWindows.forEach((win) => {
          win.postMessage('pause', '*')
        })
      } else {
        window.clearTimeout(timeout)
      }

      timeout = window.setTimeout(() => {
        iframeWindows.forEach((win) => {
          timeout = undefined
          win.postMessage('play', '*')
        })
      }, DEBOUNCE_TIME)
    }

    window.addEventListener('scroll', listener)
    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('scroll', listener)
      window.removeEventListener('resize', listener)
    }
  })
}
