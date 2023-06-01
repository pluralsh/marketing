import {
  type ComponentProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { usePrevious } from '@pluralsh/design-system'

import styled from 'styled-components'

export const MarketFilterModal = styled(
  ({
    isOpen,
    onOpenChange,
    children,
    ...props
  }: any & ComponentProps<'div'>) => {
    const [isClosing, setIsClosing] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)

    const isFinalOpen = isOpen ? true : !isClosing
    const wasFinalOpen = usePrevious(isFinalOpen)

    useEffect(() => {
      const d = dialogRef.current

      if (d) {
        if (isOpen) {
          d?.showModal()
        } else {
          setIsClosing(true)
          d.addEventListener('webkitAnimationEnd', () => {
            // console.log('animationEnd')
            setIsClosing(false)
          })
        }
      }
    }, [isOpen])

    useEffect(() => {
      if (!isOpen && !isClosing) {
        dialogRef.current?.close()
      }
    })

    useEffect(() => {
      if (wasFinalOpen !== wasFinalOpen) {
        onOpenChange?.(isFinalOpen)
      }
    }, [isFinalOpen, onOpenChange, wasFinalOpen])

    const close = useCallback(() => {
      if (isOpen) {
        setIsClosing(true)
      } else {
        setIsClosing(false)
        onOpenChange(isOpen)
      }
    }, [isOpen, onOpenChange])

    return (
      <dialog
        aria-modal
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            close()
          }
        }}
        {...props}
      >
        <div>{children}</div>
      </dialog>
    )
  }
)(({ theme }) => ({
  '&': {
    backgroundColor: 'transparent',
    padding: 0,
    width: '100vw',
    height: '100vh',
    'height ': '100dvh',

    '&::backdrop': {
      backgroundColor: theme.colors['modal-backdrop'] || 'rgba(0, 0, 0, 0.6)',
      opacity: 0,
    },
    overflow: 'hidden',
  },
  '& > div': {
    overflow: 'hidden',
  },
  '&[open]': {
    '&::backdrop': {
      opacity: 1,
    },
  },
}))
