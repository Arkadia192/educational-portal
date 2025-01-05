package com.berk.education_portal.repository;

import com.berk.education_portal.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
    boolean existsByName(String name);
    Optional<Department> findByName(String name);
}
