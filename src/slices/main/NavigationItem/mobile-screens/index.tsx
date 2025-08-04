import { memo } from 'react'

import SliceVariations from '@/components/SliceVariations'

import type { NavigationItemProps } from '..'

import MobileDropdownColumnsScreen from './NavigationItemDropdownColumns'
import MobileDropdownDetailedScreen from './NavigationItemDropdownDetailed'
import MobileDropdownSimpleScreen from './NavigationItemDropdownSimple'

function NavigationItemMobileScreen({ slice, context }: NavigationItemProps) {
  return (
    <SliceVariations
      slice={slice}
      context={context}
      variations={{
        default: () => null,
        dropdownDetailed: MobileDropdownDetailedScreen,
        dropdownColumns: MobileDropdownColumnsScreen,
        dropdownSimple: MobileDropdownSimpleScreen,
      }}
    />
  )
}

export default memo(NavigationItemMobileScreen)
