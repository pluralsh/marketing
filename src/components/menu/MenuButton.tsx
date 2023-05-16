import React, {
  type ComponentProps,
  type RefObject,
  cloneElement,
  useRef,
} from 'react'

import { Card, DropdownArrowIcon } from '@pluralsh/design-system'

import { useFloatingDropdown } from '@pluralsh/design-system/dist/components/useFloatingDropdown'
import { useButton } from '@react-aria/button'
import { useMenu, useMenuItem, useMenuTrigger } from '@react-aria/menu'
import { useMenuTriggerState } from '@react-stately/menu'
import { useTreeState } from '@react-stately/tree'
import styled from 'styled-components'

import { MainLink } from '../Navigation'

import { PopoverMenu } from './PopoverMenu'

import type { AriaMenuProps } from '@react-aria/menu'
import type { MenuTriggerProps } from '@react-stately/menu'

type Placement = 'left' | 'right'

interface MenuButtonProps<T> extends AriaMenuProps<T>, MenuTriggerProps {
  label?: string
  placement?: Placement
  width?: number | string
  maxHeight?: number | string
}

function MainLinkDropdownUnstyled({
  isOpen,
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
        <DropdownArrowIcon size={14} />
      </div>
    </MainLink>
  )
}

export function MItem({ children, ...props }: ComponentProps<'div'>) {
  return <div {...props}>{children}</div>
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
  width = 'min-content',
  maxHeight = '400px',
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

  console.log('menuProps', menuProps)
  console.log('props', props)

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

function Menu<T extends object>(props: AriaMenuProps<T>) {
  // Create menu state based on the incoming props
  const state = useTreeState(props)

  // Get props for the menu element
  const ref = React.useRef(null)
  const { menuProps } = useMenu(props, state, ref)

  console.log('state.collection', state.collection)

  return (
    <Card
      as="ul"
      {...menuProps}
      ref={ref}
      style={{
        margin: 0,
        padding: 0,
        listStyle: 'none',
        width: 150,
      }}
    >
      {[...state.collection].map((item) => (
        <MenuItem
          key={item.key}
          item={item}
          state={state}
        />
      ))}
    </Card>
  )
}

function MenuItem({ item, state }) {
  // Get props for the menu item element
  const ref = React.useRef(null)
  const { menuItemProps, isFocused, isSelected, isDisabled } = useMenuItem(
    { key: item.key },
    state,
    ref
  )

  console.log('item', item)

  return (
    <MenuItemInner
      $isFocused={isFocused}
      $isDisabled={isDisabled}
      {...menuItemProps}
      ref={ref}
    >
      {item.rendered}
      {isSelected && <span aria-hidden="true">✅</span>}
    </MenuItemInner>
  )
}

const MenuItemInner = styled.li<{ $isDisabled: boolean; $isFocused: boolean }>(
  ({ theme, $isDisabled, $isFocused }) => ({
    background: $isFocused ? 'gray' : 'transparent',
    color: $isDisabled ? theme.colors['text-disabled'] : theme.colors.text,
    padding: `${theme.spacing.medium}px ${theme.spacing.small}px`,
    outline: 'none',
    cursor: 'default',
    display: 'flex',
    justifyContent: 'space-between',
  })
)
