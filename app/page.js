import { Navbar } from "@components/Navbar"
import Image from "next/image"
import styles from "@styles/home.module.css"
// import {client} from "@/lib/contentful"

export default function Home() {
  return (
    <> 
      <div className={styles.tempHeaderImage}>
        <Image src={"/temporary-header.png"} width="1080" height="240"></Image>
      </div>
      <Navbar></Navbar>
    </>
  )
}

// export async function getData(){
//   const response = await client.getEntries({content_type: "researchItem"})
//   const data = response.json()
//   return data
// }
