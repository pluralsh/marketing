export default function Index() {
  return (
    <div>
      <div className="flex flex-col gap-x-medium gap-y-xlarge ">
        <h1 className="hero1 mb-medium w-full md:w-3/4">Home page</h1>
        <p className="text-marketing-white">This is some body text</p>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => ({ props: {} })
