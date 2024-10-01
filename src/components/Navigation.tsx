import { type ComponentProps, forwardRef, useContext } from 'react'

import { ArrowRightIcon, useNavigationContext } from '@pluralsh/design-system'

import * as designSystemIcons from '@pluralsh/design-system/dist/icons'
import styled, { useTheme } from 'styled-components'

import * as productNavIcons from '@src/components/menu/ProductNavIcons'

import { mqs } from '../breakpoints'

import { GlobalPropsContext } from './PrimaryPage'
import { ResponsiveText } from './Typography'

const icons = { ...productNavIcons, ...designSystemIcons }

export const MainLink = forwardRef(
  (props: ComponentProps<typeof MainLinkBase>, ref) => {
    const { Link } = useNavigationContext()

    return (
      <MainLinkBase
        ref={ref}
        as={Link}
        {...props}
      />
    )
  }
)
export const ProductLink = forwardRef(
  (props: ComponentProps<typeof MainLinkBase>, ref) => {
    const { Link } = useNavigationContext()
    const theme = useTheme()
    const globalProps = useContext(GlobalPropsContext)

    const itemConfig = globalProps?.siteSettings.main_nav.product.subnav.find(
      (item) => item.id === props.id
    )?.link

    const IconComponent = itemConfig?.icon ? icons[itemConfig.icon] : null

    return (
      <MainLinkBase
        ref={ref}
        as={Link}
        {...props}
      >
        <div className="h-[40px] w-[40px] rounded-medium border border-grey-750 bg-fill-two p-[10px]">
          {IconComponent && (
            <IconComponent color={theme.colors['icon-primary']} />
          )}
        </div>
        <div>
          <ResponsiveText
            as="p"
            textStyles={{ '': 'mBody2Bold' }}
          >
            {itemConfig?.title}
          </ResponsiveText>
          <ResponsiveText
            as="p"
            textStyles={{ '': 'mBody2' }}
            style={{ color: theme.colors['text-light'] }}
          >
            {itemConfig?.description}
          </ResponsiveText>
        </div>
        <ArrowRightIcon
          className="hover-arrow"
          size="16px"
          style={{ marginLeft: 'auto' }}
        />
      </MainLinkBase>
    )
  }
)

export const ProductMobileLink = forwardRef(
  (props: ComponentProps<typeof MainLinkBase>, ref) => {
    const theme = useTheme()
    const { Link } = useNavigationContext()
    const globalProps = useContext(GlobalPropsContext)

    const itemConfig = globalProps?.siteSettings.main_nav.product.subnav.find(
      (item) => item.id === props.id
    )?.link

    const IconComponent = itemConfig?.icon ? icons[itemConfig.icon] : null

    return (
      <MainLinkBase
        ref={ref}
        as={Link}
        {...props}
      >
        <div className="h-[25px] w-[25px] min-w-[25px] rounded-medium border border-grey-750 bg-fill-two p-xxsmall">
          {IconComponent && (
            <IconComponent color={theme.colors['icon-primary']} />
          )}
        </div>
        <ResponsiveText
          as="p"
          textStyles={{ '': 'aBody2' }}
        >
          {itemConfig?.title}
        </ResponsiveText>

        <ArrowRightIcon
          className="hover-arrow"
          size="16px"
          style={{ marginLeft: 'auto' }}
        />
      </MainLinkBase>
    )
  }
)

export const SolutionLink = forwardRef(
  (props: ComponentProps<typeof MainLinkBase>, ref) => {
    const { Link } = useNavigationContext()

    return (
      <MainLinkBase
        ref={ref}
        as={Link}
        {...props}
      >
        <ResponsiveText
          as="p"
          textStyles={{ '': 'mBody2Bold' }}
          color="text-light"
        >
          {props.children}
        </ResponsiveText>
        <ArrowRightIcon
          className="hover-arrow"
          size="16px"
          style={{ marginLeft: 'auto' }}
        />
      </MainLinkBase>
    )
  }
)

export const MainLinkBase = styled.a.withConfig({
  shouldForwardProp: (prop) => !['isDisabled', 'isSelected'].includes(prop),
})<{ isDisabled?: boolean; isSelected?: boolean }>(({ theme, isSelected }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.xsmall,
  cursor: 'pointer',
  ...(isSelected
    ? {
        color: theme.colors.text,
      }
    : {}),
  [[
    '*:focus-visible > &',
    '*:focus-visible > &:any-link',
    '&:focus-visible',
    '&:any-link:focus-visible',
    '&[href]:hover, &:hover',
  ].join(', ')]: {
    color: theme.colors.text,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: theme.borderRadiuses.medium,
    boxShadow: `0px 0px 0px 1px ${theme.colors['border-input']}`,
    '.hover-arrow': {
      opacity: '1',
    },
  },
  '&, &:any-link': {
    color: theme.colors['text-light'],
    textDecoration: 'none',
  },
  '.hover-arrow': {
    opacity: '0',
  },
  padding: `${theme.spacing.xsmall}px ${theme.spacing.medium}px `,
}))

export const SecondaryLink = styled.a(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '&:any-link': {
    color: theme.colors['text-light'],
    textDecoration: 'none',
  },
  '&:hover': {
    textDecoration: 'underline',
    color: theme.colors.text,
  },
  padding: `${theme.spacing.xsmall}px ${theme.spacing.medium}px`,
  [mqs.fullHeader]: {
    padding: `${theme.spacing.small}px ${theme.spacing.medium}px`,
  },
}))
