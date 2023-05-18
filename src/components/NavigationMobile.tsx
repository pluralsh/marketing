import { DiscordIcon } from '@pluralsh/design-system'

import isEmpty from 'lodash/isEmpty'
import styled from 'styled-components'
import { useIsomorphicLayoutEffect } from 'usehooks-ts'

import { useNavData } from '@src/contexts/NavDataContext'
import { type NavListFragment } from '@src/generated/graphqlDirectus'

import { FullNav } from './FullNav'
import GithubStars from './GithubStars'
import useScrollLock from './hooks/useScrollLock'
import { MainLink } from './Navigation'
import { SocialLink } from './PageHeaderButtons'

import type { NavContextValue } from './FullNav'

const MobileMainLink = styled(MainLink)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: theme.spacing.xsmall,
  paddingBottom: theme.spacing.xsmall,
  marginBottom: theme.spacing.xsmall,
  width: '100%',
}))

export const MenuHeading = styled.h6(({ theme }) => ({
  ...theme.partials.marketingText.label,
  margin: 0,
  paddingTop: theme.spacing.xsmall,
  paddingBottom: theme.spacing.xsmall,
}))

type MobileMenuProps = NavContextValue & {
  className?: string
}

const SocialIcons = styled.div(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing.xlarge,
  gap: theme.spacing.medium,
}))

type NavData = (
  | (NavListFragment & {
      subnav?: NavData | null
    })
  | null
)[]

function NavList({ navData }: { navData?: NavData | null }) {
  if (!navData) {
    return null
  }

  return (
    <>
      {navData.map((navItem) => {
        if (isEmpty(navItem?.subnav)) {
          return (
            <MobileMainLink
              key={navItem?.id}
              {...(navItem?.link?.url ? { href: navItem?.link.url } : {})}
            >
              {navItem?.link?.title}
            </MobileMainLink>
          )
        }

        return (
          <section className="mb-medium">
            {navItem?.link?.title ? (
              <MenuHeading>{navItem?.link?.title}</MenuHeading>
            ) : null}
            <NavList navData={navItem?.subnav} />
          </section>
        )
      })}
    </>
  )
}

function PluralMenuContent({
  hide: _,
  ...props
}: {
  hide?: boolean
  className?: string
}) {
  const navData = useNavData()

  return (
    <div {...props}>
      <NavList navData={navData} />
      <SocialIcons>
        <SocialLink
          href="https://discord.gg/pluralsh"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
        >
          <DiscordIcon size={16} />
        </SocialLink>
        <GithubStars />
      </SocialIcons>
    </div>
  )
}

export const PluralMenu = styled(PluralMenuContent)(
  ({ hide = false, theme }) => ({
    display: hide ? 'none' : 'block',
    paddingLeft: theme.spacing.xlarge,
    paddingRight: theme.spacing.xlarge,
    overflow: 'auto',
    paddingBottom: `calc(${theme.spacing.xlarge}px + var(--menu-extra-bpad))`,
  })
)

const Content = styled.div(({ theme }) => ({
  pointerEvents: 'all',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 'var(--top-nav-height)',
  bottom: 0,
  paddingRight: 0,
  paddingTop: theme.spacing.medium,
  background: theme.colors['fill-one'],
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
}))

function NavigationMobileUnstyled({
  isOpen,
  setIsOpen,
  className,
}: MobileMenuProps) {
  const [, setScrollLock] = useScrollLock(false)

  useIsomorphicLayoutEffect(() => {
    setScrollLock(isOpen)
  }, [isOpen, setScrollLock])

  return (
    <div className={className}>
      <Content>
        <FullNav
          desktop={false}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </Content>
    </div>
  )
}

export const NavigationMobile = styled(NavigationMobileUnstyled)(
  ({ isOpen, theme }) => ({
    '--menu-extra-bpad': '90px',
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%',
    display: isOpen ? 'block' : 'none',
    zIndex: theme.zIndexes.modal,
    pointerEvents: 'none',
  })
)
