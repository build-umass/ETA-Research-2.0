"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "@styles/navbar.module.css"
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export const Navbar = () => {
  const [people, setPeople] = useState([
    { name: "Person 1", link: "/person1" },
    { name: "Person 2", link: "/person2" },
  ])

  const [papers, setPapers] = useState([
    { name: "Paper 1", link: "/paper1" },
    { name: "Paper 2", link: "/paper2" },
  ])
  
  const [ researchDropdownActive, setResearchDropdownActive ] = useState(false)
  const [ peopleDropdownActive, setPeopleDropdownActive ] = useState(false)

  const contentfulSpaceId = ""
  const contentfulApiKey = ""
  const contentfulApiUrl = `https://cdn.contentful.com/spaces/${contentfulSpaceId}/entries?access_token=${contentfulApiKey}`

  // useEffect(() => {
  //     // this effect runs on page load and will update the nav bar with the proper pages
  //     const fetchData = async () => {

  //         await fetch(contentfulApiUrl, {
  //             method: "GET",
  //             headers: {
  //                 "Authorization": `Bearer ${contentfulApiKey}`,
  //                 "Content-Type": "application/json"
  //             }
  //         })
  //         .then(response => response.json())
  //         .then(data => {
  //             setFaculty(data.faculty) // without knowing how contentful manages data, this will have to be updated properly
  //             setResearch(data.research)
  //         })
  //     }

  //     fetchData().catch(console.error)

  // }, [])

  return (
    <div className={styles.navbar + " " + inter.className}>
      <div className={styles.navSection}>
        <Link href="/" className={styles.navButton}>Home</Link>
      </div>

      <div 
        className={styles.navSection}
        onMouseEnter={() => setResearchDropdownActive(true)} 
        onMouseLeave={() => setResearchDropdownActive(false)}
      >
        <div className={styles.dropdownContainer}>
          <div className={styles.navButton}>Research</div>

          <div className={styles.dropdownButtonsContainer}>
            {researchDropdownActive && 
              papers.map((paper) => {
                return(<Link className={styles.dropdownItem} href={paper.link}>{paper.name}</Link>)
            })}
          </div>
        </div>
      </div>

      <div 
        className={styles.navSection}
        onMouseEnter={() => setPeopleDropdownActive(true)} 
        onMouseLeave={() => setPeopleDropdownActive(false)}
      >
        <div className={styles.dropdownContainer}>
          <div className={styles.navButton}>People</div>

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