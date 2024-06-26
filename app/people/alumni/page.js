"use client"
import { Navbar } from "@components/Navbar"
import styles from "@styles/people.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react"
import Link from "next/link"

const page = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);
  const arrayList = [1, 2, 3, 4];
  return (
    <>
    
      <nav className="pt-3 ps-2" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/" className={styles.breadcrumbItem}>Home</Link></li>
          <li className="breadcrumb-item"><Link href="/people" className={styles.breadcrumbItem}>People</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Alumni</li>
        </ol>
      </nav>

      {arrayList.map((alumni) => (
        <div key={alumni} className="container p-5">
          <div className="row">
            <div className="col-sm-4">
              <img src={"/Students.jpeg"} width="100%" height="100%"></img>
            </div>
            <div className="col-sm-8 ps-5">
              <div className={`row ${styles.peopleTitle}`}>
                Alumni {alumni}
              </div>
              <div className="row pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pharetra et ultrices neque ornare aenean. Diam in arcu cursus euismod quis viverra nibh. Cras tincidunt lobortis feugiat vivamus at. Est ultricies integer quis auctor elit sed vulputate semper quis lectus nulla at.
              </div>
              <div className={`row pt-4 ${styles.email}`}>
                Email: TEST(AT)TEST.COM
              </div>
            </div>
          </div>
        </div>
      ))}
      <hr></hr>
    </>

  )
}
export default page