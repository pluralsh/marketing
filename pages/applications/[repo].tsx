import { type ComponentProps, useEffect } from 'react'

import {
  AppIcon,
  BrowserIcon,
  Button,
  CertificateIcon,
  Code,
  DocumentIcon,
  GitHubIcon,
} from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'

import { until } from '@open-draft/until'
import { providerToProviderName } from '@pluralsh/design-system/dist/markdoc/utils/text'
import classNames from 'classnames'
import { isEmpty } from 'lodash-es'
import styled, { useTheme } from 'styled-components'

import client, { directusClient } from '@src/apollo-client'
import { mqs } from '@src/breakpoints'
import BuildStack, { getStackTabData } from '@src/components/BuildStack'
import { Checklist, ChecklistItem } from '@src/components/Checklist'
import Embed from '@src/components/Embed'
import { FooterVariant } from '@src/components/FooterFull'
import { Col, Columns2 } from '@src/components/layout/Columns'
import { FullPage } from '@src/components/layout/FullPage'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { BackButton } from '@src/components/Nav'
import { QuotesCarousel } from '@src/components/QuoteCards'
import RepoReadmeMd from '@src/components/RepoReadme/RepoReadmeMd'
import { SingleAccordion } from '@src/components/SingleAccordion'
import {
  AppTitle,
  Body1,
  Body2,
  Cta,
  Heading1,
  Heading3,
  Overline,
  Title2,
} from '@src/components/Typography'
import { getAppMeta, getProviderIcon } from '@src/consts'
import {
  type FullRepo,
  type MinRepo,
  // getFullRepo,
  getRepos,
} from '@src/data/getRepos'
import { getStacks } from '@src/data/getStacks'
import {
  AppExtrasDocument,
  type AppExtrasFragment,
  type AppExtrasQuery,
  type AppExtrasQueryVariables,
} from '@src/generated/graphqlDirectus'
import {
  type Recipe,
  type RecipeFragment,
  RecipesDocument,
  type RecipesQuery,
  type RecipesQueryVariables,
} from '@src/generated/graphqlPlural'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { CompanyLogos } from '../../src/components/CompanyLogos'
import { GradientBG } from '../../src/components/layout/GradientBG'
import { HeaderPad } from '../../src/components/layout/HeaderPad'
import { ProviderIcon } from '../../src/components/ProviderIcon'

const DEFAULT_HERO_VIDEO = 'https://www.youtube.com/watch?v=mFDA-718RhI'

function isRecipe(
  recipe: RecipeFragment | null | undefined
): recipe is RecipeFragment {
  return !!recipe
}

const AppPageTitle = styled(
  ({ app, ...props }: { app: MinRepo } & ComponentProps<'div'>) => {
    const theme = useTheme()
    const iconProps = {
      url:
        (theme.mode === 'light'
          ? app.icon || app.darkIcon
          : app.darkIcon || app.icon) ?? '',
    }

    return (
      <div {...props}>
        <div className="icon">
          <AppIcon
            className="smallIcon"
            size="small"
            {...iconProps}
          />
          <AppIcon
            className="largeIcon"
            size="medium"
            {...iconProps}
          />
        </div>
        <AppTitle>{app.displayName}</AppTitle>
      </div>
    )
  }
)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.small,
  '.icon > *:nth-child(2)': {
    display: 'none',
  },
  [mqs.md]: {
    '.icon': {
      '& > *:nth-child(1)': {
        display: 'none',
      },
      '& > *:nth-child(2)': {
        display: 'flex',
      },
    },
  },
}))

export function RepoSocials({ repo }: { repo?: MinRepo | null }) {
  if (!repo) {
    return null
  }

  return (
    <>
      {repo.community?.homepage && (
        <Button
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href={repo.community?.homepage}
          tertiary
          startIcon={<BrowserIcon />}
        >
          {repo.displayName}’s website
        </Button>
      )}
      {repo.community?.gitUrl && (
        <Button
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href={repo.community?.gitUrl}
          tertiary
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
      )}
      {repo.license?.url && (
        <Button
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href={repo.license.url}
          tertiary
          startIcon={<CertificateIcon />}
        >
          License
        </Button>
      )}
      <Button
        as="a"
        target="_blank"
        href={`https://docs.plural.sh/applications/${repo.name}`}
        tertiary
        startIcon={<DocumentIcon />}
      >
        Installing {repo.displayName} docs
      </Button>
    </>
  )
}

export type ProviderProps = {
  label?: string | null | undefined
  iconDark: string
  iconLight: string
}

export default function App({
  repo,
  appExtras,
  recipes,
  buildStackTabs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const tabs =
    recipes?.filter(isRecipe).map((recipe) => ({
      key: recipe.name,
      label:
        providerToProviderName[recipe?.provider?.toUpperCase() || ''] ||
        recipe.provider,
      language: 'shell',
      content: `plural bundle install ${repo?.name} ${recipe.name}`,
      iconLight: getProviderIcon({ provider: recipe?.provider, mode: 'light' }),
      iconDark: getProviderIcon({ provider: recipe?.provider, mode: 'dark' }),
    })) || []

  useEffect(() => {
    if (!repo) {
      router.push('/marketplace')
    }
  }, [repo, router])
  if (!repo) {
    return null
  }

  return (
    <HeaderPad as={GradientBG}>
      <FullPage>
        <div className="py-[40px] md:pb-xxxlarge">
          <BackButton />
        </div>
        <Columns2 className="gap-y-xxlarge">
          <Col>
            <TextLimiter className="flex flex-col gap-large">
              <AppPageTitle app={repo} />
              <Body1 color="text-light">
                {repo.description}
                {/* Orchestrate all your applications to work in harmony with{' '}
                {repo.displayName} on Plural. */}
              </Body1>
              <div className="flex flex-col gap-medium">
                <Overline>Available providers</Overline>
                {!isEmpty(tabs) && (
                  <div className="flex gap-small">
                    {tabs.map((provider) => (
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
            </TextLimiter>
          </Col>
          <Col>
            <Embed
              className="m-0 p-0"
              url={appExtras?.heroVideo || DEFAULT_HERO_VIDEO}
              aspectRatio="16 / 9"
            />
          </Col>
        </Columns2>
        <div
          className={classNames(
            'flex',
            'flex-col',
            'gap-large',
            'py-xxxxlarge',
            'xl:py-[192px]'
          )}
        >
          <Columns2 className={classNames('gap-y-xxxlarge')}>
            <Col>
              <TextLimiter>
                <Heading3
                  className="mb-large"
                  as="h2"
                >
                  Why use {repo.displayName} on Plural?
                </Heading3>
                <Body2>
                  You’re likely spending time weighing the benefits of
                  self-hosting with the convenience and cost of managed
                  services. Skip the pro-con discussions and get the best of
                  both worlds with Plural. Automate and orchestrate your ETL, ML
                  jobs, and DevOps tasks without taking on the Ops burden or
                  managed service cost. Especially if you’re handling PII data,
                  you’ll need everything to stay within your own VPC, which is
                  best done with self-hosting open-source.
                </Body2>
                <div className="mt-large flex flex-wrap flex-col justify-start md:flex-row gap-medium [&>*]:w-[max-content]">
                  <RepoSocials repo={repo} />
                </div>
              </TextLimiter>
            </Col>
            <Col>
              {tabs && tabs.length > 0 && (
                <div className="flex flex-col gap-medium">
                  <Body2 className="columns:mt-[17px]">
                    Deploying {repo.displayName} is a matter of executing these
                    2 commands:
                  </Body2>
                  <Code tabs={tabs} />
                  <Code>
                    {`plural deploy --commit "deploying ${repo.name}"`}
                  </Code>
                </div>
              )}
              <Cta
                className="mt-xlarge"
                href={`https://docs.plural.sh/applications/${repo.name}`}
              >
                Read the install documentation
              </Cta>
            </Col>
          </Columns2>
          {repo?.readme && (
            <SingleAccordion label={`${repo.displayName}’s readme`}>
              <div className="pt-medium pb-xlarge mx-auto max-w-[800px]">
                <RepoReadmeMd
                  text={repo.readme ?? ''}
                  gitUrl={repo.gitUrl ?? ''}
                  mainBranch={repo.mainBranch ?? ''}
                />
              </div>
            </SingleAccordion>
          )}
        </div>
      </FullPage>
      <FullPage>
        <div>
          <Columns2 className="gap-y-xxxlarge">
            <Col>
              <TextLimiter className="flex flex-col gap-large">
                <Title2>Open-source and free to use</Title2>
                <Body2>
                  Plural automates the deployment and operation of{' '}
                  {repo.displayName} in your cloud. Get up and running with your{' '}
                  {repo.displayName} instance in minutes and let Plural deploy{' '}
                  {repo.displayName} and all its dependencies into your cloud
                  with all of the day-2 operations handled out of the box.
                </Body2>
                <Cta href="https://www.plural.sh/demo-login">
                  Explore {repo.displayName} on Plural in live demo environment
                </Cta>
              </TextLimiter>
            </Col>
            <Col className="flex flex-col gap-large">
              <Checklist>
                <ChecklistItem>Automated upgrades</ChecklistItem>
                <ChecklistItem>
                  Transparent pricing and cost management{' '}
                </ChecklistItem>
                <ChecklistItem>Prebuilt dashboards, extendable </ChecklistItem>
                <ChecklistItem>Prebuilt runbooks, extendable </ChecklistItem>
                <ChecklistItem>Log management </ChecklistItem>
              </Checklist>
            </Col>
          </Columns2>
          <div className="pt-xxxlarge mx-[-5.6%] my-[-2%]">
            <img
              src="/images/application/product-value@2x.png"
              alt="Screenshots of the Plural Console app, showing dashboards for Applications, Nodes and cost"
            />
          </div>
        </div>
      </FullPage>
      {buildStackTabs && <BuildStack tabs={buildStackTabs} />}
      <FullPage>
        <CompanyLogos className="mt-xxxxlarge" />
      </FullPage>
      <FullPage>
        <div className="my-xxxxxlarge">
          <Heading1 className="mb-xxlarge md:mb-xxxxlarge text-center">
            What companies are saying about Plural
          </Heading1>
          <QuotesCarousel />
        </div>
      </FullPage>
      <FullPage>{/* <FooterValueProp /> */}</FullPage>
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

  const repos = (await getRepos()) || []

  return {
    paths: repos.map((repo) => ({ params: { repo: repo?.name } })),
    fallback: true,
  }
}

export type AppPageProps = {
  repo?: FullRepo | null
  appExtras?: AppExtrasFragment
  recipes?: Recipe[]
  buildStackTabs?: ReturnType<typeof getStackTabData>
}

export const getStaticProps: GetStaticProps<AppPageProps> = async (context) => {
  const repoName = context?.params?.repo

  const { data: repos, error: reposError } = await until(() => getRepos())

  // const { data: repo, error: repoError } = await until(() =>
  //   getFullRepo(`${repoName}`)
  // )

  const { data: stacks, error: stacksError } = await until(() => getStacks())

  const thisRepo = repos?.find((r) => r.name === repoName)
  // const thisRepo = repo

  if (!thisRepo || !repoName || typeof repoName !== 'string') {
    return { notFound: true }
  }

  const { data: appData, error: appError } = await directusClient.query<
    AppExtrasQuery,
    AppExtrasQueryVariables
  >({
    query: AppExtrasDocument,
    variables: { name: repoName },
  })

  const { data: recipesData, error: recipesError } = await client.query<
    RecipesQuery,
    RecipesQueryVariables
  >({
    query: RecipesDocument,
    variables: {
      repoName,
    },
  })

  const buildStackTabs = getStackTabData({ repos, stacks })

  if (recipesError) {
    throw new Error(`${recipesError.name}: ${recipesError.message}`)
  }

  const recipes =
    recipesData?.recipes?.edges
      ?.map((edge) => edge?.node)
      .filter((r): r is Recipe => !!r && !r?.private) || []

  return propsWithGlobalSettings({
    repo: thisRepo
      ? {
          ...thisRepo,
        }
      : null,
    appExtras: appData?.apps?.[0] || {},
    recipes,
    ...getAppMeta(thisRepo),
    footerVariant: FooterVariant.kitchenSink,
    buildStackTabs,
    errors: [
      ...(reposError ? [reposError] : []),
      ...(stacksError ? [reposError] : []),
      // ...(repoError ? [repoError] : []),
      ...(appError ? [appError] : []),
    ],
  })
}
