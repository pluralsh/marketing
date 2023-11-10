import { promises as fs } from 'fs'
import path from 'path'

import Markdoc from '@markdoc/markdoc'
import yaml from 'js-yaml'

import { type MarkdownPageFragment } from '@src/generated/graphqlDirectus'

import { type MarkdocPage, config as schemaConfig } from './mdSchema'

const fileCache = new Map<string, MarkdocPage | null>()

export const readMdFileCached = async (
  filePath: string
): Promise<MarkdocPage | null> => {
  if (!filePath.startsWith('/pages')) {
    return null
  }
  function cacheAndReturn(val: MarkdocPage | null) {
    fileCache.set(filePath, val)

    return val
  }
  const cachedVal = fileCache.get(filePath)

  if (cachedVal !== undefined) {
    return cachedVal
  }

  const fullPath = path.join(process.cwd(), filePath)

  try {
    const file = await fs.readFile(fullPath, 'utf8')

    if (!file) {
      return cacheAndReturn(null)
    }

    const ast = Markdoc.parse(file)
    const frontmatter = ast.attributes.frontmatter
      ? yaml.load(ast.attributes.frontmatter)
      : {}
    const content = Markdoc.transform(ast, schemaConfig)

    const ret: MarkdocPage = JSON.parse(
      JSON.stringify({
        content,
        frontmatter,
        file: {
          path: filePath.replace(/^\/pages/g, ''),
        },
      })
    )

    return cacheAndReturn(ret)
  } catch (e) {
    // console.error(e)

    return cacheAndReturn(null)
  }
}

export const ReadMdContent = async (
  fileContent: string,
  filePath?: unknown
): Promise<MarkdocPage | null> => {
  try {
    if (!fileContent) return null

    const ast = Markdoc.parse(fileContent)
    const frontmatter = ast.attributes.frontmatter
      ? yaml.load(ast.attributes.frontmatter)
      : {}
    const mdTree = Markdoc.transform(ast, schemaConfig)

    const ret: MarkdocPage = JSON.parse(
      JSON.stringify({
        content: mdTree,
        frontmatter,
        file: { path: filePath },
      })
    )

    return ret
  } catch (e) {
    return null
  }
}

export const readMdPage = async (
  page: MarkdownPageFragment
): Promise<MarkdocPage | null> => ReadMdContent(page.content || '', page.slug)
