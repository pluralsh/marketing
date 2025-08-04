'use client'

import type { Content } from '@prismicio/client'

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import * as React from 'react'
import { useMemo, useState } from 'react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion/Accordion'
import Eyebrow from '@/components/ui/Eyebrow'
import { cn } from '@/utils/cn'

export type FeaturesCollapsibleProps = SliceVariationProps<
  Content.FeaturesSlice,
  'collapsible'
>

export default function FeaturesCollapsible({
  slice,
}: FeaturesCollapsibleProps) {
  const { eyebrow, title, description, items } = slice.primary

  const [openedItem, setOpenedItem] = useState<string>('0')

  const images = useMemo(() => items?.map(({ image }) => image), [items])

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="2xl:content mt-8 md:mx-4 md:mt-30">
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
      <div className="2xl:content mt-10 mb-8 grid grid-cols-1 gap-x-6 gap-y-6 md:mt-20 md:mb-16 lg:h-[790px] lg:grid-cols-2">
        <div className="relative hidden h-full lg:block">
          {images.map((field, i) => (
            <div
              key={i}
              className={cn(
                'absolute h-full w-full transition-opacity duration-500 ease-in-out',
                +openedItem === i
                  ? 'pointer-events-auto opacity-100'
                  : 'pointer-events-none opacity-0'
              )}
            >
              <div className="border-neutral-000/10 aspect-[85/100] w-full rounded-2xl border p-4">
                <PrismicNextImage
                  field={field}
                  className="h-full w-full overflow-hidden rounded-2xl object-cover"
                  fallbackAlt=""
                />
              </div>
            </div>
          ))}
        </div>

        <div className="border-neutral-000/10 h-fit rounded-2xl lg:border lg:p-4">
          <Accordion
            openedItem={openedItem}
            setOpenedItem={setOpenedItem}
          >
            {items.map(({ title, description }, i) => (
              <AccordionItem
                value={i.toString()}
                key={i}
              >
                <AccordionTrigger
                  className={cn(i === +openedItem && 'cursor-default')}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-caption text-neutral-000/70">{`[${(i + 1).toString().padStart(2, '0')}]`}</span>
                    <PrismicRichText
                      field={title}
                      components={{
                        heading2: ({ children }) => (
                          <h2 className="text-title-large text-neutral-000">
                            {children}
                          </h2>
                        ),
                      }}
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <PrismicRichText
                    field={description}
                    components={{
                      paragraph: ({ children }) => (
                        <h2 className="text-body-medium text-neutral-000/70">
                          {children}
                        </h2>
                      ),
                    }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SliceContainer>
  )
}
