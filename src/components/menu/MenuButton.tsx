import React, { type ComponentProps, type RefObject, useRef } from 'react'

import { Card, DropdownArrowIcon } from '@pluralsh/design-system'

import { useFloatingDropdown } from '@pluralsh/design-system/dist/components/useFloatingDropdown'
import { useButton } from '@react-aria/button'
import { useMenu, useMenuItem, useMenuTrigger } from '@react-aria/menu'
import { Item } from '@react-stately/collections'
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
  const { className, children, buttonRef, style } = props

  const { buttonProps } = useButton(
    { ...props, elementType: 'button' },
    buttonRef
  )

  return (
    <MainLink
      as="button"
      ref={buttonRef}
      type="button"
      style={style}
      className={className}
      {...buttonProps}
    >
      {children}
      <div className="icon">
        <DropdownArrowIcon size={14} />
      </div>
    </MainLink>
  )
}

const MainLinkDropdown = styled(MainLinkDropdownUnstyled)(
  ({ theme, isOpen }) => ({
    width: '500px',
    '.icon': {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      marginLeft: theme.spacing.xsmall,
      transformOrigin: '50% 50%',
      transform: isOpen ? 'scaleY(-100%)' : 'scaleY(100%)',
    },
  })
)

export function MenuButton({
  placement = 'left',
  width = '300px',
  maxHeight = '400px',
  label,
  children,
}: MenuButtonProps<any>) {
  // Create state based on the incoming props
  const triggerState = useMenuTriggerState({})

  // Get props for the button and menu elements
  const buttonRef = useRef(null)
  const { menuTriggerProps, menuProps } = useMenuTrigger(
    {},
    triggerState,
    buttonRef
  )

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
        <Menu {...menuProps}>{children}</Menu>
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

  return (
    <li
      {...menuItemProps}
      ref={ref}
      style={{
        background: isFocused ? 'gray' : 'transparent',
        color: isDisabled ? 'gray' : isFocused ? 'white' : 'black',
        padding: '2px 5px',
        outline: 'none',
        cursor: 'default',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {item.rendered}
      {isSelected && <span aria-hidden="true">✅</span>}
    </li>
  )
}
