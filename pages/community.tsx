import {
  ArrowRightIcon,
  Button,
  DocumentIcon,
  GitHubLogoIcon,
  IconFrame,
} from '@pluralsh/design-system'
import { type GetStaticProps, type InferGetStaticPropsType } from 'next'

import { useTheme } from 'styled-components'

import { FooterVariant } from '@src/components/FooterFull'
import { GradientBG } from '@src/components/layout/GradientBG'
import { HeaderPad } from '@src/components/layout/HeaderPad'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { BasicPageHero } from '@src/components/PageHeros'
import { ResponsiveText } from '@src/components/Typography'
import { cn as classNames } from '@src/utils/cn'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function Community(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  console.log('props:', props)

  return (
    <>
      <HeaderPad
        as={GradientBG}
        size="cover"
        // position="top middle"
        image="/images/gradients/gradient-bg-13.png"
      >
        <BasicPageHero
          heading="Plural community"
          description="The Plural community is built to support all Plural users through discussions, educational resources, and events."
        />
      </HeaderPad>
      {/* resources */}
      <StandardPageWidth
        className={classNames(
          'flex flex-col gap-xlarge [text-wrap:balance]',
          'p-xxlarge lg:p-xxxxxxlarge'
        )}
      >
        <ResponsiveText
          className="mb-xxlarge max-w-[1100px] text-center"
          as="h1"
          textStyles={{
            '': 'mTitle2',
            sm: 'mHero2',
          }}
        >
          Community Resources
        </ResponsiveText>
        <div className="flex flex-col items-stretch justify-between gap-medium md:flex-row md:items-center">
          {kinds.map((key) => (
            <ResourceLink
              key={key}
              kind={key}
            />
          ))}
        </div>
      </StandardPageWidth>
    </>
  )
}

const resources = {
  gitHub: {
    url: 'https://github.com/pluralsh/plural',
    title: 'GitHub',
    icon: <GitHubLogoIcon />,
  },
  youtube: {
    url: 'https://www.youtube.com/channel/UCt8xwvJH4f4c6g8J1Y6ZmJQ',
    title: 'YouTube',
    icon: <ArrowRightIcon />,
  },
  docs: {
    url: 'https://docs.plural.sh',
    title: 'Docs',
    icon: <DocumentIcon />,
  },
} as const

const kinds = Object.keys(resources) as Array<keyof typeof resources>

function ResourceLink({ kind }: { kind: keyof typeof resources }) {
  const theme = useTheme()

  return (
    <Button
      secondary
      className="flex grow items-center justify-start gap-medium"
      href={resources[kind].url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ justifyContent: 'flex-start', padding: theme.spacing.large }}
    >
      <IconFrame
        type="floating"
        style={{
          display: 'inline-flex',
          marginRight: theme.spacing.xsmall,
        }}
        icon={resources[kind].icon}
        size="medium"
      />
      <span>{resources[kind].title}</span>
    </Button>
  )
}

export type CommunityPageProps = any

export const getStaticProps: GetStaticProps<CommunityPageProps> = async (
  _context
) =>
  propsWithGlobalSettings({
    metaTitle: 'Community',
    metaDescription: 'Flexible plans for every stage of your business',
    footerVariant: FooterVariant.kitchenSink,
    // errors: combineErrors([communityError, faqError]),
  })
