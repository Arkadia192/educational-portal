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
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Update Student</h5>
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
