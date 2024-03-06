import { type ComponentProps } from 'react'

import { cn as classNames } from '@src/utils/cn'

export function EqualColumn({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={classNames('columns:flex-grow columns:basis-0', className)}
      {...props}
    />
  )
}

export function Columns({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={classNames([
        'flex',
        'flex-col',
        'gap-x-large',
        'columns:flex-row',
        'columns:gap-x-xlarge',
        'xl:gap-x-xxlarge',
        className,
      ])}
      {...props}
    />
  )
}

export function ColumnsMd({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={classNames([
        'flex',
        'flex-col',
        'gap-x-large',
        'md:flex-row',
        'md:gap-x-xlarge',
        'xl:gap-x-xxlarge',
        className,
      ])}
      {...props}
    />
  )
}
