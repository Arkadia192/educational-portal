package com.berk.education_portal.dto.request;

import com.berk.education_portal.util.EmployeeRole;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeRequestDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private EmployeeRole role;
    private Long departmentId;
}