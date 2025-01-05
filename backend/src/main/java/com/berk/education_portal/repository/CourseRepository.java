package com.berk.education_portal.repository;

import com.berk.education_portal.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CourseRepository extends JpaRepository<Course, Long> {
    boolean existsByName(String name);
    Optional<Course> findByName(String name);
}
