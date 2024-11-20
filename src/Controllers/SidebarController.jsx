import React from "react";
import Sidebar from "../Views/Sidebar";
import { fetchTasksByQuery } from "../Models/TaskModel";

const SidebarController = ({ setChanged }) => {
  return <Sidebar setChanged={setChanged} />;
};

export const handleSearch = (query) => {
  fetchTasksByQuery(query);
};
export default SidebarController;
