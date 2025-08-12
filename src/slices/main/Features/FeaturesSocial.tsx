import type { Content } from '@prismicio/client'

import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import SvgArrowDownAccordion from '@/components/svg/SvgArrowDownAccordion'
import * as React from 'react'

export type FeaturesSocialProps = SliceVariationProps<
  Content.FeaturesSlice,
  'social'
>

export default function FeaturesSocial({ slice }: FeaturesSocialProps) {
  const { eyebrow, title, social_links } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="2xl:content mt-8 mb-14 md:mt-16 md:mb-24 md:px-4">
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
          <div className="flex flex-col">
            {social_links.map(({ icon, link }, i) => (
              <PrismicNextLink
                key={`${title}-${i}`}
                field={link}
              >
                <div className="group border-neutral-000/10 flex cursor-pointer justify-between gap-2 border-b py-5 transition lg:items-center lg:px-4 lg:hover:bg-neutral-800">
                  <div className="flex items-center">
                    <PrismicNextImage
                      field={icon}
                      fallbackAlt=""
                    />
                    <h4 className="text-title-large ml-4 pr-4">{link.text}</h4>
                  </div>
                  <Button
                    className="row-span-2 h-10 w-10 self-center justify-self-end p-0 group-hover:border-white/24 lg:row-span-1"
                    variant="secondary"
                  >
                    <SvgArrowDownAccordion className="rotate-[-90deg] transform text-white" />
                  </Button>
                </div>
              </PrismicNextLink>
            ))}
          </div>
        </div>
      </div>
      <div className="separator" />
    </SliceContainer>
  )
}
