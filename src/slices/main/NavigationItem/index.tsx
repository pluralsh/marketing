'use client'

import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

import { memo } from 'react'

import type { HeaderContext } from '@/components/layout/Header.client'

import SliceVariations from '@/components/SliceVariations'

import NavigationItemDefault from './NavigationItemDefault'
import NavigationItemDropdownColumns from './NavigationItemDropdownColumns'
import NavigationItemDropdownDetailed from './NavigationItemDropdownDetailed'
import NavigationItemDropdownSimple from './NavigationItemDropdownSimple'

export type NavigationItemProps = SliceComponentProps<
  Content.NavigationItemSlice,
  HeaderContext
>

function NavigationItem({ slice, context }: NavigationItemProps) {
  return (
    <SliceVariations
      slice={slice}
      context={context}
      variations={{
        default: NavigationItemDefault,
        dropdownDetailed: NavigationItemDropdownDetailed,
        dropdownColumns: NavigationItemDropdownColumns,
        dropdownSimple: NavigationItemDropdownSimple,
      }}
    />
  )
}

export default memo(NavigationItem)
