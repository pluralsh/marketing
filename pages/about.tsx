import { type ReactNode } from 'react'

import { ColorModeProvider } from '@pluralsh/design-system'
import { type GetStaticProps, type InferGetStaticPropsType } from 'next'

import { FooterVariant } from '@src/components/FooterFull'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { GradientBG } from '@src/components/layout/GradientBG'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { TeamSection } from '@src/components/page-sections/TeamSection'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { ResponsiveText } from '@src/components/Typography'
import { getTeamMembers } from '@src/data/getTeamMembers'
import { type TeamMemberFragment } from '@src/generated/graphqlDirectus'
import { cn as classNames } from '@src/utils/cn'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { HeaderPad } from '../src/components/layout/HeaderPad'

export default function About({
  teamMembers,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        image="/images/gradients/gradient-bg-1.jpg"
      >
        <div
          className={classNames(
            'pb-xxxlarge',
            'md:pb-xxxxlarge',
            'xxl:pb-xxxxxxlarge'
          )}
        >
          <StandardPageWidth
            className={classNames(
              'flex flex-col gap-xlarge',
              'pb-xxxxxlarge pt-xxlarge',
              'md:pb-xxxxxlarge md:pt-xxxxlarge',
              'xl:pb-xxxxxxlarge xl:pt-xxxxlarge'
            )}
          >
            <h1 className="txt-mktg-label mb-medium text-text-xlight">
              Our mission
            </h1>
            <Columns className="gap-y-xxxxlarge columns:items-center">
              <EqualColumn>
                <h2 className="txt-mktg-hero-2 [text-wrap:balance] md:txt-mktg-hero-1">
                  Our mission is to democratize elite DevOps capabilities by
                  simplifying tooling complexities, fostering a ZeroOps world
                  that accelerates software development.
                </h2>
              </EqualColumn>
            </Columns>
          </StandardPageWidth>
          <StandardPageWidth>
            <div className="text-center">
              <h2 className="txt-overline mb-xxlarge text-text-light">
                We&rsquo;re backed by incredible investors
              </h2>
              <div className="md:items:center mx-auto flex max-w-[852px] flex-col items-center gap-y-xxxxlarge md:flex-row md:justify-between">
                <div>
                  <img
                    className="w-[188px] fill-marketing-white"
                    src="/images/about/primary.svg"
                  />
                </div>
                <div>
                  <img
                    className="w-[214px]"
                    src="/images/about/signalfire.svg"
                  />
                </div>
                <div>
                  <img
                    className="w-[70px]"
                    src="/images/about/susa.png"
                  />
                </div>
              </div>
            </div>
          </StandardPageWidth>
        </div>
      </HeaderPad>
      <ColorModeProvider mode="light">
        <div
          className={classNames(
            'bg-fill-zero',
            'flex flex-col',
            'gap-y-xxxxlarge py-xxxxlarge',
            'md:gap-y-large md:py-xxxxxlarge',
            'xxl:py-xxxxxxlarge',
            'text-text'
          )}
        >
          <StandardPageWidth className="mb-xxxxxlarge max:mb-xxxxxxlarge">
            <ResponsiveText
              as="h1"
              textStyles={{ '': 'mLabel' }}
              color="text-light"
              className="mb-xlarge"
            >
              Who we are
            </ResponsiveText>
            <ResponsiveText
              as="p"
              textStyles={{ '': 'mHero2' }}
              //   color="text-light"
              className="mb-xxxxlarge"
            >
              We are a dynamic and innovative company that specializes in
              creating meaningful connections and fostering collaboration. At
              Plural, we believe in the power of diversity and inclusion,
              recognizing that when different perspectives come together,
              incredible things happen.
            </ResponsiveText>

            <img
              alt="The Plural team standing together on a sidewalk in the French Quarter of New Orleans."
              src="/images/about/team.png"
            />
          </StandardPageWidth>
          <StandardPageWidth className="mb-xxxxxlarge max:mb-xxxxxxlarge">
            <CenteredSectionHead
              preHeading="Our company values"
              heading="As a driven and cohesive team, we share a common 
mission to build something unique."
              className="mb-xxxxlarge text-center"
            />
            <Columns
              className={classNames(
                'gap-y-xxxxlarge md:gap-y-xxxxxlarge',
                'columns:gap-y-xxlarge'
              )}
            >
              <EqualColumn>
                <TextLimiter
                  className={classNames(
                    'flex flex-col',
                    'gap-y-xxxxlarge md:gap-y-xxxxxlarge',
                    'columns:gap-y-xxlarge'
                  )}
                >
                  <Value label="Transparency">
                    <p className="m-0 p-0">
                      We believe in the power of transparency. We strive to
                      provide open and honest information about our processes,
                      products, and decisions. We are committed to sharing
                      insights, updates, and feedback with our community and
                      stakeholders. Transparency is at the core of everything we
                      do.
                    </p>
                  </Value>
                  <Value label="Inclusivity">
                    <p className="m-0 p-0">
                      We are dedicated to building an inclusive platform that
                      welcomes individuals from diverse backgrounds,
                      perspectives, and experiences. We value the contributions
                      of all community members and actively work towards
                      creating an environment that is accessible, equitable, and
                      supportive. We are committed to removing barriers and
                      ensuring that everyone has an equal opportunity to
                      succeed.
                    </p>
                  </Value>
                  <Value label="Open mindedness and exploration">
                    <p className="m-0 p-0">
                      We have a passion for excellence and continuously strive
                      to deliver the highest quality in everything we do. We are
                      committed to providing outstanding products, services, and
                      experiences to our community. We encourage innovation,
                      embrace challenges, and consistently seek ways to improve
                      and exceed expectations.
                    </p>
                  </Value>
                </TextLimiter>
              </EqualColumn>
              <EqualColumn className="gap-y-xxxxlarge">
                <TextLimiter
                  className={classNames(
                    'flex flex-col',
                    'gap-y-xxxxlarge md:gap-y-xxxxxlarge',
                    'columns:gap-y-xxlarge'
                  )}
                >
                  <Value label="Kindness and respect">
                    <p className="m-0 p-0">
                      At Plural, kindness and respect are fundamental to our
                      culture. We foster a supportive and inclusive environment
                      where everyone is treated with empathy, dignity, and
                      respect. We believe in the power of positive interactions
                      and aim to uplift and encourage one another, both within
                      our team and the wider community.
                    </p>
                  </Value>
                  <Value label="Excellence">
                    <p className="m-0 p-0">
                      We have a passion for excellence and continuously strive
                      to deliver the highest quality in everything we do. We are
                      committed to providing outstanding products, services, and
                      experiences to our community. We encourage innovation,
                      embrace challenges, and consistently seek ways to improve
                      and exceed expectations.
                    </p>
                  </Value>
                  <ResponsiveText
                    as="p"
                    textStyles={{ '': 'mTitle1' }}
                  >
                    By embracing these values, we aim to build a vibrant and
                    thriving community where developers can collaborate, learn,
                    and grow together. We are committed to making a positive
                    impact and empowering individuals to achieve their goals.
                  </ResponsiveText>
                </TextLimiter>
              </EqualColumn>
            </Columns>
          </StandardPageWidth>

          <TeamSection members={teamMembers} />
        </div>
      </ColorModeProvider>
    </>
  )
}

function Value({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-y-xxlarge">
      <h3 className="txt-mktg-title-1 text-text">{label}</h3>
      <div className="txt-mktg-body-1 flex flex-col gap-medium text-text-light">
        {children}
      </div>
    </div>
  )
}

export type PricingPageProps = { teamMembers: TeamMemberFragment[] }

export const getStaticProps: GetStaticProps<PricingPageProps> = async (
  _context
) => {
  const { data: teamMembers } = await getTeamMembers()

  if (!teamMembers) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    metaTitle: 'Our mission',
    metaDescription:
      'We are building a flexible, scalable solution to application delivery.',
    teamMembers,
    footerVariant: FooterVariant.kitchenSink,
  })
}
