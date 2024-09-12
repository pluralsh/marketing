import { useMemo } from 'react'

import { ColorModeProvider } from '@pluralsh/design-system'

import { type NavData, useNavData } from '@src/contexts/NavDataContext'

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

export function NavigationDesktop({ logoRef }) {
  const navData = useNavData()
  const flatNav = useMemo(() => flattenNavData(navData), [navData])
  const logoLeft = logoRef?.current?.getBoundingClientRect()?.left

  return (
    <ColorModeProvider mode="dark">
      <div className="hidden gap-xsmall lg:flex">
        {flatNav?.map((navItem) => {
          if (navItem?.mobile_only) {
            return null
          }
          if (navItem?.subnav) {
            const kind =
              navItem.link?.title === 'Product'
                ? 'product'
                : navItem.link?.title === 'Solutions'
                  ? 'solution'
                  : 'default'

            return (
              <TopNavMenu
                key={navItem.id}
                kind={kind}
                navItem={navItem}
                left={
                  kind === 'product' || kind === 'solution'
                    ? logoLeft
                    : undefined
                }
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
