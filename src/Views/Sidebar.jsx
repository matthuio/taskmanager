import React from "react";
import DisplayTaskForm from "../Controllers/TaskFormController";
import TaskCardController from "../Controllers/TaskCardController";
import SidebarTaskController from "../Controllers/SidebarTaskController";
import { CiSearch, CiCalendarDate } from "react-icons/ci";
import { IoTodayOutline } from "react-icons/io5";

const Sidebar = ({ setChanged, tasks }) => {
  return (
    <div className="sidebar">
      <div className="sidebar_user">
        <img src="logo.png" alt="Logo" />
        <p>Name</p>
      </div>
      <div className="sidebar_menu">
        <ul>
          <DisplayTaskForm setChanged={setChanged} />
        </ul>
        <ul>
          <CiSearch />
          <input type="text" placeholder="search" className="sidebar-search" />
        </ul>
        <ul>
          <IoTodayOutline /> Today
        </ul>
        <ul>
          <CiCalendarDate /> Upcoming
        </ul>
      </div>
      <div className="sidebar_projects">
        <h2> My Projects</h2>
        <SidebarTaskController />
      </div>
    </div>
  );
};

export default Sidebar;
