import type { VariantProps } from 'tailwind-variants'

import { tv } from 'tailwind-variants'

import type { PolymorphicPropsWithRef } from '@/types/polymorphic'

import { cn } from '@/utils/cn'

const button = tv({
  slots: {
    base: 'box-border relative inline-flex items-center justify-center gap-2 rounded-sm whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 transition',
  },
  variants: {
    variant: {
      primary:
        'bg-primary-600 !text-neutral-000 hover:bg-neutral-000 hover:!text-neutral-800 shadow-primary',
      secondary:
        'border border-neutral-000/10 text-text-body hover:border-neutral-000/20 hover:text-neutral-000',
    },
    size: {
      xs: {
        base: 'px-2 py-2 h-8 text-caption',
      },
      small: {
        base: 'px-4 py-1.5 h-9 text-body-small',
      },
      large: {
        base: 'px-8 py-3 h-12 text-body-medium',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'small',
  },
})

export type ButtonProps<T extends React.ElementType = 'button'> =
  PolymorphicPropsWithRef<
    VariantProps<typeof button> & {
      as?: T
      className?: string
    },
    T
  >

export function Button<T extends React.ElementType = 'button'>({
  as,
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps<T>) {
  const { base } = button({ variant, size })
  const Component = as || 'button'

  return (
    <Component
      className={cn(base(), className)}
      {...props}
    >
      {children}
    </Component>
  )
}
