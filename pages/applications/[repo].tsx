import { type ComponentProps, useEffect } from 'react'

import { AppIcon, Code, ColorModeProvider } from '@pluralsh/design-system'
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
import { type MergeDeep } from 'type-fest'

// import { ProductValueSection } from '@pages/plural-stacks/ProductValueSection'
import client, { directusClient } from '@src/apollo-client'
import { mqs } from '@src/breakpoints'
import { BasicMarkdoc } from '@src/components/BasicMarkdoc'
import Embed from '@src/components/Embed'
import { FooterVariant } from '@src/components/FooterFull'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import {
  StandardPageSection,
  StandardPageWidth,
} from '@src/components/layout/LayoutHelpers'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { BackButton } from '@src/components/Nav'
import BuildStackSection from '@src/components/page-sections/BuildStackSection'
import {
  CaseStudySection,
  getCaseStudyApps,
} from '@src/components/page-sections/CaseStudySection'
import { HPWMiniSectionAppStacks } from '@src/components/page-sections/HowPluralWorksMiniSection'
import { StandardFAQSection } from '@src/components/page-sections/StandardFAQSection'
import { TestimonialsSection } from '@src/components/QuoteCards'
import RepoReadmeMd from '@src/components/RepoReadme/RepoReadmeMd'
import { SingleAccordion } from '@src/components/SingleAccordion'
import {
  AppTitle,
  Body1,
  Body2,
  Cta,
  Heading3,
  Overline,
} from '@src/components/Typography'
import { QUICKSTART_VIDEO_URL, getAppMeta, getProviderIcon } from '@src/consts'
import {
  type BasicRepo,
  type FullRepo,
  type TinyRepo,
  getFullRepo,
  getTinyRepos,
} from '@src/data/getRepos'
import { getStacks } from '@src/data/getStacks'
import { getStackTabData } from '@src/data/getStackTabData'
import {
  type AppDefaultsFragment,
  AppExtrasDocument,
  type AppExtrasFragment,
  type AppExtrasQuery,
  type AppExtrasQueryVariables,
  type FaqItemFragment,
  FaqListDocument,
  type FaqListQuery,
  type FaqListQueryVariables,
  type QuoteFragment,
} from '@src/generated/graphqlDirectus'
import {
  type Recipe,
  type RecipeFragment,
  RecipesDocument,
  type RecipesQuery,
  type RecipesQueryVariables,
} from '@src/generated/graphqlPlural'
import {
  type GlobalProps,
  propsWithGlobalSettings,
} from '@src/utils/getGlobalProps'
import { normalizeM2mItems, normalizeQuotes } from '@src/utils/normalizeQuotes'

import { CompanyLogosSection } from '../../src/components/CompanyLogos'
import { GradientBG } from '../../src/components/layout/GradientBG'
import { HeaderPad } from '../../src/components/layout/HeaderPad'
import { ProviderIcon } from '../../src/components/ProviderIcon'
import { RepoSocials } from '../../src/components/RepoSocials'

const DEFAULT_HERO_VIDEO = QUICKSTART_VIDEO_URL

function isRecipe(
  recipe: RecipeFragment | null | undefined
): recipe is RecipeFragment {
  return !!recipe
}

const AppPageTitle = styled(
  ({ app, ...props }: { app: BasicRepo } & ComponentProps<'div'>) => {
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
          <div className="smallIcon">
            <AppIcon
              size="small"
              {...iconProps}
            />
          </div>
          <div className="largeIcon">
            <AppIcon
              size="medium"
              {...iconProps}
            />
          </div>
        </div>
        <AppTitle>{app.displayName}</AppTitle>
      </div>
    )
  }
)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.small,
  '.icon > .largeIcon': {
    display: 'none',
  },
  [mqs.md]: {
    '.icon': {
      '& > .smallIcon': {
        display: 'none',
      },
      '& > .largeIcon': {
        display: 'flex',
      },
    },
  },
}))

export type ProviderProps = {
  label?: string | null | undefined
  iconDark: string
  iconLight: string
}

export default function App({
  repo,
  heroVideo,
  heroText,
  secondaryTitle,
  secondaryText,
  caseStudy,
  quotes,
  recipes,
  buildStackTabs,
  caseStudyApps,
  faqs,
  globalProps,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const recipeTabs =
    recipes?.filter(isRecipe).map((recipe) => ({
      key: recipe.name,
      label:
        providerToProviderName[recipe?.provider?.toUpperCase() || ''] ||
        recipe.provider ||
        '',
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
      <StandardPageWidth>
        <div className="py-[40px] md:pb-xxxlarge">
          <BackButton href="/marketplace" />
        </div>
        <Columns className="gap-y-xxlarge">
          <EqualColumn>
            <TextLimiter className="flex flex-col gap-large">
              <AppPageTitle app={repo} />
              <Body1
                as="div"
                color="text-light"
              >
                {heroText ? (
                  <BasicMarkdoc
                    text={heroText}
                    variables={{ appName: repo.displayName }}
                  />
                ) : (
                  <p>{repo.description}</p>
                )}
              </Body1>
              <div className="flex flex-col gap-medium">
                <Overline>Available providers</Overline>
                {!isEmpty(recipeTabs) ? (
                  <div className="flex gap-small">
                    {recipeTabs.map((provider) => (
                      <ProviderIcon
                        key={provider.key}
                        label={provider.label}
                        iconLight={provider.iconLight}
                        iconDark={provider.iconDark}
                      />
                    ))}
                  </div>
                ) : (
                  <Body2>Coming soon</Body2>
                )}
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
            'gap-large',
            'py-xxxxlarge',
            'xl:py-xxxxxxlarge'
          )}
        >
          <Columns className={classNames('gap-y-xxxlarge')}>
            <EqualColumn>
              <TextLimiter>
                <Heading3
                  className="mb-large"
                  as="h2"
                >
                  <BasicMarkdoc
                    text={secondaryTitle}
                    renderP={false}
                    variables={{ appName: repo.displayName }}
                  />
                </Heading3>
                <Body2 as="div">
                  <BasicMarkdoc
                    text={secondaryText}
                    variables={{ appName: repo.displayName }}
                  />
                </Body2>
                <div className="mt-large flex flex-wrap flex-col justify-start md:flex-row gap-medium [&>*]:w-[max-content]">
                  <RepoSocials repo={repo} />
                </div>
              </TextLimiter>
            </EqualColumn>
            <EqualColumn>
              {!isEmpty(recipeTabs) && (
                <>
                  <div className="flex flex-col gap-medium">
                    <Body2 className="columns:mt-[17px]">
                      Deploying {repo.displayName} is a matter of executing
                      these 3 commands:
                    </Body2>
                    <Code tabs={recipeTabs} />
                    <Code>plural build</Code>
                    <Code>
                      {`plural deploy --commit "deploying ${repo.name}"`}
                    </Code>
                  </div>{' '}
                  <Cta
                    className="mt-xlarge"
                    href={`https://docs.plural.sh/applications/${repo.name}`}
                  >
                    Read the install documentation
                  </Cta>
                </>
              )}
            </EqualColumn>
          </Columns>
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
      </StandardPageWidth>
      <HPWMiniSectionAppStacks />
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

export function CaseStudyFAQSection({
  caseStudyProps,
  faqProps,
}: {
  caseStudyProps?: ComponentProps<typeof CaseStudySection>
  faqProps: ComponentProps<typeof StandardFAQSection>
}) {
  return (
    <ColorModeProvider mode="light">
      <StandardPageSection className="flex flex-col bg-fill-zero gap-xxxlarge md:gap-xxxxlarge columns:gap-xxxxxlarge">
        {caseStudyProps?.featuredArticle && (
          <StandardPageWidth>
            <CaseStudySection {...caseStudyProps} />
          </StandardPageWidth>
        )}
        <StandardFAQSection {...faqProps} />
      </StandardPageSection>
    </ColorModeProvider>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  const repos = (await getTinyRepos()) || []

  return {
    paths: repos.map((repo) => ({ params: { repo: repo?.name } })),
    fallback: true,
  }
}

export type AppPageProps = {
  repo?: FullRepo | null
  quotes: QuoteFragment[] | null
  heroVideo: Exclude<
    ReturnType<typeof normalizeAppExtras>['heroVideo'],
    undefined
  >
  heroText: Exclude<
    ReturnType<typeof normalizeAppExtras>['hero_text'],
    undefined
  >
  secondaryTitle: Exclude<
    ReturnType<typeof normalizeAppExtras>['secondary_title'],
    undefined
  >
  secondaryText: Exclude<
    ReturnType<typeof normalizeAppExtras>['secondary_text'],
    undefined
  >
  caseStudy: Exclude<
    ReturnType<typeof normalizeAppExtras>['case_study'],
    undefined
  >
  recipes?: Recipe[]
  buildStackTabs?: ReturnType<typeof getStackTabData>
  caseStudyApps: TinyRepo[]
  faqs: (FaqItemFragment | null)[]
  globalProps: GlobalProps
}

const normalizeAppExtras = (extras: AppExtrasQuery) =>
  ({
    ...(extras.app_defaults || {}),
    ...Object.fromEntries(
      Object.entries(extras.apps?.[0] || {}).filter(([_, val]) => !!val)
    ),
  }) as MergeDeep<AppDefaultsFragment, AppExtrasFragment>

export const getStaticProps: GetStaticProps<AppPageProps> = async (context) => {
  const repoName = context?.params?.repo

  const { data: repos, error: reposError } = await until(() => getTinyRepos())

  const { data: repo, error: repoError } = await until(() =>
    getFullRepo(`${repoName}`)
  )

  const { data: stacks, error: stacksError } = await until(() => getStacks())

  const thisRepo = repo

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

  const appExtras = normalizeAppExtras(appData) || {}

  const { data: faqData, error: faqError } = await directusClient.query<
    FaqListQuery,
    FaqListQueryVariables
  >({
    query: FaqListDocument,
    variables: { slug: 'generic' },
  })

  return propsWithGlobalSettings({
    repo: thisRepo
      ? {
          ...thisRepo,
        }
      : null,
    caseStudy: appExtras.case_study || null,
    heroVideo: appExtras.heroVideo || null,
    heroText: appExtras.hero_text || null,
    secondaryText: appExtras.secondary_text || null,
    secondaryTitle: appExtras.secondary_title || null,
    quotes: normalizeQuotes(appExtras.quotes),
    recipes,
    ...getAppMeta(thisRepo),
    faqs: normalizeM2mItems(faqData.collapsible_lists?.[0]) || [],
    buildStackTabs,
    caseStudyApps: getCaseStudyApps(
      repos,
      (appExtras.case_study?.stack_apps as string[]) || []
    ),
    footerVariant: FooterVariant.kitchenSink,
    errors: [
      ...(reposError ? [reposError] : []),
      ...(stacksError ? [stacksError] : []),
      ...(repoError ? [repoError] : []),
      ...(appError ? [appError] : []),
      ...(faqError ? [faqError] : []),
    ],
  })
}
