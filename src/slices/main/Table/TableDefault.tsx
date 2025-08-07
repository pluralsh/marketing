import { isFilled, type Content, type RTOListItemNode } from '@prismicio/client'
import React from 'react'

import type { SliceVariationProps } from '@/types/prismicio'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'
import SvgArrowDown from '@/components/svg/SvgArrowDown'
import SvgCheckCircle from '@/components/svg/SvgCheckCircle'
import SvgXCircle from '@/components/svg/SvgXCircle'
import { cn } from '@/utils/cn'
import Eyebrow from '@/components/ui/Eyebrow'
import { PrismicRichText } from '@prismicio/react'

export type TableDefaultProps = SliceVariationProps<
  Content.TableSlice,
  'default'
>

export default function TableDefault({ slice }: TableDefaultProps) {
  const {
    section_id,
    columns,
    column_values,
    row_keys,
    row_keys_label,
    title,
    eyebrow,
    description,
    footer_description,
  } = slice.primary

  const rows = row_keys.map((row, idx) => {
    const values = column_values.map((column_v) => {
      const item = column_v.values[idx]
      return item.type === 'o-list-item' ? item : null
    })
    return [row.key, ...values] as const
  })

  const buttons = column_values.map(({ button }) => button)
  //number of columns
  const numberOfColumns = columns.length

  return (
    <SliceContainer
      slice={slice}
      id={section_id ?? undefined}
      className="grid-container py-12 md:py-30"
    >
      <div className="content-full-width grid grid-cols-subgrid">
        <div className="content-full-width my-3 grid grid-cols-subgrid">
          <div className="content md:text-center [&>:first-child]:mt-0">
            <Eyebrow
              field={eyebrow}
              className="mb-6"
            />
            <PrismicRichText
              field={title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-heading-small">{children}</h2>
                ),
              }}
            />
            <PrismicRichText
              field={description}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-body-medium mt-6 max-w-lg md:mx-auto md:text-center">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={cn(
          'content-full-bleed md:content-full-width xl:content mt-12 max-md:px-4 max-md:pb-3 md:mt-20',
          numberOfColumns > 2
            ? 'max-lg:overflow-x-auto'
            : 'max-md:overflow-x-auto'
        )}
      >
        <table
          className="w-full border-collapse max-md:min-w-xl"
          cellSpacing={0}
          border={0}
        >
          <thead>
            <tr>
              <th>
                <div className="flex items-center gap-x-14 pb-6">
                  <h2 className="text-caption">{row_keys_label}</h2>
                </div>
              </th>
              {columns.map(({ label }, idx) => (
                <th
                  key={idx}
                  className="ps-3 md:ps-6"
                >
                  <div className="flex items-center gap-x-14 pb-6">
                    <h2 className="text-caption">{label}</h2>
                    <SvgArrowDown />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([rowLabel, ...values], rowIdx) => (
              <tr key={rowIdx}>
                <td className="align-top">
                  <div
                    className={cn(
                      'py-3 whitespace-nowrap',
                      rowIdx === 0 && 'rounded-tl-xl rounded-tr-xl pt-6'
                    )}
                  >
                    {rowLabel}
                  </div>
                </td>
                {values.map((value, valIdx) => (
                  <td
                    key={1e3 + valIdx}
                    className="text-neutral-000 relative isolate ps-3 align-top md:ps-6"
                  >
                    <div
                      className={cn(
                        columns[valIdx].emphasized && 'bg-neutral-800',
                        !columns[valIdx].emphasized &&
                          'border-neutral-000/10 border-r border-l',
                        'absolute inset-0 left-3 z-0 md:left-6',
                        rowIdx === 0 && 'rounded-tl-xl rounded-tr-xl',
                        !columns[valIdx].emphasized &&
                          rowIdx === 0 &&
                          'border-neutral-000/10 border-t'
                      )}
                    />
                    <div
                      className={cn(
                        'relative z-10 px-4 py-3 md:px-6',
                        rowIdx === 0 && 'pt-6'
                      )}
                    >
                      <TableValue item={value} />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td />
              {buttons.map((button, idx) => (
                <td
                  key={idx}
                  className="text-neutral-000 relative isolate ps-3 align-top md:ps-6"
                >
                  <div
                    className={cn(
                      columns[idx].emphasized && 'bg-neutral-800',
                      !columns[idx].emphasized &&
                        'border-neutral-000/10 border-r border-b border-l',
                      'absolute inset-0 left-3 z-0 md:left-6',
                      'rounded-br-xl rounded-bl-xl'
                    )}
                  />
                  <div
                    className={cn(
                      'relative z-10 p-4 md:p-6',
                      !isFilled.link(button) && '!p-3'
                    )}
                  >
                    <PrismicButton
                      field={button}
                      size="large"
                      variant={
                        columns[idx].emphasized ? 'primary' : 'secondary'
                      }
                    />
                  </div>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="content-full-width grid grid-cols-subgrid">
        <div className="content-full-width mt-12 grid grid-cols-subgrid">
          <div className="content md:text-center [&>:first-child]:mt-0">
            <PrismicRichText
              field={footer_description}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-body-medium mt-6 text-white/50">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </SliceContainer>
  )
}

function TableValue({ item }: { item: RTOListItemNode | null }) {
  if (item === null) return null

  if (!item.spans || item.spans.length === 0) {
    return <span>{item.text}</span>
  }

  const sortedSpans = [...item.spans].sort((a, b) => a.start - b.start)

  const elements: React.ReactElement[] = []
  let currentPos = 0

  for (const span of sortedSpans) {
    if (span.start > currentPos) {
      const textBefore = item.text.slice(currentPos, span.start)
      if (textBefore) {
        elements.push(<span key={`text-${currentPos}`}>{textBefore}</span>)
      }
    }

    const spanText = item.text.slice(span.start, span.end)
    if (span.type === 'label') {
      if (span.data.label === 'yes') {
        elements.push(
          <SvgCheckCircle
            key={`span-${span.start}`}
            className="text-accent-400 mt-1 inline"
          />
        )
      } else if (span.data.label === 'no') {
        elements.push(
          <SvgXCircle
            key={`span-${span.start}`}
            className="text-neutral-000/60 mt-1 inline"
          />
        )
      } else {
        elements.push(<span key={`span-${span.start}`}>{spanText}</span>)
      }
    } else {
      elements.push(<span key={`span-${span.start}`}>{spanText}</span>)
    }

    currentPos = span.end
  }

  if (currentPos < item.text.length) {
    const remainingText = item.text.slice(currentPos)
    if (remainingText) {
      elements.push(<span key={`text-${currentPos}`}>{remainingText}</span>)
    }
  }

  return <span className="inline-flex items-start gap-2">{elements}</span>
}
