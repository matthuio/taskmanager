import React, { useEffect, useState } from "react";
import TaskForm from "../Views/TaskForm";
import { makeTask } from "../Models/TaskFormModel";
import TaskFormModal from "../Views/TaskFormModal";
import TaskCardController from "./TaskCardController";

const DisplayTaskForm = ({ setChanged }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (name, desc, date) => {
    console.log(name, desc, date);
    makeTask(name, desc, date);
    handleCloseModal(); // Close the modal after submission
  };
  return (
    <div>
      <button onClick={handleOpenModal}>Add Task</button>
      <TaskFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        setChanged={setChanged}
      />
    </div>
  );
};

export default DisplayTaskForm;
