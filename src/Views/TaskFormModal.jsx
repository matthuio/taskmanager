import React from "react";
import TaskForm from "./TaskForm"; // Import your TaskForm
import "../Views/Modal.css";

const TaskFormModal = ({ isOpen, onClose, onSubmit, setChanged }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <TaskForm onSubmit={onSubmit} setChanged={setChanged} />
      </div>
    </div>
  );
};

export default TaskFormModal;
