import { ColorModeProvider } from '@pluralsh/design-system'
import { type GetStaticPaths, type GetStaticProps } from 'next'

import { FooterVariant } from '@src/components/FooterFull'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import {
  FullPageWidth,
  StandardPageWidth,
} from '@src/components/layout/LayoutHelpers'
import { MarkdocMarketingPage } from '@src/components/MarkdocMarketingPage'
import { BackButton } from '@src/components/Nav'
import { ResponsiveText } from '@src/components/Typography'
import { getJobListing, getJobListingSlugs } from '@src/data/getJobListings'
import { type FullJobListingFragment } from '@src/generated/graphqlDirectus'
import { ReadMdContent } from '@src/markdoc/mdParser'
import { type MarkdocPage } from '@src/markdoc/mdSchema'
import { combineErrors } from '@src/utils/combineErrors'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

const PAGE_PARAM_NAME = 'job' as const

export default function Index({
  markdoc,
  job,
}: {
  markdoc: MarkdocPage
  job: FullJobListingFragment
}) {
  return (
    <ColorModeProvider mode="light">
      <HeaderPad className="bg-fill-zero">
        <FullPageWidth className="pt-[40px]">
          <BackButton href="/careers#open-positions" />
        </FullPageWidth>
        <StandardPageWidth className="py-xxxxlarge">
          <MarkdocMarketingPage
            preContent={
              <div className="pb-xxxlarge">
                <ResponsiveText
                  as="h1"
                  textStyles={{ '': 'mHero1', md: 'mBigHeader' }}
                  color="text"
                  className="mt-medium "
                >
                  {job.job_title}
                </ResponsiveText>
                <ResponsiveText
                  as="h3"
                  textStyles={{ '': 'mSubtitle2' }}
                  color="text-light"
                >
                  Location: {job.location}
                </ResponsiveText>
              </div>
            }
            markdoc={markdoc}
          />
        </StandardPageWidth>
      </HeaderPad>
    </ColorModeProvider>
  )
}

export type JobPageProps = {
  job: FullJobListingFragment
  markdoc: MarkdocPage
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: slugs } = await getJobListingSlugs()

  return {
    paths: (slugs || []).map((slug) => ({
      params: { [PAGE_PARAM_NAME]: slug },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<JobPageProps> = async (context) => {
  const slug = context.params?.[PAGE_PARAM_NAME]

  if (!slug) {
    return { notFound: true }
  }

  const { data: job, error: jobError } = await getJobListing(slug)

  const markdoc = job?.content
    ? await ReadMdContent(job.content, job.slug)
    : false

  if (!job || !markdoc) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    metaTitle: `Careers – ${job?.job_title}`,
    metaDescription:
      'We are a growing team working on interesting problems in the cloud with Kubernetes, Elixir, Go, and React. We’re always interested in hiring new talent!',
    showHeaderBG: true,
    footerVariant: FooterVariant.kitchenSink,
    job,
    markdoc,
    errors: combineErrors([jobError]),
  })
}
