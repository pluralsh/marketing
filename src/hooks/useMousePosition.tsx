import { type RefObject, useEffect, useState } from 'react'

type MouseCoordinates = {
  x: number | null
  y: number | null
}

export function useMousePosition(): { mousePosition: MouseCoordinates }
export function useMousePosition(elementRef: RefObject<HTMLElement>): {
  mousePosition: MouseCoordinates
  relativePosition: MouseCoordinates
}

export function useMousePosition(elementRef?: RefObject<HTMLElement>) {
  const [mousePosition, setMousePosition] = useState<MouseCoordinates>({
    x: null,
    y: null,
  })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  let relativePosition: MouseCoordinates = { x: null, y: null }

  if (
    elementRef?.current &&
    mousePosition.x !== null &&
    mousePosition.y !== null
  ) {
    const rect = elementRef.current.getBoundingClientRect()

    relativePosition = {
      x: mousePosition.x - rect.left,
      y: mousePosition.y - rect.top,
    }
  }

  return elementRef ? { mousePosition, relativePosition } : { mousePosition }
}
