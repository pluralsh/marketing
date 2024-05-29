import { type ComponentProps, forwardRef, useMemo } from 'react'

import { type PrefixKeys } from '@pluralsh/design-system/dist/utils/ts-utils'
import { type Variants, motion } from 'framer-motion'
import isNil from 'lodash-es/isNil'
import styled from 'styled-components'
// @ts-expect-error
import useMobileDetect from 'use-mobile-detect-hook'

export type ImgProps = {
  top?: string
  left?: string
  bottom?: string
  right?: string
  width: string
  height?: string
  aspectRatio?: string
  src: string
}

type ImgPropsSC = PrefixKeys<ImgProps, '$'>

export type ImageProps = {
  url: string
  top?: number | string
  left?: number | string
  bottom?: number | string
  right?: number | string
  width: number | string
  height?: number | string
  round?: boolean | number
  aspectRatio?: string
  attrs: ComponentProps<typeof MultiImageSC>
  overlay?: boolean
}

export const STAGGER = 0.25
const PERSPECTIVE = 1400
const ROUND = 9

export const cardVariants = ({
  delay = 0,
  direction = 1,
}: {
  delay: number
  direction: 1 | -1
}): Variants => {
  const end = {
    rotateY: 0,
    scale: 1,
    opacity: 1,
  }

  return {
    offscreen: {
      rotateY: 15 * direction,
      scale: 0.85,
      opacity: 0,
      transition: { type: 'linear', duration: 0 },
    },
    onscreen: {
      ...end,
      transition: {
        type: 'spring',
        bounce: 0.15,
        duration: 1.8,
        delay,
      },
    },
    mobile: {
      ...end,
      transition: { type: 'linear', duration: 0 },
    },
  }
}

export const MotionDiv = styled(motion.div)(({ theme: _ }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  transformOrigin: '100% 50% -300px',
  perspective: PERSPECTIVE,
}))

export const MultiImageSC = styled.div<{ $aspectRatio: string }>(
  ({ $aspectRatio }) => ({
    width: '100%',
    aspectRatio: $aspectRatio,
    perspective: PERSPECTIVE,
    position: 'relative',
  })
)

export const MultiImageWrapSC = styled.div<
  ImgPropsSC & {
    $round: boolean | number | undefined
    $direction: 1 | -1
    $shadow?: boolean
  }
>(
  ({
    $width,
    $top,
    $left,
    $bottom,
    $right,
    $height,
    $round,
    $aspectRatio,
    $shadow,
  }) => ({
    top: $top,
    left: $left,
    bottom: $bottom,
    right: $right,
    height: $height,
    width: $width,
    position: 'absolute',
    transformStyle: 'preserve-3d',
    perspective: PERSPECTIVE,
    aspectRatio: $aspectRatio,
    overflow: 'hidden',
    // Keep box shadow looking correct
    // when containing rounded images
    borderRadius:
      typeof $round === 'boolean'
        ? $round
          ? ROUND - 1
          : 0
        : typeof $round === 'number'
          ? $round
          : ROUND - 1,
    boxShadow: $shadow ? '0px 20px 50px 0px #0E101599' : 'none',
  })
)

export const MultiImageVideoSC = styled.video<{
  $round?: boolean | number | undefined
}>(({ $round }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  position: 'absolute',
  borderRadius:
    typeof $round === 'boolean'
      ? $round
        ? ROUND
        : 0
      : typeof $round === 'number'
        ? $round
        : ROUND,
  overflow: 'hidden',
}))

export const MultiImageImgSC = styled.img<{ $round?: boolean }>(
  ({ $round = false }) => ({
    display: 'block',
    borderRadius:
      typeof $round === 'boolean'
        ? $round
          ? ROUND
          : 0
        : typeof $round === 'number'
          ? $round
          : 0,
  })
)

function MultiImageImg({
  inView,
  top,
  left,
  bottom,
  right,
  height,
  width,
  aspectRatio,
  src,
  animOffset,
  direction,
  shadow,
  round,
  overlay,
  ...attrs
}: ImgProps & {
  direction: -1 | 1
  inView: boolean
  overlay?: boolean
} & ComponentProps<typeof MultiImageWrapSC>) {
  const variants = useMemo(
    () => cardVariants({ delay: animOffset * STAGGER, direction }),
    [animOffset, direction]
  )

  const isMobile = useMobileDetect().isMobile()

  return (
    <MotionDiv
      animate={isMobile ? 'mobile' : inView ? 'onscreen' : 'offscreen'}
      variants={variants}
      className="opacity-0"
    >
      <MultiImageWrapSC
        $top={top}
        $left={left}
        $bottom={bottom}
        $right={right}
        $height={height}
        $width={width}
        $direction={direction}
        $round={round}
        $aspectRatio={aspectRatio}
        $shadow={shadow}
        className="graphic"
        {...attrs}
      >
        {overlay && (
          <div
            className="imgShadow absolute h-full w-full"
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.2) 1px -20px 20px 20px inset',
            }}
          />
        )}
        {src.match(/\.mp4$/) ? (
          <MultiImageVideoSC
            autoPlay
            muted
            loop
            playsInline
            $round={round}
            poster={`${src.replace(/\.mp4$/, '')}_poster.png`}
          >
            <source
              src={src}
              type="video/mp4"
              className="graphic"
            />
          </MultiImageVideoSC>
        ) : (
          <MultiImageImgSC
            src={src}
            $round={round}
            aria-hidden
            {...attrs}
          />
        )}
      </MultiImageWrapSC>
    </MotionDiv>
  )
}
export const FeaturesImage = forwardRef(
  (
    {
      images,
      width,
      height,
      direction = 1,
      inView = true,
      shadow = false,
      ...props
    }: {
      images: ImageProps[]
      width: number
      height: number
      direction?: 1 | -1
      inView?: boolean
    } & ComponentProps<typeof MultiImageWrapSC>,
    ref
  ) => (
    <MultiImageSC
      ref={ref}
      className="rootRef"
      $aspectRatio={`${width} / ${height}`}
      {...props}
    >
      {images.map((img, i) => {
        const imgHeight = isNil(img.height)
          ? undefined
          : typeof img.height === 'string'
            ? img.height
            : `${(img.height * 100) / height}%`
        const imgWidth =
          typeof img.width === 'string'
            ? img.width
            : `${(img.width * 100) / width}%`
        const imgTop = isNil(img.top)
          ? undefined
          : typeof img.top === 'string'
            ? img.top
            : `${(img.top * 100) / height}%`
        const imgLeft = isNil(img.left)
          ? undefined
          : typeof img.left === 'string'
            ? img.left
            : `${(img.left * 100) / width}%`
        const imgBottom = isNil(img.bottom)
          ? undefined
          : typeof img.bottom === 'string'
            ? img.bottom
            : `${(img.bottom * 100) / width}%`
        const imgRight = isNil(img.right)
          ? undefined
          : typeof img.right === 'string'
            ? img.right
            : `${(img.right * 100) / width}%`

        return (
          <MultiImageImg
            inView={inView}
            key={i}
            src={img.url}
            top={imgTop}
            left={imgLeft}
            right={imgRight}
            bottom={imgBottom}
            height={imgHeight}
            width={imgWidth}
            round={img.round}
            aspectRatio={img.aspectRatio}
            animOffset={i}
            direction={direction}
            shadow={shadow}
            overlay={img.overlay}
            {...img.attrs}
          />
        )
      })}
    </MultiImageSC>
  )
)
