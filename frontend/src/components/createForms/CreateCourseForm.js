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
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>Create Course</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Course Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Credit Hours</label>
                        <input type="number" className="form-control" value={creditHours} onChange={(e) => setCreditHours(e.target.value)} required min="1" />
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

export default CreateCourseForm;
