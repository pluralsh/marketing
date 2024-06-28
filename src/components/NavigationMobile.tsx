import {
  Accordion,
  ArrowRightIcon,
  Button,
  Divider,
} from '@pluralsh/design-system'

import { isEmpty } from 'lodash-es'
import styled, { useTheme } from 'styled-components'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'

import { useNavData } from '@src/contexts/NavDataContext'
import { type NavListFragment } from '@src/generated/graphqlDirectus'

import useScrollLock from './hooks/useScrollLock'
import { MainLink } from './Navigation'
import { type NavContextValue, NavigationFull } from './NavigationFull'

const MobileMainLink = styled(MainLink)(({ theme }) => ({
  padding: theme.spacing.medium,
  width: '100%',
  marginTop: 1,
}))

export const MenuHeading = styled.h6(({ theme }) => ({
  ...theme.partials.marketingText.label,
  margin: 0,
  paddingTop: theme.spacing.xsmall,
  paddingBottom: theme.spacing.xsmall,
}))

type MobileMenuProps = NavContextValue & {
  className?: string
}

type NavData = (
  | (NavListFragment & {
      subnav?: NavData | null
    })
  | null
)[]

function NavList({ navData }: { navData?: NavData | null }) {
  const theme = useTheme()

  if (!navData) {
    return null
  }

  return (
    <div className="flex flex-col gap-medium">
      {navData.map((navItem) => {
        if (!navItem) {
          return null
        }
        if (isEmpty(navItem?.subnav)) {
          return (
            <Button
              key={navItem?.id}
              {...(navItem?.link?.url ? { href: navItem?.link.url } : {})}
              as="a"
              secondary
              endIcon={<ArrowRightIcon />}
              style={{
                justifyContent: 'space-between',
                padding: theme.spacing.medium,
                borderColor: theme.colors.border,
              }}
            >
              {navItem?.link?.title}
            </Button>
          )
        }

        return (
          <Accordion
            label={navItem?.link?.title}
            key={navItem.id}
          >
            {navItem.subnav?.map((subnavItem) => {
              if (!subnavItem) {
                return null
              }

              return (
                <MobileMainLink
                  key={subnavItem.id}
                  {...(subnavItem?.link?.url
                    ? { href: subnavItem?.link.url }
                    : {})}
                >
                  {subnavItem?.link?.title}
                </MobileMainLink>
              )
            })}
          </Accordion>
        )
      })}
    </div>
  )
}

function PluralMenuContent({
  hide: _,
  ...props
}: {
  hide?: boolean
  className?: string
}) {
  const navData = useNavData()
  const theme = useTheme()

  return (
    <div {...props}>
      <div className="flex flex-col gap-small">
        <Button
          as="a"
          href="/contact-sales"
          primary
          fontFamily={theme.fontFamilies.sans}
          endIcon={<ArrowRightIcon />}
          style={{
            justifyContent: 'space-between',
            padding: theme.spacing.medium,
          }}
        >
          Book a demo
        </Button>
        <Button
          as="a"
          href="https://app.plural.sh/login"
          secondary
          fontFamily={theme.fontFamilies.sans}
          endIcon={<ArrowRightIcon />}
          style={{
            justifyContent: 'space-between',
            padding: theme.spacing.medium,
            borderColor: theme.colors.border,
          }}
        >
          Log in
        </Button>
      </div>
      <Divider
        className="my-medium"
        backgroundColor={theme.colors.border}
      />
      <NavList navData={navData} />
    </div>
  )
}

export const PluralMenu = styled(PluralMenuContent)(
  ({ hide = false, theme }) => ({
    display: hide ? 'none' : 'block',
    paddingLeft: theme.spacing.xlarge,
    paddingRight: theme.spacing.xlarge,
    overflow: 'auto',
    paddingBottom: `calc(${theme.spacing.xlarge}px + var(--menu-extra-bpad))`,
  })
)

const Content = styled.div(({ theme }) => ({
  pointerEvents: 'all',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 'var(--top-nav-height)',
  bottom: 0,
  paddingRight: 0,
  paddingTop: theme.spacing.medium,
  background: theme.colors['fill-one'],
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
}))

function NavigationMobileUnstyled({
  isOpen,
  setIsOpen,
  className,
}: MobileMenuProps) {
  const [, setScrollLock] = useScrollLock(false)

  useIsomorphicLayoutEffect(() => {
    setScrollLock(isOpen)
  }, [isOpen, setScrollLock])

  return (
    <div className={className}>
      <Content>
        <NavigationFull
          desktop={false}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Content>
    </div>
  )
}

export const NavigationMobile = styled(NavigationMobileUnstyled)(
  ({ isOpen, theme }) => ({
    '--menu-extra-bpad': '90px',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%',
    display: isOpen ? 'block' : 'none',
    zIndex: theme.zIndexes.modal,
    pointerEvents: 'none',
  })
)
