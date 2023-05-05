import { directusClient } from '@src/apollo-client'
import {
  SiteSettingsDocument,
  type SiteSettingsQuery,
  type SiteSettingsQueryVariables,
} from '@src/generated/graphqlDirectus'

let siteSettingsCache: SiteSettingsQuery['site_settings']

export const getSiteSettings = async () => {
  const { data, error } = await directusClient.query<
    SiteSettingsQuery,
    SiteSettingsQueryVariables
  >({
    query: SiteSettingsDocument,
  })

  if (data?.site_settings) {
    siteSettingsCache = data.site_settings
  }
  if (error && !siteSettingsCache) {
    throw new Error(`${error.name}: ${error.message}`)
  }

  return siteSettingsCache
}
