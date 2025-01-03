package com.berk.education_portal.controller;

import com.berk.education_portal.repository.DepartmentRepository;
import com.berk.education_portal.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TestController {
    @Autowired
    private TestService testService;
    @Autowired
    private DepartmentRepository departmentRepository;

    @GetMapping("/test")
    public String getTestMessage() {
        return testService.getTestMessage();
    }

    @GetMapping("/test2")
    public String aaaaa() {
        departmentRepository.findAll();
        return testService.getTestMessage();
    }
}
