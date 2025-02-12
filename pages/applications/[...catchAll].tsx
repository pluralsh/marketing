import { type GetServerSideProps } from 'next'

export default function ContactSalesRedirect() {
  return null
}

export const getServerSideProps: GetServerSideProps = async () => {
  const newPath = `/`

  return {
    redirect: {
      destination: newPath,
      permanent: true,
    },
  }
}
