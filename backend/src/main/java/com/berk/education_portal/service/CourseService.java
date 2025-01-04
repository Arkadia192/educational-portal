package com.berk.education_portal.service;

import com.berk.education_portal.dto.listing.CourseDTO;
import com.berk.education_portal.dto.request.CourseRequestDTO;
import com.berk.education_portal.dto.response.CourseDetailDTO;
import com.berk.education_portal.entity.Course;
import com.berk.education_portal.entity.Department;
import com.berk.education_portal.repository.CourseRepository;
import com.berk.education_portal.repository.DepartmentRepository;
import com.berk.education_portal.util.ObjectConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;
    private final DepartmentRepository departmentRepository;

    public List<CourseDTO> getAllCourses() {
        return courseRepository.findAll()
                .stream()
                .map(ObjectConverter::convertCourseToListingDTO)
                .collect(Collectors.toList());
    }

    public CourseDetailDTO getCourseById(Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));
        return ObjectConverter.convertCourseToDetailDTO(course);
    }

    public CourseDTO createCourse(CourseRequestDTO courseRequestDTO) throws Exception {
        Department department = departmentRepository.findById(courseRequestDTO.getDepartmentId())
                .orElseThrow(() -> new Exception("Department not found"));

        Course course = ObjectConverter.convertCourseRequestToEntity(courseRequestDTO, department);
        Course savedCourse = courseRepository.save(course);
        return ObjectConverter.convertCourseToListingDTO(savedCourse);
    }

    public void deleteCourse(Long id) throws Exception {
        if (!courseRepository.existsById(id)) {
            throw new Exception("Department Not Found");
        }
        courseRepository.deleteById(id);
    }
}
