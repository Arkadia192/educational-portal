import React, { useState, useEffect } from "react";
import { updateStudent } from "../../services/api"; // Assuming API service for updating students

const UpdateStudentForm = ({ student, onClose }) => {
    const [studentData, setStudentData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        status: "",
    });

    useEffect(() => {
        if (student) {
            setStudentData({
                firstName: student.firstName,
                lastName: student.lastName,
                email: student.email,
                status: student.status,
            });
        }
    }, [student]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(student.id, studentData)
            .then((updatedStudent) => {
                onClose(updatedStudent);
            })
            .catch((error) => console.error("Error updating student:", error));
    };

    return (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content shadow-lg border-0 rounded">
                    <div className="modal-header bg-primary text-white">
                        <h5 className="modal-title">Update Student</h5>
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
                                    <option value="INACTIVE">Inactive</option>
                                    <option value="GRADUATED">Graduated</option>
                                    <option value="DROPPED_OUT">Dropped Out</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">
                                Update Student
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateStudentForm;
