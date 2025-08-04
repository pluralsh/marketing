import { asLink } from '@prismicio/client'

import { REQUIRED_PAGE_UID } from '@/constants'
import { getHomepage, getSettings } from '@/utils/prismicio'

import HeaderClient from './Header.client'

type HeaderProps = React.ComponentPropsWithRef<'header'>

export default async function Header({ className, ...props }: HeaderProps) {
  const {
    data: {
      nav_logo,
      nav_logo_redirect,
      slices2: nav_link_slices,
      nav_buttons,
    },
  } = await getSettings()

  let logoHref = asLink(nav_logo_redirect) || asLink(await getHomepage()) || ''
  logoHref = logoHref === `/${REQUIRED_PAGE_UID.HOME}` ? '/' : logoHref

  return (
    <HeaderClient
      nav_logo={nav_logo}
      nav_link_slices={nav_link_slices}
      nav_buttons={nav_buttons}
      logo_href={logoHref}
      className={className}
      {...props}
    />
  )
}
