import { ColorModeProvider } from '@pluralsh/design-system'
import { type GetStaticPaths, type GetStaticProps } from 'next'
import Head from 'next/head'
import Script from 'next/script'

import { FooterVariant } from '@src/components/FooterFull'
import { FullPage, StandardPage } from '@src/components/layout/FullPage'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { MarkdocMarketingPage } from '@src/components/MarkdocMarketingPage'
import { BackButton } from '@src/components/Nav'
import { ResponsiveText } from '@src/components/Typography'
import { getJobListing, getJobListingSlugs } from '@src/data/getJobListings'
import { type FullJobListingFragment } from '@src/generated/graphqlDirectus'
import { ReadMdContent } from '@src/markdoc/mdParser'
import { type MarkdocPage } from '@src/markdoc/mdSchema'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

const PAGE_PARAM_NAME = 'job' as const

export const getStaticPaths: GetStaticPaths = async () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      paths: [],
      fallback: 'blocking' as const,
    }
  }

  const { data: slugs } = await getJobListingSlugs()

  return {
    paths: (slugs || []).map((slug) => ({
      params: { [PAGE_PARAM_NAME]: slug },
    })),
    fallback: false as const,
  }
}

export default function Index({
  markdoc,
  job,
}: {
  markdoc: MarkdocPage
  job: FullJobListingFragment
}) {
  return (
    <>
      <Head>
        <Script
          type="text/javascript"
          src="//js.hsforms.net/forms/embed/v2.js"
        />
      </Head>
      <ColorModeProvider mode="light">
        <HeaderPad className="bg-fill-zero">
          <FullPage className="pt-[40px]">
            <BackButton href="/careers#open-positions" />
          </FullPage>
          <StandardPage className="py-xxxxlarge">
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
          </StandardPage>
        </HeaderPad>
      </ColorModeProvider>
    </>
  )
}

export type JobPageProps = {
  job: FullJobListingFragment
  markdoc: MarkdocPage
}

export const getStaticProps: GetStaticProps<JobPageProps> = async (context) => {
  const slug = context.params?.[PAGE_PARAM_NAME]

  console.log('slug', slug)
  console.log('ctx', context)

  if (!slug) {
    return { notFound: true }
  }

  const { data: job, error: jobError } = await getJobListing(slug)

  console.log('job', job)
  console.log('jobcontent', job?.content)
  const markdoc = job?.content
    ? await ReadMdContent(job.content, job.slug)
    : false

  if (!job || !markdoc) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    footerVariant: FooterVariant.kitchenSink,
    showHeaderBG: true,
    metaTitle: job?.job_title,
    job,
    markdoc,
    errors: [...(jobError ? [jobError] : [])],
  })
}
