import {
  type ComponentProps,
  type ReactElement,
  type ReactNode,
  cloneElement,
} from 'react'

import {
  DiscordIcon,
  FillLevelProvider,
  GitHubLogoIcon,
} from '@pluralsh/design-system'

import { isEmpty } from 'lodash-es'
import styled, { useTheme } from 'styled-components'

import { mqs } from '@src/breakpoints'
import { mShadows } from '@src/styles/extraStyles'

import DocumentFilledIcon from '../icons/DocumentFilledIcon'
import PlayFilledIcon from '../icons/PlayFilledIcon'
import { TextLimiter } from '../layout/TextLimiter'
import { CenteredSectionHead } from '../SectionHeads'
import { Cta } from '../Typography'

export const ResourceCardBaseSC = styled.div<{ $clickable: boolean }>(
  ({ theme, $clickable = false }) => ({
    background: theme.colors['fill-two'],
    border: theme.borders['fill-one'],
    borderRadius: theme.borderRadiuses.large,

    transition: 'all 0.2s ease',
    boxShadow: mShadows.light.slight,
    ...($clickable
      ? {
          '&:hover': {
            boxShadow: mShadows.light.moderate,
          },
        }
      : {}),
  })
)

const ResourceCardSC = styled(ResourceCardBaseSC)(({ theme }) => ({
  padding: theme.spacing.large,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.large,

  '.mainArea': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing.small,
    flexGrow: 1,
  },
  '.title': {
    ...theme.partials.marketingText.title1,
  },
  '.content': {
    ...theme.partials.marketingText.body2,
    color: theme.colors['text-xlight'],
  },
  '.ctas': {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  [mqs.xs]: {
    padding: theme.spacing.xlarge,
  },
  [mqs.md]: {
    padding: theme.spacing.xxlarge,
  },
}))

const ResourceIconCardSC = styled(ResourceCardBaseSC).attrs({
  as: 'a',
  $clickable: true,
})(({ theme }) => ({
  padding: theme.spacing.medium,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.large,
  textAlign: 'center',
  '.label': {
    ...theme.partials.marketingText.subtitle2,
    color: theme.colors['text-light'],
  },
  '.icon': {
    display: 'flex',
    justifyContent: 'center',
  },
  [mqs.xs]: {
    padding: theme.spacing.xlarge,
    '.label': {
      ...theme.partials.marketingText.subtitle1,
      color: theme.colors['text-light'],
    },
  },
}))

function ResourceIconCard({
  icon,
  label,
  ...props
}: { icon: ReactElement; label: ReactNode } & ComponentProps<
  typeof ResourceCardSC
>) {
  const theme = useTheme()
  const iconClone = cloneElement(icon, {
    size: theme.spacing.xxxlarge,
    color: theme.colors['icon-light'],
  })

  return (
    <ResourceIconCardSC
      target="_blank"
      rel="nofollow noreferrer"
      {...props}
    >
      <FillLevelProvider value={2}>
        {icon && <div className="icon">{iconClone}</div>}
        <div className="label">{label}</div>
      </FillLevelProvider>
    </ResourceIconCardSC>
  )
}

function ResourceCard({
  title,
  children,
  ctas,
  ...props
}: {
  title?: ReactNode
  children?: ReactNode
  ctas?: { url: string; label: ReactNode }[]
} & ComponentProps<typeof ResourceCardSC>) {
  return (
    <ResourceCardSC {...props}>
      <FillLevelProvider value={2}>
        <div className="mainArea">
          {title && <TextLimiter className="title">{title}</TextLimiter>}
          {children && (
            <TextLimiter className="content">{children}</TextLimiter>
          )}
        </div>

        {!isEmpty(ctas) && (
          <div className="ctas">
            {ctas?.map(
              (cta) =>
                !!cta?.url && (
                  <Cta
                    target="_blank"
                    href={cta.url}
                  >
                    {cta.label || cta.url}
                  </Cta>
                )
            )}
          </div>
        )}
      </FillLevelProvider>
    </ResourceCardSC>
  )
}

export default function ResourcesSection() {
  return (
    <>
      <CenteredSectionHead
        heading="Community resources"
        className="mb-xxxlarge"
      />
      <div className="flex flex-col gap-xxlarge">
        <div className="grid gap-xlarge grid-cols-2 columns:gap-xxlarge columns:grid-cols-4">
          <ResourceIconCard
            icon={<DiscordIcon />}
            label="Discord"
            href="https://discord.gg/pluralsh"
          />
          <ResourceIconCard
            icon={<GitHubLogoIcon />}
            label="GitHub"
            href="https://github.com/pluralsh"
          />
          <ResourceIconCard
            icon={<PlayFilledIcon />}
            label="YouTube"
            href="https://www.youtube.com/@pluralsh"
          />
          <ResourceIconCard
            icon={<DocumentFilledIcon />}
            label="Docs"
            href="https://docs.plural.sh"
          />
        </div>
        <div className="flex flex-col gap-xxlarge columns:flex-row">
          <ResourceCard
            title="Developer Contributor Program"
            ctas={[
              {
                label: 'Learn more',
                url: 'https://www.plural.sh/blog/paying-for-oss-contributions/',
              },
            ]}
          >
            <p>
              Add a new application to the Plural catalog or take a deep dive
              into the Plural internals.We're currently offering $500 for every
              application contributed to the catalog and $150 for every
              application upgrade performed. Read more about our contributor
              program here.Not sure what application to contribute? Check out
              our roadmap and review what apps have already been requested on
              our GitHub.
            </p>
          </ResourceCard>
          <ResourceCard
            title="Content Contributor Program"
            ctas={[
              {
                label: 'Learn more',
                url: 'https://www.plural.sh/blog/plurals-content-contribution-program/',
              },
            ]}
          >
            <p>
              Are you a Software Engineer, Data Engineer, Kubernetes expert, or
              Open-Source advocate looking for a platform to share your
              knowledge with thousands of other developers and open-source
              enthusiasts?
            </p>
            <p>
              If this is you, we are now accepting writing applications for our
              blog. As of Monday April, 17 we are now offering $300 per
              1,000-word article that you write for Plural.
            </p>
          </ResourceCard>
        </div>
      </div>
    </>
  )
}
