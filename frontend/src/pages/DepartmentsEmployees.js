import React, { useState, useEffect } from "react";
import axios from "axios";
import DepartmentList from "../components/DepartmentList";
import EmployeeList from "../components/EmployeeList";
import DetailModal from "../components/DetailModal";

const DepartmentsEmployees = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/departments")
      .then(response => setDepartments(response.data))
      .catch(error => console.error("Error fetching departments:", error));
  }, []);

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    axios.get(`http://localhost:8080/api/departments/${department.id}`)
      .then(response => setEmployees(response.data.employees || []))
      .catch(error => console.error("Error fetching employees:", error));
  };

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
    setModalOpen(true);
  };

  return (
    <div className="departments-employees">
      <DepartmentList departments={departments} onSelect={handleDepartmentSelect} />
      {selectedDepartment && <EmployeeList employees={employees} onSelect={handleEmployeeSelect} />}
      {modalOpen && <DetailModal data={selectedEmployee} onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default DepartmentsEmployees;
