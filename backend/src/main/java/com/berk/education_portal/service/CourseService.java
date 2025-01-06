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
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;
    private final DepartmentRepository departmentRepository;

    public Page<CourseDTO> getAllCourses(Pageable pageable) {
        return courseRepository.findAll(pageable)
                .map(ObjectConverter::convertCourseToListingDTO);
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

    public CourseDTO updateCourse(Long id, CourseRequestDTO courseRequestDTO) throws Exception {
        Course course = courseRepository.findById(id).orElseThrow(() -> new Exception("Course not found"));

        if (courseRequestDTO.getName() != null) {
            course.setName(courseRequestDTO.getName());
        }
        if (courseRequestDTO.getDescription() != null) {
            course.setDescription(courseRequestDTO.getDescription());
        }
        if (courseRequestDTO.getCreditHours() != null) {
            course.setCreditHours(courseRequestDTO.getCreditHours());
        }
        if (courseRequestDTO.getDepartmentId() != null) {
            if (departmentRepository.existsById(courseRequestDTO.getDepartmentId())) {
                course.setDepartment(departmentRepository.getById(courseRequestDTO.getDepartmentId()));
            }
        }

        Course savedCourse = courseRepository.save(course);
        return new CourseDTO(savedCourse);
    }

    public void deleteCourse(Long id) throws Exception {
        if (!courseRepository.existsById(id)) {
            throw new Exception("Department Not Found");
        }
        courseRepository.deleteById(id);
    }
}
