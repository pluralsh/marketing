import { type ComponentProps, useEffect } from 'react'

import {
  AppIcon,
  CheckRoundedIcon,
  Code,
  Tooltip,
} from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'

import { providerToProviderName } from '@pluralsh/design-system/dist/markdoc/utils/text'
import classNames from 'classnames'
import isEmpty from 'lodash/isEmpty'
import styled, { useTheme } from 'styled-components'

import { FullPage } from '@pages/_app'
import client from '@src/apollo-client'
import { mqs } from '@src/breakpoints'
import Embed from '@src/components/Embed'
import { propsWithGlobalSettings } from '@src/components/getGlobalProps'
import { BackButton } from '@src/components/Nav'
import { EndorsementsCarousel } from '@src/components/QuoteCards'
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
import { type MinRepo, getRepos } from '@src/data/getRepos'
import {
  type Recipe,
  type RecipeFragment,
  RecipesDocument,
  type RecipesQuery,
  type RecipesQueryVariables,
} from '@src/generated/graphqlPlural'

import { CompanyLogos } from '../../src/components/CompanyLogos'
import { GradientBG, HeroGradientBG } from '../../src/components/GradientBGs'

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

type ProviderProps = {
  label?: string | null | undefined
  iconDark: string
  iconLight: string
}

export default function App({
  repo,
  recipes,
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
    <HeroGradientBG>
      <FullPage>
        <div className="py-[40px] md:pb-xxxlarge">
          <BackButton />
        </div>
        <Columns2>
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
              url="https://www.youtube.com/watch?v=mFDA-718RhI"
              aspectRatio="16 / 9"
            />
          </Col>
        </Columns2>
        <div>
          <Columns2 className="py-xxxxlarge xl:py-[192px]">
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
        </div>
      </FullPage>
      <GradientBG className="flex flex-col py-xxxxlarge gap-xxxlarge">
        <FullPage>
          <div>
            <Columns2>
              <Col>
                <TextLimiter className="flex flex-col gap-large">
                  <Title2>Open-source and free to use</Title2>
                  <Body2>
                    Plural automates the deployment and operation of{' '}
                    {repo.displayName} in your cloud. Get up and running with
                    your {repo.displayName} instance in minutes and let Plural
                    deploy {repo.displayName} and all its dependencies into your
                    cloud with all of the day-2 operations handled out of the
                    box.
                  </Body2>
                  <Cta href="https://app.plural.sh/shell">
                    Explore {repo.displayName} on Plural in live demo
                    environment
                  </Cta>
                </TextLimiter>
              </Col>
              <Col className="flex flex-col gap-large">
                <Checklist>
                  <ChecklistItem>Automated upgrades</ChecklistItem>
                  <ChecklistItem>
                    Transparent pricing and cost management{' '}
                  </ChecklistItem>
                  <ChecklistItem>
                    Prebuilt dashboards, extendable{' '}
                  </ChecklistItem>
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
      </GradientBG>
      <FullPage>
        <CompanyLogos className="mt-xxxxlarge" />
      </FullPage>
      <FullPage>
        <div className="my-xxxxxlarge">
          <Heading1 className="mb-xxlarge md:mb-xxxxlarge text-center">
            What companies are saying about Plural
          </Heading1>
          <EndorsementsCarousel />
        </div>
      </FullPage>
    </HeroGradientBG>
  )
}

export const TextLimiter = styled.div(({ theme: _ }) => ({
  [mqs.columns]: {
    maxWidth: 600,
  },
}))

export function Col({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={classNames('columns:basis-0 columns:flex-grow', className)}
      {...props}
    />
  )
}

export function Columns2({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={classNames([
        'flex',
        'flex-col',
        'gap-large',
        'columns:flex-row',
        'columns:gap-xlarge',
        'xl:gap-xxlarge',
        'xl:flex-row',
        'xxl:gap-xxxxlarge',
        'maxWidth:gap-xxxxxlarge',
        className,
      ])}
      {...props}
    />
  )
}

export const Checklist = styled.ul(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.medium,
}))

export const ChecklistItem = styled(({ children, ...props }) => {
  const theme = useTheme()

  return (
    <li {...props}>
      <CheckRoundedIcon
        color={theme.colors['icon-success']}
        size={20}
      />
      {children}
    </li>
  )
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.small,
  ...theme.partials.marketingText.body1Bold,
  color: theme.colors.text,
}))

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
  repo?: MinRepo | null
  recipes?: Recipe[]
}

export const getStaticProps: GetStaticProps<AppPageProps> = async (context) => {
  const repoName = context?.params?.repo

  const repos = await getRepos()
  const thisRepo = repos.find((r) => r.name === repoName)

  if (!thisRepo || !repoName || typeof repoName !== 'string') {
    return { notFound: true }
  }

  const { data: recipesData, error: recipesError } = await client.query<
    RecipesQuery,
    RecipesQueryVariables
  >({
    query: RecipesDocument,
    variables: { repoName },
  })

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
    recipes,
    ...getAppMeta(thisRepo),
  })
}

const ProviderIcon = styled(
  ({
    iconLight,
    iconDark,
    label,
    ...props
  }: ComponentProps<'div'> & ProviderProps) => (
    <Tooltip
      placement="top"
      label={label}
    >
      <div {...props}>
        <img
          className="icon iconLight"
          src={iconLight}
        />
        <img
          className="icon iconDark"
          src={iconDark}
        />
      </div>
    </Tooltip>
  )
)(({ theme }) => ({
  border: theme.borders['fill-two'],
  background: theme.colors['fill-zero'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing.xsmall,
  borderRadius: theme.borderRadiuses.large,
  width: 44,
  height: 44,
  '.iconLight': {
    display: theme.mode === 'light' ? 'block' : 'none',
  },
  '.iconDark': {
    display: theme.mode === 'light' ? 'none' : 'block',
  },
}))
