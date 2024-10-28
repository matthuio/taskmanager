import React from "react";
import { getTasks } from "../Controllers/ContentController";
import TaskCard from "./TaskCard";
import TaskCardController from "../Controllers/TaskCardController";
import SidebarTaskController from "../Controllers/SidebarTaskController";
import DisplayTaskForm from "../Controllers/TaskFormController";

const Content = ({ changed }) => {
  return (
    <div className="content">
      <div>
        <h1>Content</h1>
      </div>
      <div className="task-general">
        <div>
          <TaskCardController />
        </div>
        <DisplayTaskForm />
      </div>
    </div>
  );
};

export default Content;
