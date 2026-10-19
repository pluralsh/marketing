import type { NavItem } from '@/content/site'

import { Icon } from '@/components/ui/Icon'
import { SmartLink } from '@/components/ui/SmartLink'
import { cn } from '@/utils/cn'

type NavMenuItemProps = {
  item: NavItem
  /** Draw the icon on a tinted tile (product menu) or bare (solutions). */
  tile?: boolean
  className?: string
}

export function NavMenuItem({ item, tile, className }: NavMenuItemProps) {
  return (
    <SmartLink
      href={item.href}
      className={cn(
        'text-ink hover:bg-surface-hover flex items-start gap-3.5 rounded-lg p-3 no-underline',
        className
      )}
    >
      {item.icon && (
        <span
          className={cn(
            'text-accent-ink flex size-9 shrink-0 items-center justify-center rounded-lg',
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

type NavFeatureCardProps = {
  title: string
  description: string
  href: string
  className?: string
}

/** Dotted call-out card that links to a section overview page. */
export function NavFeatureCard({
  title,
  description,
  href,
  className,
}: NavFeatureCardProps) {
  return (
    <SmartLink
      href={href}
      className={cn(
        'border-line bg-canvas text-ink group flex flex-wrap items-center justify-between gap-4 rounded-[10px] border px-5 py-4.5 no-underline',
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
        className="border-line-strong bg-surface group-hover:border-accent group-hover:text-accent-ink flex size-10 items-center justify-center rounded-md border transition-colors"
      >
        →
      </span>
    </SmartLink>
  )
}
