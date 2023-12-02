"use client"
import { Navbar } from "@components/Navbar"
import styles from "@styles/research.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react"
import Link from "next/link"

const page = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  const arrayList = [1, 2, 3, 4];
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
                <li className="breadcrumb-item active" aria-current="page">Research</li>
            </ol>
        </nav>
      <div className="pt-3">
      {arrayList.map(() => (
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-8">
              <div className={`row ${styles.researchTitle}`}>
                Viverra tellus in hac habitasse
              </div>
              <div className="row pe-5 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean. Diam in arcu cursus euismod quis viverra nibh. Cras tincidunt lobortis feugiat vivamus at. Est ultricies integer quis auctor elit sed vulputate semper quis lectus nulla at.
              </div>
            </div>
            <div className="col-sm-4">
              <img src={"/temp1.jpg"} width="100%" height="100%"></img>
            </div>
          </div>
        </div>
      ))}
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