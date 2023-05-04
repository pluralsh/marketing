import { type ComponentProps } from 'react'

import styled from 'styled-components'

import { useNavData } from '@src/contexts/NavDataContext'

import { mqs } from '../breakpoints'

import { MainLink } from './Navigation'

function NavItemLink({ navItem }: { navItem?: any }) {
  return (
    <MainLink {...(navItem?.link?.url ? { href: navItem?.link?.url } : {})}>
      {navItem?.link?.title}
    </MainLink>
  )
}

export const NavigationDesktop = styled(
  ({ ...props }: ComponentProps<'div'>) => {
    const nav = useNavData()

    return (
      <div {...props}>
        {nav?.map((navItem) => {
          if (navItem?.mobile_only) {
            return null
          }
          if (navItem?.flatten && navItem?.subnav) {
            return navItem?.subnav?.map((n) =>
              n?.mobile_only ? null : <NavItemLink navItem={n} />
            )
          }

          return <NavItemLink navItem={navItem} />
        })}
      </div>
    )
  }
)(({ theme }) => ({
  display: 'none',
  [mqs.fullHeader]: {
    display: 'flex',
    gap: theme.spacing.xsmall,
  },
}))
