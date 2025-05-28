import { ColorModeProvider } from '@pluralsh/design-system'

import { useNavData } from '@src/contexts/NavDataContext'

import { TopNavMenu } from './menu/TopNavMenu'
import { MainLink } from './Navigation'

export function NavItemLink({ navItem }: { navItem?: any }) {
  return (
    <MainLink {...(navItem?.link?.url ? { href: navItem?.link?.url } : {})}>
      {navItem?.link?.title}
    </MainLink>
  )
}

export function NavigationDesktop({ logoRef }) {
  const navData = useNavData()
  const logoLeft = logoRef?.current?.getBoundingClientRect()?.left

  return (
    <ColorModeProvider mode="dark">
      <div className="hidden gap-xsmall lg:flex">
        {navData?.map((navItem) => {
          if (navItem?.subnav) {
            const kind =
              navItem.link?.title === 'Product'
                ? 'product'
                : navItem.link?.title === 'Why Plural'
                  ? 'whyPlural'
                  : navItem.link?.title === 'Solutions'
                    ? 'solution'
                    : 'default'

            return (
              <TopNavMenu
                key={navItem.id}
                kind={kind}
                navItem={navItem}
                left={
                  kind === 'product' ||
                  kind === 'solution' ||
                  kind === 'whyPlural'
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
