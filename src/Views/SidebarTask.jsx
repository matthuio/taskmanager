import React, { useState } from "react";
import { getTasks } from "../Controllers/ContentController";
import { handleUpdate } from "../Controllers/TaskCardController";
import { CiHashtag } from "react-icons/ci";

const SidebarTask = ({ tasks, setChanged }) => {
  const [t, setT] = useState("");
  const handleClick = () => {
    console.log(t);
    handleUpdate(t);
  };
  return tasks.map((task, index) => (
    <div className="sidebar-task" key={index}>
      <ul>
        <CiHashtag /> {task.description}
      </ul>
    </div>
  ));
};

export default SidebarTask;
