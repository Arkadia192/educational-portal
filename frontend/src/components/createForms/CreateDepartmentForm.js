import React, { useState } from "react";
import { addDepartment } from "../../services/api";

const CreateDepartmentForm = ({ onClose }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addDepartment({ name, description })
            .then((response) => {
                onClose(response.data); // Send new department back
            })
            .catch((error) => console.error("Error creating department:", error));
    };

    return (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create Department</h5>
                        <button type="button" className="btn-close" onClick={() => onClose(null)} aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="departmentName" className="form-label">Department Name</label>
                                <input
                                    type="text"
                                    id="departmentName"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input
                                    type="text"
                                    id="description"
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Create</button>
                            <button type="button" className="btn btn-secondary" onClick={() => onClose(null)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateDepartmentForm;
