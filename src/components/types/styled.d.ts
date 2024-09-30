import { type styledTheme } from '@pluralsh/design-system'

import { type CSSProp } from 'styled-components'

// Allow css prop on html elements
declare module 'react' {
  interface Attributes {
    css?: CSSProp | undefined
  }
}

type StyledTheme = typeof styledTheme

// extend original module declarations
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends StyledTheme {}
  export declare function useTheme(): DefaultTheme
}
