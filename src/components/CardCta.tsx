import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  forwardRef,
} from 'react'

import { CaretRightIcon, useNavigationContext } from '@pluralsh/design-system'

import { Slot, Slottable } from '@radix-ui/react-slot'

import { type AsChildProps } from '@src/utils/AsChildProps'
import { cn } from '@src/utils/cn'

export const CardCta = forwardRef<
  HTMLAnchorElement,
  AsChildProps<ComponentPropsWithoutRef<'a'>>
>(({ children, asChild, className, ...props }: ComponentProps<any>, ref) => {
  const { Link } = useNavigationContext()
  const Comp = asChild ? Slot : Link

  return (
    <Comp
      ref={ref}
      className={cn(
        'txt-mktg-standalone-link flex flex-row gap-x-small py-xsmall text-[12px]',
        className
      )}
      data-card-cta
      {...props}
    >
      <div>
        <Slottable>{children}</Slottable>
      </div>
      <div className="flex items-center justify-center">
        <CaretRightIcon size={12} />
      </div>
    </Comp>
  )
})
