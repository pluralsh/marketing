import type { Job } from '@/content/types'

import frontEndEng from './front-end-eng'
import jobAe from './job-ae'
import techLead from './tech-lead'

/** Open roles, in the order they're listed on the careers page. */
export const jobs: Job[] = [frontEndEng, jobAe, techLead]

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug)
}
