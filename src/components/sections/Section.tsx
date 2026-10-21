import { cn } from '@/utils/cn'

type SectionProps = React.ComponentProps<'section'> & {
  /** Draw the hairline + registration marks along the top edge. */
  ruled?: boolean
  /** Apply the standard gutter and vertical rhythm. */
  padded?: boolean
}

/** A full-width band inside the page rails. */
export function Section({
  ruled = true,
  padded = true,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        ruled && 'rule-top',
        padded && 'px-gutter py-section',
        'scroll-mt-20',
        className
      )}
      {...props}
    />
  )
}

/** Accented, italic serif emphasis used inside display headings. */
export function Accent({ className, ...props }: React.ComponentProps<'em'>) {
  return (
    <em
      className={cn('text-accent-ink', className)}
      {...props}
    />
  )
}
