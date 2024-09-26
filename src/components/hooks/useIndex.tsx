import { useCallback, useMemo, useRef, useState } from 'react'

const useHasChanged = (value: any) => {
  const hasChanged = useRef(false)
  const lastValue = useRef(value)

  if (lastValue.current !== value && !hasChanged.current) {
    hasChanged.current = true
  }

  return hasChanged.current
}

export type IndexState = {
  activeIndex: number | null
  atEnd: boolean
  atStart: boolean
  length: number
  hasChanged: boolean
  setIndex: (itemIdx: number) => void
  deselect: () => void
  goForward: (options?: { loop?: boolean; increment?: number }) => void
  goBack: (options?: { loop?: boolean; increment?: number }) => void
}

const getBoundedIndex = (index: number | null, length: number) => {
  if (index === null) return null
  if (index > length - 1) return length - 1
  if (index < 0) return 0

  return index
}

const useIndex = (
  length: number,
  startIndex: number | null,
  loop = false
): IndexState => {
  startIndex = startIndex ?? 0
  const [unsafeActiveIndex, setUnsafeActiveIndex] = useState<number | null>(
    startIndex >= length ? length - 1 : startIndex < 0 ? 0 : startIndex
  )
  const activeIndex = useMemo(
    () => getBoundedIndex(unsafeActiveIndex, length),
    [unsafeActiveIndex, length]
  )

  const hasChanged = useHasChanged(activeIndex)
  const atEnd = activeIndex !== null && activeIndex >= length - 1
  const atStart = activeIndex === null || activeIndex <= 0

  return {
    activeIndex,
    length,
    atEnd,
    atStart,
    hasChanged,
    deselect: () => {
      setUnsafeActiveIndex(null)
    },
    setIndex: useCallback(
      (itemIdx: number) => {
        if (itemIdx === null) {
          setUnsafeActiveIndex(null)

          return
        }
        setUnsafeActiveIndex(
          itemIdx < 0 ? 0 : itemIdx >= length - 1 ? length - 1 : itemIdx
        )
      },
      [length]
    ),
    goForward: useCallback(
      ({ increment = 1, loop: loopThis = undefined } = {}) => {
        if (activeIndex !== null) {
          const isLooping = loopThis !== undefined ? loopThis : loop
          let newIndex = activeIndex + increment

          if (isLooping && length > 0) {
            newIndex %= length
          } else {
            newIndex = length > 0 ? Math.min(newIndex, length - 1) : 0
          }
          setUnsafeActiveIndex(newIndex)
        }
      },
      [activeIndex, length, loop]
    ),
    goBack: useCallback(
      ({ increment = 1, loop: loopThis = undefined } = {}) => {
        if (activeIndex !== null) {
          const isLooping = loopThis !== undefined ? loopThis : loop
          let newIndex = activeIndex - increment

          if (isLooping && length > 0) {
            newIndex = (newIndex + length) % length
          } else {
            newIndex = Math.max(newIndex, 0)
          }

          setUnsafeActiveIndex(newIndex)
        }
      },
      [activeIndex, length, loop]
    ),
  }
}

export default useIndex
