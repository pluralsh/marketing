// import { Dirent } from 'fs'
import { readdir, writeFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

export const INDEX_PATH_PARAM_SUFFIX = '-index'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const ignoreList = [
  // sitemaps
  /^sitemap\.xml.*/,
  // _nextjs templates
  // .hidden_files
  // [nextjs_dynamic_pages]
  // 404 and 500 error pages
  /^([_.[]|404|500).*$/,
]

// Allow list will override ignore list
const indexPageRegex = new RegExp(
  `^\\[\\[\\.{3}.*?${INDEX_PATH_PARAM_SUFFIX}\\]\\]`
)

const pageFilter = (file) => {
  if (file?.isDirectory()) {
    return true
  }
  let allow = true

  for (const regx of ignoreList) {
    if (file.name.match(regx)) {
      allow = false
    }
  }

  return allow && file.name.match(/\.(ts|tsx|js|jsx|md|mdoc)$/)
}

const rootDir = __dirname

const PAGES_PATH = '/pages'

async function crawlPages(filePath = '/') {
  const fullPath = path.join(rootDir, PAGES_PATH, filePath)
  const files = await readdir(fullPath, { withFileTypes: true })

  const filteredFiles = files
    .map((file) => {
      if (file.name.match(indexPageRegex)) {
        file.name = 'index.tsx'
      }

      return file
    })
    .filter(pageFilter)

  const pages = []

  for (const file of filteredFiles) {
    if (file.isDirectory()) {
      pages.push(...(await crawlPages(path.join(filePath, file.name))))
    } else {
      let pathname = file.name.split('.').slice(0, -1).join('.')

      pathname = path.join(filePath, pathname.replace(/(^|\/)index$/g, ''))
      pages.push({ path: pathname })
    }
  }

  return pages
}

const pagesObj = await crawlPages()
const pages = JSON.stringify(pagesObj, null, '  ')

writeFile(path.join(rootDir, 'src/generated/pages.json'), pages)

export default {}
