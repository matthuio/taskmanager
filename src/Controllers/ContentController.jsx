import React from "react";
import Content from "../Views/Content";
import { fetchTasks } from "../Models/TaskModel";

const ContentController = () => {
  return <Content />;
};

export const getTasks = () => {
  const data = fetchTasks();
  return data;
};

export default ContentController;
