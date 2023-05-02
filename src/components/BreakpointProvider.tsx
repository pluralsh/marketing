import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { PropsWithChildren } from 'react'

import { type Breakpoint, breakpoints } from '../breakpoints'

export * from '../breakpoints'

export const BreakpointContext = createContext<Breakpoint>('')

export function BreakpointProvider({ children }: PropsWithChildren) {
  const [windowWidth, setWindowWidth] = useState(0)
  const val = useMemo(() => {
    let curBreakpoint: Breakpoint = ''

    for (const [name, width] of Object.entries(breakpoints)) {
      if (windowWidth > width) {
        curBreakpoint = name as Breakpoint
      }
    }

    return curBreakpoint
  }, [windowWidth])

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  })

  return (
    <BreakpointContext.Provider value={val}>
      {children}
    </BreakpointContext.Provider>
  )
}

export function BreakpointIsGreaterOrEqual(a: Breakpoint, b: Breakpoint) {
  return breakpoints[a] >= breakpoints[b]
}

export function BreakpointIsLessThan(a: Breakpoint, b: Breakpoint) {
  return breakpoints[a] < breakpoints[b]
}

export const useBreakpoint = () => useContext(BreakpointContext)
