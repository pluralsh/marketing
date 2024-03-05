import { useCallback, useRef, useState } from 'react'

import { ColorModeProvider, TabList, TabPanel } from '@pluralsh/design-system'

import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { getImageUrl } from '@src/consts/routes'
import { type TeamMemberFragment } from '@src/generated/graphqlDirectus'
import { cn as classNames } from '@src/utils/cn'

import { ComponentLinkTab } from '../ComponentLinkTab'
import { FullPageWidth, StandardPageWidth } from '../layout/LayoutHelpers'
import { CenteredSectionHead } from '../SectionHeads'
import { ResponsiveText } from '../Typography'

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

// Using old inline-block layout technique so we can use 'text-wrap: balance'
// to keep things looking nice when it breaks to multiple lines
export const FilterTabList = styled(TabList)(({ theme }) => ({
  justifyContent: 'center',
  flexWrap: 'wrap',
  display: 'block',
  gap: theme.spacing.xxsmall,
  textAlign: 'center',
  textWrap: 'balance',
  marginBottom: -theme.spacing.xxsmall,
  [mqs.md]: {
    marginLeft: -theme.spacing.xxsmall / 2,
    marginRight: -theme.spacing.xxsmall / 2,
  },
  '&&': {
    display: 'block',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    marginBottom: theme.spacing.xxsmall,
    [mqs.md]: {
      display: 'inline-block',
      marginLeft: theme.spacing.xxsmall / 2,
      marginRight: theme.spacing.xxsmall / 2,
    },
  },
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
      >
        <img
          src=""
          className="sr-only"
          alt={`Portrait of ${member.name}`}
        />
      </div>
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
      <StandardPageWidth className="mb-xxlarge md:mb-xxxxxlarge">
        <CenteredSectionHead
          preHeading="The team"
          heading="Our compact yet remarkable team"
          intro={
            <p>
              We’re a vibrant and dynamic team of employees, fueled by a passion
              for tackling fascinating challenges in the realm of cloud
              computing. As our team continues to grow, we thrive on exploring
              the ever-evolving landscape of Kubernetes, Elixir, Go, and React.
              With a shared enthusiasm for innovation and cutting-edge
              technologies, we eagerly dive into complex projects, seeking out
              novel solutions that push the boundaries of what’s possible.
            </p>
          }
        />
      </StandardPageWidth>
      <FullPageWidth>
        <div className="mb-xxlarge xl:mb-xxxlarge">
          <FilterTabList
            stateRef={tabStateRef}
            stateProps={tabStateProps}
          >
            {teamTabs.map((tab) => (
              <ComponentLinkTab key={tab.key}>{tab.label}</ComponentLinkTab>
            ))}
          </FilterTabList>
        </div>
        <TabPanel
          stateRef={tabStateRef}
          className=""
        >
          <TeamList members={filteredMembers} />
        </TabPanel>
      </FullPageWidth>
    </div>
  )
}

export function TeamList({ members }: { members: TeamMemberFragment[] }) {
  return (
    <ul
      className={classNames(
        'm-0 grid p-0',
        'grid-cols1 max:grid-cols4 sm:grid-cols-2 lg:grid-cols-3 xl::grid-cols-4',
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
