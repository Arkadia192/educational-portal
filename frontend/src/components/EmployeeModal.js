import React from "react";
import "./Modal.css"; // Optional styling

const EmployeeModal = ({ employee, onClose }) => {
    if (!employee) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Employee Details</h3>
                <p><strong>Name:</strong> {employee.firstName} {employee.lastName}</p>
                <p><strong>Email:</strong> {employee.email}</p>
                <p><strong>Phone:</strong> {employee.phoneNumber}</p>
                <p><strong>Role:</strong> {employee.role}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default EmployeeModal;
