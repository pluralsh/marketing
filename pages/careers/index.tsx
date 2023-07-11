import { type ReactNode } from 'react'

import { ColorModeProvider } from '@pluralsh/design-system'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

import classNames from 'classnames'

import { FooterVariant } from '@src/components/FooterFull'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { StandardPage } from '@src/components/layout/FullPage'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { JobListingsSection } from '@src/components/page-sections/JobListingsSection'
import { ScrollToLink } from '@src/components/ScrollToLink'
import { ResponsiveText } from '@src/components/Typography'
import { jobUrl } from '@src/consts/routes'
import { getJobListings } from '@src/data/getJobListings'
import { type MinJobListingFragment } from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

// const PAGE_PARAM_NAME = 'careers' as const

// export const getStaticPaths: GetStaticPaths = async () =>
//   indexPageStaticPaths(PAGE_PARAM_NAME)

export function BasicPageHeader({
  pageName,
  title,
  subtitle,
  ctas,
}: {
  pageName: ReactNode
  title: ReactNode
  subtitle: ReactNode
  ctas: ReactNode
}) {
  return (
    <StandardPage>
      <div
        className={classNames(
          'pt-xxxxlarge',
          'pb-xxxlarge',
          'md:pt-xxxxlarge',
          'md:pb-xxxxlarge',
          'lg:pt-xxxxxlarge',
          'lg:pb-xxxxxxlarge'
        )}
      >
        <Columns className="columns:items-center gap-y-xxxlarge">
          <EqualColumn className="justify-start">
            <TextLimiter className="flex flex-col gap-y-xlarge md:gap-y-xxlarge">
              <div className="flex flex-col gap-y-medium">
                <ResponsiveText
                  className="[text-wrap:balance]"
                  as="h1"
                  textStyles={{ '': 'mLabel' }}
                >
                  {pageName}
                </ResponsiveText>
                <ResponsiveText
                  className="[text-wrap:balance]"
                  as="h2"
                  textStyles={{
                    '': 'mHero2',
                    md: 'mBigHeader',
                  }}
                >
                  {title}
                </ResponsiveText>
              </div>
              <div>{ctas}</div>
            </TextLimiter>
          </EqualColumn>
          <EqualColumn>
            <TextLimiter>
              <ResponsiveText
                as="p"
                textStyles={{ '': 'mBody1' }}
                color="text-light"
                className="[text-wrap:balance] "
              >
                {subtitle}
              </ResponsiveText>
            </TextLimiter>
          </EqualColumn>
        </Columns>
      </div>
    </StandardPage>
  )
}

export default function Index({ jobs }: { jobs: MinJobListingFragment[] }) {
  return (
    <>
      <Head>
        <Script
          type="text/javascript"
          src="//js.hsforms.net/forms/embed/v2.js"
        />
      </Head>
      <HeaderPad
        as={GradientBG}
        size="cover"
        position="top middle"
        image="/images/gradients/gradient-bg-5.jpg"
      >
        <BasicPageHeader
          title="Join us and build something incredible"
          subtitle={
            <>
              At Plural, we believe that there is a better way to solve the
              third major constraint—distributed systems operational cost—that
              benefits OSS developers and DevOps teams alike.
            </>
          }
          ctas={
            <ScrollToLink scrollToTarget="#open-positions">
              View open positions
            </ScrollToLink>
          }
          pageName="Careers"
        />
      </HeaderPad>
      <ColorModeProvider mode="light">
        <div
          id="open-positions"
          className="bg-fill-zero py-xxxxlarge text-text"
        >
          <StandardPage>
            <JobListingsSection jobListings={jobs} />
          </StandardPage>
        </div>
      </ColorModeProvider>
    </>
  )
}

export const getStaticProps = async () => {
  const { data: jobs, error: jobsError } = await getJobListings()

  return propsWithGlobalSettings({
    footerVariant: FooterVariant.kitchenSink,
    jobs: jobs || [],
    errors: [...(jobsError ? [jobsError] : [])],
  })
}
