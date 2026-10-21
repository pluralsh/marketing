import { Eyebrow } from '@/components/ui/Eyebrow'
import { cn } from '@/utils/cn'

type FeatureRowProps = {
  eyebrow?: React.ReactNode
  title?: React.ReactNode
  children?: React.ReactNode
  /** Visual shown beside the copy. */
  media?: React.ReactNode
  /** Put the media on the left. */
  reverse?: boolean
  /** Use h2 when the row isn't nested under a section heading. */
  titleAs?: 'h2' | 'h3'
  className?: string
}

/** Copy and a visual side by side, stacking on narrow screens. */
export function FeatureRow({
  eyebrow,
  title,
  children,
  media,
  reverse,
  titleAs: Title = 'h3',
  className,
}: FeatureRowProps) {
  return (
    <div
      className={cn(
        'grid items-center gap-[clamp(28px,4vw,56px)] md:grid-cols-2',
        className
      )}
    >
      <div className={cn('flex flex-col gap-3.5', reverse && 'md:order-last')}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {title && (
          <Title className="text-heading-md m-0 text-balance">{title}</Title>
        )}
        <div className="text-body flex flex-col gap-4 text-base">
          {children}
        </div>
      </div>
      {media && <div className="min-w-0">{media}</div>}
    </div>
  )
}
