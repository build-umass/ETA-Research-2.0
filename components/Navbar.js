"use client"
import { useState } from "react"
import Link from "next/link"
import styles from "@styles/navbar.module.css"
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export const Navbar = () => {
  const [people, setPeople] = useState([
    { name: "Bridgette Davis", link: "/people/Bridgette-Davis" },
    { name: "Students", link: "/people/students" },
    { name: "Alumni", link: "/people/alumni" },
  ])
  const [ peopleDropdownActive, setPeopleDropdownActive ] = useState(false)

  return (
    <div className={styles.navbar}>
      <img src={"/umass-amherst-title.svg"} width="173" height="30" className={styles.title}></img>
      
      <div className={styles.links}>
        <Link href="/" className={styles.navbarLink}>Home</Link>
        <Link href="/research" className={styles.navbarLink}>Research</Link>
        <Link href="/people" className={styles.navbarLink}>People</Link>
        <Link href="/contactus" className={styles.navbarLink}>Contact Us</Link>
      </div>
    </div>
  )
}