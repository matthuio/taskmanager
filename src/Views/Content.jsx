import React from "react";
import { getTasks } from "../Controllers/ContentController";
import TaskCard from "./TaskCard";
import TaskCardController from "../Controllers/TaskCardController";
import SidebarTaskController from "../Controllers/SidebarTaskController";
import DisplayTaskForm from "../Controllers/TaskFormController";

const Content = ({ isChanged, setChanged }) => {
  return (
    <div className="content">
      <div>
        <h1>Content</h1>
      </div>
      <div className="task-general">
        <div>
          <TaskCardController isChanged={isChanged} />
        </div>
        <DisplayTaskForm setChanged={setChanged} />
      </div>
    </div>
  );
};

export default Content;
