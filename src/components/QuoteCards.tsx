import { type ComponentProps, type ReactNode, useEffect, useState } from 'react'

import styled, { useTheme } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { type Swiper as SwiperT } from 'swiper/types'
import 'swiper/css'

import { mqs } from '@src/breakpoints'

import { CarouselDot, CarouselDots } from './CarouselDots'
import useIndex from './hooks/useIndex'
import { StandardPage } from './layout/FullPage'
import { Heading1 } from './Typography'

type Quote = {
  quote?: ReactNode | string
  company?: string
  logoUrl?: string
  name?: string
  title?: string
  portraitUrl?: string
}

export const DEFAULT_QUOTES = [
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
    quote:
      '“This is awesome. You saved me hours of further DevOps work for our v1 release. Just to say, I really love Plural.”',
    company: 'Modeo',
    logoUrl: 'logo-modeo.png',
    name: 'Ismael Goulani',
    title: 'CTO | Data Engineer at Modeo',
    portraitUrl: 'ismael-goulani.jpg',
  },

  {
    quote: (
      <>
        “Wow! First of all I want to say thank you for creating Plural! It
        solves a lot of problems coming from a non-DevOps background. You guys
        are amazing!”
      </>
    ),
    company: 'Poplar Homes',
    logoUrl: 'logo-poplar.png',
    name: 'Joey Taleño',
    title: 'Head of Data at Poplar Homes',
    portraitUrl: 'joey-taleno.jpg',
  },

  {
    quote: (
      <>
        “We have been using Plural for complex Kubernetes deployments of
        Kubeflow and are excited with the possibilities it provides in making
        our workflows simpler and more efficient. ”
      </>
    ),
    company: 'Alexander Thamm',
    logoUrl: 'logo-alexander-thamm.png',
    name: 'Jürgen Stary',
    title: 'Engineering Manager @ Alexander Thamm',
    portraitUrl: 'jurgen-stary.jpg',
  },
  {
    quote: (
      <>
        “Plural has been awesome, it’s super fast and intuitive to get going and
        there is zero-to-no overhead of the app management.”
      </>
    ),
    company: 'Commandbar',
    logoUrl: 'logo-commandbar.png',
    name: 'Richard Freling',
    title: 'CTA and Co-Founder at Commandbar',
    portraitUrl: 'richard-freling.jpg',
  },
] as const satisfies readonly Quote[]

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
          <div
            aria-hidden
            className="portrait"
            style={{ backgroundImage: `url(${dir}/${portraitUrl})` }}
          />
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

export const QuotesCarousel = styled(
  ({
    quotes = DEFAULT_QUOTES,
    ...props
  }: { quotes?: typeof DEFAULT_QUOTES } & ComponentProps<'div'>) => {
    // const [activeIndex, setActiveIndex] = useState(0)
    const theme = useTheme()
    const [swiper, setSwiper] = useState<SwiperT | null>(null)
    const {
      activeIndex: activeI,
      setIndex,
      goForward,
    } = useIndex(quotes.length, 0, true)

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

    const quotesInner = quotes

    return (
      <div {...props}>
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
            {quotesInner.map((quote, i) => (
              <SwiperSlide
                virtualIndex={i}
                key={`${quote.company}-${quote.name}`}
              >
                <QuoteCard
                  className="h-[100%]"
                  {...quote}
                  onClick={() => {
                    setIndex(i)
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
              key={i}
              $selected={i === activeIndex}
              onClick={() => {
                setIndex(i)
              }}
            />
          ))}
        </CarouselDots>
      </div>
    )
  }
)(({ theme }) => ({
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

export function TestimonialsSection() {
  return (
    <StandardPage>
      <div className="my-xxxxxlarge">
        <Heading1 className="mb-xxlarge md:mb-xxxxlarge text-center">
          What companies are saying about Plural
        </Heading1>
        <QuotesCarousel />
      </div>
    </StandardPage>
  )
}
