package com.berk.education_portal.dto.listing;

import com.berk.education_portal.entity.Course;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CourseDTO {
    private Long id;
    private String name;
    private int creditHours;

    public CourseDTO(Course course) {
        id = course.getId();
        name = course.getName();
        creditHours = course.getCreditHours();
    }
}
