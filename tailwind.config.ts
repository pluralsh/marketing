import { styledTheme } from '@pluralsh/design-system'
import { S } from 'honorable'

import mapKeys from 'lodash/mapKeys'
import mapValues from 'lodash/mapValues'
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
}
const screens = mapKeys(
  mapValues(breakpoints, (bp) => `${bp}px`),
  (_, key) => key
)

console.log('screens', screens)
export default {
  content: ['./src/components/**/*.{jsx,tsx}', './pages/**/*.{jsx,tsx}'],
  theme: {
    screens,
    colors,
    spacing,
    extend: {},
  },
  plugins: [],
} satisfies Config
