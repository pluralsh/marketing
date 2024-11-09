import { Button, CalendarIcon } from '@pluralsh/design-system'
import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

import { RepeatingLogoSC } from '@src/components/custom-page/common'
import { TextColumnWithIcon } from '@src/components/custom-page/MultiColumnText'
import { FooterVariant } from '@src/components/FooterFull'
import { KubeconHeader, handleDownloadICS } from '@src/components/Kubecon'
import { StandardPageWidth } from '@src/components/layout/LayoutHelpers'
import { ImpactCardSection } from '@src/components/page-sections/ImpactCardSection'
import {
  Body1,
  Hero1,
  Hero2,
  OverlineLabel,
  ResponsiveText,
  Title1,
} from '@src/components/Typography'
import getPricing from '@src/data/getPricing'
import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function KubeCon() {
  return (
    <div className="bg-[#0F1116]">
      <div className="relative opacity-60 transition-opacity lg:opacity-100">
        <div
          css={`
            position: absolute;
            top: 260px;
            left: 191px;
            border-radius: 50%;
            background: #17e8a0;
            filter: blur(178px);
            width: 200px;
            height: 200px;
          `}
        />
        <div
          css={`
            position: absolute;
            top: 200px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50%;
            background: #7075f5;
            filter: blur(178px);
            width: 150px;
            height: 150px;
            @media (max-width: 768px) {
              display: none;
            }
          `}
        />
        <div
          css={`
            position: absolute;
            top: 265px;
            right: 171px;
            border-radius: 50%;
            background: #99daff;
            filter: blur(178px);
            width: 200px;
            height: 200px;
          `}
        />
        <img
          src="/images/pricing/pricing-circles.svg"
          className="absolute left-1/2 top-[400px] -translate-x-1/2"
        />
      </div>
      <StandardPageWidth>
        <div className="flex flex-col items-center gap-xxlarge py-xxxxxxlarge">
          <KubeconHeader />
          <div className="flex max-w-3xl flex-col items-center gap-small text-center">
            <Hero1>Meet us at KubeCon</Hero1>
            <Body1 $color="text-light">
              Join Plural at KubeCon North America 2024 in Salt Lake City, UT.
              We're excited to showcase our latest solutions that empower
              organizations to streamline their Kubernetes deployments and
              operations.
            </Body1>
          </div>
          <Button
            large
            primary
            rel="noopener noreferrer"
            target="_blank"
            as={Link}
            href="https://calendly.com/sam-plural/30min"
            className="mt-medium w-fit"
          >
            Let's meet in person
          </Button>
        </div>
      </StandardPageWidth>
      <WhereToFindUsSection>
        <StandardPageWidth>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center py-xlarge text-center">
              <OverlineLabel>Where to find us</OverlineLabel>
              <Hero2>
                Visit our booth —{' '}
                <span className="text-text-primary-accent">R23</span>
              </Hero2>
              <Body1
                $color="text-light"
                className="mt-small"
              >
                Booth R23 is near the CNCF project pavilion, across from the
                game zone.
              </Body1>
            </div>
            <Image
              className="w-[500px] rounded-large border border-solid border-[#ffffff99]"
              src="/images/kubecon/booths-map.jpg"
              alt="Booth map"
              width={2366}
              height={1432}
            />
            <div className="flex flex-col gap-xlarge pb-large pt-xxlarge lg:flex-row">
              <TextColumnWithIcon
                heading="Experience live demos"
                bodyText="See Plural in action and explore our platform's capabilities"
                icon="StackRun"
              />
              <div className="pt-xxlarge">
                <TextColumnWithIcon
                  heading="Meet our experts"
                  bodyText="Chat with our team and Founders, about your Kubernetes management challenges — and how we can help!"
                  icon="People"
                />
              </div>
              <TextColumnWithIcon
                heading="Exclusive swag"
                bodyText="Swing by and pick up Plural swag we made exclusively for KubeCon 2024"
                icon="MagicWand"
              />
            </div>
          </div>
        </StandardPageWidth>
      </WhereToFindUsSection>
      <StandardPageWidth>
        <div className="flex w-full flex-col items-center py-xxxxlarge">
          <ImpactCardSection />
          <Button
            large
            primary
            rel="noopener noreferrer"
            target="_blank"
            as={Link}
            href="https://calendly.com/sam-plural/30min"
          >
            Let's meet in person
          </Button>
        </div>
        <div className="flex flex-col gap-xxxlarge pb-xxxxxxlarge pt-xxxxlarge">
          <div className="flex flex-col gap-xxxlarge lg:flex-row">
            <Image
              className="w-full"
              src="/images/kubecon/session-info.jpg"
              alt="Session info"
              width={1600}
              height={900}
            />
            <div className="flex flex-col gap-medium text-text-light">
              <OverlineLabel>Get engaged</OverlineLabel>
              <Title1 $color="text">Attend our session</Title1>
              <SessionInfoListSC>
                Join us for an insightful session where we'll delve into:
                <ul>
                  <br />
                  <li>
                    The latest updates from the Kubernetes SIG-UI, focusing on
                    the evolution of the Kubernetes Dashboard project.
                  </li>
                  <li>
                    A comprehensive overview of key changes, enhancements, and
                    advancements, including a detailed exploration of the
                    project's new architecture.
                  </li>
                  <li>
                    The future of Kubernetes management and developer
                    experience.
                  </li>
                </ul>
              </SessionInfoListSC>
              <Button
                large
                primary
                className="w-fit"
                startIcon={<CalendarIcon />}
                onClick={handleDownloadICS}
              >
                Add session to calendar
              </Button>
            </div>
          </div>
          <div
            className="border-gray-300 flex flex-col items-center
            justify-between gap-large overflow-auto rounded-large 
            border border-border bg-fill-zero p-xlarge lg:flex-row"
          >
            <div className="flex flex-col">
              <ResponsiveText
                textStyles={{ lg: 'mSubtitle1', '': 'mSubtitle2' }}
              >
                Can't connect in person?
              </ResponsiveText>
              <ResponsiveText
                color="text-light"
                textStyles={{ lg: 'mBody1', '': 'mBody2' }}
              >
                No worries! We have plenty of ways for you to explore Plural.
              </ResponsiveText>
            </div>
            <div className="flex gap-medium">
              <Button
                secondary
                rel="noopener noreferrer"
                target="_blank"
                as={Link}
                href="https://docs.plural.sh/"
              >
                Read our docs
              </Button>
              <Button
                floating
                rel="noopener noreferrer"
                target="_blank"
                as={Link}
                href="https://plural.sh/"
              >
                Learn more
              </Button>
              <Button
                primary
                rel="noopener noreferrer"
                target="_blank"
                as={Link}
                href="https://plural.sh/contact-sales"
              >
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </StandardPageWidth>
      <div className="relative w-full border-y border-fill-two bg-[#171A21]">
        <RepeatingLogoSC />
        <div className="mx-auto flex w-[75%] max-w-[720px] flex-col items-center justify-center gap-xsmall py-xxxxxlarge text-center">
          <OverlineLabel>Learn more</OverlineLabel>
          <Hero2>About Plural</Hero2>
          <Body1 className="mt-xsmall">
            Plural makes enterprise Kubernetes management accessible, efficient,
            and cost-effective. Founded to address the operational complexities
            of Kubernetes, Plural provides platform engineering and DevOps teams
            with a comprehensive suite of tools for managing Kubernetes fleets
            at scale.
          </Body1>
          <Button
            className="mt-xlarge"
            large
            primary
            as={Link}
            rel="noopener noreferrer"
            target="_blank"
            href="https://plural.sh/"
          >
            Learn more about Plural
          </Button>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const { data, error } = await getPricing()
  const proPlan = data?.pricing_page?.pro_plan
  const enterprisePlan = data?.pricing_page?.enterprise_plan

  if (!proPlan || !enterprisePlan || error) {
    return { notFound: true }
  }

  return propsWithGlobalSettings({
    metaTitle: 'Plural at KubeCon',
    metaDescription:
      'Join Plural at KubeCon North America 2024 in Salt Lake City, UT.',
    footerVariant: FooterVariant.kitchenSink,
  })
}

const WhereToFindUsSection = styled.div(({ theme }) => {
  const bgGradient = `linear-gradient(180deg, #0E1015 0%, rgba(14, 16, 21, 0.0) 50%, #0E1015 100%),
    radial-gradient(81.85% 81.85% at 50% 18.15%, #0E1015 0%, rgba(14, 16, 21, 0.55) 100%)`

  return {
    padding: `${theme.spacing.xxxxlarge}px 0`,
    background: bgGradient,
    [`@media (min-width: ${theme.breakpoints.desktopSmall}px)`]: {
      background: `${bgGradient}, url(/images/kubecon/booth-bg.jpg) no-repeat center center / cover`,
    },
  }
})

const SessionInfoListSC = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.5px;
  ul {
    list-style: disc;
    padding-left: 16px;
  }
  li {
    margin-bottom: 6px;
  }
`
