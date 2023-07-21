import { type ComponentProps } from 'react'

import styled from 'styled-components'

const PromoBannerSC = styled.div(({ theme }) => ({
  ...theme.partials.marketingText.body2,
  backgroundColor: theme.colors.blue[300],
}))

export function PromoBanner(props: ComponentProps<typeof PromoBannerSC>) {
  return <PromoBannerSC {...props} />
}
