'use client'

import type { Content } from '@prismicio/client'

import { isFilled } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import type { SliceVariationProps } from '@/types/prismicio'

import PrismicButton from '@/components/PrismicButton'
import SliceContainer from '@/components/SliceContainer'
import Eyebrow from '@/components/ui/Eyebrow'
import { getYouTubeId } from '@/utils/strings'

export type HeroVideoProps = SliceVariationProps<Content.HeroSlice, 'video'>

export default function HeroVideo({ slice }: HeroVideoProps) {
  const { eyebrow, title, description, cta, youtube_embed } = slice.primary
  const youtubeId = getYouTubeId(youtube_embed?.embed_url || '')

  return (
    <SliceContainer
      slice={slice}
      className="grid-container"
    >
      <div className="2xl:content my-8 grid grid-cols-1 items-center gap-x-3 gap-y-10 md:my-16 md:grid-cols-2">
        <div className="md:ml-14 md:max-w-[440px] 2xl:ml-0">
          <Eyebrow
            field={eyebrow}
            emphasized
            className="mb-6"
          />
          <PrismicRichText
            field={title}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-heading-small">{children}</h1>
              ),
            }}
          />
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-body-medium mt-6 md:mt-8">{children}</p>
              ),
            }}
          />
          <PrismicButton
            field={cta}
            size="large"
            className="mt-6 self-start md:mt-10"
          />
        </div>
        {isFilled.embed(youtube_embed) && youtubeId && (
          <div
            className="overflow-clip rounded-xl"
            style={{
              aspectRatio: `${youtube_embed?.width}/${youtube_embed?.height}`,
            }}
          >
            <LiteYouTubeEmbed
              id={youtubeId}
              title={youtube_embed.title || ''}
              poster="maxresdefault"
            />
          </div>
        )}
      </div>
      <div className="separator" />
    </SliceContainer>
  )
}
