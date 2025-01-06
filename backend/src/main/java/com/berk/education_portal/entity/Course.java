package com.berk.education_portal.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(length = 500)
    private String description;

    @Column(nullable = false)
    private Integer creditHours;

    @ManyToMany(mappedBy = "courses")
    private List<Student> students;

    @Column(updatable = false)
    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    // Functions:

    public Course(String name, String description, Integer creditHours) {
        this.name = name;
        this.description = description;
        this.creditHours = creditHours;
    }

    public void addStudent(Student student) {
        this.students.add(student);
    }
}
