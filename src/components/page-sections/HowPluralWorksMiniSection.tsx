import {
  type ComponentProps,
  type ReactElement,
  type ReactNode,
  cloneElement,
} from 'react'

import {
  ApiIcon,
  BrowseAppsIcon,
  CliIcon,
  PadlockLockedIcon,
} from '@pluralsh/design-system'

import classNames from 'classnames'
import styled from 'styled-components'
import { type Merge } from 'type-fest'

import { mqs } from '@src/breakpoints'

import { Columns, EqualColumn } from '../layout/Columns'
import { StandardPageSection, StandardPageWidth } from '../layout/LayoutHelpers'
import { TextLimiter } from '../layout/TextLimiter'
import { SubsectionHead } from '../SectionHeads'
import { Body1, Body2, Cta, ResponsiveText } from '../Typography'
import { ValueCardIconSC } from '../ValueCard'

const HowWorksInfoSC = styled.div(({ theme }) => ({
  rowGap: theme.spacing.medium,
  textWrap: 'balance',
  '&, .text': {
    display: 'flex',
    flexDirection: 'column',
  },
  '.icon': {
    display: 'flex',
  },
  '.text': {
    rowGap: theme.spacing.xsmall,
  },
  [mqs.md]: {
    maxWidth: 300,
  },
}))

function HowWorksInfo({
  icon,
  heading,
  children,
  ...props
}: Merge<
  ComponentProps<typeof HowWorksInfoSC>,
  {
    icon: ReactElement
    heading: ReactNode
    children: ReactNode
  }
>) {
  const iconClone = cloneElement(icon, { size: 22 })

  return (
    <HowWorksInfoSC {...props}>
      <div className="icon">
        <ValueCardIconSC>{iconClone}</ValueCardIconSC>
      </div>
      <div className="text">
        <ResponsiveText textStyles={{ '': 'mSubtitle2' }}>
          {heading}
        </ResponsiveText>
        <Body2 color="text-xlight">{children}</Body2>
      </div>
    </HowWorksInfoSC>
  )
}

export function HowPluralWorksMiniSection() {
  return (
    <StandardPageSection className="bg-fill-zero overflow-hidden">
      <div className={classNames('relative flex flex-col gap-y-xxxlarge')}>
        <StandardPageWidth className="columns:basis-1/2">
          <Columns
            className={classNames('gap-y-large', 'columns:items-center')}
          >
            <EqualColumn
              className={classNames(
                'flex flex-col gap-y-xxxlarge',
                'max-w-[380px] sm:max-w-[540px] mx-auto columns:max-w-[unset]'
              )}
            >
              <TextLimiter className="flex flex-col gap-y-large md:gap-y-xlarge">
                <SubsectionHead heading="How Plural works" />
                <Body1 color="text-xlight">
                  We make it easy to securely deploy and manage open-source
                  applications in your cloud.
                </Body1>
              </TextLimiter>
              <div
                className={classNames(
                  'grid grid-cols-1',
                  'sm:grid-cols-2',
                  'gap-y-xxlarge sm:gap-y-xxxlarge',
                  'gap-x-xxlarge justify-between'
                )}
              >
                <HowWorksInfo
                  heading="Select from 90+ open-source applications"
                  icon={<BrowseAppsIcon />}
                >
                  Get any stack you want running in minutes, and never think
                  about upgrades again.
                </HowWorksInfo>
                <HowWorksInfo
                  heading="Securely deployed on your cloud with your git"
                  icon={<PadlockLockedIcon />}
                >
                  You control everything. No need to share your cloud account,
                  keys or data.
                </HowWorksInfo>
                <HowWorksInfo
                  heading="Designed to be fully customizable"
                  icon={<CliIcon />}
                >
                  Built on Kubernetes and using standard infrastructure as code
                  with Terraform and Helm.
                </HowWorksInfo>
                <HowWorksInfo
                  heading="Maintain & Scale with Plural Console"
                  icon={<ApiIcon />}
                >
                  Interactive runbooks, dashboards, and Kubernetes api
                  visualizers give an easy-to-use toolset to manage application
                  operations.{' '}
                </HowWorksInfo>
              </div>
              <Cta href="/product">Learn more</Cta>
            </EqualColumn>
            <EqualColumn />
          </Columns>
        </StandardPageWidth>
        <SomethingSC>
          <img
            alt="Screenshot of app installation in Plural app"
            src="/images/how-plural-works/how-plural-works-screen.png"
          />
        </SomethingSC>
      </div>
    </StandardPageSection>
  )
}

const SomethingSC = styled.div(({ theme }) => ({
  [mqs.columns]: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    width: '50%',
    top: 0,
    right: 0,
    bottom: 0,
    paddingLeft: theme.spacing.large,
    img: {
      display: 'block',
      width: '100%',
      maxWidth: 1024,
    },
  },
}))
