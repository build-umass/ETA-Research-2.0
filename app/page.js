import { Navbar } from "@components/Navbar"
import Image from "next/image"
import styles from "@styles/home.module.css"
import Header from "@components/Header"
import Footer from "@components/Footer"
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {

  return (
    <> 
      <Header />
      <Navbar />
      <div className={styles.spacingDiv} />
      <Footer />
    </>
  )
}
