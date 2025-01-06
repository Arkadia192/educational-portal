package com.berk.education_portal.controller;

import com.berk.education_portal.dto.listing.CourseDTO;
import com.berk.education_portal.dto.request.CourseRequestDTO;
import com.berk.education_portal.dto.response.CourseDetailDTO;
import com.berk.education_portal.service.CourseService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @GetMapping
    public Page<CourseDTO> getAllCourses(Pageable pageable) {
        return courseService.getAllCourses(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseDetailDTO> getCourseById(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(courseService.getCourseById(id));
    }

    @PostMapping
    public ResponseEntity<CourseDTO> createCourse(@RequestBody @Valid CourseRequestDTO courseRequestDTO) throws Exception {
        return ResponseEntity.status(HttpStatus.CREATED).body(courseService.createCourse(courseRequestDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseDTO> updateCourse(@PathVariable Long id, @RequestBody CourseRequestDTO courseRequestDTO) throws Exception {
        CourseDTO updatedCourse = courseService.updateCourse(id, courseRequestDTO);
        return ResponseEntity.status(HttpStatus.OK).body(updatedCourse);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) throws Exception {
        courseService.deleteCourse(id);
        return ResponseEntity.noContent().build();
    }
}
