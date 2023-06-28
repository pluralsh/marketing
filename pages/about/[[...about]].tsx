import { ColorModeProvider } from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'

import classNames from 'classnames'

import { FooterVariant } from '@src/components/FooterFull'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { StandardPage } from '@src/components/layout/FullPage'
import { GradientBG } from '@src/components/layout/GradientBG'
import { TextLimiter } from '@src/components/layout/TextLimiter'
import { TeamSection } from '@src/components/page-sections/TeamSection'
import { Cta, ResponsiveText } from '@src/components/Typography'
import { getTeamMembers } from '@src/data/getTeamMembers'
import { type TeamMemberFragment } from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { HeaderPad } from '../../src/components/layout/HeaderPad'

export default function About({
  teamMembers,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        // position="top middle"
        image="/images/gradients/gradient-bg-1.jpg"
      >
        <div
          className={classNames(
            'pb-xxxlarge',
            'md:pb-xxxxlarge',
            'xxl:pb-xxxxxxlarge'
          )}
        >
          <StandardPage
            className={classNames(
              'flex flex-col gap-xlarge',
              'pt-xxlarge pb-xxxxxlarge',
              'md:pt-xxxxlarge md:pb-xxxxxlarge',
              'xl:pt-xxxxlarge xl:pb-xxxxxxlarge'
            )}
          >
            <ResponsiveText
              className="mb-medium"
              as="h1"
              color="text-xlight"
              textStyles={{
                '': 'mLabel',
              }}
            >
              Our mission
            </ResponsiveText>
            <Columns className="gap-y-xxxxlarge columns:items-center">
              <EqualColumn>
                <TextLimiter>
                  <ResponsiveText
                    className="[text-wrap:balance]"
                    as="h2"
                    textStyles={{
                      '': 'mHero2',
                      md: 'mHero1',
                    }}
                  >
                    We are building a flexible, scalable solution to application
                    delivery.
                  </ResponsiveText>
                </TextLimiter>
              </EqualColumn>
              <EqualColumn>
                <TextLimiter>
                  <ResponsiveText
                    as="p"
                    textStyles={{ '': 'mBody1' }}
                    color="text-light"
                    className="mb-xlarge"
                  >
                    At Plural, we believe that there is a better way to solve
                    the third major constraint—distributed systems operational
                    cost—that benefits OSS developers and DevOps teams alike.
                  </ResponsiveText>
                  <Cta
                    target="_blank"
                    href="/blog/what-is-plural/"
                  >
                    Read more
                  </Cta>
                </TextLimiter>
              </EqualColumn>
            </Columns>
          </StandardPage>
          <StandardPage>
            <div className="text-center">
              <ResponsiveText
                textStyles={{ '': 'aOverline' }}
                color="text-light"
                className="mb-xxlarge"
              >
                We&rsquo;re backed by incredible investors
              </ResponsiveText>
              <div className="mx-auto flex flex-col gap-y-xxxxlarge items-center md:flex-row md:justify-between md:items:center max-w-[852px]">
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
          </StandardPage>
        </div>
      </HeaderPad>
      <ColorModeProvider mode="light">
        <div
          className={classNames(
            'bg-fill-zero',
            'flex flex-col',
            'py-xxxxlarge gap-y-xxxxlarge',
            'md:py-xxxxxlarge md:gap-y-xxxxxlarge',
            'xxl:py-xxxxxxlarge xxl:gap-y-xxxxxxlarge',
            'text-text'
          )}
        >
          <TeamSection members={teamMembers} />
        </div>
      </ColorModeProvider>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  return {
    paths: [{ params: { about: [] } }],
    fallback: false,
  }
}

export type PricingPageProps = { teamMembers: TeamMemberFragment[] }

export const getStaticProps: GetStaticProps<PricingPageProps> = async (
  _context
) => {
  const { data: teamMembers, error: teamMembersError } = await getTeamMembers()

  if (!teamMembers) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    metaTitle: 'About',
    teamMembers,
    footerVariant: FooterVariant.kitchenSink,

    errors: [...(teamMembersError ? [teamMembersError] : [])],
  })
}
