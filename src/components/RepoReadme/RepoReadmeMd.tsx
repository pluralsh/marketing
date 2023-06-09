import { Children, memo } from 'react'

import {
  Blockquote,
  Code,
  Div,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Li,
  Ol,
  P,
  Ul,
} from 'honorable'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import styled from 'styled-components'

import MultilineCode from './Code'

const MdA = styled.a(({ theme }) => ({
  '&, &:any-link': {
    ...theme.partials.text.inlineLink,
  },
}))

const MdImg = styled(({ src, gitUrl, mainBranch, ...props }) => {
  // Convert local image paths to full path on github
  // Only works if primary git branch is named "master"
  if (gitUrl && src && !src.match(/^https*/)) {
    src = `${gitUrl}/raw/${mainBranch}/${src}`
  }

  return (
    <img
      src={src}
      {...props}
    />
  )
})((_) => ({
  '&&': {
    display: 'inline',
    maxWidth: '100%',
  },
}))

function getLastStringChild(children, depth = 0) {
  let lastChild: string | null = null

  Children.forEach(children, (child) => {
    if (typeof child === 'string') {
      lastChild = child
    } else if (child.props && child.props.children && depth < 3) {
      lastChild = getLastStringChild(child.props.children, depth + 1)
    }
  })

  return lastChild
}

function MdPre({ children, ...props }) {
  let lang

  if (children.props?.className?.startsWith('lang-')) {
    lang = children.props.className.slice(5)
  }
  const stringChild = getLastStringChild(children) || ''

  return (
    <Div mb={1}>
      <MultilineCode
        language={lang}
        {...props}
      >
        {stringChild}
      </MultilineCode>
    </Div>
  )
}

const toReactMarkdownComponent = ({
  component: Component,
  props,
}: {
  component?: any
  props?: any
}) =>
  function renderComponent(p) {
    return (
      <Component
        {...{
          ...p,
          ...(props ?? {}),
        }}
      />
    )
  }

export default memo(
  ({
    text,
    gitUrl,
    mainBranch,
  }: {
    text: string
    gitUrl: string
    mainBranch: string
  }) => (
    <Div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          blockquote: toReactMarkdownComponent({
            component: Blockquote,
            props: {
              borderLeft: '4px solid',
              borderColor: 'border',
              mx: 0,
              pl: '1em',
            },
          }),
          ul: toReactMarkdownComponent({
            component: Ul,
            props: { paddingLeft: 'xlarge', marginBottom: 'small' },
          }),
          ol: toReactMarkdownComponent({
            component: Ol,
            props: { paddingLeft: 'xlarge', marginBottom: 'small' },
          }),
          li: toReactMarkdownComponent({
            component: Li,
            props: { body1: true, marginTop: 'xxsmall' },
          }),
          h1: toReactMarkdownComponent({
            component: H1,
            props: {
              title2: true,
              color: 'text',
              marginTop: 'large',
              marginBottom: 'small',
              ':first-of-type': { marginTop: '0px' },
            },
          }),
          h2: toReactMarkdownComponent({
            component: H2,
            props: {
              subtitle1: true,
              color: 'text',
              marginTop: 'large',
              marginBottom: 'small',
              ':first-of-type': { marginTop: '0px' },
            },
          }),
          h3: toReactMarkdownComponent({
            component: H3,
            props: {
              subtitle2: true,
              color: 'text',
              bold: true,
              marginTop: 'large',
              marginBottom: 'small',
              ':first-of-type': { marginTop: '0px' },
            },
          }),
          h4: toReactMarkdownComponent({
            component: H4,
            props: {
              body1: true,
              color: 'text',
              bold: true,
              marginTop: 'large',
              marginBottom: 'small',
              ':first-of-type': { marginTop: '0px' },
            },
          }),
          h5: toReactMarkdownComponent({
            component: H5,
            props: {
              body1: true,
              color: 'text',
              bold: true,
              marginTop: 'large',
              marginBottom: 'small',
              ':first-of-type': { marginTop: '0px' },
            },
          }),
          h6: toReactMarkdownComponent({
            component: H6,
            props: {
              body1: true,
              bold: true,
              color: 'text',
              marginTop: 'large',
              marginBottom: 'small',
              ':first-of-type': { marginTop: '0px' },
            },
          }),
          img: (props) => (
            <MdImg
              {...{
                ...props,
                ...{
                  gitUrl,
                  mainBranch,
                  style: { maxWidth: '100%' },
                },
              }}
            />
          ),
          p: toReactMarkdownComponent({
            component: P,
            props: { body2: true, marginBottom: 'medium' },
          }),
          div: toReactMarkdownComponent({
            component: Div,
            props: { body2: true, marginBottom: 'medium' },
          }),
          a: toReactMarkdownComponent({
            component: MdA,
            props: {
              // inline: true,
              // display: 'inline',
              target: '_blank',
            },
          }),
          span: toReactMarkdownComponent({
            props: { style: { verticalAlign: 'bottom' } },
          }),
          code: toReactMarkdownComponent({ component: Code }),
          pre: toReactMarkdownComponent({ component: MdPre }),
        }}
      >
        {text}
      </ReactMarkdown>
    </Div>
  )
)
