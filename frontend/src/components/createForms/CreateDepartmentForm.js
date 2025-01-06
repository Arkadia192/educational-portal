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
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Create Department</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Department Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className="modal-actions">
                        <button type="submit" className="btn btn-primary">Create</button>
                        <button type="button" className="btn btn-secondary" onClick={() => onClose(null)}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateDepartmentForm;
