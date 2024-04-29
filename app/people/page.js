import styles from "@styles/people.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import { getStudentData } from '@services/contentfulUtils';
import Link from "next/link"

// TODO
// Error handling
// Credentials in .env

const page = async () => {
  // Fetch student data
  const studentData = await getStudentData();
  return (
    <>

      <nav className="pt-3 ps-2" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/" className={styles.breadcrumbItem}>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">People</li>
        </ol>
      </nav>
      <div className={styles.teamImage}>
        <img src={"/BridgetteTeam.jpeg"} width="60%" alt="Team Photo" style={{ borderRadius: '5%' }}></img>
      </div>
      <div className="container p-5">
        <h1> People </h1>
        <Link href="/people/Bridgette-Davis">
          <div className="row">
            <div className="col-sm-2">
              <img src={"/BridgetteDavis.jpeg"} width="100%" height="100%" alt="Bridgette Davis"></img>
            </div>
            <div className="col-sm-2 ps-3">
              <div className={`row ${styles.peopleTitle}`}>
                Bridgette Davis
              </div>
              <div className={`row pt-4 ${styles.email}`}>
                Email: test@test.com
              </div>
            </div>
          </div>
        </Link>
        
        <div className="my-4"> {/* Add space here */}
          <h3> Students </h3>
        </div>
        {/* <div className="pt-4"><Link href="/people/students" className={styles.peopleList}>Students</Link></div> */}
        <div className="row">
          {studentData.map((student) => (
            <div key={student.sys.id} className="col-md-2 mb-4">
              <Link href={"people/students/"}>
                <img
                  src={student.fields.studentHeadshot.fields.file.url}
                  alt={student.fields.studentName}
                  style={{ width: '100px', height: '100px' }}
                />
                <div>{student.fields.studentName}</div>
              </Link>
              <div>Email: {student.fields.studentEmail}</div>
            </div>
          ))}
        </div>

        <div className="pt-4"><Link href="/people/alumni" className={styles.peopleList}>Alumni</Link></div>
      </div>
      <hr></hr>

    </>

  )
}

export default page

