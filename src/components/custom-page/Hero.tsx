import { Button, Flex } from '@pluralsh/design-system'
import Link from 'next/link'

import { type HeroComponentFragment } from '@src/generated/graphqlDirectus'
import { cn } from '@src/utils/cn'

import { Body1, Hero1 } from '../Typography'

import { getSpacingClassName } from './common'
import { Multimedia } from './Multimedia'

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
        <Multimedia
          mediaType={mediaType}
          image={image}
          videoUrl={videoUrl}
          form={form}
        />
      </Flex>
    </section>
  )
}
