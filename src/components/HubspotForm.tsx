import { useEffect } from 'react'

import styled from 'styled-components'

const HubspotFormSC = styled.div(({ theme: _ }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  'form:valid input.primary': {
    backgroundColor: `${_.colors['action-primary']} !important`,
    color: _.colors['marketing-white'],
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: `${_.colors['action-primary-hover']} !important`,
    },
  },
  form: {
    width: '100%',
    fieldset: {
      width: '100%',
      maxWidth: '100% !important',
    },
  },
  'form:invalid input.primary': {
    backgroundColor: `${_.colors['action-primary-disabled']} !important`,
    color: _.colors['text-primary-disabled'],
  },
  '.hs-error-msgs': {
    paddingBottom: _.spacing.medium,
  },
  '.hs-error-msg': {
    marginTop: _.spacing.xsmall,
    display: 'block',
  },
  '.hs-fieldtype-text, .hs-fieldtype-select, .hs-fieldtype-phonenumber': {
    marginBottom: _.spacing.small,
  },
  '.hs-fieldtype-text:first-child': {
    paddingRight: _.spacing.xxsmall,
  },
  '.hs-fieldtype-text:last-child': {
    paddingLeft: _.spacing.xxsmall,
  },
  '.input': {
    margin: '0 !important',
  },
  '.hs-form-required': {
    color: _.colors['text-error'],
  },
  '.hs-form-booleancheckbox': {
    marginTop: _.spacing.small,
    label: {
      fontSize: 12,
    },
    input: {
      width: '20px !important',
      height: 20,
      margin: 0,
      marginRight: _.spacing.xsmall,
    },
  },
  label: {
    color: 'var(--text-light, #C5C9D3)',
    appBody2BoldFontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '20px',
    LetterSpacing: '0.25px',
    '&.hs-error-msg': {
      color: _.colors['text-error'],
    },
  },
  'input[type="text"], input[type="email"], input[type="tel"], input[type="submit"], input[type="number"], input:-webkit-autofill, select':
    {
      height: 48,
      width: '100% !important',
      backgroundColor: 'rgba(255, 255, 255, 0.05) !important',
    },
  'input:not([type="submit"]):-webkit-autofill': {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: '#ffffff',
    boxShadow: 'inset 0 0 20px 30px #ffffff0f',
  },
  textarea: {
    height: 110,
    width: '100% !important',
    backgroundColor: 'rgba(255, 255, 255, 0.05) !important',
    padding: _.spacing.medium,
  },
  'input, textarea, select': {
    marginTop: _.spacing.xsmall,
    paddingLeft: _.spacing.medium,
    paddingRight: _.spacing.medium,
    borderRadius: _.borderRadiuses.large,
    border: '1px solid rgba(255, 255, 255, 0.20)',
    fontFamily: 'Inter',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '-0.15px',
    '&.primary': {
      width: '100%',
      marginTop: _.spacing.large,
      border: 'none',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '24px',
      LetterSpacing: '0.5px',
    },
    '::placeholder': {
      color: 'rgba(255, 255, 255, 0.60)',
    },
  },
}))

export function HubspotForm({
  region = 'na1',
  portalId = '22363579',
  formId,
  uniqueKey,
}: {
  region?: string
  portalId?: string
  formId: string
  uniqueKey?: string
}) {
  const id = `hbspt-f_${portalId}_${formId}_${uniqueKey}`

  useEffect(() => {
    const createForm = () => {
      window?.hbspt?.forms?.create({
        region,
        portalId,
        formId,
        target: `#${id}`,
      })
    }

    if (window?.hbspt?.forms.create) {
      createForm()

      return
    }
    const script = document.createElement('script')

    script.src = 'https://js.hsforms.net/forms/v2.js'
    document.body.appendChild(script)

    script.addEventListener('load', createForm)

    return () => {
      script.removeEventListener('load', createForm)
    }
  }, [formId, id, portalId, region])

  return <HubspotFormSC id={id} />
}
