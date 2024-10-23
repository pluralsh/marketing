import { Button, Flex } from '@pluralsh/design-system'
import Link from 'next/link'

import { type LargeImageComponentFragment } from '@src/generated/graphqlDirectus'

import { cn } from '../cn'
import { Body2, OverlineLabel, Title1 } from '../Typography'

import { getSpacingClassName } from './common'
import { Multimedia } from './Multimedia'

export function LargeImage({
  spacing,
  overline,
  heading,
  body_text: bodyText,
  cta_text: ctaText,
  cta_url: ctaUrl,
  media_type: mediaType,
  image,
  video_url: videoUrl,
  form,
}: LargeImageComponentFragment) {
  return (
    <section className={cn(getSpacingClassName(spacing), 'mx-xxxxxxlarge')}>
      <Flex gap="xxxlarge">
        <Multimedia
          mediaType={mediaType}
          image={image}
          videoUrl={videoUrl}
          form={form}
        />
        <Flex
          flex={1}
          flexDirection="column"
          justifyContent="center"
          gap="medium"
        >
          {overline && <OverlineLabel>{overline}</OverlineLabel>}
          <Title1>{heading}</Title1>
          <Body2 $color="text-light">{bodyText}</Body2>
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
      </Flex>
    </section>
  )
}
