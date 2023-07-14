import styled from 'styled-components'

import { type Breakpoint, mqs } from '@src/breakpoints'

export const EmbedAspectRatio = styled.div<{ $aspectRatio: string }>(
  ({ $aspectRatio }) => ({
    ...($aspectRatio
      ? {
          position: 'relative',
          '.lo-emb-vid[style]': {
            position: 'static !important',
            padding: '0 !important',
            height: 'unset !important',
          } as any,
          '&::before': {
            content: '""',
            width: '1px',
            marginLeft: '-1px',
            float: 'left',
            height: 0,
            paddingTop: `calc(100% / (${$aspectRatio}))`,
          },
          '&::after': {
            content: '""',
            display: 'table',
            clear: 'both',
          },
          iframe: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          },
        }
      : {}),
  })
)

const ratioStyles = (ratio: string) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    width: '1px',
    marginLeft: '-1px',
    float: 'left',
    height: 0,
    paddingTop: `calc(100% / (${ratio}))`,
  },
  '&::after': {
    content: '""',
    display: 'table',
    clear: 'both',
  },
})

const undoRatioStyles = () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  '&::before': {
    content: 'none',
  },
  '&::after': {
    content: 'none',
  },
})

export const ResponsiveAspectRatioSC = styled.div.withConfig({
  shouldForwardProp: (prop) => !['ratios'].includes(prop),
})<{
  ratios: Partial<Record<Breakpoint, string>>
}>(({ ratios }) => {
  const parts = Object.fromEntries(
    Object.entries(ratios || {})
      .filter(([breakpoint]) => !!breakpoint && !!mqs[breakpoint])
      .map(([breakpoint, ratio]) => [
        [mqs[breakpoint]],
        ratio ? ratioStyles(ratio) : undoRatioStyles(),
      ])
  )

  return {
    ...(ratios[''] ? ratioStyles(ratios['']) : {}),
    ...parts,
  }
})
