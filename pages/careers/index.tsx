import { type ComponentProps } from 'react'

import { ColorModeProvider } from '@pluralsh/design-system'
import Head from 'next/head'
import Script from 'next/script'

import { ResponsiveAspectRatioSC } from '@src/components/AspectRatio'
import { BenefitCard } from '@src/components/BenefitCard'
import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import {
  StandardPageSection,
  StandardPageWidth,
} from '@src/components/layout/LayoutHelpers'
import { JobListingsSection } from '@src/components/page-sections/JobListingsSection'
import { BasicPageHero } from '@src/components/PageHeros'
import { ScrollToLink } from '@src/components/ScrollToLink'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { getJobListings } from '@src/data/getJobListings'
import { type MinJobListingFragment } from '@src/generated/graphqlDirectus'
import { cn as classNames } from '@src/utils/cn'
import { combineErrors } from '@src/utils/combineErrors'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { ValueCard } from '../../src/components/ValueCard'

function PhotosSection() {
  return (
    <div className="bg-fill-zero py-xxlarge">
      <StandardPageWidth>
        <div
          className={classNames(
            'grid grid-cols-1 gap-large sm:grid-cols-2',
            'columns:grid-cols-4'
          )}
        >
          <Photo
            className="columns:row-span-2"
            ratios={{ '': '2 / 3', columns: null }}
            url="/images/careers/photo-1.jpg"
          />
          <Photo
            className="columns:col-start-4 columns:row-span-2"
            ratios={{ '': '2 / 3', columns: null }}
            url="/images/careers/photo-2.jpg"
          />{' '}
          <Photo
            className="sm:col-span-2 columns:col-start-2 columns:row-start-1"
            ratios={{ '': '1 / 1', sm: '2 / 1', columns: '5 / 2' }}
            url="/images/careers/photo-group-1.jpg"
          />{' '}
          <Photo
            className="sm:col-span-2 columns:col-start-2 columns:row-start-2"
            ratios={{ '': '1 / 1', sm: '2 / 1', columns: '5 / 2' }}
            url="/images/careers/photo-group-2.jpg"
          />
        </div>
      </StandardPageWidth>
    </div>
  )
}

function Photo({
  url,
  className,
  ...props
}: ComponentProps<typeof ResponsiveAspectRatioSC>) {
  return (
    <div
      className={classNames(
        'relative overflow-hidden rounded-large',
        className
      )}
    >
      <ResponsiveAspectRatioSC
        {...props}
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${url})` }}
      />
    </div>
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
        <BasicPageHero
          preHeading="Careers"
          heading="Join us and build something incredible"
          intro={
            <p>
              At Plural, we believe that there is a better way to solve the
              third major constraint—distributed systems operational cost—that
              benefits OSS developers and DevOps teams alike.
            </p>
          }
          ctas={
            <ScrollToLink scrollToTarget="open-positions">
              View open positions
            </ScrollToLink>
          }
        />
      </HeaderPad>
      <ColorModeProvider mode="light">
        <StandardPageSection className="bg-fill-zero">
          <StandardPageWidth>
            <CenteredSectionHead
              heading="What we value"
              intro="Our motivation is based on:"
              className="mb-xxlarge md:mb-xxxlarge "
            />
            <div
              className={classNames(
                'grid',
                'grid-cols-1',
                'md:grid-cols-2',
                'columns:grid-cols-3',
                'gap-x-xlarge',
                'gap-y-large',
                'md:gap-y-xxlarge'
              )}
            >
              <ValueCard
                iconUrl="/images/icons/careers/transparency.svg"
                title="Transparency"
              >
                We believe in the power of transparency. We strive to provide
                open and honest information about our processes, products, and
                decisions.
              </ValueCard>
              <ValueCard
                iconUrl="/images/icons/careers/kindness.svg"
                title="Kindness and respect"
              >
                We believe in the power of positive interactions and aim to
                uplift and encourage one another, both within our team and the
                wider community.
              </ValueCard>
              <ValueCard
                iconUrl="/images/icons/careers/open-mindedness.svg"
                title="Open mindedness"
              >
                We believe in the power of open-mindedness and embracing new
                possibilities.
              </ValueCard>
              <ValueCard
                iconUrl="/images/icons/careers/inclusivity.svg"
                title="Inclusivity"
              >
                We value the contributions of all community members and actively
                work towards creating an environment that is accessible,
                equitable, and supportive.
              </ValueCard>
              <ValueCard
                iconUrl="/images/icons/careers/excellence.svg"
                title="Excellence"
              >
                We have a passion for excellence and continuously strive to
                deliver the highest quality in everything we do.
              </ValueCard>
              <ValueCard
                iconUrl="/images/icons/careers/exploration.svg"
                title="Exploration"
              >
                We encourage exploration and foster an environment that embraces
                diverse ideas, encourages constructive feedback, and values
                continuous learning.
              </ValueCard>
            </div>
          </StandardPageWidth>
        </StandardPageSection>
      </ColorModeProvider>
      <StandardPageSection className="bg-fill-zero">
        <StandardPageWidth>
          <CenteredSectionHead
            heading="Our benefits"
            intro={
              <p>
                We prioritize work-life balance to ensure a healthy a
                sustainable team in the long run.
              </p>
            }
            className="md:mb-xxlarge "
          />
          <div
            className={classNames(
              'grid',
              'grid-cols-1',
              'columns:grid-cols-2',
              'gap-x-xlarge',
              'gap-y-large',
              'md:gap-y-xxlarge'
            )}
          >
            <BenefitCard
              iconUrl="/images/icons/careers/remote-work.svg"
              title="Flexible and fully remote"
            >
              Headquartered in NYC, but fully remote from Pacific to Central
              European Time. Choose to work from wherever you want, whenever you
              want.
            </BenefitCard>
            <BenefitCard
              iconUrl="/images/icons/careers/pto.svg"
              title="Unlimited paid time off for the whole team"
            >
              We believe that taking breaks is important for our team to be the
              most effective, so we’ve got unlimited time off, plus sick leave
              and generous parental leave.
            </BenefitCard>
            <BenefitCard
              iconUrl="/images/icons/careers/laptop.svg"
              title="Gear up"
            >
              We’ll cover any equipment you need and a stipend for your work
              from home setup too.
            </BenefitCard>
            <BenefitCard
              iconUrl="/images/icons/careers/healthcare.svg"
              title="Healthcare, vision, and dental insurance"
            >
              Fully covered by Plural!
            </BenefitCard>
            <BenefitCard
              iconUrl="/images/icons/careers/globe.svg"
              title="Let’s get together"
            >
              We organize regular, fully paid company off-sites around the
              world. It’s a time for everyone to get to know each other better,
              bond as a team, and have those strategy and working sessions that
              are just better in person. Our last one was in New Orleans!
            </BenefitCard>
            <BenefitCard
              iconUrl="/images/icons/careers/growth.svg"
              title="Growth suppport"
            >
              Personal and career development reimbursement. We also sponsor and
              pay for conferences and networking events.
            </BenefitCard>
          </div>
        </StandardPageWidth>
      </StandardPageSection>
      <ColorModeProvider mode="light">
        <StandardPageSection
          id="open-positions"
          className="bg-fill-zero"
        >
          <StandardPageWidth>
            <CenteredSectionHead
              heading="Open positions"
              intro={
                <p>
                  We’re actively seeking passionate individuals to join our team
                  and contribute to our mission. Explore our open positions and
                  unlock exciting opportunities to make a meaningful impact.
                </p>
              }
              className={classNames(
                'pb-large md:pb-xxlarge',
                'mb-xlarge md:mb-xxxlarge',
                'border-b border-border'
              )}
            />
            <JobListingsSection jobListings={jobs} />
          </StandardPageWidth>
        </StandardPageSection>
      </ColorModeProvider>
      <PhotosSection />
    </>
  )
}

export const getStaticProps = async () => {
  const { data: jobs, error: jobsError } = await getJobListings()

  return propsWithGlobalSettings({
    metaTitle: 'Careers',
    metaDescription:
      'We are a growing team working on interesting problems in the cloud with Kubernetes, Elixir, Go, and React. We’re always interested in hiring new talent!',
    footerVariant: FooterVariant.kitchenSink,
    jobs: jobs || [],
    errors: combineErrors([jobsError]),
  })
}
