import Error from 'next/error'

import { propsWithGlobalSettings } from '@src/utils/getGlobalProps'

export default function Plural500({ statusCode }) {
  return <Error statusCode={statusCode} />
}

export async function getStaticProps() {
  return propsWithGlobalSettings({
    metaTitle: 'Error',
  })
}
