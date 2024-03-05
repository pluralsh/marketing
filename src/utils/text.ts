import type { Provider } from '../generated/graphqlPlural'

export function removeTrailingSlashes(str) {
  if (typeof str !== 'string') {
    return str
  }

  return str.replace(/\/+$/, '')
}

export function isRelativeUrl(str: string) {
  return !str.match(/^\/.*$|^[^:/]*?:\/\/.*?$/giu)
}

export function isExternalUrl(url: string) {
  return url.substr(0, 4) === 'http' || url.substr(0, 2) === '//'
}

export const stripMdExtension = (url: string) => {
  if (!isExternalUrl(url)) {
    return url.replace(/.md$/, '')
  }

  return url
}

export function getBarePathFromPath(url: string) {
  return url.split(/[?#]/)[0]
}

export function isSubrouteOf(route: string, compareRoute: string) {
  return route.startsWith(compareRoute)
}

export const providerToProviderName: Record<Provider, string> = {
  GCP: 'GCP',
  AWS: 'AWS',
  AZURE: 'Azure',
  EQUINIX: 'Equinix',
  KIND: 'kind',
  CUSTOM: 'Custom',
  KUBERNETES: 'Kubernetes',
  GENERIC: 'Generic',
  LINODE: 'Linode',
}

export function toHtmlId(str) {
  const id = str.replace(/\W+/g, ' ').trim().replace(/\s/g, '-').toLowerCase()

  // make sure the id starts with a letter or underscore
  return id.match(/^[A-Za-z]/) ? id : `_${id}`
}

export function startsWithVowel(str: string) {
  return !!str.match(/^[aeiou]/i)
}

export { default as urlJoin } from 'url-join'

const emailRegex = /^[^@]+@([^@.]+\.)+[^@.]+$/

export function isValidEmail(email: string | null | undefined): boolean {
  if (typeof email !== 'string') {
    return false
  }

  return emailRegex.test(email)
}

export function splitOnSpacesInclusive(str: string) {
  if (typeof str !== 'string') {
    return [str]
  }
  const regexp = /(^\s*)?[^\s]+?(\s+|$)/g

  return [...str.matchAll(regexp)].map((v) => v[0])
}
