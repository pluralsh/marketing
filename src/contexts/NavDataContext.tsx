import { createContext, useContext } from 'react'

export type NavList = {
  id: string
  link: {
    title: string
    url: string
    description?: string
    icon?: string
  }
  subnav?: NavList[]
}

export type NavData = (NavList | null)[]

const NavDataContext = createContext<NavData | null>(null)

export const useNavData = () => {
  const context = useContext(NavDataContext)

  if (!context) {
    throw Error('useNavData() must be used within a <NavDataProvider>')
  }

  return context
}

export const NavDataProvider = NavDataContext.Provider
