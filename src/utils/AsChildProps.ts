import { type ReactElement } from 'react'

export type AsChildProps<DefaultElementProps = Record<string, never>> =
  | ({
      /**
       * If true, the component will be rendered as its child instead of its
       * default element
       */
      asChild?: false | undefined | null
    } & DefaultElementProps)
  | {
      /**
       * If true, the component will be rendered as its child instead of its
       * default element
       */
      asChild: true
      className?: string
      children: ReactElement
    }
