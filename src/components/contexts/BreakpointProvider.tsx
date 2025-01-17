import {
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { type Breakpoint, breakpoints } from '../../breakpoints'

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

export const useBreakpoint = () => useContext(BreakpointContext)
