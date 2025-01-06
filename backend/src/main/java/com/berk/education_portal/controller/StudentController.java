package com.berk.education_portal.controller;

import com.berk.education_portal.dto.listing.StudentDTO;
import com.berk.education_portal.dto.request.StudentRequestDTO;
import com.berk.education_portal.dto.response.StudentDetailDTO;
import com.berk.education_portal.service.StudentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @GetMapping
    public Page<StudentDTO> getAllStudents(Pageable pageable) {
        return studentService.getAllStudents(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StudentDetailDTO> getStudentById(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(studentService.getStudentById(id));
    }

    @PostMapping
    public ResponseEntity<StudentDTO> createStudent(@RequestBody @Valid StudentRequestDTO studentRequestDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(studentService.createStudent(studentRequestDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) throws Exception {
        studentService.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }
}