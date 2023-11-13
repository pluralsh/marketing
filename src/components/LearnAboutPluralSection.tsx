import { type ComponentProps, type ReactNode, useEffect, useState } from 'react'

import Link from 'next/link'

import styled, { useTheme } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { type Swiper as SwiperT } from 'swiper/types'
import { type Merge } from 'type-fest'
import 'swiper/css'

import { mqs } from '@src/breakpoints'

import { CarouselDot, CarouselDots } from './CarouselDots'
import useIndex from './hooks/useIndex'
import { StandardPageWidth } from './layout/LayoutHelpers'
import { Heading1 } from './Typography'

type ContentType = {
  title?: ReactNode
  body?: ReactNode
  image?: string
  href: string
}

const LearnAboutCardSC = styled(Link)<{ $variant: 'default' | 'active' }>(
  ({ theme }) => ({
    boxSizing: 'border-box',
    borderRadius: theme.borderRadiuses.large,
    transition: 'all 0.5s ease',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    cursor: 'pointer',
    '.title': {
      ...theme.partials.marketingText.body1Bold,
      color: theme.colors.text,
      [mqs.md]: {
        ...theme.partials.marketingText.title2,
      },
    },
    '.content': {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.medium,
      paddingTop: theme.spacing.xlarge,
      paddingBottom: theme.spacing.xlarge,
      paddingLeft: theme.spacing.large,
      paddingRight: theme.spacing.large,
    },
    '.body': {
      ...theme.partials.marketingText.body1,
      color: theme.colors.text,
      [mqs.md]: {
        ...theme.partials.marketingText.body1,
      },
    },
    '.image': {
      flexGrow: 1,
      ...theme.partials.marketingText.title2,
      img: {
        width: '100%',
      },
    },
    '&:hover': {
      background: theme.colors['action-primary'],
      '.title': {
        textDecoration: 'underline',
      },
    },

    background: theme.colors['fill-three'],
  })
)

export function LearnAboutCard({
  image,
  title,
  body,
  href,
  variant = 'default',
  ...props
}: {
  variant?: 'active' | 'default'
} & ContentType &
  ComponentProps<typeof LearnAboutCardSC>) {
  return (
    <LearnAboutCardSC
      $variant={variant}
      {...props}
      href={href}
      target="_blank"
    >
      <div className="image">
        <img src={image} />
      </div>

      <div className="content">
        {title && <h3 className="title">{title}</h3>}
        {body && <p className="body">{body}</p>}
      </div>
    </LearnAboutCardSC>
  )
}

const CarouselFC = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: theme.spacing.medium,
  paddingRight: theme.spacing.medium,
  paddingBottom: theme.spacing.xlarge,
  paddingTop: theme.spacing.xlarge,
  '.swiper': {
    overflow: 'visible',
    maxWidth: 'none',
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

export function Carousel({
  contentList,
  ...props
}: Merge<
  ComponentProps<typeof CarouselFC>,
  {
    contentList?: (ContentType | null | undefined)[] | null
  }
>) {
  const theme = useTheme()
  const [swiper, setSwiper] = useState<SwiperT | null>(null)
  const { activeIndex: activeI, setIndex } = useIndex(
    contentList?.length || 0,
    0,
    true
  )

  const activeIndex = activeI ?? 0

  useEffect(() => {
    if (activeIndex !== swiper?.realIndex) {
      swiper?.slideToLoop(activeIndex)
    }
  }, [activeIndex, swiper])

  if (!contentList) return null

  return (
    <CarouselFC {...props}>
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
          {contentList.map(
            (content, i) =>
              content && (
                <SwiperSlide
                  virtualIndex={i}
                  key={content.href}
                >
                  <LearnAboutCard
                    className="h-[100%]"
                    {...content}
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
        {contentList.map((_, i) => (
          <CarouselDot
            key={i}
            $selected={i === activeIndex}
            onClick={() => {
              setIndex(i)
            }}
          />
        ))}
      </CarouselDots>
    </CarouselFC>
  )
}

const contentList: ContentType[] = [
  {
    title: 'Product documentation',
    image: '/images/homepage/learn-more/product-documentation.png',
    body: 'Learn how to provision infrastructure and automate delivery with Plural CD.',
    href: 'https://docs.plural.sh/',
  },
  {
    title: 'Product roadmap',
    image: '/images/homepage/learn-more/product-roadmap.png',
    body: 'See our latest feature releases, bug fixes, and improvements.',
    href: 'https://github.com/orgs/pluralsh/projects/2/views/2',
  },
  {
    title: 'Blog articles',
    image: '/images/homepage/learn-more/blog-articles.png',
    body: 'See our latest feature releases, bug fixes, and improvements.',
    href: 'https://plural.sh/blog',
  },
]

export function LearnAboutPluralSection({
  ...props
}: Omit<ComponentProps<typeof StandardPageWidth>, 'children'>) {
  return (
    <StandardPageWidth {...props}>
      <Heading1 className="mb-xxlarge md:mb-xxxxlarge text-center">
        Learn more about Plural
      </Heading1>
      <Carousel contentList={contentList} />
    </StandardPageWidth>
  )
}
