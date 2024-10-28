import React, { useState } from "react";
import { createNewTask } from "../Controllers/TaskFormController";

const TaskForm = ({ onSubmit, setChanged }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  console.log(setChanged);
  const handleClick = () => {
    console.log("click");
    setChanged(Math.random());
    onSubmit(name, description, date);
  };
  return (
    <div className="task-input-form">
      <label htmlFor="name"></label>
      <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
      <label htmlFor="desc"></label>
      <input
        type="text"
        id="desc"
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="date"></label>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default TaskForm;
