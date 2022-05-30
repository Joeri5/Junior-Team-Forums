import Header from "./header"
import Footer from "./footer"
import Navbar from './Navbar'
import type { ReactChildren } from "react"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
