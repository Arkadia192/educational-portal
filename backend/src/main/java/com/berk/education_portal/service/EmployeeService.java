package com.berk.education_portal.service;

import com.berk.education_portal.dto.listing.EmployeeDTO;
import com.berk.education_portal.dto.request.EmployeeRequestDTO;
import com.berk.education_portal.dto.response.EmployeeDetailDTO;
import com.berk.education_portal.entity.Department;
import com.berk.education_portal.entity.Employee;
import com.berk.education_portal.repository.DepartmentRepository;
import com.berk.education_portal.repository.EmployeeRepository;
import com.berk.education_portal.util.ObjectConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;

    public Page<EmployeeDTO> getAllEmployees(Pageable pageable) {
        return employeeRepository.findAll(pageable)
                .map(ObjectConverter::convertEmployeeToListingDTO);
    }

    public EmployeeDetailDTO getEmployeeById(Long id) throws Exception {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new Exception("Employee not found"));
        return ObjectConverter.convertEmployeeToDetailDTO(employee);
    }

    public EmployeeDTO createEmployee(EmployeeRequestDTO employeeRequestDTO) throws Exception {
        Department department = departmentRepository.findById(employeeRequestDTO.getDepartmentId())
                .orElseThrow(() -> new Exception("Department not found"));

        Employee employee = ObjectConverter.convertEmployeeRequestToEntity(employeeRequestDTO, department);
        Employee savedEmployee = employeeRepository.save(employee);
        return ObjectConverter.convertEmployeeToListingDTO(savedEmployee);
    }

    public void deleteEmployee(Long id) throws Exception {
        if (!employeeRepository.existsById(id)) {
            throw new Exception("Department Not Found");
        }
        employeeRepository.deleteById(id);
    }
}

