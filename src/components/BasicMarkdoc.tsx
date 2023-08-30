import React, { useMemo } from 'react'

import { InlineCode, isExternalUrl } from '@pluralsh/design-system'
import Link from 'next/link'

import Markdoc, { nodes } from '@markdoc/markdoc'

import { BasicP, BasicUl, InlineLink } from './Typography'

const transformConfig = ({ renderP = true }: { renderP?: boolean }) => ({
  nodes: {
    document: { ...nodes.document, render: 'NoWrapper' },
    list: { ...nodes.list, render: 'List' },
    paragraph: { ...nodes.paragraph, render: renderP ? 'P' : 'NoWrapper' },
    link: { ...nodes.link, render: 'Link' },
    code: { ...nodes.code, render: 'Code' },
  },
})

const renderOpts = {
  components: {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    NoWrapper: ({ children }) => <>{children}</>,
    List: BasicUl,
    P: (props) => <BasicP {...props} />,
    Link: (props) => (
      <InlineLink
        as={Link}
        {...(isExternalUrl(props.href)
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...(props as any)}
      />
    ),
    Code: InlineCode,
  },
}

export function BasicMarkdoc({
  text,
  variables,
  renderP = true,
}: {
  text?: string | null
  variables?: Record<string, any>
  renderP?: boolean
}) {
  text = text?.replace(/^\s+|\s+$/g, '')
  const content = useMemo(() => {
    if (!text) {
      return null
    }
    const ast = Markdoc.parse(text)

    console.log({ ast })

    return Markdoc.transform(ast, {
      ...transformConfig({ renderP }),
      variables,
    })
  }, [renderP, text, variables])

  console.log({ content })

  if (!content) {
    return null
  }

  return <>{Markdoc.renderers.react(content, React, renderOpts)}</>
}
