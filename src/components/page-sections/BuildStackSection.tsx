import {
  type ComponentProps,
  type Ref,
  forwardRef,
  useRef,
  useState,
} from 'react'

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
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { appUrl, stackUrl } from '@src/consts/routes'

import { type getStackTabData } from '../../data/getStackTabData'
import { AppCard, StackCard } from '../AppOrStackCard'
import { Cta, ResponsiveText } from '../Typography'

export default function BuildStackSection({
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
        <StandardPageWidth className="py-xxxxxlarge columns:py-xxxxxxlarge">
          <div className="mb-xxlarge text-center">
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
              className="grid grid-cols-1 gap-large md:grid-cols-3"
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
        </StandardPageWidth>
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
