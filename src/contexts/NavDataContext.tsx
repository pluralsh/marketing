import { createContext, useContext } from 'react'

import { type NavListFragment } from '@src/generated/graphqlDirectus'

export type NavList =
  | (NavListFragment & {
      subnav?: NavList[] | null | undefined
    })
  | null
  | undefined

export type NavData = NavList[]

const NavDataContext = createContext<NavData | null>(null)

export const useNavData = () => {
  const context = useContext(NavDataContext)

  if (!context) {
    throw Error('useNavData() must be used within a <NavDataProvider>')
  }

  return context
}

export const NavDataProvider = NavDataContext.Provider
