import { type ImageFileFragment } from '@src/generated/graphqlDirectus'
import { urlJoin } from '@src/utils/text'

const APP_BASE_URL = '/applications'
const STACK_BASE_URL = '/plural-stacks'
const DOCS_APP_BASE_URL = 'https://docs.plural.sh/applications'
const FILE_BASE_URL = 'https://directus.plural.sh/assets'
const JOB_BASE_URL = '/careers/hire'

export function appUrl(appName: string) {
  return urlJoin(APP_BASE_URL, appName)
}

export function stackUrl(stackName) {
  return urlJoin(STACK_BASE_URL, stackName)
}

export function docsAppUrl(appName: string) {
  return urlJoin(DOCS_APP_BASE_URL, appName)
}

export function jobUrl(jobSlug: string) {
  return urlJoin(JOB_BASE_URL, jobSlug)
}

export function getImageUrl(
  image: Pick<ImageFileFragment, 'filename_disk' | 'filename_download'>
) {
  return urlJoin(
    FILE_BASE_URL,
    image.filename_disk || '',
    image.filename_download || ''
  )
}
