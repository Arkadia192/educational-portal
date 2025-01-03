package com.berk.education_portal.dto.response;

import com.berk.education_portal.dto.listing.CourseDTO;
import com.berk.education_portal.dto.listing.EmployeeDTO;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class DepartmentDetailDTO {
    private Long id;
    private String name;
    private String description;
    private List<EmployeeDTO> employees;
    private List<CourseDTO> courses;
}
