// Must be synced manually with same param in 'index-pages.mjs'
// Investigate better syncing solution later
const INDEX_PATH_PARAM_SUFFIX = '-index'

export const indexPageStaticPaths = (paramName: string) => {
  if (process.env.NODE_ENV === 'development') {
    return {
      paths: [],
      fallback: 'blocking' as const,
    }
  }

  return {
    paths: [{ params: { [paramName + INDEX_PATH_PARAM_SUFFIX]: [] } }],
    fallback: false as const,
  }
}
