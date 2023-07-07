import { Chip, StackIcon, useNavigationContext } from '@pluralsh/design-system'

import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { stackUrl } from '@src/consts/routes'
import { type MinStack } from '@src/data/getStacks'

import { CardCta, CardCtaSC } from '../CardCta'
import { AppBody1, Heading1, Label } from '../Typography'

const knownStacks = new Set(['data', 'devops', 'security', 'observability'])

const StackHeroSC = styled.div<{
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
  [`&:hover ${CardCtaSC}`]: {
    textDecoration: 'underline',
  },
}))

export default function StackHero({ stack }: { stack: MinStack }) {
  const imgSrcPart = knownStacks.has(stack.name) ? stack.name : 'data'
  const numApps = stack?.collections?.[0]?.bundles?.length
  const { Link } = useNavigationContext()

  return (
    <StackHeroSC
      as={Link}
      href={stackUrl(stack.name)}
      $bgPrefix={`/images/marketplace/stack-card-${imgSrcPart}`}
      $bgSuffix="@2x.jpg"
    >
      <div className="contentWrap">
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
          <CardCta as="div">View stack</CardCta>
        </div>
      </div>
    </StackHeroSC>
  )
}
