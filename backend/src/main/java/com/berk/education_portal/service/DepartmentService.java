package com.berk.education_portal.service;

import com.berk.education_portal.dto.listing.DepartmentDTO;
import com.berk.education_portal.dto.request.DepartmentRequestDTO;
import com.berk.education_portal.dto.response.DepartmentDetailDTO;
import com.berk.education_portal.entity.Department;
import com.berk.education_portal.repository.DepartmentRepository;
import com.berk.education_portal.util.ObjectConverter;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DepartmentService {
    private final DepartmentRepository departmentRepository;

    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    public List<DepartmentDTO> getAllDepartments() {
        return departmentRepository.findAll()
                .stream()
                .map(ObjectConverter::convertDepartmentToListingDTO)
                .collect(Collectors.toList());
    }

    public DepartmentDetailDTO getDepartmentById(Long id) throws Exception {
        Department department = departmentRepository.findById(id)
                .orElseThrow(() -> new Exception("Department not found!"));
        return ObjectConverter.convertDepartmentToDetailDTO(department);
    }

    public DepartmentDTO createDepartment(DepartmentRequestDTO departmentRequestDTO) {
        Department department = new Department();
        department.setName(departmentRequestDTO.getName());
        department.setDescription(departmentRequestDTO.getDescription());

        Department savedDepartment = departmentRepository.save(department);
        return ObjectConverter.convertDepartmentToListingDTO(savedDepartment);
    }

    public void deleteDepartment(Long id) throws Exception {
        if (!departmentRepository.existsById(id)) {
            throw new Exception("Department Not Found");
        }
        departmentRepository.deleteById(id);
    }
}
