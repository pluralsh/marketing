'use client'

import type { KeyTextField } from '@prismicio/client'

import { useEffect, useId } from 'react'

import styles from './styles.module.css'

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string
          portalId: string
          formId: string
          target: string
        }) => void
      }
    }
  }
}

type HubSpotFormProps = {
  region: KeyTextField
  portalId: KeyTextField
  formId: KeyTextField
}

export default function HubSpotForm({
  region,
  portalId,
  formId,
}: HubSpotFormProps) {
  const uniqId = useId()
  const id = `hbspt-f_${portalId}_${formId}_${uniqId}`

  useEffect(() => {
    const createForm = () => {
      if (!region || !portalId || !formId) {
        return
      }

      window.hbspt?.forms.create({
        region,
        portalId,
        formId,
        target: `#${id}`,
      })
    }

    if (window.hbspt?.forms.create) {
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

  return (
    <div
      id={id}
      className={styles.hsFormContainer}
    />
  )
}
