import { createContext, useContext } from 'react'

import { type SiteSettingsFragment } from '@src/generated/graphqlDirectus'

type NavData = Exclude<
  SiteSettingsFragment['main_nav'],
  null | undefined
>['subnav']

const NavDataContext = createContext<NavData | null>(null)

export const useNavData = () => {
  const context = useContext(NavDataContext)

  if (!context) {
    throw Error('useNavData() must be used within a <NavDataProvider>')
  }

  return context
}

export const NavDataProvider = NavDataContext.Provider
