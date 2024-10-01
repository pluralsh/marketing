import { type CSSProperties, useRef } from 'react'

import { InfoOutlineIcon, Tooltip, WrapWithIf } from '@pluralsh/design-system'

import styled, { useTheme } from 'styled-components'

import { useMousePosition } from '@src/hooks/useMousePosition'

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

export function ImpactCardSection() {
  return (
    <div className="flex flex-col items-center gap-xxlarge">
      <ResponsiveText textStyles={{ '': 'mHero1' }}>Our impact</ResponsiveText>
      <ImpactCardsWrapperSC>
        {impactCards.map((cardProps, index) => (
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
    <WrapWithIf
      condition={!!tooltipText}
      wrapper={
        <Tooltip
          placement={tooltipPlacement}
          label={<TooltipTextSC>{tooltipText}</TooltipTextSC>}
          backgroundColor={theme.colors['marketing-white']}
          maxWidth={600}
        />
      }
    >
      <ImpactCardSC
        ref={cardRef}
        style={backgroundStyle}
        css={`
          @property --gradient-opacity {
            syntax: '<number>';
            inherits: false;
            initial-value: 0.3;
          }
        `}
        $borderGradientDir={borderGradientDir}
      >
        {embellishment && <EmblishmentSC $position={embellishment} />}
        <ImpactCardContentSC>
          <ImpactCardInfoIconSC size={30} />

          <ImpactCardMetricSC>{metric}</ImpactCardMetricSC>
          <ImpactCardSubtitleSC>{subtitle}</ImpactCardSubtitleSC>
        </ImpactCardContentSC>
      </ImpactCardSC>
    </WrapWithIf>
  )
}

const ImpactCardsWrapperSC = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  width: '100%',
  gap: theme.spacing.xlarge,
  paddingBottom: theme.spacing.xxxxlarge,
  [`@media (min-width: ${theme.breakpoints.desktopSmall}px)`]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
}))

const ImpactCardSC = styled.div<{
  $borderGradientDir?: 'to right' | 'to left'
}>(({ theme, $borderGradientDir }) => ({
  position: 'relative',
  cursor: 'pointer',
  borderRadius: theme.borderRadiuses.large,
  overflow: 'hidden',
  transition: 'filter 0.3s ease',
  // first value is circular glow that follows cursor, second is actual background
  background: `radial-gradient(300px circle at var(--x) var(--y),rgba(255, 255, 255, 0.06), transparent),
    linear-gradient(96deg, rgba(42, 46, 55, 0.48) -95.57%, rgba(42, 46, 55, 0.16) 113.54%)`,
  // trick to make a border with a gradient effect
  '::before': {
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
  ':hover': {
    '::before': {
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

const EmblishmentSC = styled.div<{ $position: 'top-left' | 'bottom-right' }>(
  ({ $position }) => {
    const size = 300
    const strokeWidth = 1
    const gradientBorderSVG = encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${size} ${size}'>
        <defs>
          <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stop-color='#5C77FF'/>
            <stop offset='30%' stop-color='#494FF299'/>
            <stop offset='46%' stop-color='#8FD6FF5C'/>
            <stop offset='60%' stop-color='#52F4D94D'/>
            <stop offset='85%' stop-color='#8FD6FF5C'/>
            <stop offset='98%' stop-color='#494FF299'/>
          </linearGradient>
        </defs>
        <circle
          cx='${size / 2}'
          cy='${size / 2}'
          r='${(size - strokeWidth) / 2}'
          fill='none'
          stroke='url(#grad1)'
          stroke-width='${strokeWidth}'
        />
      </svg>
    `)

    return {
      position: 'absolute',
      zIndex: CARD_Z_INDEX - 1,
      top: $position === 'top-left' ? -size / 2 : 'auto',
      left: $position === 'top-left' ? -size / 2 : 'auto',
      right: $position === 'bottom-right' ? -size / 2.25 : 'auto',
      bottom: $position === 'bottom-right' ? -size / 1.6 : 'auto',
      width: `${size}px`,
      height: `${size}px`,
      backgroundImage: `url("data:image/svg+xml,${gradientBorderSVG}")`,
    }
  }
)

const TooltipTextSC = styled.p(({ theme }) => ({
  ...theme.partials.marketingText.body1,
  color: theme.colors.grey[600],
  // workaround for tooltip arrow color
  '& + div g': {
    fill: theme.colors['marketing-white'],
  },
}))

const impactCards: ImpactCardProps[] = [
  {
    metric: '88%',
    subtitle: 'Reduction in operational costs',
    embellishment: 'top-left',
    borderGradientDir: 'to right',
    tooltipText:
      'Plural eliminates redundant manual processes, optimizes resource allocation, and significantly reduces overhead with streamlined deployment pipelines and IaC (Infrastructure as Code) capabilities. This not only delivers unmatched cost savings but also frees up budget for innovation, turning operational challenges into financial victories and allowing your team to redirect savings toward scaling core systems.',
  },
  {
    metric: '95%',
    subtitle: 'Reduction in day 2 operation time',
    tooltipText:
      'By minimizing manual interventions and leveraging intelligent monitoring, Plural resolves issues faster, ensures infrastructure stability, and lets your team focus on strategic architectural improvements instead of routine maintenance tasks.',
    borderGradientDir: 'to left',
  },
  {
    metric: '50%',
    subtitle: 'Increased bandwidth for your engineers',
    borderGradientDir: 'to right',
    tooltipText:
      'Free up 50% more of your engineering capacity for high-impact, strategic projects. Plural’s automation offloads repetitive tasks like cluster provisioning, scaling, and patch management, allowing your engineers to concentrate on complex, value-driven initiatives that propel your company forward.',
    tooltipPlacement: 'bottom',
  },
  {
    metric: '~30x',
    subtitle: 'ROI over 3 years',
    embellishment: 'bottom-right',
    borderGradientDir: 'to left',
    tooltipText:
      'Through efficient infrastructure management, reduced downtime, and optimized resource utilization, Plural delivers a significant return on investment, enabling your platform team to build, innovate, and iterate faster without the typical operational bottlenecks.',
    tooltipPlacement: 'bottom',
  },
]
