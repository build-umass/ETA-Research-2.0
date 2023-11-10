import { Navbar } from "@components/Navbar"
import styles from "@styles/research.module.css"
const page = () => {
  return (
    // this page will contain past alumni who worked at the ETA research lab 
    // this will follow the same structure as the students page


    <>
      <Navbar></Navbar>
      <div className={styles.header}></div>


      <h1>Alumni</h1>
    </>
    
  )
}
export default page