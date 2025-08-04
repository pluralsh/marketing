import type { Content } from '@prismicio/client'

import { PrismicRichText } from '@prismicio/react'

import type { SliceVariationProps } from '@/types/prismicio'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'
import SvgCheckCircle from '@/components/svg/SvgCheckCircle'
import SvgPlus from '@/components/svg/SvgPlus'
import { cn } from '@/utils/cn'

export type PricingCardsProps = SliceVariationProps<
  Content.PricingSlice,
  'cards'
>

export default function PricingCards({ slice }: PricingCardsProps) {
  const { cards } = slice.primary

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="content-full-bleed grid grid-cols-subgrid overflow-clip">
        <div className="content-full-width xl:content">
          <div className="py-3 md:py-16">
            <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:auto-cols-fr md:grid-flow-col md:grid-rows-[repeat(4,_auto)]">
              {cards.map(
                ({ title, description, emphasized, features, link }, idx) => (
                  <div
                    key={idx}
                    className="row-span-4 grid grid-rows-subgrid"
                  >
                    <div
                      className={cn(
                        'border-neutral-000/10 row-span-4 grid h-full grid-rows-subgrid justify-items-start rounded-xl border p-4 md:p-6',
                        emphasized && 'border-0 bg-neutral-800'
                      )}
                    >
                      <div className="text-neutral-000 text-body-medium border-neutral-000/10 row-span-1 inline-flex h-10 items-center overflow-hidden rounded-full border px-4 py-2 overflow-ellipsis whitespace-nowrap">
                        {title}
                      </div>
                      <PrismicRichText
                        field={description}
                        components={{
                          paragraph: ({ children }) => (
                            <p className="row-span-1 mt-4">{children}</p>
                          ),
                        }}
                      />
                      <div className="row-span-1 mt-6">
                        <PrismicRichText
                          field={features}
                          components={{
                            listItem: ({ children }) => (
                              <li className="mt-3">{children}</li>
                            ),
                            label: ({ children, node }) => {
                              switch (node.data.label) {
                                case 'icon:plus':
                                  return (
                                    <div className="text-neutral-000/60 flex items-center gap-x-3">
                                      <SvgPlus className="shrink-0" />
                                      <span>{children}</span>
                                    </div>
                                  )
                                case 'icon:check':
                                  return (
                                    <div className="flex items-center gap-x-3">
                                      <SvgCheckCircle className="text-accent-400 shrink-0" />
                                      <span className="text-neutral-000">
                                        {children}
                                      </span>
                                    </div>
                                  )
                                default:
                                  return (
                                    <span data-label={node.data.label}>
                                      {children}
                                    </span>
                                  )
                              }
                            },
                          }}
                        />
                      </div>
                      <div className="row-span-1 mt-auto">
                        <PrismicButton
                          field={link}
                          className="mt-8 h-auto text-center whitespace-normal md:mt-16"
                          size="large"
                          variant={emphasized ? 'primary' : 'secondary'}
                        />
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </SliceContainer>
  )
}
