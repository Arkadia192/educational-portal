package com.berk.education_portal.dto.response;

import com.berk.education_portal.dto.listing.DepartmentDTO;
import com.berk.education_portal.dto.listing.StudentDTO;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class CourseDetailDTO {
    private Long id;
    private String name;
    private String description;
    private Integer creditHours;
    private DepartmentDTO department;
    private List<StudentDTO> students;
}
