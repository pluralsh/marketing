import Link from 'next/link'

export type SmartLinkProps = Omit<React.ComponentProps<'a'>, 'href'> & {
  href: string
}

export function isHttpHref(href: string) {
  return /^(https?:)?\/\//.test(href)
}

export function isExternalHref(href: string) {
  return isHttpHref(href) || /^(mailto|tel):/.test(href)
}

/**
 * Internal paths go through next/link for client-side navigation; absolute
 * URLs (including the separately hosted blog and docs) render a plain anchor.
 * Off-site http(s) links open in a new tab.
 */
export function SmartLink({ href, ...props }: SmartLinkProps) {
  if (isExternalHref(href) || href.startsWith('#')) {
    const externalTab = isHttpHref(href)
      ? { target: '_blank' as const, rel: 'noopener noreferrer' }
      : undefined

    return (
      <a
        href={href}
        {...externalTab}
        {...props}
      />
    )
  }

  return (
    <Link
      href={href}
      {...props}
    />
  )
}
