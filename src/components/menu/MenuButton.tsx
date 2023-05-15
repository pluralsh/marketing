import React, { useRef } from 'react'

// import { Menu } from '@pluralsh/design-system'

import { Button } from '@pluralsh/design-system'

import { useFloatingDropdown } from '@pluralsh/design-system/dist/components/useFloatingDropdown'
import { useMenu, useMenuItem, useMenuTrigger } from '@react-aria/menu'
import { useMenuTriggerState } from '@react-stately/menu'
import { useTreeState } from '@react-stately/tree'

import { PopoverMenu } from './PopoverMenu'

import type { AriaMenuProps } from '@react-aria/menu'
import type { MenuTriggerProps } from '@react-stately/menu'

type Placement = 'left' | 'right'

interface MenuButtonProps<T> extends AriaMenuProps<T>, MenuTriggerProps {
  label?: string
  placement?: Placement
}

export function MenuButton<T extends object>({
  placement = 'left',
  ...props
}: MenuButtonProps<T>) {
  // Create state based on the incoming props
  const state = useMenuTriggerState(props)

  // Get props for the button and menu elements
  const buttonRef = useRef(null)
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>(
    {},
    state,
    buttonRef
  )

  const { floating, triggerRef } = useFloatingDropdown({
    triggerRef: buttonRef,
    width: '300px',
    maxHeight: '400px',
    placement: '',
  })

  return (
    <>
      <Button
        {...menuTriggerProps}
        buttonRef={buttonRef}
        style={{ height: 30, fontSize: 14 }}
      >
        {props.label}
        <span
          aria-hidden="true"
          style={{ paddingLeft: 5 }}
        >
          ▼
        </span>
      </Button>
      {state.isOpen && (
        <PopoverMenu
          isOpen={state.isOpen}
          onClose={state.close}
          // state={state}
          triggerRef={buttonRef}
          // placement="bottom start"
        >
          <Menu
            {...props}
            {...menuProps}
          />
        </PopoverMenu>
      )}
    </>
  )
}

function Menu<T extends object>(props: AriaMenuProps<T>) {
  // Create menu state based on the incoming props
  const state = useTreeState(props)

  // Get props for the menu element
  const ref = React.useRef(null)
  const { menuProps } = useMenu(props, state, ref)

  return (
    <ul
      {...menuProps}
      ref={ref}
      style={{
        margin: 0,
        padding: 0,
        listStyle: 'none',
        width: 150,
      }}
    >
      {[...state.collection].map((item) =>
        item.type === 'section' ? (
          <MenuSection
            key={item.key}
            section={item}
            state={state}
          />
        ) : (
          <MenuItem
            key={item.key}
            item={item}
            state={state}
          />
        )
      )}
    </ul>
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
