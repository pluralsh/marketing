import type { Job } from '@/content/types'

import frontEndEng from './front-end-eng'
import customerSuccess from './customer-success'
import jobAe from './job-ae'
import productMarketingManager from './product-marketing-manager'
import techLead from './tech-lead'
import productDesigner from './product-designer'

/** Open roles, in the order they're listed on the careers page. */
export const jobs: Job[] = [
  frontEndEng,
  customerSuccess,
  jobAe,
  productMarketingManager,
  techLead,
  productDesigner,
]

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug)
}
