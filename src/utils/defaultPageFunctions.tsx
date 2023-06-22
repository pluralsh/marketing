import { propsWithGlobalSettings } from './getGlobalProps'

export async function getStaticProps() {
  return propsWithGlobalSettings({})
}
