package com.berk.education_portal.dto.listing;

import com.berk.education_portal.entity.Employee;
import com.berk.education_portal.util.EmployeeRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class EmployeeDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private EmployeeRole role;

    public EmployeeDTO(Employee employee) {
        id = employee.getId();
        firstName = employee.getFirstName();
        lastName = employee.getLastName();
        email = employee.getEmail();
        phoneNumber = employee.getPhoneNumber();
        role = employee.getRole();
    }
}
