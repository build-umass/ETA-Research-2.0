import { Navbar } from "@components/Navbar"
import Image from "next/image"
import styles from "@styles/home.module.css"
import Header from "@components/Header"

export default function Home() {
  return (
    <> 
      <Header />
      <Navbar />
    </>
  )
}

// export async function getData(){
//   const response = await client.getEntries({content_type: "researchItem"})
//   const data = response.json()
//   return data
// }
