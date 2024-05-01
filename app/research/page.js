import styles from "@styles/research.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link"
import ResearchList from "@components/ResearchList"

const page = async () => {
  return (
    <>
      <nav className="pt-3 ps-2" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/" className={styles.breadcrumbItem}>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Research</li>
        </ol>
      </nav>
      <div className="pt-3">
        <ResearchList />
      </div>
      <hr></hr>
    </>
    
  )
}
export default page