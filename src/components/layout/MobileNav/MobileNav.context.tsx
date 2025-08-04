'use client'

import { createContext, use } from 'react'

export const MobileNavContext = createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  close: () => void
  activeLink: null | string
  setActiveLink: (idx: string | null) => void
} | null>(null)

export function useMobileNav() {
  const context = use(MobileNavContext)
  if (!context) {
    throw new Error('useMobileNav must be used within a MobileNavContext')
  }
  return context
}
