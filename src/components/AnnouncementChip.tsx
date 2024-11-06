import { ArrowTopRightIcon } from '@pluralsh/design-system'

import styled from 'styled-components'

export function AnnouncementChip({ text, url }: { text: string; url: string }) {
  return (
    <AnnouncementChipSC href={url}>
      {text} <ArrowTopRightIcon />
    </AnnouncementChipSC>
  )
}

const AnnouncementChipSC = styled.a(({ theme }) => ({
  '@property --bg-multiplier': {
    syntax: "'<number>'",
    inherits: 'false',
    initialValue: '1',
  },
  ...theme.partials.text.overline,
  position: 'relative',
  width: 'fit-content',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.small,
  padding: `${theme.spacing.medium}px ${theme.spacing.large}px`,
  background: `linear-gradient(180deg, rgba(255, 255, 255, calc(0.15 * var(--bg-multiplier))) 0%, rgba(255, 255, 255, calc(0.04 * var(--bg-multiplier))) 100%)`,
  borderRadius: '1000px',
  transition: '--bg-multiplier 0.16s ease',
  '&:hover': {
    '--bg-multiplier': '1.75',
  },
  '&::before': {
    borderRadius: '1000px',
    content: '""',
    position: 'absolute',
    inset: 0,
    border: '1px solid transparent',
    background: `linear-gradient(to bottom, #747AF6, #454954) border-box`,
    mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
    maskComposite: 'exclude',
  },
}))
