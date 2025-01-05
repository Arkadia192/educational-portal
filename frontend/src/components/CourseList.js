import React from "react";

const CourseList = ({ courses, onSelect }) => {
  return (
    <div className="list-container">
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} onClick={() => onSelect(course)}>
            {course.name} - {course.code}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
