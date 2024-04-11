import React from 'react';
import { getStudentData } from '@services/contentfulUtils';
import Student from '@components/Student';

const StudentList = async () => {
  const studentData = await getStudentData();

  return (
    <div className="container"> {/* Enclose in a container for proper grid alignment */}
      <div className="row"> {/* Create a row for grid layout */}
        {studentData.map((student) => (
          <div className="col-md-6 col-lg-4" key={student.sys.id}> {/* Use columns for side-by-side display */}
            <Student student={student} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;