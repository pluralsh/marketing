import type {
  InlineNode,
  RichTextBlock,
  RichText as RichTextContent,
} from '@/content/types'

import { SmartLink } from '@/components/ui/SmartLink'
import { cn } from '@/utils/cn'
import { slugify } from '@/utils/strings'

function plainText(nodes: InlineNode[]) {
  return nodes
    .map((node) => (typeof node === 'string' ? node : node.text))
    .join('')
}

function headingId(block: RichTextBlock) {
  if (block.type !== 'h2' && block.type !== 'h3' && block.type !== 'h4') return
  return (
    block.id ??
    (block.type === 'h2' ? slugify(plainText(block.content)) : undefined)
  )
}

/** One entry per h2, matching the anchors `RichText` renders. */
export function richTextToc(content: RichTextContent) {
  return content.flatMap((block) =>
    block.type === 'h2'
      ? [{ id: headingId(block)!, label: plainText(block.content) }]
      : []
  )
}

function Inline({ nodes }: { nodes: InlineNode[] }) {
  return nodes.map((node, i) => {
    if (typeof node === 'string') return node

    let content: React.ReactNode = node.text

    if (node.italic) content = <em>{content}</em>
    if (node.bold) content = <strong>{content}</strong>
    if (node.href) content = <SmartLink href={node.href}>{content}</SmartLink>

    return <span key={i}>{content}</span>
  })
}

type RichTextProps = {
  content: RichTextContent
  className?: string
}

/** Renders structured long-form copy with the site's prose styles. */
export function RichText({ content, className }: RichTextProps) {
  return (
    <div className={cn('prose-site', className)}>
      {content.map((block, i) => {
        switch (block.type) {
          case 'ul':
          case 'ol': {
            const List = block.type

            return (
              <List key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <Inline nodes={item} />
                  </li>
                ))}
              </List>
            )
          }
          default: {
            const Tag = block.type

            return (
              <Tag
                key={i}
                id={headingId(block)}
              >
                <Inline nodes={block.content} />
              </Tag>
            )
          }
        }
      })}
    </div>
  )
}
