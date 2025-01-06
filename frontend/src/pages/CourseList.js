import React from "react";
import ListPage from "./ListPage";
import { addCourse, fetchCourseById, fetchCourses } from "../services/api";

const CourseList = () => {
    return (
        <ListPage
            title="Courses"
            apiFetchFunction={fetchCourses}
            apiFetchDetailFunction={fetchCourseById}
            apiCreateFunction={addCourse}
            expandDataKey="students"
            expandItemKey="Students"
        />
    );
};

export default CourseList;
