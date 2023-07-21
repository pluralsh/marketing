import { useEffect } from 'react'

import styled from 'styled-components'

const HubspotFormSC = styled.div(({ theme: _ }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
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
