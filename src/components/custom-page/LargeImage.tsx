import { Button, Flex } from '@pluralsh/design-system'
import Link from 'next/link'

import styled from 'styled-components'

import { type LargeImageComponentFragment } from '@src/generated/graphqlDirectus'

import { cn } from '../cn'
import { Body2, OverlineLabel, Title1 } from '../Typography'

import { Multimedia } from './Multimedia'

export function LargeImage({
  overline,
  heading,
  body_text: bodyText,
  cta_text: ctaText,
  cta_url: ctaUrl,
  media_type: mediaType,
  image_position: imagePosition,
  image,
  video_url: videoUrl,
  form,
}: LargeImageComponentFragment) {
  return (
    <div className="flex flex-col gap-xxxxlarge">
      <div
        className={cn(
          'flex flex-col gap-xxxlarge',
          imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
        )}
      >
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
      </div>
      <GradientDividerLine
        $toDirection={imagePosition === 'left' ? 'right' : 'left'}
      />
    </div>
  )
}

const GradientDividerLine = styled.div<{ $toDirection: 'left' | 'right' }>(
  ({ $toDirection }) => ({
    width: '100%',
    height: '1px',
    opacity: 0.5,
    background: `linear-gradient(
    to ${$toDirection},
    #fff 13%,
    #ccc 40.5%,
    #999 63.5%,
    transparent 93.5%
  )`,
  })
)
