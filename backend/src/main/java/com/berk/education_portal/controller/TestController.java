package com.berk.education_portal.controller;

import com.berk.education_portal.service.TestService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    private final TestService testService;

    public TestController(TestService testService) {
        this.testService = testService;
    }

    @GetMapping("/test")
    public String getTestMessage() {
        return testService.getTestMessage();
    }
}
