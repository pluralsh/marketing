import { type GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug as string[]
  const newPath = `/${slug.join('/')}`

  return {
    redirect: {
      destination: newPath,
      permanent: true,
    },
  }
}

export default function KubernetesRedirect() {
  return null
}
