import type { Dispatch, SetStateAction } from 'react'
import { createContext, useEffect, useMemo } from 'react'

import { usePrevious } from '@pluralsh/design-system'
import { useRouter } from 'next/router'

import styled from 'styled-components'

import { getBarePathFromPath } from '../utils/text'

import { PluralMenu } from './NavigationMobile'

import type { PartialBy } from '../utils/typescript'

const setIsOpenStub: Dispatch<SetStateAction<boolean>> = () => {}

export type NavContextValue = {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}

export const NavContext = createContext<NavContextValue>({
  setIsOpen: setIsOpenStub,
  isOpen: false,
})

function NavButtonsUnstyled({ desktop: _desktop, children, ...props }) {
  return (
    <div {...props}>
      <div>{children}</div>
    </div>
  )
}

export const NavPositionWrapper = styled.nav(({ theme: _theme }) => ({
  position: 'sticky',
  height: 'calc(100vh - var(--top-nav-height))',
  top: 'var(--top-nav-height)',
  display: 'flex',
  flexDirection: 'column',
}))

export const NavButtons = styled(NavButtonsUnstyled)<{ desktop: boolean }>(
  ({ desktop, theme }) => ({
    padding: theme.spacing.medium,
    backgroundColor: theme.colors['fill-one'],

    ...(desktop
      ? {
          paddingLeft: 0,
          marginLeft: -1000,
        }
      : {}),

    '> div': {
      marginLeft: desktop ? 1000 : 0,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing.medium,
      justifyContent: 'space-between',
    },
  })
)

export const NavWrap = styled.div((_) => ({
  position: 'relative',
  flexGrow: 1,
}))

export function NavigationFull({
  desktop = true,
  isOpen,
  setIsOpen,
}: PartialBy<NavContextValue, 'setIsOpen' | 'isOpen'> & {
  desktop: boolean
}) {
  const router = useRouter()
  const thisPath = getBarePathFromPath(router.asPath)
  const previousPath = usePrevious(thisPath)

  useEffect(() => {
    if (thisPath !== previousPath) {
      setIsOpen?.(false)
    }
  }, [thisPath, previousPath, setIsOpen])

  const navContextValue = useMemo(
    () => ({ setIsOpen: setIsOpen || setIsOpenStub, isOpen: !!isOpen }),
    [setIsOpen, isOpen]
  )

  const content = (
    <NavContext.Provider value={navContextValue}>
      <NavWrap>
        <PluralMenu />
      </NavWrap>
    </NavContext.Provider>
  )

  if (desktop) {
    return (
      <NavPositionWrapper
        role="navigation"
        aria-label="Main"
      >
        {content}
      </NavPositionWrapper>
    )
  }

  return content
}
