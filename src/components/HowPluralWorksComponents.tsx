import { type ComponentProps } from 'react'

import styled from 'styled-components'
import { type Merge } from 'type-fest'

import { mqs } from '@src/breakpoints'

const SHIFT_MQ = mqs.md

export const IMAGE_MARGIN = '7%'

const StepNumSC = styled.div((_) => ({
  '--step-diameter': '62px',

  width: 'var(--step-diameter)',
  height: 'var(--step-diameter)',
  backgroundImage: 'linear-gradient(297deg,#2a2e37,#5d63f4)',
  borderRadius: '50%',
  justifyContent: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
  position: 'relative',
  boxShadow: '0 3px 6px rgba(0,0,0,.15),0 10px 20px rgba(0,0,0,.1)',
  [SHIFT_MQ]: {
    '--step-diameter': '40px',
  },
}))

const StepNumInnerSC = styled.div(({ theme }) => ({
  backgroundColor: theme.colors['fill-one'],
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  position: 'absolute',
  top: 1,
  bottom: 1,
  left: 1,
  right: 1,
}))

const StepNumTextSC = styled.div(({ theme }) => ({
  // Might need to put these in new nested div
  marginLeft: '-.05em',
  fontSize: '32.5px',
  paddingTop: '.05em',
  fontFamily: theme.fontFamilies.sans,
  [SHIFT_MQ]: {
    fontSize: '21px',
    marginLeft: 0,
  },
}))

const CenterColSC = styled.div(({ theme }) => ({
  width: '96px',
  WebkitTextFillColor: 'inherit',
  backgroundClip: 'padding-box',
  flexDirection: 'column',
  flex: '1 0 auto',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',

  alignSelf: 'center',
  marginBottom: theme.spacing.large,
  [SHIFT_MQ]: {
    alignSelf: 'revert',
    marginBottom: 0,
  },
}))

const StepSC = styled.div((_) => ({
  flex: '1',
  alignSelf: 'auto',
}))

const ConnectorGradientSC = styled.div((_) => ({
  backgroundImage:
    'linear-gradient(#171a21,rgba(23,26,33,0) 0%,rgba(23,26,33,.8))',
  position: 'absolute',
  top: '0%',
  bottom: '0%',
  left: '0%',
  right: '0%',
}))

const ConnectorSC = styled.div((_) => ({
  width: '10px',
  position: 'absolute',
  top: '0',
  left: '50%',
  overflow: 'visible',
  transform: 'translate(-50%)',
  '.connector-img': {
    transformOrigin: '50% 0',
    marginLeft: '50%',
    position: 'absolute',
    transform: 'translate(-50%)scale(.166)',
  },
}))

export function HowWorksStepCol({ stepNum, showConnector }) {
  return (
    <CenterColSC>
      <StepSC>
        {showConnector && (
          <>
            <ConnectorSC>
              <img
                src="/images/product/dotted-line-vertical.png"
                loading="lazy"
                height="3992"
                width="6"
                alt=""
                className="connector-img"
              />
            </ConnectorSC>

            <ConnectorGradientSC />
          </>
        )}
        <StepNumSC>
          <StepNumInnerSC>
            <StepNumTextSC>{stepNum}</StepNumTextSC>
          </StepNumInnerSC>
        </StepNumSC>
      </StepSC>
    </CenterColSC>
  )
}

export const HowWorks = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing.xxxxlarge,
  [SHIFT_MQ]: {
    rowGap: 0,
  },
}))

export const HowWorksSection = styled.div((_) => ({
  width: '100%',
  justifyContent: 'space-between',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  maxWidth: '460px',
  flexDirection: 'column',
  [SHIFT_MQ]: {
    maxWidth: '1000px',
    flexDirection: 'row',
  },
}))

const HowWorksColSC = styled.div(() => ({
  [SHIFT_MQ]: {
    flex: '0 420px',
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 420,
  },
}))

export const HowWorksItemCol = styled(HowWorksColSC)(({ theme }) => ({
  paddingBottom: theme.spacing.large,
  alignSelf: 'center',
  [SHIFT_MQ]: {
    alignSelf: 'revert',
    paddingBottom: theme.spacing.xxxlarge,
  },

  'h3, h4, h5, h6': {
    ...theme.partials.marketingText.subtitle1,
    color: theme.colors.text,
    marginBottom: theme.spacing.small,
  },
  ul: {
    ...theme.partials.marketingText.componentText,
    color: theme.colors['text-xlight'],
  },
}))

export const HowWorksImgCol = styled(HowWorksColSC)(() => ({
  marginBottom: '0',
  [SHIFT_MQ]: {
    order: -1,
    marginBottom: '13%',
  },
  [mqs.lg]: {
    marginBottom: '12%',
  },
}))

const HowWorksImageWrapSC = styled.div((_) => ({
  margin: `-${IMAGE_MARGIN}`,
  position: 'relative',
  '--width': '300px',
  '--height': '300px',
}))

const HowWorksImageSC = styled.div<{ $width: number; $height: number }>(
  ({ $width, $height }) => ({
    width: '100%',
    position: 'relative',
    height: '0',
    paddingBottom: `calc((${$height} / ${$width}) * 100%)`,
    iframe: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
  })
)

export function HowWorksImage({
  width,
  height,
  src,
  title,
  children,
  ...props
}: Merge<
  ComponentProps<typeof HowWorksImageWrapSC>,
  {
    width: number
    height: number
    src: string
    title: string
  }
>) {
  return (
    <HowWorksImageWrapSC {...props}>
      <HowWorksImageSC
        $width={width}
        $height={height}
      >
        {children}
        <iframe
          title={title}
          data-animation-frame
          frameBorder="0"
          src={src}
        />
      </HowWorksImageSC>
    </HowWorksImageWrapSC>
  )
}

const ConnectorLineVSC = styled.div((_) => ({
  width: '10px',
  transformOrigin: '50% 0',
  position: 'absolute',
  overflow: 'hidden',
  transform: 'translate(-50%)',
  img: {
    display: 'block',
    transformOrigin: '50% 0',
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translate(-50%) scale(.1666)',
  },
}))

const ConnectorLineHSC = styled.div((_) => ({
  height: '10px',
  transformOrigin: '50% 0',
  position: 'absolute',
  overflow: 'hidden',
  transform: 'translateY(-50%)',
  img: {
    display: 'block',
    transformOrigin: '50% 0',
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translate(0)scale(.16666)rotate(-90deg)translate(-50%)',
  },
}))

export function ConnectorLineV({
  top,
  left,
  bottom,
  ...props
}: Merge<
  ComponentProps<typeof ConnectorLineVSC>,
  {
    top: string
    left: string
    bottom: string
  }
>) {
  return (
    <ConnectorLineVSC
      style={{ top, left, bottom }}
      {...props}
    >
      <img
        src="/images/product/dotted-line-vertical.png"
        loading="lazy"
        width="6"
        height="3992"
        alt=""
      />
    </ConnectorLineVSC>
  )
}

export function ConnectorLineH({
  top,
  left,
  right,
  ...props
}: Merge<
  ComponentProps<typeof ConnectorLineHSC>,
  {
    top: string
    left: string
    right: string
  }
>) {
  return (
    <ConnectorLineHSC
      style={{ top, left, right }}
      {...props}
    >
      <img
        src="/images/product/dotted-line-vertical.png"
        loading="lazy"
        width="6"
        height="3992"
        alt=""
      />
    </ConnectorLineHSC>
  )
}
