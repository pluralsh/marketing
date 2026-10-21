import type { Testimonial } from '@/content/types'

import { cn } from '@/utils/cn'

import { CellGrid } from './CellGrid'

type QuoteProps = {
  testimonial: Testimonial
  size?: 'md' | 'lg'
  className?: string
}

export function Quote({ testimonial, size = 'md', className }: QuoteProps) {
  return (
    <figure className={cn('m-0 flex flex-col gap-5', className)}>
      <blockquote
        className={cn(
          'm-0 font-serif text-pretty',
          size === 'lg'
            ? 'text-[clamp(26px,3.2vw,40px)] leading-[1.25]'
            : 'text-quote'
        )}
      >
        {testimonial.quote}
      </blockquote>
      <figcaption className="text-muted text-sm">
        <span className="text-ink font-medium">{testimonial.name}</span>
        <br />
        {testimonial.title}
      </figcaption>
    </figure>
  )
}

export function TestimonialGrid({
  items,
  ruled = true,
}: {
  items: Testimonial[]
  /** Pass false when a preceding heading already rules the section. */
  ruled?: boolean
}) {
  return (
    <CellGrid
      minColumn="300px"
      ruled={ruled}
    >
      {items.map((t) => (
        <Quote
          key={t.quote}
          testimonial={t}
          className="px-gutter py-9"
        />
      ))}
    </CellGrid>
  )
}
