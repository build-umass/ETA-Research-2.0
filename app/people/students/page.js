"use client"

import { Navbar } from "@components/Navbar"
import styles from "@styles/people.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from "react"
import Link from "next/link"
import Header from "@components/Header"
import getStudentData from "services/contentfulUtils.js"

// set up getStaticProps to load page with data from getStudentData
page.getInitialProps = async () => {
  const studentData = await getStudentData();
  return {
    props: {
      studentData
    }
  }
}

// use props from getStaticProps to render page
export default function page ({studentData}) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  
  return (
    <>
      <Header />
      <Navbar></Navbar>
      <nav className="pt-3 ps-2" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li className="breadcrumb-item"><Link href="/" className={styles.breadcrumbItem}>Home</Link></li>
                <li className="breadcrumb-item"><Link href="/people" className={styles.breadcrumbItem}>People</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Students</li>
            </ol>
      </nav>
      
      {studentData.map((student) => (
              <div key={student.fields.studentName} className="container p-5">
                  <div className="row">
                    <div className="col-sm-4">
                      <img src={student.fields.studentHeadshot.file.url} width="100%" height="100%"></img>
                    </div>
                    <div className="col-sm-8 ps-5">
                      <div className={`row ${styles.peopleTitle}`}>
                        {student.fields.studentName}
                      </div>
                      <div className="row pt-3">
                        {student.fields.studentBio}
                      </div>
                      <div className={`row pt-4 ${styles.email}`}>
                        Email: TEST(AT)TEST.COM
                      </div>
                    </div>
                  </div>
              </div>
          ))}

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