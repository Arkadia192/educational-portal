import React, { useState } from "react";
import { addCourse } from "../../services/api";

const CreateCourseForm = ({ onClose }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [creditHours, setCreditHours] = useState(1); // Ensure it's always a valid number

    const handleSubmit = (e) => {
        e.preventDefault();

        const courseData = {
            name,
            description,
            creditHours: parseInt(creditHours, 10) || 1, // Ensure it's a number
        };

        addCourse(courseData)
            .then((response) => {
                onClose(response.data); // Send new course back
            })
            .catch((error) => console.error("Error creating course:", error));
    };

    return (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content shadow-lg border-0 rounded">
                    <div className="modal-header bg-primary text-white">
                        <h5 className="modal-title">Create Course</h5>
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
                                <label htmlFor="courseName" className="form-label fw-bold">
                                    Course Name
                                </label>
                                <input
                                    type="text"
                                    id="courseName"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter course name"
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
                            <div className="mb-3">
                                <label htmlFor="creditHours" className="form-label fw-bold">
                                    Credit Hours
                                </label>
                                <input
                                    type="number"
                                    id="creditHours"
                                    className="form-control"
                                    value={creditHours}
                                    onChange={(e) => setCreditHours(e.target.value)}
                                    placeholder="Enter credit hours"
                                    required
                                    min="1"
                                />
                            </div>
                        </div>
                        <div className="modal-footer border-0 d-flex justify-content-between">
                            <button type="button" className="btn btn-light" onClick={() => onClose(null)}>
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateCourseForm;
