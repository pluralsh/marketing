import {
  Button,
  ColorModeProvider,
  DiscordIcon,
  GitHubLogoIcon,
} from '@pluralsh/design-system'
import {
  type GetStaticPaths,
  type GetStaticProps,
  type InferGetStaticPropsType,
} from 'next'

import classNames from 'classnames'

import { FooterVariant } from '@src/components/FooterFull'
import { StandardPage } from '@src/components/layout/FullPage'
import { GradientBG } from '@src/components/layout/GradientBG'
import ContributorsSection from '@src/components/page-sections/ContributorsSection'
import EventsSection from '@src/components/page-sections/EventsSection'
import { ScrollToLink } from '@src/components/ScrollToLink'
import { ResponsiveText } from '@src/components/Typography'
import { getEvents } from '@src/data/getEvents'
import { getContributors } from '@src/data/getGithubData'
import { type EventsQuery } from '@src/generated/graphqlDirectus'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'
import { indexPageStaticPaths } from '@src/utils/staticPaths'

import { HeaderPad } from '../../src/components/layout/HeaderPad'

const DUMMY_PATH_PARAM = 'community' as const

export const getStaticPaths: GetStaticPaths = async () =>
  indexPageStaticPaths(DUMMY_PATH_PARAM)

export default function About({
  contributors,
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        // position="top middle"
        image="/images/gradients/gradient-bg-4.jpg"
      >
        <StandardPage>
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
            <div className="flex gap-large">
              <Button
                large
                secondary
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DiscordIcon size={20} />}
                href="https://discord.gg/pluralsh"
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
            <div className="flex gap-large">
              <ScrollToLink scrollToTarget="resources-section">
                Resources
              </ScrollToLink>
              <ScrollToLink scrollToTarget="contributors-section">
                Our contributors
              </ScrollToLink>
            </div>
          </div>
        </StandardPage>
      </HeaderPad>
      <div className="bg-fill-zero">
        <StandardPage className="pt-xxxxlarge pb-xxxxxxlarge">
          <EventsSection events={events} />
        </StandardPage>
      </div>
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
          <StandardPage className="mb-xxxxxlarge max:mb-xxxxxxlarge">
            content
          </StandardPage>
        </div>
      </ColorModeProvider>

      <ContributorsSection contributors={contributors} />
    </>
  )
}

export type CommunityPageProps = {
  contributors: any
  events: EventsQuery['events']
}

export const getStaticProps: GetStaticProps<CommunityPageProps> = async (
  _context
) => {
  const { data: contributors, error: githubError } = await getContributors()

  if (!contributors) {
    return { notFound: true }
  }

  const { data: events, error: eventsError } = await getEvents()

  return propsWithGlobalSettings({
    metaTitle: 'Community',
    contributors,
    footerVariant: FooterVariant.kitchenSink,
    events: events || [],
    errors: [
      ...(githubError ? [githubError] : []),
      ...(eventsError ? [eventsError] : []),
    ],
  })
}
