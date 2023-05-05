import { InlineCode } from '@pluralsh/design-system'
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next'

import {
  FenceInner,
  Heading,
  List,
  ListItem,
  Paragraph,
} from '@pluralsh/design-system/dist/markdoc/components'

import client from '@src/apollo-client'
import { getAppMetaDescription } from '@src/consts'
import { type FullRepo, getRepo, getRepos } from '@src/data/getRepos'
import { RecipesDocument } from '@src/generated/graphqlPlural'
import { filterMapNodes } from '@src/utils/graphql'
import { providerToProviderName } from '@src/utils/text'

import type { GlobalPageProps } from '../_app'
import type {
  RecipeFragment,
  RecipesQuery,
  RecipesQueryVariables,
} from '@src/generated/graphqlPlural'

function isRecipe(
  recipe: RecipeFragment | null | undefined
): recipe is RecipeFragment {
  return !!recipe
}

export default function App({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { recipes } = repo || {}

  const tabs = recipes?.filter(isRecipe).map((recipe) => ({
    key: recipe.name,
    label:
      providerToProviderName[recipe?.provider?.toUpperCase() || ''] ||
      recipe.provider,
    language: 'shell',
    content: `plural bundle install ${repo?.name} ${recipe.name}`,
  }))

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

  return (
    <div>
      <Heading level={2}>Description</Heading>
      <Paragraph>
        Plural will install {repo?.displayName} in a dependency-aware manner
        onto a Plural-managed Kubernetes cluster with one CLI command.
      </Paragraph>
      <Heading level={2}>Installation</Heading>
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
      )}
    </div>
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

export const getStaticProps: GetStaticProps<
  Partial<GlobalPageProps> & { repo: FullRepo; recipes: RecipeFragment[] }
> = async (context) => {
  const repoName = context?.params?.app as string

  const thisRepo = await getRepo(repoName)

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
    filterMapNodes(recipesData?.recipes, (r) => !!r && !r?.private) || []

  return {
    props: {
      metaTitle: `Deploying ${thisRepo?.displayName} on Kubernetes`,
      metaDescription: getAppMetaDescription(thisRepo.displayName),
      repo: thisRepo,
      recipes: recipes || [],
    },
    revalidate: 600,
  }
}
