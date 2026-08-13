/**
 * Server-side fetch of open roles from Ashby's public Job Posting API.
 *
 * Docs: https://developers.ashbyhq.com/reference/job-posting-api
 * The board name is the slug in your Ashby board URL (jobs.ashbyhq.com/<name>).
 */

const ASHBY_JOB_BOARD_NAME =
  process.env.NEXT_PUBLIC_ASHBY_JOB_BOARD_NAME?.trim() || 'Plural'

const ASHBY_POSTING_API = `https://api.ashbyhq.com/posting-api/job-board/${ASHBY_JOB_BOARD_NAME}?includeCompensation=true`

// Roles change often; re-fetch at most once an hour (ISR).
const REVALIDATE_SECONDS = 60 * 60

/** Raw shape returned by the Ashby posting API (only the fields we use). */
type AshbyApiJob = {
  id: string
  title: string
  team?: string
  department?: string
  location?: string
  workplaceType?: string
  employmentType?: string
  isRemote?: boolean
  isListed?: boolean
  jobUrl: string
  applyUrl: string
  compensation?: {
    compensationTierSummary?: string | null
  } | null
}

type AshbyApiResponse = {
  jobs?: AshbyApiJob[]
}

/** Normalized job used by the UI. */
export type AshbyJob = {
  id: string
  title: string
  /** Team/department — used as the filterable category. */
  category: string
  /** Human-readable location, e.g. "New York City · Hybrid". */
  location: string
  /** Compensation summary, e.g. "$175K – $200K • Offers Equity", if published. */
  compensation: string | null
  /** External Ashby posting URL (description + apply button). */
  url: string
}

function toLocationLabel(job: AshbyApiJob): string {
  const parts = [job.location, job.workplaceType].filter(Boolean)
  return parts.join(' · ')
}

function normalize(job: AshbyApiJob): AshbyJob {
  return {
    id: job.id,
    title: job.title,
    category: job.team || job.department || '',
    location: toLocationLabel(job),
    compensation: job.compensation?.compensationTierSummary ?? null,
    url: job.jobUrl,
  }
}

/**
 * Fetches the currently-listed open roles from Ashby. Runs on the server,
 * so it avoids CORS and keeps the third-party script off the page. Returns an
 * empty array on any error so the section degrades gracefully.
 */
export async function getAshbyJobs(): Promise<AshbyJob[]> {
  try {
    const res = await fetch(ASHBY_POSTING_API, {
      next: { revalidate: REVALIDATE_SECONDS },
    })

    if (!res.ok) {
      console.error(`Ashby posting API returned ${res.status}`)
      return []
    }

    const data = (await res.json()) as AshbyApiResponse

    return (data.jobs ?? [])
      .filter((job) => job.isListed !== false)
      .map(normalize)
  } catch (error) {
    console.error('Failed to fetch Ashby jobs', error)
    return []
  }
}
