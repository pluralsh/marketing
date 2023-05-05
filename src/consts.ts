export const ROOT_TITLE =
  'Plural | Deploy, maintain, and scale the open-source applications you love'
export const PAGE_TITLE_PREFIX = 'Plural | '
export const PAGE_TITLE_SUFFIX = ''
export const getAppMetaDescription = (displayName?: string) => {
  if (!displayName) return undefined

  return `Use Plural to deploy and manage ${displayName} on Kubernetes, in your cloud.`
}
