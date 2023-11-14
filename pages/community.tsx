import {
  Button,
  ColorModeProvider,
  DiscordIcon,
  GitHubLogoIcon,
} from '@pluralsh/design-system'
import { type GetStaticProps, type InferGetStaticPropsType } from 'next'

import classNames from 'classnames'

import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import CalloutsSection from '@src/components/page-sections/CommunityCalloutsSection'
import CommunityResourcesSection from '@src/components/page-sections/CommunityResourcesSection'
import ContributorsSection from '@src/components/page-sections/ContributorsSection'
import EventsSection from '@src/components/page-sections/EventsSection'
import FeaturedContributorsSection from '@src/components/page-sections/FeaturedContributorsSection'
import { ScrollToLink } from '@src/components/ScrollToLink'
import { ResponsiveText } from '@src/components/Typography'
import { DISCORD_LINK } from '@src/consts'
import {
  type Callouts,
  getCommunityPageData,
} from '@src/data/getCommunityPageData'
import { type PluralEvent, getEvents } from '@src/data/getEvents'
import { getFeaturedContributors } from '@src/data/getFeaturedContributors'
import { getContributors } from '@src/data/getGithubData'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

import { HeaderPad } from '../src/components/layout/HeaderPad'
import { combineErrors } from '../src/utils/combineErrors'

export default function Community({
  contributors,
  featuredContributors,
  events,
  callouts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        // position="top middle"
        image="/images/gradients/gradient-bg-4.jpg"
      >
        <StandardPageWidth>
          <div
            className={classNames(
              'flex flex-col gap-xxlarge',
              'py-xxxlarge',
              'xl:py-xxxxlarge'
            )}
          >
            <div>
              <ResponsiveText
                className="mb-xlarge [text-wrap:balance]"
                as="h2"
                textStyles={{
                  '': 'mHero1',
                  md: 'mBigHeader',
                }}
              >
                Join our community
              </ResponsiveText>
              <ResponsiveText
                as="p"
                textStyles={{ '': 'mBody1' }}
                color="text-light"
                className="max-w-[800px]"
              >
                The Plural community is built to support all Plural users
                through discussions, educational resources, and events. No
                matter how big or small your challenge is our community of
                Plural experts and contributors is here to help guide your
                journey.
              </ResponsiveText>
            </div>
            <div className="flex gap-large flex-wrap">
              <Button
                large
                secondary
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DiscordIcon size={20} />}
                href={DISCORD_LINK}
              >
                Discord
              </Button>
              <Button
                large
                secondary
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubLogoIcon size={20} />}
                href="https://github.com/pluralsh"
              >
                Github
              </Button>
            </div>
            <div className="flex gap-large flex-wrap">
              <ScrollToLink scrollToTarget="resources-section">
                Resources
              </ScrollToLink>
              <ScrollToLink scrollToTarget="contributors-section">
                Our contributors
              </ScrollToLink>
            </div>
          </div>
        </StandardPageWidth>
      </HeaderPad>
      <div className="bg-fill-zero">
        <StandardPageWidth className="pt-xxxxlarge pb-xxxxxxlarge">
          <div className="flex flex-col gap-y-xxlarge">
            <CalloutsSection callouts={callouts} />
            <EventsSection events={events} />
            <FeaturedContributorsSection
              featuredContributors={featuredContributors}
            />
          </div>
        </StandardPageWidth>
      </div>
      <ColorModeProvider mode="light">
        <div
          id="resources-section"
          className={classNames(
            'bg-fill-zero',
            'flex flex-col',
            'py-xxxxlarge gap-y-xxxxlarge',
            'md:py-xxxxxlarge md:gap-y-xxxxxlarge',
            'xxl:py-xxxxxxlarge xxl:gap-y-xxxxxxlarge',
            'text-text'
          )}
        >
          <StandardPageWidth>
            <CommunityResourcesSection />
          </StandardPageWidth>
        </div>
      </ColorModeProvider>

      <ContributorsSection contributors={contributors} />
    </>
  )
}

export type CommunityPageProps = {
  contributors: any[]
  featuredContributors: any[]
  events: PluralEvent[]
  callouts: Callouts
}

export const getStaticProps: GetStaticProps<CommunityPageProps> = async (
  _context
) => {
  const { data: pageData, error: pageDataError } = await getCommunityPageData()
  const { data: contributors, error: githubError } = await getContributors()
  const { data: featuredContributors, error: featuredContributorsError } =
    await getFeaturedContributors()

  if (!contributors || !featuredContributors || !pageData) {
    return { notFound: true }
  }

  const { data: events, error: eventsError } = await getEvents()

  return propsWithGlobalSettings({
    metaTitle: 'Join the community',
    metaDescription:
      'The Plural community is built to support all Plural users through discussions, educational resources, and events.',
    contributors,
    featuredContributors,
    footerVariant: FooterVariant.kitchenSink,
    events: events || [],
    callouts: pageData.callouts,
    errors: combineErrors([
      githubError,
      eventsError,
      featuredContributorsError,
      pageDataError,
    ]),
  })
}

type BaseError = {
  name: string
  message: string
}
export type FullError = BaseError & {
  graphQLErrors?: readonly BaseError[] | undefined
}
