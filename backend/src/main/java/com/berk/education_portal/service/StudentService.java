package com.berk.education_portal.service;

import com.berk.education_portal.dto.listing.StudentDTO;
import com.berk.education_portal.dto.request.StudentRequestDTO;
import com.berk.education_portal.dto.response.StudentDetailDTO;
import com.berk.education_portal.entity.Student;
import com.berk.education_portal.repository.StudentRepository;
import com.berk.education_portal.util.ObjectConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;

    public List<StudentDTO> getAllStudents() {
        return studentRepository.findAll()
                .stream()
                .map(ObjectConverter::convertStudentToListingDTO)
                .collect(Collectors.toList());
    }

    public StudentDetailDTO getStudentById(Long id) throws Exception {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new Exception("Student not found!"));
        return ObjectConverter.convertStudentToDetailDTO(student);
    }

    public StudentDTO createStudent(StudentRequestDTO studentRequestDTO) {
        Student student = ObjectConverter.convertStudentRequestToEntity(studentRequestDTO);
        Student savedStudent = studentRepository.save(student);
        return ObjectConverter.convertStudentToListingDTO(savedStudent);
    }

    public void deleteStudent(Long id) throws Exception {
        if (!studentRepository.existsById(id)) {
            throw new Exception("Student Not Found");
        }
        studentRepository.deleteById(id);
    }
}
