import React, {
  type ComponentProps,
  type FunctionComponent,
  type RefObject,
  useRef,
} from 'react'

import { CaretDownIcon, useFloatingDropdown } from '@pluralsh/design-system'

import { type Node } from '@react-types/shared'
import { type AriaMenuProps } from 'react-aria'
import { useButton, useMenu, useMenuItem, useMenuTrigger } from 'react-aria'
import {
  type MenuTriggerProps,
  type TreeState,
  useTreeState,
} from 'react-stately'
import { useMenuTriggerState } from 'react-stately'
import styled from 'styled-components'

import { MainLinkBase } from '../Navigation'

import { PopoverMenu } from './PopoverMenu'

type Placement = 'left' | 'right'

export type ItemRendererProps<T extends object> = {
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
  className?: string
  dropdownProps?: Parameters<typeof useFloatingDropdown>[0]
}

function MainLinkTriggerUnstyled({
  ...props
}: ComponentProps<typeof MainLinkBase> & { buttonRef: RefObject<any> }) {
  const eltType = 'button'
  const { className, children, buttonRef, style } = props

  const { buttonProps } = useButton(
    { ...props, elementType: eltType },
    buttonRef
  )

  return (
    <MainLinkBase
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
    </MainLinkBase>
  )
}

const MainLinkTrigger = styled(MainLinkTriggerUnstyled).withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop as string),
})(({ theme, isOpen }) => ({
  '.icon': {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginLeft: theme.spacing.xsmall,
    transformOrigin: '50% 50%',
    transform: isOpen ? 'scaleY(-100%)' : 'scaleY(100%)',
    transition: 'transform 0.2s ease-out',
  },
}))

export function MenuButton<T extends object>({
  placement = 'left',
  dropdownProps,
  label,
  children,
  className,
  ...props
}: MenuButtonProps<T>) {
  // Create state based on the incoming props
  const triggerState = useMenuTriggerState(props)

  // Get props for the button and menu elements
  const buttonRef = useRef(null)
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>(
    { trigger: 'press' },
    triggerState,
    buttonRef
  )

  const { floating, triggerRef } = useFloatingDropdown({
    placement,
    width: 'max-content',
    maxHeight: 300,
    minWidth: 'reference',
    ...dropdownProps,
    triggerRef: buttonRef,
  })

  return (
    <MenuButtonWrap className={className}>
      <MainLinkTrigger
        isOpen={triggerState.isOpen}
        buttonRef={triggerRef}
        {...menuTriggerProps}
      >
        {label}
      </MainLinkTrigger>
      <PopoverMenu
        isOpen={triggerState.isOpen}
        onClose={triggerState.close}
        floating={floating}
      >
        <MenuDropdown
          {...props}
          {...menuProps}
        >
          {children}
        </MenuDropdown>
      </PopoverMenu>
    </MenuButtonWrap>
  )
}

export const MenuButtonWrap = styled.div((_) => ({
  position: 'relative',
}))

function MenuDropdown<T extends object>({
  itemRenderer = MenuItem,
  ...props
}: AriaMenuProps<T> & { itemRenderer?: ItemRenderer<T> }) {
  // Create menu state based on the incoming props
  const state = useTreeState(props)

  // Get props for the menu element
  const ref = React.useRef(null)
  const { menuProps } = useMenu(props, state, ref)

  const ItemRenderer = itemRenderer

  return (
    <div
      ref={ref}
      {...menuProps}
    >
      <DropdownCard>
        <ul>
          {[...state.collection].map((item) => (
            <ItemRenderer
              key={item.key}
              item={item}
              state={state}
            />
          ))}
        </ul>
      </DropdownCard>
    </div>
  )
}

const DropdownCard = styled.div.attrs({ fillLevel: 1 })(({ theme }) => ({
  overflowX: 'hidden',
  overflowY: 'auto',
  paddingTop: theme.spacing.xsmall,
  paddingBottom: theme.spacing.xsmall,
  boxShadow: theme.boxShadows.moderate,
  border: theme.borders['fill-one'],
  borderRadius: theme.borderRadiuses.large,
  backgroundColor: theme.colors['fill-one'],
}))

export function MenuItem<T extends object>({
  item,
  state,
}: ItemRendererProps<T>) {
  // Get props for the menu item element
  const ref = React.useRef(null)
  const { menuItemProps } = useMenuItem({ key: item.key }, state, ref)

  return (
    <li
      {...menuItemProps}
      ref={ref}
    >
      {item.rendered}
    </li>
  )
}
