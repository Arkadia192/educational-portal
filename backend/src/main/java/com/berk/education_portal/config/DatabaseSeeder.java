package com.berk.education_portal.config;

import com.berk.education_portal.entity.Department;
import com.berk.education_portal.entity.Employee;
import com.berk.education_portal.entity.Course;
import com.berk.education_portal.entity.Student;
import com.berk.education_portal.repository.CourseRepository;
import com.berk.education_portal.repository.DepartmentRepository;
import com.berk.education_portal.repository.EmployeeRepository;
import com.berk.education_portal.repository.StudentRepository;
import com.berk.education_portal.util.StudentStatus;
import com.berk.education_portal.util.EmployeeRole;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class DatabaseSeeder implements CommandLineRunner {

    private final DepartmentRepository departmentRepository;
    private final EmployeeRepository employeeRepository;
    private final CourseRepository courseRepository;
    private final StudentRepository studentRepository;
    private final Random random = new Random();

    @Override
    public void run(String... args) {
        seedDepartments();
        seedCourses();
        seedEmployees();
        seedStudents();
    }

    private void seedDepartments() {
        List<String> departmentNames = Arrays.asList(
                "IT", "HR", "Finance", "Marketing", "Operations",
                "Engineering", "Design", "Legal", "Customer Support", "Sales"
        );

        for (String name : departmentNames) {
            if (!departmentRepository.existsByName(name)) {
                Department department = new Department();
                department.setName(name);
                department.setDescription(name + " Department");
                departmentRepository.save(department);
            }
        }
    }

    private void seedCourses() {
        List<String> courseNames = Arrays.asList(
                "Mathematics", "Computer Science", "Business Management",
                "Data Science", "Economics", "Marketing Strategy",
                "Software Engineering", "Cybersecurity", "Physics", "Artificial Intelligence"
        );

        List<Department> allDepartments = departmentRepository.findAll();
        if (allDepartments.isEmpty()) return;

        for (String name : courseNames) {
            if (!courseRepository.existsByName(name)) {
                Course course = new Course();
                course.setName(name);
                course.setDescription("Description for " + name);
                course.setCreditHours(random.nextInt(4) + 2); // Random between 2 and 5
                courseRepository.save(course);
            }
        }
    }

    private void seedEmployees() {
        List<String[]> employees = Arrays.asList(
                new String[]{"John", "Doe", "john.doe@example.com"},
                new String[]{"Jane", "Smith", "jane.smith@example.com"},
                new String[]{"Alice", "Johnson", "alice.johnson@example.com"},
                new String[]{"Bob", "Williams", "bob.williams@example.com"},
                new String[]{"Charlie", "Brown", "charlie.brown@example.com"},
                new String[]{"David", "Miller", "david.miller@example.com"},
                new String[]{"Emma", "Davis", "emma.davis@example.com"},
                new String[]{"Frank", "Wilson", "frank.wilson@example.com"},
                new String[]{"Grace", "Moore", "grace.moore@example.com"},
                new String[]{"Henry", "Taylor", "henry.taylor@example.com"}
        );

        List<Department> allDepartments = departmentRepository.findAll();
        if (allDepartments.isEmpty()) return;

        EmployeeRole[] roles = EmployeeRole.values();

        for (String[] empData : employees) {
            if (!employeeRepository.existsByEmail(empData[2])) {
                Employee employee = new Employee();
                employee.setFirstName(empData[0]);
                employee.setLastName(empData[1]);
                employee.setEmail(empData[2]);
                employee.setPhoneNumber("+1" + (random.nextInt(900000000) + 100000000));
                employee.setRole(roles[random.nextInt(roles.length)]);
                employee.setDepartment(allDepartments.get(random.nextInt(allDepartments.size())));
                employeeRepository.save(employee);
            }
        }
    }

    private void seedStudents() {
        List<String[]> students = Arrays.asList(
                new String[]{"Alex", "Brown", "alex.brown@example.com"},
                new String[]{"Brian", "Smith", "brian.smith@example.com"},
                new String[]{"Catherine", "Wilson", "catherine.wilson@example.com"},
                new String[]{"Daniel", "Lee", "daniel.lee@example.com"},
                new String[]{"Emily", "Harris", "emily.harris@example.com"},
                new String[]{"Fred", "Clark", "fred.clark@example.com"},
                new String[]{"Georgia", "Lewis", "georgia.lewis@example.com"},
                new String[]{"Hannah", "Walker", "hannah.walker@example.com"},
                new String[]{"Isaac", "Young", "isaac.young@example.com"},
                new String[]{"Jack", "Allen", "jack.allen@example.com"}
        );

        List<Course> allCourses = courseRepository.findAll();
        if (allCourses.isEmpty()) return;

        StudentStatus[] statuses = StudentStatus.values();

        for (String[] stuData : students) {
            if (!studentRepository.existsByEmail(stuData[2])) {
                Student student = new Student();
                student.setFirstName(stuData[0]);
                student.setLastName(stuData[1]);
                student.setEmail(stuData[2]);
                student.setPhoneNumber("+1" + (random.nextInt(900000000) + 100000000));
                student.setStatus(statuses[random.nextInt(statuses.length)]);

                // Assign random courses (between 1 and 4)
                student.setCourses(
                        allCourses.stream()
                                .skip(random.nextInt(allCourses.size()))
                                .limit(random.nextInt(4) + 1)
                                .collect(Collectors.toList())
                );

                studentRepository.save(student);
            }
        }
    }
}
