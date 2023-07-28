import { useEffect, useMemo, useState } from 'react'

import * as loom from '@loomhq/loom-embed'
import ReactEmbed from 'react-embed'
import { useTheme } from 'styled-components'

import { EmbedAspectRatio } from './AspectRatio'

function Embed({
  url,
  aspectRatio = '16 / 9',
  ...props
}: {
  url: string
  aspectRatio?: string
  className?: string
}) {
  const [loomEmbed, setLoomEmbed] = useState('')
  const isLoomUrl = useMemo(
    () => !!url.match(/^https{0,1}:\/\/(www\.){0,1}loom\.com/g),
    [url]
  )
  const theme = useTheme()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (isLoomUrl) {
      let isSubscribed = true

      loom.textReplace(url).then((result) => {
        if (isSubscribed) setLoomEmbed(result)
      })

      return () => {
        isSubscribed = false
      }
    }
  }, [isLoomUrl, url])

  let content

  if (isLoomUrl) {
    content = (
      <EmbedAspectRatio
        $aspectRatio={aspectRatio}
        {...props}
        dangerouslySetInnerHTML={{ __html: loomEmbed }}
      />
    )
  } else {
    content = (
      <EmbedAspectRatio
        $aspectRatio={aspectRatio}
        {...props}
      >
        {hasMounted ? (
          <ReactEmbed
            url={url}
            {...props}
            isDark={theme.mode === 'dark'}
          />
        ) : null}
      </EmbedAspectRatio>
    )
  }

  return content
}

export default Embed
