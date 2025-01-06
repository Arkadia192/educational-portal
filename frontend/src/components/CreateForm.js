import React, { useState } from 'react';

const CreateForm = ({ title, apiCreateFunction, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    apiCreateFunction({ name, description })
      .then(() => {
        onClose(); // Close the modal after successful creation
      })
      .catch((error) => {
        console.error("Error creating item:", error);
      });
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h3>{`Create ${title}`}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
