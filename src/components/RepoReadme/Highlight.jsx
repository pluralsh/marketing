import { useEffect, useRef } from 'react'

import { Pre } from 'honorable'

import hljs from 'highlight.js'

function Highlight({ language, children }) {
  const codeRef = useRef()

  useEffect(() => {
    if (hljs.getLanguage(language) && codeRef.current) {
      hljs.initHighlighting.called = false
      hljs.highlightBlock(codeRef.current)
    }
  }, [language, children])

  return (
    <Pre
      margin="0"
      padding="0"
      background="none"
      fontFamily="Monument Mono, monospace"
      className={(language && `language-${language}`) || 'nohighlight'}
      ref={codeRef}
    >
      {children}
    </Pre>
  )
}

export default Highlight
