// https://www.jacobparis.com/content/react-as-child
import React from 'react'

import { twMerge } from 'tailwind-merge'

export type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: React.ReactNode }

function SlotWithRef(
  {
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode
  },
  ref: React.Ref<HTMLElement>
) {
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...props,
      ...children.props,
      ref,
      style: {
        ...props.style,
        ...children.props.style,
      },
      className: twMerge(props.className, children.props.className),
    })
  }
  if (React.Children.count(children) > 1) {
    React.Children.only(null)
  }

  return null
}

export const Slot = React.forwardRef(SlotWithRef)
