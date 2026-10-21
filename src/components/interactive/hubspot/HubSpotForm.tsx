'use client'

import { useEffect, useId } from 'react'

import styles from './HubSpotForm.module.css'

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

export type HubSpotFormProps = {
  region: string
  portalId: string
  formId: string
}

/** Embeds a HubSpot form, restyled to match the site. */
export function HubSpotForm({ region, portalId, formId }: HubSpotFormProps) {
  const id = `hbspt-${useId().replace(/:/g, '')}`

  useEffect(() => {
    const createForm = () =>
      window.hbspt?.forms.create({ region, portalId, formId, target: `#${id}` })

    if (window.hbspt?.forms.create) {
      createForm()

      return
    }

    const script = document.createElement('script')

    script.src = 'https://js.hsforms.net/forms/v2.js'
    script.addEventListener('load', createForm)
    document.body.appendChild(script)

    return () => script.removeEventListener('load', createForm)
  }, [formId, id, portalId, region])

  return (
    <div
      id={id}
      className={styles.form}
    />
  )
}
