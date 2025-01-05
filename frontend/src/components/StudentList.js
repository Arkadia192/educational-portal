import React from "react";

const StudentList = ({ students, onSelect }) => {
  return (
    <div className="list-container">
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id} onClick={() => onSelect(student)}>
            {student.firstName} {student.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
