import { type CustomPageFragment } from '@src/generated/graphqlDirectus'

import { BlogCards } from './BlogCards'
import { Cards } from './Cards'
import { CTA } from './CTA'
import { CustomerQuote } from './CustomerQuote'
import { Hero } from './Hero'
import { LargeImage } from './LargeImage'
import { LogoStrip } from './LogoStrip'
import { RichTextColumns } from './RichTextColumns'
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
    case 'rich_text_columns':
      return <RichTextColumns {...component} />
    case 'customer_quote':
      return <CustomerQuote {...component} />
    case 'cta':
      return <CTA {...component} />
    default:
      return null
  }
}
