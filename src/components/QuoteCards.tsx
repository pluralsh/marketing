import {
  type ComponentProps,
  type ReactElement,
  cloneElement,
  useEffect,
  useState,
} from 'react'

import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { type Swiper as SwiperT } from 'swiper/types'

import { type QuoteFragment } from '@src/generated/graphqlDirectus'

import {
  CarouselArrow,
  CarouselDot,
  CarouselDots,
  CarouselDotsWrapperSC,
} from './CarouselDots'
import useIndex from './hooks/useIndex'

export type QuoteElementProps = {
  quote?: QuoteFragment
  variant?: 'default' | 'active'
  onClick?: () => void
}

const QuotesCarouselSC = styled.div((_) => ({
  display: 'flex',
  flexDirection: 'column',
  '.swiper': {
    height: '100%',
    width: '100%',
  },
}))

export function QuotesCarousel({
  quotes,
  quoteElement,
  showArrows = true,
  ...props
}: ComponentProps<typeof QuotesCarouselSC> & {
  quotes?: Nullable<QuoteFragment>[]
  quoteElement: ReactElement<QuoteElementProps & Record<string, any>>
  showArrows?: boolean
}) {
  const [swiper, setSwiper] = useState<SwiperT | null>(null)
  const {
    activeIndex: activeI,
    setIndex,
    goForward,
    goBack,
    atEnd,
    atStart,
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
    <QuotesCarouselSC {...props}>
      <Swiper
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
                {cloneElement(quoteElement, {
                  quote,
                  onClick: () => {
                    setIndex(i)
                  },
                  variant: i === activeIndex ? 'active' : undefined,
                })}
              </SwiperSlide>
            )
        )}
      </Swiper>
      <CarouselDots>
        {showArrows && !atStart && (
          <CarouselArrow
            $direction="left"
            onClick={goBack}
          />
        )}
        <CarouselDotsWrapperSC className="dotList">
          {quotesInner.map((_, i) => (
            <CarouselDot
              key={i}
              $selected={i === activeIndex}
              onClick={() => {
                setIndex(i)
              }}
            />
          ))}
        </CarouselDotsWrapperSC>
        {showArrows && !atEnd && (
          <CarouselArrow
            $direction="right"
            onClick={goForward}
          />
        )}
      </CarouselDots>
    </QuotesCarouselSC>
  )
}
