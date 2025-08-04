import type { Content } from '@prismicio/client'
import type { JSXMapSerializer, SliceComponentProps } from '@prismicio/react'

import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import SliceContainer from '@/components/SliceContainer'

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>
  },
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>
    }
  },
}

type RichTextProps = SliceComponentProps<Content.RichTextSlice>

export default function RichText({ slice }: RichTextProps) {
  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="content prose my-16">
        <PrismicRichText
          field={slice.primary.content}
          components={components}
        />
      </div>
      <div className="separator" />
    </SliceContainer>
  )
}
