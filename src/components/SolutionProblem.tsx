import {
  Button,
  ErrorIcon,
  PluralLogoFull,
  SuccessIcon,
} from '@pluralsh/design-system'
import Link from 'next/link'

import styled from 'styled-components'

import { EqualColumn } from './layout/Columns'
import { StandardPageWidth } from './layout/LayoutHelpers'
import { ResponsiveText } from './Typography'

function SolutionProblem({ title, subtitle, problem, solution }) {
  return (
    <StandardPageWidth>
      <div className="mb-xxlarge flex flex-col items-center justify-between gap-small lg:flex-row">
        <ResponsiveText
          className="m-auto mb-xxxlarge text-center"
          as="h2"
          textStyles={{
            lg: 'mHero2',
            '': 'mTitle1',
          }}
          style={{ margin: 0 }}
        >
          {title}
        </ResponsiveText>
        <Button
          large
          secondary
          outline
          as={Link}
          href="/contact-sales"
        >
          Book a demo
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row">
        <EqualColumn className=" flex flex-col items-center gap-large lg:items-start">
          <ResponsiveText
            className="m-auto mb-xxxlarge text-center"
            as="h2"
            textStyles={{
              '': 'mSubtitle1',
            }}
            style={{ margin: 0, height: 30 }}
          >
            {subtitle}
          </ResponsiveText>
          <ProblemContainerSC className="flex-col gap-medium rounded-large rounded-bl-none rounded-br-none border lg:flex-row lg:rounded-bl-large lg:rounded-tr-none">
            <ErrorIcon
              color="icon-danger"
              size={32}
              secondaryColor="black"
            />
            <ResponsiveText
              as="div"
              textStyles={{
                lg: 'mSubtitle2',
                '': 'mBody1',
              }}
              className="text-center lg:text-left"
            >
              {problem}
            </ResponsiveText>
          </ProblemContainerSC>
        </EqualColumn>
        <EqualColumn className=" flex flex-col-reverse items-center justify-end gap-large lg:flex-col lg:items-start">
          <PluralLogoFull
            color="mkt-black"
            width={109}
            height={30}
          />
          <SolutionContainerSC className="flex-col gap-medium rounded-large rounded-tl-none rounded-tr-none border sm:border-t-0 lg:flex-row lg:rounded-bl-none lg:rounded-tr-large lg:border-l-0 lg:border-t">
            <SuccessIcon
              color="icon-success"
              size={32}
            />
            <ResponsiveText
              as="div"
              textStyles={{
                lg: 'mSubtitle2',
                '': 'mBody1',
              }}
              className="text-center lg:text-left"
            >
              {solution}
            </ResponsiveText>
          </SolutionContainerSC>
        </EqualColumn>
      </div>
    </StandardPageWidth>
  )
}

export default SolutionProblem

const SharedStyles = styled.div(({ theme }) => ({
  padding: `${theme.spacing.xxxlarge}px ${theme.spacing.xxlarge}px`,
  width: '100%',
  flexGrow: 1,
  //   boxShadow: `0px 0px 0px 1px ${theme.colors['border-disabled']}`,
  borderColor: theme.colors['border-disabled'],
  display: 'flex',
  alignItems: 'center',
}))

const ProblemContainerSC = styled(SharedStyles)(({ theme }) => ({
  background: `linear-gradient(to right, rgba(232, 23, 72, 0.06), ${theme.colors['fill-zero']})`,
}))

const SolutionContainerSC = styled(SharedStyles)(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.colors['fill-zero']}, rgba(60, 236, 175, 0.06))`,
}))
