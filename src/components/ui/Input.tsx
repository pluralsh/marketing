import { cn } from '@/utils/cn'

export function Input({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      className={cn(
        'border-line-strong bg-surface text-ink placeholder:text-subtle min-h-11 rounded-[4px] border px-3 text-sm outline-none',
        'hover:border-ink/30 focus-visible:border-accent aria-invalid:border-danger transition-colors disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}
