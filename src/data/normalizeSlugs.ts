export function normalizeSlugs(
  entries?: ({ slug?: string | null } | null)[] | null
) {
  return (
    entries
      ?.filter((p): p is { slug: string } => typeof p?.slug === 'string')
      ?.map((p) => p.slug) || []
  )
}
