import {
  Button,
  GitHubLogoIcon,
  GitLabLogoIcon,
  GoogleLogoIcon,
} from '@pluralsh/design-system'

import classNames from 'classnames'

import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { ComponentLink } from '@src/components/Typography'

export function TryPluralForFreeSection() {
  return (
    <StandardPageWidth>
      <div className={classNames('flex flex-col gap-xlarge')}>
        <CenteredSectionHead heading="Try Plural for free" />
        <div className="text-center flex flex-wrap flex-col gap-y-small mx-auto">
          <div className="flex flex-col md:flex-row justify-center gap-y-small gap-x-large">
            <Button
              startIcon={<GoogleLogoIcon fullColor />}
              secondary
              as="a"
              href="https://accounts.google.com/o/oauth2/v2/auth?client_id=657418122889-q0c9relgrgb4ae0u2houbjk3e6n420lv.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapp.plural.sh%2Foauth%2Fcallback%2Fgoogle&response_type=code&scope=profile+email"
              target="_blank"
            >
              Continue with Google
            </Button>
            <Button
              startIcon={
                <GitHubLogoIcon
                  size="18"
                  color="icon-default"
                />
              }
              secondary
              as="a"
              href="https://github.com/login/oauth/authorize?client_id=06d6a9dd27bd2eaac3e8&redirect_uri=https%3A%2F%2Fapp.plural.sh%2Foauth%2Fcallback%2Fgithub&response_type=code&scope=user+user%3Aemail+user%3Aname"
              target="_blank"
            >
              Continue with GitHub
            </Button>
            <Button
              startIcon={<GitLabLogoIcon fullColor />}
              secondary
              as="a"
              href="https://gitlab.com/oauth/authorize?client_id=96dc439ce4bfab647a07b96878210015ab83f173b7f5162218954a95b8c10ebe&redirect_uri=https%3A%2F%2Fapp.plural.sh%2Foauth%2Fcallback%2Fgitlab&response_type=code&scope=api+profile+email+openid"
              target="_blank"
            >
              Continue with GitLab
            </Button>
          </div>
          <ComponentLink
            href="https://app.plural.sh/signup"
            target="_blank"
            rel="noreferrer"
          >
            Sign up with email
          </ComponentLink>
        </div>
      </div>
    </StandardPageWidth>
  )
}
