"use client"
import { useState, useEffect } from "react"
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
  
  const [ researchDropdownActive, setResearchDropdownActive ] = useState(false)
  const [ peopleDropdownActive, setPeopleDropdownActive ] = useState(false)

  return (
    <div className={styles.navbar + " " + inter.className}>
      <div className={styles.navSection}>
        <Link href="/" className={styles.navButton}>Home</Link>
      </div>

      <div className={styles.navSection}>
          <Link href="/research" className={styles.navButton}>Research</Link>
      </div>

      <div 
        className={styles.navSection}
        onMouseEnter={() => setPeopleDropdownActive(true)} 
        onMouseLeave={() => setPeopleDropdownActive(false)}
      >
        <div className={styles.dropdownContainer}>
            <Link href="/people" className={styles.navButton}>People</Link>

          <div className={styles.dropdownButtonsContainer}>
            {peopleDropdownActive && 
              people.map((person) => {
                return(<Link className={styles.dropdownItem} href={person.link}>{person.name}</Link>)
            })}
          </div>
        </div>
      </div>

      <div className={styles.navSection}>
        <Link href="/more" className={styles.navButton}>More</Link>
      </div>

    </div>
  )
}