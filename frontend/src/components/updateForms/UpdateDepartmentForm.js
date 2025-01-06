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
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content shadow-lg border-0 rounded">
                    <div className="modal-header bg-primary text-white">
                        <h5 className="modal-title">Update Department</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => onClose(null)}
                            aria-label="Close"
                        ></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body p-4">
                            <div className="mb-3">
                                <label htmlFor="departmentName" className="form-label fw-bold">
                                    Department Name
                                </label>
                                <input
                                    type="text"
                                    id="departmentName"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter department name"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label fw-bold">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter description"
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer border-0 d-flex justify-content-between">
                            <button type="button" className="btn btn-light" onClick={() => onClose(null)}>
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateDepartmentForm;
