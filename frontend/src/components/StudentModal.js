import React from "react";
import "./Modal.css"; // Optional styling

const StudentModal = ({ student, onClose }) => {
    if (!student) return null;

    return (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content shadow-lg border-0 rounded">
                    <div className="modal-header bg-primary text-white">
                        <h5 className="modal-title">Student Details</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body p-4">
                        <p><strong>Name:</strong> {student.firstName} {student.lastName}</p>
                        <p><strong>Email:</strong> {student.email}</p>
                        <p><strong>Phone:</strong> {student.phoneNumber}</p>
                        <p><strong>Status:</strong> {student.status}</p>
                    </div>
                    <div className="modal-footer border-0">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentModal;
