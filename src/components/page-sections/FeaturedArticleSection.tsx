/*
https://www.plural.sh/blog/fnatic-deploys-data-stack-with-plural/
https://www.plural.sh/blog/digitas-standardized-application-deployment-by-using-plural/
https://www.plural.sh/blog/how-modeo-utilizes-plural-for-their-customers/
*/

import Link from 'next/link'

import { isEmpty } from 'lodash-es'

import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { Body2, Cta, ResponsiveText } from '@src/components/Typography'
import { appUrl, getImageUrl } from '@src/consts/routes'
import { type MinRepo } from '@src/data/getRepos'
import { type FeaturedArticleFragment } from '@src/generated/graphqlDirectus'

import { AppCard } from '../AppOrStackCard'
import BasicMarkdown from '../BasicMarkdown'
import { SubsectionHead } from '../SectionHeads'

export function FeaturedArticleSection({
  apps,
  featuredArticle,
}: {
  apps: MinRepo[]
  featuredArticle?: FeaturedArticleFragment | null | undefined
}) {
  if (!featuredArticle) {
    return null
  }

  return (
    <Columns className="gap-y-xxlarge">
      <EqualColumn>
        <SubsectionHead
          preHeading={featuredArticle.label}
          heading={featuredArticle.title}
          headingProps={{ textStyles: { '': 'mTitle1' } }}
          className="mb-large"
        />
        <Body2 as="div">
          <BasicMarkdown text={featuredArticle.content} />
        </Body2>
        {!isEmpty(featuredArticle.ctas) && (
          <div className="mt-large">
            {featuredArticle.ctas?.map(
              (cta) =>
                cta?.url && (
                  <Cta
                    target="_blank"
                    href={cta.url}
                  >
                    {cta.label || 'Read full study'}
                  </Cta>
                )
            )}
          </div>
        )}
      </EqualColumn>
      <EqualColumn>
        <div className="rounded-large overflow-hidden">
          {featuredArticle.hero_image && (
            <img src={getImageUrl(featuredArticle.hero_image)} />
          )}
        </div>
        {!isEmpty(apps) && (
          <div className="mt-large">
            {featuredArticle.stack_label && (
              <ResponsiveText
                as="h3"
                textStyles={{ '': 'mLabel' }}
                className="mb-small"
              >
                {featuredArticle.stack_label}
              </ResponsiveText>
            )}
            <div className="w-full grid gap-small grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
              {apps.map((app) => (
                <AppCard
                  as={Link}
                  href={appUrl(app.name)}
                  key={app.name}
                  className="flex-grow basis-0"
                  size="xsmall"
                  app={app}
                />
              ))}
            </div>
          </div>
        )}
      </EqualColumn>
    </Columns>
  )
}

export const getFeaturedArticleApps = (
  repos: MinRepo[] | null,
  appList: string[]
) => repos?.filter((repo) => appList.includes(repo.name)) || []
