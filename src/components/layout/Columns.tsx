import { type ComponentProps } from 'react'

import classNames from 'classnames'

export function Col({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={classNames('columns:basis-0 columns:flex-grow', className)}
      {...props}
    />
  )
}

export function Columns2({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={classNames([
        'flex',
        'flex-col',
        'columns:flex-row',
        'columns:gap-x-xlarge',
        'xl:gap-x-xxlarge',
        'xl:flex-row',
        'xxl:gap-x-xxxxlarge',
        'maxWidth:gap-x-xxxxxlarge',
        className,
      ])}
      {...props}
    />
  )
}
