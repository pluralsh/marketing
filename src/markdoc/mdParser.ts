import { promises as fs } from 'fs'
import path from 'path'

import Markdoc from '@markdoc/markdoc'
import yaml from 'js-yaml'

import { type MarkdownPageFragment } from '@src/generated/graphqlDirectus'

import { config as schemaConfig } from './mdSchema'

import type { MarkdocPage } from './mdSchema'

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

export const readMdPage = async (
  page: MarkdownPageFragment
): Promise<MarkdocPage | null> => {
  try {
    const file = page.content

    if (!file) return null

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
          path: page.slug,
        },
      })
    )

    return ret
  } catch (e) {
    return null
  }
}
