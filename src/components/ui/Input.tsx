import { cn } from '@/utils/cn'

type InputProps = React.ComponentProps<'input'>

export default function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-12.5 w-full min-w-0 rounded-lg bg-transparent px-3 py-1 transition outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'not-placeholder-shown:border-neutral-000/20 border-neutral-000/[0.12] hover:border-neutral-000/70 focus-visible:border-neutral-000/70 border aria-invalid:border-[#ff0000]/50',
        'placeholder:text-neutral-000/60 text-neutral-000 text-base leading-normal tracking-[0.01em]',
        className
      )}
      {...props}
    />
  )
}
