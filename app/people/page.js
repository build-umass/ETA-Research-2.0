"use client"

import { Navbar } from "@components/Navbar"
import styles from "@styles/people.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react"
import Link from "next/link"

// TODO
// Error handling
// Credentials in .env
import Header from "@components/Header"

const page = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.js");
    }, []);

    return (
        // this page will contain links to external research 
        <>
            <Header />

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

