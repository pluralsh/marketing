import { type ComponentProps } from 'react'

import { AppIcon, InlineCode, Tooltip } from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'
import { useRouter } from 'next/router'

import {
  FenceInner,
  Heading,
  List,
  ListItem,
  Paragraph,
} from '@pluralsh/design-system/dist/markdoc/components'
import { providerToProviderName } from '@pluralsh/design-system/dist/markdoc/utils/text'
import isEmpty from 'lodash/isEmpty'
import styled, { useTheme } from 'styled-components'

import { Page } from '@pages/_app'
import client from '@src/apollo-client'
import { breakpoints, mqs } from '@src/breakpoints'
import { BackButton } from '@src/components/Nav'
import { AppTitle, Body1, Overline } from '@src/components/Typography'
import { getProviderIcon } from '@src/consts'
import { type MinRepo, getRepos } from '@src/data/getRepos'
import {
  type Recipe,
  type RecipeFragment,
  RecipesDocument,
  type RecipesQuery,
  type RecipesQueryVariables,
} from '@src/generated/graphqlPlural'

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
  label?: string
  iconDark: string
  iconLight: string
}

export default function App({
  repo,
  recipes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const tabs = recipes?.filter(isRecipe).map((recipe) => ({
    key: recipe.name,
    label:
      providerToProviderName[recipe?.provider?.toUpperCase() || ''] ||
      recipe.provider,
    language: 'shell',
    content: `plural bundle install ${repo?.name} ${recipe.name}`,
  }))

  const providers: ProviderProps & { key: string } =
    recipes?.filter(isRecipe).map((recipe) => ({
      key: recipe.name,
      label:
        providerToProviderName[recipe?.provider?.toUpperCase() || ''] ||
        recipe.provider,
      iconLight: getProviderIcon({ provider: recipe?.provider, mode: 'light' }),
      iconDark: getProviderIcon({ provider: recipe?.provider, mode: 'dark' }),
    })) || []

  const recipeSections = Array.isArray(recipes) && recipes[0]?.recipeSections

  let recipeHasConfig = false

  if (recipeSections) {
    for (const section of recipeSections) {
      if (section?.configuration?.length || 0 > 0) {
        recipeHasConfig = true
        break
      }
    }
  }
  if (!repo) {
    router.push('/marketplace')

    return null
  }

  return (
    <GradientBG>
      <Page>
        <div className="py-[40px] md:pb-xxxlarge">
          <BackButton />
        </div>
        <div className="flex flex-col gap-large">
          <AppPageTitle app={repo} />
          <Body1 color="text-light">
            Orchestrate all your applications to work in harmony with{' '}
            {repo.displayName} on Plural.
          </Body1>
          <div className="flex flex-col gap-medium">
            <Overline>Available providers</Overline>
            {!isEmpty(providers) && (
              <div className="flex gap-small">
                {providers.map((provider) => (
                  <ProviderIcon
                    label={provider.label}
                    iconLight={provider.iconLight}
                    iconDark={provider.iconDark}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        {/* <Heading level={2}>Installation</Heading>
        <Paragraph>
          We currently support {repo?.displayName} for the following providers:
        </Paragraph>
        {tabs && tabs.length > 0 && <FenceInner tabs={tabs} />}
        {recipeSections && recipeHasConfig && (
          <>
            <Heading level={2}>Setup Configuration</Heading>
            <List ordered={false}>
              {recipeSections.map((section) =>
                section?.configuration?.map((x, configIdx) => (
                  <ListItem key={configIdx}>
                    <InlineCode>{x?.name}</InlineCode>:{' '}
                    {x?.longform || x?.documentation}
                  </ListItem>
                ))
              )}
            </List>
          </>
        )} */}
      </Page>
    </GradientBG>
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

  return {
    props: {
      repo: thisRepo
        ? {
            ...thisRepo,
          }
        : null,
      recipes,
    },
    revalidate: 600,
  }
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

const GradientBG = styled(
  ({ className, children, ...props }: ComponentProps<'div'>) => (
    <div className={className}>
      <div className="background" />
      <div
        className="content"
        {...props}
      >
        {children}
      </div>
    </div>
  )
)(({ theme }) => ({
  position: 'relative',
  '.background, .background::before, .background::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 750,
    maskImage: 'linear-gradient(rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
  },
  '.background': {
    overflow: 'hidden',
    opacity: 0.45,
  },
  '.content': {
    position: 'relative',
  },
  '.background::before': {
    opacity: 0.6,
    minWidth: breakpoints.xxl,
    right: 'auto',
    background:
      'linear-gradient(76.99deg, rgba(249, 250, 251, 0.6) 22.61%, rgba(73, 79, 242, 0.6) 58.15%, rgba(143, 214, 255, 0.6) 74.8%, rgba(249, 250, 251, 0.6) 101.64%);',
  },
  '.background::after': {
    background: `linear-gradient(28.91deg, ${theme.colors['fill-zero']} 42.04%, rgba(50, 53, 59, 0) 81.67%)`,
  },
  [mqs.xxl]: {
    '.background::before': {
      minWidth: 'unset',
      right: 0,
    },
  },
}))
