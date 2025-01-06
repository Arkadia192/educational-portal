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
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content shadow-lg border-0 rounded">
                    <div className="modal-header bg-primary text-white">
                        <h5 className="modal-title">Update Employee</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => onClose(null)}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="form-control"
                                    value={employeeData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="form-control"
                                    value={employeeData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={employeeData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    className="form-control"
                                    value={employeeData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="role" className="form-label">
                                    Role
                                </label>
                                <select
                                    id="role"
                                    name="role"
                                    className="form-control"
                                    value={employeeData.role}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="ADMIN">Admin</option>
                                    <option value="INSTRUCTOR">Instructor</option>
                                    <option value="STAFF">Staff</option>
                                    <option value="HR">HR</option>
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
