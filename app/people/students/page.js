import { Navbar } from "@components/Navbar"
import styles from "@styles/research.module.css"
const page = () => {
  return (
    // this page will contain all current students on the same page


    <>
      <Navbar></Navbar>
      <div className={styles.header}></div>


      <h1>Students (undergrad and grad)</h1>
    </>
    
  )
}
export default page