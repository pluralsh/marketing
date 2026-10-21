import { cn } from '@/utils/cn'

type DiagramFrameProps = React.PropsWithChildren<{
  label: React.ReactNode
  controls?: React.ReactNode
  caption?: React.ReactNode
  className?: string
}>

const CORNERS = [
  '-top-[4.5px] -left-[4.5px]',
  '-top-[4.5px] -right-[4.5px]',
  '-bottom-[4.5px] -left-[4.5px]',
  '-right-[4.5px] -bottom-[4.5px]',
]

/** Square-cornered frame for interactive figures: label and controls, body, caption. */
export function DiagramFrame({
  label,
  controls,
  caption,
  className,
  children,
}: DiagramFrameProps) {
  return (
    <figure
      className={cn(
        'border-line-strong bg-surface relative m-0 border',
        className
      )}
    >
      {CORNERS.map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={cn(
            'border-line-strong bg-canvas absolute z-[5] size-2 rotate-45 border',
            position
          )}
        />
      ))}
      <div className="border-line flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3">
        <span className="text-label">{label}</span>
        {controls && (
          <div className="flex flex-wrap items-center gap-2">{controls}</div>
        )}
      </div>
      {children}
      {caption && (
        <figcaption className="border-line text-muted border-t px-5 py-3 text-[13px] leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/** Dotted rule that fills the space between a label and its value. */
export function Leader() {
  return (
    <span
      aria-hidden="true"
      className="border-line-strong min-w-6 flex-1 translate-y-0.5 self-center border-b border-dotted"
    />
  )
}
