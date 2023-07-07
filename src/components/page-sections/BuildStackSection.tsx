import { useRef, useState } from 'react'
import { type ComponentProps, type Ref, forwardRef } from 'react'

import {
  AppIcon,
  ColorModeProvider,
  type TabBaseProps,
  TabList,
  TabPanel,
} from '@pluralsh/design-system'
import { Button } from 'honorable'
import Link from 'next/link'

import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { StandardPage } from '@src/components/layout/FullPage'
import { appUrl, stackUrl } from '@src/consts/routes'
import { type getRepos } from '@src/data/getRepos'
import { type getStacks } from '@src/data/getStacks'

import { AppCard, StackCard } from '../AppOrStackCard'
import { Cta, ResponsiveText } from '../Typography'

export const getStackTabData = ({
  repos,
  stacks,
}: {
  repos?: Awaited<ReturnType<typeof getRepos>> | null
  stacks?: Awaited<ReturnType<typeof getStacks>> | null
}) => [
  {
    label: 'Data',
    key: 'data',
    stacks: stacks?.filter((stack) => ['data'].includes(stack.name)),
    apps: repos?.filter((repo) =>
      [
        'airbyte',
        'dagster',
        'growthbook',
        'clickhouse',
        'datahub',
        'posthog',
        'jitsu',
        'lightdash',
      ].includes(repo.name)
    ),
  },
  {
    label: 'DevOps',
    key: 'devops',
    stacks: stacks?.filter((stack) => ['devops'].includes(stack.name)),
    apps: repos?.filter((repo) =>
      [
        'argo-cd',
        'sentry',
        'grafana',
        'kubecost',
        'bytebase',
        'jenkins',
        'istio',
        'kubeflow',
      ].includes(repo.name)
    ),
  },
  {
    label: 'Security',
    key: 'security',
    stacks: stacks?.filter((stack) => ['security'].includes(stack.name)),
    apps: repos?.filter((repo) =>
      ['kubescape', 'istio', 'vault', 'hydra', 'oauth2-proxy'].includes(
        repo.name
      )
    ),
  },
]

export default function BuildStack({
  tabs,
}: {
  tabs: ReturnType<typeof getStackTabData>
}) {
  const tabStateRef = useRef<any>()
  const [curTabKey, setCurTabKey] = useState('data')
  const curTab = tabs.find((tab) => tab.key === curTabKey)

  return (
    <ColorModeProvider mode="light">
      <div className="bg-fill-zero">
        <StandardPage className="py-xxxxlarge columns:py-xxxx">
          <div className="text-center mb-xxlarge">
            <ResponsiveText
              textStyles={{ '': 'mTitle2', md: 'mTitle1', xxl: 'mHero2' }}
            >
              Build your custom stack with Plural
            </ResponsiveText>
            <ResponsiveText
              as="p"
              color="text-light"
              textStyles={{ '': 'mBody2' }}
            >
              Build your custom stack with over 90+ apps in the Plural
              Marketplace.
            </ResponsiveText>
          </div>
          <div className="">
            <StackTabList
              className="mb-large"
              stateRef={tabStateRef}
              stateProps={{
                orientation: 'horizontal',
                selectedKey: curTabKey,
                onSelectionChange: (key) => setCurTabKey(key as string),
              }}
            >
              {tabs.map((tab) => (
                <StackTab key={tab.key}>{tab.label}</StackTab>
              ))}
            </StackTabList>
            <TabPanel
              stateRef={tabStateRef}
              className="grid gap-large grid-cols-1 md:grid-cols-3"
            >
              {curTab?.stacks?.map((stack) => (
                <StackCard
                  as={Link}
                  stack={stack}
                  key={`stack-${stack.name}`}
                  href={stackUrl(stack.name)}
                />
              ))}

              {curTab?.apps?.map((app) => (
                <AppCard
                  as={Link}
                  app={app}
                  key={`app-${app.name}`}
                  href={appUrl(app.name)}
                >
                  <div className="appBox">
                    <AppIcon
                      size="xsmall"
                      url={app.icon || app.darkIcon || ''}
                    />
                    <div className="appTitleBox">
                      <div className="title"> {app.displayName}</div>
                      <div className="category">{app.category}</div>
                    </div>
                  </div>
                </AppCard>
              ))}
            </TabPanel>
            <Cta
              className="mt-large"
              href="/marketplace"
            >
              Explore the Marketplace
            </Cta>
          </div>
        </StandardPage>
      </div>
    </ColorModeProvider>
  )
}

const StackTabList = styled(TabList)(({ theme }) => ({
  // '&&': {
  justifyContent: 'center',
  gap: theme.spacing.xxsmall,
  [mqs.sm]: {
    gap: theme.spacing.xsmall,
  },
  [mqs.md]: {
    gap: theme.spacing.large,
  },
  // },
}))

type StackTabProps = TabBaseProps & ComponentProps<'div'>

const StackTabBase = styled(Button)<{ $active: boolean }>(
  ({ theme, $active }) => ({
    '&&, &&:focus-visible': {
      ...($active
        ? {
            '&, &:hover': {
              backgroundColor: theme.colors['action-link-inline-visited'],
              border: `1px solid ${theme.colors['action-link-inline-visited']}`,
              color: theme.colors.grey[50],
            },
          }
        : {}),
      [mqs.sm]: {
        fontSize: 14,
        padding: `${theme.spacing.xsmall}px ${theme.spacing.medium}px`,
      },
      [mqs.md]: {
        fontSize: 16,
        padding: `${theme.spacing.small}px ${theme.spacing.large}px`,
      },
    },
  })
)

const StackTab = forwardRef(
  (
    { active, children, textValue: _textValue, ...props }: StackTabProps,
    ref: Ref<any>
  ) => (
    <StackTabBase
      small
      secondary
      $active={active}
      ref={ref}
      {...props}
    >
      {children || _textValue}
    </StackTabBase>
  )
)
