import { useEffect, useRef, useState } from 'react'

import { Button, TabList, TabPanel } from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { until } from '@open-draft/until'
import { providerToProviderName } from '@pluralsh/design-system/dist/markdoc/utils/text'
import classNames from 'classnames'
import { isEmpty } from 'lodash-es'
import styled from 'styled-components'

import { CaseStudyFAQSection, RepoSocials } from '@pages/applications/[repo]'
import { directusClient } from '@src/apollo-client'
import { AppCard } from '@src/components/AppOrStackCard'
import { Checklist, ChecklistItem } from '@src/components/Checklist'
import Embed from '@src/components/Embed'
import { FooterVariant } from '@src/components/FooterFull'
import { StandardPage } from '@src/components/layout/FullPage'
import { GradientBG } from '@src/components/layout/GradientBG'
import { BackButton } from '@src/components/Nav'
import BuildStackSection, {
  getStackTabData,
} from '@src/components/page-sections/BuildStackSection'
import { getCaseStudyApps } from '@src/components/page-sections/CaseStudySection'
import { ProviderIcon } from '@src/components/ProviderIcon'
import { TestimonialsSection } from '@src/components/QuoteCards'
import {
  AppTitle,
  Body1,
  Body2,
  Cta,
  Overline,
  ResponsiveText,
  Title2,
} from '@src/components/Typography'
import { getProviderIcon, getStackMeta } from '@src/consts'
import { APPS_BASE_URL } from '@src/consts/routes'
import { type MinRepo, getRepos, normalizeRepo } from '@src/data/getRepos'
import { type FullStack, getFullStack, getStacks } from '@src/data/getStacks'
import {
  StackExtrasDocument,
  type StackExtrasFragment,
  type StackExtrasQuery,
  type StackExtrasQueryVariables,
} from '@src/generated/graphqlDirectus'
import {
  type MinRepoFragment,
  type StackCollectionFragment,
} from '@src/generated/graphqlPlural'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'
import { startsWithVowel, urlJoin } from '@src/utils/text'

import { CompanyLogosSection } from '../../src/components/CompanyLogos'
import { Columns, EqualColumn } from '../../src/components/layout/Columns'
import { HeaderPad } from '../../src/components/layout/HeaderPad'
import { TextLimiter } from '../../src/components/layout/TextLimiter'

const DEFAULT_HERO_VIDEO = 'https://www.youtube.com/watch?v=LOUshNTgPV0'

function isCollection(
  collection: StackCollectionFragment | null | undefined
): collection is StackCollectionFragment {
  return !!collection
}

const StackAppsTabList = styled(TabList)(({ theme }) => ({
  flexDirection: 'column',
  border: theme.borders['fill-two'],
  padding: theme.spacing.xsmall,
  rowGap: theme.spacing.xsmall,
  borderRadius: theme.borderRadiuses.medium,
}))

const StackAppsTabPanel = styled(TabPanel)((_) => ({}))

export default function Stack({
  stack,
  stackExtras,
  buildStackTabs,
  caseStudyApps,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const providers =
    stack?.collections?.filter(isCollection).map((collection) => ({
      key: collection.id,
      label:
        providerToProviderName[collection?.provider?.toUpperCase() || ''] ||
        collection.provider,
      // language: 'shell',
      // content: `plural stack install ${stack?.name}`,
      iconLight: getProviderIcon({
        provider: collection?.provider,
        mode: 'light',
      }),
      iconDark: getProviderIcon({
        provider: collection?.provider,
        mode: 'dark',
      }),
    })) || []

  const apps = stack?.collections?.[0]?.bundles
    ?.map((bundle) => bundle?.recipe.repository)
    .filter((repo): repo is MinRepoFragment => !!repo)
    .map((repo) => normalizeRepo(repo))

  const appsTabStateRef = useRef<any>()
  const [curAppTabKey, setCurTabKey] = useState(apps?.[0].name ?? '')
  const curApp = apps?.find((app) => app.name === curAppTabKey)

  useEffect(() => {
    if (!stack) {
      // router.push('/marketplace')
    }
  }, [stack, router])
  if (!stack) {
    return null
  }
  console.log('curTabKey', curAppTabKey)

  return (
    <HeaderPad as={GradientBG}>
      <StandardPage>
        <div className="py-[40px] md:pb-xxxlarge">
          <BackButton />
        </div>
        <Columns className="gap-y-xxlarge">
          <EqualColumn>
            <TextLimiter className="flex flex-col gap-xlarge">
              <AppTitle>
                Build {startsWithVowel(stack.displayName) ? 'an' : 'a'}{' '}
                {stack.displayName} Stack with Plural
              </AppTitle>
              <Body1 color="text-light">
                {stack.description}
                {/* Orchestrate all your applications to work in harmony with{' '}
                {repo.displayName} on Plural. */}
              </Body1>
              <div className="flex flex-col gap-medium">
                <Overline>Available providers</Overline>
                {!isEmpty(providers) && (
                  <div className="flex gap-small">
                    {providers.map((provider) => (
                      <ProviderIcon
                        key={provider.key}
                        label={provider.label}
                        iconLight={provider.iconLight}
                        iconDark={provider.iconDark}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="flex">
                <Button
                  className="flex-grow-0"
                  target="_blank"
                  as={Link}
                  href="https://app.plural.sh/shell"
                  primary
                >
                  Install with Plural
                </Button>
              </div>
            </TextLimiter>
          </EqualColumn>
          <EqualColumn>
            <Embed
              className="m-0 p-0"
              url={stackExtras?.heroVideo || DEFAULT_HERO_VIDEO}
              aspectRatio="16 / 9"
            />
          </EqualColumn>
        </Columns>
        <div
          className={classNames(
            'flex',
            'flex-col',
            // 'gap-large',
            'py-xxxxlarge',
            'xl:py-[192px]'
          )}
        >
          <Columns className="mb-small">
            <EqualColumn>
              <ResponsiveText
                color="text-xlight"
                textStyles={{ '': 'mLabel' }}
              >
                The stack
              </ResponsiveText>
            </EqualColumn>
            <EqualColumn />
          </Columns>
          <Columns className={classNames('gap-y-xxxlarge')}>
            <EqualColumn>
              <StackAppsTabList
                stateRef={appsTabStateRef}
                stateProps={{
                  orientation: 'vertical',
                  selectedKey: curAppTabKey,
                  onSelectionChange: (key) => setCurTabKey(key as string),
                }}
              >
                {apps?.map((repo) => {
                  console.log('repo', repo.name)

                  if (!repo || !repo.name) {
                    return null
                  }

                  return (
                    <AppCard
                      key={repo.name}
                      size="small"
                      app={repo}
                    >
                      {repo.name}
                    </AppCard>
                  )
                })}
              </StackAppsTabList>
            </EqualColumn>
            <EqualColumn>
              <StackAppsTabPanel
                className="flex flex-col gap-large"
                stateRef={appsTabStateRef}
              >
                <ResponsiveText
                  as="h3"
                  textStyles={{ '': 'mTitle1' }}
                  className="text-center md:text-left"
                >
                  About {curApp?.displayName}
                </ResponsiveText>
                <ResponsiveText
                  as="p"
                  color="text-xlight"
                  textStyles={{ '': 'mBody2' }}
                  className="text-center md:text-left"
                >
                  {curApp?.description}
                </ResponsiveText>
                <div className="flex flex-wrap flex-col items-center md:items-start md:flex-row gap-medium [&>*]:w-[max-content]">
                  <RepoSocials repo={curApp} />
                </div>
                <div className="flex">
                  <Button
                    as={Link}
                    secondary
                    className="flex-grow md:flex-grow-0"
                    href={urlJoin(APPS_BASE_URL, curApp?.name || '')}
                  >
                    Learn more about {curApp?.displayName}
                  </Button>
                </div>
              </StackAppsTabPanel>
            </EqualColumn>
          </Columns>
        </div>
      </StandardPage>
      <ProductValueSection
        name={stack.displayName}
        isStack
      />
      {buildStackTabs && <BuildStackSection tabs={buildStackTabs} />}
      <CompanyLogosSection className="mt-xxxxlarge" />
      <TestimonialsSection />
      <CaseStudyFAQSection caseStudyProps={{ apps: caseStudyApps }} />
    </HeaderPad>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  const stacks = (await getStacks()) || []

  return {
    paths: stacks.map((stack) => ({ params: { stack: stack?.name } })),
    fallback: true,
  }
}

export type StackPageProps = {
  stack?: FullStack | null
  stackExtras?: StackExtrasFragment
  buildStackTabs?: ReturnType<typeof getStackTabData>
  caseStudyApps: MinRepo[]
}

export const getStaticProps: GetStaticProps<StackPageProps> = async (
  context
) => {
  const stackName = context?.params?.stack

  if (!stackName || typeof stackName !== 'string') {
    return { notFound: true }
  }
  const { data: repos, error: reposError } = await until(() => getRepos())

  // const { data: repo, error: repoError } = await until(() =>
  //   getFullRepo(`${repoName}`)
  // )

  const { data: stacks, error: stacksError } = await until(() => getStacks())
  const { data: stack, error: stackError } = await until(() =>
    getFullStack(stackName)
  )

  const thisStack = stack // stacks?.find((r) => r.name === stackName)

  if (!thisStack || !stackName || typeof stackName !== 'string') {
    return { notFound: true }
  }

  const { data: stackData, error: appError } = await directusClient.query<
    StackExtrasQuery,
    StackExtrasQueryVariables
  >({
    query: StackExtrasDocument,
    variables: { name: stackName },
  })

  const buildStackTabs = getStackTabData({ repos, stacks })

  return propsWithGlobalSettings({
    stack: thisStack
      ? {
          ...thisStack,
        }
      : null,
    stackExtras: stackData?.stacks?.[0] || {},
    ...getStackMeta(thisStack),
    footerVariant: FooterVariant.kitchenSink,
    buildStackTabs,
    caseStudyApps: getCaseStudyApps(repos),
    errors: [
      ...(reposError ? [reposError] : []),
      ...(stacksError ? [stacksError] : []),
      ...(stackError ? [stackError] : []),
      ...(appError ? [appError] : []),
    ],
  })
}

export function ProductValueSection({
  name,
  isStack,
}: {
  name: string
  isStack: boolean
}) {
  const fullName = isStack ? `the ${name} Stack` : name

  return (
    <StandardPage>
      <div>
        <Columns className="gap-y-xxxlarge">
          <EqualColumn>
            <TextLimiter className="flex flex-col gap-large">
              <Title2>Open-source and free to use</Title2>
              <Body2>
                Plural automates the deployment and operation of {fullName} in
                your cloud. Get up and running with your {fullName} instance in
                minutes and let Plural deploy {fullName} and all its
                dependencies into your cloud with all of the day-2 operations
                handled out of the box.
              </Body2>
              <Cta href="https://www.plural.sh/demo-login">
                Explore {fullName} on Plural in live demo environment
              </Cta>
            </TextLimiter>
          </EqualColumn>
          <EqualColumn className="flex flex-col gap-large">
            <Checklist>
              <ChecklistItem>Automated upgrades</ChecklistItem>
              <ChecklistItem>
                Transparent pricing and cost management
              </ChecklistItem>
              <ChecklistItem>Prebuilt dashboards, extendable </ChecklistItem>
              <ChecklistItem>Prebuilt runbooks, extendable </ChecklistItem>
              <ChecklistItem>Log management </ChecklistItem>
            </Checklist>
          </EqualColumn>
        </Columns>
        <div className="pt-xxxlarge mx-[-5.6%] my-[-2%]">
          <img
            src="/images/application/product-value@2x.png"
            alt="Screenshots of the Plural Console app, showing dashboards for Applications, Nodes and cost"
          />
        </div>
      </div>
    </StandardPage>
  )
}
