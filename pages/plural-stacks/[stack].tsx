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
import { type MergeDeep } from 'type-fest'

import { CaseStudyFAQSection } from '@pages/applications/[repo]'
import { directusClient } from '@src/apollo-client'
import { AppCard } from '@src/components/AppOrStackCard'
import Embed from '@src/components/Embed'
import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import {
  StandardPageSection,
  StandardPageWidth,
} from '@src/components/layout/LayoutHelpers'
import { BackButton } from '@src/components/Nav'
import BuildStackSection from '@src/components/page-sections/BuildStackSection'
import { getCaseStudyApps } from '@src/components/page-sections/CaseStudySection'
import { HPWMiniSectionAppStacks } from '@src/components/page-sections/HowPluralWorksMiniSection'
import { ProviderIcon } from '@src/components/ProviderIcon'
import { TestimonialsSection } from '@src/components/QuoteCards'
import { RepoSocials } from '@src/components/RepoSocials'
import {
  AppTitle,
  Body1,
  Overline,
  ResponsiveText,
} from '@src/components/Typography'
import { getProviderIcon, getStackMeta } from '@src/consts'
import { appUrl } from '@src/consts/routes'
import { type TinyRepo, getTinyRepos, normalizeRepo } from '@src/data/getRepos'
import { type FullStack, getFullStack, getStacks } from '@src/data/getStacks'
import { getStackTabData } from '@src/data/getStackTabData'
import {
  type FaqItemFragment,
  FaqListDocument,
  type FaqListQuery,
  type FaqListQueryVariables,
  type QuoteFragment,
  type StackDefaultsFragment,
  StackExtrasDocument,
  type StackExtrasFragment,
  type StackExtrasQuery,
  type StackExtrasQueryVariables,
} from '@src/generated/graphqlDirectus'
import {
  type BasicRepoFragment,
  type StackCollectionFragment,
} from '@src/generated/graphqlPlural'
import {
  type GlobalProps,
  propsWithGlobalSettings,
} from '@src/utils/getGlobalProps'
import { normalizeM2mItems, normalizeQuotes } from '@src/utils/normalizeQuotes'
import { startsWithVowel } from '@src/utils/text'

import { CompanyLogosSection } from '../../src/components/CompanyLogos'
import { Columns, EqualColumn } from '../../src/components/layout/Columns'
import { HeaderPad } from '../../src/components/layout/HeaderPad'
import { TextLimiter } from '../../src/components/layout/TextLimiter'

// import { ProductValueSection } from './ProductValueSection'

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
  quotes,
  heroVideo,
  caseStudy,
  faqs,
  buildStackTabs,
  caseStudyApps,
  globalProps,
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
    .filter((repo): repo is BasicRepoFragment => !!repo)
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

  return (
    <HeaderPad as={GradientBG}>
      <StandardPageWidth>
        <div className="py-[40px] md:pb-xxxlarge">
          <BackButton href="/marketplace" />
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
              url={heroVideo || DEFAULT_HERO_VIDEO}
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
            'xl:py-xxxxxxlarge'
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
              {/* @ts-no-check */}
              <StackAppsTabList
                stateRef={appsTabStateRef}
                stateProps={{
                  orientation: 'vertical',
                  selectedKey: curAppTabKey,
                  onSelectionChange: (key) => setCurTabKey(key as string),
                }}
              >
                {apps?.map((repo) => {
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
                    href={appUrl(curApp?.name || '')}
                  >
                    Learn more about {curApp?.displayName}
                  </Button>
                </div>
              </StackAppsTabPanel>
            </EqualColumn>
          </Columns>
        </div>
      </StandardPageWidth>

      <HPWMiniSectionAppStacks />
      {/* <ProductValueSection
        name={stack.displayName}
        isStack
      /> */}
      {buildStackTabs && <BuildStackSection tabs={buildStackTabs} />}
      <StandardPageSection className="bg-fill-zero flex flex-col gap-y-xxxxxlarge xxl:gap-y-xxxxxxlarge">
        <CompanyLogosSection
          logos={globalProps.siteSettings?.partner_logos?.items}
        />
        <TestimonialsSection quotes={quotes || []} />
      </StandardPageSection>
      <CaseStudyFAQSection
        caseStudyProps={{
          apps: caseStudyApps,
          featuredArticle: caseStudy,
        }}
        faqProps={{ faqs }}
      />
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
  stack: FullStack | null
  quotes: QuoteFragment[] | null
  heroVideo: Exclude<
    ReturnType<typeof normalizeStackExtras>['heroVideo'],
    undefined
  >
  caseStudy: Exclude<
    ReturnType<typeof normalizeStackExtras>['case_study'],
    undefined
  >
  buildStackTabs?: ReturnType<typeof getStackTabData>
  caseStudyApps: TinyRepo[]
  faqs: (FaqItemFragment | null)[]
  globalProps: GlobalProps
}

const normalizeStackExtras = (extras: StackExtrasQuery) =>
  ({
    ...(extras.stack_defaults || {}),
    ...(extras.stacks?.[0] || {}),
  }) as MergeDeep<StackDefaultsFragment, StackExtrasFragment>

export const getStaticProps: GetStaticProps<StackPageProps> = async (
  context
) => {
  const stackName = context?.params?.stack

  if (!stackName || typeof stackName !== 'string') {
    return { notFound: true }
  }
  const { data: repos, error: reposError } = await until(() => getTinyRepos())

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

  const { data: faqData, error: faqError } = await directusClient.query<
    FaqListQuery,
    FaqListQueryVariables
  >({
    query: FaqListDocument,
    variables: { slug: 'generic' },
  })

  const stackExtras = normalizeStackExtras(stackData) || {}

  return propsWithGlobalSettings({
    stack: thisStack
      ? {
          ...thisStack,
        }
      : null,
    heroVideo: stackExtras.heroVideo || null,
    caseStudy: stackExtras.case_study || null,
    quotes: normalizeQuotes(stackExtras.quotes),
    ...getStackMeta(thisStack),
    faqs: normalizeM2mItems(faqData.collapsible_lists?.[0]) || [],
    buildStackTabs,
    caseStudyApps: getCaseStudyApps(
      repos,
      (stackExtras.case_study?.stack_apps as string[]) || []
    ),
    footerVariant: FooterVariant.kitchenSink,
    errors: [
      ...(reposError ? [reposError] : []),
      ...(stacksError ? [stacksError] : []),
      ...(stackError ? [stackError] : []),
      ...(appError ? [appError] : []),
      ...(faqError ? [faqError] : []),
    ],
  })
}
