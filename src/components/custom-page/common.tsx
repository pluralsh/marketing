import { type ReactElement } from 'react'

import {
  type SemanticColorKey,
  styledThemeDark,
  styledThemeLight,
} from '@pluralsh/design-system'

import { colorsToCSSVars } from '@pluralsh/design-system/dist/GlobalStyle'
import styled, { ThemeProvider, useTheme } from 'styled-components'

import { type CustomComponentFragment } from '@src/generated/graphqlDirectus'

import { StandardPageWidth } from '../layout/LayoutHelpers'

import { BlogCards } from './BlogCards'
import { CallToAction } from './CallToAction'
import { Cards } from './Cards'
import { CustomerQuote } from './CustomerQuote'
import { Hero } from './Hero'
import { ImpactCardSection } from './ImpactCardSection'
import { LargeImage } from './LargeImage'
import { LogoStrip } from './LogoStrip'
import { MultiColumnText } from './MultiColumnText'
import { QuoteCarousel } from './QuoteCarousel'
import { SectionHeader } from './SectionHeader'
import { TwoColumnText } from './TwoColumnText'

const spacingTopClassName = {
  relaxed: 'pt-[192px]',
  normal: 'pt-[96px]',
  compact: 'pt-[48px]',
  none: '',
}
const spacingBottomClassName = {
  relaxed: 'pb-[192px]',
  normal: 'pb-[96px]',
  compact: 'pb-[48px]',
  none: '',
}

export const getSpacingClassName = (
  spacingTop: Nullable<string>,
  spacingBottom: Nullable<string>
) =>
  `${spacingTopClassName[spacingTop ?? 'none'] ?? ''} ${spacingBottomClassName[spacingBottom ?? 'none'] ?? ''}`

export function CustomComponents({
  components,
}: {
  components: Nullable<{
    custom_component_id?: Nullable<CustomComponentFragment>
  }>[]
}) {
  return (
    <div className="contents">
      {components?.map((component, index) => (
        <div
          className="contents"
          key={index}
        >
          {renderCustomComponent(component?.custom_component_id)}
        </div>
      ))}
    </div>
  )
}

function renderCustomComponent(
  outerComponent: Nullable<CustomComponentFragment>
) {
  if (!outerComponent) return null
  let renderedComponent: ReactElement | null = null
  const {
    theme,
    spacing_top: spacingTop,
    spacing_bottom: spacingBottom,
  } = outerComponent
  const innerComponent = outerComponent?.item?.[0]?.item

  switch (innerComponent?.__typename) {
    case 'hero':
      renderedComponent = <Hero {...innerComponent} />
      break
    case 'logo_strip':
      renderedComponent = <LogoStrip {...innerComponent} />
      break
    case 'section_header':
      renderedComponent = <SectionHeader {...innerComponent} />
      break
    case 'large_image':
      renderedComponent = <LargeImage {...innerComponent} />
      break
    case 'cards':
      renderedComponent = <Cards {...innerComponent} />
      break
    case 'blog_cards':
      renderedComponent = <BlogCards {...innerComponent} />
      break
    case 'two_column_text':
      renderedComponent = <TwoColumnText {...innerComponent} />
      break
    case 'multi_column_text':
      renderedComponent = <MultiColumnText {...innerComponent} />
      break
    case 'customer_quote':
      renderedComponent = <CustomerQuote {...innerComponent} />
      break
    case 'cta':
      renderedComponent = <CallToAction {...innerComponent} />
      break
    case 'our_impact':
      renderedComponent = <ImpactCardSection impactComponent={innerComponent} />
      break
    case 'quote_carousel':
      renderedComponent = <QuoteCarousel {...innerComponent} />
      break
    default:
      renderedComponent = null
      break
  }
  const styledTheme = theme === 'light' ? styledThemeLight : styledThemeDark

  return (
    <ThemeProvider theme={styledTheme}>
      <ComponentWrapperSC
        className={getSpacingClassName(spacingTop, spacingBottom)}
      >
        <ComponentBackground componentTheme={theme} />
        <StandardPageWidth className="relative">
          {renderedComponent}
        </StandardPageWidth>
      </ComponentWrapperSC>
    </ThemeProvider>
  )
}

function ComponentBackground({
  componentTheme,
}: {
  componentTheme: Nullable<string>
}) {
  const theme = useTheme()

  switch (componentTheme) {
    case 'purple-glow':
      return (
        <ComponentBackgroundSC>
          <GlowEllipseSC $color="code-block-dark-purple" />
          <TwinElipsesSVG />
        </ComponentBackgroundSC>
      )
    case 'purple-gradient-tb':
      return (
        <ComponentBackgroundSC
          $background={`linear-gradient(180deg, rgba(23, 26, 33, 0.00) 0%, rgba(1, 4, 75, 0.25) 22.39%, rgba(78, 86, 249, 0.60) 89.57%), ${theme.colors['fill-zero']}`}
        />
      )
    case 'teal-glow':
      return (
        <ComponentBackgroundSC>
          <GlowEllipseSC $color="code-block-mid-blue" />
          <TwinElipsesSVG />
        </ComponentBackgroundSC>
      )
    case 'plural-logo':
      return (
        <div className="absolute inset-0 w-full border-y border-fill-two">
          <RepeatingLogoSC />
        </div>
      )
    case 'grey-to-black-gradient-tb':
      return (
        <ComponentBackgroundSC $background="linear-gradient(180deg, #171A21 0%, #0E1015 100%)" />
      )
    default:
      return <ComponentBackgroundSC />
  }
}

const ComponentBackgroundSC = styled.div<{ $background?: string }>(
  ({ theme, $background }) => ({
    '&:before': {
      zIndex: 0,
      overflow: 'hidden',
      content: '""',
      position: 'absolute',
      inset: 0,
      background: $background ?? theme.colors['fill-zero'],
    },
  })
)

const ComponentWrapperSC = styled.section(({ theme }) => ({
  position: 'relative',
  ...colorsToCSSVars(theme.colors),
}))

export const RepeatingLogoSC = styled.div({
  position: 'absolute',
  inset: 0,
  background: `url('/favicon-128.png') repeat`,
  backgroundSize: '64px 64px',
  width: '100%',
  opacity: 0.025,
})

const GlowEllipseSC = styled.div<{ $color: SemanticColorKey }>(
  ({ theme, $color }) => ({
    position: 'absolute',
    zIndex: 1,
    width: 730,
    height: 220,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 730,
    opacity: 0.4,
    background: theme.colors[$color],
    filter: 'blur(120px)',
  })
)

function TwinElipsesSVG() {
  return (
    <div
      css={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <svg
        width="358"
        height="379"
        viewBox="0 0 358 379"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.6">
          <path
            opacity="0.7"
            d="M277.131 131.412C298.165 166.978 306.146 205.699 302.065 239.539C297.985 273.378 281.851 302.308 254.679 318.378C227.507 334.448 194.382 334.649 162.763 321.923C131.143 309.197 101.056 283.55 80.0217 247.983C58.9874 212.417 51.0066 173.696 55.0872 139.856C59.1678 106.017 75.3017 77.0868 102.474 61.017C129.646 44.9472 162.771 44.7459 194.39 57.4719C226.01 70.1982 256.097 95.8451 277.131 131.412Z"
            stroke="url(#paint0_linear_3646_16691)"
            strokeOpacity="0.6"
          />
          <path
            opacity="0.8"
            d="M274.505 252.659C251.711 287.125 220.375 311.23 188.156 322.352C155.938 333.475 122.865 331.611 96.5339 314.198C70.2027 296.784 55.5413 267.08 53.1647 233.079C50.7879 199.077 60.7023 160.806 83.4955 126.34C106.289 91.8742 137.625 67.7699 169.844 56.647C202.062 45.5243 235.135 47.3882 261.466 64.8017C287.797 82.2152 302.459 111.919 304.835 145.921C307.212 179.922 297.298 218.193 274.505 252.659Z"
            stroke="url(#paint1_linear_3646_16691)"
            strokeOpacity="0.6"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_3646_16691"
            x1="102.219"
            y1="60.5866"
            x2="254.933"
            y2="318.808"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8FD6FF" />
            <stop offset="0.48" />
            <stop
              offset="1"
              stopColor="#7075F5"
            />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3646_16691"
            x1="261.742"
            y1="64.3847"
            x2="96.2581"
            y2="314.615"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0.055"
              stopColor="#52F4D9"
              stopOpacity="0.5"
            />
            <stop
              offset="0.62"
              stopColor="#8FD6FF"
            />
            <stop
              offset="0.9"
              stopColor="#435987"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
