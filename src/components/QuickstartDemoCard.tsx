import styled from 'styled-components'

import { mqs } from '@src/breakpoints'
import { QUICKSTART_VIDEO_URL } from '@src/consts'

import Embed from './Embed'
import { SubsectionHead } from './SectionHeads'
import { ShadowedCard } from './ShadowedCard'
import { Body1, Cta } from './Typography'

const QuickstartDemoCardSC = styled(ShadowedCard)(({ theme }) => ({
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  '.content': {
    padding: theme.spacing.xlarge,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 460,
    display: 'flex',
    flexDirection: 'column',
    rowGap: theme.spacing.large,
  },
  [mqs.columns]: {
    flexDirection: 'row',
    '& > *': {
      width: '50%',
    },
    '.content': {
      marginLeft: 0,
    },
  },
}))

export function QuickstartDemoCard() {
  return (
    <QuickstartDemoCardSC>
      <Embed
        className="m-0 p-0"
        url={QUICKSTART_VIDEO_URL}
        aspectRatio="16 / 9"
      />
      <div className="content">
        <SubsectionHead
          preHeading="Video demo"
          heading="Plural Quickstart Demo"
          headingProps={{ textStyles: { '': 'mTitle1' } }}
        />
        <Body1 color="text-light">
          This guide goes over how to get started with Plural using our
          in-browser Cloud Shell.
        </Body1>
        <Cta
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/@pluralsh/videos"
        >
          Browse all
        </Cta>
      </div>
    </QuickstartDemoCardSC>
  )
}
