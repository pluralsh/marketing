import { memo } from 'react'

import { InlineCode, isExternalUrl } from '@pluralsh/design-system'
import Link from 'next/link'

import ReactMarkdown from 'react-markdown'

import { BasicP, BasicUl, InlineLink } from './Typography'

export default memo(({ text }: { text?: string | null }) => {
  text = text?.replace(/^\s+|\s+$/g, '')
  if (!text) {
    return null
  }

  return (
    <ReactMarkdown
      components={{
        ul: ({ node: _, ref, ...props }) => (
          <BasicUl
            ref={ref as any}
            {...props}
          />
        ),
        p: ({ node: _, ref, ...props }) => (
          <BasicP
            ref={ref as any}
            {...props}
          />
        ),
        a: ({ node: _, ...props }) => (
          <InlineLink
            as={Link}
            {...(isExternalUrl(props.href)
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            {...(props as any)}
          />
        ),
        // @ts-ignore
        code: ({ node: _, ...props }) => <InlineCode {...props} />,
      }}
    >
      {text}
    </ReactMarkdown>
  )
})
