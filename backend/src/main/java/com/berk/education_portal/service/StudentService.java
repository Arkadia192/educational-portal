package com.berk.education_portal.service;

import com.berk.education_portal.dto.listing.StudentDTO;
import com.berk.education_portal.dto.request.StudentRequestDTO;
import com.berk.education_portal.dto.response.StudentDetailDTO;
import com.berk.education_portal.entity.Course;
import com.berk.education_portal.entity.Student;
import com.berk.education_portal.repository.CourseRepository;
import com.berk.education_portal.repository.StudentRepository;
import com.berk.education_portal.util.ObjectConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;
    private final CourseRepository courseRepository;

    public Page<StudentDTO> getAllStudents(Pageable pageable) {
        return studentRepository.findAll(pageable)
                .map(ObjectConverter::convertStudentToListingDTO);
    }

    public StudentDetailDTO getStudentById(Long id) throws Exception {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new Exception("Student not found!"));
        return ObjectConverter.convertStudentToDetailDTO(student);
    }

    public StudentDTO createStudent(StudentRequestDTO studentRequestDTO) throws Exception {
        Course course = courseRepository.findById(studentRequestDTO.getCourseId())
                .orElseThrow(() -> new Exception("Course not found"));
        Student student = ObjectConverter.convertStudentRequestToEntity(studentRequestDTO, course);
        Student savedStudent = studentRepository.save(student);
        return ObjectConverter.convertStudentToListingDTO(savedStudent);
    }

    public StudentDTO updateStudent(Long id, StudentRequestDTO studentRequestDTO) throws Exception {
        Student student = studentRepository.findById(id).orElseThrow(() -> new Exception("Student not found"));

        if (studentRequestDTO.getFirstName() != null) {
            student.setFirstName(studentRequestDTO.getFirstName());
        }
        if (studentRequestDTO.getLastName() != null) {
            student.setLastName(studentRequestDTO.getLastName());
        }
        if (studentRequestDTO.getEmail() != null) {
            student.setEmail(studentRequestDTO.getEmail());
        }
        if (studentRequestDTO.getStatus() != null) {
            student.setStatus(studentRequestDTO.getStatus());
        }

        Student savedStudent = studentRepository.save(student);
        return new StudentDTO(savedStudent);
    }


    public void deleteStudent(Long id) throws Exception {
        if (!studentRepository.existsById(id)) {
            throw new Exception("Student Not Found");
        }
        studentRepository.deleteById(id);
    }
}
