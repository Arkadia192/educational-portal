package com.berk.education_portal.dto.listing;

import com.berk.education_portal.entity.Student;
import com.berk.education_portal.util.StudentStatus;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private StudentStatus status;

    public StudentDTO(Student student) {
        id = student.getId();
        firstName = student.getFirstName();
        lastName = student.getLastName();
        email = student.getEmail();
        status = student.getStatus();
    }
}
