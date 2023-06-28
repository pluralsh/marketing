import { useState } from 'react'

import { ColorModeProvider } from '@pluralsh/design-system'

import classNames from 'classnames'
import styled from 'styled-components'

import {
  type ImageFileFragment,
  type TeamMemberFragment,
} from '@src/generated/graphqlDirectus'

import { FullPage, StandardPage } from '../layout/FullPage'
import { ResponsiveText } from '../Typography'

const FILE_PREFIX = 'https://directus.plural.sh/assets'

function getImageUrl(image: ImageFileFragment) {
  return `${FILE_PREFIX}/${image.filename_disk}/${image.filename_download}`
}

const MemberSC = styled.li(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: theme.borderRadiuses.medium,
  paddingBottom: '138.889%',
  '.bg': {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
  },
  img: {
    display: 'block',
    width: '100%',
  },
}))

const MemberInfoSC = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing.xsmall,
  borderTopLeftRadius: theme.borderRadiuses.medium,
  borderTopRightRadius: theme.borderRadiuses.medium,
  borderTop: theme.borders['fill-three'],
  borderLeft: theme.borders['fill-three'],
  borderRight: theme.borders['fill-three'],
  color: theme.colors.text,
  position: 'absolute',
  bottom: 0,
  left: theme.spacing.medium,
  right: theme.spacing.medium,
  backdropFilter: 'blur(25px)',
  background: 'rgba(33,36,44, 0.4)',
  paddingTop: theme.spacing.xlarge,
  paddingLeft: theme.spacing.medium,
  paddingRight: theme.spacing.medium,
  paddingBottom: theme.spacing.small,
}))

function Member({ member, ...props }: { member: TeamMemberFragment }) {
  console.log('file', member.portrait)

  return (
    <MemberSC {...props}>
      {member.portrait && (
        <div
          className="bg"
          style={{ backgroundImage: `url(${getImageUrl(member.portrait)})` }}
        />
      )}
      <ColorModeProvider mode="dark">
        <MemberInfoSC>
          <ResponsiveText
            as="h4"
            textStyles={{ '': 'mSubtitle1' }}
          >
            {member.name}
          </ResponsiveText>
          <ResponsiveText
            as="p"
            textStyles={{ '': 'aOverline' }}
          >
            {member.pronouns}
          </ResponsiveText>
          <ResponsiveText
            as="p"
            textStyles={{ '': 'mLabel' }}
          >
            {member.title}
          </ResponsiveText>
        </MemberInfoSC>
      </ColorModeProvider>
    </MemberSC>
  )
}

export function TeamSection({ members }: { members: TeamMemberFragment[] }) {
  return (
    <>
      <StandardPage>
        <ResponsiveText textStyles={{ '': 'mTitle1' }}>
          Let's do this
        </ResponsiveText>
      </StandardPage>
      <FullPage>
        <TeamList members={members} />
      </FullPage>
    </>
  )
}

export function TeamList({ members }: { members: TeamMemberFragment[] }) {
  const [category, _setCategory] = useState('')

  const filteredMembers = members.filter((member) => {
    if (!category) {
      return true
    }
    const categories = member.categories as unknown

    if (Array.isArray(categories)) {
      return categories.includes(category)
    }

    return false
  })

  return (
    <ul
      className={classNames(
        'm-0 p-0 grid',
        'grid-cols1 sm:grid-cols-2 lg:grid-cols-3 xl::grid-cols-4 max:grid-cols4',
        'gap-large xl:gap-xlarge xxl:gap-xxlarge'
      )}
    >
      {filteredMembers.map((member) => (
        <Member member={member} />
      ))}
    </ul>
  )
}
