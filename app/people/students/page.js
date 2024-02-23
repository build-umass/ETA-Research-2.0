import styles from "@styles/people.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import StudentList from "@components/StudentList"
import Link from "next/link"


export default async function page() {
  return (
    <>
      <nav className="pt-3 ps-2" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/" className={styles.breadcrumbItem}>Home</Link></li>
          <li className="breadcrumb-item"><Link href="/people" className={styles.breadcrumbItem}>People</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Students</li>
        </ol>
      </nav>
      
      <StudentList />
      <hr></hr>
    </>

  )
}