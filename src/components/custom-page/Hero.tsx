import { Button } from '@pluralsh/design-system'
import Link from 'next/link'

import { useTheme } from 'styled-components'

import { type HeroComponentFragment } from '@src/generated/graphqlDirectus'
import { cn } from '@src/utils/cn'

import { Body1, Hero1 } from '../Typography'

import { Multimedia } from './Multimedia'

export function Hero({
  heading,
  body_text: bodyText,
  cta_text: ctaText,
  cta_url: ctaUrl,
  media_type: mediaType,
  image,
  video_url: videoUrl,
  form,
}: HeroComponentFragment) {
  const theme = useTheme()

  return (
    <div
      className={cn(
        'flex gap-xxxlarge lg:flex-row',
        mediaType === 'form' ? 'flex-col lg:items-start' : 'flex-col-reverse',
        mediaType === 'none' ? 'align-center justify-center text-center' : ''
      )}
    >
      <div
        className={cn(
          'flex flex-col justify-center gap-medium lg:min-w-[400px] lg:max-w-[560px]',
          mediaType === 'none' ? 'items-center' : ''
        )}
      >
        <Hero1>{heading}</Hero1>
        <Body1
          css={{ whiteSpace: 'pre-wrap' }}
          $color="text-light"
        >
          {bodyText}
        </Body1>
        {ctaText && (
          <Button
            className="mt-medium w-fit"
            as={Link}
            target="_blank"
            rel="noopener noreferrer"
            href={ctaUrl}
          >
            {ctaText}
          </Button>
        )}
      </div>
      {mediaType !== 'none' && (
        <Multimedia
          mediaType={mediaType}
          image={image}
          videoUrl={videoUrl}
          form={form}
          backgroundColor={theme.colors.grey[950]}
          showBorder={false}
        />
      )}
    </div>
  )
}
