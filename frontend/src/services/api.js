import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const fetchDepartments = (page = 0, size = 5) => {
  return axios.get(`${API_URL}/departments?page=${page}&size=${size}`);
};

export const fetchDepartmentById = (departmentId) => {
  return axios.get(`${API_URL}/departments/${departmentId}`);
};

export const addDepartment = (body) => {
  return axios.post(`${API_URL}/departments`, body);
}

export const updateDepartment = (body) => {
  return axios.put(`${API_URL}/departments`, body);
}

export const deleteDepartment = (departmentId) => {
  return axios.delete(`${API_URL}/departments/${departmentId}`);
}

export const fetchCourses = (page = 0, size = 5) => {
  return axios.get(`${API_URL}/courses?page=${page}&size=${size}`);
};

export const fetchCourseById = (courseId) => {
  return axios.get(`${API_URL}/courses/${courseId}`);
};

export const addCourse = (body)  => {
  return axios.post(`${API_URL}/courses`, body);
}

export const updateCourse = (body) => {
  return axios.put(`${API_URL}/courses`, body);
}

export const deleteCourse = (courseId) => {
  return axios.delete(`${API_URL}/courses/${courseId}`);
}
