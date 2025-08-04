import type { Content } from '@prismicio/client'

import { isFilled } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import SvgArrowDown from '@/components/svg/SvgArrowDown'
import { cn } from '@/utils/cn'

export type LogotypesThreeItemsProps = SliceVariationProps<
  Content.LogotypesSlice,
  'threeItems'
>

export default function LogotypesThreeItems({
  slice,
}: LogotypesThreeItemsProps) {
  const { eyebrow, logotypes } = slice.primary

  return (
    <SliceContainer slice={slice}>
      <div className="grid-container">
        {isFilled.keyText(eyebrow) && (
          <div className="content text-white">
            <div className="flex items-center gap-x-14 py-8 md:pb-6">
              <h2 className="text-caption">{eyebrow}</h2>
              <SvgArrowDown />
            </div>
          </div>
        )}
        <div className="separator" />
      </div>
      <div className="grid-container max-lg:grid-container-padding-full-bleed-0">
        <div className="content flex justify-around md:justify-center">
          {logotypes.map(({ logo }, idx) => (
            <div
              key={idx}
              className={cn(
                'md:grid md:place-items-center',
                'max-h-[300px] max-md:my-6 md:aspect-square',
                'md:basis-(--embla-slide-basis)',
                'border-neutral-000/10 md:border-r md:first:border-l'
              )}
              style={
                {
                  '--embla-slide-basis': `${100 / logotypes.length}%`,
                } as React.CSSProperties
              }
            >
              <PrismicNextImage
                field={logo}
                fallbackAlt=""
                className="h-16 w-auto object-contain md:h-25"
              />
            </div>
          ))}
        </div>
        <div className="separator" />
      </div>
    </SliceContainer>
  )
}
