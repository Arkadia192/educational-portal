import React from "react";

const DetailModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Details</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DetailModal;
