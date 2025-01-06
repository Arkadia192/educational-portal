import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DepartmentList from "./pages/DepartmentList";
import CourseList from "./pages/CourseList";
import WelcomePage from "./components/WelcomePage";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/departments" element={<DepartmentList />} />
          <Route path="/courses" element={<CourseList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
