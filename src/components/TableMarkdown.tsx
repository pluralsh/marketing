import { useLayoutEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'
import { breakpoints } from '@src/breakpoints'

export function TableMarkdown({
  text,
  scrollable = false,
}: {
  text: Nullable<string>
  scrollable?: Nullable<boolean>
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [columnCount, setColumnCount] = useState<number | null>(null)

  useLayoutEffect(() => {
    setColumnCount(
      wrapperRef.current?.querySelector('tr')?.children.length ?? null
    )
  }, [text])

  if (!text) return null

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        ul: ({ node: _, ref: _r, ...props }) => <FootnoteSC {...props} />,
        ol: ({ node: _, ref: _r, ...props }) => <FootnoteSC {...props} />,
        th: ({ node: _, ref: _r, ...props }) => <ThSC {...props} />,
        td: ({ node: _, ref: _r, ...props }) => <TdSC {...props} />,
        table: ({ node: _, ref: _r, ...props }) => (
          <TableWrapperSC
            $columnCount={columnCount}
            ref={wrapperRef}
          >
            <TableSC
              $scrollable={scrollable}
              $columnCount={columnCount ?? 0}
              {...props}
            />
          </TableWrapperSC>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  )
}

const TableWrapperSC = styled.div<{ $columnCount?: Nullable<number> }>(
  ({ $columnCount, theme }) => ({
    maxWidth: '100%',
    overflowX: 'auto',
    opacity: !$columnCount ? 0 : 1,
    color: theme.colors.text,
  })
)

const FootnoteSC = styled.ul(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.xsmall,
  color: theme.colors['text-xlight'],
  letterSpacing: 0.5,
  li: { '&::before': { content: '"*"' } },
}))

const TableSC = styled.table<{
  $scrollable?: Nullable<boolean>
  $columnCount: number
}>(({ $scrollable, $columnCount }) => ({
  borderCollapse: 'separate',
  borderSpacing: 0,
  tableLayout: 'fixed',
  width: '100%',
  minWidth: $columnCount * 200,
  [`@media (min-width: ${breakpoints.lg}px)`]: {
    minWidth: $columnCount * ($scrollable ? 320 : 200),
  },
}))

const ThSC = styled.th(({ theme }) => ({
  padding: theme.spacing.small,
  height: theme.spacing.xxlarge,
  textAlign: 'left',
  backgroundColor: theme.colors['fill-one'],
  border: theme.borders['fill-two'],
  borderBottom: theme.borders.default,
  // top rounded table corners
  'tr:first-child &': {
    '&:first-child': { borderTopLeftRadius: theme.borderRadiuses.large },
    '&:last-child': { borderTopRightRadius: theme.borderRadiuses.large },
  },
  // remove inner borders
  '&:not(:last-child)': { borderRight: 'none' },
  '&:not(:first-child)': { borderLeft: 'none' },
}))

const TdSC = styled.td<{ $scrollable?: boolean }>(({ theme, $scrollable }) => ({
  width: $scrollable ? '1%' : 'auto', // when set to 1%, the remaining width is distributed equally to all columns
  backgroundColor: theme.colors['fill-zero-selected'],
  padding: `${theme.spacing.xsmall}px ${theme.spacing.small}px`,
  color: theme.colors['text-light'],
  height: theme.spacing.xxxlarge,
  border: theme.borders['fill-two'],
  borderBottom: theme.borders.default,
  borderTop: 'none',
  textAlign: 'left',
  // bottom row stronger border, rounded corners
  'tr:last-child &': {
    borderBottom: theme.borders['fill-two'],
    '&:first-child': { borderBottomLeftRadius: theme.borderRadiuses.large },
    '&:last-child': { borderBottomRightRadius: theme.borderRadiuses.large },
  },
  // remove inner borders
  '&:not(:last-child)': { borderRight: 'none' },
  '&:not(:first-child)': { borderLeft: 'none' },
}))
