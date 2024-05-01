import styles from "@styles/people.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link"
import { getFacultyData, formatEmail} from "@services/contentfulUtils"
import { renderOptions } from "@services/contentfulUtils"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";





const page = async () => {

  const facultyData = await getFacultyData();
  // const richTextHtmlString = documentToHtmlString(facultyData[0].fields.facultyBio); // renders rich text (bold, italics, etc) in html


  const faculty = facultyData.map((faculty) => {
    return {
      name: faculty.fields.facultyName,
      email: faculty.fields.facultyEmail,
      image: faculty.fields.facultyHeadshot.fields.file.url,
      description: documentToReactComponents(facultyData[0].fields.facultyBio, renderOptions),       // rich text as react components
      isAlumni: faculty.fields.isAlumni       // possible idea if ever more than 1 faculty
    };
  })[0];
  
  return (
    <>
      <nav className="pt-3 ps-2" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/" className={styles.breadcrumbItem}>Home</Link></li>
          <li className="breadcrumb-item"><Link href="/people" className={styles.breadcrumbItem}>People</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Bridgette Davis</li>
        </ol>
      </nav>
      
      <div className="container p-5">
        <div className="row">
          <div className="col-sm-4">
            <img src={faculty.image} 
              className="img-fluid"
              style={{ width: '100%', height: 'auto' }}
              ></img>
          </div>
          <div className="col-sm-8 ps-5">
            <div className={`row ${styles.peopleTitle}`}>
              {faculty.name}
            </div>
            <div className="row pt-3">
              {faculty.description}
            </div>
            <div className={`row pt-4 ${styles.email}`}>
              { formatEmail(faculty.email) }
            </div>
          </div>
        </div>
      </div>

      <hr></hr>
    </>

  )
}

export default page