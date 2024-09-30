import { type CSSProperties, useRef } from 'react'

import { InfoOutlineIcon, Tooltip } from '@pluralsh/design-system'

import styled, { useTheme } from 'styled-components'

import { useMousePosition } from '@src/hooks/useMousePosition'

import { ResponsiveText } from '../Typography'

const CARD_Z_INDEX = 1

export function ImpactCardSection() {
  return (
    <div className="flex flex-col items-center gap-xxlarge">
      <ResponsiveText textStyles={{ '': 'mHero1' }}>Our impact</ResponsiveText>
      <ImpactCardsWrapperSC>
        <ImpactCard
          metric="88%"
          subtitle="Reduction in Operational Costs"
          embellishment="top-left"
          // tooltipText="Tooltip"
          borderGradientDir="to right"
        />
        <ImpactCard
          metric="95%"
          subtitle="Reduction in Day 2 Operation Time"
          // tooltipText="Tooltip"
          borderGradientDir="to left"
        />
        <ImpactCard
          metric="50%"
          subtitle="Allocation of Engineers to Strategic Projects"
          // tooltipText="Tooltip"
          borderGradientDir="to right"
        />
        <ImpactCard
          metric="~30x"
          subtitle="ROI Over 3 Years"
          // tooltipText="Lorem ipsum dolor sit amet consecutor. Lorem ipsum dolor sit amet consecutor. Lorem ipsum dolor sit amet consecutor. Lorem ipsum dolor sit amet consecutor. Lorem ipsum dolor sit amet consecutor. Lorem ipsum dolor sit amet consecutor. Lorem ipsum dolor sit amet consecutor. Lorem ipsum dolor sit amet consecutor. "
          embellishment="bottom-right"
          borderGradientDir="to left"
        />
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
}: {
  metric: string
  subtitle: string
  tooltipText?: string
  embellishment?: 'top-left' | 'bottom-right'
  borderGradientDir?: 'to right' | 'to left'
}) {
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
        {tooltipText && (
          <Tooltip
            placement="top"
            label={tooltipText}
            {...theme.partials.marketingText.body1}
            backgroundColor={theme.colors['marketing-white']}
            color={theme.colors.grey[600]}
            maxWidth={500}
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
  paddingBottom: theme.spacing.xxxxlarge,
  [`@media (min-width: ${theme.breakpoints.desktopSmall}px)`]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
}))

const ImpactCardSC = styled.div<{
  $borderGradientDir?: 'to right' | 'to left'
}>(({ theme, $borderGradientDir }) => ({
  position: 'relative',
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
  cursor: 'pointer',
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
