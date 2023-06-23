import { semanticColorCssVars, styledTheme } from '@pluralsh/design-system'

import { mapKeys, mapValues } from 'lodash-es'
import { type Config } from 'tailwindcss'

import { breakpoints } from './src/breakpoints'

const spacing = {
  ...mapValues(styledTheme.spacing, (space) =>
    typeof space === 'number' ? `${space}px` : space
  ),
  '0': '0',
}
const colors = {
  ...styledTheme.colors,
  ...semanticColorCssVars,
}

const borderRadius = {
  none: '0',
  medium: `${styledTheme.borderRadiuses.medium}px`,
  large: `${styledTheme.borderRadiuses.large}px`,
}

const screens = mapKeys(
  mapValues(breakpoints, (bp) => `${bp}px`),
  (_, key) => key
)

export default {
  content: ['./src/components/**/*.{jsx,tsx}', './pages/**/*.{jsx,tsx}'],
  theme: {
    screens,
    colors,
    spacing,
    borderRadius,
    extend: {},
  },
  plugins: [],
} satisfies Config
