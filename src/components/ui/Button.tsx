import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

import { cn } from '@/utils/cn'

import { Kbd } from './Kbd'
import { Shortcut } from './Shortcut'
import { SmartLink } from './SmartLink'

export const button = tv({
  base: 'inline-flex shrink-0 cursor-pointer items-center justify-center gap-2.5 rounded-[4px] font-medium whitespace-nowrap no-underline transition-colors disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      primary: 'bg-accent text-on-accent hover:bg-accent/90',
      secondary:
        'border-line-strong bg-surface text-ink hover:border-ink/30 border',
      dark: 'bg-ink text-canvas hover:bg-ink/85',
      ghost: 'text-ink hover:bg-surface-hover',
    },
    size: {
      sm: 'min-h-9 px-3 text-sm',
      md: 'min-h-11 px-3.5 text-[15px] font-normal',
      lg: 'min-h-12 px-5 text-base',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'lg',
  },
})

type ButtonVariants = VariantProps<typeof button>

type ButtonLinkProps = ButtonVariants &
  Omit<React.ComponentProps<typeof SmartLink>, 'children'> & {
    children: React.ReactNode
    /** Single-key keyboard shortcut that triggers this link, shown as a hint. */
    shortcut?: string
  }

export function ButtonLink({
  variant,
  size,
  shortcut,
  className,
  children,
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <SmartLink
      href={href}
      className={cn(button({ variant, size }), className)}
      {...props}
    >
      {children}
      {shortcut && (
        <>
          <Kbd aria-hidden="true">{shortcut}</Kbd>
          <Shortcut
            keyName={shortcut}
            href={href}
          />
        </>
      )}
    </SmartLink>
  )
}

type ButtonProps = ButtonVariants & React.ComponentProps<'button'>

export function Button({
  variant,
  size,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(button({ variant, size }), className)}
      {...props}
    />
  )
}

/** Inline "Read more →" style text link. */
export function ArrowLink({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SmartLink>) {
  return (
    <SmartLink
      className={cn(
        'text-ink hover:text-accent-ink font-medium underline underline-offset-4',
        className
      )}
      {...props}
    >
      {children} <span aria-hidden="true">→</span>
    </SmartLink>
  )
}
