import { type ReactElement } from 'react'

import { styledThemeDark, styledThemeLight } from '@pluralsh/design-system'

import { colorsToCSSVars } from '@pluralsh/design-system/dist/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'

import { type CustomPageFragment } from '@src/generated/graphqlDirectus'

import { BlogCards } from './BlogCards'
import { CallToAction } from './CallToAction'
import { Cards } from './Cards'
import { CustomerQuote } from './CustomerQuote'
import { Hero } from './Hero'
import { LargeImage } from './LargeImage'
import { LogoStrip } from './LogoStrip'
import { MultiColumnText } from './MultiColumnText'
import { SectionHeader } from './SectionHeader'
import { TwoColumnText } from './TwoColumnText'

const spacingToClassName = {
  relaxed: 'py-[192px]',
  normal: 'py-[96px]',
  compact: 'py-[48px]',
}

export const getSpacingClassName = (spacing: Nullable<string>) =>
  spacingToClassName[spacing ?? 'normal'] ?? ''

export function renderComponent(
  component: NonNullable<
    NonNullable<CustomPageFragment['components']>[number]
  >['item']
) {
  let renderedComponent: ReactElement | null = null
  const theme = component?.theme ?? 'dark'

  switch (component?.__typename) {
    case 'hero':
      renderedComponent = <Hero {...component} />
      break
    case 'logo_strip':
      renderedComponent = <LogoStrip {...component} />
      break
    case 'section_header':
      renderedComponent = <SectionHeader {...component} />
      break
    case 'large_image':
      renderedComponent = <LargeImage {...component} />
      break
    case 'cards':
      renderedComponent = <Cards {...component} />
      break
    case 'blog_cards':
      renderedComponent = <BlogCards {...component} />
      break
    case 'two_column_text':
      renderedComponent = <TwoColumnText {...component} />
      break
    case 'multi_column_text':
      renderedComponent = <MultiColumnText {...component} />
      break
    case 'customer_quote':
      renderedComponent = <CustomerQuote {...component} />
      break
    case 'cta':
      renderedComponent = <CallToAction {...component} />
      break
    default:
      break
  }
  const styles = theme === 'light' ? styledThemeLight : styledThemeDark

  return (
    <ThemeProvider theme={styles}>
      <ComponentWrapperSC>{renderedComponent}</ComponentWrapperSC>
    </ThemeProvider>
  )
}

const ComponentWrapperSC = styled.div(({ theme }) => ({
  backgroundColor: theme.colors['fill-zero'],
  ...colorsToCSSVars(theme.colors),
}))
