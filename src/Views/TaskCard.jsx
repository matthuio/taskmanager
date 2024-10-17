import React, { useState } from "react";
import { getTasks } from "../Controllers/ContentController";
import { handleUpdate } from "../Controllers/TaskCardController";

const TaskCard = ({ tasks, setChanged }) => {
  const [t, setT] = useState("");
  const handleClick = () => {
    console.log(t);
    handleUpdate(t);
  };
  return tasks.map((task, index) => (
    <div className="task-container" key={index}>
      <p>
        {" "}
        <input
          type="radio"
          onMouseDown={() => setT(task.description)}
          onMouseUp={() => setChanged(Math.random())}
          onClick={handleClick}
        />
        {task.description}
      </p>
      <p>{task.due_date}</p>
    </div>
  ));
};

export default TaskCard;
