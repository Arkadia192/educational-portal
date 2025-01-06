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
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add New Student</h5>
                        <button type="button" className="close" onClick={onClose}>
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
                                    value={studentData.firstName}
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
                                    value={studentData.lastName}
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
                                    value={studentData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <select
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
