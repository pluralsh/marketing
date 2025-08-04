'use client'

import type { Content } from '@prismicio/client'

import { PrismicNextLink } from '@prismicio/next'
import { Dialog } from 'radix-ui'

import type { HeaderContext } from '@/components/layout/Header.client'
import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'

export type NavigationItemDefaultProps = SliceVariationProps<
  Content.NavigationItemSlice,
  'default',
  HeaderContext
>

export default function NavigationItemDefault({
  slice,
  context,
}: NavigationItemDefaultProps) {
  return (
    <SliceContainer
      slice={slice}
      as="li"
    >
      {(() => {
        switch (context?.screen) {
          case 'mobile':
            return <MobileDefault slice={slice} />
          case 'desktop':
            return <DesktopDefault slice={slice} />
          default:
            return null
        }
      })()}
    </SliceContainer>
  )
}

function DesktopDefault({ slice }: NavigationItemDefaultProps) {
  return <PrismicNextLink field={slice.primary.link} />
}

function MobileDefault({ slice }: NavigationItemDefaultProps) {
  return (
    <Dialog.Close asChild>
      <PrismicNextLink
        field={slice.primary.link}
        className="text-neutral-000 font-medium"
      />
    </Dialog.Close>
  )
}
