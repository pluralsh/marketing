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

const spacingToClassName = {
  relaxed: 'my-[192px]',
  normal: 'my-[96px]',
  compact: 'my-[48px]',
}

export const getSpacingClassName = (spacing: Nullable<string>) =>
  spacingToClassName[spacing ?? 'normal'] ?? ''

export function renderComponent(
  component: NonNullable<
    NonNullable<CustomPageFragment['components']>[number]
  >['item']
) {
  switch (component?.__typename) {
    case 'hero':
      return <Hero {...component} />
    case 'logo_strip':
      return <LogoStrip {...component} />
    case 'section_header':
      return <SectionHeader {...component} />
    case 'large_image':
      return <LargeImage {...component} />
    case 'cards':
      return <Cards {...component} />
    case 'blog_cards':
      return <BlogCards {...component} />
    case 'multi_column_text':
      return <MultiColumnText {...component} />
    case 'customer_quote':
      return <CustomerQuote {...component} />
    case 'cta':
      return <CallToAction {...component} />
    default:
      return null
  }
}
