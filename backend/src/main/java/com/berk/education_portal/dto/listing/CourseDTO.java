package com.berk.education_portal.dto.listing;

import com.berk.education_portal.entity.Course;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseDTO {
    private Long id;
    private String name;
    private Integer creditHours;
    private String description;

    public CourseDTO(Course course) {
        id = course.getId();
        name = course.getName();
        description = course.getDescription();
        creditHours = course.getCreditHours();
    }
}
