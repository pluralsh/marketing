import {
  type HTMLAttributes,
  useCallback,
  useId,
  useMemo,
  useState,
} from 'react'

import { useKeyboard } from '@react-aria/interactions'
import { mergeProps } from '@react-aria/utils'

export interface useDisclosureProps {
  onOpenChange?: (isOpen: boolean) => void
  isOpen?: boolean
  id?: string
}

export function useDisclosure({
  onOpenChange,
  isOpen,
  id,
}: useDisclosureProps = {}) {
  const generatedId = useId()
  const contentId = id || generatedId
  const [isOpenControlled, setIsOpenControlled] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpenControlled(!isOpen)
    onOpenChange?.(!isOpen)
  }, [isOpen, onOpenChange])
  const { keyboardProps } = useKeyboard({
    onKeyDown(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        toggleOpen()
      }
    },
  })

  isOpen = isOpen ?? isOpenControlled

  const triggerProps = useMemo<HTMLAttributes<HTMLElement>>(() => {
    const myProps: HTMLAttributes<HTMLElement> = {
      role: 'button',
      'aria-controls': contentId,
      'aria-expanded': isOpen,
      onClick: () => {
        toggleOpen()
      },
    }

    return mergeProps(keyboardProps, myProps, { chickadee: 'chicek' })
  }, [contentId, isOpen, keyboardProps, toggleOpen])

  const contentProps = useMemo(
    () => ({
      id: contentId,
    }),
    [contentId]
  )

  return useMemo(
    () => ({
      triggerProps,
      contentProps,
      isOpen,
    }),
    [contentProps, isOpen, triggerProps]
  )
}
