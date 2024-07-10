import { type ComponentProps, useMemo } from 'react'

import { ColorModeProvider } from '@pluralsh/design-system'

import styled from 'styled-components'

import { type NavData, useNavData } from '@src/contexts/NavDataContext'

import { mqs } from '../breakpoints'

import { ProductTopNavMenu } from './menu/ProductNav'
import { SolutionTopNavMenu } from './menu/SolutionNav'
import { TopNavMenu } from './menu/TopNavMenu'
import { MainLink } from './Navigation'

export function NavItemLink({ navItem }: { navItem?: any }) {
  return (
    <MainLink {...(navItem?.link?.url ? { href: navItem?.link?.url } : {})}>
      {navItem?.link?.title}
    </MainLink>
  )
}

function flattenNavData(navData: NavData): NavData {
  const ret = navData?.flatMap((navItem) => {
    if (navItem?.flatten && navItem.subnav) {
      return flattenNavData(navItem.subnav)
    }

    return navItem
  })

  return ret
}

export const NavigationDesktop = styled(
  ({ ...props }: ComponentProps<'div'>) => {
    const navData = useNavData()
    const flatNav = useMemo(() => flattenNavData(navData), [navData])

    return (
      <ColorModeProvider mode="dark">
        <div {...props}>
          {flatNav?.map((navItem, i) => {
            if (navItem?.mobile_only) {
              return null
            }
            if (navItem?.subnav) {
              if (!i) {
                return (
                  <ProductTopNavMenu
                    key={navItem.id}
                    navItem={navItem}
                  />
                )
              }
              if (i === 1) {
                return (
                  <SolutionTopNavMenu
                    key={navItem.id}
                    navItem={navItem}
                  />
                )
              }

              return (
                <TopNavMenu
                  key={navItem.id}
                  navItem={navItem}
                />
              )
            }

            return (
              <NavItemLink
                key={navItem?.id}
                navItem={navItem}
              />
            )
          })}
        </div>
      </ColorModeProvider>
    )
  }
)(({ theme }) => ({
  display: 'none',
  [mqs.fullHeader]: {
    display: 'flex',
    gap: theme.spacing.xsmall,
  },
}))
