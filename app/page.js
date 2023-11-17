import { Navbar } from "@components/Navbar"
import { createClient } from "contentful"
import Image from "next/image"
import styles from "@styles/home.module.css"


async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({ content_type: "researchItem" })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  console.log(res.json())
  return res.json()
}

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
