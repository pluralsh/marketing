export type MarkdocHeading = {
  id?: string
  level?: number
  title?: string
}

export function collectHeadings(node, sections: MarkdocHeading[] = []) {
  if (node) {
    if (node?.name === 'Heading') {
      const title = node.children[0]

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title,
        })
      }
    }

    if (node?.children) {
      for (const child of node.children) {
        collectHeadings(child, sections)
      }
    }
  }

  return sections as MarkdocHeading[]
}
