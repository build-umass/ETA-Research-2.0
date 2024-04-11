import styles from "@styles/people.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import StudentList from "@components/StudentList"
import Link from "next/link"

// TODO
// Error handling
// Credentials in .env

const page = () => {

  return (
    <>

<nav className="pt-3 ps-2" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/" className={styles.breadcrumbItem}>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">People</li>
        </ol>
      </nav>
      <div className={styles.teamImage}>
        <img src={"/BridgetteTeam.jpeg"} width="60%" alt="Team Photo" style={{ borderRadius: '5%' }} />
      </div>
      <div className="container p-5">
        <h1>People</h1>
        <h3>Faculty</h3>
        <div className="container p-5">
          <div className="row">
            <div className="col-sm-4">
              <img src={"/BridgetteDavis.jpeg"} width="100%" height="100%" alt="Faculty Image" />
            </div>
            <div className="col-sm-8 ps-5">
              <div className={`row ${styles.peopleTitle}`}>
                Bridgette Davis
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

        <h3>Students</h3>
        <StudentList />
        
        {/* <div className="pt-4"><Link href="/people/students" className={styles.peopleList}>Students</Link></div> */}
        <div className="pt-4"><Link href="/people/alumni" className={styles.peopleList}>Alumni</Link></div>
      </div>
      <hr></hr>

    </>

  )
}

export default page

