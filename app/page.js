import { Navbar } from "@components/Navbar"
import Image from "next/image"
import styles from "@styles/home.module.css"

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
