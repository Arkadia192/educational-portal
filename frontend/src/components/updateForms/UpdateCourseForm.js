import React, { useState } from "react";
import { updateCourse } from "../../services/api";

const UpdateCourseForm = ({ course, onClose }) => {
    const [name, setName] = useState(course.name);
    const [description, setDescription] = useState(course.description);
    const [creditHours, setCreditHours] = useState(course.creditHours);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedCourse = {
            ...course,
            name,
            description,
            creditHours: parseInt(creditHours, 10) || 1, // Ensure it's a number
        };

        updateCourse(updatedCourse)
            .then((response) => {
                onClose(response.data); // Close modal and send updated course
            })
            .catch((error) => console.error("Error updating course:", error));
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Update Course</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Course Name</label>
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
                    <div className="mb-3">
                        <label className="form-label">Credit Hours</label>
                        <input
                            type="number"
                            className="form-control"
                            value={creditHours}
                            onChange={(e) => setCreditHours(e.target.value)}
                            required
                            min="1"
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

export default UpdateCourseForm;
