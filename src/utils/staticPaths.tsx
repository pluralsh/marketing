import { INDEX_PATH_PARAM_SUFFIX } from '../../index-pages.mjs'

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
