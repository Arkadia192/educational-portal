import React, { useState, useEffect } from "react";
import { updateEmployee } from "../../services/api"; // Assuming API service for updating employee

const UpdateEmployeeForm = ({ employee, onClose }) => {
    const [employeeData, setEmployeeData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        role: "",
    });

    useEffect(() => {
        if (employee) {
            setEmployeeData({
                firstName: employee.firstName,
                lastName: employee.lastName,
                email: employee.email,
                phoneNumber: employee.phoneNumber,
                role: employee.role,
            });
        }
    }, [employee]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(employee.id, employeeData)
            .then((updatedEmployee) => {
                onClose(updatedEmployee);
            })
            .catch((error) => console.error("Error updating employee:", error));
    };

    return (
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Update Employee</h5>
                        <button type="button" className="close" onClick={() => onClose(null)}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="form-control"
                                    value={employeeData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    value={employeeData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={employeeData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    className="form-control"
                                    value={employeeData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                            <label>Role</label>
                                <select
                                    name="role"
                                    className="form-control"
                                    value={employeeData.role}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="ADMIN">Admin</option>
                                    <option value="INSTRUCTOR">Instructor</option>
                                    <option value="STAFF">Staff</option>
                                    <option value="HR">Hr</option>
                                    <option value="MANAGER">Manager</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">
                                Update Employee
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateEmployeeForm;
