import styled, { useTheme } from 'styled-components'

import { type QuoteFragment } from '@src/generated/graphqlDirectus'

import { StandardPageWidth } from '../layout/LayoutHelpers'
import { QuotesCarousel } from '../QuoteCards'
import { ResponsiveText } from '../Typography'

export function QuoteSection({
  title,
  quotes,
}: {
  title: string
  quotes: Nullable<QuoteFragment>[]
}) {
  const theme = useTheme()

  return (
    <StandardPageWidth
      style={{
        background:
          'linear-gradient(to bottom, #0E1015, rgba(14, 16, 21, 0)), linear-gradient(to bottom, #0A0F8F, #747AF6)',
      }}
    >
      <div className="flex flex-col items-start justify-between gap-large px-xxxlarge py-xxxxxxlarge lg:flex-row">
        <ResponsiveText
          as="h3"
          textStyles={{ lg: 'mHero1', '': 'mHero2' }}
          className="w-full max-w-[500px] lg:w-1/2"
          style={{ color: theme.colors.grey[25] }}
        >
          {title}
        </ResponsiveText>
        <div className="relative w-full max-w-[500px] lg:w-1/2">
          <DoubleQuote style={{ top: -30, left: -50 }} />
          <QuotesCarousel
            quotes={quotes}
            quoteElement={<QuoteText />}
          />
          <DoubleQuote
            style={{ transform: 'rotate(180deg)', bottom: 40, right: 0 }}
          />
        </div>
      </div>
    </StandardPageWidth>
  )
}

function QuoteText({ quote }: { quote?: QuoteFragment }) {
  return (
    <>
      <QuoteTextSC>{quote?.quote}</QuoteTextSC>
      <p className="w-[80%] text-text-light">{quote?.author_text?.repeat(1)}</p>
    </>
  )
}

function DoubleQuote(props) {
  const theme = useTheme()

  return (
    <svg
      width="25"
      viewBox="0 0 38 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute hidden lg:block"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M14.45 0.699997V7.6C11.45 8.8 8.15 11.2 8.15 18.85H14.6V33.7H0.65V18.55C0.65 8.8 5.75 2.49999 14.45 0.699997ZM37.1 0.699997V7.6C34.1 8.8 30.8 11.2 30.8 18.85H37.25V33.7H23.3V18.55C23.3 8.8 28.4 2.49999 37.1 0.699997Z"
        fill={theme.colors.text}
      />
    </svg>
  )
}

const QuoteTextSC = styled.p(({ theme }) => ({
  fontFamily: 'Monument',
  fontSize: '28px',
  fontStyle: 'normal',
  fontWeight: 400,
  letterSpacing: '1.058px',
  color: theme.colors.text,
  marginBottom: theme.spacing.xlarge,
}))
