import { type ComponentProps, type ReactNode, useEffect, useState } from 'react'

import styled, { useTheme } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { type Swiper as SwiperT } from 'swiper/types'
import 'swiper/css'

import { mqs } from '@src/breakpoints'

import { CarouselDot, CarouselDots } from './CarouselDots'

export const quotes = [
  {
    quote: (
      <>
        “We no longer needed a dedicated DevOps team; instead, we actively
        participated in the industrialization and deployment of our applications
        through Plural. Additionally, it allowed us to quickly gain proficiency
        in Terraform and Helm.”
      </>
    ),
    company: 'Beamy',
    logoUrl: 'logo-beamy.png',
    name: 'Walid El Bouchikhi',
    title: 'Data Engineer at Beamy',
    portraitUrl: 'walid-el-bouchikhi.jpg',
  },
  {
    quote: (
      <>
        “I have neither the patience nor the talent for DevOps/SysAdmin work,
        and yet I've deployed four enterprise-caliber open-source apps on
        Kubernetes... since 9am today. Bonkers.”
      </>
    ),
    company: 'Justifi',
    logoUrl: 'logo-justifi.png',
    name: 'Sawyer Waugh',
    title: 'Head of Engineering at Justifi',
    portraitUrl: 'sawyer-waugh.jpg',
  },
  {
    quote: (
      <>
        “This is awesome. You saved me hours of further DevOps work for our v1
        release. Just to say, I really love Plural.”
      </>
    ),
    company: 'Modeo',
    logoUrl: 'logo-modeo.png',
    name: 'Ismael Goulani',
    title: 'CTO | Data Engineer at Modeo',
    portraitUrl: 'ismael-goulani.jpg',
  },
]

export const QuoteCard = styled(
  ({
    quote,
    logoUrl,
    name,
    portraitUrl,
    title,
    company,
    variant: _variant,
    ...props
  }: {
    quote: ReactNode
    logoUrl: string
    name: string
    portraitUrl: string
    title: string
    company: string
    variant?: 'default' | 'active'
  } & ComponentProps<'div'>) => {
    const dir = '/images/quotes'

    return (
      <div {...props}>
        <div className="quote">{quote}</div>
        <div className="logo">
          <img
            src={`${dir}/${logoUrl}`}
            alt={company}
          />
        </div>
        <div className="attribution">
          <div className="portrait">
            <img src={`${dir}/${portraitUrl}`} />
          </div>
          <div className="nameTitle">
            <div className="name">{name}</div>
            <div className="title">{title}</div>
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
    width: 46,
    borderRadius: '50%',
    overflow: 'hidden',
  },
  backgroundColor:
    variant === 'active'
      ? theme.colors['action-primary']
      : theme.colors['fill-three'],
}))

export const QuotesCarousel = styled(({ ...props }: ComponentProps<'div'>) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const theme = useTheme()
  const [swiper, setSwiper] = useState<SwiperT | null>(null)

  useEffect(() => {
    if (swiper?.activeIndex !== activeIndex) {
      swiper?.slideTo(activeIndex)
    }
  }, [activeIndex, swiper])

  const quotesInner = [...quotes, ...quotes, ...quotes]

  return (
    <div {...props}>
      <div>
        <Swiper
          spaceBetween={theme.spacing.large}
          slidesPerView="auto"
          onSlideChange={(s) => {
            setActiveIndex(s.realIndex)
          }}
          onSwiper={setSwiper}
        >
          {quotesInner.map((quote, i) => (
            <SwiperSlide key={`${quote.company}-${quote.name}`}>
              <QuoteCard
                className="h-[100%]"
                {...quote}
                onClick={() => {
                  //   swiper?.slideTo(i)
                  setActiveIndex(i)
                }}
                variant={i === activeIndex ? 'active' : undefined}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <CarouselDots className="dotList">
        {quotesInner.map((_, i) => (
          <CarouselDot
            $selected={i === activeIndex}
            onClick={() => {
              swiper?.slideTo(i)
              setActiveIndex(i)
            }}
          />
        ))}
      </CarouselDots>
    </div>
  )
})(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  '.swiper': { overflow: 'visible' },
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
