import type { Content } from '@prismicio/client'

import { isFilled } from '@prismicio/client'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import SvgArrowDown from '@/components/svg/SvgArrowDown'

import StatsCarousel from './components/StatsCarousel'

export type StatsDefaultProps = SliceVariationProps<
  Content.StatsSlice,
  'default'
>

export default function StatsDefault({ slice }: StatsDefaultProps) {
  const { eyebrow, statistics } = slice.primary

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
      </div>
      <StatsCarousel statistics={statistics} />
    </SliceContainer>
  )
}
