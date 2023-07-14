import { useCallback, useRef, useState } from 'react'
import { type ComponentProps, type ReactNode } from 'react'

import { Chip, FillLevelProvider, TabPanel } from '@pluralsh/design-system'
import Link from 'next/link'

import { isArray, isEmpty } from 'lodash-es'
import styled from 'styled-components'

import { jobUrl } from '@src/consts/routes'
import { type MinJobListingFragment } from '@src/generated/graphqlDirectus'

import { ComponentLinkTab } from '../ComponentLinkTab'
import { Columns, EqualColumn } from '../layout/Columns'
import { ShadowedCard } from '../ShadowedCard'
import { ResponsiveText } from '../Typography'

import { FilterTabList } from './TeamSection'

const departments = [
  'business_dev',
  'engineering',
  'product',
  'design',
  'marketing',
] as const

type Department = (typeof departments)[number]

const deptToDisplayName: Record<Department, string> = {
  business_dev: 'Sales & Business Development',
  engineering: 'Engineering',
  product: 'Product',
  design: 'Design',
  marketing: 'Marketing',
}

const deptToDescription: Record<Department, ReactNode> = {
  business_dev: 'Short description about the Biz Dev department',
  engineering: 'Short description about the Engineering department',
  product: 'Short description about the Product department',
  design: 'Short description about the Design department',
  marketing: 'Short description about the Marketing department',
}

const JobCardSC = styled(ShadowedCard)(({ theme }) => ({
  color: theme.colors.text,
  display: 'flex',

  flexDirection: 'column',
  padding: theme.spacing.large,
  rowGap: theme.spacing.small,
  '.top': {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    columnGap: theme.spacing.medium,
    rowGap: theme.spacing.xxsmall,
  },
}))

export const JobCardLocationSC = styled.div(({ theme }) => ({
  flexShrink: 0,
  ...theme.partials.marketingText.label,
  color: theme.colors['text-light'],
}))

export const JobCardTitleSC = styled.h4(({ theme }) => ({
  ...theme.partials.marketingText.subtitle2,
  flexGrow: 1,
}))
export const JobCardContentSC = styled.p(({ theme }) => ({
  ...theme.partials.marketingText.body2,
  color: theme.colors.text,
  '& *:any-link': {
    ...theme.partials.marketingText.inlineLink,
  },
}))
export const JobCardTagListSC = styled.ul(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing.small,
}))
export const JobCardTagSC = styled.li(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing.small,
  border: theme.borders.default,
  borderRadius: theme.borderRadiuses.medium,
  background: theme.colors['fill-zero'],
  color: theme.colors.blue[350],
}))

export function JobCard({
  title,
  location,
  tags,
  children,
  ...props
}: {
  title: ReactNode
  location?: ReactNode
  children?: ReactNode
  tags?: unknown
} & ComponentProps<typeof JobCardSC>) {
  return (
    <JobCardSC
      $clickable={!!props.href}
      {...props}
    >
      <div className="top">
        <JobCardTitleSC>{title}</JobCardTitleSC>
        {location && <JobCardLocationSC>{location}</JobCardLocationSC>}
      </div>
      {isArray(tags) && !isEmpty(tags) && (
        <JobCardTagListSC>
          <FillLevelProvider value={1}>
            {tags.map((tag) => (
              <Chip severity="info">{tag}</Chip>
            ))}
          </FillLevelProvider>
        </JobCardTagListSC>
      )}
      {children && <JobCardContentSC>{children}</JobCardContentSC>}
    </JobCardSC>
  )
}

export function JobListingsSection({
  jobListings,
}: {
  jobListings: MinJobListingFragment[]
}) {
  const tabStateRef = useRef<any>()
  const [dept, setDept] = useState('all')
  const tabStateProps = {
    orientation: 'horizontal',
    selectedKey: dept,
    onSelectionChange: useCallback((key) => setDept(key as string), []),
  }
  const deptJobs = departments.map((dept) => {
    const ret: [typeof dept, typeof jobListings] = [
      dept,
      jobListings.filter((job) => job.department === dept) || [],
    ]

    return ret
  })

  const filteredDeptJobs =
    dept === 'all' ? deptJobs : deptJobs.filter((s) => s[0] === dept)

  return (
    <div className="flex flex-col gap-y-xxlarge md:gap-y-xxxlarge">
      <FilterTabList
        stateRef={tabStateRef}
        stateProps={tabStateProps}
      >
        <ComponentLinkTab key="all">View all</ComponentLinkTab>
        {departments.map((dept) => (
          <ComponentLinkTab key={dept}>
            {deptToDisplayName[dept]}
          </ComponentLinkTab>
        ))}
      </FilterTabList>
      <TabPanel
        stateRef={tabStateRef}
        className="flex flex-col gap-y-xxlarge md:gap-y-xxxlarge"
      >
        {filteredDeptJobs.map(([dept, jobListings]) => (
          <Columns key={dept}>
            <EqualColumn className="pb-medium">
              <ResponsiveText
                as="h3"
                textStyles={{ '': 'mTitle2', md: 'mTitle1' }}
              >
                {deptToDisplayName[dept]}
              </ResponsiveText>
              <ResponsiveText
                as="p"
                textStyles={{ '': 'mBody2' }}
                color="text-light"
                className="pt-small"
              >
                {deptToDescription[dept]}
              </ResponsiveText>
            </EqualColumn>
            <EqualColumn className="flex flex-col gap-large">
              {!isEmpty(jobListings) ? (
                jobListings.map((job) => (
                  <JobCard
                    key={job.id}
                    as={Link}
                    title={job.job_title}
                    location={job.location}
                    tags={job.tags}
                    href={jobUrl(job.slug)}
                  />
                ))
              ) : (
                <JobCard title="No current open positions">
                  We don’t have any roles right now for this category, however
                  please <Link href="/contact">contact us</Link> with your ideal
                  role and we will get in contact with you.
                </JobCard>
              )}
            </EqualColumn>
          </Columns>
        ))}
      </TabPanel>
    </div>
  )
}
