import React, { type ComponentProps, useMemo } from 'react'

import { useNavigationContext } from '@pluralsh/design-system'

import { useMenuItem } from 'react-aria'
import { Item } from 'react-stately'
import styled from 'styled-components'

import { type NavList } from '@src/contexts/NavDataContext'

import { MainLink, ProductLink, SolutionLink } from '../Navigation'

import { type ItemRendererProps, MenuButton } from './Menu'

function TopNavMenuItem<T extends NavList>({
  item,
  state,
  kind = 'default',
}: ItemRendererProps<T>) {
  // Get props for the menu item element
  const ref = React.useRef(null)
  const { menuItemProps, isSelected, isDisabled } = useMenuItem(
    { key: item.key },
    state,
    ref
  )

  const Link =
    kind === 'product'
      ? ProductLink
      : kind === 'solution'
        ? SolutionLink
        : MainLink

  return (
    <TopNavMenuItemWrapper
      ref={ref}
      {...menuItemProps}
    >
      <Link
        isSelected={isSelected}
        isDisabled={isDisabled}
        href={item.value?.link?.url}
        id={item.value?.id}
      >
        {item.rendered}
      </Link>
    </TopNavMenuItemWrapper>
  )
}

const TopNavMenuItemWrapper = styled.li((_) => ({}))

export function TopNavMenu({
  navItem,
  left,
  kind = 'default',
}: {
  navItem: NavList
  left?: number
  kind?: ComponentProps<typeof MenuButton>['kind']
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
      itemRenderer={TopNavMenuItem}
      kind={kind}
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
