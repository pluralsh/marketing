import type { Content } from '@prismicio/client'

import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'

import BlogCarousel from './components/BlogCarousel'

export type BlogDefaultProps = SliceVariationProps<Content.BlogSlice, 'default'>

export default async function BlogDefault({ slice }: BlogDefaultProps) {
  const { eyebrow, title, description, blog_posts } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="content-full-bleed grid grid-cols-subgrid overflow-clip">
        <div className="content-full-width 2xl:content mt-14 md:mt-30 md:px-4">
          <div className="grid grid-cols-1 justify-start gap-x-9 gap-y-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <Eyebrow field={eyebrow} />
            </div>
            <PrismicRichText
              field={title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-heading-small md:max-w-[592px]">
                    {children}
                  </h2>
                ),
              }}
            />
            <PrismicRichText
              field={description}
              components={{
                paragraph: ({ children }) => (
                  <p className="self-end md:max-w-lg">{children}</p>
                ),
              }}
            />
          </div>
        </div>
        <div className="content-full-width 2xl:content mt-10 mb-14 md:mt-20 md:mb-30">
          <BlogCarousel slides={blog_posts} />
        </div>
      </div>
    </SliceContainer>
  )
}
