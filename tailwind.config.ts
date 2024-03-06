import { semanticColorCssVars, styledTheme } from '@pluralsh/design-system'

import { kebabCase, mapKeys, mapValues } from 'lodash-es'
import { type Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

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

/**
 * Deep sorts the keys of an object alphabetically while putting members that
 * are objects at the end
 *
 * @param obj - The object to sort
 */
function sortStyleKeys<T extends Record<string, any>>(obj: T): T {
  const keys = Object.keys(obj).sort((a, b) => {
    if (typeof obj[a] === 'object' && typeof obj[b] !== 'object') {
      return 1
    }
    if (typeof obj[b] === 'object' && typeof obj[a] !== 'object') {
      return -1
    }

    return a.localeCompare(b, 'en')
  })

  return Object.fromEntries(
    keys.map((key) => {
      if (typeof obj[key] === 'object') {
        return [key, sortStyleKeys(obj[key])]
      }

      return [key, obj[key]]
    })
  ) as T
}

// Sorting the keys makes the generated tailwind classes easier to read
const textStyles = Object.fromEntries([
  ...Object.entries(sortStyleKeys(styledTheme.partials.text)).map(
    ([selector, styles]) => [`${kebabCase(selector)}`, styles]
  ),
  ...Object.entries(sortStyleKeys(styledTheme.partials.marketingText)).map(
    ([selector, styles]) => [`mktg-${kebabCase(selector)}`, styles]
  ),
])

export const textStyleKeys = Object.keys(textStyles)

export default {
  content: ['./src/components/**/*.{jsx,tsx}', './pages/**/*.{jsx,tsx}'],
  theme: {
    screens,
    colors,
    spacing,
    borderRadius,
    extend: {},
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents(mapKeys(textStyles, (_, key) => `.txt-${key}`) as any)
    }),
  ],
} satisfies Config
