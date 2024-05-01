import styles from "@styles/people.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import Link from "next/link"
import { getFacultyData, formatEmail} from "@services/contentfulUtils"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser'



const facultyData = await getFacultyData();
console.log("facultyData", facultyData);
const richTextHtmlString = documentToHtmlString(facultyData[0].fields.facultyBio); // renders rich text (bold, italics, etc) in html
console.log("facultyData", facultyData);


const faculty = facultyData.map((faculty) => {
  return {
    name: faculty.fields.facultyName,
    email: faculty.fields.facultyEmail,
    image: faculty.fields.facultyHeadshot.fields.file.url,
    description: richTextHtmlString,        // rich text
    isAlumni: faculty.fields.isAlumni       // possible idea if ever more than 1 faculty
  };
})[0];






const page = () => {

  
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
            <img src={faculty.image} width="100%" height="100%"></img>
          </div>
          <div className="col-sm-8 ps-5">
            <div className={`row ${styles.peopleTitle}`}>
              {faculty.name}
            </div>
            <div className="row pt-3">
              {parse(faculty.description)}
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