package com.berk.education_portal.util;

import com.berk.education_portal.dto.listing.CourseDTO;
import com.berk.education_portal.dto.listing.DepartmentDTO;
import com.berk.education_portal.dto.listing.EmployeeDTO;
import com.berk.education_portal.dto.response.DepartmentDetailDTO;
import com.berk.education_portal.entity.Department;

import java.util.stream.Collectors;

public class ObjectConverter {

    public static DepartmentDTO convertDepartmentToListingDTO(Department department) {
        DepartmentDTO departmentDTO = new DepartmentDTO();
        departmentDTO.setId(department.getId());
        departmentDTO.setName(department.getName());
        return departmentDTO;
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

        departmentDetailDTO.setCourses(
                department.getCourses().stream()
                        .map(CourseDTO::new)
                        .collect(Collectors.toList())
        );

        return departmentDetailDTO;
    }
}
