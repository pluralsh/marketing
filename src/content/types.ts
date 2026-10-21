// Shared shapes for all hardcoded site content. Page copy lives in
// `src/content/**` and is rendered by the components in `src/components/site`.

export type Link = {
  label: string
  href: string
}

export type Image = {
  src: string
  alt?: string
  width?: number
  height?: number
}

export type InlineNode =
  | string
  | { text: string; bold?: boolean; italic?: boolean; href?: string }

export type RichTextBlock =
  | { type: 'p' | 'h2' | 'h3' | 'h4' | 'pre'; content: InlineNode[] }
  | { type: 'ul' | 'ol'; items: InlineNode[][] }

export type RichText = RichTextBlock[]

export type PageMeta = {
  title?: string
  description?: string
  noindex?: boolean
  /** Show the certificates strip (home, solutions, industries). */
  certificates?: boolean
}

export type Testimonial = {
  quote: string
  name: string
  title: string
}

export type Stat = {
  value: string
  label: string
}

export type HeroSection = {
  type: 'hero'
  eyebrow?: string | Link
  title: string
  description?: string
  cta?: Link
  image?: Image
  video?: { youtubeId: string; title: string }
}

export type StatementSection = {
  type: 'statement'
  eyebrow?: string
  body: string
}

export type FeatureRowSection = {
  type: 'featureRow'
  eyebrow?: string
  title?: string
  body?: RichText
  links?: Link[]
  image?: Image
  layout: 'imageLeft' | 'imageRight' | 'stacked'
}

export type FeatureGridSection = {
  type: 'featureGrid'
  eyebrow?: string
  title?: string
  description?: string
  footnote?: string
  items: {
    eyebrow?: string
    title?: string
    body?: RichText
    href?: string
  }[]
}

export type StatsSection = {
  type: 'stats'
  eyebrow?: string
  items: Stat[]
}

export type TestimonialsSection = {
  type: 'testimonials'
  eyebrow?: string
  items: Testimonial[]
}

export type TableSection = {
  type: 'table'
  eyebrow?: string
  title?: string
  description?: string
  rowLabel?: string
  footnote?: string
  columns: { label: string; emphasized: boolean }[]
  rows: { label?: string; values: string[] }[]
}

export type RichTextSection = {
  type: 'richText'
  content: RichText
}

export type PostsSection = {
  type: 'posts'
  eyebrow?: string
  title?: string
  items: { title: string; href: string; tag?: string }[]
}

export type CtaSection = {
  type: 'cta'
  title: string
  cta?: Link
}

export type ContentSection =
  | HeroSection
  | StatementSection
  | FeatureRowSection
  | FeatureGridSection
  | StatsSection
  | TestimonialsSection
  | TableSection
  | RichTextSection
  | PostsSection
  | CtaSection

export type ContentPage = {
  path: string
  meta: PageMeta
  sections: ContentSection[]
}

export type Job = {
  slug: string
  title: string
  location: string
  team?: string
  meta: PageMeta
  body: RichText
  apply?: Link
  equality?: string
}
