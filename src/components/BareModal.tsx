import { type ComponentProps, forwardRef, useEffect, useState } from 'react'

import { CloseIcon, IconFrame } from '@pluralsh/design-system'
import { Modal } from 'honorable'

import useLockedBody from '@pluralsh/design-system/dist/hooks/useLockedBody'
import styled from 'styled-components'

import { mqs } from '@src/breakpoints'

export const BareModal = styled(
  forwardRef<
    any,
    ComponentProps<typeof Modal> & { lockBody?: boolean; closeButton: boolean }
  >(({ closeButton = true, lockBody = true, children, ...props }, ref) => {
    const [hasMounted, setHasMounted] = useState(false)
    const [, setBodyLocked] = useLockedBody(props.open && lockBody)

    useEffect(() => setHasMounted(true), [])
    useEffect(() => {
      setBodyLocked(!!(lockBody && props?.open))
    }, [lockBody, props.open, setBodyLocked])

    if (!hasMounted) {
      return null
    }

    return (
      <Modal
        ref={ref}
        portal
        {...props}
      >
        {closeButton && (
          <IconFrame
            className="closeButton"
            type="floating"
            clickable
            icon={<CloseIcon />}
            onClick={props.onClose}
          />
        )}
        {children}
      </Modal>
    )
  })
)(({ theme, closeButton }) => ({
  '.closeButton': { flexShrink: 0, marginLeft: 'auto' },
  '&&': {
    padding: 0,
    margin: theme.spacing.medium,
    background: 'none',
    overflow: 'hidden',
    border: 'none',
    alignItems: 'start',
    height: '100%',
    gap: theme.spacing.small,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    filter: `drop-shadow(${theme.boxShadows.modal})`,
    [mqs.sm]: {
      flexDirection: 'row-reverse',
      ...(closeButton
        ? {
            paddingLeft: theme.spacing.medium + 32,
            paddingRight: theme.spacing.medium + 32,

            // translate: `${(theme.spacing.medium + 32) / 2}px 0`,
            '.closeButton': {
              position: 'absolute',
              top: 0,
              right: theme.spacing.xsmall,
            },
          }
        : {}),
    },
  },
}))
