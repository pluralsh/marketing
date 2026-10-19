'use client'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

/** Click-to-load YouTube player; avoids loading the iframe up front. */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="border-line overflow-hidden rounded-sm border">
      <LiteYouTubeEmbed
        id={id}
        title={title}
        poster="maxresdefault"
      />
    </div>
  )
}
