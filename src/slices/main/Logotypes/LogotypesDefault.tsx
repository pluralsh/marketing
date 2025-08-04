import type { Content } from '@prismicio/client'

import { isFilled } from '@prismicio/client'

import type { SliceVariationProps } from '@/types/prismicio'

import SliceContainer from '@/components/SliceContainer'
import SvgArrowDown from '@/components/svg/SvgArrowDown'

import LogotypeCarousel from './components/LogotypeCarousel'

export type LogotypesDefaultProps = SliceVariationProps<
  Content.LogotypesSlice,
  'default'
>

export default function LogotypesDefault({ slice }: LogotypesDefaultProps) {
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
        <div className="content overflow-clip">
          <LogotypeCarousel logotypes={logotypes} />
        </div>
        <div className="separator" />
      </div>
    </SliceContainer>
  )
}
