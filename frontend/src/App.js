import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DepartmentsEmployees from "./pages/DepartmentsEmployees";
import CoursesStudents from "./pages/CoursesStudents";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/departments" element={<DepartmentsEmployees />} />
              <Route path="/courses" element={<CoursesStudents />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;