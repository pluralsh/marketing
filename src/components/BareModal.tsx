import { type ComponentProps, useCallback } from 'react'

import { CloseIcon, IconFrame } from '@pluralsh/design-system'
import dynamic from 'next/dynamic'

import * as Dialog from '@radix-ui/react-dialog'
import { VisuallyHidden } from 'react-aria'

const DynamicModalWrapper = dynamic(
  () => import('@pluralsh/design-system').then((mod) => mod.ModalWrapper),
  { ssr: false }
)

export function BareModal({
  closeButton = true,
  onClose,
  children,
  ...props
}: Omit<ComponentProps<typeof DynamicModalWrapper>, 'onOpenChange'> & {
  closeButton: boolean
  onClose?: () => void
}) {
  const triggerClose = useCallback(
    (open: boolean) => {
      if (!open) onClose?.()
    },
    [onClose]
  )

  return (
    <DynamicModalWrapper
      onOpenChange={triggerClose}
      {...props}
    >
      {closeButton && (
        <IconFrame
          className="closeButton"
          type="floating"
          clickable
          icon={<CloseIcon />}
          onClick={triggerClose}
        />
      )}
      {children}
      {/* required for accessibility */}
      <VisuallyHidden>
        <Dialog.Title>Demo video</Dialog.Title>
      </VisuallyHidden>
    </DynamicModalWrapper>
  )
}
