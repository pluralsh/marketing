import type { KeyTextField, LinkField } from '@prismicio/client'
import type { PrismicNextLinkProps } from '@prismicio/next'

import { isFilled } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'

import { cn } from '@/utils/cn'

import SvgArrowRight from '../svg/SvgArrowRight'

type EyebrowProps<T extends LinkField | KeyTextField> = {
  field: T
  emphasized?: boolean
} & (T extends LinkField
  ? Omit<PrismicNextLinkProps, 'field'>
  : React.ComponentProps<'div'>)

export default function Eyebrow<T extends LinkField | KeyTextField>({
  field,
  emphasized,
  className,
  ...props
}: EyebrowProps<T>) {
  const text = typeof field === 'string' ? field : field?.text

  if (field === null || !text) return null

  if (typeof field === 'string' || !isFilled.link(field)) {
    return (
      <div
        className={cn(
          'inline-flex rounded-lg px-3 py-2',
          'border-neutral-000/10 text-caption text-neutral-000 group border transition',
          className
        )}
        {...(props as React.ComponentProps<'div'>)}
      >
        <span>{text}</span>
      </div>
    )
  }

  if (isFilled.link(field)) {
    return (
      // @ts-expect-error TODO: fix errors with props type
      <PrismicNextLink
        field={field}
        className={cn(
          'inline-flex items-center gap-x-3 rounded-lg px-3 py-2 whitespace-nowrap',
          'text-caption group border transition',
          emphasized &&
            'bg-accent-100/5 border-accent-100/10 hover:border-accent-100/[24%] text-accent-100',
          !emphasized &&
            'border-neutral-000/10 hover:border-neutral-000/[24%] text-neutral-000',
          className
        )}
        {...(props as unknown as PrismicNextLinkProps)}
      >
        <span>{text}</span>
        <SvgArrowRight className="opacity-70 transition group-hover:opacity-100" />
      </PrismicNextLink>
    )
  }

  return null
}
