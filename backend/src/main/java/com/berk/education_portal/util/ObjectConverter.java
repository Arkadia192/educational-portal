package com.berk.education_portal.util;

import com.berk.education_portal.dto.response.DepartmentDTO;
import com.berk.education_portal.dto.response.EmployeeDTO;
import com.berk.education_portal.entity.Department;
import com.berk.education_portal.entity.Employee;

public class ObjectConverter {
    // make functions static

    public static DepartmentDTO toDepartmentDTO(Department department) {
        DepartmentDTO departmentDTO = new DepartmentDTO();
        departmentDTO.setId(department.getId());
        departmentDTO.setName(department.getName());

//        if (departmentDTO.getEmployees() != null) {
//
//        }
//        TODO: finish this.
        return departmentDTO;
    }

    public static EmployeeDTO toEmployeeDTO(Employee employee) {
        EmployeeDTO employeeDTO = new EmployeeDTO();
        employeeDTO.setId(employee.getId());
        employeeDTO.setName(employee.getName());
//        employeeDTO.setDepartment();
        return employeeDTO;
    }
}
