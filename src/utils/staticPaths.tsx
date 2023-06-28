export const singlePageStaticPaths = (paramName: string) => {
  if (process.env.NODE_ENV === 'development') {
    return {
      paths: [],
      fallback: 'blocking' as const,
    }
  }

  return {
    paths: [{ params: { [paramName]: [] } }],
    fallback: false as const,
  }
}
