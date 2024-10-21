import { Button, Code, Flex } from '@pluralsh/design-system'
import Link from 'next/link'

import { getImageUrl } from '@src/consts/routes'
import { type HeroComponentFragment } from '@src/generated/graphqlDirectus'
import { cn } from '@src/utils/cn'

import { ImageAspectRatio } from '../AspectRatio'
import Embed from '../Embed'
import { Body1, Hero1 } from '../Typography'

import { getSpacingClassName } from './common'

export function Hero({
  spacing,
  heading,
  body_text: bodyText,
  cta_text: ctaText,
  cta_url: ctaUrl,
  media_type: mediaType,
  image,
  video_url: videoUrl,
  form,
}: HeroComponentFragment) {
  const imageUrl = getImageUrl(image)

  return (
    <section className={cn(getSpacingClassName(spacing), 'mx-xxxxxxlarge')}>
      <Flex gap="xxxlarge">
        <Flex
          flex={1}
          flexDirection="column"
          justifyContent="center"
          gap="medium"
        >
          <Hero1>{heading}</Hero1>
          <Body1 $color="text-light">{bodyText}</Body1>
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
        </Flex>
        <div className="m-auto flex-1 ">
          {mediaType === 'image' ? (
            imageUrl && (
              <ImageAspectRatio
                $aspectRatio="16 / 10"
                $url={imageUrl}
              />
            )
          ) : mediaType === 'video' ? (
            <Embed
              aspectRatio="16/10"
              url={videoUrl ?? ''}
            />
          ) : mediaType === 'form' ? (
            <Code css={{ overflow: 'auto', maxHeight: '500px' }}>
              {form ?? ''}
            </Code>
          ) : null}
        </div>
      </Flex>
    </section>
  )
}
