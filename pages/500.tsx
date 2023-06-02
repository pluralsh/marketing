import Error from 'next/error'

import { propsWithGlobalSettings } from '@src/components/getGlobalProps'

export default function Plural500({ statusCode }) {
  return <Error statusCode={statusCode} />
}

export async function getStaticProps() {
  return propsWithGlobalSettings({
    metaTitle: 'Error',
  })
}
