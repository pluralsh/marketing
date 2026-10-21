import { cn } from '@/utils/cn'

export function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      className={cn(
        'rounded-[3px] border border-current/30 px-1.5 py-px font-mono text-[11px] leading-[1.4] font-normal opacity-80',
        className
      )}
      {...props}
    />
  )
}
