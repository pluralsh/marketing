import { type CSSProperties, useRef } from 'react'

import { InfoOutlineIcon, Tooltip } from '@pluralsh/design-system'

import styled, { useTheme } from 'styled-components'

import { type OurImpactComponentFragment } from '@src/generated/graphqlDirectus'
import { useMousePosition } from '@src/hooks/useMousePosition'

import { CircleEmbellishment } from '../layout/CircleEmbellishment'
import { ResponsiveText } from '../Typography'

const CARD_Z_INDEX = 1

type ImpactCardProps = {
  metric: string
  subtitle: string
  tooltipText?: string
  embellishment?: 'top-left' | 'bottom-right'
  borderGradientDir?: 'to right' | 'to left'
  tooltipPlacement?: 'top' | 'bottom'
}

export function ImpactCardSection({
  impactComponent,
}: {
  impactComponent: Nullable<OurImpactComponentFragment>
}) {
  return (
    <div className="flex w-full flex-col items-center gap-xxlarge">
      <ResponsiveText textStyles={{ '': 'mHero2' }}>Our impact</ResponsiveText>
      <ImpactCardsWrapperSC>
        {getImpactCards(impactComponent).map((cardProps, index) => (
          <ImpactCard
            key={index}
            {...cardProps}
          />
        ))}
      </ImpactCardsWrapperSC>
    </div>
  )
}

function ImpactCard({
  metric,
  subtitle,
  tooltipText,
  embellishment,
  borderGradientDir = 'to right',
  tooltipPlacement = 'top',
}: ImpactCardProps) {
  const theme = useTheme()
  const cardRef = useRef<HTMLDivElement>(null)
  const { relativePosition } = useMousePosition(cardRef)

  const backgroundStyle = {
    '--x': `${relativePosition.x}px`,
    '--y': `${relativePosition.y}px`,
  } as CSSProperties

  return (
    <ImpactCardSC
      ref={cardRef}
      style={backgroundStyle}
      $borderGradientDir={borderGradientDir}
    >
      {embellishment && (
        <CircleEmbellishment
          rotate={embellishment === 'bottom-right' ? 200 : 355}
          position={getEmbelishmentPosition(embellishment)}
        />
      )}
      <ImpactCardContentSC>
        {tooltipText && (
          <Tooltip
            placement={tooltipPlacement}
            label={<TooltipTextSC>{tooltipText}</TooltipTextSC>}
            backgroundColor={theme.colors['marketing-white']}
            maxWidth={600}
          >
            <ImpactCardInfoIconSC size={30} />
          </Tooltip>
        )}
        <ImpactCardMetricSC>{metric}</ImpactCardMetricSC>
        <ImpactCardSubtitleSC>{subtitle}</ImpactCardSubtitleSC>
      </ImpactCardContentSC>
    </ImpactCardSC>
  )
}

const ImpactCardsWrapperSC = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  width: '100%',
  gap: theme.spacing.xlarge,
  paddingBottom: theme.spacing.xxxlarge,
  textAlign: 'center',
  [`@media (min-width: ${theme.breakpoints.desktopSmall}px)`]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    textAlign: 'left',
  },
}))

const ImpactCardSC = styled.div<{
  $borderGradientDir?: 'to right' | 'to left'
}>(({ theme, $borderGradientDir }) => ({
  '@property --gradient-opacity': {
    syntax: "'<number>'",
    inherits: 'false',
    initialValue: '0.3',
  },
  position: 'relative',
  borderRadius: theme.borderRadiuses.large,
  overflow: 'hidden',
  transition: 'filter 0.3s ease',
  // first value is circular glow that follows cursor, second is actual background
  background: `radial-gradient(300px circle at var(--x) var(--y),rgba(255, 255, 255, 0.08), transparent),
    linear-gradient(96deg, rgba(42, 46, 55, 0.48) -95.57%, rgba(42, 46, 55, 0.16) 113.54%)`,
  // trick to make a border with a gradient effect
  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: CARD_Z_INDEX,
    transition: '--gradient-opacity 0.3s ease',
    inset: 0,
    borderRadius: theme.borderRadiuses.large,
    border: '1px solid transparent',
    background: `linear-gradient(${$borderGradientDir}, #E9EBEC, rgba(233, 235, 236, var(--gradient-opacity))) border-box`,
    mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
    maskComposite: 'exclude',
  },
  '&:hover': {
    '&::before': {
      '--gradient-opacity': 1,
    },
    filter: 'brightness(1.1)',
  },
}))

const ImpactCardContentSC = styled.div(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing.xsmall,
  borderRadius: theme.borderRadiuses.large,
  padding: theme.spacing.xxlarge,
}))

const ImpactCardInfoIconSC = styled(InfoOutlineIcon)(({ theme }) => ({
  position: 'absolute',
  cursor: 'pointer',
  zIndex: CARD_Z_INDEX,
  top: theme.spacing.medium,
  right: theme.spacing.medium,
}))

const ImpactCardMetricSC = styled.h3(({ theme }) => ({
  ...theme.partials.marketingText.hero1,
  lineHeight: '100%',
}))

const ImpactCardSubtitleSC = styled.p(({ theme }) => ({
  color: theme.colors['text-light'],
  fontFamily: 'Inter',
  fontSize: '22px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '150%',
}))

const TooltipTextSC = styled.p(({ theme }) => ({
  ...theme.partials.marketingText.body1,
  color: theme.colors.grey[750],
  // workaround for tooltip arrow color
  '& + div g': {
    fill: theme.colors['marketing-white'],
  },
}))

function getImpactCards(
  impactComponent: Nullable<OurImpactComponentFragment>
): ImpactCardProps[] {
  return [
    {
      metric: impactComponent?.top_left_metric ?? '88%',
      subtitle:
        impactComponent?.top_left_subtitle ?? 'Reduction in operational costs',
      embellishment: 'top-left',
      borderGradientDir: 'to right',
      tooltipText:
        impactComponent?.top_left_tooltip ??
        'Plural provides a single pane of glass and integrated suite of tools to manage the entire lifecycle of your Kubernetes fleet, giving engineers all the tools they need to do more with less. These cost savings free up budget for innovation, freeing operational challenges into financial victories and allowing your team to scale.',
    },
    {
      metric: impactComponent?.top_right_metric ?? '95%',
      subtitle:
        impactComponent?.top_right_subtitle ?? 'Reduction in day-2 operations',
      tooltipText:
        impactComponent?.top_right_tooltip ??
        "Plural's comprehensive feature set allows teams to take care of mundane maintenance tasks such as upgrades in a fraction of the time.",
      borderGradientDir: 'to left',
    },
    {
      metric: impactComponent?.bottom_left_metric ?? '50%',
      subtitle:
        impactComponent?.bottom_left_subtitle ??
        'Increased bandwidth for your engineers',
      borderGradientDir: 'to right',
      tooltipText:
        impactComponent?.bottom_left_tooltip ??
        'Free up 50% more of your engineering capacity for high-impact, strategic projects. Plural streamlines repetitive tasks like upgrade management, infrastructure provisioning and scaling, allowing your engineers to concentrate on value-driven initiatives that propel your company forward.',
    },
    {
      metric: impactComponent?.bottom_right_metric ?? '~30x',
      subtitle: impactComponent?.bottom_right_subtitle ?? 'ROI over 3 years',
      embellishment: 'bottom-right',
      borderGradientDir: 'to left',
      tooltipText:
        impactComponent?.bottom_right_tooltip ??
        'Through optimized resource utilization, reduced downtime, and efficient infrastructure management, Plural delivers a significant return on investment, enabling your platform team to build, innovate, and iterate faster without the typical operational bottlenecks.',
    },
  ]
}

const getEmbelishmentPosition = (
  embellishment: ImpactCardProps['embellishment']
) => {
  if (embellishment === 'top-left') return { bottom: '17%', left: '-21%' }
  if (embellishment === 'bottom-right') return { top: '38%', right: '-18%' }

  return undefined
}
