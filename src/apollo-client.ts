import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { HttpLink } from '@apollo/client/link/http'
import { RetryLink } from '@apollo/client/link/retry'

const pluralRetryLink = new RetryLink()

const pluralHttpLink = new HttpLink({ uri: 'https://app.plural.sh/gql' })
const pluralLink = ApolloLink.from([pluralRetryLink, pluralHttpLink])

const client = new ApolloClient({
  link: pluralLink,
  cache: new InMemoryCache(),
})

const directusToken = process.env.DIRECTUS_ACCESS_TOKEN

const directusRetryLink = new RetryLink()

const directusHttpLink = new HttpLink({
  uri: `https://directus.plural.sh/graphql${
    directusToken ? `?access_token=${directusToken}` : ''
  }`,
})
const directusLink = ApolloLink.from([directusRetryLink, directusHttpLink])

export const directusClient = new ApolloClient({
  link: directusLink,
  cache: new InMemoryCache(),
})

export default client
