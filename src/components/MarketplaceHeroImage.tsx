import { type ComponentProps, type PropsWithChildren } from 'react'

import { CaretRightIcon } from '@pluralsh/design-system'
import Link from 'next/link'

import styled from 'styled-components'

import { mqs } from '@src/breakpoints'

const SIZES = ['sm', 'md', 'lg', 'xl']

function HeroThing({
  imgPrefix,
  imgSuffix,
  children,
}: PropsWithChildren<{
  imgPrefix: string
  imgSuffix: string
}>) {
  return (
    <HeroStyles bgImg={`${imgPrefix}-sm${imgSuffix}`}>
      <div className="contentWrap">{children}</div>
      {SIZES.map((size) => (
        <picture>
          <img
            className={`hero_img hero_img_${size}`}
            aria-hidden="true"
            src={`${imgPrefix}-${size}${imgSuffix}`}
          />
        </picture>
      ))}
    </HeroStyles>
  )
}

const HeroStyles = styled.div<{ bgImg: string }>(({ theme, bgImg }) => ({
  background: bgImg ? `url(${bgImg})` : undefined,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  borderRadius: theme.borderRadiuses.large,
  border: theme.borders['fill-one'],
  overflow: 'hidden',
  display: 'flex',
  minHeight: '540px',
  '& > *': { flexShrink: 0 },
  h1: {
    margin: 0,
    marginBottom: theme.spacing.xsmall,
  },
  '.contentWrap': {
    width: '100%',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  picture: {
    display: 'contents',
  },

  //
  // Responsive hide/reveal classes
  //
  '.hero_img': {
    display: 'none',
    width: '100%',
    transform: 'translateX(-100%)',
    zIndex: 0,
  },
  // '.hero_img_sm': {
  //   display: 'block',
  //   opacity: 0,
  //   maxHeight: 540,
  // },
  [mqs.sm]: {
    minHeight: 'unset',
    '.hero_img': {
      display: 'none',
    },
    '.hero_img_md': {
      display: 'block',
    },
  },
  [mqs.xl]: {
    '.hero_img': {
      display: 'none',
    },
    '.hero_img_lg': {
      display: 'block',
    },
  },
  [mqs.maxWidth]: {
    '.hero_img': {
      display: 'none',
    },
    '.hero_img_xl': {
      display: 'block',
    },
  },
}))

export const Cta = styled(CtaUnstyled)(({ theme }) => ({
  ...theme.partials.marketingText.standaloneLink,
  fontSize: 12,
  display: 'flex',
  flexDirection: 'row',
  columnGap: theme.spacing.small,
  paddingTop: theme.spacing.xsmall,
  paddingBottom: theme.spacing.xsmall,
  '._chevron': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

function CtaUnstyled({ children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link {...props}>
      <div>{children}</div>
      <div className="_chevron">
        <CaretRightIcon size={12} />
      </div>
    </Link>
  )
}

export default function MarketplaceHeroImage() {
  return (
    <HeroThing
      imgPrefix="/images/marketplace/stack-card-data"
      imgSuffix="@2x.jpg"
    >
      <p className="body1 mb- m-0">
        A curated stack of apps to help you integrate, orchestrate, and analyze
        your data.
      </p>
      <Cta href="/plural-stacks/data">View stack</Cta>
    </HeroThing>
  )
}
