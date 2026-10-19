import { cn } from '@/utils/cn'

/** Themed UI-mock surface: a bordered card set in monospace. */
export function Panel({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'border-line-strong bg-surface rounded-xl border p-5 font-mono text-[13px] leading-relaxed',
        className
      )}
      {...props}
    />
  )
}

/** Small mono heading inside a Panel. */
export function PanelLabel({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('text-muted mb-3 text-[11px] uppercase', className)}
      {...props}
    />
  )
}

type VisualCardProps = {
  visual: React.ReactNode
  title: string
  body: string
}

/** Card with a dotted "canvas" holding a small visual above its caption. */
export function VisualCard({ visual, title, body }: VisualCardProps) {
  return (
    <div className="border-line-strong bg-surface flex flex-col overflow-hidden rounded-[14px] border">
      <div className="border-line bg-canvas flex min-h-40 items-center border-b bg-[radial-gradient(var(--line-strong)_1px,transparent_1px)] bg-size-[14px_14px] p-5">
        {visual}
      </div>
      <div className="flex flex-col gap-1.5 p-5">
        <h3 className="m-0 text-[17px] font-medium">{title}</h3>
        <p className="text-body m-0 text-[15px]">{body}</p>
      </div>
    </div>
  )
}
