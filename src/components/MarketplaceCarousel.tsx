import { Children, type ComponentProps, useState } from 'react'

import { Button, CaretRightIcon } from '@pluralsh/design-system'
import { type ButtonProps } from 'honorable'

import { useVisuallyHidden } from 'react-aria'
import styled, { useTheme } from 'styled-components'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { type Swiper as SwiperT } from 'swiper/types'

import { mqs } from '@src/breakpoints'

import { CarouselDot, CarouselDots } from './CarouselDots'

const switchPointMQ = mqs.sm

const NavButton = styled(
  ({ direction, ...props }: { direction: 'left' | 'right' } & ButtonProps) => {
    const { visuallyHiddenProps } = useVisuallyHidden()

    return (
      <Button
        floating
        {...props}
      >
        <div
          className="icon"
          aria-hidden="true"
        >
          <CaretRightIcon />
        </div>
        <div {...visuallyHiddenProps}>{direction}</div>
      </Button>
    )
  }
)(({ direction }) => ({
  pointerEvents: 'auto',
  '&&': {
    width: 38,
  },
  '.icon': {
    display: 'flex',
    alignItems: 'center',
    transform: `scaleX(${direction === 'left' ? '-100%' : '100%'})`,
  },
}))

const InterfaceOverlay = styled.div(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing.large,
  left: theme.spacing.large,
  bottom: theme.spacing.large,
  right: theme.spacing.large,
  pointerEvents: 'none',
  zIndex: 1,
}))

const Buttons = styled.div(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'start',
  paddingTop: '208px',
  justifyContent: 'space-between',
  [switchPointMQ]: {
    paddingTop: 'unset',
    gap: theme.spacing.medium,
    justifyContent: 'end',
    alignItems: 'end',
  },
}))

const Dots = styled(CarouselDots)((_) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'end',
  justifyContent: 'center',
  [switchPointMQ]: {
    justifyContent: 'start',
  },
}))

export const MarketplaceCarousel = styled(
  ({ children, ...props }: ComponentProps<'div'>) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const theme = useTheme()
    const [swiper, setSwiper] = useState<SwiperT | null>(null)

    const dots = Children.map(children, (child, i) => (
      <CarouselDot
        onClick={() => {
          swiper?.slideToLoop(i)
        }}
        $selected={i === activeIndex}
      />
    ))

    return (
      <div {...props}>
        <div>
          <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 8000 }}
            spaceBetween={theme.spacing.large}
            slidesPerView={1}
            onSlideChange={(s) => {
              setActiveIndex(s.realIndex)
            }}
            onSwiper={setSwiper}
          >
            {Children.map(children, (child, i) => (
              <SwiperSlide key={i}>{child}</SwiperSlide>
            ))}
          </Swiper>
        </div>
        <InterfaceOverlay>
          <Dots className="absolute">{dots}</Dots>
          <Buttons>
            <NavButton
              direction="left"
              onClick={() => {
                swiper?.slidePrev()
              }}
            />
            <NavButton
              direction="right"
              onClick={() => {
                swiper?.slideNext()
              }}
            />
          </Buttons>
        </InterfaceOverlay>
      </div>
    )
  }
)(({ theme: _ }) => ({
  position: 'relative',
}))
