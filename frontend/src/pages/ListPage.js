import React, { useEffect, useState } from "react";
import EmployeeModal from "../components/EmployeeModal";
import StudentModal from "../components/StudentModal";
import CreateDepartmentForm from "../components/createForms/CreateDepartmentForm";
import UpdateDepartmentForm from "../components/updateForms/UpdateDepartmentForm";
import CreateCourseForm from "../components/createForms/CreateCourseForm";
import UpdateCourseForm from "../components/updateForms/UpdateCourseForm";
import CreateEmployeeForm from "../components/createForms/CreateEmployeeForm";
import UpdateEmployeeForm from "../components/updateForms/UpdateEmployeeForm";
import CreateStudentForm from "../components/createForms/CreateStudentForm";
import UpdateStudentForm from "../components/updateForms/UpdateStudentForm";
import {
  deleteDepartment,
  deleteCourse,
  deleteEmployee,
  deleteStudent,
} from "../services/api";
import "./style.css";

const ListPage = ({
  title,
  apiFetchFunction,
  apiFetchDetailFunction,
  expandDataKey,
  expandItemKey,
}) => {
  const [items, setItems] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [expandedData, setExpandedData] = useState({});
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [currentItemForUpdate, setCurrentItemForUpdate] = useState(null);
  const [showEmployeeModal, setShowEmployeeModal] = useState(false);
  const [currentDepartmentId, setCurrentDepartmentId] = useState(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [currentCourseId, setCurrentCourseId] = useState(null);
  const [employeeUpdate, setEmployeeUpdate] = useState(false);
  const [employeeData, setEmployeeData] = useState({});
  const [studentUpdate, setStudentUpdate] = useState(false);
  const [studentData, setStudentData] = useState({});

  useEffect(() => {
    apiFetchFunction(currentPage)
      .then((response) => {
        setItems(response.data.content);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => console.error("Error fetching items:", error));
  }, [currentPage, apiFetchFunction]);

  const toggleExpand = (itemId) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
      return;
    }

    apiFetchDetailFunction(itemId)
      .then((response) => {
        setExpandedData(response.data[expandDataKey]);
        setExpandedItem(itemId);
      })
      .catch((error) => console.error("Error fetching item details:", error));
  };

  const handleCreateClick = () => setShowCreateModal(true);

  const handleCreateClose = (newItem) => {
    if (newItem && newItem.id) {
      setItems((prevItems) => [...prevItems, newItem]);
    }
    setShowCreateModal(false);
  };

  const handleDeleteClick = (id) => {
    if (title === "Departments") {
      deleteDepartment(id)
        .then(() =>
          setItems((prevItems) => prevItems.filter((item) => item.id !== id))
        )
        .catch((error) => console.error("Error deleting department:", error));
    } else if (title === "Courses") {
      deleteCourse(id)
        .then(() =>
          setItems((prevItems) => prevItems.filter((item) => item.id !== id))
        )
        .catch((error) => console.error("Error deleting course:", error));
    }
  };

  const handleEmployeeDeleteClick = (id) => {
    deleteEmployee(id)
      .then(() => {
        setExpandedData((prevData) =>
          prevData.filter((data) => data.id !== id)
        );
      })
      .catch((error) => console.error("Error deleting employee:", error));
  };

  const handleStudentDeleteClick = (id) => {
    deleteStudent(id)
      .then(() => {
        setExpandedData((prevData) =>
          prevData.filter((data) => data.id !== id)
        );
      })
      .catch((error) => console.error("Error deleting student:", error));
  };

  const handleUpdateClick = (item) => {
    setCurrentItemForUpdate(item);
    setShowUpdateModal(true);
  };

  const handleEmployeeUpdateClick = (data) => {
    setEmployeeUpdate(true);
  };

  const handleStudentUpdateClick = (data) => {
    setStudentUpdate(true);
  };

  const handleUpdateClose = (updatedItem) => {
    if (updatedItem) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        )
      );

      setExpandedData((prevData) =>
        prevData.map((data) =>
          data.id === updatedItem.id ? updatedItem : data
        )
      );
    }
    setShowUpdateModal(false);
    setStudentUpdate(false);
    setEmployeeUpdate(false);
  };

  const handleAddEmployeeClick = (departmentId) => {
    setCurrentDepartmentId(departmentId); // Set the department ID
    setShowEmployeeModal(true); // Open employee creation modal
  };

  const handleEmployeeModalClose = () => {
    setShowEmployeeModal(false);
  };

  const handleAddStudentClick = (courseId) => {
    setCurrentCourseId(courseId); // Set the course ID
    setShowStudentModal(true); // Open student creation modal
  };

  const handleStudentModalClose = () => {
    setShowStudentModal(false);
  };

  return (
    <div className="container mt-4">
      <div className="col-12 col-md-10 mx-auto">
        <h2 className="mb-4 text-center">{title}</h2>

        <button
          onClick={handleCreateClick}
          className="create-button btn btn-success mb-3"
        >
          + Add {title}
        </button>

        {showCreateModal &&
          (title === "Departments" ? (
            <CreateDepartmentForm onClose={handleCreateClose} />
          ) : title === "Courses" ? (
            <CreateCourseForm onClose={handleCreateClose} />
          ) : title === "Employees" ? ( // Show modal for adding employee
            <CreateEmployeeForm onClose={handleCreateClose} />
          ) : null)}

        {showUpdateModal &&
          currentItemForUpdate &&
          (title === "Departments" ? (
            <UpdateDepartmentForm
              department={currentItemForUpdate}
              onClose={handleUpdateClose}
            />
          ) : title === "Courses" ? (
            <UpdateCourseForm
              course={currentItemForUpdate}
              onClose={handleUpdateClose}
            />
          ) : null)}

        {employeeUpdate && (
          <UpdateEmployeeForm
            employee={employeeData}
            onClose={handleUpdateClose}
          />
        )}

        {studentUpdate && (
          <UpdateStudentForm
            student={studentData}
            onClose={handleUpdateClose}
          />
        )}

        {showEmployeeModal && (
          <CreateEmployeeForm
            departmentId={currentDepartmentId}
            onClose={handleEmployeeModalClose}
          />
        )}

        {showStudentModal && (
          <CreateStudentForm
            courseId={currentCourseId}
            onClose={handleStudentModalClose}
          />
        )}

        <div className="table-responsive shadow-sm rounded">
          <table className="table table-hover table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <React.Fragment key={item.id}>
                  <tr
                    onClick={() => toggleExpand(item.id)}
                    className="clickable-row"
                  >
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td className="text-center">
                      <button
                        onClick={() => handleUpdateClick(item)}
                        className="btn btn-sm btn-outline-primary mx-1"
                      >
                        ✏ Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(item.id)}
                        className="delete-button btn btn-sm btn-outline-danger mx-1"
                      >
                        🗑 Delete
                      </button>
                      {title === "Departments" && (
                        <button
                          onClick={() => handleAddEmployeeClick(item.id)} // Add employee button
                          className="create-button btn btn-sm btn-outline-info mx-1"
                        >
                          ➕ Add Employee
                        </button>
                      )}
                      {title === "Courses" && (
                        <button
                          onClick={() => handleAddStudentClick(item.id)} // Add student button
                          className="create-button btn btn-sm btn-outline-info mx-1"
                        >
                          ➕ Add Student
                        </button>
                      )}
                    </td>
                  </tr>
                  {expandedItem === item.id && (
                    <tr className="bg-light">
                      <td colSpan="3">
                        <h5 className="mb-2">{expandItemKey}:</h5>
                        <ul className="list-group">
                          {expandedData && expandedData.length > 0 ? (
                            expandedData.map((data) => (
                              <li
                                key={data.id}
                                className="list-group-item list-group-item-action"
                                onClick={() => setSelectedItem(data)} // Open modal on click
                                style={{ cursor: "pointer" }} // Indicate it's clickable
                              >
                                {data.firstName ? data.firstName : data.name}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation(); // Prevent modal opening when clicking this button
                                    if (expandItemKey === "Students") {
                                      handleStudentUpdateClick(data);
                                      setStudentData(data);
                                      setStudentUpdate(true);
                                    } else {
                                      handleEmployeeUpdateClick(data);
                                      setEmployeeData(data);
                                      setEmployeeUpdate(true);
                                    }
                                  }}
                                  className="btn btn-sm btn-outline-primary mx-1 float-end"
                                >
                                  ✏ Edit
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation(); // Prevent modal opening when clicking this button
                                    if (expandItemKey === "Students") {
                                      handleStudentDeleteClick(data.id);
                                    } else {
                                      handleEmployeeDeleteClick(data.id);
                                    }
                                  }}
                                  className="delete-button btn btn-sm btn-outline-danger mx-1 float-end"
                                >
                                  🗑 Delete
                                </button>
                              </li>
                            ))
                          ) : (
                            <li className="list-group-item">
                              No {expandItemKey.toLowerCase()} available
                            </li>
                          )}
                        </ul>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {selectedItem &&
          (expandItemKey === "Employees" ? (
            <EmployeeModal
              employee={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          ) : (
            <StudentModal
              student={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          ))}

<div className="d-flex justify-content-center align-items-center mt-5">
  <button
    className="btn btn-pagination mx-2 d-flex align-items-center"
    disabled={currentPage === 0}
    onClick={() => setCurrentPage((prev) => prev - 1)}
  >
    <i className="bi bi-arrow-left-circle-fill me-2"></i> {/* Left Arrow Icon */}
    Previous
  </button>
  <span className="page-info mx-3">
    Page {currentPage + 1} of {totalPages}
  </span>
  <button
    className="btn btn-pagination mx-2 d-flex align-items-center"
    disabled={currentPage + 1 === totalPages}
    onClick={() => setCurrentPage((prev) => prev + 1)}
  >
    Next
    <i className="bi bi-arrow-right-circle-fill ms-2"></i> {/* Right Arrow Icon */}
  </button>
</div>


      </div>
    </div>
  );
};

export default ListPage;
