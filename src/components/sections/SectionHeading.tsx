import { Eyebrow } from '@/components/ui/Eyebrow'
import { cn } from '@/utils/cn'

type SectionHeadingProps = {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  /** Heading level; pages own a single h1 in their hero. */
  as?: 'h1' | 'h2'
  size?: 'xl' | 'lg' | 'md'
  align?: 'start' | 'center'
  /** Rendered opposite the heading on wide screens (e.g. "View all →"). */
  action?: React.ReactNode
  className?: string
}

const sizes = {
  xl: 'text-heading-xl',
  lg: 'text-heading-lg',
  md: 'text-heading-md',
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = 'h2',
  size = 'xl',
  align = 'start',
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-end justify-between gap-4',
        align === 'center' && 'justify-center text-center',
        className
      )}
    >
      <div
        className={cn(
          'flex max-w-[760px] flex-col gap-3.5',
          align === 'center' && 'items-center'
        )}
      >
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading className={cn('m-0 text-balance', sizes[size])}>
          {title}
        </Heading>
        {description && (
          <p className="text-body m-0 text-[17px] text-pretty">{description}</p>
        )}
      </div>
      {action}
    </div>
  )
}
