import { Eyebrow } from '@/components/ui/Eyebrow'
import { cn } from '@/utils/cn'

type PageHeroProps = React.PropsWithChildren<{
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  /** Buttons rendered under the description. */
  actions?: React.ReactNode
  size?: 'display' | 'display-sm' | 'xl'
  align?: 'start' | 'center'
  className?: string
}>

const sizes = {
  display: 'text-display',
  'display-sm': 'text-display-sm',
  xl: 'text-heading-xl',
}

/** Top-of-page block: eyebrow, the page's h1, lead copy, and calls to action. */
export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  size = 'display-sm',
  align = 'start',
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'px-gutter flex flex-col gap-7 pt-[clamp(56px,8vw,96px)] pb-12',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className={cn('m-0 max-w-[16ch] text-balance', sizes[size])}>
        {title}
      </h1>
      {description && (
        <p className="text-lead m-0 max-w-[620px] text-pretty">{description}</p>
      )}
      {actions && (
        <div className="flex flex-wrap items-center gap-3">{actions}</div>
      )}
      {children}
    </section>
  )
}
