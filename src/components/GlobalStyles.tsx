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
      color: 'unset',
      textDecoration: 'unset',
    },
    html: {
      ...fillAvailable('height'),
    },
    body: {
      margin: 0,
      overflowX: 'hidden',
      color: theme.colors.text,
      backgroundColor: theme.colors['fill-zero'],
      ...fillAvailable('minHeight'),
    },
    '*': {
      scrollPaddingTop: 'var(--top-nav-height)',
      scrollMarginTop: `${theme.spacing.large}px`,
    },
    ':root': {
      '--top-nav-height': '72px',
      '--menu-extra-bpad': '0px',
      '--page-x-pad': `20px`,
      '--top-nav-link-h-pad': 0,
      [mqs.lg]: {},
      [mqs.xl]: {},
      '--page-max-width': `${
        breakpoints.md - (theme.spacing.large - 20) * 2
      }px`,
    },
    [mqs.md]: {
      ':root': {
        '--page-x-pad': `${theme.spacing.large}px`,
        '--page-max-width': `${
          breakpoints.xxl - (96 - theme.spacing.large) * 2
        }px`,
      },
    },
    [mqs.lg]: {
      ':root': {
        '--top-nav-height': '80px',
        '--top-nav-link-h-pad': `${theme.spacing.small}px`,
      },
    },
    [mqs.fullHeader]: {
      ':root': {
        '--top-nav-link-h-pad': `${theme.spacing.xsmall - 1}px`,
      },
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
        '--page-x-pad': `96px`,
        '--page-max-width': `${breakpoints.maxWidth}px`,
        '--top-nav-link-h-pad': `${theme.spacing.medium}px`,
      },
    },
  })
)

export default GlobalStyles
export { fillAvailable }
