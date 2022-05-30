import { useSession } from "next-auth/react"
import Layout from "../../components/layout"

export default function MePage() {
  const { data } = useSession()

  return (
    <>
      <Layout>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Layout>
      <div>
        <h1>{data?.user?.name}</h1>
        <p>{data?.user?.email}</p>
        {/* <Image src={data?.user?.image || "profile image"} width={10} height={10} /> */}
        <img src={data?.user?.image || "user image"} alt="" />
      </div>
    </>
  )
}
