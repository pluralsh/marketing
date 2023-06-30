import { type ComponentProps } from 'react'

import chroma from 'chroma-js'
import classNames from 'classnames'
import styled from 'styled-components'

import { type CommunityContributor } from '../../data/getGithubData'
import { StandardPage } from '../layout/FullPage'
import { GradientBG } from '../layout/GradientBG'
import { ResponsiveText } from '../Typography'

export default function ContributorsSection({
  contributors,
}: {
  contributors: CommunityContributor[]
}) {
  return (
    <GradientBG
      size="100% 100%"
      image="/images/gradients/gradient-bg-4.jpg"
    >
      <StandardPage
        id="contributors-section"
        className="py-xxxxlarge xl:py-xxxxxxlarge"
      >
        <ResponsiveText
          className="mb-xxxlarge text-center"
          textStyles={{ '': 'mHero2', md: 'mHero2', xl: 'mHero1' }}
        >
          Our contributors
        </ResponsiveText>
        <ContributorsList contributors={contributors} />
      </StandardPage>
    </GradientBG>
  )
}

function ContributorsList({
  contributors,
}: {
  contributors: CommunityContributor[]
}) {
  return (
    <ul
      className={classNames(
        'grid',
        'grid-cols-1',
        'gap-x-xlarge gap-y-xlarge',
        'sm:grid-cols-2',
        'sm:gap-x-xlarge sm:gap-y-xxxlarge',
        'xl:grid-cols-3',
        'max:grid-cols-4'
      )}
    >
      {contributors.map((contributor) => (
        <li>
          <ContributorCard contributor={contributor} />
        </li>
      ))}
    </ul>
  )
}

const ContributorCardSC = styled.a(({ theme }) => ({
  display: 'flex',
  columnGap: theme.spacing.medium,
  alignItems: 'center',
  padding: theme.spacing.large,
  borderRadius: theme.borderRadiuses.large,
  background: `${chroma(theme.colors['fill-one']).alpha(0.6)}`,
  // backdropFilter: 'blur(6px)',
  border: theme.borders['fill-two'],
  '.portrait': {
    flexShrink: 0,
    borderRadius: '50%',
    border: theme.colors['border-fill-two'],
    overflow: 'hidden',
    width: theme.spacing.xxxxlarge,
    height: theme.spacing.xxxxlarge,
    backgroundSize: 'cover',
  },
  '.info': {
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing.xsmall,
  },
  '.name': {
    ...theme.partials.marketingText.subtitle1,
    color: theme.colors.text,
  },
  '.login': {
    ...theme.partials.marketingText.body1,
    color: theme.colors.text,
  },
}))

function ContributorCard({
  contributor,
}: { contributor: CommunityContributor } & ComponentProps<
  typeof ContributorCardSC
>) {
  return (
    <ContributorCardSC
      href={contributor.html_url}
      target="_blank"
      rel="noreferrer nofollow"
    >
      <div
        className="portrait"
        style={{ backgroundImage: `url(${contributor.avatar_url})` }}
      />
      <div className="info">
        <div className="name">{contributor.name || contributor.login}</div>
        <div className="login">@{contributor.login}</div>
      </div>
    </ContributorCardSC>
  )
}
