import React from "react";
import { getTasks } from "../Controllers/ContentController";
import TaskCard from "./TaskCard";
import TaskCardController from "../Controllers/TaskCardController";

const Content = () => {
  return (
    <div className="content">
      <div>
        <h1>Content</h1>
      </div>
      <div className="date">
        <span>Date</span>
      </div>
      <div className="task-general">
        <div>
          <TaskCardController />
        </div>
        <button className="button-general">Add Task</button>
      </div>
    </div>
  );
};

export default Content;
