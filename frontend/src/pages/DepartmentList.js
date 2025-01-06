import React from "react";
import ListPage from "./ListPage";
import { addDepartment, fetchDepartmentById, fetchDepartments } from "../services/api";

const DepartmentList = () => {
    return (
        <ListPage
            title="Departments"
            apiFetchFunction={fetchDepartments}
            apiFetchDetailFunction={fetchDepartmentById}
            apiCreateFunction={addDepartment}
            expandDataKey="employees"
            expandItemKey="Employees"
        />
    );
};

export default DepartmentList;
