import React, { useState } from "react";
import DisplayTaskForm from "../Controllers/TaskFormController";
import TaskCardController, {
  getTaskToday,
} from "../Controllers/TaskCardController";
import SidebarTaskController from "../Controllers/SidebarTaskController";
import { CiSearch, CiCalendarDate } from "react-icons/ci";
import { IoTodayOutline } from "react-icons/io5";
import { handleSearch } from "../Controllers/SidebarController";

const Sidebar = ({ setChanged, tasks }) => {
  const [query, setQuery] = useState("");
  const handleClick = () => {
    console.log("clicked");
    setChanged("String");
    // getTaskToday();
  };
  const handleUpcoming = () => {
    setChanged(2);
  };
  const handleSubmit = (e) => {
    if (e == "Enter") {
      setChanged(query);
    }
  };
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
          <input
            type="text"
            placeholder="search"
            className="sidebar-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => handleSubmit(e.key)}
          />
        </ul>
        <ul onClick={handleClick}>
          <IoTodayOutline /> Today
        </ul>
        <ul onClick={handleUpcoming}>
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
