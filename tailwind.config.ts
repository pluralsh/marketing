import { styledTheme } from '@pluralsh/design-system'

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

export default {
  content: ['./src/components/**/*.{jsx,tsx}', './pages/**/*.{jsx,tsx}'],
  theme: {
    screens: mapValues(breakpoints, (bp) => `${bp}px`),
    colors,
    spacing,
    extend: {},
  },
  plugins: [],
} satisfies Config
