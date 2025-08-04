'use client'

import type { Content } from '@prismicio/client'

import { asLinkAttrs } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import * as React from 'react'
import { useMemo, useState } from 'react'

import type { SliceVariationProps } from '@/types/prismicio'

import FilterButtonGroup from '@/components/FilterButtonGroup'
import SliceContainer from '@/components/SliceContainer'
import SvgArrowDownAccordion from '@/components/svg/SvgArrowDownAccordion'
import { Button } from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'

const VIEW_ALL = 'View All'
type JobOfferRawCategory = Content.JobOfferCategoryDocumentData['name']
type JobOfferCategory = JobOfferRawCategory | typeof VIEW_ALL
type MappedJobOffer = Content.OpenPositionsSliceDefaultPrimaryJobOffersItem & {
  category: JobOfferRawCategory
}

export type OpenPositionsDefaultProps = SliceVariationProps<
  Content.OpenPositionsSlice,
  'default'
>

export default function OpenPositionsDefault({
  slice,
}: OpenPositionsDefaultProps) {
  const {
    eyebrow,
    title,
    job_offers,
    bottom_title,
    bottom_description,
    hire_link,
  } = slice.primary

  const [selectedCategory, setSelectedCategory] =
    useState<JobOfferCategory>(VIEW_ALL)

  const mappedJobOffers = useMemo((): MappedJobOffer[] => {
    return job_offers
      .map((jobOffer) => {
        const { job_offer_category } = jobOffer
        if (
          job_offer_category?.link_type !== 'Document' ||
          !job_offer_category?.data
        ) {
          return jobOffer
        }
        return { ...jobOffer, category: job_offer_category.data.name }
      })
      .filter(Boolean) as MappedJobOffer[]
  }, [job_offers])

  const categories = useMemo((): JobOfferCategory[] => {
    const mappedCategories = [
      ...new Set(mappedJobOffers.map(({ category }) => category)),
    ] as JobOfferCategory[]
    return [VIEW_ALL, ...mappedCategories]
  }, [mappedJobOffers])

  const onCategoryButtonClick = (team: JobOfferCategory) => () =>
    setSelectedCategory(team)

  const filteredOffers = useMemo(
    () =>
      selectedCategory === VIEW_ALL
        ? mappedJobOffers
        : mappedJobOffers.filter(
            ({ category }) => category === selectedCategory
          ),
    [mappedJobOffers, selectedCategory]
  )

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
        <FilterButtonGroup<JobOfferCategory>
          buttons={categories}
          onButtonClick={onCategoryButtonClick}
          selectedButtons={selectedCategory}
        />
      </div>
      <div className="2xl:content">
        <div className="mt-6 flex flex-col">
          {filteredOffers.map(
            ({ title, location, category, job_offer_link }, i) => (
              <PrismicNextLink
                key={`${title}-${i}`}
                field={job_offer_link}
              >
                <div className="group border-neutral-000/10 grid cursor-pointer grid-cols-[1fr_2.5rem] gap-2 border-b py-5 transition lg:grid-cols-[3.5fr_1.5fr_2fr_2.5rem] lg:items-center lg:px-4 lg:hover:bg-neutral-800">
                  <PrismicRichText
                    field={title}
                    components={{
                      heading4: ({ children }) => (
                        <h4 className="text-title-large">{children}</h4>
                      ),
                    }}
                  />
                  <PrismicRichText
                    field={location}
                    components={{
                      paragraph: ({ children }) => (
                        <span className="text-caption text-neutral-000 hidden lg:block">
                          {children}
                        </span>
                      ),
                    }}
                  />
                  <span className="text-caption text-neutral-000/70 hidden lg:block">
                    {category}
                  </span>
                  <Button
                    className="row-span-2 h-10 w-10 self-center justify-self-end p-0 group-hover:border-white/24 lg:row-span-1"
                    variant="secondary"
                  >
                    <SvgArrowDownAccordion className="rotate-[-90deg] transform text-white" />
                  </Button>
                  <div className="flex items-center gap-0.5 lg:hidden">
                    <PrismicRichText
                      field={location}
                      components={{
                        paragraph: ({ children }) => (
                          <span className="text-caption text-neutral-000">
                            {children}
                          </span>
                        ),
                      }}
                    />
                    <span className="text-caption text-neutral-000/70 h-[0.8125rem] w-4">
                      ・
                    </span>
                    <span className="text-caption text-neutral-000/70">
                      {category}
                    </span>
                  </div>
                </div>
              </PrismicNextLink>
            )
          )}
        </div>
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
