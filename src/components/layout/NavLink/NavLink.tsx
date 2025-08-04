import type { LinkField } from '@prismicio/client'

import { isFilled } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'

import { cn } from '@/utils/cn'

type NavLinkProps = {
  className?: string
  link: LinkField
  onClick?: () => void
}

export default function NavLink({ className, link, onClick }: NavLinkProps) {
  return isFilled.link(link) ? (
    <PrismicNextLink
      field={link}
      className={cn(
        'inline-block font-medium transition-colors hover:text-gray-600',
        className
      )}
      onClick={onClick}
    >
      {link.text}
    </PrismicNextLink>
  ) : (
    <span
      className={cn('inline-block font-medium text-gray-600', className)}
      onClick={onClick}
    >
      {link.text}
    </span>
  )
}
