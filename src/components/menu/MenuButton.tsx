import React, {
  type ComponentProps,
  type FunctionComponent,
  type RefObject,
  useRef,
} from 'react'

import { Card, CaretDownIcon } from '@pluralsh/design-system'

import { useFloatingDropdown } from '@pluralsh/design-system/dist/components/useFloatingDropdown'
import { useButton } from '@react-aria/button'
import { useMenu, useMenuItem, useMenuTrigger } from '@react-aria/menu'
import { type AriaMenuProps } from '@react-aria/menu'
import { useMenuTriggerState } from '@react-stately/menu'
import { type MenuTriggerProps } from '@react-stately/menu'
import { type TreeState, useTreeState } from '@react-stately/tree'
import { type Node } from '@react-types/shared'
import styled from 'styled-components'

import { MainLink } from '../Navigation'

import { PopoverMenu } from './PopoverMenu'

type Placement = 'left' | 'right'

type ItemRendererProps<T extends object> = {
  item: Node<T>
  state: TreeState<T>
}

type ItemRenderer<T extends object> = (p: ItemRendererProps<T>) => JSX.Element

interface MenuButtonProps<T extends { render?: FunctionComponent }>
  extends AriaMenuProps<T>,
    MenuTriggerProps {
  itemRenderer?: ItemRenderer<T>
  label?: string
  placement?: Placement
  width?: number | string
  maxHeight?: number | string
}

function MainLinkDropdownUnstyled({
  ...props
}: ComponentProps<typeof MainLink> & { buttonRef: RefObject<any> }) {
  const eltType = 'button'
  const { className, children, buttonRef, style } = props

  const { buttonProps } = useButton(
    { ...props, elementType: eltType },
    buttonRef
  )

  return (
    <MainLink
      as={eltType}
      ref={buttonRef}
      style={style}
      className={className}
      type="button"
      {...buttonProps}
    >
      {children}
      <div className="icon">
        <CaretDownIcon size={14} />
      </div>
    </MainLink>
  )
}

const MainLinkDropdown = styled(MainLinkDropdownUnstyled).withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop as string),
})(({ theme, isOpen }) => ({
  '.icon': {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginLeft: theme.spacing.xsmall,
    transformOrigin: '50% 50%',
    transform: isOpen ? 'scaleY(-100%)' : 'scaleY(100%)',
  },
}))

export function MenuButton<T extends object>({
  placement = 'left',
  width = 'max-content',
  maxHeight = '100px',
  label,
  children,
  ...props
}: MenuButtonProps<T>) {
  // Create state based on the incoming props
  const triggerState = useMenuTriggerState({})

  // Get props for the button and menu elements
  const buttonRef = useRef(null)
  const { menuTriggerProps, menuProps, ...remainder } = useMenuTrigger<T>(
    {},
    triggerState,
    buttonRef
  )

  console.log('remainder', remainder)

  console.log('menuProps', menuProps)

  const { floating, triggerRef } = useFloatingDropdown({
    triggerRef: buttonRef,
    width,
    maxHeight,
    placement,
  })

  return (
    <div className="relative">
      <MainLinkDropdown
        isOpen={triggerState.isOpen}
        buttonRef={triggerRef}
        {...menuTriggerProps}
      >
        {label}
      </MainLinkDropdown>
      <PopoverMenu
        isOpen={triggerState.isOpen}
        onClose={triggerState.close}
        floating={floating}
      >
        <Menu
          {...props}
          {...menuProps}
        >
          {children}
        </Menu>
      </PopoverMenu>
    </div>
  )
}

function Menu<T extends object>({
  itemRenderer = MenuItem,
  ...props
}: AriaMenuProps<T> & { itemRenderer?: ItemRenderer<T> }) {
  // Create menu state based on the incoming props
  const state = useTreeState(props)

  // Get props for the menu element
  const ref = React.useRef(null)
  const { menuProps } = useMenu(props, state, ref)

  console.log('state.collection', state.collection)

  const Item = itemRenderer

  return (
    <DropdownCard
      as="ul"
      {...menuProps}
      ref={ref}
      fillLevel={2}
    >
      {[...state.collection].map((item) => (
        <Item
          key={item.key}
          item={item}
          state={state}
        />
      ))}
    </DropdownCard>
  )
}

const DropdownCard = styled(Card).attrs({ fillLevel: 2 })(({ theme: _ }) => ({
  overflow: 'hidden',
}))

export function MenuItem<T extends object>({
  item,
  state,
}: ItemRendererProps<T>) {
  // Get props for the menu item element
  const ref = React.useRef(null)
  const { menuItemProps, isFocused, isSelected, isDisabled } = useMenuItem(
    { key: item.key },
    state,
    ref
  )

  return (
    <li
      $isFocused={isFocused}
      $isDisabled={isDisabled}
      $isSelected={isSelected}
      {...menuItemProps}
      ref={ref}
    >
      {item.rendered}
    </li>
  )
}

const MenuItemInner = styled.li<{
  $isDisabled: boolean
  $isFocused: boolean
  $isSelected
}>(({ theme, $isDisabled, $isFocused, $isSelected }) => ({
  [`${MainLink}`]: {
    backgroundColor: 'blue',
  },
  background: $isFocused ? 'gray' : 'transparent',
  color: $isDisabled ? theme.colors['text-disabled'] : theme.colors.text,
  padding: `${theme.spacing.medium}px ${theme.spacing.small}px`,
  outline: 'none',
  cursor: 'default',
  display: 'flex',
  justifyContent: 'space-between',
}))

export function MenuItemHeaderLink<T extends object>({
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
    <MenuItemHeaderLinkInner
      {...menuItemProps}
      ref={ref}
    >
      <MainLink
        isSelected={isSelected}
        isDisabled={isDisabled}
      >
        {item.rendered}
      </MainLink>
    </MenuItemHeaderLinkInner>
  )
}

const MenuItemHeaderLinkInner = styled.li(
  ({ theme, $isDisabled, $isFocused, $isSelected }) => ({
    '&:focus-visible': {
      border: `1px solid ${theme.colors['border-outline-focused']}`,
    },
  })
)
