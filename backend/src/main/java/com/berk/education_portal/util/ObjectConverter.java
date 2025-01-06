package com.berk.education_portal.util;

import com.berk.education_portal.dto.listing.CourseDTO;
import com.berk.education_portal.dto.listing.DepartmentDTO;
import com.berk.education_portal.dto.listing.EmployeeDTO;
import com.berk.education_portal.dto.listing.StudentDTO;
import com.berk.education_portal.dto.request.CourseRequestDTO;
import com.berk.education_portal.dto.request.DepartmentRequestDTO;
import com.berk.education_portal.dto.request.EmployeeRequestDTO;
import com.berk.education_portal.dto.request.StudentRequestDTO;
import com.berk.education_portal.dto.response.CourseDetailDTO;
import com.berk.education_portal.dto.response.DepartmentDetailDTO;
import com.berk.education_portal.dto.response.EmployeeDetailDTO;
import com.berk.education_portal.dto.response.StudentDetailDTO;
import com.berk.education_portal.entity.Course;
import com.berk.education_portal.entity.Department;
import com.berk.education_portal.entity.Employee;
import com.berk.education_portal.entity.Student;

import java.util.List;
import java.util.stream.Collectors;

public class ObjectConverter {

    // Department conversions:

    public static Department convertDepartmentRequestToEntity(DepartmentRequestDTO departmentRequestDTO) {
        Department department = new Department();
        department.setName(departmentRequestDTO.getName());
        department.setDescription(departmentRequestDTO.getDescription());
        return department;
    }

    public static DepartmentDTO convertDepartmentToListingDTO(Department department) {
        return new DepartmentDTO(department);
    }

    public static DepartmentDetailDTO convertDepartmentToDetailDTO(Department department) {
        DepartmentDetailDTO departmentDetailDTO = new DepartmentDetailDTO();
        departmentDetailDTO.setId(department.getId());
        departmentDetailDTO.setName(department.getName());
        departmentDetailDTO.setDescription(department.getDescription());

        departmentDetailDTO.setEmployees(
                department.getEmployees().stream()
                        .map(EmployeeDTO::new)
                        .collect(Collectors.toList()));

        return departmentDetailDTO;
    }

    // Employee conversions:

    public static Employee convertEmployeeRequestToEntity(EmployeeRequestDTO employeeRequestDTO, Department department) {
        Employee employee = new Employee();
        employee.setFirstName(employeeRequestDTO.getFirstName());
        employee.setLastName(employeeRequestDTO.getLastName());
        employee.setEmail(employeeRequestDTO.getEmail());
        employee.setPhoneNumber(employeeRequestDTO.getPhoneNumber());
        employee.setRole(employeeRequestDTO.getRole());
        employee.setDepartment(department);
        return employee;
    }

    public static EmployeeDTO convertEmployeeToListingDTO(Employee employee) {
        return new EmployeeDTO(employee);
    }

    public static EmployeeDetailDTO convertEmployeeToDetailDTO(Employee employee) {
        EmployeeDetailDTO employeeDetailDTO = new EmployeeDetailDTO();
        employeeDetailDTO.setId(employee.getId());
        employeeDetailDTO.setFirstName(employee.getFirstName());
        employeeDetailDTO.setLastName(employee.getLastName());
        employeeDetailDTO.setEmail(employeeDetailDTO.getEmail());
        employeeDetailDTO.setPhoneNumber(employee.getPhoneNumber());
        employeeDetailDTO.setRole(employee.getRole());
        employeeDetailDTO.setDepartment(convertDepartmentToListingDTO(employee.getDepartment()));
        return employeeDetailDTO;
    }

    // Course conversions:

    public static Course convertCourseRequestToEntity(CourseRequestDTO courseRequestDTO) {
        Course course = new Course();
        course.setName(courseRequestDTO.getName());
        course.setDescription(courseRequestDTO.getDescription());
        course.setCreditHours(courseRequestDTO.getCreditHours());
        return course;
    }

    public static CourseDTO convertCourseToListingDTO(Course course) {
        return new CourseDTO(course);
    }

    public static CourseDetailDTO convertCourseToDetailDTO(Course course) {
        CourseDetailDTO courseDetailDTO = new CourseDetailDTO();
        courseDetailDTO.setId(course.getId());
        courseDetailDTO.setName(course.getName());
        courseDetailDTO.setDescription(course.getDescription());
        courseDetailDTO.setCreditHours(course.getCreditHours());

        courseDetailDTO.setStudents(
                course.getStudents().stream()
                        .map(StudentDTO::new)
                        .collect(Collectors.toList())
        );

        return courseDetailDTO;
    }

    // Student conversions:

    public static Student convertStudentRequestToEntity(StudentRequestDTO studentRequestDTO, Course course) {
        Student student = new Student();
        student.setFirstName(studentRequestDTO.getFirstName());
        student.setLastName(studentRequestDTO.getLastName());
        student.setEmail(studentRequestDTO.getEmail());
        student.setStatus(studentRequestDTO.getStatus());
        student.setCourses(List.of(course));
        return student;
    }

    public static StudentDTO convertStudentToListingDTO(Student student) {
        return new StudentDTO(student);
    }

    public static StudentDetailDTO convertStudentToDetailDTO(Student student) {
        StudentDetailDTO studentDetailDTO = new StudentDetailDTO();
        studentDetailDTO.setId(student.getId());
        studentDetailDTO.setFirstName(student.getFirstName());
        studentDetailDTO.setLastName(student.getLastName());
        studentDetailDTO.setEmail(student.getEmail());
        studentDetailDTO.setStatus(student.getStatus());

        studentDetailDTO.setCourses(
                student.getCourses().stream()
                        .map(CourseDTO::new)
                        .collect(Collectors.toList())
        );
        return studentDetailDTO;
    }

}
