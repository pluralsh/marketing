import { useCallback, useRef, useState } from 'react'

import { ColorModeProvider, TabList, TabPanel } from '@pluralsh/design-system'

import classNames from 'classnames'
import styled from 'styled-components'

import {
  type ImageFileFragment,
  type TeamMemberFragment,
} from '@src/generated/graphqlDirectus'

import { ComponentLinkTab } from '../ComponentLinkTab'
import { FullPage, StandardPage } from '../layout/FullPage'
import { TextLimiter } from '../layout/TextLimiter'
import { ResponsiveText, SectionHead } from '../Typography'

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
    backgroundColor: theme.colors['fill-three'],
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

const TeamTabList = styled(TabList)(({ theme }) => ({
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing.xxsmall,
}))

function Member({ member, ...props }: { member: TeamMemberFragment }) {
  return (
    <MemberSC {...props}>
      <div
        className="bg"
        {...(member.portrait
          ? {
              style: {
                backgroundImage: `url(${getImageUrl(member.portrait)})`,
              },
            }
          : {})}
      />
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

const teamTabs = [
  { key: '', label: 'View all' },
  { key: 'management', label: 'Management' },
  { key: 'product', label: 'Product' },
  { key: 'partner', label: 'Partners' },
]

export function TeamSection({ members }: { members: TeamMemberFragment[] }) {
  const tabStateRef = useRef<any>()
  const [category, setCategory] = useState('data')

  const tabStateProps = {
    orientation: 'horizontal',
    selectedKey: category,
    onSelectionChange: useCallback((key) => setCategory(key as string), []),
  }

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
    <div>
      <StandardPage className="mb-xxlarge md:mb-xxxxxlarge">
        <SectionHead
          h1="The team"
          h2="Our compact yet remarkable team"
          className=""
        />
        <TextLimiter className="mx-auto">
          <ResponsiveText
            textStyles={{ '': 'mBody2' }}
            color="text-light"
            className="text-center"
          >
            We’re a vibrant and dynamic team of employees, fueled by a passion
            for tackling fascinating challenges in the realm of cloud computing.
            As our team continues to grow, we thrive on exploring the
            ever-evolving landscape of Kubernetes, Elixir, Go, and React. With a
            shared enthusiasm for innovation and cutting-edge technologies, we
            eagerly dive into complex projects, seeking out novel solutions that
            push the boundaries of what’s possible.
          </ResponsiveText>
        </TextLimiter>
      </StandardPage>
      <FullPage>
        <TeamTabList
          className="mb-xxlarge xl:mb-xxxlarge"
          stateRef={tabStateRef}
          stateProps={tabStateProps}
        >
          {teamTabs.map((tab) => (
            <ComponentLinkTab key={tab.key}>{tab.label}</ComponentLinkTab>
          ))}
        </TeamTabList>
        <TabPanel
          stateRef={tabStateRef}
          className=""
        >
          <TeamList members={filteredMembers} />
        </TabPanel>
      </FullPage>
    </div>
  )
}

export function TeamList({ members }: { members: TeamMemberFragment[] }) {
  return (
    <ul
      className={classNames(
        'm-0 p-0 grid',
        'grid-cols1 sm:grid-cols-2 lg:grid-cols-3 xl::grid-cols-4 max:grid-cols4',
        'gap-large xl:gap-xlarge xxl:gap-xxlarge'
      )}
    >
      {members.map((member) => (
        <Member
          key={member.id}
          member={member}
        />
      ))}
    </ul>
  )
}
