import styled from 'styled-components'

import { PageMaxWidthLimiter } from '@src/components/MaxWidthLimiter'

export const FullPage = styled(PageMaxWidthLimiter)((_) => ({
  width: '100%',
}))
