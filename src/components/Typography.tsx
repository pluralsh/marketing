import {
  type CSSProperties,
  type ComponentProps,
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
} from 'react'

import {
  ArrowRightIcon,
  Markdown,
  styledTheme,
  useNavigationContext,
} from '@pluralsh/design-system'
import Link from 'next/link'

import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { lowerFirst } from 'lodash-es'
import styled, { type DefaultTheme } from 'styled-components'
import { type PascalCase } from 'type-fest'

import { type Breakpoint, mqs } from '@src/breakpoints'
import { type AsChildProps } from '@src/utils/AsChildProps'
import { cn } from '@src/utils/cn'

import { AttachLastWordToElt } from './AttachLastWordToElt'
import { SingleAccordion } from './SingleAccordion'

type ColorKey = keyof DefaultTheme['colors']

export const Heading1 = forwardRef<
  HTMLHeadingElement,
  AsChildProps<HTMLAttributes<HTMLHeadingElement>>
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'h1'

  return (
    <Comp
      ref={ref}
      className={cn(
        'txt-mktg-title-2 md:txt-mktg-title-1 xxl:txt-mktg-hero-2',
        className
      )}
      {...props}
    />
  )
})

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

export const Hero1 = styled.h1<{ $color?: ColorKey }>(
  ({ theme, $color = 'text' }) => ({
    ...theme.partials.marketingText.hero1,
    color: $color && (theme.colors[$color] as string),
  })
)

export const Hero2 = styled.h2<{ $color?: ColorKey }>(
  ({ theme, $color = 'text' }) => ({
    ...theme.partials.marketingText.hero2,
    color: $color && (theme.colors[$color] as string),
  })
)

export const Title1 = styled.h3<{ $color?: ColorKey }>(
  ({ theme, $color = 'text' }) => ({
    ...theme.partials.marketingText.title1,
    color: $color && (theme.colors[$color] as string),
  })
)

export const Title2 = styled.h4<{ $color?: ColorKey }>(
  ({ theme, $color = 'text' }) => ({
    ...theme.partials.marketingText.title2,
    color: $color && (theme.colors[$color] as string),
  })
)

export const Body1 = styled.p<{ $color?: ColorKey }>(
  ({ theme, $color = 'text-light' }) => ({
    ...theme.partials.marketingText.body1,
    color: theme.colors[$color] as string,
  })
)

export const Body2 = styled.p<{ $color?: ColorKey }>(
  ({ theme, $color = 'text-light' }) => ({
    ...theme.partials.marketingText.body2,
    color: theme.colors[$color] as string,
  })
)

export const Subtitle1 = styled.p<{ $color?: ColorKey }>(
  ({ theme, $color = 'text' }) => ({
    ...theme.partials.marketingText.subtitle1,
    color: theme.colors[$color] as string,
  })
)

export const Subtitle2 = styled.p<{ $color?: ColorKey }>(
  ({ theme, $color = 'text' }) => ({
    ...theme.partials.marketingText.subtitle2,
    color: theme.colors[$color] as string,
  })
)

export const Caption = styled.p<{ $color?: ColorKey }>(
  ({ theme, $color = 'text-xlight' }) => ({
    ...theme.partials.marketingText.componentLink,
    color: theme.colors[$color] as string,
  })
)

export const OverlineLabel = styled.span<{ $color?: ColorKey }>(
  ({ theme, $color = 'text-light' }) => ({
    ...theme.partials.marketingText.label,
    color: theme.colors[$color] as string,
  })
)

export const AppBody1 = styled.p<{ $color?: ColorKey }>(
  ({ theme, $color = 'text-light' }) => ({
    ...theme.partials.text.body1,
    color: theme.colors[$color] as string,
  })
)

export const AppBody2 = styled.p<{ $color?: ColorKey }>(
  ({ theme, $color = 'text-light' }) => ({
    ...theme.partials.text.body2,
    color: theme.colors[$color] as string,
  })
)

function FAQBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'txt-body-2 max-w-[var(--text-width-limit)] text-text-light [&_:is(p,ul,ol)+:is(p,ul,ol)]:mt-medium',
        className
      )}
      color="text-light"
      {...props}
    />
  )
}

export function FAQItem({
  children,
  ...props
}: ComponentProps<typeof SingleAccordion>) {
  return (
    <SingleAccordion {...props}>
      {typeof children === 'function' ? (
        (isOpen) => <FAQBody>{children(isOpen)}</FAQBody>
      ) : (
        <FAQBody>{children}</FAQBody>
      )}
    </SingleAccordion>
  )
}

export const ComponentLink = styled(Link).withConfig(textPropFilter)(
  ({ theme, color }) => ({
    ...theme.partials.marketingText.componentLink,
    ...(color
      ? { color: theme.colors[color] || theme.colors['text-xlight'] }
      : { color: theme.colors['text-xlight'] }),
  })
)

export const TextLabel = styled.h4.withConfig(textPropFilter)(
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

export function AppTitle({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <h1
      className={cn('txt-mktg-subtitle-1 md:txt-mktg-hero-1', className)}
      {...props}
    >
      {children}
    </h1>
  )
}

const CTA_ICON_ATTR = 'data-cta-icon'

function CtaIcon({ className, ...props }: { className?: string; props?: any }) {
  return (
    <span
      className={cn(
        'relative top-[2px] ml-medium inline-block transition-transform duration-200 ease-in-out',
        className
      )}
      {...{ [CTA_ICON_ATTR]: true }}
      {...props}
    >
      <ArrowRightIcon
        size={18}
        // color={theme.colors.text}
      />
    </span>
  )
}

export function Cta({
  className,
  children,
  size = 'medium',
  ...props
}: {
  size?: 'medium' | 'small'
  children: ReactNode
} & ComponentProps<typeof Link>) {
  const { Link } = useNavigationContext()

  return (
    <Link
      className={clsx(
        'block cursor-pointer gap-medium hover:underline',
        '[&_*[data-cta-icon]]:hover:translate-x-[20%]',
        size === 'small'
          ? 'txt-mktg-standalone-link text-text-light visited:text-text-light'
          : 'txt-mktg-body-2-bold text-text visited:text-text',
        className
      )}
      {...props}
    >
      <AttachLastWordToElt elt={<CtaIcon />}>{children}</AttachLastWordToElt>
    </Link>
  )
}

export const InlineLink = styled.a(({ theme }) => ({
  ...theme.partials.text.inlineLink,
}))

export const BasicUl = styled.ul(({ theme }) => {
  const indent = theme.spacing.large

  return {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xsmall,
    ...marginStyle,
    li: {
      position: 'relative',
      marginLeft: indent,
      '&::before': {
        textAlign: 'center',
        width: indent,
        position: 'absolute',
        content: '"•"',
        left: -indent,
      },
    },
  }
})

export const BasicP = styled.p((_) => ({
  ...marginStyle,
}))

export const BasicH1 = styled.h1(({ theme }) => ({
  ...theme.partials.marketingText.title1,
  ...marginStyle,
}))

export const BasicH2 = styled.h2(({ theme }) => ({
  ...theme.partials.marketingText.title2,
  ...marginStyle,
}))

export const BasicH3 = styled.h3(({ theme }) => ({
  ...marginStyle,
  ...theme.partials.marketingText.subtitle1,
}))

export const BasicH4 = styled.h4(({ theme }) => ({
  ...marginStyle,
  ...theme.partials.marketingText.subtitle2,
}))

const marginStyle = {
  '*:is(p, ul, ol, h1, h2, h3, h4) + &': {
    marginTop: styledTheme.spacing.medium,
  },
}

export function NoMarginMarkdown({
  extendedCss,
  ...props
}: ComponentProps<typeof Markdown> & { extendedCss?: CSSProperties }) {
  return (
    <div css={{ '& *': { margin: 0, ...extendedCss } }}>
      <Markdown {...props} />
    </div>
  )
}
