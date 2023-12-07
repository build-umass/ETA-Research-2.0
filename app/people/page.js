import { Navbar } from "@components/Navbar"
import styles from "@styles/people.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link"

// TODO
// Error handling
// Credentials in .env
import Header from "@components/Header"
import Footer from "@components/Footer"

const page = () => {

    return (
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
                <img src={"/BridgetteTeam.jpeg"} width="60%" alt="Team Photo" style={{borderRadius: '5%'}}></img>
            </div>
            <div className="container p-5">
                <h1> People </h1>
                <div className="pt-4"><Link href="/people/Bridgette-Davis" className={styles.peopleList}>Bridgette Davis</Link></div>
                <div className="pt-4"><Link href="/people/students" className={styles.peopleList}>Students</Link></div>
                <div className="pt-4"><Link href="/people/alumni" className={styles.peopleList}>Alumni</Link></div>
            </div>
            <hr></hr>
            <Footer />
        </>
        
    )
}

export default page

