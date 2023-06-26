import { type ComponentProps, type PropsWithChildren } from 'react'

import { CaretRightIcon, Chip, StackIcon } from '@pluralsh/design-system'
import Link from 'next/link'

import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { type MinStack } from '@src/data/getStacks'

import { AppBody1, Heading1, Label } from '../Typography'

const knownStacks = new Set(['data', 'devops', 'security', 'observability'])

function HeroThing({
  imgPrefix,
  imgSuffix,
  children,
}: PropsWithChildren<{
  imgPrefix: string
  imgSuffix: string
}>) {
  return (
    <HeroStyles
      $bgPrefix={imgPrefix}
      $bgSuffix={imgSuffix}
    >
      <div className="contentWrap">{children}</div>
    </HeroStyles>
  )
}

const HeroStyles = styled.div<{
  $bgPrefix: string
  $bgSuffix: string
}>(({ theme, $bgPrefix, $bgSuffix }) => ({
  backgroundImage: `url(${$bgPrefix}-sm${$bgSuffix})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
  borderRadius: theme.borderRadiuses.large,
  border: theme.borders['fill-one'],
  overflow: 'hidden',
  display: 'flex',
  minHeight: '454px',
  '& > *': { flexShrink: 0 },
  '.contentWrap': {
    width: '100%',
    zIndex: 1,
  },
  [mqs.sm]: {
    backgroundImage: `url(${$bgPrefix}-md${$bgSuffix})`,
    backgroundPosition: 'right center',
    minHeight: '303px',
  },
  // [mqs.md]: {
  //   backgroundImage: `url(${$bgPrefix}-lg${$bgSuffix})`,
  //   backgroundPosition: 'center center',
  // },
  [mqs.lg]: {
    backgroundImage: `url(${$bgPrefix}-xl${$bgSuffix})`,
    backgroundPosition: 'right center',
  },
  // [mqs.xl]: {
  //   backgroundImage: `url(${$bgPrefix}-lg${$bgSuffix})`,
  //   backgroundPosition: 'center center',
  // },
  [mqs.max]: {
    backgroundImage: `url(${$bgPrefix}-xl${$bgSuffix})`,
    backgroundPosition: 'right center',
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

export default function StackHero({ stack }: { stack: MinStack }) {
  const imgSrcPart = knownStacks.has(stack.name) ? stack.name : 'data'
  const numApps = stack?.collections?.[0]?.bundles?.length

  return (
    <HeroThing
      imgPrefix={`/images/marketplace/stack-card-${imgSrcPart}`}
      imgSuffix="@2x.jpg"
    >
      <div className="flex flex-col p-large gap-small">
        <div className="flex flex-row gap-medium">
          <div className="flex flex-col gap-xsmall grow">
            <Heading1>{stack.displayName}</Heading1>
            {numApps ? <Label>{numApps} Apps</Label> : null}
          </div>
          <div>
            <Chip
              severity="neutral"
              fillLevel={2}
              size="medium"
              icon={<StackIcon />}
            >
              Stack
            </Chip>
          </div>
        </div>
        <AppBody1 className="max-w-[320px]">{stack.description}</AppBody1>
        <Cta href={`/plural-stacks/${stack.name}`}>View stack</Cta>
      </div>
    </HeroThing>
  )
}
