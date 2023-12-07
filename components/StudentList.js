import { getStudentData } from '@services/contentfulUtils'
import Student from '@components/Student'

const StudentList = async () => {

  const studentData = await getStudentData()

  return (
    <>
      {studentData.map((student) => (
        <Student key={student.sys.id} student={student} />
      ))}
    </>
  )
}

export default StudentList