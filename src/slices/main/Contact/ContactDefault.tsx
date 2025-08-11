import type { Content } from '@prismicio/client'

import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'

import HubSpotForm from './components/HubSpotForm'

export type ContactDefaultProps = SliceVariationProps<
  Content.ContactSlice,
  'default'
>

export default function ContactDefault({ slice }: ContactDefaultProps) {
  const { title, description, cta, hubspot_form, eyebrow } = slice.primary

  if (!hubspot_form?.[0]) {
    return null
  }

  const { region, portal_id, form_id } = hubspot_form[0]

  return (
    <SliceContainer
      slice={slice}
      className="grid-container lg:grid-container-gutter-content-14"
    >
      <div className="content">
        <div className="my-12 grid grid-cols-1 justify-start gap-x-9 gap-y-6 md:my-20 md:grid-cols-2">
          <div className="md:max-w-[440px] md:pt-20">
            <Eyebrow
              field={eyebrow}
              className="mb-6"
            />
            <PrismicRichText
              field={title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-heading-medium">{children}</h1>
                ),
                heading2: ({ children }) => (
                  <h2 className="text-heading-medium">{children}</h2>
                ),
              }}
            />
            <PrismicRichText
              field={description}
              components={{
                paragraph: ({ children }) => (
                  <p className="not-first:mt-6">{children}</p>
                ),
              }}
            />
            <PrismicButton
              field={cta}
              size="small"
              className="mt-6 md:mt-10"
            />
            <div className="separator mt-10 mb-5 md:hidden" />
          </div>
          <div className="w-full md:mx-auto md:max-w-[476px]">
            <HubSpotForm
              region={region}
              portalId={portal_id}
              formId={form_id}
            />
          </div>

          <div className="separator-vertical absolute top-0 bottom-0 left-[50%] max-md:hidden" />
        </div>
      </div>
    </SliceContainer>
  )
}
