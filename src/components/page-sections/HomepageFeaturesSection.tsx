import { type ComponentProps, type ReactNode, useMemo, useRef } from 'react'

import { ColorModeProvider } from '@pluralsh/design-system'

import { type PrefixKeys } from '@pluralsh/design-system/dist/utils/ts-utils'
import classNames from 'classnames'
import { type Variants, motion } from 'framer-motion'
import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { Columns, EqualColumn } from '@src/components/layout/Columns'
import { CenteredSectionHead } from '@src/components/SectionHeads'
import { Body2, ResponsiveText } from '@src/components/Typography'
import { mShadows } from '@src/styles/extraStyles'

import { StandardPageWidth } from '../layout/LayoutHelpers'

const PERSPECTIVE = 1400

const FeatureSC = styled(Columns)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // flexDirection: 'column',
  rowGap: theme.spacing.xxxlarge,
  [mqs.columns]: {
    '&:nth-child(2n+1)': {
      flexDirection: 'row-reverse',
    },
  },
}))

export function Feature({
  heading,
  children,
  graphic: image,
}: {
  heading: ReactNode
  children: ReactNode
  graphic: ReactNode
}) {
  return (
    <FeatureSC>
      <EqualColumn className="flex flex-col gap-y-xlarge">
        <ResponsiveText
          className="[text-wrap:balance]"
          textStyles={{ '': 'mTitle1' }}
        >
          {heading}
        </ResponsiveText>
        <Body2 as="div">{children}</Body2>
      </EqualColumn>
      <EqualColumn className="w-full">
        <div className={classNames('w-full')}>{image}</div>
      </EqualColumn>
    </FeatureSC>
  )
}
type ImageProps = {
  url: string
  top: number
  left: number
  width: number
  height: number
  attrs: ComponentProps<typeof MultiImageSC>
}
const MultiImageSC = styled.div<{ $aspectRatio: string }>(
  ({ $aspectRatio }) => ({
    width: '100%',
    aspectRatio: $aspectRatio,
    perspective: PERSPECTIVE,
    position: 'relative',
  })
)
const MultiImageWrapSC = styled.div<
  ImgPropsSC & { $round: boolean; $direction: 1 | -1 }
>(({ $width, $top, $left, $height, $round, $direction = 1 }) => ({
  top: $top,
  left: $left,
  height: $height,
  width: $width,
  position: 'absolute',
  borderRadius: $round ? '4px' : 0,
  overflow: 'hidden',
  boxShadow: mShadows.light.slight,
  transformStyle: 'preserve-3d',
  perspective: PERSPECTIVE,
  [mqs.columns]: {
    transform: `rotateY(${$direction * -12.5}deg)`,
  },
}))

const MultiImageVideoSC = styled.video<{ $round?: boolean }>(
  ({ $round = true }) => ({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
    borderRadius: $round ? 4 : 0,
    overflow: 'hidden',
  })
)

const MultiImageImgSC = styled.img<{ $round?: boolean }>(
  ({ $round = false }) => ({
    display: 'block',
    borderRadius: $round ? 4 : 0,
  })
)

type ImgProps = {
  top: string
  left: string
  width: string
  height: string
  src: string
}
type ImgPropsSC = PrefixKeys<ImgProps, '$'>

const cardVariants = ({
  delay = 0,
  direction = 1,
}: {
  delay: number
  direction: 1 | -1
}): Variants => ({
  offscreen: {
    rotateY: 45 * direction,
    scale: 0.85,
    opacity: 0,
  },
  onscreen: {
    rotateY: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay,
    },
  },
})

const MotionDiv = styled(motion.div)(({ theme: _ }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  transformOrigin: '100% 50% -300px',
  // transformStyle: 'flat',
  perspective: PERSPECTIVE,
}))

function MultiImageImg({
  top,
  left,
  height,
  width,
  src,
  animOffset,
  direction,
  ...attrs
}: ImgProps & { direction: -1 | 1 } & ComponentProps<typeof MultiImageWrapSC>) {
  const ref = useRef<HTMLDivElement>(null)
  // const { scrollYProgress, ...scrollProps } = useScroll({
  //   target: ref,
  //   // @ts-expect-error
  //   offset: ['end end', 'start start'],
  // })
  const variants = useMemo(
    () => cardVariants({ delay: animOffset * 0.1, direction }),
    [animOffset, direction]
  )

  return (
    <MotionDiv
      ref={ref}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 'some' }}
      variants={variants}
    >
      <MultiImageWrapSC
        $top={top}
        $left={left}
        $height={height}
        $width={width}
        $direction={direction}
        poster={`${src.replace(/\.mp4$/, '')}_poster.png`}
        className="graphic"
        {...attrs}
      >
        {src.match(/\.mp4$/) ? (
          <MultiImageVideoSC
            autoPlay
            muted
            loop
            playsInline
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
            {...attrs}
          />
        )}
      </MultiImageWrapSC>
    </MotionDiv>
  )
}

function FeaturesImage({
  images,
  width,
  height,
  direction = 1,
  ...props
}: {
  images: ImageProps[]
  width: number
  height: number
  direction?: 1 | -1
} & ComponentProps<typeof MultiImageWrapSC>) {
  return (
    <MultiImageSC
      $aspectRatio={`${width} / ${height}`}
      {...props}
    >
      {images.map((img, i) => (
        <MultiImageImg
          key={i}
          src={img.url}
          top={`${(img.top * 100) / height}%`}
          left={`${(img.left * 100) / width}%`}
          height={`${(img.height * 100) / height}%`}
          width={`${(img.width * 100) / width}%`}
          animOffset={i}
          direction={direction}
          {...img.attrs}
        />
      ))}
    </MultiImageSC>
  )
}
export function HomepageFeaturesSection() {
  return (
    <ColorModeProvider mode="light">
      <div
        className={classNames(
          'bg-fill-zero',
          'py-xxxxxlarge md:py-xxxxxxlarge xxl:py-xxxxxxlarge'
        )}
      >
        <StandardPageWidth>
          <div
            className={classNames(
              'flex flex-col',
              'gap-y-xxxxxlarge md:gap-y-xxxxxxlarge xxl:gap-y-xxxxxxlarge'
            )}
          >
            <CenteredSectionHead
              preHeading="Features"
              heading="Get all the control, flexibility, and security that comes from self-hosting, with none of the hassle."
            />
            <Feature
              heading="Easy setup, effortless deployments"
              graphic={
                <FeaturesImage
                  width={678}
                  height={440.28}
                  images={[
                    {
                      top: 56.18,
                      left: 0,
                      width: 540.14,
                      height: 384.1,
                      attrs: {},
                      url: '/images/homepage/features/easy-setup-1.png',
                    },
                    {
                      top: 0,
                      left: 310,
                      width: 368,
                      height: 391,
                      attrs: {},
                      url: '/images/homepage/features/easy-setup-2.mp4',
                    },
                  ]}
                />
              }
            >
              <p>
                Install Plural using our CLI or our cloud shell in minutes and
                then choose from 90+ production-grade, open-source applications
                to deploy in your environment.
              </p>
            </Feature>
            <Feature
              heading="For the security and privacy conscious"
              graphic={
                <FeaturesImage
                  direction={-1}
                  width={654}
                  height={400}
                  images={[
                    {
                      top: 0,
                      left: 262,
                      width: 392,
                      height: 382,
                      attrs: {},
                      url: '/images/homepage/features/security-1.png',
                    },
                    {
                      top: 67,
                      left: 0,
                      width: 273,
                      height: 327.420098824,
                      attrs: {},
                      url: '/images/homepage/features/security-2.mp4',
                    },
                  ]}
                />
              }
            >
              <p>
                Plural is built for secure deployments, featuring
                security-scanned and hardened images, seamless integration with
                your SAML gateway, turnkey user authentication, centralized user
                management, and granular RBAC.
              </p>
            </Feature>
            <Feature
              heading="Fully customizable deployments"
              graphic={
                <FeaturesImage
                  width={2034}
                  height={1166}
                  images={[
                    {
                      top: 0,
                      left: 0,
                      width: 2034,
                      height: 1166,
                      attrs: {},
                      url: '/images/homepage/features/customizable-1.mp4',
                    },
                  ]}
                />
              }
            >
              <p>
                We know that everyone’s requirements are a little different.
                That’s why everything is customizable in Plural. Want to change
                the network setup? How about using a different storage layer? No
                sweat. Better yet, all configuration is stored in Git, providing
                a natural development workflow to rework and customize
                applications.
              </p>
            </Feature>
            <Feature
              heading="Take the hassle out of upgrades and scaling"
              graphic={
                <FeaturesImage
                  direction={-1}
                  width={2034}
                  height={1186}
                  images={[
                    {
                      top: 0,
                      left: 0,
                      width: 2034,
                      height: 1186,
                      attrs: {},
                      url: '/images/homepage/features/upgrades-1.png',
                    },
                  ]}
                />
              }
            >
              <p>
                Never have the headache of manually upgrading applications
                again. Plural’s built in dependency tree ensures all
                dependencies are upgraded in the correct order, with no
                downtime. Need to scale? That’s 1-click with our operational
                runbooks.
              </p>
            </Feature>
            <Feature
              heading="Built for production"
              graphic={
                <FeaturesImage
                  width={678}
                  height={448}
                  images={[
                    {
                      top: 0,
                      left: 0,
                      width: 632.26,
                      height: 431.72,
                      attrs: {},
                      url: '/images/homepage/features/production-1.png',
                    },
                    {
                      top: 243.6,
                      left: 403.8,
                      width: 274,
                      height: 204,
                      attrs: {},
                      url: '/images/homepage/features/production-2.png',
                    },
                  ]}
                />
              }
            >
              <p>
                Harness Complete Performance Insights: Plural's Native
                Integrations with Prometheus, Datadog, and More. Streamline
                Testing and Rollouts with Effortless Multi-Cluster Deploys from
                Dev to Prod.
              </p>
            </Feature>
          </div>
        </StandardPageWidth>
      </div>
    </ColorModeProvider>
  )
}
