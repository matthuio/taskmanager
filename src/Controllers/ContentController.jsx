import React from "react";
import Content from "../Views/Content";
import { fetchTasks } from "../Models/TaskModel";

const ContentController = ({ isChanged, setChanged }) => {
  return <Content isChanged={isChanged} setChanged={setChanged} />;
};

export const getTasks = () => {
  const data = fetchTasks();
  return data;
};

export default ContentController;
