import { type ComponentProps, forwardRef } from 'react'

import { ArrowLeftIcon, Button } from '@pluralsh/design-system'
import Link from 'next/link'

import styled from 'styled-components'

export const BackButton = styled(
  forwardRef<any, ComponentProps<typeof Button>>((props, ref) => (
    <Button
      ref={ref}
      secondary
      small
      startIcon={<ArrowLeftIcon />}
      as={Link}
      href="/marketplace"
      {...props}
    >
      Back
    </Button>
  ))
)(({ theme: _ }) => ({
  '&&': {
    width: 'min-content',
  },
}))
