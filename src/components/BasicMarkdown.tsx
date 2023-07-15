import { memo } from 'react'

import { InlineCode } from '@pluralsh/design-system'
import Link from 'next/link'

import ReactMarkdown from 'react-markdown'

import { BasicP, BasicUl, InlineLink } from './Typography'

export default memo(({ text }: { text?: string | null }) => {
  console.log('text', text)
  text = text?.replace(/^\s+|\s+$/g, '')
  if (!text) {
    return null
  }
  console.log('text', text)

  return (
    <ReactMarkdown
      components={{
        ul: ({ node: _, ...props }) => <BasicUl {...props} />,
        p: ({ node: _, ...props }) => <BasicP {...props} />,
        a: ({ node: _, ...props }) => (
          <InlineLink
            as={Link}
            {...(props as any)}
          />
        ),
        code: ({ node: _, ...props }) => <InlineCode {...props} />,
      }}
    >
      {text}
    </ReactMarkdown>
  )
})
