import { useState } from 'react'

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

const MemberSC = styled.li(({ theme: _ }) => ({
  img: {
    display: 'block',
    width: '100%',
  },
}))

function Member({ member, ...props }: { member: TeamMemberFragment }) {
  console.log('file', member.portrait)

  return (
    <MemberSC {...props}>
      {member.portrait && <img src={getImageUrl(member.portrait)} />}
      <div>{member.name}</div>
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
