import React, { useState } from "react";
import { updateDepartment } from "../../services/api";

const UpdateDepartmentForm = ({ department, onClose }) => {
    const [name, setName] = useState(department.name);
    const [description, setDescription] = useState(department.description);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedDepartment = {
            ...department,
            name,
            description,
        };

        updateDepartment(updatedDepartment)
            .then((response) => {
                onClose(response.data); // Close modal and send updated department
            })
            .catch((error) => console.error("Error updating department:", error));
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Update Department</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Department Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="modal-actions">
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => onClose(null)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateDepartmentForm;
