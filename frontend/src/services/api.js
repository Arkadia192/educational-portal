import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const getDepartments = async () => {
  return await axios.get(`${API_BASE_URL}/departments`);
};

export const getEmployeesByDepartment = async (departmentId) => {
  return await axios.get(`${API_BASE_URL}/departments/${departmentId}/employees`);
};

export const getCourses = async () => {
  return await axios.get(`${API_BASE_URL}/courses`);
};

export const getStudentsByCourse = async (courseId) => {
  return await axios.get(`${API_BASE_URL}/courses/${courseId}/students`);
};
