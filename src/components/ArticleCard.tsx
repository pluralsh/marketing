import { type ComponentProps } from 'react'

import Link from 'next/link'

import styled from 'styled-components'
import { type Merge } from 'type-fest'

import { mqs } from '@src/breakpoints'
import { QUICKSTART_VIDEO_URL } from '@src/consts'
import { getImageUrl } from '@src/consts/routes'
import { type ArticleCardFragment } from '@src/generated/graphqlDirectus'
import { isExternalUrl } from '@src/utils/text'

import Embed from './Embed'
import { SubsectionHead } from './SectionHeads'
import { ShadowedCard } from './ShadowedCard'
import { Body1, Cta } from './Typography'

const ArticleCardSC = styled(ShadowedCard)<{ $size: 'medium' | 'small' }>(
  ({ $size, theme }) => ({
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
            flexDirection: 'row',
            '& > *': {
              width: '50%',
            },
            '.content': {
              marginLeft: 0,
            },
          },
        }
      : {}),
  })
)

export function QuickstartDemoCard() {
  return (
    <ArticleCard
      heading="Plural Quickstart Demo"
      videoUrl={QUICKSTART_VIDEO_URL}
      description="This guide goes over how to get started with Plural using our in-browser Cloud Shell."
      ctas={[{ label: 'Browse all', url: 'ArticleCard' }]}
    />
  )
}

export function ArticleCard({
  ctas,
  thumbnail,
  heading,
  description,
  videoUrl,
  url,
  author,
  date,
  size = 'medium',
  ...props
}: Merge<
  ComponentProps<typeof ArticleCardSC>,
  ArticleCardFragment & { size?: 'medium' | 'small' }
>) {
  const thumbUrl = getImageUrl(thumbnail)

  return (
    // @ts-expect-error
    <ArticleCardSC
      $size={size}
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
            videoUrl ? (
              'Video demo'
            ) : (
              <>{[date.toString(), author].filter((v) => !!v).join(' | ')}</>
            )
          }
          heading={heading}
          headingProps={{ textStyles: { '': 'mTitle1' } }}
        />
        <Body1 color="text-light">{description}</Body1>
        {ctas?.map((cta) => (
          <Cta
            target="_blank"
            rel="noopener noreferrer"
            href={cta?.url}
          >
            {cta.label}
          </Cta>
        ))}
      </div>
    </ArticleCardSC>
  )
}

export const ArticleCardNoBorder = styled(ArticleCard)(() => ({
  border: 'none',
}))
