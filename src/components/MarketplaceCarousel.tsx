import {
  Children,
  type ComponentProps,
  type ReactNode,
  useEffect,
  useState,
} from 'react'

import { Button, CaretRightIcon } from '@pluralsh/design-system'
import { type ButtonProps } from 'honorable'

import { useVisuallyHidden } from '@react-aria/visually-hidden'
import styled, { useTheme } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { type Swiper as SwiperT } from 'swiper/types'

import { mqs } from '@src/breakpoints'

import { CarouselDot, CarouselDots } from './CarouselDots'

const switchMQ = mqs.sm

function CarouselUnstyled({ children, ...props }: { children: ReactNode }) {
  const [selected, setSelected] = useState(0)
  const count = Children.count(children)

  const dots = Children.map(children, (_, i) => (
    <CarouselDot
      onClick={() => {
        setSelected(i)
      }}
      $selected={i === selected}
    />
  ))

  return (
    <div {...props}>
      <ItemsWrap style={{ translate: `-${100 * selected}%` }}>
        {Children.map(children, (child, i) => (
          <ItemWrap
            key={i}
            style={{
              ...(i !== 0 ? { position: 'absolute', top: 0, left: 0 } : {}),
              transform: `translate(${100 * i}%)`,
            }}
          >
            {child}
          </ItemWrap>
        ))}
      </ItemsWrap>
      <InterfaceOverlay>
        <Dots className="absolute">{dots}</Dots>
        <Buttons>
          <NavButton
            direction="left"
            disabled={selected === 0}
            onClick={() => {
              setSelected(Math.max(0, selected - 1))
            }}
          />
          <NavButton
            direction="right"
            disabled={selected === count - 1}
            onClick={() => {
              setSelected(Math.min(count - 1, selected + 1))
            }}
          />
        </Buttons>
      </InterfaceOverlay>
    </div>
  )
}

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

export const Carousel = styled(CarouselUnstyled)((_) => ({
  position: 'relative',
  overflow: 'hidden',
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

const OFFSET = 10

const Buttons = styled.div(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'start',
  paddingTop: '208px',
  justifyContent: 'space-between',
  [switchMQ]: {
    paddingTop: 'unset',
    gap: theme.spacing.medium,
    justifyContent: 'end',
    alignItems: 'end',
  },
}))

const ItemWrap = styled.div((_) => ({
  width: '100%',
  paddingLeft: OFFSET,
  paddingRight: OFFSET,
}))

const ItemsWrap = styled.div((_) => ({
  position: 'relative',
  marginLeft: -OFFSET,
  marginRight: -OFFSET,
  transition: 'all 0.7s ease',
}))

const Dots = styled(CarouselDots)((_) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'end',
  justifyContent: 'center',
  [switchMQ]: {
    justifyContent: 'start',
  },
}))

export const MarketplaceCarousel = styled(
  ({ children, ...props }: ComponentProps<'div'>) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const theme = useTheme()
    const [swiper, setSwiper] = useState<SwiperT | null>(null)

    useEffect(() => {
      if (swiper?.activeIndex !== activeIndex) {
        swiper?.slideTo(activeIndex)
      }
    }, [activeIndex, swiper])

    const count = Children.count(children)
    const dots = Children.map(children, (child, i) => (
      <CarouselDot
        onClick={() => {
          setActiveIndex(i)
        }}
        $selected={i === activeIndex}
      />
    ))

    console.log('activeIndex', activeIndex)

    console.log('children', children)

    return (
      <div {...props}>
        <div>
          <Swiper
            loop
            spaceBetween={theme.spacing.large}
            slidesPerView={1}
            onSlideChange={(s) => {
              console.log('slidechangez', s.activeIndex)
              // setActiveIndex(s.activeIndex)
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
                if (swiper) {
                  swiper.slidePrev()
                }
                // setActiveIndex(activeIndex === 0 ? count - 1 : activeIndex - 1)
              }}
            />
            <NavButton
              direction="right"
              // disabled={activeIndex === count - 1}
              onClick={() => {
                setActiveIndex(Math.min(count - 1, activeIndex + 1))
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
