import styled from 'styled-components'

const QuoteSectionSC = styled.div(({ theme: _theme }) => ({
  backgroundColor: `${_theme.colors['action-primary']}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: `${_theme.spacing.large}px`,
  padding: `${_theme.spacing.xxxxxlarge}px ${_theme.spacing.large}px`,
  flexWrap: 'wrap',
  '.quoteContainer': {
    maxWidth: '40%',
    minWidth: '257px',
    color: 'white',
    position: 'relative',
    '.leftQuote': {
      position: 'absolute',
      top: '0px',
      left: 0,
      transform: 'translate(-120%, -120%)',
      width: '25px',
    },
    '.rightQuote': {
      position: 'absolute',
      bottom: 0,
      right: 0,
      transform: 'translate(50%, 50%)',
      width: '25px',
    },
  },
  '.titleContainer': {
    width: '300px',
  },
}))

export function QuoteSection({
  title,
  quote,
  attribution,
}: {
  title: string
  quote: string
  attribution: string
}) {
  return (
    <QuoteSectionSC>
      <div className="titleContainer">
        <h3 className="text-4xl font-bold text-marketing-white sm:text-3xl">
          {title}
        </h3>
      </div>
      <div className="quoteContainer">
        <svg
          width="38"
          height="34"
          viewBox="0 0 38 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="leftQuote hidden md:block"
          aria-hidden="true"
        >
          <path
            d="M14.45 0.699997V7.6C11.45 8.8 8.15 11.2 8.15 18.85H14.6V33.7H0.65V18.55C0.65 8.8 5.75 2.49999 14.45 0.699997ZM37.1 0.699997V7.6C34.1 8.8 30.8 11.2 30.8 18.85H37.25V33.7H23.3V18.55C23.3 8.8 28.4 2.49999 37.1 0.699997Z"
            fill="#C5C9D3"
          />
        </svg>

        <p
          className="mb-xlarge max-w-lg text-lg md:text-xl"
          style={{ color: 'white' }}
        >
          {quote}
        </p>
        <span>{attribution}</span>
        <svg
          width="37"
          height="34"
          viewBox="0 0 37 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rightQuote hidden md:block"
          aria-hidden="true"
        >
          <path
            d="M22.8312 33.3V26.4C25.8312 25.2 29.1312 22.8 29.1312 15.15H22.6812V0.300003H36.6312V15.45C36.6312 25.2 31.5312 31.5 22.8312 33.3ZM0.18125 33.3V26.4C3.18125 25.2 6.48125 22.8 6.48125 15.15H0.0312475V0.300003H13.9812V15.45C13.9812 25.2 8.88125 31.5 0.18125 33.3Z"
            fill="#C5C9D3"
          />
        </svg>
      </div>
    </QuoteSectionSC>
  )
}
