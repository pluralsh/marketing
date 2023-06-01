import { propsWithGlobalSettings } from '../components/getGlobalProps'

export async function getStaticProps() {
  return propsWithGlobalSettings({
    metaTitle: 'Page not Found',
  })
}
