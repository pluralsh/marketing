import { createGlobalStyle } from 'styled-components'

import { breakpoints, mqs } from '../breakpoints'

const fillAvailable = (prop) => ({
  [`${prop} `]: '-webkit-fill-available',
  [`${prop}  `]: '-moz-available',
  [`${prop}   `]: '-fill-available',
})

// Judo to get around specificity of emotion styles set by honorable
// and also allow tailwind classes to override
// const textStyleWrap = (selector) =>
//   `body :is(div, h1, h2, h3, h4, h5, h6, p, *):where(${selector})`

const GlobalStyles = createGlobalStyle(({ theme }) =>
  // const marketingTextStyles = mapKeys(
  //   theme.partials.marketingText,
  //   (value, key) => textStyleWrap(`.${key}`)
  // )

  ({
    'h1, h2, h3, h4, h5, h6': {
      margin: 0,
    },
    //  Text Styles
    // ...marketingTextStyles,
    // /* End Text Styles */

    '::selection': {
      background: theme.colors['text-primary-accent'],
      color: theme.colors['fill-one'],
    },
    '*:focus': {
      outline: 'none',
    },
    'a:focus-visible': {
      ...theme.partials.focus.default,
      boxShadow: 'none',
    },
    'a:any-link': {
      // color: 'unset',
      textDecoration: 'unset',
    },
    html: {
      ...fillAvailable('height'),
    },
    body: {
      margin: 0,
      color: theme.colors.text,
      backgroundColor: theme.colors['fill-zero'],
      ...fillAvailable('minHeight'),
    },
    '*': {
      scrollPaddingTop: 'var(--top-nav-height)',
      scrollMarginTop: `${theme.spacing.large}px`,
    },
    ':root': {
      '--page-x-pad-start': '16px',
      '--page-x-pad-md': '24px',
      '--page-x-pad-lg': '24px',
      '--page-x-pad-xl': '24px',
      '--page-x-pad-xxl': '32px',
      '--page-x-pad-max': '96px',

      '--top-nav-height': '72px',
      '--menu-extra-bpad': '0px',
      '--page-x-pad': 'var(--page-x-pad-start)',
      '--top-nav-link-h-pad': 0,
      '--page-max-width': `calc(${breakpoints.md}px - ((var(--page-x-pad-md) - var(--page-x-pad)) * 2)))`,
    },
    [mqs.md]: {
      ':root': {
        '--page-x-pad': `var(--page-x-pad-md)`,
        '--page-max-width': `calc(${breakpoints.lg}px - ((var(--page-x-pad-lg) - var(--page-x-pad)) * 2)))`,
      },
    },
    [mqs.lg]: {
      ':root': {
        '--top-nav-height': '80px',
        '--top-nav-link-h-pad': `${theme.spacing.small}px`,
        '--page-x-pad': `var(--page-x-pad-lg)`,
        '--page-max-width': `calc(${breakpoints.xl}px - ((var(--page-x-pad-xl) - var(--page-x-pad)) * 2)))`,
      },
    },
    [mqs.fullHeader]: {
      ':root': {
        '--top-nav-link-h-pad': `${theme.spacing.xsmall - 1}px`,
      },
    },
    [mqs.xl]: {
      '--page-x-pad': `var(--page-x-pad-xl)`,
      '--page-max-width': `calc(${breakpoints.xxl}px - ((var(--page-x-pad-xxl) - var(--page-x-pad)) * 2)))`,
    },
    [mqs.fullHeaderWide]: {
      ':root': {
        '--top-nav-link-h-pad': `${theme.spacing.small}px`,
      },
    },
    [mqs.fullHeaderSocial]: {
      ':root': {
        '--top-nav-link-h-pad': `${theme.spacing.small}px`,
      },
    },
    [mqs.xxl]: {
      ':root': {
        '--top-nav-link-h-pad': `${theme.spacing.medium}px`,
        '--page-x-pad': `var(--page-x-pad-xxl)`,
        '--page-max-width': `calc(${breakpoints.maxWidth}px - ((var(--page-x-pad-max) - var(--page-x-pad)) * 2)))`,
      },
    },
    [mqs.maxWidth]: {
      '--page-x-pad': `var(--page-x-pad-max)`,
      '--page-max-width': `calc(${breakpoints.maxWidth}px)`,
    },
  })
)

export default GlobalStyles
export { fillAvailable }
