"use client"
import { Navbar } from "@components/Navbar"
import styles from "@styles/people.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react"
import Link from "next/link"

// TODO
// Error handling
// Credentials in .env

const contentful = require('contentful')

export const client = contentful.createClient({
    space: "72na10vz3n2a",
    accessToken: "dW-vL_XZ7d0NVV-1XZcwLf5srRlwxN8h71e5W24WLaE"
})

const page = () => {
    let data = {};
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
    try {
        data = getData().then(console.log).catch((err) => {
            console.log(err)
        })
    }
    catch(error) {
        console.log("Error fetching");
    }
  }, []);
  return (
    // this page will contain links to external research 
    <>
        <div className={styles.tempHeaderImage}>
            <img src={"/temporary-header.png"} width="65%" height="10%"></img>
        </div>
        <Navbar></Navbar>
        <nav className="pt-3 ps-2" aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/" className={styles.breadcrumbItem}>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">People</li>
            </ol>
        </nav>
        <div className={styles.teamImage}>
            <img src={"/IMG_8080.jpeg"} width="60%" alt="Team Photo" style={{borderRadius: '5%'}}></img>
        </div>
        <div className="container p-5">
            <h1> People </h1>
            <div className="pt-4"><Link href="/people/Bridgette-Davis" className={styles.peopleList}>Bridgette Davis</Link></div>
            <div className="pt-4"><Link href="/people/students" className={styles.peopleList}>Students</Link></div>
            <div className="pt-4"><Link href="/people/alumni" className={styles.peopleList}>Alumni</Link></div>
        </div>
        <hr></hr>
        <div className="container pb-4">
            <div className="row justify-content">
                <div className="col-sm-1">
                    <img src={"/image4.jpg"} width="100%" height="100%"></img>
                </div>
                <div className="col-sm-11 text-center pt-4">
                    Contact / social media / copyright
                </div>
            </div>
        </div>
    </>
    
  )
}
export default page

export async function getData(){
    const response = await client.getEntries({content_type: "researchItem"})
    const data = response.items
    return data
  }