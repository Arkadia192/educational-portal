package com.berk.education_portal.controller;

import com.berk.education_portal.dto.listing.DepartmentDTO;
import com.berk.education_portal.dto.request.DepartmentRequestDTO;
import com.berk.education_portal.dto.response.DepartmentDetailDTO;
import com.berk.education_portal.service.DepartmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/departments")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class DepartmentController {

    private final DepartmentService departmentService;

    @GetMapping
    public Page<DepartmentDTO> getAllDepartments(Pageable pageable) {
        return departmentService.getAllDepartments(pageable); // ✅ Return paginated response
    }

    // TODO: Handle exception more elegantly
    @GetMapping("/{id}")
    public ResponseEntity<DepartmentDetailDTO> getDepartmentById(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(departmentService.getDepartmentById(id));
    }

    @PostMapping
    public ResponseEntity<DepartmentDTO> createDepartment(@RequestBody @Valid DepartmentRequestDTO departmentRequestDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(departmentService.createDepartment(departmentRequestDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DepartmentDTO> updateDepartment(@PathVariable Long id, @RequestBody DepartmentRequestDTO departmentRequestDTO) throws Exception {
        DepartmentDTO updatedDepartment = departmentService.updateDepartment(id, departmentRequestDTO);
        return ResponseEntity.status(HttpStatus.OK).body(updatedDepartment);
    }

    // TODO: Handle exception more elegantly
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDepartment(@PathVariable Long id) throws Exception {
        departmentService.deleteDepartment(id);
        return ResponseEntity.noContent().build();
    }
}
