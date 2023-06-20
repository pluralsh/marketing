import { useRef, useState } from 'react'
import { type ComponentProps, type Ref, forwardRef } from 'react'

import {
  AppIcon,
  Chip,
  ColorModeProvider,
  StackIcon,
  type TabBaseProps,
  TabList,
  TabPanel,
} from '@pluralsh/design-system'
import { Button } from 'honorable'
import Link from 'next/link'

import styled from 'styled-components'

import { FullPage } from '@pages/_app'
import { mqs } from '@src/breakpoints'
import { type getRepos } from '@src/data/getRepos'
import { type getStacks } from '@src/data/getStacks'

import { ResponsiveText } from './Typography'

export const getStackTabData = ({
  repos,
  stacks,
}: {
  repos?: Awaited<ReturnType<typeof getRepos>> | null
  stacks?: Awaited<ReturnType<typeof getStacks>> | null
}) => {
  console.log('getStackTabData')

  return [
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
}

export default function BuildStack({
  tabs,
}: {
  tabs: ReturnType<typeof getStackTabData>
}) {
  const tabStateRef = useRef<any>()
  const [curTabKey, setCurTabKey] = useState('data')
  const curTab = tabs.find((tab) => tab.key === curTabKey)

  console.log('curTabKey', curTabKey)
  console.log('curTab', curTab)
  console.log('tabs', tabs)

  return (
    <ColorModeProvider mode="light">
      <div className="bg-fill-zero">
        <FullPage className="py-xxxxlarge columns:py-xxxx">
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
                <BuildStackCard
                  $variant="stack"
                  key={`stack-${stack.name}`}
                  href={`/plural-stacks/${stack.name}`}
                >
                  <div className="stackTitleBox">
                    <div className="title"> {stack.displayName}</div>
                    <div>
                      <Chip
                        size="small"
                        icon={<StackIcon />}
                      >
                        Stack
                      </Chip>
                    </div>
                  </div>
                  <div className="stackApps">
                    {(stack.collections?.[0]?.bundles || []).map((b) => {
                      console.log('b', b)
                      const repo = b?.recipe.repository

                      return (
                        <AppIcon
                          size="xxsmall"
                          url={repo?.icon || repo?.darkIcon || ''}
                        />
                      )
                    })}
                  </div>
                </BuildStackCard>
              ))}

              {curTab?.apps?.map((app) => {
                console.log('app', app)

                return (
                  <BuildStackCard
                    $variant="app"
                    key={`app-${app.name}`}
                    href={`/applications/${app.name}`}
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
                  </BuildStackCard>
                )
              })}
            </TabPanel>
          </div>
        </FullPage>
      </div>
    </ColorModeProvider>
  )
}

const BuildStackCard = styled(Link)<{ $variant: 'app' | 'stack' }>(
  ({ theme, $variant = 'app' }) => ({
    display: 'flex',
    rowGap: theme.spacing.xxsmall,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing.large,
    paddingBottom: $variant === 'stack' ? theme.spacing.small : undefined,
    backgroundColor: theme.colors['fill-one'],
    color: theme.colors.text,
    borderRadius: theme.borderRadiuses.large,
    boxShadow: `0px 1px 3px rgba(74, 81, 242, 0.04), 0px 2px 10px rgba(74, 81, 242, 0.04)`,
    '&:hover': {
      boxShadow: `0px 2px 7px 1px rgba(74, 81, 242, 0.1), 0px 2px 10px rgba(74, 81, 242, 0.08)`,
    },
    '.stackTitleBox, .appBox': {
      display: 'flex',
      gap: theme.spacing.small,
    },
    '.stackApps': {
      display: 'flex',
      gap: theme.spacing.xxsmall,
    },
    '.appTitleBox': {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      overflow: 'hidden',
    },
    '.title': {
      ...theme.partials.text.title2,
      color: theme.colors.text,
      overflow: 'hidden',
      flexShrink: 1,
      flexGrow: 1,
      textOverflow: 'ellipsis',
    },
    '.category': {
      ...theme.partials.text.caption,
      color: theme.colors['text-light'],
    },
  })
)

const StackTabList = styled(TabList)<{ $active: boolean }>(({ theme }) => ({
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
            backgroundColor: theme.colors['action-link-inline-visited'],
            border: `1px solid ${theme.colors['action-link-inline-visited']}`,
            color: theme.colors.grey[50],
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
