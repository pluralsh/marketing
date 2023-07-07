import {
  Children,
  type ComponentProps,
  type ReactNode,
  forwardRef,
} from 'react'

import {
  ArrowRightIcon,
  type styledTheme,
  useNavigationContext,
} from '@pluralsh/design-system'

import { lowerFirst } from 'lodash-es'
import styled, { type DefaultTheme } from 'styled-components'
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

const APP_PREFIX = 'a' as const
const MARKETING_PREFIX = 'm' as const

type Prefix = typeof APP_PREFIX | typeof MARKETING_PREFIX

type TextStyle =
  | `${typeof MARKETING_PREFIX}${PascalCase<
      keyof typeof styledTheme.partials.marketingText
    >}`
  | `${typeof APP_PREFIX}${PascalCase<keyof typeof styledTheme.partials.text>}`

const textPropFilter = {
  shouldForwardProp: (prop) => !['color', 'textStyles'].includes(prop),
}

function getStylesFromShortname(theme: DefaultTheme, styleName: string) {
  let prefix: Prefix = APP_PREFIX
  let textStyles: Record<string, any> = theme.partials.text

  if (styleName.startsWith(MARKETING_PREFIX)) {
    prefix = MARKETING_PREFIX
    textStyles = theme.partials.marketingText
  }
  const key = lowerFirst(styleName.replace(new RegExp(`^${prefix}`), ''))

  return textStyles[key]
}

export const ResponsiveText = styled.h2.withConfig(textPropFilter)<{
  color?: any
  textStyles?: Partial<Record<Breakpoint, TextStyle>>
}>(({ theme, color, textStyles: styles }) => {
  const parts = Object.fromEntries(
    Object.entries(styles || {})
      .filter(([breakpoint]) => !!breakpoint && !!mqs[breakpoint])
      .map(([breakpoint, shortname]) => {
        const textStyles = getStylesFromShortname(theme, shortname)

        return [
          [mqs[breakpoint]],
          {
            ...(textStyles || {}),
          },
        ]
      })
  )

  return {
    ...(styles?.[''] ? getStylesFromShortname(theme, styles['']) || {} : {}),
    ...parts,
    ...(color
      ? { color: theme.colors[color] || theme.colors.text }
      : { color: theme.colors.text }),
  }
})

export const Title2 = styled.h3(({ theme }) => ({
  ...theme.partials.marketingText.title2,
}))

export const Body1 = styled.p.withConfig(textPropFilter)(
  ({ theme, color }) => ({
    ...theme.partials.marketingText.body1,
    ...(color
      ? { color: theme.colors[color] || theme.colors.text }
      : { color: theme.colors.text }),
  })
)

export const Body2 = styled.p.withConfig(textPropFilter)(
  ({ theme, color }) => ({
    ...theme.partials.marketingText.body2,
    ...(color
      ? { color: theme.colors[color] || theme.colors['text-light'] }
      : { color: theme.colors['text-light'] }),
  })
)

export const AppBody1 = styled.p.withConfig(textPropFilter)(
  ({ theme, color }) => ({
    ...theme.partials.text.body1,
    ...(color
      ? { color: theme.colors[color] || theme.colors['text-light'] }
      : { color: theme.colors['text-light'] }),
  })
)

export const AppBody2 = styled.p.withConfig(textPropFilter)(
  ({ theme, color }) => ({
    ...theme.partials.text.body2,
    ...(color
      ? { color: theme.colors[color] || theme.colors['text-light'] }
      : { color: theme.colors['text-light'] }),
  })
)

export const Overline = styled.p.withConfig(textPropFilter)(
  ({ theme, color }) => ({
    ...theme.partials.text.overline,
    ...(color
      ? { color: theme.colors[color] || theme.colors['text-xlight'] }
      : { color: theme.colors['text-xlight'] }),
  })
)

export const Label = styled.h4.withConfig(textPropFilter)(
  ({ theme, color }) => ({
    ...theme.partials.marketingText.label,
    ...(color
      ? { color: theme.colors[color] || theme.colors['text-xlight'] }
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

const SectionHeadSC = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing.medium,
  marginBottom: theme.spacing.xlarge,
  textAlign: 'center',
}))

export function SectionHead({
  h1,
  h1Props = {},
  h2,
  h2Props = {},
  ...props
}: {
  h1?: ReactNode
  h1Props?: ComponentProps<typeof ResponsiveText>
  h2?: ReactNode
  h2Props?: ComponentProps<typeof ResponsiveText>
} & ComponentProps<typeof SectionHeadSC>) {
  return (
    <SectionHeadSC {...props}>
      {h1 && (
        <ResponsiveText
          as="h2"
          textStyles={{ '': 'mLabel' }}
          color="text-light"
          className="[text-wrap:balance]"
          {...h1Props}
        >
          {h1}
        </ResponsiveText>
      )}
      {h2 && (
        <ResponsiveText
          as="h3"
          textStyles={{ '': 'mHero2', xl: 'mHero1' }}
          color="text"
          className="[text-wrap:balance]"
          {...h2Props}
        >
          {h2}
        </ResponsiveText>
      )}
    </SectionHeadSC>
  )
}

export const AppTitle = styled.h1(({ theme }) => ({
  ...theme.partials.marketingText.subtitle1,
  [mqs.md]: {
    ...theme.partials.marketingText.hero1,
  },
}))

const CtaIcon = styled((props) => (
  <span {...props}>
    <ArrowRightIcon
      size={18}
      // color={theme.colors.text}
    />
  </span>
))(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  top: 2,
  marginLeft: theme.spacing.medium,
  transition: 'transform 0.2s ease',
}))

const CtaSC = styled.a<{ $size: 'medium' | 'small' }>(({ theme, $size }) => ({
  display: 'block',
  gap: theme.spacing.medium,
  ...($size === 'small'
    ? {
        ...theme.partials.marketingText.standaloneLink,
        '&, &:any-link': {
          color: theme.colors['text-light'],
        },
      }
    : {
        ...theme.partials.marketingText.body2Bold,
        fontWeight: 500,
        '&, &:any-link': {
          color: theme.colors.text,
        },
      }),
  cursor: 'pointer',

  '&:hover': {
    [CtaIcon]: {
      transform: 'translate(20%)',
    },
  },
}))

export const Cta = styled(
  ({
    children,
    size = 'medium',
    ...props
  }: {
    size?: 'medium' | 'small'
    children: ReactNode
  } & ComponentProps<'a'>) => {
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

    return (
      <CtaSC
        as={Link}
        $size={size}
        {...props}
      >
        {kids}
      </CtaSC>
    )
  }
)``
