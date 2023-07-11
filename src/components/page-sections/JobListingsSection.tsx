import Link from 'next/link'

import { jobUrl } from '@src/consts/routes'
import { type MinJobListingFragment } from '@src/generated/graphqlDirectus'

import { ResponsiveText } from '../Typography'

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

export function JobListingsSection({
  jobListings,
}: {
  jobListings: MinJobListingFragment[]
}) {
  const departmentJobs = departments.map((dept) => {
    const ret: [typeof dept, typeof jobListings] = [
      dept,
      jobListings.filter((job) => job.department === dept) || [],
    ]

    return ret
  })

  return (
    <>
      {departmentJobs.map(([dept, jobListings]) => (
        <div key={dept}>
          <ResponsiveText
            as="h3"
            textStyles={{ '': 'mHero2' }}
          >
            {deptToDisplayName[dept]}
          </ResponsiveText>
          {jobListings.map((job) => (
            <Link
              href={jobUrl(job.slug)}
              key={job.id}
            >
              <div>{job.job_title}</div>
              <div>{job.location}</div>
            </Link>
          ))}
        </div>
      ))}
    </>
  )
}
