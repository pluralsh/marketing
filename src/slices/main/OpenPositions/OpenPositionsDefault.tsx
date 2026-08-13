import type { Content } from '@prismicio/client'

import { asLinkAttrs } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import { Button } from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import { getAshbyJobs } from '@/utils/ashby'

import OpenPositionsList from './components/OpenPositionsList'

export type OpenPositionsDefaultProps = SliceVariationProps<
  Content.OpenPositionsSlice,
  'default'
>

export default async function OpenPositionsDefault({
  slice,
}: OpenPositionsDefaultProps) {
  const { eyebrow, title, bottom_title, bottom_description, hire_link } =
    slice.primary

  const jobs = await getAshbyJobs()

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="2xl:content mt-8 md:mt-16 md:px-4">
        <div className="grid grid-cols-1 justify-start gap-x-9 gap-y-6 md:grid-cols-2">
          <div className="md:col-span-2">
            <Eyebrow field={eyebrow} />
          </div>
          <PrismicRichText
            field={title}
            components={{
              heading3: ({ children }) => (
                <h2 className="text-heading-small md:max-w-[592px]">
                  {children}
                </h2>
              ),
            }}
          />
        </div>
      </div>
      <div className="2xl:content">
        <OpenPositionsList jobs={jobs} />
      </div>
      <div className="2xl:content mb-8 md:mb-16 md:px-4">
        <div className="mt-6 flex flex-col gap-2">
          <PrismicRichText
            field={bottom_title}
            components={{
              heading5: ({ children }) => (
                <h5 className="text-body-medium font-medium">{children}</h5>
              ),
            }}
          />
          <PrismicRichText
            field={bottom_description}
            components={{
              paragraph: ({ children }) => (
                <span className="text-body-small text-neutral-000/70 lg:max-w-[432px]">
                  {children}
                </span>
              ),
            }}
          />
          <Button
            as={PrismicNextLink}
            variant="secondary"
            className="mt-4 w-fit"
            {...asLinkAttrs(hire_link)}
          >
            {hire_link.text}
          </Button>
        </div>
      </div>
    </SliceContainer>
  )
}
