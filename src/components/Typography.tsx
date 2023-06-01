import { type ComponentProps, forwardRef } from 'react'

import { type styledTheme } from '@pluralsh/design-system'

import styled from 'styled-components'

import { mqs } from '@src/breakpoints'

export const Heading1 = styled.h1(({ theme }) => ({
  ...theme.partials.marketingText.title2,
  [mqs.md]: {
    ...theme.partials.marketingText.title1,
  },
  [mqs.xxl]: {
    ...theme.partials.marketingText.hero2,
  },
}))

export const Heading2 = styled.h2(({ theme }) => ({
  ...theme.partials.marketingText.title2,
  [mqs.md]: {
    ...theme.partials.marketingText.title1,
  },
}))

const textPropFilter = {
  shouldForwardProp: (prop) => !['color'].includes(prop),
}

export const Body1 = styled.p.withConfig(textPropFilter)(
  ({ theme, color }) => ({
    ...theme.partials.marketingText.body1,
    ...(color ? { color: theme.colors[color] } : { color: theme.colors.text }),
  })
)

export const Body2 = styled.p.withConfig(textPropFilter)(
  ({ theme, color }) => ({
    ...theme.partials.marketingText.body2,
    ...(color
      ? { color: theme.colors[color] }
      : { color: theme.colors['text-light'] }),
  })
)

export const AppBody1 = styled.p.withConfig(textPropFilter)(
  ({ theme, color }) => ({
    ...theme.partials.text.body1,
    ...(color
      ? { color: theme.colors[color] }
      : { color: theme.colors['text-light'] }),
  })
)

export const AppBody2 = styled.p.withConfig(textPropFilter)(
  ({ theme, color }) => ({
    ...theme.partials.text.body2,
    ...(color
      ? { color: theme.colors[color] }
      : { color: theme.colors['text-light'] }),
  })
)

export const Overline = styled.p.withConfig(textPropFilter)(
  ({ theme, color }) => ({
    ...theme.partials.text.overline,
    ...(color
      ? { color: theme.colors[color] }
      : { color: theme.colors['text-xlight'] }),
  })
)

const SubtitleWrap = styled.h2((_) => ({
  display: 'flex',
  position: 'relative',
  textAlign: 'center',
  alignItems: 'center',
}))

export const Label = styled.p(({ theme }) => ({
  ...theme.partials.marketingText.label,
}))

const SubtitleContent = styled.div(({ theme }) => ({
  paddingLeft: theme.spacing.medium,
  paddingRight: theme.spacing.medium,
  ...theme.partials.marketingText.body2Bold,
  color: theme.colors.text,
}))

const SubtitleBorder = styled(
  forwardRef<HTMLDivElement, ComponentProps<'div'>>((props, ref) => (
    <div
      aria-hidden
      {...props}
      ref={ref}
    />
  ))
)(({ theme }) => ({
  flexGrow: '1',
  borderTop: theme.borders.default,
  minWidth: theme.spacing.xlarge,
}))

export const Subtitle = forwardRef(
  ({ children, ...props }: ComponentProps<typeof SubtitleWrap>, ref) => (
    <SubtitleWrap
      {...props}
      ref={ref}
    >
      <SubtitleBorder />
      <SubtitleContent>{children}</SubtitleContent>
      <SubtitleBorder />
    </SubtitleWrap>
  )
)

export const AppTitle = styled.h1(({ theme }) => ({
  ...theme.partials.marketingText.subtitle1,
  [mqs.md]: {
    ...theme.partials.marketingText.hero1,
  },
}))
