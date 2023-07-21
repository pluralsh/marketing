import { type ComponentProps } from 'react'

import chroma from 'chroma-js'
import classNames from 'classnames'
import styled from 'styled-components'

import { mShadows } from '@src/styles/extraStyles'

import { type CommunityContributor } from '../../data/getGithubData'
import { GradientBG } from '../layout/GradientBG'
import { StandardPageWidth } from '../layout/LayoutHelpers'
import { CenteredSectionHead } from '../SectionHeads'

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
      <StandardPageWidth
        id="contributors-section"
        className="py-xxxxlarge xl:py-xxxxxxlarge"
      >
        <CenteredSectionHead
          heading="Our contributors"
          className="mb-xxxlarge"
        />
        <ContributorsList contributors={contributors} />
      </StandardPageWidth>
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
  transition: 'all 0.2s ease',
  '&:hover': {
    transition: 'all 0.25s cubic-bezier(.42,0,.59,.83)',
    borderColor: theme.colors['border-primary'],
    background: `${chroma(theme.colors['fill-two']).alpha(0.6)}`,
    boxShadow: mShadows.purple.modal,
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
      rel="noopener noreferrer"
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
