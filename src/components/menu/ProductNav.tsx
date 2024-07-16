import React, { useMemo } from 'react'

import { useNavigationContext } from '@pluralsh/design-system'

import { useMenuItem } from 'react-aria'
import { Item } from 'react-stately'
import styled from 'styled-components'

import { type NavList } from '@src/contexts/NavDataContext'

import { ProductLink } from '../Navigation'

import { type ItemRendererProps, MenuButton } from './Menu'

function ProductTopNavMenuItem<T extends NavList>({
  item,
  state,
}: ItemRendererProps<T>) {
  // Get props for the menu item element
  const ref = React.useRef(null)
  const { menuItemProps, isSelected, isDisabled } = useMenuItem(
    { key: item.key },
    state,
    ref
  )

  return (
    <TopNavMenuItemWrapper
      ref={ref}
      {...menuItemProps}
    >
      <ProductLink
        isSelected={isSelected}
        isDisabled={isDisabled}
        href={item.value?.link?.url}
        id={item.value?.id}
      >
        {item.rendered}
      </ProductLink>
    </TopNavMenuItemWrapper>
  )
}

const TopNavMenuItemWrapper = styled.li((_) => ({}))

export function ProductTopNavMenu({
  navItem,
  left,
}: {
  navItem: NavList
  left?: number
}) {
  const navigate = useNavigationContext().useNavigate()
  const items = useMemo(
    () => navItem?.subnav?.filter((item): item is NavList => !!item),
    [navItem.subnav]
  )

  if (!items) {
    return null
  }

  return (
    <MenuButton
      label={navItem.link?.title || 'Menu'}
      items={items}
      itemRenderer={ProductTopNavMenuItem}
      kind="product"
      left={left}
      onAction={(key) => {
        const item = navItem.subnav?.find((item) => item?.id === key)
        const url = item?.link?.url

        if (url) {
          navigate(url)
        }
      }}
    >
      {({ ...item }) => (
        <Item textValue={item.link?.title ?? 'Link'}>{item.link?.title}</Item>
      )}
    </MenuButton>
  )
}
