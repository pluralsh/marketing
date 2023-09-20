import {
  BrowserIcon,
  Button,
  CertificateIcon,
  DocumentIcon,
  GitHubIcon,
} from '@pluralsh/design-system'

import { isEmpty } from 'lodash-es'

import { type BasicRepo, type FullRepo } from '@src/data/getRepos'

export function RepoSocials({
  repo,
}: {
  repo?: (BasicRepo & Partial<Pick<FullRepo, 'license'>>) | null
}) {
  if (!repo) {
    return null
  }

  return (
    <>
      {repo.community?.homepage && (
        <Button
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href={repo.community?.homepage}
          tertiary
          startIcon={<BrowserIcon />}
        >
          {repo.displayName}’s website
        </Button>
      )}
      {repo.community?.gitUrl && (
        <Button
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href={repo.community?.gitUrl}
          tertiary
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
      )}
      {repo.license?.url && (
        <Button
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href={repo.license.url}
          tertiary
          startIcon={<CertificateIcon />}
        >
          License
        </Button>
      )}
      {!isEmpty(repo.recipes) && (
        <Button
          as="a"
          target="_blank"
          href={`https://docs.plural.sh/applications/${repo.name}`}
          tertiary
          startIcon={<DocumentIcon />}
        >
          Installing {repo.displayName} docs
        </Button>
      )}
    </>
  )
}
