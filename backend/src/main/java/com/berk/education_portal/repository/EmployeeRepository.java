package com.berk.education_portal.repository;

import com.berk.education_portal.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    boolean existsByEmail(String email);
}
