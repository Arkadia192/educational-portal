package com.berk.education_portal.dto.response;

import com.berk.education_portal.dto.listing.CourseDTO;
import com.berk.education_portal.util.StudentStatus;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class StudentDetailDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private StudentStatus status;
    private List<CourseDTO> courses;
}
