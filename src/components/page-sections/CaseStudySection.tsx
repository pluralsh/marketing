/*
https://www.plural.sh/blog/fnatic-deploys-data-stack-with-plural/
https://www.plural.sh/blog/digitas-standardized-application-deployment-by-using-plural/
https://www.plural.sh/blog/how-modeo-utilizes-plural-for-their-customers/
*/

import Link from 'next/link'

import urlJoin from 'url-join'

import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { StandardPage } from '@src/components/layout/FullPage'
import { Cta, ResponsiveText } from '@src/components/Typography'
import { APPS_BASE_URL } from '@src/consts/routes'
import { type MinRepo } from '@src/data/getRepos'

import { AppCard } from '../AppOrStackCard'

export function CaseStudySection({ apps }: { apps: MinRepo[] }) {
  return (
    <StandardPage className="py-xxxlarge">
      <Columns className="gap-y-xxlarge">
        <EqualColumn>
          <ResponsiveText
            as="h2"
            textStyles={{ '': 'mLabel' }}
            className="mb-large"
          >
            Case Study
          </ResponsiveText>
          <ResponsiveText
            as="h3"
            className="mb-large"
            textStyles={{ '': 'mTitle1' }}
          >
            How Modeo utilizes Plural for their customers
          </ResponsiveText>
          <div className="flex flex-col gap-y-medium" />
          <ResponsiveText
            as="p"
            textStyles={{ '': 'mBody2' }}
          >
            Modeo’s goal is to make working with data a much simpler process for
            even the smallest of companies that don’t have a data engineering
            presence.
          </ResponsiveText>
          <ResponsiveText
            as="p"
            textStyles={{ '': 'mBody2' }}
          >
            “We’re a small team with a lot on our plate. For Kubernetes
            deployments, we would have to think about terraform, security,
            access control, and a bunch of other things. We just needed to get
            our data infrastructure to work as quickly as possible.”
          </ResponsiveText>
          <ResponsiveText
            as="p"
            textStyles={{ '': 'mBody2' }}
          >
            Ismael estimates that it would have taken his team weeks to deploy
            their application. “Plural was great for our small team as it helped
            us go from weeks to hours to get our Kubernetes deployments up and
            running,” he added.
          </ResponsiveText>
          <Cta
            className="mt-large"
            target="_blank"
            href="https://www.plural.sh/blog/how-modeo-utilizes-plural-for-their-customers/"
          >
            Read full study
          </Cta>
        </EqualColumn>
        <EqualColumn>
          <div className="rounded-large overflow-hidden">
            <img src="/images/case-study/modeo.png" />
          </div>
          <div className="mt-large">
            <ResponsiveText
              as="h3"
              textStyles={{ '': 'mLabel' }}
              className="mb-small"
            >
              Modeo’s data stack
            </ResponsiveText>
            <div className="flex gap-small">
              {apps.map((app) => (
                <AppCard
                  as={Link}
                  href={urlJoin(APPS_BASE_URL, app.name)}
                  key={app.name}
                  className="flex-grow basis-0"
                  size="xsmall"
                  app={app}
                />
              ))}
            </div>
          </div>
        </EqualColumn>
      </Columns>
    </StandardPage>
  )
}

export const getCaseStudyApps = (repos?: MinRepo[] | null) =>
  repos?.filter((repo) =>
    ['airflow', 'airbyte', 'clickhouse'].includes(repo.name)
  ) || []
