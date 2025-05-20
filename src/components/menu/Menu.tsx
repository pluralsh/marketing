import React, {
  type ComponentProps,
  type FunctionComponent,
  type RefObject,
  useRef,
} from 'react'

import {
  ArrowTopRightIcon,
  DropdownArrowIcon,
  FillLevelProvider,
  useFloatingDropdown,
  useNavigationContext,
} from '@pluralsh/design-system'

import { type Node } from '@react-types/shared'
import {
  type AriaMenuProps,
  useButton,
  useMenu,
  useMenuItem,
  useMenuTrigger,
} from 'react-aria'
import {
  type MenuTriggerProps,
  type TreeState,
  useMenuTriggerState,
  useTreeState,
} from 'react-stately'
import styled from 'styled-components'

import { MainLinkBase } from '../Navigation'

import { PopoverMenu } from './PopoverMenu'

type Placement = 'left' | 'right'

export type ItemRendererProps<T extends object> = {
  item: Node<T>
  state: TreeState<T>
  kind?: MenuButtonProps<T>['kind']
}

type ItemRenderer<T extends object> = (p: ItemRendererProps<T>) => JSX.Element

export type MenuButtonKind = 'product' | 'default' | 'solution' | 'whyPlural'

export interface MenuButtonProps<T extends { render?: FunctionComponent }>
  extends AriaMenuProps<T>,
    MenuTriggerProps {
  itemRenderer?: ItemRenderer<T>
  label?: string
  placement?: Placement
  width?: number | string
  maxHeight?: number | string
  className?: string
  dropdownProps?: Parameters<typeof useFloatingDropdown>[0]
  kind?: MenuButtonKind
  left?: number
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
      <div
        className="icon"
        aria-hidden
      >
        <DropdownArrowIcon size={14} />
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
  kind = 'default',
  left,
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
    maxHeight: 600,
    minWidth: 'reference',
    ...dropdownProps,
    triggerRef: buttonRef,
  })

  if (left) {
    floating.x = left
  }

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
        {kind === 'solution' ? (
          <SolutionNavDropdown
            {...props}
            {...menuProps}
          >
            {children}
          </SolutionNavDropdown>
        ) : (
          <MenuDropdown
            kind={kind}
            {...props}
            {...menuProps}
          >
            {children}
          </MenuDropdown>
        )}
      </PopoverMenu>
    </MenuButtonWrap>
  )
}

export const MenuButtonWrap = styled.div((_) => ({
  position: 'relative',
  textWrap: 'nowrap',
}))

function MenuDropdown<T extends object>({
  itemRenderer = MenuItem,
  kind,
  ...props
}: AriaMenuProps<T> & {
  itemRenderer?: ItemRenderer<T>
  kind?: 'product' | 'default' | 'solution' | 'whyPlural'
}) {
  const { Link } = useNavigationContext()
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
      <DropdownCard
        $kind={kind}
        className={
          kind === 'product' || kind === 'whyPlural'
            ? 'flex flex-col  gap-large min-[1352px]:flex-row'
            : ''
        }
      >
        {(kind === 'product' || kind === 'whyPlural') && (
          <MenuImageLinkSC
            className="max-h-[120px] min-w-full min-[1352px]:max-h-none min-[1352px]:min-w-[320px]"
            as={Link}
            href={kind === 'product' ? '/product' : '/why-plural'}
            onClick={props.onClose}
            $imageUrl={
              kind === 'product'
                ? '/images/product/platform-overview-image.jpg'
                : '/images/why-plural/why-plural-dropdown-image.webp'
            }
          >
            <span>Plural Platform Overview</span>
            <ArrowTopRightIcon size={18} />
          </MenuImageLinkSC>
        )}
        <div>
          {kind === 'product' && (
            <MenuCategoryLabel>Product features</MenuCategoryLabel>
          )}
          <ul
            className={
              kind === 'product' || kind === 'whyPlural'
                ? 'grid grid-cols-2 gap-x-medium'
                : ''
            }
          >
            {[...state.collection].map((item) => (
              <ItemRenderer
                key={item.key}
                kind={kind}
                item={item}
                state={state}
              />
            ))}
          </ul>
        </div>
      </DropdownCard>
    </div>
  )
}

function SolutionNavDropdown<T extends object>({
  itemRenderer = MenuItem,
  ...props
}: AriaMenuProps<T> & {
  itemRenderer?: ItemRenderer<T>
}) {
  // Create menu state based on the incoming props
  const state = useTreeState(props)

  const collection = [...state.collection]

  const itemByCategory = collection.reduce((acc, item) => {
    // @ts-ignore
    const category = item?.value?.link?.category

    if (!category) return acc

    if (!acc[category]) {
      acc[category] = []
    }

    acc[category].push(item)

    return acc
  }, {})

  // Get props for the menu element
  const ref = React.useRef(null)
  const { menuProps } = useMenu(props, state, ref)

  const ItemRenderer = itemRenderer

  return (
    <DropdownCard {...menuProps}>
      <div
        ref={ref}
        className="flex min-w-[500px] gap-xlarge p-xlarge"
      >
        {Object.keys(itemByCategory).map((category) => (
          <div
            css={{ flex: 1 }}
            key={category}
          >
            <MenuCategoryLabel>{category}</MenuCategoryLabel>
            <ul>
              {itemByCategory[category].map((item) => (
                <ItemRenderer
                  key={item.key}
                  kind="solution"
                  item={item}
                  state={state}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </DropdownCard>
  )
}

const DropdownCardSC = styled.div<{ $kind: MenuButtonKind }>(
  ({ theme, $kind }) => ({
    overflowX: 'hidden',
    overflowY: 'auto',
    width: 'max-content',
    padding:
      $kind === 'product' || $kind === 'whyPlural'
        ? theme.spacing.xlarge
        : `${theme.spacing.xsmall}px 0`,
    boxShadow: theme.boxShadows.moderate,
    border: theme.borders.selected,
    borderRadius: theme.borderRadiuses.large,
    borderColor: theme.colors['border-fill-two'],
    backgroundColor: theme.colors['fill-one'],
  })
)

function DropdownCard(props: ComponentProps<typeof DropdownCardSC>) {
  return (
    <FillLevelProvider value={1}>
      <DropdownCardSC {...props} />
    </FillLevelProvider>
  )
}

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

const MenuCategoryLabel = styled.h2(({ theme }) => ({
  ...theme.partials.marketingText.label,
  color: theme.colors['text-light'],
  marginBottom: theme.spacing.xsmall,
  marginLeft: theme.spacing.xxsmall,
}))

export const MenuImageLinkSC = styled.div<{ $imageUrl: string }>(
  ({ theme, $imageUrl }) => ({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: theme.spacing.medium,
    height: '240px',
    maxWidth: '356px',
    borderRadius: theme.borderRadiuses.large,
    border: theme.borders.default,
    backgroundImage: `url(${$imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Monument',
    fontSize: '16px',
    transition: 'box-shadow 0.16s ease-out',
    '&:hover': {
      boxShadow: theme.boxShadows.moderate,
    },
  })
)
