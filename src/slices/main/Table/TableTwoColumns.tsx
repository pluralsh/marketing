'use client'

import { type Content, type KeyTextField, type RTNode } from '@prismicio/client'
import React, { useMemo } from 'react'

import type { SliceVariationProps } from '@/types/prismicio'
import SliceContainer from '@/components/SliceContainer'
import { cn } from '@/utils/cn'
import { PrismicRichText } from '@prismicio/react'
import SvgArrowDown from '@/components/svg/SvgArrowDown'

export type TableTwoColumnsProps = SliceVariationProps<
  Content.TableSlice,
  'twoColumns'
>

export default function TableTwoColumns({ slice }: TableTwoColumnsProps) {
  const { columns, column_values, title, description } = slice.primary
  const columnsOrder = useMemo(
    () => [...new Set(columns.map(({ value }) => value))],
    [columns]
  )

  const groupedColumns = useMemo(() => {
    const groupedMap = column_values.reduce<Record<string, RTNode[]>>(
      (acc, col) => {
        if (!col.column_id || !col.values) return acc
        if (!acc[col.column_id]) acc[col.column_id] = []
        acc[col.column_id].push(...col.values)
        return acc
      },
      {}
    )

    return Object.entries(groupedMap)
      .map(([column_id, values]) => {
        const column = columns.find(({ value }) => value === column_id)
        return {
          column_id,
          values,
          emphasized: column?.emphasized ?? false,
        }
      })
      .sort((a, b) => {
        const aIndex = columnsOrder.indexOf(a.column_id as KeyTextField)
        const bIndex = columnsOrder.indexOf(b.column_id as KeyTextField)
        return aIndex - bIndex
      })
  }, [column_values, columns, columnsOrder])

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="content relative my-14 mb-28 flex flex-col overflow-hidden lg:my-30 lg:items-center">
        <PrismicRichText
          field={title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-heading-small max-w-[596px] lg:text-center">
                {children}
              </h2>
            ),
          }}
        />
        <PrismicRichText
          field={description}
          components={{
            paragraph: ({ children }) => (
              <p className="text-body-medium mt-6 mb-12 max-w-[446px] md:mx-auto md:mb-16 md:text-center lg:mb-16">
                {children}
              </p>
            ),
          }}
        />
        <div className="grid w-full grid-cols-1 gap-6 gap-y-12 lg:grid-cols-2">
          {groupedColumns.map(({ column_id, values, emphasized }) => (
            <div
              key={column_id}
              className="flex flex-col"
            >
              <div className="mb-6 flex items-center gap-x-14">
                <h2 className="text-caption text-white">{column_id}</h2>
                <SvgArrowDown />
              </div>
              <div
                className={cn(
                  'flex h-full flex-col justify-between gap-6 rounded-xl p-6',
                  !emphasized && 'border-neutral-000/10 border',
                  emphasized && 'bg-neutral-800'
                )}
              >
                {values.map(
                  (value, i) =>
                    value && (
                      <PrismicRichText
                        key={`${column_id}-${i}`}
                        field={[value]}
                        components={{
                          paragraph: ({ children }) => (
                            <p className="text-body-medium text-white lg:max-w-[282px]">
                              {children}
                            </p>
                          ),
                        }}
                      />
                    )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="separator" />
    </SliceContainer>
  )
}
