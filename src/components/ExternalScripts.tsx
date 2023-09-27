import { useEffect } from 'react'

import { useRouter } from 'next/router'
import Script from 'next/script'

function HubSpot() {
  const router = useRouter()

  useEffect(() => {
    if (!router?.events?.on) {
      return
    }
    const handleRouteChangeComplete = (url) => {
      if (!(window as any)?.Cookiebot?.consent?.statistics) {
        return
      }
      const _hsq = ((window as any)._hsq = (window as any)._hsq || [])

      _hsq.push(['setPath', url])
      _hsq.push(['trackPageView'])
    }

    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])

  // Turn tracking on and off when cookie prefs change
  useEffect(() => {
    const onCookiePrefChange = () => {
      const _hsq = (window._hsq = window._hsq || [])

      _hsq.push([
        'doNotTrack',
        { track: window.Cookiebot?.consent?.statistics },
      ])
    }

    window.addEventListener('CookiebotOnAccept', onCookiePrefChange)
    window.addEventListener('CookiebotOnDecline', onCookiePrefChange)

    return () => {
      window.removeEventListener('CookiebotOnAccept', onCookiePrefChange)
      window.removeEventListener('CookiebotOnDecline', onCookiePrefChange)
    }
  }, [])

  return (
    <Script
      type="text/plain" // text/plain prevents loading until Cookiebot determines prefs
      data-cookieconsent="marketing"
      strategy="afterInteractive"
      id="hs-script-loader"
      async
      defer
      src="//js.hs-scripts.com/22363579.js"
    />
  )
}

function Clearbit() {
  return (
    <Script
      type="text/plain" // text/plain prevents loading until Cookiebot determines prefs
      data-cookieconsent="marketing"
      async
      src="https://tag.clearbitscripts.com/v1/pk_7a9f6312488a429ca6602e03b4a66c9c/tags.js"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  )
}

export default function ExternalScripts() {
  if (process.env.NEXT_PUBLIC_DEV_MODE) {
    return null
  }

  return (
    <>
      <HubSpot />
      <Clearbit />
    </>
  )
}
