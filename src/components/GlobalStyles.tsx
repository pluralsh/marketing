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

function maxWidthCalc({
  nextBreakpoint,
  nextPageXPad,
}: {
  nextBreakpoint: number
  nextPageXPad: string
}) {
  return {
    '--page-max-width': `calc(${nextBreakpoint}px - ((${nextPageXPad} - var(--page-x-pad)) * 2))`,
  }
}

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
      '--page-x-pad-xxl': '48px',
      '--page-x-pad-max': '96px',

      '--top-nav-height': '72px',
      '--menu-extra-bpad': '0px',
      '--page-x-pad': 'var(--page-x-pad-start)',
      '--top-nav-link-h-pad': 0,
      ...maxWidthCalc({
        nextBreakpoint: breakpoints.md,
        nextPageXPad: 'var(--page-x-pad-md)',
      }),
    },
    [mqs.md]: {
      ':root': {
        '--page-x-pad': `var(--page-x-pad-md)`,
        ...maxWidthCalc({
          nextBreakpoint: breakpoints.lg,
          nextPageXPad: 'var(--page-x-pad-lg)',
        }),
      },
    },
    [mqs.lg]: {
      ':root': {
        '--top-nav-height': '80px',
        '--top-nav-link-h-pad': `${theme.spacing.small}px`,
        '--page-x-pad': `var(--page-x-pad-lg)`,
        ...maxWidthCalc({
          nextBreakpoint: breakpoints.xl,
          nextPageXPad: 'var(--page-x-pad-xl)',
        }),
      },
    },
    [mqs.fullHeader]: {
      ':root': {
        '--top-nav-link-h-pad': `${theme.spacing.xsmall - 1}px`,
      },
    },
    [mqs.xl]: {
      ':root': {
        '--page-x-pad': `var(--page-x-pad-xl)`,
        ...maxWidthCalc({
          nextBreakpoint: breakpoints.xxl,
          nextPageXPad: 'var(--page-x-pad-xxl)',
        }),
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
        '--top-nav-link-h-pad': `${theme.spacing.medium}px`,
        '--page-x-pad': `var(--page-x-pad-xxl)`,
        ...maxWidthCalc({
          nextBreakpoint: breakpoints.max,
          nextPageXPad: 'var(--page-x-pad-max)',
        }),
      },
    },
    [mqs.max]: {
      ':root': {
        '--page-x-pad': `var(--page-x-pad-max)`,
        '--page-max-width': `calc(${breakpoints.max}px)`,
      },
    },
  })
)

export default GlobalStyles
export { fillAvailable }
