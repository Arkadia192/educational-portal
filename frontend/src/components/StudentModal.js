import React from "react";
import "./Modal.css"; // Optional styling

const StudentModal = ({ student, onClose }) => {
    if (!student) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Student Details</h3>
                <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Phone:</strong> {student.phoneNumber}</p>
                <p><strong>Status:</strong> {student.status}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default StudentModal;
