'use client'

import { asLinkAttrs, isFilled } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'

import type { ButtonProps } from '@/components/ui/Button'

import { Button } from '@/components/ui/Button'

export type PrismicButtonProps = Omit<ButtonProps<typeof PrismicNextLink>, 'as'>

export default function PrismicButton({
  field,
  children,
  ...props
}: PrismicButtonProps) {
  const variant = (
    {
      Primary: 'primary',
      Secondary: 'secondary',
    } as const
  )[field?.variant || '']

  if (!isFilled.link(field)) return null

  return (
    <Button
      as={PrismicNextLink}
      variant={variant}
      {...asLinkAttrs(field)}
      {...props}
    >
      {children ?? field?.text}
    </Button>
  )
}
