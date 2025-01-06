import React, { useState } from "react";
import { createStudent } from "../../services/api"; // Assuming you have an API call for creating students

const CreateStudentForm = ({ courseId, onClose }) => {
    const [studentData, setStudentData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        status: "ACTIVE", // Default status
        courseId,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createStudent(studentData)
            .then(() => {
                onClose(); // Close the modal on success
            })
            .catch((error) => console.error("Error creating student:", error));
    };

    return (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content shadow-lg border-0 rounded">
                    <div className="modal-header bg-primary text-white">
                        <h5 className="modal-title">Add New Student</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
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
                                    value={studentData.firstName}
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
                                    value={studentData.lastName}
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
                                    value={studentData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status" className="form-label">
                                    Status
                                </label>
                                <select
                                    id="status"
                                    name="status"
                                    className="form-control"
                                    value={studentData.status}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="ACTIVE">Active</option>
                                    <option value="GRADUATED">Graduated</option>
                                    <option value="DROPPED_OUT">Dropped Out</option>
                                    <option value="FROZEN">Frozen</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">
                                Add Student
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateStudentForm;
