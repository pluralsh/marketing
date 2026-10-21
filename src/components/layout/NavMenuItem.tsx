import type { NavItem } from '@/content/site'

import { Icon } from '@/components/ui/Icon'
import { SmartLink, type SmartLinkProps } from '@/components/ui/SmartLink'
import { cn } from '@/utils/cn'

// Extra anchor props and the ref come from Radix `NavigationMenu.Link asChild`
// and must reach the anchor for menu keyboard navigation and close-on-select.
type NavMenuItemProps = Omit<SmartLinkProps, 'href' | 'children'> & {
  item: NavItem
  /** Draw the icon on a tinted tile (product menu) or bare (solutions). */
  tile?: boolean
}

export function NavMenuItem({
  item,
  tile,
  className,
  ...props
}: NavMenuItemProps) {
  return (
    <SmartLink
      {...props}
      href={item.href}
      className={cn(
        'text-ink hover:bg-surface-hover flex items-start gap-3.5 rounded-xs p-3 no-underline',
        className
      )}
    >
      {item.icon && (
        <span
          className={cn(
            'text-accent-ink flex size-9 shrink-0 items-center justify-center rounded-xs',
            tile && 'bg-accent-tint'
          )}
        >
          <Icon path={item.icon} />
        </span>
      )}
      <span className="flex flex-col gap-0.5">
        <span className="font-medium">{item.title}</span>
        <span className="text-muted text-sm">{item.description}</span>
      </span>
    </SmartLink>
  )
}

type NavFeatureCardProps = Omit<SmartLinkProps, 'title' | 'children'> & {
  title: string
  description: string
}

/** Dotted call-out card that links to a section overview page. */
export function NavFeatureCard({
  title,
  description,
  className,
  ...props
}: NavFeatureCardProps) {
  return (
    <SmartLink
      {...props}
      className={cn(
        'border-line bg-canvas text-ink group flex flex-wrap items-center justify-between gap-4 rounded-sm border px-5 py-4.5 no-underline',
        'bg-[radial-gradient(var(--line-strong)_1px,transparent_1px)] bg-size-[12px_12px]',
        className
      )}
    >
      <span className="flex flex-col gap-1">
        <span className="font-serif text-2xl">{title}</span>
        <span className="text-muted text-sm">{description}</span>
      </span>
      <span
        aria-hidden="true"
        className="border-line-strong bg-surface group-hover:border-accent group-hover:text-accent-ink flex size-10 items-center justify-center rounded-xs border transition-colors"
      >
        <Icon path="M5 12h14 M13 6l6 6-6 6" />
      </span>
    </SmartLink>
  )
}
