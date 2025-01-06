package com.berk.education_portal.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseRequestDTO {
    private String name;
    private String description;
    private Integer creditHours;
}
