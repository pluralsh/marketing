import { Card } from '@pluralsh/design-system'

import styled from 'styled-components'

import { getImageUrl } from '@src/consts/routes'
import {
  type CardFragment,
  type CardsComponentFragment,
} from '@src/generated/graphqlDirectus'

import { ImageAspectRatio } from '../AspectRatio'
import { Body2, Subtitle1 } from '../Typography'

export function Cards({ cards }: CardsComponentFragment) {
  return (
    <div className="flex flex-col gap-xxlarge lg:flex-row">
      {cards?.map(
        (c, i) =>
          c?.card_id && (
            <CardComponent
              key={i}
              {...c?.card_id}
            />
          )
      )}
    </div>
  )
}

export function CardComponent({
  image,
  heading,
  body_text: bodyText,
  url,
}: CardFragment) {
  return (
    <CardComponentWrapperSC
      {...(url
        ? {
            forwardedAs: 'a',
            href: url,
            target: '_blank',
            rel: 'noopener noreferrer',
            $clickable: true,
          }
        : {})}
    >
      <ImageAspectRatio
        $aspectRatio="16/10"
        $url={getImageUrl(image) ?? ''}
      />
      <div className="flex flex-col gap-xsmall">
        <Subtitle1>{heading}</Subtitle1>
        <Body2 $color="text-light">{bodyText}</Body2>
      </div>
    </CardComponentWrapperSC>
  )
}

const CardComponentWrapperSC = styled(Card)<{ $clickable: boolean }>(
  ({ theme, $clickable }) => ({
    display: 'flex',
    flexDirection: 'column',
    textWrap: 'pretty',
    padding: theme.spacing.xlarge,
    gap: theme.spacing.xlarge,
    transition: 'border 0.12s ease-in-out',
    ...($clickable
      ? {
          cursor: 'pointer',
          '&:hover': {
            border: theme.borders.input,
          },
        }
      : {}),
  })
)
