import React from "react";

const DepartmentList = ({ departments, onSelect }) => {
  return (
    <div className="list-container">
      <h2>Departments</h2>
      <ul>
        {departments.map((dept) => (
          <li key={dept.id} onClick={() => onSelect(dept)}>
            {dept.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentList;
