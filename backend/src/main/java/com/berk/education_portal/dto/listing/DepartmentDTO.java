package com.berk.education_portal.dto.listing;

import com.berk.education_portal.entity.Department;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DepartmentDTO {
    private Long id;
    private String name;
    private String description;

    public DepartmentDTO(Department department) {
        id = department.getId();
        name = department.getName();
        description = department.getDescription();
    }
}
