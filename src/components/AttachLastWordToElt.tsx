import { Children, type ReactElement, type ReactNode, memo } from 'react'

import { splitOnSpacesInclusive } from '@src/utils/text'

export const AttachLastWordToElt = memo(
  ({ elt, children }: { elt: ReactElement; children: ReactNode }) => (
    <>
      {Children.map(children, (child, i) => {
        if (i === Children.count(children) - 1 && typeof child === 'string') {
          const splitChild = splitOnSpacesInclusive(child)

          if (splitChild.length >= 1) {
            return [
              ...splitChild.slice(0, -1),
              <span style={{ whiteSpace: 'nowrap' }}>
                {...splitChild.slice(-1)}
                {elt}
              </span>,
            ]
          }

          return (
            <>
              {child}
              {elt}
            </>
          )
        }

        return child
      })}
    </>
  )
)
