package com.berk.education_portal.controller;

import com.berk.education_portal.dto.listing.EmployeeDTO;
import com.berk.education_portal.dto.request.EmployeeRequestDTO;
import com.berk.education_portal.dto.response.EmployeeDetailDTO;
import com.berk.education_portal.service.EmployeeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;

    @GetMapping
    public Page<EmployeeDTO> getAllEmployees(Pageable pageable) {
        return employeeService.getAllEmployees(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDetailDTO> getEmployeeById(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(employeeService.getEmployeeById(id));
    }

    @PostMapping
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody @Valid EmployeeRequestDTO requestDTO) throws Exception {
        return ResponseEntity.status(HttpStatus.CREATED).body(employeeService.createEmployee(requestDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDepartment(@PathVariable Long id) throws Exception {
        employeeService.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }
}
