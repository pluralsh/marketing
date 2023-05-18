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
  width = 'max-content',
  maxHeight = 300,
  label,
  children,
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
    triggerRef: buttonRef,
    width,
    maxHeight,
    placement,
  })

  return (
    <div className="relative">
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
    </div>
  )
}

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
    <DropdownCard
      {...menuProps}
      ref={ref}
    >
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
  )
}

const DropdownCard = styled(Card).attrs({ fillLevel: 1 })(({ theme }) => ({
  overflowX: 'hidden',
  overflowY: 'auto',
  paddingTop: theme.spacing.xsmall,
  paddingBottom: theme.spacing.xsmall,
  minWidth: 110,
  boxShadow: theme.boxShadows.moderate,
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
