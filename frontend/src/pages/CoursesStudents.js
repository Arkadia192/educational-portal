import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseList from "../components/CourseList";
import StudentList from "../components/StudentList";
import DetailModal from "../components/DetailModal";

const CoursesStudents = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/courses")
      .then(response => setCourses(response.data))
      .catch(error => console.error("Error fetching courses:", error));
  }, []);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    axios.get(`http://localhost:8080/api/courses/${course.id}`)
      .then(response => setStudents(response.data.students || []))
      .catch(error => console.error("Error fetching students:", error));
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setModalOpen(true);
  };

  return (
    <div className="courses-students">
      <CourseList courses={courses} onSelect={handleCourseSelect} />
      {selectedCourse && <StudentList students={students} onSelect={handleStudentSelect} />}
      {modalOpen && <DetailModal data={selectedStudent} onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default CoursesStudents;
