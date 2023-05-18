import { type PropsWithChildren, type ReactNode, useEffect } from 'react'

import { Card } from '@pluralsh/design-system'

import { useDisclosure } from './hooks/useDisclosure'

export function Accordion({
  label,
  textValue,
  children,
}: PropsWithChildren<{ label: ReactNode; textValue?: string }>) {
  if (!textValue && typeof label === 'string') {
    textValue = label
  }
  const { triggerProps, contentProps, isOpen } = useDisclosure()

  useEffect(() => {}, [isOpen])

  return (
    <Card>
      <div {...triggerProps}>{label}</div>
      <div {...contentProps}>{children}</div>
    </Card>
  )
}
