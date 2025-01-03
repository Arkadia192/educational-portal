package com.berk.education_portal.dto.request;

import jakarta.validation.constraints.NotBlank;

public class CreateDepartmentDTO {
    @NotBlank
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
