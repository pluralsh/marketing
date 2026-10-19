import Link from 'next/link'

export type SmartLinkProps = Omit<React.ComponentProps<'a'>, 'href'> & {
  href: string
}

export function isExternalHref(href: string) {
  return /^(https?:)?\/\//.test(href) || /^(mailto|tel):/.test(href)
}

/**
 * Internal paths go through next/link for client-side navigation; absolute
 * URLs (including the separately hosted blog and docs) render a plain anchor.
 */
export function SmartLink({ href, ...props }: SmartLinkProps) {
  if (isExternalHref(href) || href.startsWith('#')) {
    return (
      <a
        href={href}
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
