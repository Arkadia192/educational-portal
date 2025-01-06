package com.berk.education_portal.dto.request;

import com.berk.education_portal.util.StudentStatus;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentRequestDTO {
    private String firstName;
    private String lastName;
    private String email;
    private StudentStatus status;
    private Long courseId;
}

