import { type ComponentProps } from 'react'

import classNames from 'classnames'

export function EqualColumn({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={classNames('columns:basis-0 columns:flex-grow', className)}
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
