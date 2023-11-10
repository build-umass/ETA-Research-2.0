import { Navbar } from "@components/Navbar"
import styles from "@styles/research.module.css"
const page = () => {
  // a page for a single person


  return (
    <>
      <Navbar></Navbar>
      <div className={styles.header}></div>
    </>
    
  )
}
export default page