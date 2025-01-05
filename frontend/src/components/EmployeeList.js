import React from "react";

const EmployeeList = ({ employees, onSelect }) => {
  return (
    <div className="list-container">
      <h2>Employees</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id} onClick={() => onSelect(emp)}>
            {emp.firstName} {emp.lastName} - {emp.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
