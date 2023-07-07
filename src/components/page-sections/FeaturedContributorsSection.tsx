import { type ComponentProps, cloneElement } from 'react'

import { GitHubLogoIcon, TwitterIcon } from '@pluralsh/design-system'

import { isEmpty } from 'lodash-es'
import styled from 'styled-components'

import { getImageUrl } from '@src/consts/routes'
import { type FeaturedContributorFragment } from '@src/generated/graphqlDirectus'

import LinkedInIcon from '../icons/LinkedInIcon'
import { Cta, ResponsiveText } from '../Typography'

const SocialLinkSC = styled.a(({ theme }) => ({
  padding: theme.spacing.xxsmall,
  borderRadius: theme.borderRadiuses.medium,
}))

function SocialLink({ icon, ...props }: any) {
  const iconClone = cloneElement(icon, { size: 16 })

  return (
    <SocialLinkSC
      target="_blank"
      {...props}
    >
      {iconClone}
    </SocialLinkSC>
  )
}

const FeaturedContributorCardSC = styled.div(({ theme }) => ({
  background: theme.colors['fill-one'],
  border: theme.borders['fill-one'],
  borderRadius: theme.borderRadiuses.large,
  padding: theme.spacing.large,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.large,
  '.headerSection': {
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing.large,
  },
  '.portrait': {
    width: theme.spacing.xxxxlarge,
    height: theme.spacing.xxxxlarge,
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
  },
  '.name': {
    ...theme.partials.marketingText.title1,
  },
  '.title': {
    ...theme.partials.marketingText.label,
    marginTop: theme.spacing.xsmall,
  },
  '.socials': {
    ...theme.partials.marketingText.label,
    color: theme.colors['text-light'],
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing.xxsmall,
    marginTop: theme.spacing.small,
  },
  '.content': {
    ...theme.partials.marketingText.body2,
    color: theme.colors['text-xlight'],
  },
  '.ctas': {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
}))

function FeaturedContributorCard({
  contributor,
  ...props
}: { contributor: FeaturedContributorFragment } & ComponentProps<
  typeof FeaturedContributorCardSC
>) {
  return (
    <FeaturedContributorCardSC {...props}>
      <div className="headerSection">
        <div
          className="portrait"
          {...(contributor.portrait
            ? {
                style: {
                  backgroundImage: `url(${getImageUrl(contributor.portrait)})`,
                },
              }
            : {})}
        />

        <div className="">
          <div className="name">{contributor.name}</div>
          <div className="title">{contributor.title}</div>
          <ul className="socials">
            {contributor?.social_github_url && (
              <li>
                <SocialLink
                  icon={<GitHubLogoIcon />}
                  href={contributor.social_github_url}
                />
              </li>
            )}
            {contributor?.social_twitter_url && (
              <li>
                <SocialLink
                  icon={<TwitterIcon />}
                  href={contributor.social_twitter_url}
                />
              </li>
            )}
            {contributor?.social_linkedin_url && (
              <li>
                <SocialLink
                  icon={<LinkedInIcon />}
                  href={contributor.social_linkedin_url}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
      {contributor.content && (
        <div className="content">{contributor.content}</div>
      )}
      {!isEmpty(contributor?.ctas) && (
        <div className="ctas">
          {contributor?.ctas?.map(
            (cta) =>
              !!cta?.url && (
                <Cta
                  key={`${cta.label}-${cta.url}`}
                  target="_blank"
                  href={cta.url}
                >
                  {cta.label || cta.url}
                </Cta>
              )
          )}
        </div>
      )}
    </FeaturedContributorCardSC>
  )
}

export default function FeaturedContributorsSection({
  featuredContributors,
}: {
  featuredContributors: FeaturedContributorFragment[]
}) {
  return (
    <div>
      <ResponsiveText
        as="h3"
        textStyles={{ '': 'mLabel' }}
        className="mb-medium"
      >
        Featured Contributor{(featuredContributors || []).length > 1 && 's'}
      </ResponsiveText>
      <div className="flex flex-col gap-medium">
        {featuredContributors.map((c) => (
          <FeaturedContributorCard
            key={c.id}
            contributor={c}
          />
        ))}
      </div>
    </div>
  )
}
