import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const handleError = (error) => {
  if (error.response) {
    console.error("Response Error:", error.response.data);
    throw new Error(`Error: ${error.response.data.message || 'An error occurred on the server.'}`);
  } else if (error.request) {
    console.error("Request Error:", error.request);
    throw new Error("Error: No response from server. Please check your connection.");
  } else {
    console.error("General Error:", error.message);
    throw new Error(`Error: ${error.message || 'An error occurred.'}`);
  }
};

export const fetchDepartments = async (page = 0, size = 5) => {
  return await axios.get(`${API_URL}/departments?page=${page}&size=${size}`)
    .catch(handleError);
};

export const fetchDepartmentById = async (departmentId) => {
  return await axios.get(`${API_URL}/departments/${departmentId}`)
    .catch(handleError);
};

export const addDepartment = async (body) => {
  return await axios.post(`${API_URL}/departments`, body)
    .catch(handleError);
}

export const updateDepartment = async (department) => {
  return await axios.put(`${API_URL}/departments/${department.id}`, department)
    .catch(handleError);
}

export const deleteDepartment = async (departmentId) => {
  return await axios.delete(`${API_URL}/departments/${departmentId}`)
    .catch(handleError);
}

export const fetchCourses = async (page = 0, size = 5) => {
  return await axios.get(`${API_URL}/courses?page=${page}&size=${size}`)
    .catch(handleError);
};

export const fetchCourseById = async (courseId) => {
  return await axios.get(`${API_URL}/courses/${courseId}`)
    .catch(handleError);
};

export const addCourse = async (body) => {
  return await axios.post(`${API_URL}/courses`, body)
    .catch(handleError);
}

export const updateCourse = async (course) => {
  return await axios.put(`${API_URL}/courses/${course.id}`, course)
    .catch(handleError);
}

export const deleteCourse = async (courseId) => {
  return await axios.delete(`${API_URL}/courses/${courseId}`)
    .catch(handleError);
}

export const createEmployee = async (employeeData) => {
  try {
      const response = await axios.post(`${API_URL}/employees`, employeeData);
      return response.data;
  } catch (error) {
      handleError(error); // Calls the error handler for uniform error messaging
  }
};

export const updateEmployee = async (id, updatedData) => {
  try {
      const response = await axios.put(`${API_URL}/employees/${id}`, updatedData);
      return response.data;
  } catch (error) {
      throw new Error("Error updating employee");
  }
};

export const deleteEmployee = async (id) => {
  try {
      const response = await axios.delete(`${API_URL}/employees/${id}`);
      return response.data;
  } catch (error) {
      throw new Error("Error deleting employee");
  }
};

export const createStudent = async (studentData) => {
  try {
      const response = await axios.post(`${API_URL}/students`, studentData);
      return response.data;
  } catch (error) {
      throw new Error("Error creating student");
  }
};

export const updateStudent = async (id, updatedData) => {
  try {
      const response = await axios.put(`${API_URL}/students/${id}`, updatedData);
      return response.data;
  } catch (error) {
      throw new Error("Error updating student");
  }
};

export const deleteStudent = async (id) => {
  try {
      const response = await axios.delete(`${API_URL}/students/${id}`);
      return response.data;
  } catch (error) {
      throw new Error("Error deleting student");
  }
};