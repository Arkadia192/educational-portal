package com.berk.education_portal.dto.response;

import com.berk.education_portal.dto.listing.DepartmentDTO;
import com.berk.education_portal.util.EmployeeRole;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeDetailDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private EmployeeRole role;
    private DepartmentDTO department;
}
