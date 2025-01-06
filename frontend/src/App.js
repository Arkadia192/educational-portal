import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DepartmentList from "./pages/DepartmentList";
import CourseList from "./pages/CourseList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DepartmentList />} />
          <Route path="/courses" element={<CourseList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
