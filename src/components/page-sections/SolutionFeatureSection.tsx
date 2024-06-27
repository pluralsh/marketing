import { ArrowRightIcon, Button, IconFrame } from '@pluralsh/design-system'
import Link from 'next/link'

import { useTheme } from 'styled-components'

import { getFeatureIcon } from '@src/data/getSolutionsConfigs'
import {
  type SolutionFeatureFragment,
  type SolutionFragment,
} from '@src/generated/graphqlDirectus'
import { cn as classNames } from '@src/utils/cn'

import { Columns, EqualColumn } from '../layout/Columns'
import { StandardPageWidth } from '../layout/LayoutHelpers'
import { ResponsiveText } from '../Typography'

function SolutionFeature({
  feature,
  index,
}: {
  feature: SolutionFeatureFragment | null
  index: number
}) {
  const theme = useTheme()

  if (!feature) return null

  return (
    <EqualColumn
      className="flex flex-col rounded-large border p-medium sm:p-xlarge"
      style={{
        background:
          theme.mode === 'dark'
            ? backgrounds.dark[index]
            : backgrounds.light[index],
        borderColor:
          theme.mode === 'dark'
            ? theme.colors['fill-two']
            : theme.colors.grey[200],
      }}
    >
      <div className="flex flex-col items-center gap-small md:flex-row md:gap-medium">
        <div style={{ minWidth: '50px' }}>
          <IconFrame
            icon={getFeatureIcon(feature?.icon)}
            type="floating"
            size="large"
          />
        </div>
        <ResponsiveText
          className="flex items-center text-center md:text-left"
          as="h3"
          textStyles={{
            '': 'mSubtitle2',
          }}
        >
          {feature.title}
        </ResponsiveText>
      </div>
      <ResponsiveText
        className="mb-xxlarge mt-large"
        textStyles={{
          '': 'mBody2',
        }}
      >
        {feature.description}
      </ResponsiveText>
      <Button
        clickable
        href={feature.link_url}
        as={Link}
        className="mt-auto"
        tertiary
        padding="none"
        endIcon={<ArrowRightIcon />}
        style={{ color: theme.colors['text-light'] }}
      >
        {feature.link_title}
      </Button>
    </EqualColumn>
  )
}

function SolutionFeatureSection({
  solution,
  kind,
}: {
  solution: SolutionFragment
  kind: 'upper' | 'lower'
}) {
  const features =
    kind === 'upper' ? solution?.upper_features : solution?.lower_features

  const title =
    kind === 'upper'
      ? solution?.upper_features_title
      : solution?.lower_features_title

  return (
    <StandardPageWidth
      className={classNames('flex flex-col gap-xxxlarge [text-wrap:balance]')}
    >
      <ResponsiveText
        className="m-auto mb-xxxlarge text-center"
        as="h2"
        textStyles={{
          '': 'mTitle2',
          sm: 'mHero2',
          xxl: 'mBigHeader',
        }}
      >
        {title}
      </ResponsiveText>
      <Columns className={classNames(['gap-large lg:gap-xxxlarge'])}>
        {features?.map((feature, index) => (
          <SolutionFeature
            feature={feature}
            key={feature?.title}
            index={index}
          />
        ))}
      </Columns>
    </StandardPageWidth>
  )
}
export default SolutionFeatureSection

const backgrounds = {
  dark: [
    'radial-gradient(50% 26.3% at 50% 100%, rgba(150, 154, 248, 0.09) 0%, rgba(150, 154, 248, 0.00) 100%), linear-gradient(74deg, #252932 19.58%, #171A21 248.88%)',
    'radial-gradient(50% 26.3% at 50% 100%, rgba(150, 154, 248, 0.09) 0%, rgba(150, 154, 248, 0.00) 100%), linear-gradient(75deg, #252932 -67.36%, #171A21 167.36%)',
    'radial-gradient(50% 26.3% at 50% 100%, rgba(150, 154, 248, 0.09) 0%, rgba(150, 154, 248, 0.00) 100%), linear-gradient(75deg, #252932 -155.76%, #171A21 79.38%)',
  ],
  light: [
    'radial-gradient(50% 26.3% at 50% 100%, rgba(74, 81, 242, 0.07) 0%, rgba(74, 81, 242, 0.00) 100%), linear-gradient(74deg, #FFF 19.58%, #EEF1F1 248.88%)',
    'radial-gradient(50% 26.3% at 50% 100%, rgba(74, 81, 242, 0.07) 0%, rgba(74, 81, 242, 0.00) 100%), linear-gradient(76deg, #FFF -66.4%, #EEF1F1 167.88%)',
    'radial-gradient(50% 26.3% at 50% 100%, rgba(74, 81, 242, 0.07) 0%, rgba(74, 81, 242, 0.00) 100%), linear-gradient(75deg, #FFF -154.87%, #EEF1F1 79.45%)',
  ],
}
