import { type ComponentProps, type ReactNode } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import styled from 'styled-components'
import { type Merge } from 'type-fest'

import { mqs } from '@src/breakpoints'
import { QUICKSTART_VIDEO_URL } from '@src/consts'
import { getImageUrl } from '@src/consts/routes'
import { type MediaCardComponentFragment } from '@src/generated/graphqlDirectus'
import { isExternalUrl } from '@src/utils/text'

import Embed from '../Embed'
import { SubsectionHead } from '../SectionHeads'
import { ShadowedCard } from '../ShadowedCard'
import { Body1, Cta } from '../Typography'

const MediaCardSC = styled(ShadowedCard)<{
  $size: 'medium' | 'small'
  $reverse: boolean
}>(({ $size, $reverse = false, theme }) => ({
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  img: {
    display: 'block',
    margin: 0,
    padding: 0,
    opacity: 0,
  },
  '.content': {
    padding: theme.spacing.xlarge,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 460,
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing.large,
  },
  ...($size !== 'small'
    ? {
        [mqs.columns]: {
          flexDirection: $reverse ? 'row-reverse' : 'row',
          '& > *': {
            width: '50%',
          },
          '.content': {
            marginLeft: 0,
          },
        },
      }
    : {}),
}))

export function QuickstartDemoCard() {
  return (
    <MediaCard
      heading="Plural Quickstart Demo"
      videoUrl={QUICKSTART_VIDEO_URL}
      description={
        <>
          This guide goes over how to get started with Plural using our
          in-browser Cloud Shell.
        </>
      }
      ctas={[
        {
          label: 'Browse all',
          url: 'https://www.youtube.com/@pluralsh/videos',
        },
      ]}
    />
  )
}

export function MediaCard({
  reverse = false,
  size = 'medium',
  preHeading,
  //
  heading,
  description,
  url,
  ctas,
  thumbnail,
  videoUrl,
  author,
  date,
  ...props
}: Merge<
  ComponentProps<typeof MediaCardSC>,
  Pick<
    MediaCardComponentFragment,
    'heading' | 'url' | 'ctas' | 'videoUrl' | 'author' | 'date'
  > & {
    thumbnail?: MediaCardComponentFragment['thumbnail'] | string
    description?: MediaCardComponentFragment['description'] | ReactNode
    size?: 'medium' | 'small'
    reverse?: boolean
    preHeading?: string
  }
>) {
  const thumbUrl =
    typeof thumbnail === 'string' ? thumbnail : getImageUrl(thumbnail)
  const locale = useRouter().locale || 'en-us'
  const dateObj = new Date(date)

  const dateString = Number.isNaN(dateObj.valueOf())
    ? null
    : dateObj.toLocaleDateString(locale, {
        dateStyle: 'medium',
      })

  return (
    <MediaCardSC
      $size={size}
      $reverse={reverse}
      {...(url && !videoUrl
        ? {
            as: Link,
            href: url,
            alt: '',
            $clickable: true,
            ...(isExternalUrl(url) ? { target: '_blank' } : {}),
          }
        : {})}
      {...props}
    >
      {videoUrl ? (
        <Embed
          className="m-0 p-0"
          url={videoUrl}
          aspectRatio="16 / 9"
        />
      ) : (
        thumbUrl && (
          <div
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url(${thumbUrl})`,
            }}
          >
            <img src={thumbUrl} />
          </div>
        )
      )}
      <div className="content">
        <SubsectionHead
          preHeading={
            preHeading ||
            (videoUrl ? (
              'Video demo'
            ) : (
              <>
                {[dateString || null, author ? `By ${author}` : null]
                  .filter((v) => !!v)
                  .join(' | ')}
              </>
            ))
          }
          heading={heading}
          headingProps={{ textStyles: { '': 'mTitle1' } }}
        />
        {description && <Body1 $color="text-light">{description}</Body1>}
        {ctas?.map((cta, i) => (
          <Cta
            key={`${cta.label}-${cta.url}-${i}`}
            target="_blank"
            rel="noopener noreferrer"
            href={cta?.url}
            download={
              typeof cta?.download === 'boolean' ? cta?.download : undefined
            }
          >
            {cta.label}
          </Cta>
        ))}
      </div>
    </MediaCardSC>
  )
}

export const MediaCardNoBorder = styled(MediaCard)(() => ({
  border: 'none',
}))
