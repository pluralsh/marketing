import { useRef } from 'react'

import { Menu, ReactAriaPopover } from '@pluralsh/design-system'

import { useMenu, useMenuTrigger } from 'react-aria'
import { Item, useMenuTriggerState, useTreeState } from 'react-stately'

// Reuse the Popover, and Button from your component library. See below for details.
import { Button, Popover } from 'your-component-library'

import type { AriaMenuProps } from 'react-aria'
import type { MenuTriggerProps } from 'react-stately'

interface MenuButtonProps<T> extends AriaMenuProps<T>, MenuTriggerProps {
  label?: string
}

export function MenuButton<T extends object>(props: MenuButtonProps<T>) {
  // Create state based on the incoming props
  const state = useMenuTriggerState(props)

  // Get props for the button and menu elements
  const ref = useRef(null)
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref)

  return (
    <>
      <Button
        {...menuTriggerProps}
        buttonRef={ref}
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
        <ReactAriaPopover
          state={state}
          triggerRef={ref}
          placement="bottom start"
        >
          <Menu
            {...props}
            {...menuProps}
          />
        </ReactAriaPopover>
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
