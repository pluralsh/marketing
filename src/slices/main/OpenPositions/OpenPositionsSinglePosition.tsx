'use client'

import type { Content, RTHeading3Node } from '@prismicio/client'

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { useRef } from 'react'

import type { SliceVariationProps } from '@/types/prismicio'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'
import SvgArrowLeft from '@/components/svg/SvgArrowLeft'
import { Button } from '@/components/ui/Button'
import useVerticalNavigation from '@/components/VerticalNavigation/useVerticalNavigation'

export type OpenPositionsSinglePositionProps = SliceVariationProps<
  Content.OpenPositionsSlice,
  'singlePosition'
>

export default function OpenPositionsSinglePosition({
  slice,
}: OpenPositionsSinglePositionProps) {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()

  const {
    title,
    location,
    content_sections,
    bottom_icons,
    equality_description,
    bottom_title,
    bottom_description,
    hire_link,
  } = slice.primary

  const highlightOffset = heroRef?.current?.scrollHeight ?? 0

  const { Component: VerticalNavigation, assignRefElement } =
    useVerticalNavigation({
      contentSectionBottomOffset: 56,
      highlightOffset,
    })

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back()
      return
    }
    router.push('/')
  }

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div
        className="xl:content mt-8 md:mt-16"
        ref={heroRef}
      >
        <div className="grid grid-cols-1 justify-start gap-x-9 gap-y-6">
          <Button
            variant="secondary"
            className="h-8 w-fit cursor-pointer rounded-lg px-3"
            onClick={handleBackClick}
          >
            <SvgArrowLeft />
            <span className="ml-2">Back</span>
          </Button>
          <PrismicRichText
            field={title}
            components={{
              heading3: ({ children }) => (
                <h3 className="text-heading-large">{children}</h3>
              ),
            }}
          />
          <PrismicRichText
            field={location}
            components={{
              heading6: ({ children }) => (
                <h3 className="text-body-medium mt-8 text-white/70 lg:mt-12">
                  Location: {children}
                </h3>
              ),
            }}
          />
        </div>
      </div>

      <div className="separator mt-4" />

      <div className="xl:content grid-cols-[3fr_1fr] lg:grid">
        <div className="mt-10 mb-14 flex flex-col gap-14 pr-14 md:mt-15 md:mb-30">
          {content_sections.map(({ section, icon }, i) => (
            <div
              key={i}
              style={{ scrollMarginTop: highlightOffset }}
              ref={assignRefElement({
                title: (section[0] as RTHeading3Node)?.text,
              })}
              className="flex flex-col gap-4 lg:max-w-[684px] [&_br]:hidden"
            >
              <PrismicRichText
                field={section}
                components={{
                  heading3: ({ children }) => (
                    <div className="flex items-center gap-2">
                      <PrismicNextImage
                        field={icon}
                        className="h-7 w-7"
                        fallbackAlt=""
                      />
                      <h2 className="text-title-medium text-white">
                        {children}
                      </h2>
                    </div>
                  ),
                  paragraph: ({ children }) => (
                    <p className="text-body-medium text-neutral-000/70 not-last-of-type:mb-2">
                      {children}
                    </p>
                  ),
                  listItem: ({ children }) => (
                    <li
                      className="text-body-medium text-neutral-000/70 list-inside list-disc pl-[3ch] not-last-of-type:mb-2"
                      style={{ textIndent: '-2ch' }}
                    >
                      {children}
                    </li>
                  ),
                }}
              />
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <PrismicRichText
              field={bottom_title}
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-title-medium">{children}</h2>
                ),
              }}
            />
            <PrismicRichText
              field={bottom_description}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-body-medium text-neutral-000/70 lg:max-w-[432px]">
                    {children}
                  </p>
                ),
              }}
            />
            <PrismicButton
              field={hire_link}
              variant="primary"
              className="h-12 w-fit px-10"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-[0.375rem]">
              {bottom_icons.map(({ icon }, i) => (
                <div
                  key={i}
                  className="border-neutral-000/10 flex aspect-[1] h-10 w-10 items-center justify-center rounded-full border"
                >
                  <div className="bg-primary-600 flex items-center justify-center rounded-full p-[0.35rem]">
                    <PrismicNextImage
                      field={icon}
                      className="h-4 w-4"
                      fallbackAlt=""
                    />
                  </div>
                </div>
              ))}
            </div>
            <PrismicRichText
              field={equality_description}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-body-medium text-neutral-000/70 lg:max-w-[684px]">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        </div>

        <div className="separator-vertical hidden pt-10 md:pt-15 lg:block">
          <div className="sticky top-25 flex h-fit flex-col pb-7 pl-10">
            <h2 className="text-body-medium mb-5 font-medium">On this page</h2>
            <div className="mb-10">
              <VerticalNavigation />
            </div>
            <h2 className="text-body-medium mb-5 font-medium">Interested?</h2>
            <PrismicButton
              field={hire_link}
              variant="primary"
              className="h-9 w-fit"
            >
              Reach out
            </PrismicButton>
          </div>
        </div>
      </div>
    </SliceContainer>
  )
}
