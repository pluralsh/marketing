import { Button, ConsoleIcon, DownloadIcon } from '@pluralsh/design-system'
import Link from 'next/link'

import styled from 'styled-components'

import { getSolutionConfigs } from '@src/data/getSolutionsConfigs'

import { EqualColumn } from '../layout/Columns'
import { StandardPageSection } from '../layout/LayoutHelpers'
import { ResponsiveText } from '../Typography'

function SolutionDownloadSection({ slug }: { slug: string }) {
  const innerSolution = getSolutionConfigs()[slug]

  return (
    <StandardPageSection className="flex items-center justify-center bg-fill-zero px-medium md:px-large lg:px-xxxxlarge">
      <div className="relative  flex w-full items-center justify-center overflow-hidden rounded-large border border-purple-300 p-medium sm:p-xxlarge lg:px-xxxxxlarge">
        <Background />
        <div className="z-10 max-w-[760px]">
          <ResponsiveText
            textStyles={{ '': 'mSubtitle1' }}
            className=" mb-medium"
          >
            {innerSolution.bottomTitle}
          </ResponsiveText>
          <ResponsiveText textStyles={{ '': 'mBody2' }}>
            {innerSolution.bottomDescription}
          </ResponsiveText>

          <div className=" mt-xxlarge flex flex-col items-stretch gap-medium lg:flex-row lg:items-center">
            <EqualColumn>
              <Button
                large
                as={Link}
                href="/contact-sales"
                startIcon={<ConsoleIcon />}
              >
                Book a demo
              </Button>
            </EqualColumn>
            <EqualColumn>
              <Button
                large
                as="a"
                secondary
                outline
                href={`/pdfs/solutions/e-books/${slug}.pdf`}
                download
                startIcon={<DownloadIcon />}
              >
                Download full e-book
              </Button>
            </EqualColumn>
          </div>
        </div>
      </div>
    </StandardPageSection>
  )
}

export default SolutionDownloadSection

const Background = styled.div(({ theme }) => ({
  overflow: 'hidden',
  content: '""',
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  width: '100%',
  height: '100%',
  backgroundImage: `url(/images/solutions/download-section-bg.png)`,
  backgroundPosition: 'center center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundColor: theme.colors['fill-two'],
}))
