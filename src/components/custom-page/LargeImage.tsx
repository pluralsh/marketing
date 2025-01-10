import { Button } from '@pluralsh/design-system'
import Link from 'next/link'

import styled, { useTheme } from 'styled-components'

import { type LargeImageComponentFragment } from '@src/generated/graphqlDirectus'

import BasicMarkdown from '../BasicMarkdown'
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
  const theme = useTheme()

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
          showBorder={false}
          backgroundColor={theme.colors.grey[950]}
        />
        <div className="flex flex-col justify-center gap-medium lg:min-w-[400px] lg:max-w-[560px]">
          {overline && <OverlineLabel>{overline}</OverlineLabel>}
          <Title1>{heading}</Title1>
          <Body2
            as="div"
            $color="text-light"
          >
            <BasicMarkdown text={bodyText ?? ''} />
          </Body2>
          {ctaText && (
            <Button
              large
              className="mt-medium w-full lg:w-fit"
              as={Link}
              target="_blank"
              rel="noopener noreferrer"
              href={ctaUrl}
            >
              {ctaText}
            </Button>
          )}
        </div>
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
