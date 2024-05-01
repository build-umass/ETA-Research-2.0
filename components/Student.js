"use client"
import { useEffect } from 'react'
import styles from "@styles/people.module.css"


function formatEmail(email) {
  
  if (email === null || email === undefined) {
    return null
  }
  // Email: TEST(AT)TEST.COM
  return "Email: " + email.toUpperCase().split('@').join('(AT)')
}

const Student = ({student}) => {

  useEffect(() => {
    import ("bootstrap/dist/js/bootstrap.bundle.js")
  })

  return (
    <div className="container p-5">
        <div className="row">
          <div className="col-sm-4">
            <img src={student.fields.studentHeadshot?.fields.file.url} width="100%" height="100%"></img>
          </div>
          <div className="col-sm-8 ps-5">
            <div className={`row ${styles.peopleTitle}`}>
              {student.fields.studentName}
            </div>
            <div className="row pt-3">
              {student.fields.studentBio}
            </div>
            <div className={`row pt-4 ${styles.email}`}>
              {formatEmail(student.fields?.studentEmail)}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Student