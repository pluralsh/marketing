import { type ComponentProps, useEffect, useState } from 'react'

import styled, { useTheme } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { type Swiper as SwiperT } from 'swiper/types'
import { type Merge } from 'type-fest'
import 'swiper/css'

import { mqs } from '@src/breakpoints'
import { getImageUrl } from '@src/consts/routes'
import { type QuoteFragment } from '@src/generated/graphqlDirectus'

import BasicMarkdown from './BasicMarkdown'
import { CarouselDot, CarouselDots } from './CarouselDots'
import useIndex from './hooks/useIndex'
import { StandardPageWidth } from './layout/LayoutHelpers'
import { Heading1 } from './Typography'

export const QuoteCard = styled(
  ({
    quote,
    variant: _variant,
    ...props
  }: {
    quote: QuoteFragment
    variant?: 'default' | 'active'
  } & ComponentProps<'div'>) => {
    const imgUrl = getImageUrl(quote.logo)

    return (
      <div {...props}>
        <div className="quote">
          <BasicMarkdown text={quote.quote} />
        </div>
        {imgUrl && (
          <div className="logo">
            <img
              src={imgUrl}
              alt={`${quote.company} logo`}
            />
          </div>
        )}
        <div className="attribution">
          {quote.portrait && (
            <div
              aria-hidden
              className="portrait"
              style={{ backgroundImage: `url(${getImageUrl(quote.portrait)})` }}
            />
          )}
          <div className="nameTitle">
            {quote.name && <div className="name">{quote.name}</div>}
            {quote.title && <div className="title">{quote.title}</div>}
          </div>
        </div>
      </div>
    )
  }
)(({ theme, variant }) => ({
  boxSizing: 'border-box',
  paddingTop: theme.spacing.xlarge,
  paddingBottom: theme.spacing.xlarge,
  paddingLeft: theme.spacing.large,
  paddingRight: theme.spacing.large,
  borderRadius: theme.borderRadiuses.large,
  transition: 'all 0.5s ease',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.large,
  ...(variant === 'active'
    ? {
        transform: 'translateY(-15px)',
      }
    : {}),
  '.attribution': {
    display: 'flex',
    gap: theme.spacing.medium,
    alignItem: 'center',
  },
  '.quote': {
    ...theme.partials.marketingText.body1Bold,
    color: theme.colors.text,
    [mqs.md]: {
      ...theme.partials.marketingText.title2,
    },
  },
  '.logo': {
    flexGrow: 1,
    ...theme.partials.marketingText.title2,
    img: {
      height: 28,
    },
  },
  '.nameTitle': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  '.name': {
    ...theme.partials.text.subtitle1,
    color: theme.colors['text-light'],
  },
  '.title': {
    ...theme.partials.text.body1,
    color: theme.colors['text-xlight'],
  },
  '.portrait': {
    flexShrink: 0,
    width: 46,
    height: 46,
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundSize: 'cover',
  },
  backgroundColor:
    variant === 'active'
      ? theme.colors['action-primary']
      : theme.colors['fill-three'],
}))

const QuotesCarouselFC = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  '.swiper': {
    overflow: 'visible',
    maxWidth: 'none',
    // maxWidth: 400,
    // [mqs.xxl]: {
    //   maxWidth: 456,
    // },
  },
  '.swiper-wrapper': {
    alignItems: 'stretch',
    overflow: 'visible',
  },
  '.dotList': {
    marginTop: theme.spacing.medium,
    justifyContent: 'center',
  },
  '.swiper-slide': {
    maxWidth: 400,
    [mqs.xxl]: {
      maxWidth: 456,
    },
    overfow: 'visible',
    flexDirection: 'column',
    flexGrow: 1,
    height: 'unset',
  },
}))

export function QuotesCarousel({
  quotes,
  ...props
}: Merge<
  ComponentProps<typeof QuotesCarouselFC>,
  {
    quotes?: (QuoteFragment | null | undefined)[] | null
  }
>) {
  const theme = useTheme()
  const [swiper, setSwiper] = useState<SwiperT | null>(null)
  const {
    activeIndex: activeI,
    setIndex,
    goForward,
  } = useIndex(quotes?.length || 0, 0, true)

  const activeIndex = activeI ?? 0

  useEffect(() => {
    if (activeIndex !== swiper?.realIndex) {
      swiper?.slideToLoop(activeIndex)
    }
  }, [activeIndex, swiper])

  useEffect(() => {
    const timeout = setTimeout(() => {
      goForward()
    }, 6000)

    return () => {
      clearTimeout(timeout)
    }
  }, [goForward])

  if (!quotes) return null

  const quotesInner = quotes

  return (
    <QuotesCarouselFC {...props}>
      <div>
        <Swiper
          modules={[]}
          spaceBetween={theme.spacing.large}
          slidesPerView="auto"
          onSlideChange={(s) => {
            setIndex(s.realIndex)
          }}
          onSwiper={setSwiper}
        >
          {quotesInner.map(
            (quote, i) =>
              quote && (
                <SwiperSlide
                  virtualIndex={i}
                  key={quote.id}
                >
                  <QuoteCard
                    className="h-[100%]"
                    quote={quote}
                    onClick={() => {
                      setIndex(i)
                    }}
                    variant={i === activeIndex ? 'active' : undefined}
                  />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
      <CarouselDots className="dotList">
        {quotesInner.map((_, i) => (
          <CarouselDot
            key={i}
            $selected={i === activeIndex}
            onClick={() => {
              setIndex(i)
            }}
          />
        ))}
      </CarouselDots>
    </QuotesCarouselFC>
  )
}

export function TestimonialsSection({
  quotes,
  ...props
}: Merge<
  Omit<ComponentProps<typeof StandardPageWidth>, 'children'>,
  { quotes?: QuoteFragment[] | null }
>) {
  return (
    <StandardPageWidth {...props}>
      <Heading1 className="mb-xxlarge md:mb-xxxxlarge text-center">
        What companies are saying about Plural
      </Heading1>
      <QuotesCarousel quotes={quotes} />
    </StandardPageWidth>
  )
}
