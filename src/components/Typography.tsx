import { Children, type ComponentProps, forwardRef } from 'react'

import {
  ArrowRightIcon,
  type styledTheme,
  useNavigationContext,
} from '@pluralsh/design-system'

import { isEmpty, lowerFirst } from 'lodash-es'
import styled from 'styled-components'
import { type PascalCase } from 'type-fest'

import { type Breakpoint, mqs } from '@src/breakpoints'

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

export const Heading3 = styled.h2(({ theme }) => ({
  ...theme.partials.marketingText.title1,
  [mqs.xxl]: {
    ...theme.partials.marketingText.hero2,
  },
}))

type TextStyle =
  | `m${PascalCase<keyof typeof styledTheme.partials.marketingText>}`
  | `a${PascalCase<keyof typeof styledTheme.partials.marketingText>}`

const textPropFilter = {
  shouldForwardProp: (prop) => !['color', 'styles'].includes(prop),
}

const APP_PREFIX = 'a'
const MARKETING_PREFIX = 'm'

export const ResponsiveText = styled.h2.withConfig(textPropFilter)<{
  color?: any
  textStyles?: Partial<Record<Breakpoint, TextStyle>>
}>(({ theme, color, textStyles: styles }) => {
  const parts = Object.fromEntries(
    Object.entries(styles || {})
      .map(([breakpoint, styleName]) => {
        let prefix = APP_PREFIX
        let textStyles: Record<string, any> = theme.partials.text

        if (styleName.startsWith(MARKETING_PREFIX)) {
          prefix = MARKETING_PREFIX
          textStyles = theme.partials.marketingText
        }
        const key = lowerFirst(styleName.replace(new RegExp(`^${prefix}`), ''))

        if (!mqs[breakpoint]) {
          return []
        }

        return [
          [mqs[breakpoint]],
          {
            ...(textStyles[key] || {}),
          },
        ]
      })
      .filter((val) => !isEmpty(val))
  )

  return {
    ...parts,
    ...(color ? { color: theme.colors[color] } : { color: theme.colors.text }),
  }
})

export const Title2 = styled.h3(({ theme }) => ({
  ...theme.partials.marketingText.title2,
}))

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

export const Label = styled.h4.withConfig(textPropFilter)(
  ({ theme, color }) => ({
    ...theme.partials.marketingText.label,
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

const CtaIcon = styled((props) => (
  <span {...props}>
    <ArrowRightIcon size={18} />
  </span>
))(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  top: 2,
  marginLeft: theme.spacing.medium,
  transition: 'transform 0.2s ease',
}))

export const Cta = styled(({ children, ...props }) => {
  const { Link } = useNavigationContext()

  const kids = Children.map(children, (child, i) => {
    if (i === Children.count(children) - 1 && typeof child === 'string') {
      const splitChild = child.split(/(?<=\s)/)

      if (splitChild.length >= 1) {
        return [
          ...splitChild.slice(0, -1),
          <span style={{ whiteSpace: 'nowrap' }}>
            {...splitChild.slice(-1)}
            <CtaIcon />
          </span>,
        ]
      }

      return (
        <>
          {child}
          <CtaIcon />
        </>
      )
    }

    return child
  })

  return <Link {...props}>{kids}</Link>
})(({ theme }) => ({
  display: 'block',
  gap: theme.spacing.medium,
  ...theme.partials.marketingText.body2Bold,
  fontWeight: 500,
  cursor: 'pointer',
  '&:hover': {
    [CtaIcon]: {
      transform: 'translate(20%)',
    },
  },
}))
