import { cn } from '@/utils/cn'

export function Eyebrow({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn('text-eyebrow m-0', className)}
      {...props}
    />
  )
}
